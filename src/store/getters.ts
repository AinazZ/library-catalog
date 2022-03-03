import { GetterTree } from "vuex";
import { State } from "./state";

export type Getters = {
  books(state: State): Array<any>;
  book(state: State): any;
};

export const getters: GetterTree<State, State> & Getters = {
  books: (state) => {
    return state.books;
  },
  book: (state) => {
    return (bookIsbn: string) => {
      return state.books.find((book) => book.isbn === bookIsbn);
    };
  },
};
