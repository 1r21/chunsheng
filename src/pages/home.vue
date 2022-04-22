<template>
  <Loading :loading="loading" size="large">
    <view class="article-list">
      <navigator v-for="item in news" :key="item.id" :url="`/pages/detail?id=${item.id}`"
        hover-class="other-navigator-hover">
        <Article :news="item" role="link" />
      </navigator>
    </view>
    <view class="footer">~over~</view>
  </Loading>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { News } from "@1r21/api-h5";

import Loading from "@/components/Loading.vue";
import Article from "@/components/Article.vue";

import { request } from '@/utils/request';

const loading = ref(false);
const news = ref<News[]>([]);


onMounted(async () => {
  loading.value = true;
  const { list } = await request<{ list: News[] }>("/news")
  news.value = list;
  loading.value = false;
});

</script>
<style scoped>
.article-list {
  padding: 1.2rem 1.5rem;
}

.footer {
  font-size: 1rem;
  color: #999;
  text-align: center;
}
</style>