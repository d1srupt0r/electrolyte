exports.Create = () => {
}
exports.Draw = () => {
  this.ctx.beginPath()
  this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
  this.ctx.fillStyle = '#9d0'
  this.ctx.fill()
  this.ctx.closePath()
}
exports.Step = () => {
  // right wall
  if (this.x + this.dx > this.canvas.width - this.size || this.x + this.dx < this.size) {
    this.dx = -this.dx
  }
  // top wall
  if (this.y + this.dy < this.size) {
    this.dy = -this.dy
    // floor
  } else if (this.y + this.dy > this.canvas.height - this.size) {
    // hit paddle
    /* if (this.x > paddle.x && this.x < paddle.x + paddle.width) {
      this.dy = -this.dy
    } else {
      // ToDo: set a boolean and draw text possibly with countdown as well
      this.x = this.canvas.width / 2
      this.y = this.canvas.height / 2
    } */
  }
  this.x += this.dx
  this.y += this.dy
}
