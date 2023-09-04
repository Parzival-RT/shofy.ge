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
                           <img src="../assets/img/logo/preloader/preloader-icon.svg" alt="">
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
    
      <!-- Contact Content -->
      <main>

         <!-- breadcrumb area start -->
         <section class="breadcrumb__area include-bg text-center pt-80 pb-50">
            <div class="container">
               <div class="row">
                  <div class="col-xxl-12">
                     <div class="breadcrumb__content p-relative z-index-1">
                        <h3 class="breadcrumb__title">მოგვწერე</h3>
                        <div class="breadcrumb__list">
                           <span><router-link to="#">მთავარი</router-link></span>
                           <span>კონტაქტი</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <!-- breadcrumb area end -->


         <!-- contact area start -->
         <section class="tp-contact-area pb-100">
            <div class="container">
               <div class="tp-contact-inner">
                  <div class="row">
                     <div class="col-xl-9 col-lg-8">
                        <div class="tp-contact-wrapper">
                           <h3 class="tp-contact-title">მოგვწერე მესიჯი</h3>

                           <div class="tp-contact-form">
                                 <Form v-slot="{ handleSubmit }" as="div">
                                    <form @submit="handleSubmit($event, submitForm)" id="contact-form">
                                       <div class="tp-contact-input-wrapper">
                                          <div class="tp-contact-input-box">
                                             <div class="tp-contact-input">
                                                <Field type="text" id="name" :rules="isRequired" name="name" v-model="form.name" placeholder="სახელი"/>
                                                <ErrorMessage class="text-danger font-size-14px" name="name" />
                                             </div>
                                             <div class="tp-contact-input-title">
                                                <label for="name">სახელი</label>
                                             </div>
                                          </div>
                                          <div class="tp-contact-input-box">
                                             <div class="tp-contact-input">
                                                <Field type="email" id="email" :rules="isRequired" name="email" v-model="form.email" placeholder="shofy@mail.com"/>
                                                <ErrorMessage class="text-danger font-size-14px" name="email" />
                                             </div>
                                             <div class="tp-contact-input-title">
                                                <label for="email">ელ.ფოსტა</label>
                                             </div>
                                          </div>
                                          <div class="tp-contact-input-box">
                                             <div class="tp-contact-input">
                                                <Field type="text" id="subject" :rules="isRequired" name="subject" v-model="form.subject" placeholder="საკითხი"/>
                                                <ErrorMessage class="text-danger font-size-14px" name="subject" />
                                             </div>
                                             <div class="tp-contact-input-title">
                                                <label for="subject">საკითხი</label>
                                             </div>
                                          </div>
                                          <div class="tp-contact-input-box">
                                             <div class="tp-contact-input">
                                                <Field v-slot="{field}" id="message" :rules="isRequired" name="message">
                                                      <textarea v-bind="field" id="message" name="message" v-model="form.message" placeholder="დაწერე შენი მესიჯი აქ..."></textarea>
                                                      <ErrorMessage class="text-danger font-size-14px" name="message" />
                                                </Field>
                                             </div>
                                             <div class="tp-contact-input-title">
                                                <label for="message">შენი მესიჯი</label>
                                             </div>
                                          </div>
                                       </div>
                                       <button class="tp-contact-btn" type="submit">გაგზავნა</button>
                                    </form>
                                 </Form>
                           </div>
                        </div>
                     </div>
                     <!-- Col -->
                     <div class="col-xl-3 col-lg-4">
                        <div class="tp-contact-info-wrapper">
                           <div class="tp-contact-info-item">
                              <div class="tp-contact-info-icon">
                                 <span>
                                    <img src="../assets/img/contact/contact-icon-1.png" alt="">
                                 </span>
                              </div>
                              <div class="tp-contact-info-content">
                                 <p data-info="mail"><a href="mailto:contact@shofy.ge">contact@shofy.ge</a></p>
                                 <p data-info="phone"><a href="tel:670-413-90-762">+995 558 18 70 81</a></p>
                                 <p data-info="phone"><a href="tel:670-413-90-762">+995 558 18 70 81</a></p>
                              </div>
                           </div>
                           <div class="tp-contact-info-item">
                              <div class="tp-contact-info-icon">
                                 <span>
                                    <img src="../assets/img/contact/contact-icon-3.png" alt="">
                                 </span>
                              </div>
                              <div class="tp-contact-info-content">
                                 <div class="tp-contact-social-wrapper mt-5">
                                    <h4 class="tp-contact-social-title">დაგვიმეგობრდი სოციალურ ქსელში</h4>

                                    <div class="tp-contact-social-icon">
                                       <a href="#"><i class="tio-facebook"></i></a>
                                       <a href="#"><i class="tio-tik-tok"></i></a>
                                       <a href="#"><i class="tio-instagram"></i></a>
                                       <a href="#"><i class="tio-linkedin"></i></a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <!-- End Col -->

                     <!-- Col -->
                     <div class="col-12">
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
                     <!-- End Col -->
                  </div>
               </div>
            </div>
         </section>
         <!-- contact area end -->

      </main>
      <!-- End Contact Content -->

      <!-- Footer -->
      <Footer class="d-none d-sm-block" v-if="!this.$store.state.loading" />
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

// VeeValidate For Validation
import { Form, Field, ErrorMessage } from 'vee-validate';

export default {
    name: "Contact",
    data() {
        return {
            form: {
                name: '',
                email: '',
                subject: '',
                message: ''
            }
        }
    },
    components: {
        Header,
        MobileHeader,
        Footer,
        // Validation For Fields
        Form,
        Field,
        ErrorMessage
    },
    methods: {
        
        // For message request
        submitForm() {
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
    mounted() {

        // For Loading
        setTimeout(() => {
            this.$store.state.loading = false;
        }, 1000)

        window.scrollTo(0, 0)

    }
}
</script>

<style scoped>
    
</style>