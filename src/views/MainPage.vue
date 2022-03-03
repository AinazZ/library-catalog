<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Моя библиотека</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item v-for="book in books" :key="book.isbn" @click="openBook(book.isbn)">
          {{ book.author }} - {{ book.title }}
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
} from "@ionic/vue";
import {useRouter} from "vue-router";
import { useStore } from "../store";

export default defineComponent({
  name: "MainPage",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonList, IonItem },
  setup() {
    const store = useStore();
    const router = useRouter();

    const books = computed(() => store.state.books);

    function openBook(isbn: string) {
      router.push('/mylibrary/catalog/book/' + isbn);
    }

    return { books, openBook };
  },
});
</script>
