import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import { State, state } from "./state";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state,
  getters,
  actions,
  mutations,
});

export function useStore() {
  return baseUseStore(key);
}
