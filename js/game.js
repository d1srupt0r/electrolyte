let keyboard = require('./controls.js')

let canvas = document.getElementById('game')
let ctx = canvas.getContext('2d')

/*
 ToDO: add inheritance; possibly an object class that both the ball and paddle can use so
       that draw and step can be called inheritance a consitant manor regardless of what
       type of element is using those events
*/

function Ball (x, y, size, speed) {
  this.x = x
  this.y = y
  this.size = size
  this.speed = speed
  this.dx = speed
  this.dy = -speed
  this.step = () => {
    if (this.x + this.dx > canvas.width - this.size || this.x + this.dx < this.size) {
      this.dx = -this.dx
    }
    if (this.y + this.dy < this.size) {
      this.dy = -this.dy
    } else if (this.y + this.dy > canvas.height - this.size) {
      if (this.x > paddle.x && this.x < paddle.x + paddle.width) {
        this.dy = -this.dy
      } else {
        // ToDo: set a boolean and draw text possibly with countdown as well
        /* ctx.font = '16pt Consolas'
        ctx.fillText('Game Over!', 0, 0) */
        this.x = canvas.width / 2
        this.y = canvas.height / 2
      }
    }
    this.x += this.dx
    this.y += this.dy
  }
  this.draw = () => {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = '#09d'
    ctx.fill()
    ctx.closePath()
  }
}

function Paddle (x, y, width, height) {
  this.x = x
  this.y = y
  this.width = width
  this.height = height
  this.step = () => {
    if (keyboard.keyboardCheck(keyboard.vk.left) && this.x > 0) {
      this.x -= 7
    } else if (keyboard.keyboardCheck(keyboard.vk.right) && this.x < canvas.width - this.width) {
      this.x += 7
    }
  }
  this.draw = () => {
    ctx.beginPath()
    ctx.rect(this.x, canvas.height - this.height, this.width, this.height)
    ctx.fillStyle = '#09d'
    ctx.fill()
    ctx.closePath()
  }
}

// GAME
let ball = new Ball(canvas.width / 2, canvas.height / 2, 10, 2)
let paddle = new Paddle((canvas.width - 75) / 2, canvas.height - 10, 75, 10)
function Draw () {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ball.step()
  ball.draw()
  paddle.step()
  paddle.draw()
}
setInterval(Draw, 10)
