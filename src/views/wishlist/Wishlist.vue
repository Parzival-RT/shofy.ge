<template>
   <div>

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
               <!-- Row -->
               <div v-if="wishlist_products.length != []" class="row">

                  <!-- Col -->
                  <div class="col-12 mb-2">
                     <span>{{ getWishlistProductsLength }} პროდუქტი</span>
                  </div>
                  <!-- End Col -->

                  <!-- Item Col -->
                  <div v-for="(item, index) in wishlist_products" :key="index" class="col-12">
                     
                     <div class="d-flex align-items-center py-3 border-top w-100">

                        <!-- Item Image -->
                        <div class="p-2 p-sm-4 mr-20 border rounded">
                              <router-link :to="'/inner/'+item.id"> <img class="tp-cart-img m-0" :src="item.image" alt=""></router-link>
                        </div>
                        <!-- End Item Image -->

                        <!-- Item Details -->
                        <div class="flex-grow-1 d-flex flex-column">
                              <!-- Item Title and Price -->
                              <div class="d-flex flex-wrap flex-sm-row justify-content-between w-100 tp-cart-title">
                                 <router-link class="d-block m-0" :to="'/inner/'+item.id">{{ item.title }}</router-link>
                                 <span class="fw-bold fs-5">{{ item.price }} ₾</span>
                              </div>
                              <!-- End Item Title and Price -->

                              <!-- Item Actions -->
                              <div class="d-flex justify-content-between align-items-center tp-cart-action mt-3 mt-sm-5">

                                 <!-- Item Amount Quantity-->
                                 <div class="tp-product-quantity tp-product-details-variation-list">
                                    <button :disabled="item.product_amount == 1" class="minus tp-color-variation-btn position-absolute" @click="minus(item.id)">
                                          <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M1 1H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                          </svg>                                                             
                                    </button>
                                    <input class="tp-cart-input" type="text" disabled :value="item.product_amount">
                                    <button class="plus tp-color-variation-btn position-absolute" @click="plus(item.id)">
                                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M5 1V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                             <path d="M1 5H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                          </svg>
                                    </button>
                                 </div>
                                 <!-- End Item Amount Quantity-->

                                 <div class="d-flex">
                                    <!-- Add Cart -->
                                    <button class="tp-btn tp-btn-2 tp-btn-blue d-flex align-items-center w-100 me-2 me-sm-3" type="button" @click="fill_cart(item.id, item.image, item.title, item.type, item.old_price, item.price, item.product_amount)">
                                       <svg class="d-block d-sm-none" width="20" height="20" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.48626 20.5H14.8341C17.9004 20.5 20.2528 19.3924 19.5847 14.9348L18.8066 8.89359C18.3947 6.66934 16.976 5.81808 15.7311 5.81808H5.55262C4.28946 5.81808 2.95308 6.73341 2.4771 8.89359L1.69907 14.9348C1.13157 18.889 3.4199 20.5 6.48626 20.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                          <path d="M6.34902 5.5984C6.34902 3.21232 8.28331 1.27803 10.6694 1.27803V1.27803C11.8184 1.27316 12.922 1.72619 13.7362 2.53695C14.5504 3.3477 15.0081 4.44939 15.0081 5.5984V5.5984" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                          <path d="M7.70365 10.1018H7.74942" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                          <path d="M13.5343 10.1018H13.5801" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       </svg> 
                                       <span class="d-none d-sm-block">დაამატე კალათაში</span>
                                    </button>
                                    <!-- End Add Cart -->

                                    <!-- Delete Item -->
                                    <button @click="detele_wishlist_item(index)" class="delete-item d-flex align-items-center gap-sm-1">
                                       <i class="tio-delete-outlined fs-4"></i>
                                       <span class="d-none d-sm-block">წაშალე</span>
                                    </button>
                                    <!-- End Delete Item -->

                                 </div>

                              </div>
                              <!-- End Item Actions -->

                        </div>
                        <!-- End Item Details -->

                     </div>

                  </div>
                  <!-- End Item Col -->

                  <div class="col-12">
                     <!-- Clear Wishlist Col -->
                     <div class="tp-cart-bottom">
                        <div class="row align-items-end">
                           <div class="col-12">
                              <div class="tp-cart-update">
                                 <button type="button" class="tp-cart-update-btn" @click="clear_wishlist()"><i class="tio-delete-outlined"></i> გასუფთავება</button>
                              </div>
                           </div>
                        </div>
                     </div>
                     <!-- End Clear Wishlist Col -->
                  </div>
               </div>
               <!-- End Row -->

               <!-- Row -->
               <div v-else  class="row">
                   <!-- When is Empty Wishlist -->
                   <div class="text-center">
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
                     <!-- End When is Empty Wishlist -->
               </div>
               <!-- End Row -->
            </div>
         </section>
         <!-- cart area end -->

      </main>

  </div>
