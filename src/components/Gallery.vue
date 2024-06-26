<template>
   <section class="tp-banner-area pt-80 pb-80 dark-common-bg">
      <!-- Container -->
      <div class="container">
         <!-- Row -->
         <div class="row gy-5 gx-0 gx-sm-5 align-items-center">

            <!-- Col -->
            <div class="col-xl-5">
               <img class="bg-light w-100 shadow-sm rounded" src="https://cdnvendoo.s3.eu-central-1.amazonaws.com/storage/products/2024-02/Untitled_-_2024-02-19T123947.847130546713612_45_13_900x900.jpg" alt="main product">
            </div>
            <!-- End Col -->

            <!-- Col -->
            <div class="col-xl-7">
               <div class="tp-product-price-wrapper mb-20">
                  <span class="tp-product-price fs-6 text-white bg-primary px-2 py-1 rounded">უმაღლესი ხარისხის მასალა</span>
               </div>
               <h3 class="tp-section-title text-white">Samsung S928B Galaxy S24 Ultra 12GB/512GB Black მობილური ტელეფონი</h3>
               <p class="tp-section-description text-white">ოპერატიული მეხსიერება: 12 GB / შიდა მეხსიერება: 512 GB</p>
               <div class="tp-product-banner-btn mt-50">
                  <router-link to="/inner/5" class="tp-product-details-buy-now-btn placeholder-wave">
                     შეუკვეთე ახლავე
                     <svg class="ms-1" width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 6.99976L1 6.99976" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9.9502 0.975414L16.0002 6.99941L9.9502 13.0244" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                     </svg>
                  </router-link>
               </div>
            </div>
            <!-- End Col -->

         </div>
         <!-- End Row -->
      </div>
      <!-- End Container -->
   </section>
</template>

<script>
export default {
   name: "Gallery"
}
</script>

<style scoped>
.tp-product-details-buy-now-btn {
   background-color: var(--main-slider-bg);
   border: 1px solid transparent;
}
.tp-product-details-buy-now-btn:hover {
   background-color: var(--main-slider-bg);
   border: 1px solid #fff;
}

.tp-product-price {
   font-feature-settings: "case" on;
   text-transform: uppercase;
   font-family: var(--Main-Font);
}
</style>