<template lang="">
  <div class="header">
    <Container>
      <img src="/images/ipsc.png" width="60" />
      <h1 class="title">{{ title }}</h1>
    </Container>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import Container from './Container.vue';

  export default defineComponent({
    components: { Container },
    props: {
      title: {
        type: String,
        default: 'IPSC',
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

  .title {
    flex: 1;
    text-align: center;
    vertical-align: center;
    align-self: center;
  }
</style>
