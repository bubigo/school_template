// eslint-disable-next-line import/prefer-default-export
export function Builder(value) {
  this.value = value
}
Builder.prototype.get = function get() {
  console.log(this.value)
}
