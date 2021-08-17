<template>
  <div class="header">
    <h4>Course Intro</h4>
    <Paper class="row">
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
  import { defineComponent } from 'vue';
  import Paper from '../Paper.vue';
  import { useI18n } from 'vue-i18n';

  export default defineComponent({
    name: 'CourseHeader',
    components: {
      Paper,
    },
    setup() {
      const { t } = useI18n();
      return { t };
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
    padding: 12px 18px;
  }

  .row > * {
    flex: 1;
  }
</style>
