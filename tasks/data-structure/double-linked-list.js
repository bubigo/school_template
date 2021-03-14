// eslint-disable-next-line import/extensions
import { Node } from './class-node.js'

class DoubleLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  insert(value) {
    const node = new Node(value)
    if (!this.head && !this.tail) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.previous = this.tail
      this.tail = node
    }
    return this
  }

  getHead() {
    return this.head
  }

  getTail() {
    return this.tail
  }

  traverse(order = true) {
    if (order) {
      this.traverseRecursiveTrue(this.head)
    } else {
      this.traverseRecursiveFalse(this.tail)
    }
  }

  traverseRecursiveTrue(node) {
    if (node.next === null) {
      console.log(node.data)
    } else {
      console.log(node.data)
      this.traverseRecursiveTrue(node.next)
    }
  }

  traverseRecursiveFalse(node) {
    if (node.previous === null) {
      console.log(node.data)
    } else {
      console.log(node.data)
      this.traverseRecursiveFalse(node.previous)
    }
  }

  getNode(value) {
    return this.findRecursive(value, this.head)
  }

  findRecursive(value, node) {
    if (value === node.data) {
      return node
    }
    if (node.next === null) {
      return null
    }
    return this.findRecursive(value, node.next)
  }

  addAfter(value, parentValue) {
    const parentNode = this.getNode(parentValue)
    const newNode = new Node(value)
    if (parentNode !== null) {
      if (parentNode.next !== null) {
        parentNode.next.previous = newNode
        newNode.next = parentNode.next
      } else {
        this.tail = newNode
      }

      newNode.previous = parentNode
      parentNode.next = newNode
    }

    return this
  }

  delete(value) {
    const currNode = this.getNode(value)
    if (currNode !== null) {
      if (currNode.next !== null) {
        currNode.next.previous = currNode.previous
      } else {
        currNode.next = null
        this.tail = currNode.previous
      }
      if (currNode.previous !== null) {
        currNode.previous.next = currNode.next
      } else {
        currNode.previous = null
        this.head = currNode.next
      }
    }
    return this
  }

  isExist(value) {
    return this.getNode(value) !== null
  }
}
const dll = new DoubleLinkedList()
dll.insert('one').insert('two').insert('tree').addAfter('pok', 'two')
  .traverse()
