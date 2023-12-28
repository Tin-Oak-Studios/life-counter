import { createRouter, createWebHistory } from 'vue-router'
import { HomeView } from '@/modules/home/views'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/life-counter',
      name: 'lifeCounter',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../modules/life-counter/views/LifeCounterView.vue')
    }
  ]
})

export default router
