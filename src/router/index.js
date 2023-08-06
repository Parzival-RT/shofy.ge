import { createRouter, createWebHistory } from 'vue-router'

// Landing Page
import HomeView from '../views/Index.vue'
// Wishlist Page
import Wishlist from '../views/wishlist/Wishlist.vue'
// Checkout Page
import Checkout from '../views/checkout/Index.vue'
// Cart Page
import Cart from '../views/Cart/Index.vue'

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
  },
  // Checkout Page
  {
    path: '/Checkout',
    name: 'Checkout',
    component: Checkout
  },
  // Cart Page
  {
    path: '/Cart',
    name: 'Cart',
    component: Cart
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
