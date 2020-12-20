import { createApp } from "vue";
import "normalize.css/normalize.css";
import router from "/@/router";
import App from "/@/App.vue";
import "/@/index.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
