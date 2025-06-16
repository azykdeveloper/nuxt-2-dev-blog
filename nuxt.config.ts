// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/eslint",
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  // ui: {
  //   theme: {
  //     colors: [
  //       "primary",
  //       "secondary",
  //       "info",
  //       "success",
  //       "warning",
  //       "error",
  //       "neutral",
  //     ],
  //   },
  // },
});