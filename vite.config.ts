import path from "path";

export default {
  alias: {
    "/@/": path.resolve(__dirname, "src"),
  },
  // support optional chain [build mode]
  esbuildTarget: "es2015",
  proxy: {
    "/api": {
      target: "http://ai.chenggang.win/api",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ""),
    },
  },
};
