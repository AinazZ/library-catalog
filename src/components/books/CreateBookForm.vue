<template>
  <form @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Автор книги</ion-label>
        <ion-input type="text" required v-model="authorName" />
      </ion-item>
      <ion-item>
        <ion-label position="floating">Название книги</ion-label>
        <ion-input type="text" required v-model="bookName" />
      </ion-item>
      <ion-item>
        <ion-label position="floating">ISBN</ion-label>
        <ion-input type="text" required v-model="isbn" />
      </ion-item>
      <ion-item>
        <ion-label position="floating">Краткий отзыв к книге</ion-label>
        <ion-textarea rows="5" v-model="description"></ion-textarea>
      </ion-item>

      <ion-button type="submit">Сохранить</ion-button>
    </ion-list>
  </form>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton } from "@ionic/vue";

export default defineComponent({
  name: "CreateBookForm",
  components: { IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton },
  emits: ["save-book"],
  setup(props, { emit }) {
    const initialState = reactive({
      authorName: "",
      bookName: "",
      isbn: "",
      description: "",
    });
    const state = reactive({...initialState});

    function resetForm() {
      Object.assign(state, initialState);
    }

    function submitForm() {
      const newBook = {
        author: state.authorName,
        title: state.bookName,
        isbn: state.isbn,
        description: state.description,
      };
      emit("save-book", newBook);

      resetForm();
    }

    return { submitForm, ...toRefs(state) };
  },
});
</script>
