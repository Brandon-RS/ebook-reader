<script setup lang="ts">
</script>

<template>
  <div class="ctg-container">
    <h2 class="ctg-title">
      Contamos con una gran variedad de libros para facilitar tu aprendizaje
    </h2>
    <div class="ctg-row">
      <div class="ctg-item" v-for="n in 4" :key="n">
        <img src="@/assets/images/book.png" alt="Book Banner">
        <span>Base de datos</span>
        <p>
          Desarrollo de Bases de Datos, SQL(SQL Server, MySQL, PostgreSQL) y No SQL (Mong DB, Dynamo
          DB, HBase
        </p>
      </div>
    </div>
    <router-link class="ctg-button" :to="{ name: 'books-categories' }">Ver Todas las
      Categorías</router-link>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/colors.scss';
@import '@/assets/scss/sizes.scss';

.ctg-container {
  display: grid;

  .ctg-title {
    text-align: center;
    font-size: $titles;
    max-width: 550px;
    justify-self: center;
    margin-bottom: 50px;
  }

  .ctg-row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));

    .ctg-item {
      width: 200px;
      img {
        width: 150px;
      }
    }
  }

  .ctg-button {
    text-align: center;
    background-color: $orange;
    text-decoration: none;
    color: $white;
    margin-top: 40px;
    padding: 10px 50px;
    border-radius: $radius;
    font-weight: 600;
    font-size: 17px;
    justify-self: center;
  }
}
</style>
