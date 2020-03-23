import api from "../../api/imgur";
import router from "../../router";

interface RootState {
  rootState: { auth: { token: string } };
  commit: Function;
}

type State = { images: Array<any> };
const state = {
  images: []
};

const getters = {
  allImages: (state: State) => state.images
};

const actions = {
  async fetchImages({ rootState, commit }: RootState) {
    const { token } = rootState.auth;
    const response = await api.fetchImages(token);
    commit("setImages", response.data.data);
  },
  async uploadImages({ rootState }: RootState, images: Array<any>) {
    // Get the access token
    const { token } = rootState.auth;

    // Call our API module to do the upload
    await api.uploadImages(images, token);

    // Redirect the user to ImageList component
    router.push("/");
  }
};

const mutations = {
  setImages: (state: State, images: State["images"]) => {
    state.images = images;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
