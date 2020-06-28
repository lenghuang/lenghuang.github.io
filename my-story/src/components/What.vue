<template>
  <div id="what">
    <div class="row">
      <h2>What I can do.</h2>
    </div>
    <div class="row center">
      From the Weight Room to VSCode, I've learned various skills and technologies.
      Some of these include...
      <a class="tooltipped" data-tooltip="I am a tooltip">
      <div class="icon-wrap">
        <div alt="gcp storage" class="icon-img gcp-storage" />
      </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'What'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon-img {
  height: 5rem;
  width: 5rem;
  background-size: contain;
}
.icon-wrap {
  display: inline-block;
  text-align: center;
  padding: 1rem;
}
.row {
  margin: 0 auto;
}
.gcp-storage{
  background-image: url("../assets/icons/gcp_storage.png");
}
</style>
