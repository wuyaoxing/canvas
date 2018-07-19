export default class Canvas {
    constructor(canvas, options) {
        this.canvas = canvas
        this.options = options
        this.ctx = canvas.getContext('2d')
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    initCanvas() {
        const { canvas, options } = this
        canvas.width = options.width
        canvas.height = options.height
        console.log('Canvas init:', new Date())
    }
}
