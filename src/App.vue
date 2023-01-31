<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarHome from './components/NavbarHome.vue'
</script>

<template>
  <div class="body">
    <main class="main-container">
      <header class="main-header">
        <NavbarHome />
      </header>
      <RouterView class="main-view" />
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/sizes.scss';
@import '@/assets/scss/colors.scss';

.body {
  widows: 100vw;
  height: 100vh;
  display: grid;
  justify-items: center;
  background-color: $background;

  .main-container {
    max-width: $max-width;
    width: 100%;
  }

}
</style>
