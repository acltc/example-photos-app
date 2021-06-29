import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PhotosIndex from "../views/PhotosIndex.vue";
import PhotosNew from "../views/PhotosNew.vue";
import PhotosShow from "../views/PhotosShow.vue";
import PhotosEdit from "../views/PhotosEdit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  { path: "/photos", name: "photos-index", component: PhotosIndex },
  { path: "/photos/new", name: "photos-new", component: PhotosNew },
  { path: "/photos/:id", name: "photos-show", component: PhotosShow },
  { path: "/photos/:id/edit", name: "photos-edit", component: PhotosEdit },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
