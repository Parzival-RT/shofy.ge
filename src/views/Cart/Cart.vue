<template>
    <main>

        <!-- breadcrumb area start -->
        <section class="breadcrumb__area include-bg pt-95 pb-50">
            <div class="container">
                <div class="row">
                    <div class="col-xxl-12">
                        <div class="breadcrumb__content p-relative z-index-1">
                        <h3 class="breadcrumb__title">შენი კალათა</h3>
                        <div class="breadcrumb__list">
                            <span><a href="/">მთავარი გვერდი</a></span>
                            <span>კალათა</span>
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
                    <div class="col-xl-8 col-lg-8">
                        <div class="tp-cart-list mb-25 mr-30">
                        <table class="table">
                            <thead>
                                <tr>
                                <th colspan="2" class="tp-cart-header-product">Product</th>
                                <th class="tp-cart-header-price">Price</th>
                                <th class="tp-cart-header-quantity">Quantity</th>
                                <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in getCartData" :key="index">
                                    <!-- img -->
                                    <td class="tp-cart-img"><a href="product-details.html"> <img :src="item.image" alt=""></a></td>
                                    <!-- title -->
                                    <td class="tp-cart-title"><a href="product-details.html">{{ item.title }}</a></td>
                                    <!-- price -->
                                    <td class="tp-cart-price"><span>{{ item.price }}</span></td>
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
                                    <!-- action -->
                                    <td class="tp-cart-action">
                                    <button @click="deleteItem(index)" class="tp-cart-action-btn">
                                        <svg class="me-1" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.53033 1.53033C9.82322 1.23744 9.82322 0.762563 9.53033 0.46967C9.23744 0.176777 8.76256 0.176777 8.46967 0.46967L5 3.93934L1.53033 0.46967C1.23744 0.176777 0.762563 0.176777 0.46967 0.46967C0.176777 0.762563 0.176777 1.23744 0.46967 1.53033L3.93934 5L0.46967 8.46967C0.176777 8.76256 0.176777 9.23744 0.46967 9.53033C0.762563 9.82322 1.23744 9.82322 1.53033 9.53033L5 6.06066L8.46967 9.53033C8.76256 9.82322 9.23744 9.82322 9.53033 9.53033C9.82322 9.23744 9.82322 8.76256 9.53033 8.46967L6.06066 5L9.53033 1.53033Z" fill="currentColor"></path>
                                        </svg>
                                        <span>წაშლა</span>
                                    </button>
                                    </td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="tp-cart-checkout-wrapper">
                            <div class="tp-cart-checkout-top d-flex align-items-center justify-content-between">
                                <span class="tp-cart-checkout-top-title">ჯამი</span>
                                <span class="tp-cart-checkout-top-price">₾ {{ getFullBalance }}</span>
                            </div>
                            <div class="tp-cart-coupon-input d-flex my-3">
                                <input :class="coupon_name == check_coupon ? 'border-success' : '' || check_coupon.length >= 1 ? 'border-danger' : ''" type="text" v-model="check_coupon" placeholder="შეიყვანეთ კუპონის კოდი">
                                <button class="w-25" @click="check_coupon_status"><i class="tio tio-labels"></i></button>
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
            localStorage.setItem('cart_items', JSON.stringify(this.$store.state.cart_product));
        },
        // When user click check coupon button this function check its status code
        check_coupon_status() {
            if(this.coupon_name != this.check_coupon) {
                alert('გთხოვთ შეიყვანოთ კუპონის სწორი კოდი');
                return
            } else {
                this.coupon_quantity = this.getFullBalance * this.discount / 100;
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

            if (localStorage.getItem('coupon')) {
                this.coupon_quantity = this.getFullBalance * this.discount / 100;
                localStorage.setItem('coupon', JSON.stringify(this.coupon_quantity));
            }
            
            this.$store.commit('raplace_item_data', data);
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

            if (localStorage.getItem('coupon')) {
                this.coupon_quantity = this.getFullBalance * this.discount / 100;
                localStorage.setItem('coupon', JSON.stringify(this.coupon_quantity));
            }

            this.$store.commit('raplace_item_data', data);
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

<style>
</style>