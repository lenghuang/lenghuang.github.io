<template>
  <div class="center">
    <div class="row">
      <h1> Len Huang </h1>
      <h3>
          <a href="#" v-scroll-to="'#who'">Who</a> |
          <a href="#" v-scroll-to="'#what'">What</a> |
          <a href="#" v-scroll-to="'#when'">When</a> |
          <a href="#" v-scroll-to="'#where'">Where</a> |
          <a href="#" v-scroll-to="'#why'">Why</a>
      </h3>
    </div>
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
