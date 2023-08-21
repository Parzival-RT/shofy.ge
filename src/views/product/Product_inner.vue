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
    
        <!-- Product Content -->
        <main>

         <!-- breadcrumb area start -->
         <section class="breadcrumb__area breadcrumb__style-2 include-bg pt-50 pb-20">
            <div class="container">
               <div class="row">
                  <div class="col-xxl-9">
                     <div class="breadcrumb__content p-relative z-index-1">
                        <div class="breadcrumb__list has-icon">
                           <span class="breadcrumb-icon me-1">
                              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M1.42393 16H15.5759C15.6884 16 15.7962 15.9584 15.8758 15.8844C15.9553 15.8104 16 15.71 16 15.6054V6.29143C16 6.22989 15.9846 6.1692 15.9549 6.11422C15.9252 6.05923 15.8821 6.01147 15.829 5.97475L8.75305 1.07803C8.67992 1.02736 8.59118 1 8.5 1C8.40882 1 8.32008 1.02736 8.24695 1.07803L1.17098 5.97587C1.11791 6.01259 1.0748 6.06035 1.04511 6.11534C1.01543 6.17033 0.999976 6.23101 1 6.29255V15.6063C1.00027 15.7108 1.04504 15.8109 1.12451 15.8847C1.20398 15.9585 1.31165 16 1.42393 16ZM10.1464 15.2107H6.85241V10.6202H10.1464V15.2107ZM1.84866 6.48977L8.4999 1.88561L15.1517 6.48977V15.2107H10.9946V10.2256C10.9946 10.1209 10.95 10.0206 10.8704 9.94654C10.7909 9.87254 10.683 9.83096 10.5705 9.83096H6.42848C6.316 9.83096 6.20812 9.87254 6.12858 9.94654C6.04904 10.0206 6.00435 10.1209 6.00435 10.2256V15.2107H1.84806L1.84866 6.48977Z" fill="#55585B" stroke="#55585B" stroke-width="0.5"></path>
                              </svg>
                           </span>
                           <span><router-link to="/">მთავარი</router-link></span>
                           <span><router-link to="/Products">პროდუქტები</router-link></span>
                           <span>{{ product_data_by_id.title }}</span>
                        </div>
                     </div>
                  </div>
                  <div class="col-xxl-3 text-xl-end">
                     ID: {{ product_data_by_id.id }}
                  </div>
               </div>
            </div>
         </section>
         <!-- breadcrumb area end -->

         <!-- product details area start -->
         <section class="tp-product-details-area">
            <div class="tp-product-details-top pb-115">
               <div class="container">
                  <div class="row">
                     <div class="col-xl-7 col-lg-6">
                        <div class="tp-product-details-thumb-wrapper tp-tab d-sm-flex">
                           <nav>
                              <div class="nav nav-tabs flex-sm-column " id="productDetailsNavThumb" role="tablist">
                                 <button class="nav-link active" id="nav-1-tab" data-bs-toggle="tab" data-bs-target="#nav-1" type="button" role="tab" aria-controls="nav-1" aria-selected="true">
                                    <img :src="product_data_by_id.image" alt="">
                                 </button>
                                 <button v-for="(item, index) in product_data_by_id.images" :key="index" class="nav-link" :id="index" data-bs-toggle="tab" :data-bs-target="'#nav-2_'+index" type="button" role="tab" aria-controls="nav-2" aria-selected="false">
                                    <img :src="item.img" alt="">
                                 </button>
                              </div>
                           </nav>
                           <div class="tab-content m-img" id="productDetailsNavContent">
                              <div class="tab-pane fade show active" id="nav-1" role="tabpanel" aria-labelledby="nav-1-tab" tabindex="0">
                                 <div class="tp-product-details-nav-main-thumb">
                                    <img :src="product_data_by_id.image" alt="">
                                 </div>
                              </div>
                              <div v-for="(item, index) in product_data_by_id.images" :key="index" class="tab-pane fade" :id="'nav-2_'+index" role="tabpanel" :aria-labelledby="index" tabindex="0">
                                 <div class="tp-product-details-nav-main-thumb">
                                    <img :src="item.img" alt="">
                                 </div>
                              </div>
                            </div>
                        </div>
                     </div> <!-- col end -->
                     <div class="col-xl-5 col-lg-6">
                        <div class="tp-product-details-wrapper">
                           <div class="tp-product-details-category">
                              <span>{{ product_data_by_id.type }}</span>
                           </div>
                           <h3 class="tp-product-details-title">{{ product_data_by_id.title }}</h3>
   
                           <!-- inventory details -->
                           <div class="tp-product-details-inventory d-flex align-items-center mb-10">
                              <div class="tp-product-details-stock mb-10">
                                 <span>გაყიდვაში</span>
                              </div>
                           </div>
                           <p>{{ product_data_by_id.description }}</p>
   
                           <!-- price -->
                           <div class="tp-product-details-price-wrapper mb-20">
                              <span class="tp-product-details-price old-price me-1">{{  product_data_by_id.old_price + old_price }} ₾</span>
                              <span class="tp-product-details-price new-price">{{ product_data_by_id.price + price }} ₾</span>
                           </div>
   
                           <!-- Product Amount Actions -->
                           <div class="tp-product-details-action-wrapper">
                              <h3 class="tp-product-details-action-title">რაოდენობა</h3>
                              <div class="tp-product-details-action-item-wrapper d-sm-flex align-items-center">
                                 <div class="tp-product-details-quantity">
                                    <div class="tp-product-quantity mb-15 mr-15">
                                          <span class="tp-cart-minus" @click="minus(product_data_by_id.id)">
                                             <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 1H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                             </svg>                                                            
                                          </span>
                                          <input class="tp-cart-input" type="text" v-model="product_amount" disabled/>
                                          <span class="tp-cart-plus" @click="plus(product_data_by_id.id)">
                                             <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 6H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M5.5 10.5V1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                             </svg>
                                          </span>
                                    </div>
                                 </div>
                                 <div class="tp-product-details-add-to-cart mb-15 w-100">
                                    <button class="tp-product-details-add-to-cart-btn d-flex align-items-center justify-content-center gap-2 w-100" @click="fill_cart_from_modal(product_data_by_id.id, product_data_by_id.image, product_data_by_id.title, product_data_by_id.type, product_data_by_id.old_price, product_data_by_id.price, product_amount)">
                                       <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.48626 20.5H14.8341C17.9004 20.5 20.2528 19.3924 19.5847 14.9348L18.8066 8.89359C18.3947 6.66934 16.976 5.81808 15.7311 5.81808H5.55262C4.28946 5.81808 2.95308 6.73341 2.4771 8.89359L1.69907 14.9348C1.13157 18.889 3.4199 20.5 6.48626 20.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M6.34902 5.5984C6.34902 3.21232 8.28331 1.27803 10.6694 1.27803V1.27803C11.8184 1.27316 12.922 1.72619 13.7362 2.53695C14.5504 3.3477 15.0081 4.44939 15.0081 5.5984V5.5984" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M7.70365 10.1018H7.74942" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M13.5343 10.1018H13.5801" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                       </svg>   
                                       დაამატე კალათაში
                                    </button>
                                 </div>
                              </div>
                              <button class="tp-product-details-buy-now-btn w-100" @click="buy(product_data_by_id.id, product_data_by_id.image, product_data_by_id.title, product_data_by_id.type, product_data_by_id.old_price, product_data_by_id.price, product_amount)">ყიდვა</button>
                           </div>
                           <!-- Product Amount Actions -->
                           <div class="tp-product-details-action-sm">
                              <button type="button" class="tp-product-details-action-sm-btn">
                                 <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 3.16431H10.8622C12.0451 3.16431 12.9999 4.08839 12.9999 5.23315V7.52268" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M3.25177 0.985168L1 3.16433L3.25177 5.34354" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M12.9999 12.5983H3.13775C1.95486 12.5983 1 11.6742 1 10.5295V8.23993" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M10.748 14.7774L12.9998 12.5983L10.748 10.4191" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                 </svg>
                                 შედარება
                              </button>
                              <button type="button" class="tp-product-details-action-sm-btn">
                                 <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.33541 7.54172C3.36263 10.6766 7.42094 13.2113 8.49945 13.8387C9.58162 13.2048 13.6692 10.6421 14.6635 7.5446C15.3163 5.54239 14.7104 3.00621 12.3028 2.24514C11.1364 1.8779 9.77578 2.1014 8.83648 2.81432C8.64012 2.96237 8.36757 2.96524 8.16974 2.81863C7.17476 2.08487 5.87499 1.86999 4.69024 2.24514C2.28632 3.00549 1.68259 5.54167 2.33541 7.54172ZM8.50115 15C8.4103 15 8.32018 14.9784 8.23812 14.9346C8.00879 14.8117 2.60674 11.891 1.29011 7.87081C1.28938 7.87081 1.28938 7.8701 1.28938 7.8701C0.462913 5.33895 1.38316 2.15812 4.35418 1.21882C5.7492 0.776121 7.26952 0.97088 8.49895 1.73195C9.69029 0.993159 11.2729 0.789057 12.6401 1.21882C15.614 2.15956 16.5372 5.33966 15.7115 7.8701C14.4373 11.8443 8.99571 14.8088 8.76492 14.9332C8.68286 14.9777 8.592 15 8.50115 15Z" fill="currentColor"></path>
                                    <path d="M8.49945 13.8387L8.42402 13.9683L8.49971 14.0124L8.57526 13.9681L8.49945 13.8387ZM14.6635 7.5446L14.5209 7.4981L14.5207 7.49875L14.6635 7.5446ZM12.3028 2.24514L12.348 2.10211L12.3478 2.10206L12.3028 2.24514ZM8.83648 2.81432L8.92678 2.93409L8.92717 2.9338L8.83648 2.81432ZM8.16974 2.81863L8.25906 2.69812L8.25877 2.69791L8.16974 2.81863ZM4.69024 2.24514L4.73548 2.38815L4.73552 2.38814L4.69024 2.24514ZM8.23812 14.9346L8.16727 15.0668L8.16744 15.0669L8.23812 14.9346ZM1.29011 7.87081L1.43266 7.82413L1.39882 7.72081H1.29011V7.87081ZM1.28938 7.8701L1.43938 7.87009L1.43938 7.84623L1.43197 7.82354L1.28938 7.8701ZM4.35418 1.21882L4.3994 1.36184L4.39955 1.36179L4.35418 1.21882ZM8.49895 1.73195L8.42 1.85949L8.49902 1.90841L8.57801 1.85943L8.49895 1.73195ZM12.6401 1.21882L12.6853 1.0758L12.685 1.07572L12.6401 1.21882ZM15.7115 7.8701L15.5689 7.82356L15.5686 7.8243L15.7115 7.8701ZM8.76492 14.9332L8.69378 14.8011L8.69334 14.8013L8.76492 14.9332ZM2.19287 7.58843C2.71935 9.19514 4.01596 10.6345 5.30013 11.744C6.58766 12.8564 7.88057 13.6522 8.42402 13.9683L8.57487 13.709C8.03982 13.3978 6.76432 12.6125 5.49626 11.517C4.22484 10.4185 2.97868 9.02313 2.47795 7.49501L2.19287 7.58843ZM8.57526 13.9681C9.12037 13.6488 10.4214 12.8444 11.7125 11.729C12.9999 10.6167 14.2963 9.17932 14.8063 7.59044L14.5207 7.49875C14.0364 9.00733 12.7919 10.4 11.5164 11.502C10.2446 12.6008 8.9607 13.3947 8.42364 13.7093L8.57526 13.9681ZM14.8061 7.59109C15.1419 6.5613 15.1554 5.39131 14.7711 4.37633C14.3853 3.35729 13.5989 2.49754 12.348 2.10211L12.2576 2.38816C13.4143 2.75381 14.1347 3.54267 14.4905 4.48255C14.8479 5.42648 14.8379 6.52568 14.5209 7.4981L14.8061 7.59109ZM12.3478 2.10206C11.137 1.72085 9.72549 1.95125 8.7458 2.69484L8.92717 2.9338C9.82606 2.25155 11.1357 2.03494 12.2577 2.38821L12.3478 2.10206ZM8.74618 2.69455C8.60221 2.8031 8.40275 2.80462 8.25906 2.69812L8.08043 2.93915C8.33238 3.12587 8.67804 3.12163 8.92678 2.93409L8.74618 2.69455ZM8.25877 2.69791C7.225 1.93554 5.87527 1.71256 4.64496 2.10213L4.73552 2.38814C5.87471 2.02742 7.12452 2.2342 8.08071 2.93936L8.25877 2.69791ZM4.64501 2.10212C3.39586 2.49722 2.61099 3.35688 2.22622 4.37554C1.84299 5.39014 1.85704 6.55957 2.19281 7.58826L2.478 7.49518C2.16095 6.52382 2.15046 5.42513 2.50687 4.48154C2.86175 3.542 3.58071 2.7534 4.73548 2.38815L4.64501 2.10212ZM8.50115 14.85C8.43415 14.85 8.36841 14.8341 8.3088 14.8023L8.16744 15.0669C8.27195 15.1227 8.38645 15.15 8.50115 15.15V14.85ZM8.30897 14.8024C8.19831 14.7431 6.7996 13.9873 5.26616 12.7476C3.72872 11.5046 2.07716 9.79208 1.43266 7.82413L1.14756 7.9175C1.81968 9.96978 3.52747 11.7277 5.07755 12.9809C6.63162 14.2373 8.0486 15.0032 8.16727 15.0668L8.30897 14.8024ZM1.29011 7.72081C1.31557 7.72081 1.34468 7.72745 1.37175 7.74514C1.39802 7.76231 1.41394 7.78437 1.42309 7.8023C1.43191 7.81958 1.43557 7.8351 1.43727 7.84507C1.43817 7.8504 1.43869 7.85518 1.43898 7.85922C1.43913 7.86127 1.43923 7.8632 1.43929 7.865C1.43932 7.86591 1.43934 7.86678 1.43936 7.86763C1.43936 7.86805 1.43937 7.86847 1.43937 7.86888C1.43937 7.86909 1.43937 7.86929 1.43938 7.86949C1.43938 7.86959 1.43938 7.86969 1.43938 7.86979C1.43938 7.86984 1.43938 7.86992 1.43938 7.86994C1.43938 7.87002 1.43938 7.87009 1.28938 7.8701C1.13938 7.8701 1.13938 7.87017 1.13938 7.87025C1.13938 7.87027 1.13938 7.87035 1.13938 7.8704C1.13938 7.8705 1.13938 7.8706 1.13938 7.8707C1.13938 7.8709 1.13938 7.87111 1.13938 7.87131C1.13939 7.87173 1.13939 7.87214 1.1394 7.87257C1.13941 7.87342 1.13943 7.8743 1.13946 7.8752C1.13953 7.87701 1.13962 7.87896 1.13978 7.88103C1.14007 7.88512 1.14059 7.88995 1.14151 7.89535C1.14323 7.90545 1.14694 7.92115 1.15585 7.93861C1.16508 7.95672 1.18114 7.97896 1.20762 7.99626C1.2349 8.01409 1.26428 8.02081 1.29011 8.02081V7.72081ZM1.43197 7.82354C0.623164 5.34647 1.53102 2.26869 4.3994 1.36184L4.30896 1.0758C1.23531 2.04755 0.302663 5.33142 1.14679 7.91665L1.43197 7.82354ZM4.39955 1.36179C5.7527 0.932384 7.22762 1.12136 8.42 1.85949L8.57791 1.60441C7.31141 0.820401 5.74571 0.619858 4.30881 1.07585L4.39955 1.36179ZM8.57801 1.85943C9.73213 1.14371 11.2694 0.945205 12.5951 1.36192L12.685 1.07572C11.2763 0.632908 9.64845 0.842602 8.4199 1.60447L8.57801 1.85943ZM12.5948 1.36184C15.4664 2.27018 16.3769 5.34745 15.5689 7.82356L15.8541 7.91663C16.6975 5.33188 15.7617 2.04893 12.6853 1.07581L12.5948 1.36184ZM15.5686 7.8243C14.9453 9.76841 13.2952 11.4801 11.7526 12.7288C10.2142 13.974 8.80513 14.7411 8.69378 14.8011L8.83606 15.0652C8.9555 15.0009 10.3826 14.2236 11.9413 12.9619C13.4957 11.7037 15.2034 9.94602 15.8543 7.91589L15.5686 7.8243ZM8.69334 14.8013C8.6337 14.8337 8.56752 14.85 8.50115 14.85V15.15C8.61648 15.15 8.73201 15.1217 8.83649 15.065L8.69334 14.8013Z" fill="currentColor"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8384 6.93209C12.5548 6.93209 12.3145 6.71865 12.2911 6.43693C12.2427 5.84618 11.8397 5.34743 11.266 5.1656C10.9766 5.07361 10.8184 4.76962 10.9114 4.48718C11.0059 4.20402 11.3129 4.05023 11.6031 4.13934C12.6017 4.45628 13.3014 5.32371 13.3872 6.34925C13.4113 6.64606 13.1864 6.90622 12.8838 6.92993C12.8684 6.93137 12.8538 6.93209 12.8384 6.93209Z" fill="currentColor"></path>
                                    <path d="M12.8384 6.93209C12.5548 6.93209 12.3145 6.71865 12.2911 6.43693C12.2427 5.84618 11.8397 5.34743 11.266 5.1656C10.9766 5.07361 10.8184 4.76962 10.9114 4.48718C11.0059 4.20402 11.3129 4.05023 11.6031 4.13934C12.6017 4.45628 13.3014 5.32371 13.3872 6.34925C13.4113 6.64606 13.1864 6.90622 12.8838 6.92993C12.8684 6.93137 12.8538 6.93209 12.8384 6.93209" stroke="currentColor" stroke-width="0.3"></path>
                                 </svg>
                                 სურვილების სიაში დამატება
                              </button>
                           </div>
                           <h4 class="tp-product-details-title">დამატებითი მახასიათებლები</h4>
                           <div class="tp-product-details-query">
                              <div class="tp-product-details-query-item d-flex align-items-center">
                                 <span>ბრენდი:  </span>
                                 <p>ზარა</p>
                              </div>
                              <div class="tp-product-details-query-item d-flex align-items-center">
                                 <span>SKU:  </span>
                                 <p>NTB7SDVX44</p>
                              </div>
                              <div class="tp-product-details-query-item d-flex align-items-center">
                                 <span>კატეგორია:  </span>
                                 <p>{{ product_data_by_id.category }}</p>
                              </div>
                              <div class="tp-product-details-query-item d-flex align-items-center">
                                 <span>ტიპი:  </span>
                                 <p>{{ product_data_by_id.type }}</p>
                              </div>
                           </div>

                           <!-- Guarantee -->
                           <div v-if="product_data_by_id.guarantee != ''" class="d-flex align-items-center flex-wrap gap-2">
                             <div class="p-2 rounded border bg-white">
                              <img src="../../assets/img/icon/shield.svg" alt="გარანტია">
                             </div>
                             <p class="m-0 fw-semibold">{{ product_data_by_id.guarantee }}</p>
                           </div>
                           <!-- End Guarantee -->

                           <!-- Share-->
                           <div class="tp-product-details-social d-flex align-items-center gap-1 mt-4">
                              <span>გაზიარება: </span>
                              <a href="#"><i class="tio-facebook"></i></a>
                              <a href="#"><i class="tio-instagram"></i></a>
                              <a href="#"><i class="tio-linkedin"></i></a>
                              <a href="#"><i class="tio-tik-tok"></i></a>
                           </div>
                           <!-- End Share-->

                           <!-- Rule Details-->
                           <div class="accordion accordion-flush mt-50" id="accordionFlushExample">
                              <div class="accordion-item">
                                 <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    როგორ შევიძინო პროდუქტი?
                                    </button>
                                 </h2>
                                 <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                       - შეარჩიე სასურველი პროდუქტი და დაამატე კალათაში


                                       - მიუთითე მისამართი, რომელზეც შეკვეთის მიღება გსურს


                                       - აირჩიე რა დროს გინდა შეკვეთის მიღება


                                       - აირჩიე გადახდის მეთოდი

                                    
                                       *ვებგვერდზე ანგარიშსწორება მხოლოდ ბარათითაა შესაძლებელი: Visa, Mastercard, American Express, რე|ბანკის ტოპ |ქარდით და უცხოური ბარათით. ველიზე შეგიძლია, როგორც სრული თანხის გადახდა, ისე თანხის თვეებზე განაწილება სასურველი ბანკის თქვენზე მორგებული პირობებით.
                                    </div>
                                 </div>
                              </div>
                              <div class="accordion-item">
                                 <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    როგორ ხდება პროდუქტის მიწოდება?
                                    </button>
                                 </h2>
                                 <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                 </div>
                              </div>
                              <div class="accordion-item">
                                 <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    რა შემთხვევაში შემიძლია პროდუქტის დაბრუნება?
                                    </button>
                                 </h2>
                                 <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                 </div>
                              </div>
                           </div>
                           <!-- End Rule Details-->

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <!-- product details area end -->

         <!-- Reviews -->
         <section class="tp-product-details-bottom pb-140">
            <div class="container">
               <!-- Row -->
               <div class="row">
                  <!-- Col -->
                  <div class="col-12">
                     <div class="col-12">
                        <h3 class="tp-product-details-title">მიმოხილვა</h3>
                     </div>
                     <div class="tp-product-details-review-wrapper pt-30">
                        <div class="row">
                           <div class="col-lg-6">

                              <div class="tp-product-details-review-statics">
                                 <!-- Review number and summary -->
                                 <div class="tp-product-details-review-number d-inline-block mb-50 w-100">
                                 <h3 class="tp-product-details-review-number-title">მომხმარებლის შეფასება</h3>
                                    <div class="tp-product-details-review-summery d-flex align-items-center">
                                       <!-- Display the average rating -->
                                       <div class="tp-product-details-review-summery-value">
                                          <span>{{ averageRating.toFixed(1) }}</span>
                                       </div>
                                       <div class="tp-product-details-review-summery-rating d-flex align-items-center">
                                          <!-- Display stars for average rating -->
                                          <span v-for="star in 5" :key="star">
                                          <i class="fs-5" :class="star <= averageRating ? 'tio-star' : 'tio-star-outlined'"></i>
                                          </span>
                                          <p>({{ customers_review.length }} მიმოხილვა)</p>
                                       </div>
                                    </div>
                                    <!-- Display the rating breakdown -->
                                    <div class="tp-product-details-review-rating-list">
                                       <div v-for="star in 5" :key="star" class="tp-product-details-review-rating-item d-flex align-items-center">
                                          <span>{{ star }} star</span>
                                          <div class="tp-product-details-review-rating-bar">
                                          <span
                                             class="tp-product-details-review-rating-bar-inner"
                                             :style="{ width: starPercentage(star) + '%' }"
                                          ></span>
                                          </div>
                                          <div class="tp-product-details-review-rating-percent">
                                          <span>{{ starPercentage(star).toFixed(1) }}%</span>
                                          </div>
                                       </div>
                                    </div>
                                 </div>

                                 <!-- Reviews list -->
                                 <div class="tp-product-details-review-list pr-110">
                                    <h3 class="tp-product-details-review-title">რეიტინგი &amp; მიმოხილვა</h3>
                                    <div v-for="(item, index) in customers_review" :key="index" class="tp-product-details-review-avater d-flex align-items-start">
                                       <div class="tp-product-details-review-avater-thumb">
                                          <a href="#">
                                             <img class="rounded" src="../../assets/img/icon/avatar.png" alt="">
                                          </a>
                                       </div>
                                       <div class="tp-product-details-review-avater-content">
                                          <div class="tp-product-details-review-avater-rating d-flex align-items-center">
                                             <span v-for="star in 5" :key="star">
                                                <i class="fs-5" :class="star <= item.star_rating ? 'tio-star' : 'tio-star-outlined'"></i>
                                             </span>
                                          </div>
                                          <h3 class="tp-product-details-review-avater-title">{{ item.name }}</h3>
                                          <span class="tp-product-details-review-avater-meta">08 მარტი, 2023 </span>
   
                                          <div class="tp-product-details-review-avater-comment">
                                             <p>{{ item.customer_review }}.</p>
                                          </div>
                                       </div>
                                    </div>
                                    <p v-if="customers_review.length == 0">მიმოხილვები ჯერ არ დაწერილა</p>
                                 </div>

                              </div>

                           </div> 
                           <!-- end col -->
                           <div class="col-lg-6">
                              <div class="tp-product-details-review-form">
                                 <h3 class="tp-product-details-review-form-title">დააფიქსირე შენი აზრი</h3>
                                 <p>თქვენი ელ.ფოსტა გამოქვეყნებული არ იქნება. აუცილებელი ველები მონიშნულია <span class="text-danger">*</span></p>
                                 <Form v-slot="{ handleSubmit }" as="div">
                                    <form @submit="handleSubmit($event, submitForm)">
                                       <div class="tp-product-details-review-form-rating d-flex flex-wrap align-items-center">
                                          <p>შენი რეიტინგი:</p>
                                          <div class="tp-product-details-review-form-rating-icon d-flex align-items-center">
                                             <span v-for="star in 5">
                                                <i class="fs-5" :class="star <= form.star_rating ? 'tio-star' : 'tio-star-outlined'" @click="form.star_rating = star"></i>
                                             </span>
                                          </div>
                                          <Field class="d-none" type="tnumberext" :rules="isRequired" name="stars" v-model="form.star_rating"/>
                                          <ErrorMessage name="stars"><span class="text-danger font-size-14px ms-md-2">მონიშნე შენი რეიტინგი</span></ErrorMessage>
                                       </div>
                                       <div class="tp-product-details-review-input-wrapper">
                                          <div class="tp-product-details-review-input-box">
                                             <div class="tp-product-details-review-input">
                                                <Field :rules="isRequired" name="customer_review" v-model="form.customer_review">
                                                   <textarea id="msg" name="customer_review" v-model="form.customer_review" placeholder="დაწერეთ თქვენი აზრი აქ..."></textarea>
                                                   <ErrorMessage class="text-danger font-size-14px" name="customer_review" />
                                                </Field>
                                             </div>
                                             <div class="tp-product-details-review-input-title">
                                                <label for="msg">თქვენი შეფასება <span class="text-danger">*</span></label>
                                             </div>
                                          </div>
                                          <div class="tp-product-details-review-input-box">
                                             <div class="tp-product-details-review-input">
                                                <Field type="text" id="name" :rules="isRequired" name="name" v-model="form.name" placeholder="სახელი" />
                                                <ErrorMessage class="text-danger font-size-14px" name="name" />
                                             </div>
                                             <div class="tp-product-details-review-input-title">
                                                <label for="name">სახელი <span class="text-danger">*</span></label>
                                             </div>
                                          </div>
                                          <div class="tp-product-details-review-input-box">
                                             <div class="tp-product-details-review-input">
                                                <Field type="email" id="email" :rules="isRequired" name="email" v-model="form.email" placeholder="ელ.ფოსტა" />
                                                <ErrorMessage class="text-danger font-size-14px" name="email" />
                                             </div>
                                             <div class="tp-product-details-review-input-title">
                                                <label for="email">ელ.ფოსტა <span class="text-danger">*</span></label>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="tp-product-details-review-suggetions mb-20">
                                          <div class="tp-product-details-review-remeber">
                                             <input id="remeber" type="checkbox">
                                             <label for="remeber">ჩემი სახელის და ელ.ფოსტის შენახვა საიტზე შემდეგი გამოყენება/შეფასებისთვის.</label>
                                          </div>
                                       </div>
                                       <div class="tp-product-details-review-btn-wrapper">
                                          <button class="tp-product-details-review-btn">დამატება</button>
                                       </div>
                                    </form>
                                 </Form>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!-- End Col -->
               </div>
               <!-- End Row -->
            </div>
         </section>
         <!-- End Reviews -->

      </main>
      
      <!-- Scroll Product Info -->
      <nav :class="isScrolled >= 400 ? 'active' : ''" class="scroll-product shadow-lg">
         <div class="container">
            <!-- Row -->
            <div class="row align-items-center">
               <!-- Col -->
               <div class="col-6">
                  <div class="d-flex align-items-center gap-3">
                     <img class="scroll-image" :src="product_data_by_id.image" alt="product-image">
                     <div class="d-flex flex-column">
                        <h3 class="tp-product-details-action-title mb-0"> {{ product_data_by_id.title }} </h3>
                        <p class="mb-0">უფასო მიწოდება</p>
                     </div>
                  </div>
               </div>
               <!-- End Col -->

               <!-- Col -->
               <div class="col-6">
                  <div class="d-flex justify-content-end align-items-center gap-3">
                     <!-- price -->
                     <div class="tp-product-details-price-wrapper">
                        <span class="tp-product-details-price old-price me-1">{{  product_data_by_id.old_price + old_price }} ₾</span>
                        <span class="tp-product-details-price new-price">{{ product_data_by_id.price + price }} ₾</span>
                     </div>
                     <button data-v-f2a7cdc8="" class="tp-product-details-buy-now-btn">ყიდვა</button>
                  </div>
               </div>
               <!-- End Col -->

            </div>
            <!-- End Row -->
         </div>
      </nav>
      <!-- End Scroll Product Info -->

      <!-- End Product Content -->

    <!-- Footer -->
    <Footer v-if="!this.$store.state.loading" />
    <!-- End Footer -->
    </div>
