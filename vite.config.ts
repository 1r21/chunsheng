import path from "path";
import vue from "@vitejs/plugin-vue";

export default {
  plugins: [vue()],
  alias: {
    "/@": path.resolve(__dirname, "src"),
  },
  // support optional chain [build mode]
  esbuildTarget: "es2015",
  proxy: {
    "/api": "http://0.0.0.0:8080/api",
  },
};
