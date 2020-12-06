import path from "path";

export default {
  alias: {
    "/@/": path.resolve(__dirname, "src"),
  },
  // support optional chain [build]
  esbuildTarget: "es2015",
  proxy: {
    "/api": {
      target: "http://0.0.0.0:8080/api",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ""),
    },
  },
};
