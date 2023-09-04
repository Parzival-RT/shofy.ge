<template>
  <header>
    <div class="tp-header-area tp-header-style-primary p-relative z-index-11">

      <!-- Slogan -->
      <div class="tp-header-top black-bg p-relative z-index-1 d-none d-md-block">
        <div class="container">
          <div class="row align-items-center">
              <div class="col-12">
                <div class="tp-header-welcome d-flex align-items-center justify-content-center">
                    <p>აღმოაჩინე საუკეთესო ნივთები ჩვენთან 💥</p>
                </div>
              </div>
          </div>
        </div>
      </div>
      <!-- End Slogan -->

      <!-- header main start -->
      <div class="tp-header-main tp-header-sticky p-relative">
        <!-- Container -->
        <div class="container">
          <!-- Row -->
          <div class="row align-items-center">
            <!-- Col -->
            <div class="col-6">
                <div class="logo">
                    <router-link to="/" @click="reload_main_page()">
                      <img src="../assets/img/logo/logo.svg" alt="logo">
                    </router-link>
                </div>
              </div>
            <!-- End Col -->

            <!-- Col -->
            <div class="col-6">
              <div class="tp-header-main-right d-flex align-items-center justify-content-end">
                  <div class="tp-header-action d-flex align-items-center ml-50">
                    <!-- Wishlist -->
                    <div class="tp-header-action-item d-none d-sm-block">
                        <router-link to="/Wishlist" class="tp-header-action-btn">
                          <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.239 18.8538C13.4096 17.5179 15.4289 15.9456 17.2607 14.1652C18.5486 12.8829 19.529 11.3198 20.1269 9.59539C21.2029 6.25031 19.9461 2.42083 16.4289 1.28752C14.5804 0.692435 12.5616 1.03255 11.0039 2.20148C9.44567 1.03398 7.42754 0.693978 5.57894 1.28752C2.06175 2.42083 0.795919 6.25031 1.87187 9.59539C2.46978 11.3198 3.45021 12.8829 4.73806 14.1652C6.56988 15.9456 8.58917 17.5179 10.7598 18.8538L10.9949 19L11.239 18.8538Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M7.26062 5.05302C6.19531 5.39332 5.43839 6.34973 5.3438 7.47501" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg> 
                          <span class="tp-header-action-badge">{{ get_wishlist_length }}</span>                          
                        </router-link>
                    </div>
                    <!-- End Wishlist -->

                    <!-- Product Cart -->
                    <div class="tp-header-action-item d-none d-sm-block" @click="this.$store.commit('cart_menu')">
                        <button type="button" class="tp-header-action-btn cartmini-open-btn">
                          <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.48626 20.5H14.8341C17.9004 20.5 20.2528 19.3924 19.5847 14.9348L18.8066 8.89359C18.3947 6.66934 16.976 5.81808 15.7311 5.81808H5.55262C4.28946 5.81808 2.95308 6.73341 2.4771 8.89359L1.69907 14.9348C1.13157 18.889 3.4199 20.5 6.48626 20.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M6.34902 5.5984C6.34902 3.21232 8.28331 1.27803 10.6694 1.27803V1.27803C11.8184 1.27316 12.922 1.72619 13.7362 2.53695C14.5504 3.3477 15.0081 4.44939 15.0081 5.5984V5.5984" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M7.70365 10.1018H7.74942" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M13.5343 10.1018H13.5801" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>    
                          <span class="tp-header-action-badge">
                            {{ getProductsLength }}
                          </span>                                                    
                        </button>
                    </div>
                    <!-- End Product Cart -->

                    <!-- Mobile Menu -->
                    <div class="tp-header-action-item d-lg-none" @click="this.$store.commit('mobile_menu')">
                        <button type="button" class="tp-header-action-btn tp-offcanvas-open-btn">
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16">
                              <rect x="10" width="20" height="2" fill="currentColor"/>
                              <rect x="5" y="7" width="25" height="2" fill="currentColor"/>
                              <rect x="10" y="14" width="20" height="2" fill="currentColor"/>
                          </svg>
                        </button>
                    </div>  
                    <!-- End Mobile Menu -->             
                  </div>
              </div>
            </div>
            <!-- End Col -->
          </div>
          <!-- End Row -->
        </div>
        <!-- End Container -->
      </div>

      <!-- Scroll Fixed Menu -->
      <div :class="isScrolled >= 150 ? 'header-sticky-2' : ''" id="header-sticky-2" class="tp-header-sticky-area">
        <!-- Container -->
        <div class="container">
          <div class="tp-mega-menu-wrapper p-relative">
            <!-- Row -->
            <div class="row align-items-center">
              <!-- Col -->
              <div class="col-xl-3 col-lg-3 col-md-3 col-6">
                <div class="logo">
                    <router-link to="/" @click="reload_main_page()">
                      <img src="../assets/img/logo/logo.svg" alt="logo">
                    </router-link>
                </div>
              </div>
              <!-- End Col -->

              <!-- Col -->
              <div class="col-xl-6 col-lg-6 col-md-6 d-none d-md-block">
                <div class="tp-header-sticky-menu main-menu menu-style-1">
                    <div class="mean-push"></div>
                    <nav class="tp-main-menu-content d-none d-lg-block">
                        <ul>
                          <li><router-link to="/" @click="reload_main_page()"><i class="tio-home-outlined"></i> მთავარი</router-link></li>
                          <li><router-link to="/Products"><i class="tio-shopping-basket-outlined"></i> პროდუქტები</router-link></li>
                          <li><router-link to="/Contact"><i class="tio-email-outlined"></i> კონტაქტი</router-link></li>
                        </ul>
                    </nav>
                </div>
              </div>
              <!-- End Col -->

              <!-- Col -->
              <div class="col-xl-3 col-lg-3 col-md-3 col-6">
                <div class="tp-header-action d-flex align-items-center justify-content-end ml-50">
                  <!-- Contact-->
                  <div class="tp-header-contact d-none d-md-flex align-items-md-center justify-content-md-end">
                    <div class="tp-header-contact-icon">
                        <span>
                          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.96977 3.24859C2.26945 2.75144 3.92158 0.946726 5.09889 1.00121C5.45111 1.03137 5.76246 1.24346 6.01544 1.49057H6.01641C6.59631 2.05874 8.26011 4.203 8.35352 4.65442C8.58411 5.76158 7.26378 6.39979 7.66756 7.5157C8.69698 10.0345 10.4707 11.8081 12.9908 12.8365C14.1058 13.2412 14.7441 11.9219 15.8513 12.1515C16.3028 12.2459 18.4482 13.9086 19.0155 14.4894V14.4894C19.2616 14.7414 19.4757 15.0537 19.5049 15.4059C19.5487 16.6463 17.6319 18.3207 17.2583 18.5347C16.3767 19.1661 15.2267 19.1544 13.8246 18.5026C9.91224 16.8749 3.65985 10.7408 2.00188 6.68096C1.3675 5.2868 1.32469 4.12906 1.96977 3.24859Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M12.936 1.23685C16.4432 1.62622 19.2124 4.39253 19.6065 7.89874" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M12.936 4.59337C14.6129 4.92021 15.9231 6.23042 16.2499 7.90726" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>                                    
                        </span>
                    </div>
                    <div class="tp-header-contact-content">
                      <p><router-link to="/Contact">დაგვიკავშირდი</router-link></p>
                    </div>
                  </div>
                  <!-- End Contact-->

                  <!-- Wishlist Button -->
                  <div class="tp-header-action-item d-none d-sm-block">
                    <router-link to="/Wishlist" class="tp-header-action-btn">
                        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.239 18.8538C13.4096 17.5179 15.4289 15.9456 17.2607 14.1652C18.5486 12.8829 19.529 11.3198 20.1269 9.59539C21.2029 6.25031 19.9461 2.42083 16.4289 1.28752C14.5804 0.692435 12.5616 1.03255 11.0039 2.20148C9.44567 1.03398 7.42754 0.693978 5.57894 1.28752C2.06175 2.42083 0.795919 6.25031 1.87187 9.59539C2.46978 11.3198 3.45021 12.8829 4.73806 14.1652C6.56988 15.9456 8.58917 17.5179 10.7598 18.8538L10.9949 19L11.239 18.8538Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M7.26062 5.05302C6.19531 5.39332 5.43839 6.34973 5.3438 7.47501" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg> 
                        <span class="tp-header-action-badge">{{ get_wishlist_length }}</span>                          
                    </router-link>
                  </div>
                  <!-- End Wishlist Button -->

                  <!-- Cart Button -->
                  <div class="tp-header-action-item d-none d-sm-block" @click="this.$store.commit('cart_menu')">
                    <button type="button" class="tp-header-action-btn cartmini-open-btn">
                        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.48626 20.5H14.8341C17.9004 20.5 20.2528 19.3924 19.5847 14.9348L18.8066 8.89359C18.3947 6.66934 16.976 5.81808 15.7311 5.81808H5.55262C4.28946 5.81808 2.95308 6.73341 2.4771 8.89359L1.69907 14.9348C1.13157 18.889 3.4199 20.5 6.48626 20.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M6.34902 5.5984C6.34902 3.21232 8.28331 1.27803 10.6694 1.27803V1.27803C11.8184 1.27316 12.922 1.72619 13.7362 2.53695C14.5504 3.3477 15.0081 4.44939 15.0081 5.5984V5.5984" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M7.70365 10.1018H7.74942" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M13.5343 10.1018H13.5801" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>    
                        <span class="tp-header-action-badge">
                          {{ getProductsLength }}
                        </span>                                                                         
                    </button>
                  </div>
                  <!-- End Cart Button -->

                  <!-- Mobile Menu Button -->
                  <div class="tp-header-action-item d-lg-none" @click="this.$store.commit('mobile_menu')">
                    <button type="button" class="tp-header-action-btn tp-offcanvas-open-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16">
                          <rect x="10" width="20" height="2" fill="currentColor"></rect>
                          <rect x="5" y="7" width="25" height="2" fill="currentColor"></rect>
                          <rect x="10" y="14" width="20" height="2" fill="currentColor"></rect>
                        </svg>
                    </button>
                  </div>
                  <!-- End Mobile Menu Button -->
                </div>
              </div>
              <!-- End Col -->
            </div>
           <!-- End Row -->
          </div>
        </div>
        <!-- End Container -->
      </div>
      <!-- End Scroll Fixed Menu -->

      <!-- header bottom start -->
      <div class="tp-header-bottom tp-header-bottom-border d-none d-lg-block">
        <div class="container">
          <div class="tp-mega-menu-wrapper p-relative">
            <!-- Row -->
            <div class="row align-items-center">
              <!-- Col -->
              <div class="col-6">
                  <div class="main-menu menu-style-1">
                    <nav class="tp-main-menu-content">
                        <ul>
                          <li><router-link to="/" @click="reload_main_page()"><i class="tio-home-outlined"></i> მთავარი</router-link></li>
                          <li><router-link to="/Products"><i class="tio-shopping-basket-outlined"></i> პროდუქტები</router-link></li>
                          <li><router-link to="/Contact"><i class="tio-email-outlined"></i> კონტაქტი</router-link></li>
                        </ul>
                    </nav>
                  </div>
              </div>
              <!-- End Col -->

              <!-- Col -->
              <div class="col-6">
                <!-- Contact-->
                <div class="tp-header-contact d-flex align-items-center justify-content-end">
                  <div class="tp-header-contact-icon">
                      <span>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.96977 3.24859C2.26945 2.75144 3.92158 0.946726 5.09889 1.00121C5.45111 1.03137 5.76246 1.24346 6.01544 1.49057H6.01641C6.59631 2.05874 8.26011 4.203 8.35352 4.65442C8.58411 5.76158 7.26378 6.39979 7.66756 7.5157C8.69698 10.0345 10.4707 11.8081 12.9908 12.8365C14.1058 13.2412 14.7441 11.9219 15.8513 12.1515C16.3028 12.2459 18.4482 13.9086 19.0155 14.4894V14.4894C19.2616 14.7414 19.4757 15.0537 19.5049 15.4059C19.5487 16.6463 17.6319 18.3207 17.2583 18.5347C16.3767 19.1661 15.2267 19.1544 13.8246 18.5026C9.91224 16.8749 3.65985 10.7408 2.00188 6.68096C1.3675 5.2868 1.32469 4.12906 1.96977 3.24859Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12.936 1.23685C16.4432 1.62622 19.2124 4.39253 19.6065 7.89874" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12.936 4.59337C14.6129 4.92021 15.9231 6.23042 16.2499 7.90726" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                                    
                      </span>
                  </div>
                  <div class="tp-header-contact-content">
                    <p><router-link to="/Contact">დაგვიკავშირდი</router-link></p>
                  </div>
                </div>
                <!-- End Contact-->
              </div>
              <!-- End Col -->
            </div>
            <!-- End Row -->
          </div>
        </div>
      </div>
      <!-- End header bottom start -->

    </div>
  </header>

  <!-- OffCanvas body-overlay -->
  <div class="body-overlay" :class="this.$store.state.cart || this.$store.state.menu  ? 'opened' : ''" @click="this.$store.state.cart = false, this.$store.state.menu = false"></div>
  <!-- End OffCanvas body-overlay -->

  <!-- offcanvas area start -->
  <div class="offcanvas__area offcanvas__radius" :class="this.$store.state.menu ? 'offcanvas-opened' : ''">
      <div class="offcanvas__wrapper">
        <div class="offcanvas__close">
            <button class="offcanvas__close-btn offcanvas-close-btn" @click="this.$store.state.menu = false">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 1L1 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M1 1L11 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
        </div>
        <div class="offcanvas__content">
            <div class="offcanvas__top mb-70 d-flex justify-content-between align-items-center">
              <div class="offcanvas__logo logo">
                  <router-link to="/" @click="menu()">
                    <img src="../assets/img/logo/logo.svg" alt="logo">
                  </router-link>
              </div>
            </div>
            <div class="tp-main-menu-mobile fix d-lg-none mb-40"><nav class="tp-main-menu-content">
              <ul>
                <li><router-link @click="menu()" to="/"> მთავარი</router-link></li>
                <li><router-link @click="menu()" to="/Products">პროდუქტები</router-link></li>
                <li><router-link @click="menu()" to="/Contact">კონტაქტი</router-link></li>
              </ul>
            </nav>
          </div>
          <div class="offcanvas__btn">
              <router-link @click="menu()" to="/Contact" class="tp-btn-2 tp-btn-border-2">
                <span class="me-1">
                  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.96977 3.24859C2.26945 2.75144 3.92158 0.946726 5.09889 1.00121C5.45111 1.03137 5.76246 1.24346 6.01544 1.49057H6.01641C6.59631 2.05874 8.26011 4.203 8.35352 4.65442C8.58411 5.76158 7.26378 6.39979 7.66756 7.5157C8.69698 10.0345 10.4707 11.8081 12.9908 12.8365C14.1058 13.2412 14.7441 11.9219 15.8513 12.1515C16.3028 12.2459 18.4482 13.9086 19.0155 14.4894V14.4894C19.2616 14.7414 19.4757 15.0537 19.5049 15.4059C19.5487 16.6463 17.6319 18.3207 17.2583 18.5347C16.3767 19.1661 15.2267 19.1544 13.8246 18.5026C9.91224 16.8749 3.65985 10.7408 2.00188 6.68096C1.3675 5.2868 1.32469 4.12906 1.96977 3.24859Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M12.936 1.23685C16.4432 1.62622 19.2124 4.39253 19.6065 7.89874" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M12.936 4.59337C14.6129 4.92021 15.9231 6.23042 16.2499 7.90726" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>                                    
                </span>
                დაგვიკავშირდი
              </router-link>
          </div>
        </div>
        <div class="offcanvas__bottom">
            <div class="offcanvas__footer d-flex align-items-center justify-content-between">
              <div class="tp-footer-social d-flex gap-1 align-items-start w-100">
                  <a class="border shadow-none" href="#"><i class="tio-facebook"></i></a>
                  <a class="border shadow-none" href="#"><i class="tio-tik-tok"></i></a>
                  <a class="border shadow-none" href="#"><i class="tio-instagram"></i></a>
                  <a class="border shadow-none" href="#"><i class="tio-linkedin"></i></a>
              </div>
            </div>
        </div>
      </div>
  </div>
  <!-- offcanvas area end -->
  
  <!-- cart mini area start -->
  <div class="cartmini__area tp-all-font-roboto" :class="this.$store.state.cart ? 'cartmini-opened' : ''">
    <div class="cartmini__wrapper d-flex justify-content-between flex-column">
        <div class="cartmini__top-wrapper">
            <div class="cartmini__top p-relative">
                <div class="cartmini__top-title">
                    <h4>შენი კალათა</h4>
                </div>
                <div class="cartmini__close">
                    <button type="button" class="cartmini__close-btn cartmini-close-btn" @click="this.$store.state.cart = false"><i class="tio-clear"></i></button>
                </div>
            </div>
            
            <!-- Product List -->
            <div v-if="getCartData.length != []" class="cartmini__widget">
                <div class="cartmini__widget-item" v-for="(item, index) in getCartData" :key="index">
                    <div class="cartmini__thumb">
                      <router-link :to="'/Inner/'+item.id">
                        <img @click="this.$store.state.cart = false" :src="item.image" alt="">
                      </router-link>
                    </div>
                    <div class="cartmini__content">
                      <h5 class="cartmini__title"><router-link :to="'/Inner/'+item.id">{{ item.title }}</router-link></h5>
                      <div class="cartmini__price-wrapper">
                        <span class="cartmini__price me-1">{{ item.price }}₾</span>
                        <div class="d-flex justify-content-between">
                          <span class="cartmini__quantity">x{{ item.product_amount }}</span>
                          <button @click="deleteItem(index)"><i class="tio-delete-outlined fs-6"></i></button>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            <!-- End Product List -->

            <!-- if no item in cart -->
            <div v-if="getCartData.length == []" class="cartmini__empty mt-50 text-center">
                <span class="text-primary">
                  <svg width="100" height="100" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.48626 20.5H14.8341C17.9004 20.5 20.2528 19.3924 19.5847 14.9348L18.8066 8.89359C18.3947 6.66934 16.976 5.81808 15.7311 5.81808H5.55262C4.28946 5.81808 2.95308 6.73341 2.4771 8.89359L1.69907 14.9348C1.13157 18.889 3.4199 20.5 6.48626 20.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M6.34902 5.5984C6.34902 3.21232 8.28331 1.27803 10.6694 1.27803V1.27803C11.8184 1.27316 12.922 1.72619 13.7362 2.53695C14.5504 3.3477 15.0081 4.44939 15.0081 5.5984V5.5984" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M7.70365 10.1018H7.74942" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M13.5343 10.1018H13.5801" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg> 
                </span>
                <p class="mt-2">შენი კალათა ცარიელია</p>
                <router-link to="/Products" class="tp-btn" @click="cart()">პროდუქტებში გადასვლა</router-link>
            </div>
            <!-- End if no item in cart -->
        </div>
        <div class="cartmini__checkout">
            <div class="cartmini__checkout-title">
                <h4>პროდუქტები:</h4>
                <span>{{ getProductsLength }}</span>
            </div>
            <div class="cartmini__checkout-title mb-30">
                <h4>ჯამი:</h4>
                <span>₾ {{ getFullBalance }}</span>
            </div>
            <div class="cartmini__checkout-btn">
                <router-link to="/Cart" class="tp-btn mb-10 w-100" @click="cart()"> ნახე კალათა</router-link>
                <router-link  @click="cart()" to="/Checkout" class="tp-btn tp-btn-border w-100"> ყიდვა</router-link>
            </div>
        </div>
    </div>
  </div>
  <!-- cart mini area end -->


