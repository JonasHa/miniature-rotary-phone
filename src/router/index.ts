import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/homepage.vue"),
    meta: {
      title: "Skyviator - Book Your Next Flight",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    }
    return { top: 0, behavior: "smooth" };
  },
});

// Navigation guards for meta tags
router.beforeEach((to, _from, next) => {
  const title = (to.meta.title as string) || "Skyviator";
  document.title = title;
  next();
});

export default router;
