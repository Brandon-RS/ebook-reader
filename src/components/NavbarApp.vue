<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref<boolean>(false)

const showMobileMenu = (home?: boolean) => {
  const body = document.getElementById('app')
  if (!home) {
    isOpen.value = !isOpen.value
    isOpen.value
      ? body?.classList.add('remove-scroll')
      : body?.classList.remove('remove-scroll')
  } else {
    isOpen.value = false
    body?.classList.remove('remove-scroll')
  }
}
</script>

<template>
  <nav class="home-navbar">
    <div class="navbar-icon">
      <router-link @click="showMobileMenu" :to="{ name: 'home' }">
        <img src="@/assets/images/fisme.svg" alt="Logo Fisme">
      </router-link>
    </div>

    <div @click.self="() => showMobileMenu(true)" class="navbar">
      <i
        class="mobile-bars fas "
        :class="isOpen ? 'fa-x' : 'fa-bars'"
        @click="() => showMobileMenu(false)"></i>
      <div class="navbar-options">
        <div class="options">
          <router-link
            class="opt-item"
            @click="showMobileMenu"
            :to="{ name: 'books-home' }">
            <span>LIBROS</span> <i v-show="isOpen" class="fas fa-angle-right"></i>
          </router-link>
          <router-link
            class="opt-item"
            @click="showMobileMenu"
            :to="{ name: 'books-categories' }">
            <span>CATEGORÍAS</span> <i v-show="isOpen" class="fas fa-angle-right"></i>
          </router-link>
          <router-link
            class="opt-item"
            @click="showMobileMenu"
            :to="{ name: 'books-authors' }">
            <span>AUTORES</span> <i v-show="isOpen" class="fas fa-angle-right"></i>
          </router-link>
          <router-link
            class="opt-item"
            @click="showMobileMenu"
            :to="{ name: 'about' }">
            <span>ACERCA DE</span> <i v-show="isOpen" class="fas fa-angle-right"></i>
          </router-link>
        </div>

        <div class="buttons">
          <div class="input-search">
            <input type="text" placeholder="Buscar un libro">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <router-link class="btn-access" @click="showMobileMenu"
            :to="{ name: 'about' }">Acceder</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@import '@/assets/scss/colors.scss';
@import '@/assets/scss/sizes.scss';

$tr-time: .3s;

.home-navbar {
  display: flex;
  font-size: 16px;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;

  .mobile-bars {
    display: none;
  }

  .navbar-icon {
    img {
      width: 60px;
    }
  }

  .navbar {
    .navbar-options {
      display: flex;
      gap: 35px;

      .options {
        display: flex;
        gap: 30px;
        align-items: center;

        .opt-item {
          text-decoration: none;
          color: $blue;
          font-weight: 600;
          padding: 0 4px;
          border-bottom: 3px solid $transparent;
          transition: all $tr-time ease-out;

          &:hover {
            border-bottom: 3px solid $blue;
            transition: all $tr-time ease-in;
          }
        }

        .active-exact-route {
          border-bottom: 3px solid $blue;
          transition: all $tr-time ease-in;
        }
      }

      .buttons {
        display: flex;
        gap: 20px;

        .input-search {
          border: 3px solid $blue;
          border-radius: $radius;
          padding: 8px 12px;
          background-color: $white;

          input {
            border: none;
            outline: none;
          }

          i {
            color: $blue;
            transform: scale(-1, 1);
          }
        }

        .btn-access {
          text-decoration: none;
          background-color: $blue;
          border-radius: $radius;
          color: $white;
          display: flex;
          align-items: center;
          padding: 0 20px;
          font-weight: 600;
          font-size: 17px;
          transition: all $tr-time ease-out;
          display: flex;
          justify-content: center;

          &:hover {
            box-shadow: 2px 2px 5px $blue-shadow;
            transition: all $tr-time ease-in;
          }
        }
      }
    }
  }
}


@media screen and (max-width: 1005px) {
  .home-navbar {
    justify-content: center;

    .navbar-icon {
      display: inline-block;
      z-index: 40;
      filter: drop-shadow(2px 2px 25px #ffffff45);
    }

    .navbar {
      position: absolute;
      top: 0;
      z-index: 30;
      width: 100%;
      background-color: #0c213be7;
      display: flex;
      height: v-bind("isOpen ? '100vh' : '100px'");
      justify-content: flex-end;
      cursor: pointer;
      transition: all $tr-time ease-out;

      .mobile-bars {
        display: inline-block;
        position: absolute;
        color: $white;
        right: 30px;
        top: 40px;
        font-size: 25px;
      }

      .navbar-options {
        flex-direction: column;
        padding: v-bind("isOpen ? '20px 35px' : '0'");
        margin: 100px 20px 0 20px;
        background-color: $blue;
        justify-content: space-between;
        height: calc(98vh - 100px);
        height: v-bind("isOpen ? 'calc(98vh - 100px)' : '0'");
        border-radius: 10px;
        width: 320px;
        cursor: default;
        transition: all $tr-time ease-out;
        overflow: auto;

        .options,
        .buttons {
          display: v-bind("isOpen ? 'flex' : 'none'");
          flex-direction: column;
        }

        .options {
          gap: 30px;
          margin-top: 30px;
          align-items: baseline;

          .opt-item {
            display: flex;
            width: 100%;
            justify-content: space-between;
            color: $white;
          }
        }

        .buttons {
          align-items: center;

          .input-search,
          .btn-access {
            width: 250px;
            border: none;
            transition: all $tr-time ease;
          }

          .input-search {
            input {
              width: 92%;
              height: 23px;
            }
          }

          .btn-access {
            background-color: $white;
            color: $blue;
            height: 35px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 550px) {
  .home-navbar {
    .navbar {
      .navbar-options {
        width: 100%;
        padding: v-bind("isOpen ? '20px 60px' : '0'");

        .buttons {

          .input-search,
          .btn-access {
            width: 100%;
            transition: all $tr-time ease;
          }
        }
      }
    }
  }
}
</style>
