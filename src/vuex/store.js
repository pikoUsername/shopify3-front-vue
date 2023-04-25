
import { createStore } from 'vuex';
import actions from './actions';

const store = createStore({
  state: {
    path: "", 
    products: [],
    card:[], 
    currentProduct: null, 
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_CARD: (state, product) =>{
        if (state.card.length) {
            let isProducts = false;
            state.card.map(function (item){
                if (item.article === product.article){
                    isProducts = true;
                    item.quantity++ 
                }
            })
            if (!isProducts){
                state.card.push(product)
            }
        } else{
            state.card.push(product)
        }
    },
    REMOVE_FROM_CARD: (state, index) =>{
        state.card.splice(index, 1)
    }, 
    SET_CURRENT_PRODUCT: (state, product) => {
        state.currentProduct = product 
    }
  },
  actions: actions,
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CARD(state) {
        return state.card;
    },
    CURRENT_PRODUCT(state) { 
      return state.currentProduct; 
    }
  }
});
 
export default store;
