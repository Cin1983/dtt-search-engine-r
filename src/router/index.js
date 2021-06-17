import { createRouter, createWebHistory } from "vue-router";
import home from "../views/home.vue";
import categories from "../views/categories.vue";



const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/categories",
    name: "categories",
    component: categories,
  },

  {
    path: "/random",
    name: "random",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Random" */ "../views/Random.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;