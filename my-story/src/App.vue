<template>
  <div id='app'>
    <!-- <NavBar/> -->
    <Header/>
    <HelloWorld/>
    <HelloWorld/>
    <HelloWorld/>
    <div id='who'> scroll here </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import NavBar from './components/NavBar'
import Header from './components/Header'
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
    HelloWorld,
    Header
  }
}
</script>

<style>
#app {
  font-family: "Courier New", Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #22223b;
}
h1, h2 {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: bold;
}
h1 {
  font-size: 5rem;
}
h2 {
  font-size: 4.2rem;
}
h3 {
  font-size: 2.1rem;
}
a {
  color: #4a4e69;
}
</style>
