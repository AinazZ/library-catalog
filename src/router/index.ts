import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsPage from "../views/TabsPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/mylibrary/catalog",
  },
  {
    path: "/mylibrary/",
    component: TabsPage,
    children: [
      {
        path: "",
        redirect: "/mylibrary/catalog",
      },
      {
        path: "catalog",
        component: () => import("@/views/MainPage.vue"),
      },
      {
        path: "catalog/book/:id",
        component: () => import("@/views/BookViewPage.vue")
      },
      {
        path: "add",
        component: () => import("@/views/AddBookPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
