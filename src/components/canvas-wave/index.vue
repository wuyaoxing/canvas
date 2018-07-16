<template>
    <div class="canvas-wave" @click="init">
        <canvas ref="canvas"></canvas>
    </div>
</template>
<script>
import Wave from "./Wave";

export default {
  name: "canvas-wave",
  data() {
    return {
      canvas: null,
      context: null,
      waves: []
    };
  },
  methods: {
    initCanvasStyle() {
      this.canvas = this.$refs.canvas;
      const { canvas } = this;
      const { clientWidth, clientHeight } = this.$el;
      canvas.width = clientWidth;
      canvas.height = clientHeight;
      canvas.style.background = "#333";
      this.context = canvas.getContext("2d");
    },
    valueMapping(x, inMin, inMax, outMin, outMax) {
      return (x - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    },
    init() {
      const gradients = [
        ["#6e45e2", "#88d3ce"],
        ["#de6262", "#ffb88c"],
        ["#64b3f4", "#c2e59c"],
        ["#0fd850", "#f9f047"],
        ["#007adf", "#00ecbc"],
        ["#B6CEE8", "#F578DC"],
        ["#9be15d", "#00e3ae"]
      ];
      const { canvas } = this;
      this.waves = [];
      for (let i = 0; i < 5; i++) {
        const [start, stop] = gradients[
          Math.floor(Math.random() * gradients.length)
        ];
        this.waves.push(
          new Wave(canvas, {
            start,
            stop,
            lineWidth: 1,
            xSpeed: this.valueMapping(Math.random(), 0, 1, -0.05, -0.08),
            amplitude: this.valueMapping(Math.random(), 0, 1, 0.05, 0.5),
            offset: Math.random() * 100
          })
        );
      }
    },
    run() {
      const { canvas, context } = this;
      const $this = this
      function run() {
        requestAnimationFrame(run);
        context.clearRect(0, 0, canvas.width, canvas.height);
        $this.waves.forEach(wave => {
          wave.draw(context);
        });
      }
      run();
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initCanvasStyle();
      this.init();
      this.run();
    });
  }
};
</script>
