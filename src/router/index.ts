import Home from '@/views/homepage.vue'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      title: 'Skyviator - Book Your Next Flight',
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, behavior: 'smooth' }
  },
})

// Navigation guards for meta tags
router.beforeEach((to, _from, next) => {
  const title = (to.meta.title as string) || 'Skyviator'
  document.title = title
  next()
})

export default router
