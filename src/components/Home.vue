<template>
  <Loading :loading="loading" size="large">
    <div class="article-list">
      <router-link
        custom
        v-slot="{ navigate }"
        v-for="item in news"
        :key="item.id"
        :to="`/detail/${item.id}`"
      >
        <Article :news="item" @click="navigate" role="link" />
      </router-link>
    </div>
    <div class="footer">～over～</div>
  </Loading>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { changeTitle } from "@1r21/util";
import { getNews, News, } from "@1r21/api-h5";

import Loading from "@/components/Loading.vue";
import Article from "@/components/Article.vue";

const loading = ref(false);
const news = ref<News[]>([]);

onMounted(async () => {
  loading.value = true;
  const { list } = await getNews();
  news.value = list;
  loading.value = false;
  changeTitle("I Believe");
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