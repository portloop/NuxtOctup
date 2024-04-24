// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
],
  css: [
    '@/assets/css/fonts.css', // Poppins fonts connection
  ],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['dotlottie-player'].includes(tag),
    },
  },
})