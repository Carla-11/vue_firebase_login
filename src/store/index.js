import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    user: null,
  },
  
  getters: {
    enviandoUser(state){

      return state.user;
    }
  },
  
  mutations: {
    mutarUser(state,datosUser){
      state.user = datosUser;

    }
  },
  actions: {

    user({commit},datosUser){
       commit('mutarUser',datosUser);
    }
  },
 
})
