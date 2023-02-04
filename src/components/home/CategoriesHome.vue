<script setup lang="ts">
</script>

<template>
  <div class="category-item" v-for="(n, index) in 4" :key="n">
    <img
      :class="index % 2 === 0 ? 'rotate-img-left' : 'rotate-img-right'"
      src="@/assets/images/book.png" alt="Book Banner">
    <h4>Base de datos</h4>
    <p>
      Desarrollo de Bases de Datos, SQL(SQL Server, MySQL, PostgreSQL) y No SQL (Mong DB, Dynamo
      DB, HBase
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/colors.scss';
@import '@/assets/scss/sizes.scss';
@import '@/assets/scss/generics.scss';

$rotation-deg: 20deg;

.category-item {
  max-width: 300px;
  padding: 0 20px;

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
    color: $orange;
    font-size: 22px;
  }

  p {
    font-size: 16px;
  }
}
</style>
