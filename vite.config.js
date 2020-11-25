import path from "path";

export default {
  alias: {
    "/@/": path.resolve(__dirname, "src"),
  },
  proxy: {
    // with options
    "/api": {
      target: "http://localhost:8000/api",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ""),
    },
  },
};
