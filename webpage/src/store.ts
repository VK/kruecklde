import Vue from 'vue';
import Vuex from 'vuex';
import { State, state } from './state'

Vue.use(Vuex);

export default new Vuex.Store<State>({
  state: state,

  mutations: {

  },
  actions: {

  }
});