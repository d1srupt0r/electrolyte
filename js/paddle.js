exports.Create = () => {
}
exports.Draw = () => {
  this.ctx.beginPath()
  this.ctx.rect(this.x, this.y, this.width, this.height)
  this.ctx.fillStyle = '#9d0'
  this.ctx.fill()
  this.ctx.closePath()
}
exports.Step = (canvas, controls) => {
  if (controls.keyboardCheck(controls.vk.left) && this.x > 0) {
    this.x -= 7
  } else if (controls.keyboardCheck(controls.vk.right) && this.x < canvas.width - this.width) {
    this.x += 7
  }
}
