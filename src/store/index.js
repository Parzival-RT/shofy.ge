import { createStore } from 'vuex'

export default createStore({
  state: {
    // Products - //* This Variable Exists and i use it in the Product vue component
    cart_product: [],

    // wishlist - //* This Variable Exists and i use it in the Product vue component
    wishlist: [],

    // For Product Cart OffCanvas - //* This Variable Exists and i use it in the Header vue component
    cart: false,
    // For Mobile Menu OffCanvas - //* This Variable Exists and i use it in the Header vue component
    menu: false,

    // For Loader Variable
    loading: true,


    footer: 0
  },
  getters: {

    // This function Return Product Data For Cart - //* and this function exists and i use it in the Header vue component
    getProducts: (state) => {
      return state.cart_product;
    },

    // This function Return Product Data For Cart - //* and this function exists and i use it in the Header vue component
    wishlist_products: (state) => {
      return state.wishlist;
    }
    
  },
  mutations: {

    // this mutatation set data in localstorage from product - //* and this Mutation exists and i use it in the Product vue component
    cart_items(state, value) {
      state.cart_product.push(value);
    },
    // this mutatation get localstorage product data and shows products in the cart - //* and this Mutation exists and i use it in the Header vue component
    replace_items(state, value) {
      state.cart_product = value;
    },
    // this mutation delete product from cart - //* and this Mutation exists and i use it in the Header vue component
    deleteProduct(state, id) {
      state.cart_product.splice(id, 1);
    },
    // this mutation replace product in localstorage if there matched - //* and this Mutation exists and i use it in the Product vue component
    raplace_item_data(state, data) {
      state.cart_product.filter(item => item.id === data.id).forEach(el => {
        el.product_amount = data.product_amount;
      })
    },

    // for wish list  //* and this Mutation fill from the Product vue component
    wish_list(state, value) { 
      state.wishlist.push(value);
    },
    fill_wish_list_from_localstorage(state, data) {
      state.wishlist = data;
    },
    // this mutation delete product from wishlist - //* and this Mutation exists and i use it in the Header vue component
    deleteProduct_from_wishlist(state, id) {
      state.wishlist.splice(id, 1);
    },
    // this mutation replace product in localstorage if there matched - //* and this Mutation exists and i use it in the Product vue component
    raplace_wishlist_item_data(state, data) {
      state.wishlist.filter(item => item.id === data.id).forEach(el => {
        el.product_amount = data.product_amount;
      })
    },

   // For Product Cart OffCanvas - //* and this Mutation exists and i use it in the Header vue component
    cart_menu(state) {
      state.cart = true;
    },
    // For Mobile Cart OffCanvas - //* and this Mutation exists and i use it in the Header vue component
    mobile_menu(state) {
      state.menu = true;
    },

    footer_element(state, value) {
      state.footer = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
