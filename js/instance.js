exports.Initialize = (canvas, controls, ctx) => {
  this.canvas = canvas
  this.controls = controls
  this.ctx = ctx
}
exports.Create = (x, y, obj) => {
  this.obj = obj
  this.obj.x = x
  this.obj.y = y
  return obj
}
exports.Collision = () => { }
exports.Step = () => { this.obj.Step() }
exports.Draw = () => { this.obj.Draw() }
