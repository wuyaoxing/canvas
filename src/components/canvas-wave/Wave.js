
export default class Wave {
    constructor(canvas, options) {
        this.canvas = canvas
        this.options = options
        this.xMove = this.options.offset
        this.xSpeed = this.options.xSpeed
        this.width = this.canvas.width
        this.height = this.canvas.height
        this.amplitude = this.canvas.height * this.options.amplitude
    }
    draw(context) {
        context.beginPath()
        this.xMove += this.xSpeed
        context.moveTo(0, this.height / 2)
        const grad = context.createLinearGradient(0, 0, this.width, 0)
        grad.addColorStop(0, this.options.start)
        grad.addColorStop(1, this.options.stop)
        context.strokeStyle = grad
        context.lineWidth = this.options.lineWidth

        for(let x = 0; x < this.width; x++) {
            const scale = (Math.sin(x / this.width * Math.PI * 2 - Math.PI * 0.5) + 1) * 0.5
            const y = Math.sin(x * 0.02 + this.xMove) * this.amplitude * scale + this.height / 2
            context.lineTo(x, y)
        }

        context.stroke()
        context.closePath()
    }
}

