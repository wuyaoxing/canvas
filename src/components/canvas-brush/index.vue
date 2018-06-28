<template>
    <div class="canvas-brush">
        <p>画笔颜色： <el-color-picker v-model="color"></el-color-picker></p>
        <p>画笔粗细： <el-input-number v-model="num" :step="4" :max="20" size="small"></el-input-number></p>
        <p>
            <el-button type="primary" @click="saveCanvasToImage">save</el-button>
            <el-button @click="clearCanvas">clear</el-button>
            <el-button type="danger" @click="clearAll">clear all</el-button>
        </p>
        <canvas ref="canvas" @mousedown="mouseDownEvent" @mouseup="mouseUpEvent" @mousemove="mouseMoveEvent">sorry, your broswer does not support html5 canvas!</canvas>
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
    },
    paint(e, type) {
      const { canvas, context, array_paint } = this;
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
      this.isMouseDown = true;
      this.setCanvasProperties();
      this.array_paint.push([event.offsetX, event.offsetY]);
      this.paint(e, "down");
    },
    mouseUpEvent() {
      this.isMouseDown = false;
      this.array_paint = [];
    },
    mouseMoveEvent(e) {
      if (!this.isMouseDown) return;
      this.array_paint.push([event.offsetX, event.offsetY]);
      this.paint(e);
    },
    saveCanvasToImage() {
      const { canvas } = this;
    //   const image = new Image();
    //   image.src = canvas.toDataURL("image/png");
      this.canvasImgPath.unshift(canvas.toDataURL("image/png"))

    },
    clearCanvas() {
      const { canvas } = this;
      this.context.clearRect(0, 0, canvas.width, canvas.height);
    },
    clearAll() {
      this.clearCanvas()
      this.canvasImgPath = []
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initCanvasStyle();
    });
  }
};
</script>
<style>
img {
    border: 1px solid #ddd;
}
</style>
