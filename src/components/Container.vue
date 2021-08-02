<template lang="">
  <div class="container"><slot></slot></div>
</template>

<style scoped>
  .container {
    max-width: 95%;
  }

  @media only screen and (min-width: 640px) {
    .container {
      max-width: 90%;
    }
  }

  @media only screen and (min-width: 768px) {
    .container {
      max-width: 80%;
    }
  }

  @media only screen and (min-width: 1024px) {
    .container {
      max-width: 70%;
    }
  }

  @media only screen and (min-width: 1280px) {
    .container {
      max-width: 60%;
    }
  }

  @media only screen and (min-width: 1536px) {
    .container {
      max-width: 50%;
    }
  }
</style>
