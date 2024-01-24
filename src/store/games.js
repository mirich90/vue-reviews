import axios from "axios";
export default {
  state: {
    games: [],
  },
  getters: {
    getGame: (state) => (id) => {
      return state.games.find((game) => game.id === id);
    },
  },
  mutations: {
    getGames(state, games) {
      state.games = games;
    },
  },
  actions: {
    getGames({ commit }, id = "") {
      return axios
        .get("http://localhost:3000/games/" + id)
        .then((res) => {
          let games = res.data;
          commit("getGames", res.data);
          return games;
        })
        .catch((e) => {
          console.log(e);
          return e;
        });
    },
  },
  modules: {},
};
