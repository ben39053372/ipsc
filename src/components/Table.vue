<template>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th v-for="key in headers" :key="key">
          {{ key }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(entry, index) in data" :key="index">
        <td>{{ index + 1 }}</td>
        <td v-for="(key, i) in headers" :key="i">
          {{ entry[key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
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

<style scoped>
  table {
    display: block;
    overflow: auto;
    text-align: center;
  }

  table * {
    width: 100%;
  }

  thead {
    background-color: #0003;
  }

  tbody {
    display: block;
    background-color: #0001;
    height: 50vh;
    overflow-y: auto;
  }

  th {
    padding: 4px 10px;
  }

  td {
    padding: 8px 10px;
  }
</style>
