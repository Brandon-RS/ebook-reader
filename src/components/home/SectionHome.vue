<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import type { bookType, categoryType } from '@/types'
const Categories = defineAsyncComponent(() => import('@/components/home/CategoriesHome.vue'))
const Popular = defineAsyncComponent(() => import('@/components/home/PopularHome.vue'))

defineProps<{
  title: string,
  type: 'category' | 'book',
  list: categoryType[] | bookType[]
  btn: { name: string, text: string },
}>()

</script>

<template>
  <div class="section-container">
    <h2 class="section-title">
      {{ title }}
    </h2>
    <div class="section-row">
      <div
        v-for="(item, index) in list" :key="item.id"
        class="section-item">
        <template v-if="type === 'category'">
          <Categories :category="item" :index="index" />
        </template>
        <template v-if="type === 'book'">
          <Popular :book="item" />
        </template>
      </div>
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
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    justify-items: center;

    .section-item {
      max-width: 300px;
    }
  }
}
</style>
