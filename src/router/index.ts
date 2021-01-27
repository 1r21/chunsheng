import { createRouter, createWebHistory } from "vue-router";
import Home from "/@/components/Home.vue";
import Detail from "/@/components/Detail.vue";
import NotFound from "/@/components/NotFound.vue";

const { BASE_URL } = import.meta.env;

const routes = [
  { path: "/", component: Home },
  { path: "/detail/:id", component: Detail },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

export default createRouter({
  history: createWebHistory(BASE_URL),
  routes,
});
