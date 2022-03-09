import { ActionTree } from "vuex";
import { State } from "./state";

export const actions = <ActionTree<State, any>>{
  setNewBook(context, newBook) {
    context.commit('setNewBook', newBook);
  }
};