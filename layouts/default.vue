<template>
    <Header />
    <div>
      <slot />
    </div>
    <Footer />
  </template>

  <script setup>
    import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'
</script>
  