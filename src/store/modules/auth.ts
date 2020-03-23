import api from "../../api/imgur";
import qs from "qs";
import router from "../../router";

type Token = string | null;
type State = { token: Token };
type Commit = { commit: Function };
const state: State = {
  token: window.localStorage.getItem("imgur_token")
};

const getters = {
  isLoggedIn: (state: State) => !!state.token
};

const mutations = {
  setToken: (state: State, token: Token) => (state.token = token)
};

const actions = {
  login: () => {
    api.login();
  },
  finalizeLogin({ commit }: Commit, hash: string) {
    const query = qs.parse(hash.replace("#", ""));
    commit("setToken", query.access_token);
    window.localStorage.setItem("imgur_token", query.access_token);
    router.push("/");
  },
  logout: ({ commit }: Commit) => {
    commit("setToken", null);
    window.localStorage.removeItem("imgur_token");
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
