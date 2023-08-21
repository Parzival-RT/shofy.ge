<template>
   <div>

      <!-- Pre Loader -->
      <div id="loading" v-if="this.$store.state.loading">
         <div id="loading-center">
            <div id="loading-center-absolute">
               <!-- loading content here -->
               <div class="tp-preloader-content">
                  <div class="tp-preloader-logo">
                     <div class="tp-preloader-circle">
                        <svg width="190" height="190" viewBox="0 0 380 380" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <circle stroke="#D9D9D9" cx="190" cy="190" r="180" stroke-width="6" stroke-linecap="round"></circle> 
                           <circle stroke="red" cx="190" cy="190" r="180" stroke-width="6" stroke-linecap="round"></circle> 
                        </svg>
                     </div>
                     <img src="../assets/img/logo/preloader/preloader-icon.svg" alt="">
                  </div>
                  <h3 class="tp-preloader-title">Shofy.ge</h3>
                  <p class="tp-preloader-subtitle mt-3">იტვირთება</p>
               </div>
            </div>
         </div>  
      </div>
      <!-- End Pre Loader -->
         
      <!-- Header -->
      <Header v-if="!this.$store.state.loading" />
      <!-- End Header -->
      
      <!-- Main -->
      <main v-if="!this.$store.state.loading">
         <!-- Slider --> 
         <Slider />
         <!-- End Slider --> 
         
         <!-- Products -->
         <Products />   
         <!-- End Products -->

         <!-- Rules -->
         <Rules />
         <!-- End Rules -->
      </main>
      <!-- End Main -->
      
      <!-- Footer -->
      <Footer v-if="!this.$store.state.loading" />
      <!-- End Footer -->

   </div>
</template>

<script>
// Header Component
import Header from '@/components/Header.vue'

// Slider Component
import Slider from '@/components/Slider.vue'

// Products
import Products from './product/Products.vue'

// Rules Component
import Rules from '@/components/Rules.vue'

// Footer Component
import Footer from '@/components/Footer.vue'


export default {
  name: '/',
  data() {
    return {
    }
  },
  components: {
   Header,
   Slider,
   Products,
   Rules,
   Footer
  },
  mounted() {

   window.scroll(0, 0);

   // For Loading
   setTimeout(() => {
      this.$store.state.loading = false;
   }, 1000)

  }
}
</script>