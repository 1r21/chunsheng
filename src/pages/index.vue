<template>
  <div>
    <div class="article-list">
      <NuxtLink
        class="link"
        v-for="item in news"
        :key="item.id"
        :to="`/detail/${item.id}`"
      >
        <Article :news="item" />
      </NuxtLink>
    </div>
    <div class="footer">~over~</div>
  </div>
</template>

<script setup lang="ts">
import { News } from "@1r21/api-h5";
type Result = {
  data: {
    list: News[];
  };
};

const news = ref<News[]>([]);

const { apiHost } = useRuntimeConfig();

const { data: result } = await useFetch<Result>("/api/news", {
  baseURL: apiHost,
});

const data = result.value?.data;
news.value = data?.list!;
</script>
<style scoped>
.article-list {
  padding: 1.2rem 1.4rem;
}

.article-list .link {
  font-size: 1.4rem;
  text-decoration: none;
}

.footer {
  font-size: 1rem;
  color: #999;
  text-align: center;
}
</style>
