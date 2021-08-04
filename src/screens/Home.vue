<template lang="">
  <div class="home">
    <TargetButton text="New Course" @click="handleNewCourseClick" />
    <TargetButton text="A" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import TargetButton from '../components/TargetButton.vue';
  export default defineComponent({
    components: { TargetButton },
    methods: {
      handleNewCourseClick() {
        console.log('hi');
      },
    },
  });
</script>

<style scoped>
  .home {
    display: flex;
    align-self: flex-start;
    justify-content: stretch;
    margin: 10px;
  }
</style>
