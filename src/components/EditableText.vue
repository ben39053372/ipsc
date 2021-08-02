<template>
  <span v-if="!isEdit" :value="value" @click="handleOnClick">
    {{ value }}
  </span>
  <div v-if="isEdit">
    <input
      ref="input"
      size="1"
      :type="type"
      :value="value"
      @input="handleInput"
      @blur="handleOnBlur"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'EditableText',
    props: {
      number: {
        type: Boolean,
        default: false,
      },
      value: {
        type: [String, Number],
        required: true,
      },
      type: {
        type: [String],
        default: 'text',
      },
    },
    emits: ['update:value'],
    data() {
      return {
        isEdit: false,
      };
    },
    methods: {
      handleInput(event: any) {
        this.$emit('update:value', event.target.value);
      },
      handleOnClick() {
        this.isEdit = true;
        setTimeout(() => {
          (this.$refs.input as any).focus();
        }, 1);
      },
      handleOnBlur() {
        this.isEdit = false;
      },
    },
  });
</script>

<style scoped>
  input {
    /* padding: 10px 10px; */
    min-width: 50px;
    max-width: 8ch;
    border: 1px solid #0002;
    border-radius: 8px;
    outline: none;
    display: inline-block;
    background-color: #fff4;
  }

  input:focus {
    border-color: var(--main-color);
    box-shadow: 0 0 3px 1px var(--main-color);
  }

  span {
    display: inline-block;
    min-width: 20px;
    min-height: 20px;
  }
</style>
