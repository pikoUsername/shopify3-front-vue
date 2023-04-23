import axios from 'axios';
import { createStore } from 'vuex';

const store = createStore({
  state: {
    products: [],
    card:[]
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
    }
  },
  actions: {
    GET_PRODUCT_FROM_API({ commit }) {
      return axios('http://localhost:3000/products', {
        method: 'GET'
      })
        .then((response) => {
          commit('SET_PRODUCTS_TO_STATE', response.data);
          return response.data;
        })
        .catch((error) => {
            console.log(error);
            return error;
          });
    },
    ADD_TO_CARD({commit}, product){
        commit('SET_CARD', product);
    },
    DELETE_FROM_CARD({commit}, index){
        commit('REMOVE_FROM_CARD', index);
    }
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CARD(state) {
        return state.card;
      },
  }
});
 
export default store;
