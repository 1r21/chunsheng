import { createSSRApp } from "vue";
import App from "./App.vue";
import '@/utils/interceptor'
import "@/static/index.css";
import "@/static/iconfont.css"; 

export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
