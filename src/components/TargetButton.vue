<template lang="">
  <div class="container">
    <div class="target" />
    <span class="text">{{ text }}</span>
  </div>
</template>
<script>
  import { defineComponent } from 'vue';

  export default defineComponent({
    props: {
      text: {
        type: String,
        default: '',
      },
    },
  });
</script>
<style scoped>
  .container {
    user-select: none;
    position: relative;
    width: 180px;
    height: 180px;
    transition: transform 0.2s;
    filter: drop-shadow(10px 10px 20px #0006);
  }

  .container:hover {
    filter: drop-shadow(13px 13px 25px #0006);
    transform: scale(1.03);
  }

  .container:active {
    filter: drop-shadow(5px 5px 10px #0006);
    transform: scale(0.98);
  }

  .target {
    width: 100%;
    height: 100%;
    background-color: rgb(244, 195, 118);
    -webkit-clip-path: polygon(
      35% 0,
      65% 0,
      90% 33%,
      90% 66%,
      65% 100%,
      35% 100%,
      10% 66%,
      10% 33%
    );
    clip-path: polygon(
      35% 0,
      65% 0,
      90% 33%,
      90% 66%,
      65% 100%,
      35% 100%,
      10% 66%,
      10% 33%
    );
  }

  .text {
    position: absolute;
    left: 50%;
    top: 50%;
    font-size: var(--text-lg);
    font-weight: bold;
    text-align: center;
    vertical-align: center;
    color: #333;
    transform: translate(-50%, -50%);
  }
</style>
