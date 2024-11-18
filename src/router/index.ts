import { createRouter, createWebHistory } from 'vue-router'
import OverviewView from '../views/overview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'overview',
      component: OverviewView,
    },
  ],
})

export default router
