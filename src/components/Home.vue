<template>
  <Loading :loading="loading">
    <div class="article-list">
      <router-link
        custom
        v-slot="{ navigate }"
        v-for="item in list"
        :key="item.id"
        :to="`/detail/${item.id}`"
      >
        <Article :news="item" @click="navigate" role="link" />
      </router-link>
    </div>
    <div class="footer">～over～</div>
  </Loading>
</template>
<script lang="ts">
import { getNews, translate, News } from "/@/services";
import Loading from "/@/components/Loading.vue";
import Article from "/@/components/Article.vue";

export default {
  name: "Home",
  components: {
    Loading,
    Article,
  },
  data() {
    return {
      loading: false,
      list: <News[]>[],
    };
  },
  async mounted() {
    document.title = "I Believe";
    this.loading = true;
    const { list } = await getNews();
    this.list = list;
    this.loading = false;
  },
};
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