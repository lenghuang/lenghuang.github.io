<template>
  <div id='app'>
    <!-- <NavBar/> -->
    <Header/>
    <Who/>
    <What/>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import Header from './components/Header'
import Who from './components/Who'
import What from './components/What'

export default {
  name: 'App',
  components: {
    NavBar,
    Header,
    Who,
    What
  }
}
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1b263b;
  min-width: 300px;
}
h1, h2 {
  font-weight: bold;
}
a {
  color: #0d1b2a;
}
.row {
  padding-left: 2vw;
  padding-right: 2vw;
}
</style>
