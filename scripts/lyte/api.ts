namespace lyte {
}

const VirtualKeys = Object.freeze({ left: 37, right: 39 })

/*
let KeyboardKeys = []

// constructor
exports.init = () => {
  document.addEventListener('keydown', (e) => { KeyboardKeys[e.keyCode] = true })
  document.addEventListener('keyup', (e) => { KeyboardKeys[e.keyCode] = false })
}

// variables
exports.keyboard_keys = KeyboardKeys
exports.vk = VirtualKeys
// methods
exports.keyboard_check = (key) => {
  return KeyboardKeys[key]
}
exports.instance_create = (x, y, canvas, obj) => {
  console.log(`created:${obj}`)
  obj.create()
  return {
    object: obj,
    canvas: canvas,
    x: x,
    y: y
  }
}
*/