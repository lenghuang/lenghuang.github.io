<template>
  <div class="navbar-fixed">
    <nav>
      <div class="nav-wrapper">
        <a href="#" style="padding-left: 3rem;" class="brand-logo">Len Huang</a>
        <ul id="nav-mobile" style="padding-right: 3rem;" class="right hide-on-med-and-down">
          <li><a href="#" v-scroll-to="'#who'">Who</a></li>
          <li><a href="#">What</a></li>
          <li><a href="#">When</a></li>
          <li><a href="#">Where</a></li>
          <li><a href="#">Why</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  background-color: #c9ada7;
}
a {
  color: #4a4e69;
}
</style>
