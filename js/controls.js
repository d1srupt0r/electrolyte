let keys = []

document.addEventListener('keydown', (e) => { keys[e.keyCode] = true })
document.addEventListener('keyup', (e) => { keys[e.keyCode] = false })

exports.vk = Object.freeze({ left: 37, right: 39 })
exports.keyboardCheck = (k) => { return keys[k] }
