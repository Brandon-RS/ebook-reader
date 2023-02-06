<script setup lang="ts">
import { computed } from 'vue'
import type { bookType } from '@/types'

const props = defineProps<{
  book: bookType
}>()

const bookShortDesc = computed(() => {
  return props.book.description.slice(0, 100) + ' ...'
})

</script>

<template>
  <div class="pointer">
    <div>
      <img src="@/assets/images/clean-code.png" alt="Book banner">
      <p> <strong>{{ book.name }}: </strong> {{ bookShortDesc }} </p>
    </div>
    <span>{{ book.author }}</span>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/colors.scss";

img {
  display: block;
  margin: 0 auto;
  width: 170px;
  border-radius: 10px;
}

p {
  font-size: 17px;
  padding-top: 10px;
  text-align: justify;
}

span {
  display: inline-block;
  color: $orange;
  font-weight: 600;
  font-size: 16px;
}
</style>
