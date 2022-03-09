<template>
  <base-layout title="Добавить книгу">
    <create-book-form @save-book="saveBook"></create-book-form>
  </base-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../store";
import CreateBookForm from "../components/books/CreateBookForm.vue";

export default defineComponent({
  name: "AddBookPage",
  components: {
    CreateBookForm,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    function saveBook(newBook: {
      author: string;
      title: string;
      isbn: string;
      description: string | undefined;
    }) {
      store.dispatch("setNewBook", newBook);
      router.push("/mylibrary/catalog");
    }

    return { saveBook };
  },
});
</script>
