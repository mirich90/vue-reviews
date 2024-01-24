import axios from "axios";
export default {
  state: {
    users: [],
  },
  getters: {
    getUsers: (state) => (id) => {
      return state.gameList.find((user) => user.id === id);
    },
  },
  mutations: {
    getUsers(state, users) {
      state.users = users;
    },
  },
  actions: {
    getUsers({ commit }, id = "") {
      return axios
        .get("http://localhost:3000/users/" + id)
        .then((res) => {
          let users = res.data.map((user) => ({
            ...user,
            reviews: [],
          }));
          commit("getUsers", users);
          return users;
        })
        .catch((e) => {
          console.log(e);
          return e;
        });
    },
  },
  modules: {},
};
