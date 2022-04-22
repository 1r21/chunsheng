<template>
  <view class="post-card">
    <image :src="place" alt="Fetch cover err" class="cover" ref="image" @error="imageErrHandle" />
    <view class="content">
      <view class="date">{{ news.date }}</view>
      <view class="title">{{ news.title }}</view>
    </view>
  </view>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { News } from "@1r21/api-h5";

const places = [1004, 1016];
const rIndex = Math.floor(Math.random() * places.length);

const props = defineProps<{
  news: News
}>()
const genRandomImageUrl = (arr: number[]) => `/static/place/${arr[rIndex]}.jpg`
const place = ref(genRandomImageUrl(places));
const image = ref<HTMLImageElement | null>(null);

function imageErrHandle() {
  place.value = genRandomImageUrl([10, 102])
}

// onMounted(() => {
//   if ("IntersectionObserver" in window) {
//     console.log(image.value)
//     const imageObserver = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         // can visible
//         if (entry.isIntersecting) {
//           const lazyImage: Partial<HTMLImageElement> = entry.target;
//           setTimeout(() => {
//             if (/place\/1004|1016\.jpg/.test(<string>lazyImage.src)) {
//               place.value = props.news.cover
//             }
//           }, 300);
//         }
//       });
//     });
//     if (image.value) {
//       // imageObserver.observe(image.value);
//     }
//   }
// });
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
.content > .date {
  margin: 0;
  color: #666;
  font-size: 0.6em;
}
.content > .title {
  margin-top: 0.3rem;
  font-size: 0.68em;
}
</style>