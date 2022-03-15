import { mutations } from "@/store/mutations";

describe("setNewBook", () => {
  it("добавляет книгу в хранилище", () => {
    const book = {
      author: "Макс Фрай",
      title: "Мой Рагнарёк",
      isbn: "978-5-367-02286-5",
      description:
        "Это история о конце света. О богах, что должны умереть. О людях, которые больше не боятся смерти.",
    };
    const state = {
      books: [],
    };

    mutations.setNewBook(state, book);

    expect(state).toEqual({
      books: [
        {
          author: "Макс Фрай",
          title: "Мой Рагнарёк",
          isbn: "978-5-367-02286-5",
          description:
            "Это история о конце света. О богах, что должны умереть. О людях, которые больше не боятся смерти.",
        },
      ],
    });
  });
});
