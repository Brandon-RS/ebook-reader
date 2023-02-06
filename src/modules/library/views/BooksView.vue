<script setup lang="ts">
import { computed, defineAsyncComponent, ref } from 'vue'
import type { bookType } from '@/types'
import { useBookStore } from '@/stores/book.store'
import BookCard from "@/modules/library/components/books/CardBook.vue"
const Login = defineAsyncComponent(() => import('@/components/home/LoginHome.vue'))
const Detail = defineAsyncComponent(() => import('@/modules/library/components/books/DetailBook.vue'))

const bookStore = useBookStore()

const text = ref<string>('')
const title = ref<string>('')
const selectedBook = ref<bookType | null>(null)
const searchResult = ref<bookType[]>()

const allBooks = computed(() => bookStore.getAllBooks)
const thereAreBooks = typeof searchResult.value?.length !== 'undefined' && searchResult.value?.length > 0
const reset = () => {
  searchResult.value = []
  title.value = ''
}

const searchBook = () => {
  if (text.value.length < 2) return reset
  searchResult.value = bookStore.getBookByName(text.value)
  thereAreBooks
    ? title.value = `Resultados para "${text.value}":`
    : title.value = `No tenemos resultados para "${text.value}"`
}

const openBook = (book: bookType) => {
  selectedBook.value = book
  console.log(selectedBook.value)
}

</script>

<template>
  <div class="books-container">
    <div class="search-section">
      <div class="books-searcher">
        <input
          v-on:keyup.enter="searchBook"
          v-on:keydown.backspace="reset"
          v-model="text"
          type="text"
          placeholder="Ingresa el título o categoría ...">
        <button @click="searchBook">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div class="books-results">
        <h3>{{ title }}</h3>
        <div class="book-list">
          <BookCard class="book-card"
            v-for="book in searchResult"
            :key="book.id"
            @on:open-modal="openBook(book)"
            :book="book" />
        </div>
      </div>
    </div>
    <h2>Encuentra toda la información que necesitas, aquí</h2>
    <div
      class="book-list">
      <BookCard
        v-for="book in allBooks"
        :key="book.id"
        @on:open-modal="openBook(book)"
        :book="book" />
    </div>
    <Login />
    <Detail
      v-if="selectedBook"
      @on:close="() => { selectedBook = null }"
      :book="selectedBook" />

  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/colors.scss";

.books-container {
  margin-top: 40px;
  display: grid;
  justify-items: center;
  gap: 40px;

  h2 {
    justify-self: start;
    padding-left: 40px;
    width: 100%;

    &::after {
      content: ' ...';
    }
  }

  .search-section {
    display: grid;
    width: 100%;
    justify-items: center;

    .books-searcher {
      display: inline-flex;
      gap: 10px;
      width: min-content;
      background-color: #1f3d5c2c;
      border-radius: 20px;
      padding: 10px 30px;

      input,
      button {
        border: none;
        outline: none;
        background-color: $transparent;
      }

      input {
        padding: 10px 0;
        width: 400px;
      }

      button {
        font-size: 18px;
        padding: 5px;
        cursor: pointer;

        i {
          rotate: 90deg;
        }
      }
    }

    .books-results {
      width: 100%;
    }
  }

  .book-list {
    width: 100%;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

    .book-card {
      max-width: 280px;
    }
  }
}

@media screen and (max-width: 1005px) {
  .books-container {
    h2 {
      justify-self: center;
      padding: 0;
    }
  }
}

@media screen and (max-width: 600px) {
  .books-container {
    .search-section {
      .books-searcher {
        input {
          width: 60vw;
        }
      }
    }
  }
}
</style>
