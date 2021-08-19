<template>
  <div>Course List</div>
  <button @click="logData">click</button>
  <div v-for="course in courses || []" :key="course._id">
    <div>{{ course._id }}</div>
    <div>paper: {{ course.paper }}</div>
    <div>noShoot: {{ course.noShoot }}</div>
    <div>popper: {{ course.popper }}</div>
    <div>startingPosition: {{ course.startingPosition }}</div>
    <div>paper: {{ course.paper }}</div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import useSWRV from 'swrv';
  import { getAllCourses } from '../apis/course';

  export default defineComponent({
    name: 'CourseList',
    setup() {
      const { data: courses, error } = useSWRV('/api/courses', getAllCourses);

      const logData = () => {
        console.log(courses);
      };

      return {
        courses,
        error,
        logData,
        data: [{ id: 'asdasd' }],
      };
    },
  });
</script>
