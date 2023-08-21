<template>
    <main>

        <!-- breadcrumb area start -->
        <section class="breadcrumb__area include-bg pt-95 pb-50" data-bg-color="#EFF1F5" style="background-color: rgb(239, 241, 245);">
        <div class="container">
            <div class="row">
                <div class="col-xxl-12">
                    <div class="breadcrumb__content p-relative z-index-1">
                    <h3 class="breadcrumb__title">შეკვეთის გაფორმება</h3>
                    <div class="breadcrumb__list">
                        <span><a href="/">მთავარი გვერდი</a></span>
                        <span>შეკვეთის გაფორმება</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        <!-- breadcrumb area end -->

        <!-- checkout area start -->
        <section class="tp-checkout-area pb-120" data-bg-color="#EFF1F5" style="background-color: rgb(239, 241, 245);">
        <div class="container">
            <Form v-slot="{ handleSubmit }" as="div">
                <form @submit="handleSubmit($event, submitForm)" class="row">
                    <div class="col-lg-7">
                        <div class="tp-checkout-bill-area position-relative">

                            <!-- Pre Loader -->
                            <div class="position-absolute top-50 left-50 tr-xy-50" id="loading" v-if="loading" style="z-index: 10;background-color: #ffffffbf">
                                <div class="d-flex align-items-center justify-content-center" id="loading-center">
                                    <div>
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

                            <h3 class="tp-checkout-bill-title">გადახდის დეტალები</h3>
            
                            <div class="tp-checkout-bill-form">
                                <div>
                                    <div class="tp-checkout-bill-inner">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="tp-checkout-input">
                                                    <label>სახელი <span>*</span></label>
                                                    <Field type="text" :rules="isRequired" name="name" v-model="form.name" placeholder="სახელი" />
                                                    <ErrorMessage class="text-danger font-size-14px" name="name" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="tp-checkout-input">
                                                    <label>გვარი <span>*</span></label>
                                                    <Field type="text" :rules="isRequired" name="lastname" v-model="form.lastname" placeholder="გვარი" />
                                                    <ErrorMessage class="text-danger font-size-14px" name="lastname" />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="tp-checkout-input">
                                                    <label>ქალაქი <span>*</span></label>
                                                    <Field type="text" :rules="isRequired" name="city" v-model="form.city" placeholder="ქალაქი" />
                                                    <ErrorMessage class="text-danger font-size-14px" name="city" />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="tp-checkout-input">
                                                    <label>ქუჩის მისამართი</label>
                                                    <input v-model="form.street" type="text" placeholder="ქუჩის მისამართი">
                                            </div>
                                            <div class="col-md-12">
                                                <div class="tp-checkout-input">
                                                    <label>ტელეფონის ნომერი <span>*</span></label>
                                                    <Field type="text" :rules="isRequired" name="mobile" v-model="form.mobile" placeholder="ტელეფონის ნომერი" />
                                                    <ErrorMessage class="text-danger font-size-14px" name="mobile" />
                                                </div> 
                                            </div>
                                            <div class="col-md-12">
                                                <div class="tp-checkout-input">
                                                    <label>ელ.ფოსტა</label>
                                                    <input v-model="form.email" type="email" placeholder="ელ.ფოსტა">
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="tp-checkout-input">
                                                    <label>შეკვეთის დეტალები (სურვილისამებრ)</label>
                                                    <textarea v-model="form.description" placeholder="აღწერეთ თქვენი შეკვეთა, მაგ: სპეციალური შენიშვნები მიწოდებისათვის."></textarea>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                    <!-- checkout place order -->
                    <div class="tp-checkout-place white-bg position-relative">
                        <!-- Pre Loader -->
                            <div class="position-absolute top-50 left-50 tr-xy-50" id="loading" v-if="loading" style="z-index: 10;background-color: #ffffffbf">
                                <div class="d-flex align-items-center justify-content-center" id="loading-center">
                                    <div>
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
                                            <!-- <h3 class="tp-preloader-title">Shofy.ge</h3>
                                            <p class="tp-preloader-subtitle mt-3">იტვირთება</p> -->
                                        </div>
                                    </div>
                                </div>  
                            </div>
                            <!-- End Pre Loader -->

                        <h3 class="tp-checkout-place-title">თქვენი შეკვეთა</h3>
            
                        <div class="tp-order-info-list mt-35">
                            <ul>
            
                                <!-- header -->
                                <li class="tp-order-info-list-header">
                                <h4>პროდუქტი: {{ getProductsLength }}</h4>
                                </li>
            
                                <!-- item list -->
                                <li class="d-flex flex-column overflow-auto" style="max-height: 500px">
                                    <div v-for="(item, index) in getCartData" :key="index" class="cartmini__widget-item py-2">
                                        <div class="cartmini__thumb">
                                            <router-link :to="'/inner/'+item.id">
                                                <img :src="item.image" alt="">
                                            </router-link>
                                        </div>
                                        <div class="cartmini__content">
                                            <h5 class="cartmini__title">
                                                <router-link :to="'/inner/'+item.id">{{ item.title }}</router-link>
                                            </h5>
                                            <div class="cartmini__price-wrapper">
                                                <span class="cartmini__price me-1">₾{{ item.price }}</span>
                                                <span class="cartmini__quantity">x{{ item.product_amount }}</span>
                                            </div>
                                        </div>
                                        <button type="button" @click="deleteItem(index)" class="cartmini__del">
                                            <i class="tio-clear"></i>
                                        </button>
                                    </div>
                                    <div v-if="getCartData.length == 0" class="cartmini__empty mt-0 text-center">
                                        <p>შენი კალათა ცარიელია</p>
                                        <router-link to="/Products" class="tp-btn">პროდუქტებში გადასვლა</router-link>
                                    </div>
                                </li>
            
                                <!-- subtotal -->
                                <li class="tp-order-info-list-subtotal">
                                    <span>ჯამი</span>
                                    <span>₾ {{ getFullBalance - coupon }}</span>
                                </li>
            
                                <!-- shipping -->
                                <li class="tp-order-info-list-shipping">
                                <span>მიწოდება</span>
                                <div class="tp-order-info-list-shipping-item d-flex flex-column align-items-end">
                                    <span>
                                        <input id="local_pickup" v-model="form.shipping" value="10" type="radio" name="shipping">
                                        <label class="text-end" for="local_pickup"> 100₾ ნაკლები: <span>+ ₾10.00</span></label>
                                    </span>
                                    <span>
                                        <input id="free_shipping" :disabled="getFullBalance <= 100" type="radio" v-model="form.shipping" value="0" name="shipping">
                                        <label for="free_shipping">უფასო მიწოდება</label>
                                    </span>
                                </div>
                                </li>

                                <li>
                                    <div class="alert alert-secondary w-100 my-1" role="alert"><i class="tio-credit-card-outlined"></i> კურიერთან ქეშით გადახდა</div>
                                </li>
            
                                <!-- total -->
                                <li class="tp-order-info-list-total">
                                <span>მთლიანი ჯამი</span>
                                <span>₾ {{ getFullBalance + Number.parseInt(this.form.shipping) - coupon }}</span>
                                </li>
                            </ul>
                        </div>
                        <div class="tp-checkout-agree">
                            <p>თქვენი პერსონალური მონაცემები გამოყენებული იქნება თქვენი შეკვეთის დასამუშავებლად, რომლებიც აღწერილია ჩვენს საიტზე [წესებში].</p>
                            <div class="tp-checkout-option">
                                <Field type="checkbox" id="rules" :rules="isRequired" :value="true" name="rules" v-model="form.rules" />
                                <label class="d-block" for="rules">წავიკითხე და ვეთანხმები საიტის <a href="#"><b>წესებს</b></a></label>
                                <ErrorMessage class="text-danger font-size-14px" name="rules"><span class="text-danger">დაეთანხმე წესებს</span></ErrorMessage>
                            </div>
                        </div>
                        <div class="tp-checkout-btn-wrapper">
                            <button v-if="form.name && form.lastname && form.city && form.mobile && form.rules && getCartData.length != 0" class="tp-checkout-btn w-100">შეკვეთის გაფორმება</button>
                            <button v-else disabled class="tp-checkout-btn w-100">შეკვეთის გაფორმება</button>
                        </div>
                    </div>
                    </div>
                </form>
            </Form>
        </div>
        </section>
        <!-- checkout area end -->


    </main>
