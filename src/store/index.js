import { createStore } from 'vuex'

export default createStore({
  state: {
    cart_product: [],
    // For Canvas: Mobile Menu and Cart Canvas
    cart: false,
    menu: false
  },
  getters: {
    getProducts: (state) => {
      return state.cart_product;
    }
  },
  mutations: {
    // this mutatation set data in localstorage
    cart_items(state, value) {
      state.cart_product.push(value);
    },

    // this mutatuin get from localstorage product data
    replace_items(state, value) {
      state.cart_product = value;
    },

    // this mutation delete product from cart
    deleteProduct(state, id) {
      state.cart_product.splice(id, 1);
    },

    // this mutation replace product in localstorage if there matched
    raplace_item_data(state, data) {
      state.cart_product.filter(item => item.id === data.id).forEach(el => {
        el.product_amount = data.product_amount;
      })
    },

    // for canvas
    cart_menu(state) {
      state.cart = true;
    },
    mobile_menu(state) {
      state.menu = true;
    }
  },
  actions: {
  },
  modules: {
  }
})
