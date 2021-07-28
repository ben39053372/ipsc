<template>
  <table>
    <thead>
      <tr>
        <th v-for="key in headers" :key="key">
          {{ key }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(entry, index) in data" :key="index">
        <td v-for="(key, i) in headers" :key="i">
          {{ entry[key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script lang="ts">
  import { defineComponent } from '@vue/runtime-core';
  import { PropType } from 'vue';

  export default defineComponent({
    props: {
      headers: {
        type: Array as PropType<string[]>,
        required: true,
      },
      data: {
        type: Array as PropType<any[]>,
        required: true,
      },
    },
    setup(props) {},
  });
</script>
