<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
export default {
  name: "App",
};
</script>
<style scoped>
.container {
  margin: 0 auto;
  height: 100%;
}
</style>