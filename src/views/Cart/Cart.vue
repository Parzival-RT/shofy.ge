<template>
    <main>

        <!-- breadcrumb area start -->
        <section class="breadcrumb__area include-bg pt-80 pb-50">
            <div class="container">
                <div class="row">
                    <div class="col-xxl-12 text-center text-md-start">
                        <div class="breadcrumb__content p-relative z-index-1">
                            <h3 class="breadcrumb__title">ჩემი კალათა</h3>
                            <div class="breadcrumb__list">
                                <span><a href="/">მთავარი გვერდი</a></span>
                                <span>ჩემი კალათა</span>
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
                <div v-if="getCartData.length != []" class="row">

                    <!-- Col -->
                    <div class="col-12 mb-2">
                        <span>{{ getProductsLength }} პროდუქტი</span>
                    </div>
                    <!-- End Col -->

                    <div class="col-xl-8">
                        <!-- Row -->
                        <div class="row">
                            <!-- Item Col -->
                            <div v-for="(item, index) in getCartData" :key="index" class="col-12">
                                
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

                                            <!-- Delete Item -->
                                            <button @click="deleteItem(index)" class="delete-item d-flex align-items-center gap-sm-1">
                                                <i class="tio-delete-outlined fs-4"></i>
                                                <span class="d-none d-sm-block">წაშალე</span>
                                            </button>
                                            <!-- End Delete Item -->

                                        </div>
                                        <!-- End Item Actions -->

                                    </div>
                                    <!-- End Item Details -->

                                </div>

                            </div>
                            <!-- End Item Col -->
                        </div>
                        <!-- End Row -->
                    </div>
        
                    <div v-if="getCartData.length != []" class="col-xl-4">
                        <div class="tp-cart-checkout-wrapper shadow-none border">
                            <div class="tp-cart-checkout-top d-flex align-items-center justify-content-between">
                                <span class="tp-cart-checkout-top-title">ჯამი</span>
                                <span class="tp-cart-checkout-top-price">₾ {{ getFullBalance }}</span>
                            </div>
                            <div class="tp-cart-coupon-input d-flex my-3">
                                <input :class="coupon_name == check_coupon ? 'border-success' : '' || check_coupon.length >= 1 ? 'border-danger' : ''" type="text" v-model="check_coupon" placeholder="გამოიყენე ვაუჩერი">
                                <button class="w-25" @click="check_coupon_status"><i class="tio tio-labels"></i></button>
                            </div>
                            <div v-if="coupon_quantity" class="d-flex align-items-center justify-content-between mb-2">
                                <span>ფასდაკლება</span>
                                <span class="text-danger">₾ -{{ coupon_quantity }}</span>
                            </div>
                            <div class="tp-cart-checkout-total d-flex align-items-center justify-content-between">
                                <span>მთლიანი ჯამი</span>
                                <span>₾ {{ getFullBalance - coupon_quantity }}</span>
                            </div>
                            <div class="tp-cart-checkout-proceed">
                                <router-link to="/Checkout" class="tp-cart-checkout-btn w-100">ყიდვა</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Row -->

                <!-- Row -->
                <div v-else class="row">
                    <div class="col-12">
                        <!-- Row -->
                        <div class="row">
                            <!-- Item Col -->
                            <div class="col-12">
                                <!-- if no item in cart -->
                                <div class="cartmini__empty mt-50 text-center">
                                    <span class="text-primary">
                                        <svg width="100" height="100" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.48626 20.5H14.8341C17.9004 20.5 20.2528 19.3924 19.5847 14.9348L18.8066 8.89359C18.3947 6.66934 16.976 5.81808 15.7311 5.81808H5.55262C4.28946 5.81808 2.95308 6.73341 2.4771 8.89359L1.69907 14.9348C1.13157 18.889 3.4199 20.5 6.48626 20.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M6.34902 5.5984C6.34902 3.21232 8.28331 1.27803 10.6694 1.27803V1.27803C11.8184 1.27316 12.922 1.72619 13.7362 2.53695C14.5504 3.3477 15.0081 4.44939 15.0081 5.5984V5.5984" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M7.70365 10.1018H7.74942" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M13.5343 10.1018H13.5801" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg> 
                                    </span>
                                    <p class="mt-2">შენი კალათა ცარიელია</p>
                                    <router-link to="/Products" class="tp-btn">პროდუქტებში გადასვლა</router-link>
                                </div>
                                <!-- End if no item in cart -->
                            </div>
                            <!-- End Item Col -->
                        </div>
                        <!-- End Row -->
                    </div>
                </div>
                <!-- End Row -->

            </div>
        </section>
        <!-- cart area end -->

    </main>
