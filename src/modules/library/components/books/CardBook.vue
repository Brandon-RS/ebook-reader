<script setup lang="ts">
import { computed } from 'vue'
import type { bookType } from '@/types'

const props = defineProps<{ book: bookType }>()

const shortDesc = computed(() => props.book.description.slice(0, 100) + '...')
</script>

<template>
  <div 
  @click="$emit('on:open-modal')"
  class="card-container pointer">
    <img :src="book.image" :alt="book.name">
    <h3>{{ book.name }}</h3>
    <p>{{ shortDesc }}</p>
    <span class="book-author">{{ book.author }}</span>
    <div
      class="card-categories">
      <span
        v-for="(category, _, index) in book.categories" :key="index">
        {{ category }}
      </span>
    </div>
    <span class="book-date">{{ book.date }}</span>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/generics";
@import "@/assets/scss/colors";

.card-container {
  text-align: justify;
  position: relative;

  img {
    height: 200px;
    display: block;
    margin: 0 auto;
  }

  h3 {
    font-size: 22px;
    color: $orange;
  }

  .book-author {
    font-weight: 600;
  }

  .card-categories {
    display: flex;
    gap: 10px;

    span {
      border-bottom: 1px solid $blue;

      &::before {
        content: '#';
      }
    }
  }

  .book-date {
    background-color: $white;
    border-radius: 6px;
    padding: 2px 6px;
    position: absolute;
    top: 30px;
    right: 30px;
    color: rgba(204, 14, 14, 0.761)
  }
}
</style>
