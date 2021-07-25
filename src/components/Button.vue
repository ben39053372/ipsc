<template>
  <button type="button"><slot /></button>
</template>

<script>
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'Button',
  });
</script>

<style scope>
  button {
    background: var(--main-color);
    padding: 8px 20px;
    color: var(--text-color);
    border-radius: 4px;
    border: 0;
    font-weight: 700;
  }
</style>
