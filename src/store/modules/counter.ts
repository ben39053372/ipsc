import { Dispatch, Module } from 'vuex';

export interface CounterState {
  count: number;
}

export enum CounterMutationsType {
  add = 'ADD',
  sub = 'SUB',
}

export enum CounterActionsType {
  add = 'ADD',
  sub = 'SUB',
}

export const counterModule: Module<CounterState, any> = {
  namespaced: true,
  state: () => ({
    count: 0,
  }),
  mutations: {
    [CounterMutationsType.add](state) {
      state.count++;
    },
    [CounterMutationsType.sub](state) {
      state.count--;
    },
  },
  actions: {
    [CounterActionsType.add]({ commit }) {
      commit(CounterMutationsType.add);
    },
    [CounterActionsType.sub]({ commit }) {
      commit(CounterMutationsType.sub);
    },
  },
  getters: {},
};
