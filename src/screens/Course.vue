<template>
  <Container class="container">
    <CourseHeader />
    <CourseScoreboard />
  </Container>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import CourseHeader from '../components/CourseHeader.vue';
  import CourseScoreboard from '../components/CourseScoreboard.vue';
  import Container from '../components/Container.vue';

  export default defineComponent({
    components: {
      CourseHeader,
      CourseScoreboard,
      Container,
    },
    provide: {},
    setup() {},
  });
</script>

<style scoped>
  .container {
    align-self: flex-start;
    overscroll-behavior: none;
  }
</style>
