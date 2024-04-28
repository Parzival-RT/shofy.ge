import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Main css
import '@/assets/css/bootstrap.css'
import '@/assets/css/main.css'
import '@/assets/css/animate.css'
import '@/assets/css/spacing.css'
import '@/assets/css/swiper-bundle.css'
import '@/assets/css/tio-icon.css'


// For Meta Data
import { createHead } from '@unhead/vue'
const head = createHead()


createApp(App).use(store).use(head).use(router).mount('#app')
