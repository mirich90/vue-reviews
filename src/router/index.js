import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import GameView from "../views/GameView.vue";
import GamesView from "../views/GamesView.vue";
import UsersView from "../views/UsersView.vue";
import UserView from "../views/UserView.vue";
import NotFound from "../views/404.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/games",
    name: "games",
    component: GamesView,
  },
  {
    path: "/games/:id",
    name: "game",
    component: GameView,
  },
  {
    path: "/users",
    name: "users",
    component: UsersView,
  },
  {
    path: "/users/:id",
    name: "user",
    component: UserView,
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