</template>

<script>
// Header Component
import Header from '@/components/Header.vue'

// Mobile Header Component
import MobileHeader from '@/components/Mobile-header.vue'

// Footer Component
import Footer from '@/components/Footer.vue'

// JSON data of the Simulated Product 
import Products from '../product/products.json'

export default {
   name: "Wishlist",
   data() {
      return {
         // Products
         product: Products,

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

                  // Media Query Validation
                  const mediaQuery = window.matchMedia("(min-width: 576px)");
                  const isMaxWidth = mediaQuery.matches;

                  if (isMaxWidth) {
                     this.$store.commit('cart_menu');
                  }

                  // cookies
                  // document.cookie = "cart_items=" + JSON.stringify(this.$store.state.cart_product);
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

         // Media Query Validation
         const mediaQuery = window.matchMedia("(min-width: 576px)");
         const isMaxWidth = mediaQuery.matches;

         if (isMaxWidth) {
            this.$store.commit('cart_menu');
         }

         // cookies
         // document.cookie = "cart_items=" + JSON.stringify(this.$store.state.cart_product);
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

         // cookies
         // document.cookie = "wish_list=" + JSON.stringify(this.$store.state.wishlist);
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

         // cookies
         // document.cookie = "wish_list=" + JSON.stringify(this.$store.state.wishlist);
         localStorage.setItem('wish_list', JSON.stringify(this.$store.state.wishlist));
      },

      // this Funtion delete product from cart
      detele_wishlist_item(id) {
         this.$store.commit("deleteProduct_from_wishlist", id);

         // cookies
         // document.cookie = "wish_list=" + JSON.stringify(this.$store.state.wishlist);
         localStorage.setItem('wish_list', JSON.stringify(this.$store.state.wishlist));
         window.scroll(0, 0);
      },

      clear_wishlist() {
         this.$store.commit("fill_wish_list_from_localstorage", []);

         // cookies
         // document.cookie = "wish_list=" + JSON.stringify(this.$store.state.wishlist);
         localStorage.setItem('wish_list', JSON.stringify(this.$store.state.wishlist));
      },


      // clear localstorage if not matched product id of main data
      checkSimilarity(firstdata, seconddata) {
         if (seconddata && seconddata.length !== 0) {
            for (let index = 0; index < seconddata.length; index++) {
               const secondItem = seconddata[index];
               const isMatch = firstdata.some(firstItem =>
                  firstItem.id === secondItem.id &&
                  firstItem.image === secondItem.image &&
                  firstItem.title === secondItem.title &&
                  firstItem.type === secondItem.type &&
                  secondItem.price === firstItem.price * secondItem.product_amount &&
                  secondItem.product_amount === secondItem.price / secondItem.initial_price &&
                  firstItem.old_price === secondItem.initial_old_price
               );

               if (isMatch) {
                  // console.log('Matched:', index);
                  return
               } else {
                  localStorage.removeItem('wish_list');
                  window.location.reload();
               }
            }
         }
      }
   },
   computed: {
      // this function return all products what exists in the local storage
      wishlist_products() {
         return this.$store.getters.wishlist_products;
      },
      // this function return total Wishlist product quantity
      getWishlistProductsLength() {
         let total_cart_quantity = 0;
         for (let item of this.wishlist_products) {
            let each_product_quantity = item.product_amount;
            total_cart_quantity += each_product_quantity;
         }
         return total_cart_quantity;
      }
   },
   mounted() {


      // clear localstorage if not matched product id of main data
      const firstdata = this.product;
      const seconddata = JSON.parse(localStorage.getItem('wish_list'));
      this.checkSimilarity(firstdata, seconddata);

      // For Loading
      setTimeout(() => {
         this.$store.state.loading = false;
      }, 1000)

      window.scrollTo(0, 0)

   }
}
</script>

<style scoped>
.tp-btn-2 {
   width: 185px;
}

.tp-cart-list tr td .tp-cart-action-btn {
   width: 80px;
}

@media screen and (max-width: 1400px) {
   .tp-btn-2 {
      padding-left: 10px;
      padding-right: 10px;
   }

   .tp-cart-list tr td .tp-cart-action-btn {
      padding-left: 10px;
      padding-right: 10px;
   }
}

.minus {
   left: 5px;
   right: auto;
   top: 50%;
   transform: translateY(-50%);

   display: inline-flex;
   justify-content: center;
   align-items: center;
}
.plus {
   right: 5px;
   left: auto;
   top: 50%;
   transform: translateY(-50%);

   display: inline-flex;
   justify-content: center;
   align-items: center;
}
</style>