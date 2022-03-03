import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import { State, state } from "./state";
import { getters } from "./getters";

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state,
  getters,
});

export function useStore() {
  return baseUseStore(key);
}
