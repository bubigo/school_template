// eslint-disable-next-line import/extensions
import { Builder } from './builder.js'

class StringBuilder extends Builder {
  constructor(value = '') {
    super(value)
  }

  plus(...str) {
    this.value += [...str]
    return this
  }

  minus(n) {
    this.value = this.value.slice(0, -n)
    return this
  }

  multiply(int) {
    this.value = this.value.repeat(int)
    return this
  }

  divide(n) {
    const k = Math.floor(this.value.length / n)
    this.value = this.value.slice(0, k)
    return this
  }

  remove(str) {
    this.value = this.value.split(str).join('')
    return this
  }

  sub(from, n) {
    this.value = this.value.substring(from, from + n)
    return this
  }
}
const strBuilder = new StringBuilder('Hello')
strBuilder.plus(' all', '!')
  .minus(4).multiply(3)
  .divide(4)
  .remove('l')
  .sub(1, 1)
  .get()
