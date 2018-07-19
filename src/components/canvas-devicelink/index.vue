<template>
    <div class="canvas-devicelink">
        <canvas ref="canvas"></canvas>
    </div>
</template>
<script>
import Devicelink from './Devicelink'

export default {
  name: "canvas-devicelink",
  data() {
      return {
          Devicelink: null
      }
  },
  methods: {
    init() {
      const canvas = this.$refs.canvas;
      const { clientWidth, clientHeight } = this.$el;
      canvas.style.background = "#ddd";
      canvas.style.border = "1px solid #333";

      this.Devicelink = new Devicelink(canvas, {
          width: clientWidth,
          height: clientHeight
      })
      this.Devicelink.init()
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },
  destroyed() {
      this.Devicelink.destroyed()
  }
};
</script>
<style>
.canvas-devicelink {
    flex: 1;
    overflow: hidden;
}
</style>

