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
                        <img src="../../assets/img/logo/preloader/preloader-icon.svg" alt="">
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

      <!-- Mobile Header -->
      <MobileHeader />
      <!-- End Mobile Header --> 

      <main>

         <!-- breadcrumb area start -->
         <section class="breadcrumb__area include-bg pt-80 pb-50">
            <div class="container">
               <div class="row">
                  <div class="col-xxl-12 text-center text-md-start">
                     <div class="breadcrumb__content p-relative z-index-1">
                        <h3 class="breadcrumb__title">სურვილები</h3>
                        <div class="breadcrumb__list">
                           <span><router-link to="/">მთავარი</router-link></span>
                           <span>სურვილების სია</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <!-- breadcrumb area end -->

         <!-- cart area start -->
         <section class="tp-cart-area pb-120">
            <div class="container">
               <div class="row">
                  <div class="col-xl-12">
                     <div class="tp-cart-list mb-45">
                        <!-- WishList table-->
                        <table v-if="wishlist_products.length != []" class="table">
                           <thead>
                           <tr>
                              <th colspan="2" class="tp-cart-header-product">პროდუქტი</th>
                              <th class="tp-cart-header-price">ფასი</th>
                              <th class="tp-cart-header-quantity">რაოდენობა</th>
                              <th>მოქმედება</th>
                              <th></th>
                           </tr>
                           </thead>
                           <tbody>
                              <tr v-for="(item, index) in wishlist_products" :key="index">
                                 <!-- img -->
                                 <td class="tp-cart-img"><router-link :to="'/inner/'+item.id"> <img :src="item.image" alt=""></router-link></td>
                                 <!-- title -->
                                 <td class="tp-cart-title"><router-link :to="'/inner/'+item.id">{{ item.title }}</router-link></td>
                                 <!-- price -->
                                 <td class="tp-cart-price"><span>{{ item.price }} ₾</span></td>
                                 <!-- quantity -->
                                 <td class="tp-cart-quantity">
                                    <div class="tp-product-quantity mt-10 mb-10">
                                          <span class="tp-cart-minus" @click="minus(item.id)">
                                             <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path d="M1 1H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                             </svg>                                                             
                                          </span>
                                          <input class="tp-cart-input" type="text" disabled :value="item.product_amount">
                                          <span class="tp-cart-plus" @click="plus(item.id)">
                                             <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path d="M5 1V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                   <path d="M1 5H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                             </svg>
                                          </span>
                                       </div>
                                 </td>

                                 <td class="tp-cart-add-to-cart">
                                    <button type="button" @click="fill_cart(item.id, item.image, item.title, item.type, item.old_price, item.price, item.product_amount)" class="tp-btn tp-btn-2 tp-btn-blue">დაამატე კალათაში</button>
                                 </td>
                                 
                                 <!-- action -->
                                 <td class="tp-cart-action">
                                    <button class="tp-cart-action-btn" @click="detele_wishlist_item(index)">
                                       <svg class="me-1" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.53033 1.53033C9.82322 1.23744 9.82322 0.762563 9.53033 0.46967C9.23744 0.176777 8.76256 0.176777 8.46967 0.46967L5 3.93934L1.53033 0.46967C1.23744 0.176777 0.762563 0.176777 0.46967 0.46967C0.176777 0.762563 0.176777 1.23744 0.46967 1.53033L3.93934 5L0.46967 8.46967C0.176777 8.76256 0.176777 9.23744 0.46967 9.53033C0.762563 9.82322 1.23744 9.82322 1.53033 9.53033L5 6.06066L8.46967 9.53033C8.76256 9.82322 9.23744 9.82322 9.53033 9.53033C9.82322 9.23744 9.82322 8.76256 9.53033 8.46967L6.06066 5L9.53033 1.53033Z" fill="currentColor"></path>
                                       </svg>
                                       <span>წაშლა</span>
                                    </button>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                        <!-- End WishList table -->

                        <!-- if no item in Wishlist -->
                        <div v-else class="text-center">
                           <svg class="text-danger" width="100" height="100" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.60355 7.98635C2.83622 11.8048 7.7062 14.8923 9.0004 15.6565C10.299 14.8844 15.2042 11.7628 16.3973 7.98985C17.1806 5.55102 16.4535 2.46177 13.5644 1.53473C12.1647 1.08741 10.532 1.35966 9.40484 2.22804C9.16921 2.40837 8.84214 2.41187 8.60476 2.23329C7.41078 1.33952 5.85105 1.07778 4.42936 1.53473C1.54465 2.4609 0.820172 5.55014 1.60355 7.98635ZM9.00138 17.0711C8.89236 17.0711 8.78421 17.0448 8.68574 16.9914C8.41055 16.8417 1.92808 13.2841 0.348132 8.3872C0.347252 8.3872 0.347252 8.38633 0.347252 8.38633C-0.644504 5.30321 0.459792 1.42874 4.02502 0.284605C5.69904 -0.254635 7.52342 -0.0174044 8.99874 0.909632C10.4283 0.00973263 12.3275 -0.238878 13.9681 0.284605C17.5368 1.43049 18.6446 5.30408 17.6538 8.38633C16.1248 13.2272 9.59485 16.8382 9.3179 16.9896C9.21943 17.0439 9.1104 17.0711 9.00138 17.0711Z" fill="currentColor"></path>
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.203 6.67473C13.8627 6.67473 13.5743 6.41474 13.5462 6.07159C13.4882 5.35202 13.0046 4.7445 12.3162 4.52302C11.9689 4.41097 11.779 4.04068 11.8906 3.69666C12.0041 3.35175 12.3724 3.16442 12.7206 3.27297C13.919 3.65901 14.7586 4.71561 14.8615 5.96479C14.8905 6.32632 14.6206 6.64322 14.2575 6.6721C14.239 6.67385 14.2214 6.67473 14.203 6.67473Z" fill="currentColor"></path>
                           </svg>
                           <p class="mt-2 h5 fw-bold">სურვილები არ იძებნება</p>
                           <p class="mt-3 mx-auto" style="max-width: 300px;">
                              დააჭირე  
                              <span>
                                 <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.60355 7.98635C2.83622 11.8048 7.7062 14.8923 9.0004 15.6565C10.299 14.8844 15.2042 11.7628 16.3973 7.98985C17.1806 5.55102 16.4535 2.46177 13.5644 1.53473C12.1647 1.08741 10.532 1.35966 9.40484 2.22804C9.16921 2.40837 8.84214 2.41187 8.60476 2.23329C7.41078 1.33952 5.85105 1.07778 4.42936 1.53473C1.54465 2.4609 0.820172 5.55014 1.60355 7.98635ZM9.00138 17.0711C8.89236 17.0711 8.78421 17.0448 8.68574 16.9914C8.41055 16.8417 1.92808 13.2841 0.348132 8.3872C0.347252 8.3872 0.347252 8.38633 0.347252 8.38633C-0.644504 5.30321 0.459792 1.42874 4.02502 0.284605C5.69904 -0.254635 7.52342 -0.0174044 8.99874 0.909632C10.4283 0.00973263 12.3275 -0.238878 13.9681 0.284605C17.5368 1.43049 18.6446 5.30408 17.6538 8.38633C16.1248 13.2272 9.59485 16.8382 9.3179 16.9896C9.21943 17.0439 9.1104 17.0711 9.00138 17.0711Z" fill="currentColor"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.203 6.67473C13.8627 6.67473 13.5743 6.41474 13.5462 6.07159C13.4882 5.35202 13.0046 4.7445 12.3162 4.52302C11.9689 4.41097 11.779 4.04068 11.8906 3.69666C12.0041 3.35175 12.3724 3.16442 12.7206 3.27297C13.919 3.65901 14.7586 4.71561 14.8615 5.96479C14.8905 6.32632 14.6206 6.64322 14.2575 6.6721C14.239 6.67385 14.2214 6.67473 14.203 6.67473Z" fill="currentColor"></path>
                                 </svg>
                              </span>
                              ნიშანს პროდუქტზე, რომელიც მოგწონს სურვილების შესაგროვებლად.</p>
                           <router-link to="/Products" class="tp-btn">პროდუქტებში გადასვლა</router-link>
                        </div>
                        <!-- End if no item in Wishlist -->
                     </div>
                     <div v-if="wishlist_products.length != []" class="tp-cart-bottom">
                        <div class="row align-items-end">
                           <div class="col-12">
                              <div class="tp-cart-update">
                                 <button type="button" class="tp-cart-update-btn" @click="clear_wishlist()"><i class="tio-delete-outlined"></i> გასუფთავება</button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <!-- cart area end -->

      </main>

      <!-- Footer -->
      <Footer v-if="!this.$store.state.loading" />
      <!-- End Footer -->
  </div>
