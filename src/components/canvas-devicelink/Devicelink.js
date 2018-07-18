import Canvas from './Canvas'

function localeValue(val) {
    return val.slice(0, 10)
}

export default class Devicelink extends Canvas {
    constructor(canvas, options) {
        super(canvas)
        this.options = options

        this.stage = {
            width: 0,
            height: 0,
            centerX: 0, // 舞台中心点坐标
            centerY: 0, // 舞台中心点坐标
        }
        this.icons = {
            // 链接正常
            NORMAL: {
                cache: null,
                width: 24,
                height: 24
            },
            // 链接异常
            ABNORMAL: {
                cache: null,
                width: 24,
                height: 24
            }
        }

        // 鼠标移动
        this.moveFlag = false
    }

    mouseDownEvent = event => {
        this.moveFlag = true
    }

    mouseUpEvent = evnet => {
        this.moveFlag = false
    }

    mouseMoveEvent = event => {
        if(!this.moveFlag) return
        const { stage } = this
        console.log(event, this)
        stage.centerX += event.movementX
        stage.centerY += event.movementY
    }

    mouseWheelEvent() {}

    initMouseEvent() {
        document.addEventListener('mousedown', this.mouseDownEvent, false)
        document.addEventListener('mouseup', this.mouseUpEvent, false)
        document.addEventListener('mousemove', this.mouseMoveEvent, false)
    }

    destroyMouseEvent() {
        document.removeEventListener('mousedown', this.mouseDownEvent, false)
        document.removeEventListener('mouseup', this.mouseUpEvent, false)
        document.removeEventListener('mousemove', this.mouseMoveEvent, false)
    }

    drawImage() {
        for (const key in this.icons) {
            const icon = this.icons[key]
            this.ctx.drawImage(icon.cache, 0, 0, icon.width, icon.height)
        }
    }

    drawCentralServer(x, y) {
        const centralServer = {
            width: 150, // 中心服务宽
            height: 60, // 中心服务高
            marginLeft: 100, // 左间距
            marginTop: 50, // 上间距
            marginRight: 100, // 右间距
            marginBottom: 50, // 下间距
            centralServerBackground: '#2093fe',
            centralServerFontColor: '#fff',
            fontSize: 16,
            centralServerFontStyle: 'px PingFang ExtraLight',
            centralServerFontContent: localeValue('device_manager_dmisService'),
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(210, 210, 210, 0.9)',
            shadowBlur: 26,
            border: 1, // 边框宽度
            borderColor: '#dadada', // 边框颜色
            textAlign: 'center', // 卡片字体横向剧中
            textBaseline: 'middle' // 卡片字体纵向剧中
        }
        const { ctx } = this

        ctx.shadowColor = centralServer.shadowColor
        ctx.shadowBlur = centralServer.shadowBlur
        ctx.shadowOffsetX = centralServer.shadowOffsetX
        ctx.shadowOffsetY = centralServer.shadowOffsetY

        ctx.fillStyle = centralServer.centralServerBackground
        ctx.fillRect(x - centralServer.width / 2, y - centralServer.height / 2, centralServer.width, centralServer.height)

        ctx.fillStyle = centralServer.centralServerFontColor
        ctx.font = centralServer.fontSize + centralServer.centralServerFontStyle
        ctx.textBaseline = centralServer.textBaseline
        ctx.textAlign = centralServer.textAlign
        ctx.shadowColor = ''
        ctx.shadowBlur = null
        ctx.shadowOffsetX = null
        ctx.shadowOffsetY = null
        ctx.fillText(centralServer.centralServerFontContent, x, y)
    }

    draw() {
        this.drawCentralServer(this.stage.centerX, this.stage.centerY)
        // this.drawImage()
    }

    initIcon() {
        const images = {
            NORMAL: require('./images/equipment-state-normal.png'),
            ABNORMAL: require('./images/equipment-state-abnormal.png')
        }

        for (const key in images) {
            const img = new Image()
            img.src = images[key]
            img.onload = () => {
                this.icons[key].cache = img
            }
        }
    }

    initStage() {
        const { canvas, stage, options } = this
        stage.width = options.width
        stage.height = options.height
        stage.centerX = stage.width / 2
        stage.centerY = stage.height / 2
        canvas.width = stage.width
        canvas.height = stage.height
    }

    init() {
        // 加载图片icon
        this.initIcon()

        // 初始化鼠标事件
        this.initMouseEvent()

        // 初始化 stage
        this.initStage()

        const run = () => {
            requestAnimationFrame(run)
            this.clearCanvas()
            // 绘制
            this.draw()
        }
        run()

        console.log('Devicelink init:', this, new Date())
    }

    destroyed() {
        // 销毁鼠标事件
        this.destroyMouseEvent()
    }
}
