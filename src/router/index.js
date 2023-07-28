import { createRouter, createWebHistory } from 'vue-router'

// Landing Page
import HomeView from '../views/Index.vue'

// Wishlist Page
import Wishlist from '../views/wishlist/Wishlist.vue'

const routes = [
  // Lannding Page
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  // Wishlist Page
  {
    path: '/Wishlist',
    name: 'Wishlist',
    component: Wishlist
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
