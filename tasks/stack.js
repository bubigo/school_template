class Stack {
  constructor(maxLength) {
    this.arr = []
    this.maxLength = maxLength
  }

  isEmpty() {
    if (this.arr.length === 0) {
      console.log('stack is empty')
    } else {
      console.log('stack is not empty')
    }
    return this
  }

  isFull() {
    if (this.maxLength <= this.arr.length) {
      console.log('stack is full')
    } else {
      console.log('stack is not full yet ')
    }
    return this
  }

  push(...item) {
    this.arr.push(...item)
    return this
  }

  pop() {
    this.arr.pop()
    return this
  }

  get() {
    console.log(this.arr)
  }
}

const stack = new Stack(3)
stack.isFull().get()
