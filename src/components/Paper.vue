<template lang="">
  <div class="paper"><slot /></div>
</template>
<script>
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Paper',
  });
</script>
<style>
  .paper {
    background: var(--paper-bg-color);
    padding: 30px 40px;
    border-radius: 10px;
    color: var(--paper-text-color);
    text-shadow: #0004 0 0 5px;
    box-shadow: 1px 1px 10px #999;
    font-weight: 700;
    margin-bottom: 8px;
  }
</style>
