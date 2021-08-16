<template lang="">
  <Container class="row">
    <TargetButton text="New Course" @click="handleNewCourseClick" />
    <TargetButton text="Join Course" @click="handleJoinCourseClick" />
  </Container>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import TargetButton from '../components/TargetButton.vue';
  import Container from '../components/Container.vue';
  import router from '../router';

  export default defineComponent({
    components: { TargetButton, Container },
    methods: {
      handleNewCourseClick() {
        router.push({ name: 'Create Course' });
      },
      handleJoinCourseClick() {
        router.push({ name: 'Course List' });
      },
    },
  });
</script>

<style scoped>
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
  }

  .logo {
    width: 100px;
  }

  .row {
    display: flex;
    flex: 1;
    justify-content: space-around;
    padding: var(--space-lg) var(--space-md);
    flex-wrap: wrap;
    gap: var(--space-lg);
  }
</style>
