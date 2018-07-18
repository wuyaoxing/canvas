<template>
  <div id="app">
    App
    <p><router-link :to="item.path" v-for="item in routes" :key="item.name" v-if="item.name !== $route.name">{{item.name}}</router-link></p>
    <div class="app-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { canvasRoutes } from "./router/routes";

export default {
  name: "app",
  computed: {
    routes() {
      return canvasRoutes;
    }
  }
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 60px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
}
.app-content {
  display: flex;
  flex: 1;
}
</style>
