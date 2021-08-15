<template lang="">
  <main>
    <Header />
    <div class="content">
      <router-view></router-view>
    </div>
  </main>
</template>
<script>
  import { defineComponent } from 'vue';
  import Header from '../components/Header.vue';

  export default defineComponent({
    components: {
      Header,
    },
  });
</script>

<style scoped>
  main {
    display: flex;
    align-self: flex-start;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
  }

  .content {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: var(--space-lg);
  }
</style>
