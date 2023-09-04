import { createRouter, createWebHistory } from 'vue-router'

// Landing Page
import HomeView from '../views/Index.vue'

// Product Routes
import Inner from '../views/product/Product_inner.vue'
import Products from '../views/product/All-products.vue'

// Wishlist Page
import Wishlist from '../views/wishlist/Index.vue'

// Checkout Page
import Checkout from '../views/checkout/Index.vue'

// Cart Page
import Cart from '../views/Cart/Index.vue'

// Contact
import Contact from '../components/Contact.vue'

const routes = [
  // Lannding Page
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  // Product Routes
  {
    path: '/Inner/:id',
    name: 'Inner',
    component: Inner
  },
  {
    path: '/Products',
    name: 'Products',
    component: Products
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
  },
  // Contact
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
