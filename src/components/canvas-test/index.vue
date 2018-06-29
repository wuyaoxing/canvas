<template>
    <div class="canvas-brush">
        <p>画笔颜色： <el-color-picker v-model="color"></el-color-picker></p>
        <p>画笔粗细： <el-input-number v-model="num" :step="4" :max="20" size="small"></el-input-number></p>
        <p>
            <el-button type="primary" @click="saveCanvasToImage">save</el-button>
            <el-button @click="clearCanvas">clear</el-button>
            <el-button type="danger" @click="clearAll">clear all</el-button>
        </p>
        <canvas ref="canvas" @mousedown="mouseDownEvent" @mouseup="mouseUpEvent" @mousemove="mouseMoveEvent" @touchstart="mouseDownEvent" @touchend="mouseUpEvent" @touchmove="mouseMoveEvent">sorry, your broswer does not support html5 canvas!</canvas>
        <div>
            <img v-for="item in canvasImgPath" :key="item" :src="item">
        </div>
    </div>
</template>
<script>
export default {
  name: "canvas-brush",
  data() {
    return {
      context: null,
      color: "#ff0000",
      num: 2,
      isMouseDown: false,
      array_paint: [],
      canvasImgPath: []
    };
  },
  methods: {
    initCanvasStyle() {
      this.canvas = this.$refs.canvas;
      const { canvas } = this;
      const { clientWidth, clientHeight } = this.$el;
      canvas.width = clientWidth;
      canvas.height = clientHeight;
      canvas.style.background = "#f3f4f5";
      this.context = canvas.getContext("2d");
    },
    setCanvasProperties() {
      const { context } = this;
      context.strokeStyle = this.color;
      context.lineWidth = this.num;
      context.lineJoin = "round";
      context.lineCap = "round";
    },
    paint() {
      const { context, array_paint } = this;
      context.beginPath();
      context.moveTo(array_paint[0][0], array_paint[0][1]);
      if (array_paint.length == 1) {
        context.lineTo(array_paint[0][0] + 1, array_paint[0][1] + 1);
      } else {
        let i = 1;
        for (i in array_paint) {
          context.lineTo(array_paint[i][0], array_paint[i][1]);
          context.moveTo(array_paint[i][0], array_paint[i][1]);
        }
      }
      context.closePath();
      context.stroke();
    },
    mouseDownEvent(e) {
      e.preventDefault();
      const { canvas } = this;
      const event = e.targetTouches ? e.targetTouches[0] : e;
      this.isMouseDown = true;
      this.setCanvasProperties();
      this.array_paint.push([
        event.clientX - canvas.offsetLeft,
        event.clientY - canvas.offsetTop
      ]);
      this.paint();
    },
    mouseUpEvent(e) {
      e.preventDefault();
      this.isMouseDown = false;
      this.array_paint = [];
    },
    mouseMoveEvent(e) {
      e.preventDefault();
      const { canvas } = this;
      const event = e.targetTouches ? e.targetTouches[0] : e;
      if (!this.isMouseDown) return;
      this.array_paint.push([
        event.clientX - canvas.offsetLeft,
        event.clientY - canvas.offsetTop
      ]);
      this.paint();
    },
    saveCanvasToImage() {
      const { canvas } = this;
      //   const image = new Image();
      //   image.src = canvas.toDataURL("image/png");
      this.canvasImgPath.unshift(canvas.toDataURL("image/png"));
    },
    clearCanvas() {
      const { canvas } = this;
      this.context.clearRect(0, 0, canvas.width, canvas.height);
    },
    clearAll() {
      this.clearCanvas();
      this.canvasImgPath = [];
    },
    draw() {
      const { context } = this;

      // const lgrd = context.createLinearGradient(100, 300, 700, 300);
      // const rgrd = context.createRadialGradient(200,200,30,200,200,100)

      // lgrd.addColorStop(0, "olive");
      // lgrd.addColorStop(0.25, "maroon");
      // lgrd.addColorStop(0.5, "aqua");
      // lgrd.addColorStop(0.75, "fuchsia");
      // lgrd.addColorStop(0.25, "teal");

      // rgrd.addColorStop(0, "olive");
      // rgrd.addColorStop(0.25, "maroon");
      // rgrd.addColorStop(0.5, "aqua");
      // rgrd.addColorStop(0.75, "fuchsia");
      // rgrd.addColorStop(0.25, "teal");

      // context.fillStyle = rgrd;
      // context.strokeStyle = lgrd;

      // context.strokeRect(200, 50, 300, 50);
      // context.strokeRect(200, 150, 450, 50);

      // context.fillRect(20, 200, 400, 20);
      // context.fillRect(10,10,400,200)

      context.arc(100, 100, 30, 0, Math.PI, true);
      // for (var i = 1; i <= 4; i++) {
      //   for (var j = 1; j <= 4; j++) {
      //     this.drawRoundRect(
      //       context,
      //       200 + 16 * i + 80 * (i - 1),
      //       100 + 16 * j + 80 * (j - 1),
      //       80,
      //       80,
      //       5
      //     );
      //     context.fillStyle = "#CCBFB4";
      //     context.strokeStyle = "#0078AA";
      //     context.stroke();
      //     context.fill();
      //   }
      // }
      this.drawRoundRect(context, 100, 100, 200, 200, 50);
      context.stroke();
    },
    drawRoundRect(context, x, y, width, height, radius) {
      context.beginPath();
      context.arc(x + radius, y + radius, radius, Math.PI, Math.PI * 3 / 2);
      context.lineTo(width - radius + x, y);
      context.arc(
        width - radius + x,
        radius + y,
        radius,
        Math.PI * 3 / 2,
        Math.PI * 2
      );
      context.lineTo(width + x, height + y - radius);
      context.arc(
        width - radius + x,
        height - radius + y,
        radius,
        0,
        Math.PI * 1 / 2
      );
      context.lineTo(radius + x, height + y);
      context.arc(
        radius + x,
        height - radius + y,
        radius,
        Math.PI * 1 / 2,
        Math.PI
      );
      context.closePath();
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initCanvasStyle();
      this.draw();
    });
  }
};
</script>
<style>
img {
  border: 1px solid #ddd;
}
</style>
