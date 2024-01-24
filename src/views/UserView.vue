<template>
  <div class="container">
    <div class="container-header">
      <User v-if="user" :user="user" />
      <h1>Обзоры пользователя</h1>
    </div>

    <GameItem
      v-for="game in gamesUser"
      :key="game.id"
      :game="game"
      :carousel="false"
      :link="true"
    ></GameItem>
  </div>
</template>

<script>
import GameItem from "@/components/GameItem.vue";
import User from "@/components/User.vue";

export default {
  components: { GameItem, User },
  data() {
    return {
      id: +this.$route.params.id,
      user: null,
      games: [],
      reviews: [],
      gamesUser: [],
    };
  },
  created() {
    this.$store.dispatch("getUsers").then((users) => {
      this.user = users.find((user) => user.id === this.id);
    });
    this.$store.dispatch("getGames").then((games) => {
      this.games = games;
    });
    this.$store.dispatch("getReviews").then((reviews) => {
      reviews.forEach((review) => {
        if (review.user_id === this.id) {
          this.reviews.push(review);
          this.gamesUser.push(
            this.games.find((game) => game.id === review.game_id)
          );
        }
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.container-header {
  text-align: left;
}
</style>
