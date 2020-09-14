import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    // component: Home
    component: () => import("../views/Home.vue"),
    beforeEnter: async (to, from, next) => {
      await store.dispatch("getAllRoomsApi");
      next();
    }
  },
  {
    path: "/about/:id",
    name: "About",

    component: () =>
      import("../views/About.vue"),
    beforeEnter: async (to, from, next) => {
      await store.dispatch("getRoomData", to.params.id);
      next();
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
