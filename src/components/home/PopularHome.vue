<script setup lang="ts">
</script>

<template>
  <div class="popular-card" v-for="n in 8" :key="n">
    <img src="@/assets/images/clean-code.png" alt="Book banner">
    <p>Eiusmod incididunt nisi qui reprehenderit quis sunt.</p>
    <span>Robert c. Martin</span>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/colors.scss";

.popular-card {
  max-width: 300px;
  padding: 0 20px;

  img {
    display: block;
    margin: 0 auto;
    width: 170px;
  }

  p {
    font-size: 17px;
    padding: 10px 0;
    text-align: justify;
  }

  span {
    display: inline-block;
    color: $orange;
    font-weight: 600;
    font-size: 16px;
  }
}
</style>
