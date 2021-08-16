<template lang="">
  <input
    :class="{ small }"
    :value="modelValue.toString()"
    @input="handleInput"
  />
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Input',
    props: {
      modelValue: {
        type: [String, Number, Boolean],
        require: true,
        default: '',
      },
      small: {
        type: Boolean,
        default: false,
      },
    },
    emits: ['update:modelValue'],
    methods: {
      handleInput(e: Event) {
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

  .small {
    padding: 2px 4px;
    border-radius: 4px;
  }
</style>
