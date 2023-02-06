<script setup lang="ts">
import type { bookType } from '@/types'

defineProps<{ book: bookType }>()

</script>

<template>
  <div
    @click.self="$emit('on:close')"
    class="modal-container">
    <div class="modal-content">
      <div class="modal-image">
        <img :src="book.image" :alt="book.name">
      </div>
      <div class="modal-description">
        <div class="modal-title">
          <h2>{{ book.name }}</h2>
          <span>by <strong>{{ book.author }}</strong></span>
        </div>
        <div class="modal-about">
          <h3>Acerca de este libro</h3>
          <span>Publicado en <strong>{{ book.date }}</strong></span>
          <p>{{ book.description }}</p>
        </div>
        <div class="modal-bottom">
          <a class="read-book-btn" href="">Leer ahora</a>
          <div class="bottom-categories">
            <span
              v-for="(category, _, index) in book.categories"
              :key="index">{{ category }}</span>
          </div>
        </div>
      </div>
      <i @click.self="$emit('on:close')" class="close-modal fa-solid fa-xmark"></i>
    </div>
  </div>

</template>

<style scoped lang="scss">
@import "@/assets/scss/colors";
@import "@/assets/scss/sizes";

.modal-container {
  background-color: $blue-transparent;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 40;
  display: grid;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  cursor: pointer;
  overflow: auto;


  .modal-content {
    cursor: auto;
    background-color: $white;
    width: 900px;
    display: flex;
    gap: 40px;
    padding: 40px;
    border-radius: 20px;
    position: relative;

    .close-modal {
      position: absolute;
      top: 20px;
      z-index: 100;
      right: 22px;
      font-size: 30px;
      cursor: pointer;
    }

    .modal-image {
      img {
        max-width: 300px;
      }
    }

    .modal-description {
      display: flex;
      gap: 20px;
      flex-direction: column;
      justify-content: space-between;

      .modal-about,
      .modal-title {
        padding-bottom: 10px;
        border-bottom: 2px solid #00000042;
      }

      .modal-title {
        h2 {
          padding-bottom: 10px;
          font-size: 36px;
          letter-spacing: 1px;
          color: $orange;
        }
      }

      .modal-about {
        h3 {
          font-size: 22px;
          padding-bottom: 10px;
          color: #000;
        }

        span {
          padding-bottom: 20px;
          display: inline-block;
        }

        p {
          font-size: 17px;
          text-align: justify;
        }
      }

      .modal-bottom {
        .read-book-btn {
          text-decoration: none;
          padding: 10px 20px;
          background-color: $blue;
          color: $white;
          display: inline-block;
          border-radius: $radius;
          transition: all .2s ease-out;
          font-weight: 600;
          font-size: 16px;
          letter-spacing: 1px;

          &:hover {
            box-shadow: 0 3px 6px $blue-shadow;
            transition: all .2s ease-in;
          }
        }

        .bottom-categories {
          display: flex;
          gap: 20px;
          margin-top: 20px;

          span {
            padding: 6px 15px;
            cursor: pointer;

            &::before {
              content: '# ';
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1005px) {
  .modal-container {
    padding: 30px;

    .modal-content {
      width: 80vw;
      flex-direction: column;
      justify-self: center;
      padding: 20px;

      .modal-image {
        img {
          display: block;
          margin: 0 auto;
          max-width: 200px;
        }
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .modal-container {
    .modal-content {
      width: 85vw;

      .modal-image {
        img {
          max-width: 200px;
        }
      }
    }
  }
}
</style>
