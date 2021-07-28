<template>
  <div class="header">
    <h4>Course Intro</h4>
    <Paper class="row">
      <div>Qrcode</div>
      <div>course id: XXX</div>
      <div>rank: XXX</div>
    </Paper>
    <h4>Course Description</h4>
    <Paper class="row">
      <div>gun load</div>
      <div>empty</div>
      <div>紙靶</div>
      <div>鐵靶</div>
      <div>total:</div>
    </Paper>
  </div>
</template>
<script>
  import { defineComponent } from '@vue/runtime-core';
  import Paper from './Paper.vue';
  export default defineComponent({
    name: 'CourseHeader',
    components: {
      Paper,
    },
    setup() {
      return {};
    },
  });
</script>

<style scoped>
  .header {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  .header .row {
    display: flex;
    flex-direction: row;
    flex: 1;
    flex-wrap: wrap;
    padding: 10px;
  }

  .row > * {
    flex: 1;
  }
</style>
