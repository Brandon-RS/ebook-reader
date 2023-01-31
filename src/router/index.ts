import { createRouter, createWebHistory } from 'vue-router'
import booksRouter from '@/modules/library/router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/books',
      ...booksRouter,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    }
  ],
  linkActiveClass: 'active-route',
  linkExactActiveClass: 'active-exact-route',
})

export default router
