<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Book View</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <ion-title collapse="condense">{{ book.author }} - {{ book.title }}</ion-title>
      <p>{{ book.description }}</p>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/vue";
import { useRoute } from "vue-router";
import { useStore } from "../store";

export default defineComponent({
  name: "BookViewPage",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
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
