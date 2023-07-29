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
                <div class="tp-checkout-bill-area">
                   <h3 class="tp-checkout-bill-title">გადახდის დეტალები</h3>
    
                   <div class="tp-checkout-bill-form">
                      <form action="#">
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
                      </form>
                   </div>
                </div>
            </div>
            <div class="col-lg-5">
            <!-- checkout place order -->
            <div class="tp-checkout-place white-bg">
                <h3 class="tp-checkout-place-title">თქვენი შეკვეთა</h3>
    
                <div class="tp-order-info-list mt-35">
                    <ul>
    
                        <!-- header -->
                        <li class="tp-order-info-list-header">
                        <h4>პროდუქტი: {{ getCartData ? getCartData.length : 0 }}</h4>
                        </li>
    
                        <!-- item list -->
                        <li class="d-flex flex-column overflow-auto" style="max-height: 500px">
                        <div v-for="(item, index) in getCartData" :key="index" class="cartmini__widget-item py-2">
                            <div class="cartmini__thumb">
                                <a href="/Product-details">
                                    <img :src="item.image" alt="">
                                </a>
                            </div>
                            <div class="cartmini__content">
                                <h5 class="cartmini__title">
                                    <a href="product-details.html">{{ item.title }}</a>
                                </h5>
                                <div class="cartmini__price-wrapper">
                                    <span class="cartmini__price me-1">₾{{ Number.parseInt(item.price) * item.product_amount }}</span>
                                    <span class="cartmini__quantity">x{{ item.product_amount }}</span>
                                </div>
                            </div>
                            <button type="button" @click="deleteItem(index)" class="cartmini__del">
                                <i class="tio-clear"></i>
                            </button>
                        </div>
                        </li>
    
                        <!-- subtotal -->
                        <li class="tp-order-info-list-subtotal">
                            <span>ჯამი</span>
                            <span>₾ {{ getFullBalance }}</span>
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
    
                        <!-- total -->
                        <li class="tp-order-info-list-total">
                        <span>მთლიანი ჯამი</span>
                        <span>₾ {{ getFullBalance + Number.parseInt(this.form.shipping) }}</span>
                        </li>
                    </ul>
                </div>
                <div class="tp-checkout-agree">
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
        }
    },
    components: {
        // Validation For Fields
        Form,
        Field,
        ErrorMessage
    },
    methods: {
        // this Funtion delete product from cart
        deleteItem(id) {
            this.$store.commit("deleteProduct", id)
            localStorage.setItem('cart_items', JSON.stringify(this.$store.state.cart_product));
        },
        submitForm() {
            this.for_form_total_blanaces
            console.log(this.form);
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
        'form.rules': {
            handler(value) {
                if(value == undefined) {
                    this.form.rules = false;
                }
            }
        }
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
                let balance = Number.parseInt(item.price) * item.product_amount;
                totalBalance += balance; // Update the total balance with each item's balance
            }
            return totalBalance // Return the total balance after the loop
        },
        for_form_total_blanaces() {
            this.form.total = this.getFullBalance;
            this.form.sum_total = this.getFullBalance + Number.parseInt(this.form.shipping);
        }
    }
    
}
</script>

<style>

</style>