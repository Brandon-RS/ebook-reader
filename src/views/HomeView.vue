<script setup lang="ts">
import { defineAsyncComponent, computed } from 'vue'
import { useBookStore } from '@/stores/book.store'
import { useCategoryStore } from '@/stores/category.store'

const Banner = defineAsyncComponent(() => import('@/components/home/BannerHome.vue'))
const Section = defineAsyncComponent(() => import('@/components/home/SectionHome.vue'))
const Login = defineAsyncComponent(() => import('@/components/home/LoginHome.vue'))

const bookStore = useBookStore()
const categoryStore = useCategoryStore()

const allCategories = computed(() => categoryStore.getAllCategories)
const allBooks = computed(() => bookStore.getAllBooks)

</script>

<template>
  <main class="home-container">
    <Banner />
    <Section
      title="Contamos con una gran variedad de libros para facilitar tu aprendizaje"
      :btn="{ name: 'books-categories', text: 'Ver Todas las Categorías' }"
      type="category"
      :list="allCategories" />

    <Section
      title="Libros más populares"
      :btn="{ name: 'books-home', text: 'Ver Todos los Libros' }"
      type="book"
      :list="allBooks" />

    <Login />
  </main>

  <div class="style-elements">
    <span class="style-item-1"></span>
    <span class="style-item-2" v-for="n in 2" :key="n"></span>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/colors.scss';
@import '@/assets/scss/sizes.scss';

.home-container {
  display: grid;
}

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
