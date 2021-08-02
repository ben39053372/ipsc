<template>
  <button :class="[color, outline ? 'outline' : '']" type="button">
    <slot />
  </button>
</template>

<script>
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'Button',
    props: {
      outline: {
        type: Boolean,
        default: false,
      },
      color: {
        type: String,
        enum: ['primary', 'secondary', 'error', 'warn'],
        default: 'primary',
      },
    },
  });
</script>

<style scope>
  button {
    background: var(--main-color);
    border-color: var(--main-color);
    padding: 8px 20px;
    color: var(--text-color);
    border-radius: 4px;
    border-width: 2;
    border-style: solid;
    font-weight: 700;
    transition: transform 0.1s;
    user-select: none;
  }

  button:active {
    filter: brightness(55%);
  }

  button:hover {
    transform: scale(1.05);
  }

  .primary {
    color: var(--main-color);
    border-color: var(--main-color);
    background: var(--main-color);
  }

  .secondary {
    color: var(--secound-color);
    border-color: var(--secound-color);
    background: var(--secound-color);
  }

  .error {
    color: var(--error-color);
    border-color: var(--error-color);
    background: var(--error-color);
  }

  .warn {
    color: var(--warn-color);
    border-color: var(--warn-color);
    background: var(--warn-color);
  }

  button:not(.outline) {
    color: var(--text-color);
  }

  .outline {
    background: #0001;
    border-width: 2px;
  }
</style>
