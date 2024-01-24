<template>
  <div v-if="reviews.length > 0" class="tabs container small">
    <h2 class="title">Обзоры</h2>
    <div class="tabs__nav tabs-nav">
      <div
        v-for="(review, id) in reviews"
        :key="review.id"
        :class="[
          idReview === review.id ? 'is_active' : '',
          'game-reviews-item',
          'tabs-nav__item',
        ]"
        @click="setActive"
        :data-tab-name="id"
      >
        {{ users.find((u) => u.id === review.user_id).name }}:
      </div>
    </div>

    <div class="game-review container small tabs__content">
      <User :user="user" />
      <h4>Оценка: {{ raitingReview }} из 10</h4>
      <div v-html="textReview" class="container small tabs__content"></div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import User from "@/components/User.vue";

export default {
  components: { User },

  props: {
    users: {
      type: Array,
      required: true,
    },
    gameId: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      reviews: [],
      textReview: null,
      idReview: null,
      raitingReview: null,
    };
  },

  created() {
    this.$store.dispatch("getReviews", this.id).then((reviews) => {
      this.reviews = reviews.filter((review) => review.game_id === this.gameId);
      if (this.reviews[0]) {
        const review = this.reviews[0];
        this.textReview = review.text;
        this.idReview = review.id;
        this.raitingReview = review.raiting;
        this.user = this.users.find((u) => u.id === review.user_id);
      }
    });
  },
  methods: {
    setActive: function (e) {
      const id = e.target.getAttribute("data-tab-name");
      const review = this.reviews[id];
      this.textReview = review.text;
      this.idReview = review.id;
      this.raitingReview = review.raiting;
      this.user = this.users.find((u) => u.id === review.user_id);
    },
  },
};
</script>

<style lang="scss" scoped>
.game-review {
  margin-top: 2rem;
  text-align: left;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.6em;
  letter-spacing: 0;
  text-rendering: optimizeLegibility;
  transition: 0.3s;
}

// tabs
.tabs-nav {
  display: flex;
  justify-content: space-between;
}
.tabs-nav__item {
  cursor: pointer;
  flex: 1;
  padding: 0.5rem;
  font-size: 1.2rem;
  border: 1px solid transparent;
  border-bottom: 1px solid var(--color-primary);
  transition: 0.3s;
}
.tabs-nav__item.is_active {
  border: 1px solid var(--color-primary);
  border-bottom: 1px solid transparent;
}
.game-review {
  text-align: left;
}
</style>