</template>

<script>
// Header Component
import Header from '@/components/Header.vue'

// Mobile Header Component
import MobileHeader from '@/components/Mobile-header.vue'

// Footer Component
import Footer from '@/components/Footer.vue'


export default {
   name: "Wishlist",
   data() {
      return {
         // when click add product button - the product add to cart
         addItems: {}
      }
   },
   components: {
      Header,
      MobileHeader,
      Footer
   },
   methods: {

      // Fill Cart from product View
      fill_cart(id, image, title, type, old_price, price, product_amount) {

         // this code adds/push once again in cart. e.g if product exist this code push once again product
         const productData = this.$store.state.cart_product; // Data From store State
         if (productData.length != [] && productData.find(el => el.id == id)) {
            productData.filter(item => item.id === id).forEach(el => {

                 el.price = el.price + price;

               if (el.id === id) {
                  const data = {
                     product_amount: Number(el.product_amount) + Number(product_amount),
                     id: id
                  }


                  this.$store.commit('raplace_item_data', data);
                  this.$store.commit('cart_menu');
                  localStorage.setItem('cart_items', JSON.stringify(this.$store.state.cart_product));
               }
            })
            this.product_amount = 1;
            this.price = 0;
            this.old_price = 0;
            return
         }

         

         // this code below does a new product add/push in cart. e.g if product doesn't exist by this code new product add/push in cart
         this.addItems = {
            id: id,
            image: image,
            title: title,
            type, type,
            old_price,
            price: price,
            product_amount: product_amount,
            initial_price: price / product_amount,
            initial_old_price: old_price
         };

         console.log(this.addItems);

         this.$store.commit('cart_items', this.addItems);
         this.$store.commit('cart_menu');
         localStorage.setItem('cart_items', JSON.stringify(this.$store.state.cart_product));

      },

      // Plus Function adds quantity of the product in the cart
      plus(id) {

         const data = this.wishlist_products;
  
         data.filter(item => item.id === id).forEach(item => {
            item.product_amount++;
            // Increase the price by its initial value
            item.price = item.price + item.initial_price;
         });

         this.$store.commit('raplace_wishlist_item_data', data);
         localStorage.setItem('wish_list', JSON.stringify(this.$store.state.wishlist));
      },
      // Minus Function reduces quantity of the product in the cart
      minus(id) {

         const data = this.wishlist_products;
         data.filter(item => item.id === id).forEach(item => {
            if (item.product_amount <= 1) {
               return
            }
            item.product_amount--;
            // Increase the price by its initial value
            item.price = item.price - item.initial_price;
         });

         this.$store.commit('raplace_wishlist_item_data', data);
         localStorage.setItem('wish_list', JSON.stringify(this.$store.state.wishlist));
      },

      // this Funtion delete product from cart
      detele_wishlist_item(id) {
         this.$store.commit("deleteProduct_from_wishlist", id);
         localStorage.setItem('wish_list', JSON.stringify(this.$store.state.wishlist));
      },

      clear_wishlist() {
         this.$store.commit("fill_wish_list_from_localstorage", []);
         localStorage.setItem('wish_list', JSON.stringify(this.$store.state.wishlist));
      }
   },
   computed: {
      // this function return all products what exists in the local storage
      wishlist_products() {
         return this.$store.getters.wishlist_products;
      }
   },
   mounted() {

      // For Loading
      setTimeout(() => {
         this.$store.state.loading = false;
      }, 1000)

      window.scrollTo(0, 0)

   }
}
</script>

<style>

</style>