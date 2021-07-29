<template>
  <div class="container">
    <CourseHeader />
    <!-- <CourseFinalRecord /> -->
    <CourseScoreboard />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import CourseHeader from '../components/CourseHeader.vue';
  import CourseFinalRecord from '../components/CourseFinalRecord.vue';
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
    align-self: flex-start;
    padding: 10px 30px;
  }
</style>
