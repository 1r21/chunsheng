<template>
  <Loading :loading="loading" size="large">
    <view class="article-list">
      <Article v-for="item in news" :key="item.id" :ref="image" :news="item" @tap="goDetail(item)" />
    </view>
    <div class="footer">~over~</div>
  </Loading>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import Taro from '@tarojs/taro'
import { News } from "@1r21/api-h5";

import Loading from "@/components/Loading.vue";
import Article from "@/components/Article.vue";

import { request } from '@/utils/request'

const loading = ref(false);
const news = ref<News[]>([]);
const image = ref()

onMounted(async () => {
  loading.value = true;
  const { list } = await request<{ list: News[] }>('/api/news')
  news.value = list;
  loading.value = false;
});

function goDetail(news: News) {
  Taro.navigateTo({
    url: `/pages/detail/detail?id=${news.id}`
  })
}

</script>
<style>
.article-list {
  padding: 30px 36px 0px;
}

.footer {
  font-size: 24px;
  color: #999;
  text-align: center;
}
</style>