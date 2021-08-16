<template lang="">
  <div class="header">
    <Container>
      <img src="/images/ipsc.png" width="50" @click="goToHomePage" />
      <h1 class="title" @click="goToHomePage">{{ title }}</h1>
    </Container>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import Container from './Container.vue';
  import router from '../router';

  export default defineComponent({
    components: { Container },
    props: {
      title: {
        type: String,
        default: 'IPSC',
      },
    },
    methods: {
      goToHomePage() {
        router.push({ name: 'Home' });
      },
    },
  });
</script>

<style scoped>
  .header {
    display: flex;
    width: 100%;
    justify-content: center;
    background-color: var(--main-color);
  }

  .header > .container {
    display: flex;
    flex: 1;
    padding: var(--space-lg) 0;
  }

  .header > .container > img {
    margin-left: var(--space-xl);
  }

  .title {
    margin-left: var(--space-xl);
    align-self: center;
    display: inline-block;
    width: fit-content;
  }
</style>
