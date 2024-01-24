<template>
  <div class="container">
    <h1>Игры</h1>

    <GameItem
      v-for="game in games"
      :key="game.id"
      :game="game"
      :carousel="false"
      :link="true"
    ></GameItem>
  </div>
</template>

<script>
import GameItem from "@/components/GameItem.vue";

export default {
  components: { GameItem },
  data() {
    return {
      games: [],
    };
  },
  created() {
    this.$store.dispatch("getGames").then((res) => {
      this.games = res;
    });
  },
};
</script>
