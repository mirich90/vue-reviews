<template>
  <article>
    <div class="container">
      <GameItem
        v-if="game"
        :game="game"
        :carousel="true"
        :link="false"
      ></GameItem>
    </div>

    <hr />

    <Reviews :users="users" :gameId="id" />
  </article>
</template>

<script>
import GameItem from "@/components/GameItem.vue";
import Carousel from "@/components/Carousel.vue";
import Reviews from "@/components/Reviews.vue";

export default {
  components: { GameItem, Carousel, Reviews },
  data() {
    return {
      id: +this.$route.params.id,
      game: null,
      users: [],
      user: null,
    };
  },
  created() {
    this.$store.dispatch("getUsers").then((res) => {
      this.users = res;
    });
    this.$store.dispatch("getGames", this.id).then((res) => {
      this.game = res;
    });
  },
};
</script>

<style lang="scss" scoped>
hr {
  margin: 3rem auto;
  max-width: 7rem;
}
.game__wrapper {
  display: flex;
  justify-content: space-between;
  line-height: 1.6em;

  & .game-slider,
  & .game-content {
    width: 50%;
  }

  & .game-content {
    padding: 2rem;
    align-items: left;
  }
}
</style>
