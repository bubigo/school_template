// eslint-disable-next-line import/prefer-default-export
export function Builder(value) {
  this.value = value ?? 0 ?? ''
}
Builder.prototype.get = function get() {
  console.log(this.value)
}
