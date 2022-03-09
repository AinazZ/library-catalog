import { MutationTree } from "vuex";
import { State } from "./state";

export const mutations = <MutationTree<State>>{
  setNewBook(state, newBook) {
    state.books.unshift(newBook);
  }
};