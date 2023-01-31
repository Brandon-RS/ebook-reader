<script setup lang="ts">
</script>

<template>
  <nav class="home-navbar">
    <div class="navbar-icon">
      <router-link :to="{ name: 'home' }">
        <img src="@/assets/images/fisme.svg" alt="Logo Fisme">
      </router-link>
    </div>

    <div class="navbar-options">
      <div class="options">
        <router-link class="opt-item active" :to="{ name: 'books-home' }">LIBROS</router-link>
        <router-link class="opt-item" :to="{ name: 'books-categories' }">CATEGORÍAS</router-link>
        <router-link class="opt-item" :to="{ name: 'books-authors' }">AUTORES</router-link>
        <router-link class="opt-item" :to="{ name: 'about' }">ACERCA DE</router-link>
      </div>

      <div class="buttons">
        <div class="input-search">
          <input type="text" placeholder="Buscar un libro">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <router-link class="btn-access" :to="{ name: 'about' }">Acceder</router-link>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/colors.scss';
@import '@/assets/scss/sizes.scss';

.home-navbar {
  display: flex;
  font-size: 16px;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;

  .navbar-icon {
    img {
      width: 60px;
    }
  }
}

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
      transition: all .5s ease-out;

      &:hover {
        border-bottom: 3px solid $blue;
        transition: all .5s ease-in;
      }
    }

    .active-exact-route {
      border-bottom: 3px solid $blue;
      transition: all .5s ease-in;
    }
  }

  .buttons {
    display: flex;
    gap: 20px;

    .input-search {
      border: 3px solid $blue;
      border-radius: $radius;
      padding: 8px 12px;

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
      transition: all .3s ease-out;

      &:hover {
        box-shadow: 2px 2px 5px $blue-shadow;
        transition: all .3s ease-in;
      }
    }
  }
}
</style>
