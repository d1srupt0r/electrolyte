let instance = require('./instance.js')
let ball = require('./ball.js')
let instances = []
exports.Create = (canvas, controls) => {
  this.canvas = canvas
  this.controls = controls
  // create instances
  instances.push()
}
exports.Render = () => {
  // set 2d context
  var ctx = this.canvas.getContext('2d')
  ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  // render all instances
  instances.forEach(function (inst) {
    inst.Initialize(this.canvas, this.controls, ctx)
    inst.Create()
    inst.Step()
    inst.Draw()
  }, this)
}
