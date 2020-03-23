import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import images from "./modules/images";

Vue.use(Vuex);

export default new Vuex.Store({
  // state: {},
  // mutations: {},
  // actions: {},
  modules: {
    auth,
    images
  }
});
