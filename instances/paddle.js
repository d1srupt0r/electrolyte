exports.create = () => {
  this.name = 'Paddle'
}
exports.draw = (ctx) => {
  ctx.beginPath()
  ctx.rect(this.x, this.y, this.width, this.height)
  ctx.fillStyle = '#9d0'
  ctx.fill()
  ctx.closePath()
}
exports.step = () => {
  if (this.controls.keyboardCheck(this.keys, this.controls.vk.left) && this.x > 0) {
    this.x -= 7
  } else if (this.controls.keyboardCheck(this.keys, this.controls.vk.right) && this.x < this.canvas.width - this.width) {
    this.x += 7
  }
}
