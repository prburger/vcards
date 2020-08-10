import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue-icons.min.css";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../components/Home.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/About.vue")
  },
  {
    path: "/edit",
    name: "Edit",
    component: () =>
      import(/* webpackChunkName: "edit" */ "../components/Edit.vue")
  },
  {
    path: "/delete",
    name: "Delete",
    component: () =>
      import(/* webpackChunkName: "delete" */ "../components/Delete.vue")
  },
  {
    path: "/insert",
    name: "Insert",
    component: () =>
      import(/* webpackChunkName: "insert" */ "../components/Insert.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
