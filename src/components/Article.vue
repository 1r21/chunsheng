<template>
  <article class="post-card">
    <img :src="place" alt="Fetch cover err" class="cover" ref="image" />
    <div class="content">
      <p>{{ news.date }}</p>
      <p>{{ news.title }}</p>
    </div>
  </article>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { News } from "@1r21/api-h5";

const places = [10, 102, 1004, 1016];
const rIndex = Math.floor(Math.random() * places.length);

const props = defineProps<{
  news: News
}>()

const place = ref(`./place/${places[rIndex]}.jpg`);
const image = ref<HTMLImageElement | null>(null);

onMounted(() => {
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // can visible
        if (entry.isIntersecting) {
          const lazyImage: Partial<HTMLImageElement> = entry.target;
          setTimeout(() => {
            if (/\place\/\d+\.jpg/.test(<string>lazyImage.src)) {
              lazyImage.src = props.news.cover;
            }
          }, 300);
        }
      });
    });
    if (image.value) {
      imageObserver.observe(image.value);
    }
  }
});
</script>

<style scoped>
.post-card {
  padding-bottom: 0.8rem;
  margin-bottom: 0.8rem;
  border-bottom: 1px solid #ccc;
}
.cover {
  display: inline-block;
  width: 100%;
  height: 190px;
  background: #c5d2d9 no-repeat 50%;
  background-size: cover;
  border-radius: 0.12rem;
}
.content > p {
  margin: 0;
  color: #666;
  font-size: 0.6em;
}
.content > p:last-child {
  margin-top: 0.3rem;
  font-size: 0.68em;
}
</style>