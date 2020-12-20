<template>
  <article class="post-card">
    <img :src="news.cover" alt="news cover" class="cover" />
    <div class="content">
      <p>{{ news.date }}</p>
      <p>{{ news.title }}</p>
    </div>
  </article>
</template>
<script lang="ts">
export default {
  name: "Article",
  props: ["news"],
};
</script>
<style scoped>
.post-card {
  padding-bottom: 0.8rem;
  margin-bottom: 0.8rem;
  border-bottom: 1px solid #ccc;
}
.cover {
  width: 100%;
  height: 190px;
  background: #c5d2d9 no-repeat 50%;
  background-size: cover;
  border-radius: 0.12rem;
}
.content > p {
  margin: 0;
  color: #666;
  font-size: 0.6rem;
}
.content > p:last-child {
  margin-top: 0.3rem;
  font-size: 0.8rem;
}
</style>