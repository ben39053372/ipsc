<template lang="">
  <input :value="modelValue" @input="handleInput" />
</template>
<script lang="ts">
  import { defineComponent } from '@vue/runtime-core';

  export default defineComponent({
    name: 'Input',
    props: {
      modelValue: {
        type: String,
        require: true,
        default: '',
      },
    },
    emits: ['update:modelValue'],
    methods: {
      handleInput(e: Event) {
        console.log(e);
        this.$emit('update:modelValue', (e.target as HTMLInputElement).value);
      },
    },
  });
</script>

<style lang="postcss" scoped>
  input {
    padding: 10px 10px;
    border: 1px solid #0002;
    border-radius: 8px;
    outline: none;
  }

  input:focus {
    border-color: var(--main-color);
    box-shadow: 0 0 3px 1px var(--main-color);
  }
</style>
