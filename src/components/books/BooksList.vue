<template>
  <ion-list>
    <book-list-item v-for="book in books" :key="book.isbn" :book="book"></book-list-item>
  </ion-list>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonList } from "@ionic/vue";
import BookListItem from "./BookListItem.vue";

export default defineComponent({
  props: ["books"],
  components: {
    IonList,
    BookListItem,
  },
});
</script>
