<template>
  <base-layout title="Моя библиотека">
    <ion-list>
      <ion-item v-for="book in sortedBooks" :key="book.isbn" @click="openBook(book.isbn)">
        {{ book.author }} - {{ book.title }}
      </ion-item>
    </ion-list>
  </base-layout>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { IonList, IonItem } from "@ionic/vue";
import { useRouter } from "vue-router";
import { useStore } from "../store";

export default defineComponent({
  name: "MainPage",
  components: { IonList, IonItem },
  setup() {
    const store = useStore();
    const router = useRouter();

    const books = computed(() => store.state.books);
    const sortedBooks = books.value.sort(function(a, b) {
      let authorA = a.author.toLowerCase(), authorB = b.author.toLowerCase();
      if (authorA < authorB) {
        return -1;
      }
      if (authorA > authorB) {
        return 1;
      }
      return 0;
    });

    function openBook(isbn: string) {
      router.push("/mylibrary/catalog/book/" + isbn);
    }

    return { sortedBooks, openBook };
  },
});
</script>
