<template>
    <div>
        <nav class="mobile-header shadow-lg">
            <div class="nav-container">
                <!-- Main Page Button -->
                <router-link to="/" @click="reload_main_page()" class="nav-item">
                    <span>
                        <svg width="22" height="20" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.90532 14.8316V12.5719C5.9053 11.9971 6.37388 11.5301 6.95443 11.5262H9.08101C9.66434 11.5262 10.1372 11.9944 10.1372 12.5719V12.5719V14.8386C10.1371 15.3266 10.5305 15.7254 11.0233 15.7368H12.441C13.8543 15.7368 15 14.6026 15 13.2035V13.2035V6.77525C14.9925 6.22482 14.7314 5.70794 14.2911 5.37171L9.44253 1.50496C8.59311 0.83168 7.38562 0.83168 6.5362 1.50496L1.70886 5.37873C1.26693 5.7136 1.00544 6.23133 1 6.78227V13.2035C1 14.6026 2.1457 15.7368 3.55899 15.7368H4.97671C5.48173 15.7368 5.89114 15.3315 5.89114 14.8316V14.8316" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </span> 
                    <span class="title">მთავარი</span>                      
                </router-link>
                <!-- End Main Page Button -->

                <!-- Wishlist Button -->
                <router-link to="/Wishlist" class="nav-item">
                    <span class="icon">
                        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.239 18.8538C13.4096 17.5179 15.4289 15.9456 17.2607 14.1652C18.5486 12.8829 19.529 11.3198 20.1269 9.59539C21.2029 6.25031 19.9461 2.42083 16.4289 1.28752C14.5804 0.692435 12.5616 1.03255 11.0039 2.20148C9.44567 1.03398 7.42754 0.693978 5.57894 1.28752C2.06175 2.42083 0.795919 6.25031 1.87187 9.59539C2.46978 11.3198 3.45021 12.8829 4.73806 14.1652C6.56988 15.9456 8.58917 17.5179 10.7598 18.8538L10.9949 19L11.239 18.8538Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M7.26062 5.05302C6.19531 5.39332 5.43839 6.34973 5.3438 7.47501" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg> 
                        <span :class="{active: isWishlistActive}" class="tp-header-action-badge">{{ get_wishlist_length }}</span>   
                    </span> 
                    <span class="title">სურვილები</span>                       
                </router-link>
                <!-- End Wishlist Button -->
                    
                <!-- Cart Button -->
                <div class="nav-item" @click="this.$store.commit('cart_menu')">
                    <button type="button" class="tp-header-action-btn cartmini-open-btn">
                        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.48626 20.5H14.8341C17.9004 20.5 20.2528 19.3924 19.5847 14.9348L18.8066 8.89359C18.3947 6.66934 16.976 5.81808 15.7311 5.81808H5.55262C4.28946 5.81808 2.95308 6.73341 2.4771 8.89359L1.69907 14.9348C1.13157 18.889 3.4199 20.5 6.48626 20.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M6.34902 5.5984C6.34902 3.21232 8.28331 1.27803 10.6694 1.27803V1.27803C11.8184 1.27316 12.922 1.72619 13.7362 2.53695C14.5504 3.3477 15.0081 4.44939 15.0081 5.5984V5.5984" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M7.70365 10.1018H7.74942" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M13.5343 10.1018H13.5801" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>    
                        <span :class="{active: isCartActive}" class="tp-header-action-badge">
                            {{ getProductsLength }}
                        </span>                                                                         
                    </button>
                    <span class="title">ჩემი კალათა</span>
                </div>
                <!-- End Cart Button -->

                <!-- Contact Button -->
                <router-link to="/Contact" class="nav-item">
                    <span>
                        <svg width="22" height="20" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 5C1 2.2 2.6 1 5 1H13C15.4 1 17 2.2 17 5V10.6C17 13.4 15.4 14.6 13 14.6H5" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M13 5.40039L10.496 7.40039C9.672 8.05639 8.32 8.05639 7.496 7.40039L5 5.40039" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M1 11.4004H5.8" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M1 8.19922H3.4" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </span> 
                    <span class="title">კონტაქტი</span>                      
                </router-link>
                <!-- End Contact Button -->
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Mobile-header",
    data() {
        return {
            isCartActive: false,
            isWishlistActive: false
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
        // Tracks the scroll position for footer fixed product 
        handleScroll() {

            // this code gives the footer clientHeight of the scroll-product
            if (this.$route.name == "HomeView" || this.$route.name == "Wishlist") {
                const client = document.querySelector(".mobile-header");
                const height = client.clientHeight;
                this.$store.commit('footer_element', height);
            }
        },
    },
    watch: {
        // these two functions are for animation
        getProductsLength() {
            this.isCartActive = true;
            setTimeout(() => {
                this.isCartActive = false;
            }, 500);
        },
        get_wishlist_length() {
            this.isWishlistActive = true;
            setTimeout(() => {
                this.isWishlistActive = false;
            }, 500);
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

        // for wishlist 
        get_wishlist_length() {
          return this.$store.state.wishlist.length
        }
    },
    mounted() {
        // Tracks the scroll position
        window.addEventListener("scroll", this.handleScroll);
    },
    updated() {
        // this code gives the footer clientHeight of the scroll-product
        if (this.$route.name == "HomeView" || this.$route.name == "Wishlist") {
            const client = document.querySelector(".mobile-header");
            const height = client.clientHeight;
            this.$store.commit('footer_element', height);
        }
    }
}
</script>

<style scoped>
.mobile-header {
    position: fixed;
    bottom: 0;
    z-index: 999;

    width: 100%;
    height: 70px;

    background-color: #fff;

    display: none;
}
.nav-container {
    display: flex;
    align-items: center;
    height: 100%;
}
.mobile-header .nav-item {
    flex: 1 1 0%;
    position: relative;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    text-align: center;
}
.mobile-header .title {
    font-size: 12px;
}
.mobile-header .icon {
    position: relative;
    
}
.mobile-header .icon .tp-header-action-badge {
    right: -13px;
}

@media screen and (max-width: 576px) {
    .mobile-header {
        display: block;
    }
}
@media screen and (max-width: 308px) {
    .mobile-header .title {
        font-size: 10px;
    }
}

.tp-header-action-badge.active {
  animation: bounce 0.5s ease-in-out forwards ;
}
@keyframes bounce {

    /* 0%, 20%, 50%, 80%, 100% {
        scale: 1;
    }
	40% {
        scale: 2;
    }
	60% {
        scale: 1.5;
    } */

    /* 10%, 90% {
        transform: translateX(-2px);
        scale: 1;
    }
    20%, 80% {
        transform: translateX(2px);
    }
    30%, 50%, 70% {
        transform: translateX(-2px);
    }
    40%, 60% {
        transform: translateX(2px);
        scale: 1.2;
    } */

    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
} 
</style>