<template lang="">
  <div class="home">
    <Container class="row">
      <TargetButton text="New Course" @click="handleNewCourseClick" />
      <TargetButton text="Join Course" @click="handleJoinCourseClick" />
    </Container>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import TargetButton from '../components/TargetButton.vue';
  import Container from '../components/Container.vue';

  export default defineComponent({
    components: { TargetButton, Container },
    methods: {
      handleNewCourseClick() {
        console.log('hi');
      },
      handleJoinCourseClick() {
        console.log('join');
      },
    },
  });
</script>

<style scoped>
  .home {
    display: flex;
    align-self: flex-start;
    flex-direction: column;
    align-items: center;
    margin: 10px;
  }

  .logo {
    width: 100px;
  }

  .row {
    display: flex;
    padding: var(--space-lg) var(--space-md);
  }
</style>
