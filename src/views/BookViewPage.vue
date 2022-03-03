<template>
  <base-layout :title="`${book.author} - ${book.title}`">
    <ion-title collapse="condense">ISBN: {{ book.isbn }}</ion-title>
    <p>{{ book.description }}</p>
  </base-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { IonTitle } from "@ionic/vue";
import { useRoute } from "vue-router";
import { useStore } from "../store";

export default defineComponent({
  name: "BookViewPage",
  components: { IonTitle },
  setup() {
    const store = useStore();
    const route = useRoute();
    const bookIsbn = ref();
    const book = ref();

    bookIsbn.value = route.params.id;
    book.value = store.getters.book(bookIsbn.value);

    return { book };
  },
});
</script>
