<template>
  <div class="container">
    <CourseHeader />
    <CourseScoreboard />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import CourseHeader from '../components/CourseHeader.vue';
  import CourseScoreboard from '../components/CourseScoreboard.vue';

  export default defineComponent({
    components: {
      CourseHeader,
      // CourseFinalRecord,
      CourseScoreboard,
    },
    provide: {},
    setup() {},
  });
</script>

<style scoped>
  .container {
    flex: 1;
    max-width: 90%;
    align-self: flex-start;
    margin: 10px -10px;
  }
</style>
