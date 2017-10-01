import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      id:null,
      bannerList: null,
      newList: null,
      oldList: null
  },
  getters: {
    retBanner: state => state.bannerList,
    retNewList: state => state.newList,
    retOldList: state => state.oldList,
    retId: state => state.id
  },
  mutations: {
    setId(state,data) {
      state.id = data
    },
    setBannerList(state,data) {
      state.bannerList = data
    },
    setNewList(state,data) {
      state.newList = data
    },
    setOldList(state,data) {
      state.oldList = data
    }
  },
  actions: {
    getFristNews() {
      getAxios()
    }
  }
})
