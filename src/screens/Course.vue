<template>
  <div class="container">
    <CourseHeader />
    <CourseRecord />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import CourseHeader from '../components/CourseHeader.vue';
  import CourseRecord from '../components/CourseRecord.vue';

  export default defineComponent({
    components: { CourseHeader, CourseRecord },
    provide: {},
    setup() {},
  });
</script>

<style scoped>
  .container {
    flex: 1;
    align-self: flex-start;
    margin: 10px 30px;
  }
</style>
