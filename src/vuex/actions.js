import axios from "axios";

const actions = {
    GET_PRODUCT_FROM_API({ commit }) {
      return axios('http://localhost:8000/api/product/all', {
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
    }, 
    GET_CURRENT_PRODUCT_API({ commit }, product_id) { 
        return axios(`http://localhost:8000/api/product/${product_id}`, { method: 'GET'})
          .then((response) => { 
            commit('SET_CURRENT_PRODUCT', response.data)
            return response.data 
          })
          .catch((error) =>  {
            console.log(error)
            return error 
          })

    }
  }

export default actions; 
