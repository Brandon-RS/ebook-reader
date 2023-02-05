<script setup lang="ts">
import { computed } from 'vue'
import type { categoryType } from '@/types'

const props = defineProps<{
  index: number,
  category: categoryType
}>()

const categoryShortDesc = computed(() => {
  return props.category.description.slice(0, 100) + ' ...'
})
</script>

<template>
  <div class="pointer">
    <div>
      <img
        :class="index % 2 === 0 ? 'rotate-img-left' : 'rotate-img-right'"
        src="@/assets/images/book.png" alt="Book Banner">
      <h4>{{ category.name }}</h4>
    </div>
    <p>{{ categoryShortDesc }} </p>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/colors.scss';
@import '@/assets/scss/sizes.scss';
@import '@/assets/scss/generics.scss';

$rotation-deg: 20deg;

.rotate-img-left {
  rotate: -$rotation-deg;
}

.rotate-img-right {
  rotate: $rotation-deg;
}

img {
  display: block;
  margin: 0 auto;
  margin-top: 30px;
  width: 150px;
}

h4 {
  padding: 10px 0;
  margin-top: 10px;
  color: $orange;
  font-size: 22px;
}

p {
  font-size: 16px;
}
</style>
