import path from "path";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(({ mode }) => {
  // ref: https://github.com/vitejs/vite/issues/1930
  const { VITE_API_HOST } = loadEnv(mode, process.cwd());
  
  return {
    define: {
      __API_HOST__: JSON.stringify(VITE_API_HOST),
    },
    plugins: [vue()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    build: {
      // support optional chain [build mode]
      target: "es2015",
    }
  }
});
