<template>
  <base-layout title="Моя библиотека">
    <ion-list>
      <ion-item v-for="book in books" :key="book.isbn" @click="openBook(book.isbn)">
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

    function openBook(isbn: string) {
      router.push("/mylibrary/catalog/book/" + isbn);
    }

    return { books, openBook };
  },
});
</script>
