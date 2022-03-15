<template>
  <ion-item @click="openItem(book.isbn)"> {{ book.author }} - {{ book.title }} </ion-item>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonItem } from "@ionic/vue";

export default defineComponent({
  props: ["book"],
  components: {
    IonItem,
  },
  setup(props, { emit }) {
    function openItem(isbn: string) {
      emit("open-book", isbn);
    }

    return { openItem };
  },
});
</script>
