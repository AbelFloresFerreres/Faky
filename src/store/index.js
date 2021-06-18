import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    current_stage: 'Chat',
    score:0,
    step:0,

  },
  mutations: {
    change_stage_correct(state, name){
      state.current_stage = name;
      state.score +=1;
    },
    change_stage_incorrect(state, name){
      state.current_stage = name;
    },
    change_step(state){
      state.step +=1;
    }
  }
  ,
  actions: {
  },
  modules: {
  }
})
