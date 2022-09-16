export default {
  srcDir: "src/",
  typescript: {
    strict: true,
  },
  runtimeConfig: {
    // Public keys that are exposed to the client
    public: {
      apiHost: process.env.NUXT_API_HOST || "/api",
    },
  },
};
