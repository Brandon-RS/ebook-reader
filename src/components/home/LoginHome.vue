<script setup lang="ts">
</script>

<template>
  <div class="login-container">
    <h2 class="login-title">Inicia sesión ahora, y empieza a aprender.</h2>
    <router-link class="login-button" :to="{ name: 'about' }">Acceder</router-link>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/sizes.scss";
@import "@/assets/scss/colors.scss";

.login-container {
  margin-top: 70px;
  background-color: #fffaf5;
  border-radius: 20px;
  max-width: calc($max-width - 400px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  justify-self: center;
  width: 100%;
  gap: 100px;

  .login-title {
    font-size: 26px;
  }
  
  .login-button {
    text-decoration: none;
    font-size: 20px;
    color: $white;
    font-weight: 600;
    background-color: $blue;
    padding: 10px 60px;
    border-radius: $radius;
  }
}

@media screen and (max-width: 700px) {
  .login-container {
    gap: 20px;
    flex-direction: column;
    text-align: center;
  }
}
</style>
