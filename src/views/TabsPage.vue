<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="catalog" href="/mylibrary/catalog">
          <ion-icon :icon="listOutline" />
          <ion-label>Каталог</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="add" href="/mylibrary/add">
          <ion-icon :icon="addOutline" />
          <ion-label>Добавить книгу</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import { listOutline, addOutline } from "ionicons/icons";

export default defineComponent({
  name: "TabsPage",
  components: {
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
    IonRouterOutlet,
  },
  setup() {
    return {
      listOutline,
      addOutline,
    };
  },
});
</script>
