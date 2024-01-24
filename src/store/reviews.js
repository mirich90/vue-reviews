import axios from "axios";
export default {
  state: {
    reviews: null,
  },
  getters: {
    getReviews: (state) => (id) => {
      return state.reviews;
    },
  },
  mutations: {
    getReviews(state, reviews) {
      state.reviews = reviews;
    },
  },
  actions: {
    getReviews({ commit }) {
      return axios
        .get("http://localhost:3000/reviews/")
        .then((res) => {
          let reviews = res.data;
          commit("getReviews", reviews);
          return reviews;
        })
        .catch((e) => {
          console.log(e);
          return e;
        });
    },
  },
  modules: {},
};
