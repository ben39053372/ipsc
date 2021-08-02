<template>
  <h4>Scoreboard</h4>
  <Paper class="record">
    <div style="height: 450px; overflow: auto; overscroll-behavior: none">
      <table>
        <thead>
          <tr>
            <th>ID:</th>
            <th v-for="(header, id) in headers" :key="id">
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(scores, index) in data" :key="index">
            <tr>
              <td>{{ index + 1 }}</td>
              <td v-for="(score, key) in scores" :key="key">
                <EditableText
                  v-if="key === 'name'"
                  type="text"
                  :value="data[index][key]"
                  @update:value="event => handleValueChange(index, key, event)"
                />
                <EditableText
                  v-else-if="key === 'A'"
                  type="number"
                  :value="data[index][key]"
                  @update:value="event => handleValueChange(index, key, event)"
                />
                <EditableText
                  v-else-if="key === 'C'"
                  type="number"
                  :value="data[index][key]"
                  @update:value="event => handleValueChange(index, key, event)"
                />
                <EditableText
                  v-else-if="key === 'D'"
                  :value="data[index][key]"
                  type="number"
                  @update:value="event => handleValueChange(index, key, event)"
                />
                <EditableText
                  v-else-if="key === 'PP'"
                  type="number"
                  :value="data[index][key]"
                  @update:value="event => handleValueChange(index, key, event)"
                />
                <EditableText
                  v-else-if="key === 'NS'"
                  type="number"
                  :value="data[index][key]"
                  @update:value="event => handleValueChange(index, key, event)"
                />
                <EditableText
                  v-else-if="key === 'Miss'"
                  :value="data[index][key]"
                  type="number"
                  @update:value="event => handleValueChange(index, key, event)"
                />
                <EditableText
                  v-else-if="key === 'Pro'"
                  :value="data[index][key]"
                  type="number"
                  @update:value="event => handleValueChange(index, key, event)"
                />
                <EditableText
                  v-else-if="key === 'Time'"
                  :value="data[index][key]"
                  type="number"
                  @update:value="event => handleValueChange(index, key, event)"
                />
                <EditableText
                  v-else-if="key === 'total'"
                  :value="data[index][key]"
                  type="number"
                  @update:value="event => handleValueChange(index, key, event)"
                />
                <span v-else-if="key === 'score'">{{ data[index][key] }}</span>
                <!-- <EditableText
                  v-else-if="key === 'score'"
                  :value="data[index][key]"
                  type="number"
                  @update:value="event => handleValueChange(index, key, event)"
                /> -->
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </Paper>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Paper from './Paper.vue';
  import data from '../mock/data.json';
  import EditableText from './EditableText.vue';
  export default defineComponent({
    components: {
      Paper,
      EditableText,
    },
    data() {
      return {
        headers: [
          'name',
          'A',
          'C',
          'D',
          'PP',
          'NS',
          'Miss',
          'Pro',
          'Time',
          'total',
          'score',
        ],
        data: data as { [key: string]: any }[],
      };
    },
    methods: {
      handleValueChange(index: any, key: any, value: any) {
        console.log(index, key, value);
        this.data[index][key] = value;
      },
    },
  });
</script>

<style scoped>
  .record {
    overflow: auto;
    max-width: 100vw;
  }

  table {
    background-color: var(--secound-color);
    width: 100%;
    position: relative;
    text-align: center;
    border-collapse: collapse;
    overscroll-behavior: none;
  }

  thead {
    box-shadow: inset 0 4px 20px -10px #000;
  }

  tbody {
    margin-top: 50px;
    color: var(--text-color);
  }

  th,
  td {
    padding: 8px 2px;
    min-width: 80px;
  }

  tr:nth-child(odd) {
    background-color: #0002;
  }

  th {
    position: sticky !important;
    position: -webkit-sticky !important;
    background-color: #ccc;
    top: -1px;
  }
</style>
