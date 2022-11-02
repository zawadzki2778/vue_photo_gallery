import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/photo",
    component: () => import("./pages/PhotosPage.vue"),
  },
];

export default new VueRouter({
  mode: "history", //чтобы маршруты работали через слэши //
  routes,
});
