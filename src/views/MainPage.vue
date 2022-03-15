<template>
  <base-layout title="Моя библиотека">
    <books-list :books="sortedBooks"></books-list>
  </base-layout>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import BooksList from "../components/books/BooksList.vue";
import { useRouter } from "vue-router";
import { useStore } from "../store";

export default defineComponent({
  name: "MainPage",
  components: { BooksList },
  setup() {
    const store = useStore();
    const router = useRouter();

    const sortedBooks = computed(() => store.getters.sortedBooks);

    function openBook(isbn: string) {
      router.push("/mylibrary/catalog/book/" + isbn);
    }

    return { sortedBooks, openBook };
  },
});
</script>
