<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/NavbarApp.vue'
</script>

<template>
  <div class="body">
    <main class="main-container">
      <header class="main-header">
        <Navbar />
      </header>
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/sizes.scss';
@import '@/assets/scss/colors.scss';

.body {
  height: 100vh;
  display: grid;
  justify-items: center;
  background-color: $white;
  color: $blue;

  .main-container {
    padding: 0 20px;
    max-width: $max-width;
    width: 100%;
    padding-bottom: 30px;
  }

}
</style>
