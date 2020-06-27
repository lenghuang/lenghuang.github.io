<template>
  <div class="center">
    <h1> Len Huang. </h1>
    <h3>
        <a href="#" v-scroll-to="'#who'">Who</a> |
        <a href="#" v-scroll-to="'#'">What</a> |
        <a href="#" v-scroll-to="'#'">When</a> |
        <a href="#" v-scroll-to="'#'">Where</a> |
        <a href="#" v-scroll-to="'#'">Why</a>
    </h3>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