</template>

<script>
import router from '@/router';


export default {
  name: 'Header',
  data() {
    return {
      // Tracks the scroll position
      isScrolled: 0
    };
  },
  mounted() {
    // Tracks the scroll position
    window.addEventListener('scroll', this.handleScroll);

    // this function send data of the replace_items which return of the existing data from the localstorage 
    if (localStorage.getItem("cart_items")) {
      this.$store.commit("replace_items", JSON.parse(localStorage.getItem("cart_items")));
    }

    // this function send data of the fill_wish_list_from_localstorage which return of the existing wishlist data from the localstorage 
    if (localStorage.getItem("wish_list")) {
      this.$store.commit("fill_wish_list_from_localstorage", JSON.parse(localStorage.getItem("wish_list")));
    }

    if (this.$route.name == "HomeView" || this.$route.name == "Wishlist" || this.$route.name == "Inner" || this.$route.name == "Products" || this.$route.name == "Contact" || this.$route.name == "Cart" || this.$route.name == "Checkout") {
      this.$store.state.footer = 0;
    }
  },
  computed: {
    // this function return total product quantity
    getProductsLength() {
      let total_cart_quantity = 0;
      for (let item of this.getCartData) {
        let each_product_quantity = item.product_amount;
        total_cart_quantity += each_product_quantity;
      }
      return total_cart_quantity;
    },
    // this function return all products what exists in the local storage
    getCartData() {
      return this.$store.getters.getProducts;
    },
    // this function return total balance of the existing data in the local storage
    getFullBalance() {
      let totalBalance = 0; // Initialize the total balance variable outside the loop
      for (let item of this.getCartData) {
        let balance = item.price;
        totalBalance += balance; // Update the total balance with each item's balance
      }
      return totalBalance; // Return the total balance after the loop
    },

    // for wishlist 
    get_wishlist_length() {
      return this.$store.state.wishlist.length
    }
  },
  methods: {
    // Reaload Main Page
    reload_main_page() {
      if (this.$route.path == '/') {
        this.$store.state.loading = true;
        setTimeout(() => {
          this.$store.state.loading = false;
        }, 100);
      }
    },
    // Tracks the scroll position
    handleScroll() {
      this.isScrolled = window.pageYOffset;
    },
    // this Funtion delete product from cart
    deleteItem(id) {
      this.$store.commit("deleteProduct", id);
      localStorage.setItem('cart_items', JSON.stringify(this.$store.state.cart_product));
    },

    // mobile menu animation
    menu() {
      setTimeout(() => { this.$store.state.menu = false }, 1)
      window.scrollTo(0, 0);
    },

    // cart animation
    cart() {
      setTimeout(() => { this.$store.state.cart = false }, 1)
    },

  },
  components: { router }
}
</script>

<style scoped></style>
