<template>
  <div>Course List</div>
  <div>{{ data }}</div>
</template>
<script lang="ts">
  import { defineComponent } from '@vue/runtime-core';
  import useSWRV from 'swrv';
  import { getAllCourses } from '../apis/course';
  export default defineComponent({
    name: 'CourseList',
    async setup() {
      const { data, error } = useSWRV('/api/courses', getAllCourses);

      console.log(data);

      return {
        data,
        error,
      };
    },
  });
</script>
