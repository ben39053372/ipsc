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
    display: flex;
    flex-wrap: wrap;
    background: var(--paper-bg-color);
    padding: 10px 28px;
    border-radius: 10px;
    color: var(--paper-text-color);
    text-shadow: #0004 1px 2px 4px;
    box-shadow: 1px 1px 10px #999;
    font-weight: 700;
    margin-bottom: 8px;
  }
</style>
