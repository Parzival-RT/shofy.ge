import { createRouter, createWebHistory } from 'vue-router'

// Landing Page
import HomeView from '../views/Index.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
