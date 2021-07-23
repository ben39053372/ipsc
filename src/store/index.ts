import { InjectionKey } from '@vue/runtime-core';
import { createStore, Store, useStore as _useStore } from 'vuex';
import { counterModule } from './modules/counter';

export interface State {
  count: number;
}

export const key: InjectionKey<Store<State>> = Symbol();

/**
 * @returns store with type
 */
export function useStore() {
  return _useStore(key);
}

export default createStore<State>({
  strict: import.meta.env.MODE !== 'production',
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  modules: {
    counter: counterModule,
  },
});
