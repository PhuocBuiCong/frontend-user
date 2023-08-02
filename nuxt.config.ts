// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: ["~/assets/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
    "@pinia-plugin-persistedstate/nuxt",
  ],
  imports: {
    dirs: ["stores", "composables"],
  },
  components: {
    global: true,
    dirs: ["~/components/general"],
  },
  runtimeConfig: {
    public: {
      apiBase: "", // can be overridden by NUXT_PUBLIC_API_BASE environment variable (.env file)
      apiTimeout: 30000,
    },
  },
});
