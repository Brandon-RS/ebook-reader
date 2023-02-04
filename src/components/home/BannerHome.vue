<script setup lang="ts">
</script>

<template>
  <div class="banner-container">
    <div class="banner-banner">
      <h1 class="banner-title">
        Biblioteca Virtual de la Facultad de Ingeniería de Sistemas y Mecánica Eléctrica (FISME) -
        UNTRM
      </h1>
      <p class="banner-desc">
        El contenido de los libros varía según su categoría y autores, puedes revisar la descripción
        de los mismos para mayor información.
      </p>
    </div>
    <div class="banner-image">
      <img src="@/assets/images/reading.jpg" alt="Banner image">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/colors.scss';
@import '@/assets/scss/sizes.scss';

.banner-container {
  align-items: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(520px, 1fr));
  margin-top: 40px;
  position: relative;
  width: 100%;
  z-index: 10;

  .banner-banner {
    .banner-title {
      font-size: $titles;
      margin-bottom: 40px;
    }

    .banner-desc {
      font-size: 20px;
    }
  }

  .banner-image {
    img {
      max-width: 600px;
      transition: all .2s ease;
    }
  }
}

@media screen and (max-width: 1300px) {
  .banner-container {
    .banner-image {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        max-width: 500px;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .banner-container {
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));

    .banner-image {
      img {
        max-width: 400px;
      }
    }
  }
}
</style>
