<template>
  <div>Home {{ t('name') }}</div>
  <button @click="add">add</button>
  <button @click="sub">sub</button>
  <div>counter: {{ counter }}</div>
</template>
<script>
  import { computed, defineComponent } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { useStore } from '../store';
  import { CounterActionsType } from '../store/modules/counter';
  export default defineComponent({
    name: 'Home',
    setup() {
      const store = useStore();
      const { t } = useI18n();
      return {
        t,
        counter: computed(() => store.state.counter.count),
        add: () => store.dispatch(`counter/${CounterActionsType.add}`),
        sub: () => store.dispatch(`counter/${CounterActionsType.sub}`),
      };
    },
  });
</script>
