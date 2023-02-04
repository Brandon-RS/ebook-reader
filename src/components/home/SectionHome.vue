<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  title: string,
  child: Component,
  btn: { name: string, text: string }
}>()
</script>

<template>
  <div class="section-container">
    <h2 class="section-title">
      {{ title }}
    </h2>
    <div class="section-row">
      <component :is="child"></component>
    </div>
    <router-link class="section-button" :to="{ name: btn.name }">{{ btn.text }}</router-link>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/colors.scss';
@import '@/assets/scss/sizes.scss';
@import '@/assets/scss/generics.scss';

.section-container {
  display: grid;
  margin-top: 40px;

  .section-title {
    text-align: center;
    font-size: $titles;
    max-width: 550px;
    justify-self: center;
    margin-bottom: 50px;
  }

  .section-row {
    display: grid;
    gap: 40px;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    justify-items: center;
  }
}
</style>
