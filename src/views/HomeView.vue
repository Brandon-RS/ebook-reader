<script setup lang="ts">
import Banner from '@/components/home/BannerHome.vue'
import Categories from '@/components/home/CategoriesHome.vue'
</script>

<template>
  <main class="home-container">
    <Banner />
    <Categories />
  </main>

  <div class="style-elements">
    <span class="style-item-1"></span>
    <span class="style-item-2" v-for="n in 2" :key="n"></span>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/colors.scss';
@import '@/assets/scss/sizes.scss';

.style-elements {
  .style-item-1 {
    background-color: $orange;
    border-radius: 50%;
    height: 45px;
    left: 30%;
    position: absolute;
    top: 370px;
    width: 45px;
    z-index: 0;
  }

  .style-item-2 {
    width: 140px;
    height: 140px;
    border: 15px solid $blue;
    position: absolute;
    border-radius: 50%;
  }

  span.style-item-2 {
    &:nth-child(2) {
      left: 10%;
      top: 600px;
    }

    &:nth-child(3) {
      right: 10%;
      top: 150px;
      z-index: 20;
    }
  }
}
</style>
