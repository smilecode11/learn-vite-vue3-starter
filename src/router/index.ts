import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "HomePage",
    component: Home,
  },
  {
    path: "/element-plus",
    name: "ElementPlus",
    component: () => import("@/views/element-plus.vue"),
  },
  {
    path: "/axios",
    name: "Axios",
    component: () => import("@/views/axios.vue"),
  },
  {
    path: "/scss",
    name: "Scss",
    component: () => import("@/views/scss.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
