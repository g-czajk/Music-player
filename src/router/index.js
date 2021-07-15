import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    params: true,
  },
  {
    path: "/playlist",
    name: "Playlist",
    component: () => import("../views/Playlist.vue"),
  },
  {
    path: "*",
    name: "NotFound",
    component: Home,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
