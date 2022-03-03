<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ title }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <slot></slot>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/vue";

export default defineComponent({
  name: "BaseLayout",
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent },
  props: {
    title: { type: String, required: true },
  },
});
</script>
