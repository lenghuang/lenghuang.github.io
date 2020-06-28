<template>
  <div id="who">
    <div class="row">
      <h2>Who am I?</h2>
    </div>
    <div class="row center">
      <div class="headshot-img" alt="A picture of me"></div>
      <div class="container">
        Hi, I'm Len Huang, a sophomore at Carnegie Mellon University's
        School of Computer Science. I have a passion for designing products
        and applications, and exploring machine learning / data science, and
        functional programming. This is my website where I'll tell you my
        story with the 5 W's. My who, what, when, where and why. This is who I
        am, let's move on to...
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Who'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headshot-img {
  height: 20rem;
  width: 20rem;
  background-image: url("../assets/len.png");
  background-size: cover;
  border-radius: 50%;
  margin: 0 auto;
}
.flex {
  display: flex;
  align-items: center;
}
.row {
  margin: 0 auto;
}
</style>
