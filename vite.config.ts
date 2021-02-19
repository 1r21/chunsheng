import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    // support optional chain [build mode]
    target: "es2015",
  },
  server: {
    proxy: {
      "/api": "http://0.0.0.0:8080/api",
    },
  },
});
