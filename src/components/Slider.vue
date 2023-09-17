<template>
   <section class="tp-slider-area p-relative z-index-1">
      <div class="tp-slider-active tp-slider-variation swiper-container">
         <div class="swiper-wrapper">
            <swiper
               :pagination="{
                  type: 'progressbar',
               }"
               :autoplay="{
                  delay: 8000,
                  disableOnInteraction: false,
               }"
               :navigation="{
                  nextEl: '.tp-slider-button-next',
                  prevEl: '.tp-slider-button-prev',
               }"
               :modules="modules"
               class="mySwiper mx-0 w-100"
               >

               <!-- Slider Content -->
               <swiper-slide>
                  <div class="tp-slider-item tp-slider-height d-flex align-items-center swiper-slide main-slider-bg">
                     <div class="tp-slider-shape">
                        <img class="tp-slider-shape-1" src="../assets/img/slider/shape/slider-shape-1.png" alt="slider-shape">
                        <img class="tp-slider-shape-2" src="../assets/img/slider/shape/slider-shape-2.png" alt="slider-shape">
                        <img class="tp-slider-shape-3" src="../assets/img/slider/shape/slider-shape-3.png" alt="slider-shape">
                        <img class="tp-slider-shape-4" src="../assets/img/slider/shape/slider-shape-4.png" alt="slider-shape">
                     </div>
                     <div class="container">
                        <div class="row align-items-center">
                           <div class="col-xl-5 col-lg-6 col-md-6 mt-3 mt-sm-0">
                              <div class="tp-slider-content p-relative z-index-1">
                                 <span><b>₾274.00</b></span>
                                 <h3 class="tp-slider-title">ორთქლით ფარების გამწმდენდი გასაპრიალებელი ნაკრები</h3>
                                 <p>ექსკლუზიური შეთავაზება
                                       <span>-20% 
                                          <svg width="94" height="20" viewBox="0 0 94 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M74.8576 4.63367L78.6048 5.11367C80.9097 5.35155 82.8309 5.75148 84.4483 5.97993L86.6581 6.31091L88.4262 6.63948C89.4684 6.81761 90.2699 6.9312 90.8805 6.99186C93.3213 7.24888 92.7011 6.63674 92.8183 6.12534C92.9355 5.61394 93.7175 5.37081 91.3267 4.45886C90.73 4.24001 89.9345 3.97481 88.8826 3.65818L87.1034 3.12577L84.8643 2.63282C83.236 2.28025 81.2402 1.82307 78.8684 1.52138L75.0177 0.981633C73.6188 0.823014 72.1417 0.730003 70.5389 0.582533C63.0297 0.0282543 55.4847 0.193022 48.0068 1.07459C39.9065 2.04304 31.9328 3.87384 24.2213 6.53586C18.0824 8.61764 12.1674 11.3089 6.56479 14.5692C4.88189 15.5255 3.25403 16.5756 1.68892 17.7145C0.568976 18.5077 -0.00964231 18.9932 0.0547097 19.0858C0.388606 19.6584 10.6194 13.1924 25.151 8.99361C32.789 6.72748 40.6283 5.20536 48.5593 4.44848C55.8569 3.76455 63.1992 3.69678 70.5082 4.24591L74.8223 4.62335" fill="currentColor"/>
                                          </svg>
                                       </span>
                                 </p>
                                 <div class="tp-slider-btn">
                                    <router-link to="/inner/4" class="tp-btn tp-btn-2 tp-btn-white">შეუკვეთე ახლავე
                                       <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M16 6.99976L1 6.99976" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M9.9502 0.975414L16.0002 6.99941L9.9502 13.0244" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                       </svg>
                                    </router-link>
                                 </div>
                              </div>
                           </div>
                           <div class="col-xl-7 col-lg-6 col-md-6">
                              <div class="tp-slider-thumb text-start text-sm-end">
                                 <img src="../assets/img/slider/test-product.png" alt="slider-img">
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </swiper-slide>
               <!-- End Slider Content -->

                <!-- Slider Content -->
               <swiper-slide>
                  <div class="tp-slider-item tp-slider-height d-flex align-items-center swiper-slide main-slider-bg">
                     <div class="tp-slider-shape">
                        <img class="tp-slider-shape-1" src="../assets/img/slider/shape/slider-shape-1.png" alt="slider-shape">
                        <img class="tp-slider-shape-2" src="../assets/img/slider/shape/slider-shape-2.png" alt="slider-shape">
                        <img class="tp-slider-shape-3" src="../assets/img/slider/shape/slider-shape-3.png" alt="slider-shape">
                        <img class="tp-slider-shape-4" src="../assets/img/slider/shape/slider-shape-4.png" alt="slider-shape">
                     </div>
                     <div class="container">
                        <div class="row align-items-center">
                           <div class="col-xl-5 col-lg-6 col-md-6 mt-3 mt-sm-0">
                              <div class="tp-slider-content p-relative z-index-1">
                                 <span><b>₾274.00</b></span>
                                 <h3 class="tp-slider-title">ორთქლით ფარების გამწმდენდი გასაპრიალებელი ნაკრები</h3>
                                 <p>ექსკლუზიური შეთავაზება
                                       <span>-20% 
                                          <svg width="94" height="20" viewBox="0 0 94 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M74.8576 4.63367L78.6048 5.11367C80.9097 5.35155 82.8309 5.75148 84.4483 5.97993L86.6581 6.31091L88.4262 6.63948C89.4684 6.81761 90.2699 6.9312 90.8805 6.99186C93.3213 7.24888 92.7011 6.63674 92.8183 6.12534C92.9355 5.61394 93.7175 5.37081 91.3267 4.45886C90.73 4.24001 89.9345 3.97481 88.8826 3.65818L87.1034 3.12577L84.8643 2.63282C83.236 2.28025 81.2402 1.82307 78.8684 1.52138L75.0177 0.981633C73.6188 0.823014 72.1417 0.730003 70.5389 0.582533C63.0297 0.0282543 55.4847 0.193022 48.0068 1.07459C39.9065 2.04304 31.9328 3.87384 24.2213 6.53586C18.0824 8.61764 12.1674 11.3089 6.56479 14.5692C4.88189 15.5255 3.25403 16.5756 1.68892 17.7145C0.568976 18.5077 -0.00964231 18.9932 0.0547097 19.0858C0.388606 19.6584 10.6194 13.1924 25.151 8.99361C32.789 6.72748 40.6283 5.20536 48.5593 4.44848C55.8569 3.76455 63.1992 3.69678 70.5082 4.24591L74.8223 4.62335" fill="currentColor"/>
                                          </svg>
                                       </span>
                                 </p>
                                 <div class="tp-slider-btn">
                                    <router-link to="/inner/4" class="tp-btn tp-btn-2 tp-btn-white">შეუკვეთე ახლავე
                                       <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M16 6.99976L1 6.99976" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M9.9502 0.975414L16.0002 6.99941L9.9502 13.0244" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                       </svg>
                                    </router-link>
                                 </div>
                              </div>
                           </div>
                           <div class="col-xl-7 col-lg-6 col-md-6">
                              <div class="tp-slider-thumb text-start text-sm-end">
                                 <img src="../assets/img/slider/test-product.png" alt="slider-img">
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </swiper-slide>
               <!-- End Slider Content -->

            </swiper>
         </div>

         <!-- Swiper Buttons -->
         <div class="tp-slider-arrow tp-swiper-arrow d-none d-md-block">
            <button type="button" class="tp-slider-button-prev">
               <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 13L1 7L7 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>                        
            </button>
            <button type="button" class="tp-slider-button-next">
               <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 13L7 7L1 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>                        
            </button>
         </div>
         <!-- End Swiper Buttons -->
      </div>
   </section>
</template>

<script>

// Import Swiper Vue.js components and required modules : js parts
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default {
   name: "Slider",
   components: {
      Swiper,
      SwiperSlide
   },
   setup() {
      // Swiper Modules
      return {
         modules: [Pagination, Navigation, Autoplay],
      };
   }
}
</script>

<style>

</style>