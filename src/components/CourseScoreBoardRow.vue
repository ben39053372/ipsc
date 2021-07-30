<template>
  <tr>
    <td v-for="(col, i) in source" :key="i">
      {{ col }}
    </td>
  </tr>
</template>
<script>
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'CourseScoreBoardRow',
    props: {
      index: {
        type: Number,
        required: true,
      },
      source: {
        type: Object,
        required: true,
      },
    },
  });
</script>
