// eslint-disable-next-line import/extensions
import { Builder } from './builder.js'

function IntBuilder(value = 0) {
  Builder.call(this, value)
}
IntBuilder.random = function random(min, max) {
  this.value = Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min)
  console.log(this.value)
}
IntBuilder.prototype = Object.create(Builder.prototype)
IntBuilder.prototype.divide = function divide(n) {
  this.value = (this.value / n).toFixed(0)
  return this
}
IntBuilder.prototype.multiply = function multiply(n) {
  this.value *= n
  return this
}
IntBuilder.prototype.plus = function plus(...n) {
  const addend = [...n].reduce((a, b) => a + b)
  this.value += addend
  return this
}
IntBuilder.prototype.minus = function minus(...n) {
  const subtrahend = [...n].reduce((a, b) => a + b)
  this.value -= subtrahend
  return this
}
IntBuilder.prototype.mod = function mod(n) {
  this.value %= n
  return this
}

IntBuilder.random(-10, 100)
const intBuilder = new IntBuilder(10)
intBuilder.plus(2, 3, 2)
  .minus(1, 2)
  .multiply(2)
  .divide(4)
  .mod(3)
  .get()
