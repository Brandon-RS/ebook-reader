<template>
  <div class="footer-container">
    <div class="footer-brand">
      <img src="@/assets/images/fisme.svg" alt="Fisme">
      <span>FISME</span>
    </div>
    <div class="footer-content">
      <div class="social">
        <a href="" target="_blank" rel="noreferrer"><i class="fa-brands fa-facebook"></i></a>
        <a href="" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram"></i></a>
        <a href="" target="_blank" rel="noreferrer"><i class="fa-brands fa-twitter"></i></a>
        <a href="" target="_blank" rel="noreferrer"><i class="fa-solid fa-globe"></i></a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/colors";

.footer-container {
  margin-top: 60px;
  display: flex;
  justify-content: space-between;

  .footer-brand {
    display: flex;
    align-items: center;

    img {
      max-width: 50px;
    }

    span {
      font-weight: 600;
      font-size: 26px;
      padding-left: 20px;
    }
  }

  .footer-content {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .social {
      display: flex;
      gap: 20px;

      a {
        text-decoration: none;

        i {
          color: $blue;
          font-size: 20px;
        }
      }
    }
  }
}

@media screen and (max-width: 1005px) {
  .footer-container {
    background-color: #0c213be7;
    position: absolute;
    width: 100%;
    left: 0;
    padding: 10px 20px;
    color: $white;

    .footer-brand {
      img {
        filter: drop-shadow(2px 2px 25px #ffffff64);
      }
    }

    .footer-content {
      .social {
        a {
          i {
            color: $white;
          }
        }
      }
    }
  }
}
</style>
