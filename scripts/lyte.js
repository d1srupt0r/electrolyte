const glob = require('glob')
const path = require('path')
// lyte modules
const controls = require('./lyte/controls.js')
const instance = require('./lyte/instance.js')

// constructor
exports.Fire = (canvas, gamespeed) => {
  this.canvas = canvas
  // hook keyboard listeners
  // document.addEventListener('keydown', (e) => { keys[e.keyCode] = true })
  // document.addEventListener('keyup', (e) => { keys[e.keyCode] = false })
  // run
  setInterval(Burn, gamespeed)
}

// main loop
function Burn () {
  // set 2d context
  var ctx = this.canvas.getContext('2d', { alpha: 1 })
  ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  // instance event life cycle
  /* instances.forEach(function (inst) {
    var obj = inst.obj
    obj.draw(ctx)
    obj.step()
  }, this) */
}

exports.Resize = (canvas, width, height) => {
  canvas.width = 640
  canvas.height = 480
  console.log(`canvas:${width}x${height}`)
}

exports.TreeView = (items) => {
  var tree = []
  items.forEach((item) => {
    glob(`./lyte/${item}/*.js`, 'w', (err, files) => {
      if (err) { throw err }
      files.forEach((f) => {
        tree.push(`o_${path.basename(f, '.js')}`)
      }, this)
    })
  })
  return tree
}

// aliases
exports.instance_create = (x, y, canvas, obj) => { return instance.create(x, y, canvas, obj) }
exports.keyboard_check = (key) => { return controls.keyboardCheck(key) }
exports.vk = controls.vk