</template>

<script>
// Validation For Fields
import router from '@/router';
import { Form, Field, ErrorMessage } from 'vee-validate';

export default {
    name: "Checkout",
    data() {
        return {
            form: {
                name: '',
                lastname: '',
                city: '',
                street: '',
                mobile: '',
                email: '',
                description: '',
                shipping: 10,
                total: 0,
                sum_total: 0,
                rules: false
            },
            loading: false,
            coupon_quantity: 0,
            discount: 20
        }
    },
    components: {
    // Validation For Fields
    Form,
    Field,
    ErrorMessage,
    router
},
    methods: {
        // this Funtion delete product from cart
        deleteItem(id) {
            this.$store.commit("deleteProduct", id)
            localStorage.setItem('cart_items', JSON.stringify(this.$store.state.cart_product));

            if (localStorage.getItem('coupon')) {
                this.coupon_quantity = this.getFullBalance * this.discount / 100;
                localStorage.setItem('coupon', JSON.stringify(this.coupon_quantity));
            }

            const cart_product_length = this.$store.state.cart_product.length;
            if(cart_product_length == 0) {
                localStorage.removeItem('coupon');
                // this.coupon_quantity = 0;
            }
            
        },
        // buy
        submitForm() {
            console.log(this.form);
          
            // this.form = {
            //     name: '',
            //     lastname: '',
            //     city: '',
            //     street: '',
            //     mobile: '',
            //     email: '',
            //     description: '',
            //     shipping: 10,
            //     total: 0,
            //     sum_total: 0,
            //     rules: false
            // }

            // this.loading = true;
            // setTimeout(() => {
            //     this.loading = false;
            // }, 5000)


            // if(localStorage.getItem('coupon')) {
            //     localStorage.removeItem('coupon')
            // }


            // if (localStorage.getItem("cart_items")) {
            //     this.$store.commit("replace_items", '')
            //     localStorage.removeItem('cart_items')
            // }
        },
        // Validation For Fields
        isRequired(value) {
            if (value) {
                return true;
            }
            return 'აუცილებელი ველი';
        }
    },
    watch: {

        // Validation For Fields (rules check input)
        'form.rules': {
            handler(value) {
                if(value == undefined) {
                    this.form.rules = false;
                }
            }
        },

        // when price amount changes
        getFullBalance() {
            if(JSON.parse(localStorage.getItem('coupon'))) {
                this.coupon_quantity = JSON.parse(localStorage.getItem('coupon'));
            } 
        }
    },
    mounted() {
        this.coupon_quantity = JSON.parse(localStorage.getItem('coupon'));

        window.scroll(0, 0);
    },
    computed: {
        // this function return total product quantity
        getProductsLength() {
            let total_cart_quantity = 0;
            for (let item of this.getCartData) {
                let each_product_quantity = item.product_amount;
                total_cart_quantity += each_product_quantity;
            }
            return total_cart_quantity
        },

        // this function return all products what exists in the local storage
        getCartData() {
            return this.$store.getters.getProducts;
        },
        
        // this function return total balance of the existing data in the local storage
        getFullBalance() {
        
            let totalBalance = 0;
            for (let item of this.getCartData) {
                let balance = item.price;
                totalBalance += balance; // Update the total balance with each item's balance
            }

            // these two from variable i feel with product total balance: this.form.total and  this.form.sum_total
            this.form.total = totalBalance - this.coupon_quantity;
            this.form.sum_total = totalBalance + Number.parseInt(this.form.shipping) - this.coupon_quantity;
            

            return totalBalance // Return the total balance after the loop
        },

        // if vaucher exists
        coupon() {
            if(localStorage.getItem('coupon')) {
                return this.coupon_quantity;
            }
            return this.coupon_quantity;
        }
    }
    
}
</script>

<style>

</style>