</template>

<script>
export default {
    name: "Cart",
    data() {
        return {
            check_coupon: '',
            coupon_name: 'rati',
            coupon_quantity: 0,
            discount: 20
        }
    },
    methods: {
        // this Funtion delete product from cart
        deleteItem(id) {
            this.$store.commit("deleteProduct", id)

            // set item in cookies
            // document.cookie = "cart_items=" + JSON.stringify(this.$store.state.cart_product);
            localStorage.setItem('cart_items', JSON.stringify(this.$store.state.cart_product));
        },
        // When user click check coupon button this function check its status code
        check_coupon_status() {
            if(this.check_coupon == '') {
                alert('შეიყვანეთ ვაუჩერის კოდი');
                return
            } 
            else if (this.coupon_name != this.check_coupon) {
                alert('ვაუჩერის კოდი არასწორია');
                return
            } else {
                this.coupon_quantity = this.getFullBalance * this.discount / 100;

                // cookies
                // document.cookie = "coupon=" + JSON.stringify(this.coupon_quantity);
                localStorage.setItem('coupon', JSON.stringify(this.coupon_quantity));
            }
            this.check_coupon = '';
        },

        // Plus Function adds quantity of the product in the cart
        plus(id) {

            const data = this.getCartData;
            data.filter(item => item.id === id).forEach(item => {
                // if (!item.initial_price) {
                //     // If initial_price is not already set, store the initial price
                //     item.initial_price = item.price;
                // }
                item.product_amount++;
                // Increase the price by its initial value
                item.price = item.price + item.initial_price;
            });

            // const coupon = this.getCookieValue("coupon");
            if (localStorage.getItem('coupon')) {
                this.coupon_quantity = this.getFullBalance * this.discount / 100;

                // cookies
                // document.cookie = "coupon=" + JSON.stringify(this.coupon_quantity);
                localStorage.setItem('coupon', JSON.stringify(this.coupon_quantity));
            }
            
            this.$store.commit('raplace_item_data', data);
   
            // set item in cookies
            // document.cookie = "cart_items=" + JSON.stringify(this.$store.state.cart_product);
            localStorage.setItem('cart_items', JSON.stringify(this.$store.state.cart_product));
        },
        // Minus Function reduces quantity of the product in the cart
        minus(id) {

            const data = this.getCartData;
            data.filter(item => item.id === id).forEach(item => {
                if (item.product_amount <= 1) {
                    return
                }
                if (!item.initial_price) {
                    // If initial_price is not already set, store the initial price
                    item.initial_price = item.price;
                }
                item.product_amount--;
                // Increase the price by its initial value
                item.price = item.price - item.initial_price;
            });

            // const coupon = this.getCookieValue("coupon");
            if (localStorage.getItem('coupon')) {
                this.coupon_quantity = this.getFullBalance * this.discount / 100;

                // cookies
                // document.cookie = "coupon=" + JSON.stringify(this.coupon_quantity);
                localStorage.setItem('coupon', JSON.stringify(this.coupon_quantity));
            }

            this.$store.commit('raplace_item_data', data);

            // set item in cookies
            // document.cookie = "cart_items=" + JSON.stringify(this.$store.state.cart_product);
            localStorage.setItem('cart_items', JSON.stringify(this.$store.state.cart_product));
        }
    },
    mounted() {
        if(localStorage.getItem('coupon')) {
            localStorage.removeItem('coupon');
        }

        window.scroll(0, 0);
    },
    computed: {
        // this function return all products what exists in the local storage
        getCartData() {
            return this.$store.getters.getProducts;
        },
        // this function return total product quantity
        getProductsLength() {
            let total_cart_quantity = 0;
            for (let item of this.getCartData) {
                let each_product_quantity = item.product_amount;
                total_cart_quantity += each_product_quantity;
            }
            return total_cart_quantity;
        },
        // this function return total balance of the existing data in the local storage
        getFullBalance() {
            let totalBalance = 0;
            for (let item of this.getCartData) {
                let balance = item.price
                totalBalance += balance; // Update the total balance with each item's balance
            }
            return totalBalance // Return the total balance after the loop
        }
    }
}
</script>

<style scoped>
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