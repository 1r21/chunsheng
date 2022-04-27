<template>
  <view class="post-card">
    <image :src="news.cover" mode="aspectFill" alt="Fetch cover err" class="cover" @error="imageErrHandle" />
    <view class="content">
      <view class="date">{{ news.date }}</view>
      <view class="title">{{ news.title }}</view>
    </view>
  </view>
</template>
<script setup lang="ts">
import { ref } from "vue";
import type { News } from "@1r21/api-h5";
import placeImage from '../assets/place/102.jpg'

defineProps<{
  news: News
}>()

const place = ref(placeImage);

function imageErrHandle() {
  place.value = placeImage
}

</script>

<style>
.post-card {
  padding-bottom: 22px;
  margin-bottom: 18px;
  border-bottom: 1px solid #ccc;
}

.cover {
  display: inline-block;
  width: 100%;
  height: 320px;
  background: #c5d2d9 no-repeat 50%;
  background-size: cover;
  border-radius: 8px;
}

.content>.title,
.content>.date {
  margin: 0;
  color: #666;
  font-size: 26px;
}

.content>.title {
  margin-top: 10px;
  font-size: 28px;
}
</style>