</template>

<script>
// Header Component
import Header from '@/components/Header.vue'

// Footer Component
import Footer from '@/components/Footer.vue'

// VeeValidate For Validation
import { Form, Field, ErrorMessage } from 'vee-validate';

import Products from './products.json'

export default {
   name: "Products_inner",
   data() {
      return {
         // Products
         product: Products,
         // when click add product button - the product information push addItems object
         addItems: {},

         // Minimum product quantity
         product_amount: 1,
         // Foreach product current price/quantity
         price: 0,
         //  Foreach product current old_price/quantity
         old_price: 0,

         product_data_by_id: [],

         isScrolled: 0,

         form: {
            name: '',
            email: '',
            customer_review: '',
            star_rating: 0
         },
         customers_review: []
      }
   },
   components: {
      Header,
      Footer,
      // Validation For Fields
      Form,
      Field,
      ErrorMessage
   },
   methods: {

      // customers review request 
      submitForm() {
         const newReview = { ...this.form };
         this.customers_review.unshift(newReview);

         // Reset the form fields for the next review
         this.form = {
            name: '',
            email: '',
            customer_review: '',
            star_rating: 0
         };
      },

      // filter product by id
      get_product_data_by_id() {
         const params = this.$route.params.id;
         this.product.forEach(item => {
            if (item.id == params) {
               this.product_data_by_id = item;
            }
         })
      },

      // Fill Cart from modal product view
      fill_cart_from_modal(id, image, title, type, old_price, price, product_amount) {

         // this code adds/push once again in cart. e.g if product exist this code push once again product
         const productData = this.$store.state.cart_product; // Data From store State
         if (productData.length != [] && productData.find(el => el.id == id)) {
            productData.filter(item => item.id === id).forEach(el => {

               el.price = el.price + price * product_amount;

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
            price: price * product_amount,
            product_amount: product_amount,
            initial_price: price,
            initial_old_price: old_price
         };
         this.$store.commit('cart_items', this.addItems);
         this.$store.commit('cart_menu');
         localStorage.setItem('cart_items', JSON.stringify(this.$store.state.cart_product));
         this.product_amount = 1;
         this.price = 0;
         this.old_price = 0;
      },
      // Buy Product
      buy(id, image, title, type, old_price, price, product_amount) {

         // when click happens second again on the buy button the router path should push checkout component page
         const productData = this.$store.state.cart_product; // Data From store State
         if (productData.length != [] && productData.find(el => el.id == id)) {
            this.$router.push({
               path: '/Checkout'
            })
            return
         }

         // this code below does a new product add/push in cart. e.g if product doesn't exist by this code new product add/push in cart
         this.addItems = {
            id: id,
            image: image,
            title: title,
            type, type,
            old_price,
            price: price * product_amount,
            product_amount: product_amount,
            initial_price: price,
            initial_old_price: old_price
         };
         this.$store.commit('cart_items', this.addItems);
         localStorage.setItem('cart_items', JSON.stringify(this.$store.state.cart_product));
         this.$router.push({
            path: '/Checkout'
         })
      },

      // Plus Function adds quantity of the product in the cart
      plus(id) {
         this.product_amount++;
         const data = this.product;

         data.filter(item => item.id === id).forEach(item => {
            const price = item.price;
            const old_price = item.old_price;

            if (!item.initial_price) {
               // If initial_price is not already set, store the initial price
               item.initial_price = price;
               item.initial_old_price = old_price;
            }

            this.price += item.initial_price;
            this.old_price += item.initial_old_price;

         });
      },
      // Minus Function reduces quantity of the product in the cart
      minus(id) {
         if (this.product_amount <= 1) {
            return
         }
         this.product_amount--;
         const data = this.product;

         data.filter(item => item.id === id).forEach(item => {
            const price = item.price;
            const old_price = item.old_price;

            if (!item.initial_price) {
               // If initial_price is not already set, store the initial price
               item.initial_price = price;
               item.initial_old_price = old_price;
            }

            this.price -= item.initial_price;
            this.old_price -= item.initial_old_price;

         });
      },

      // Calculate the percentage of a specific star rating
      starPercentage(star) {
         if (this.customers_review.length === 0) {
            return 0;
         }
         const count = this.customers_review.filter(review => review.star_rating === star).length;
         return (count / this.customers_review.length) * 100;
      },

      // Tracks the scroll position for footer fixed product 
      handleScroll() {
         this.isScrolled = window.pageYOffset;
      },

      // Validation For Fields
      isRequired(value) {
         if (value) {
            return true;
         }
         return 'აუცილებელი ველი';
      }

   },
   computed: {
      // Calculate the average rating
      averageRating() {
         if (this.customers_review.length === 0) {
            return 0;
         }
         const totalRating = this.customers_review.reduce((sum, review) => sum + review.star_rating, 0);
         return totalRating / this.customers_review.length;
      }
   },
   mounted() {

      this.get_product_data_by_id();

      // For Loading
      setTimeout(() => {
         this.$store.state.loading = false;
      }, 1000)

      // Tracks the scroll position
      window.addEventListener('scroll', this.handleScroll);

      window.scrollTo(0, 0)

   }
}
</script>

<style scoped>
.scroll-product {
   position: fixed;
   bottom: 0;
   width: 100vw;
   padding: 10px 0;
   background-color: #fff;
   z-index: 999;

   transition: transform 0.7s ease 0s;
   transform: translateY(100%);
}
.scroll-product.active {
   transform: translateY(0%)
}
.scroll-image {
   width: 60px;
   object-fit: cover;
}
</style>