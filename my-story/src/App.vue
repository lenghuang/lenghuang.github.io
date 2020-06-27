<template>
  <div id='app'>
    <NavBar/>
    <HelloWorld/>
    <HelloWorld/>
    <HelloWorld/>
    <HelloWorld/>
    <div id='who'> scroll here </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import NavBar from './components/NavBar'
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

// You can also pass in the default options
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 1000,
  easing: 'ease-out',
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

export default {
  name: 'App',
  components: {
    NavBar,
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #22223b;
}
</style>
