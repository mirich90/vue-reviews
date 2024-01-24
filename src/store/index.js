import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import games from "./games";
import users from "./users";
import reviews from "./reviews";

export default new Vuex.Store({
  modules: {
    games,
    users,
    reviews,
  },
});
