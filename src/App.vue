<template>
  <div id="app">
    App
    <p><router-link :to="item.path" v-for="item in routes" :key="item.name" v-if="item.name !== $route.name">{{item.name}}</router-link></p>
    <router-view></router-view>
  </div>
</template>

<script>
import { canvasRoutes } from './router/routes'

export default {
  name: 'app',
  computed: {
    routes() {
      return canvasRoutes
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
