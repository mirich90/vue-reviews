<template>
  <div class="item__wrapper">
    <div class="preview-img">
      <div v-if="carousel" class="game-slider">
        <Carousel :images="game.gallery" />
      </div>
      <img
        v-else
        :src="require('@/assets/img/' + game.img)"
        :alt="game.title"
      />
    </div>
    <router-link v-if="link" :to="/games/ + game.id" class="preview-info">
      <h2>{{ game.title }}</h2>
      <p>{{ game.description }}</p>
    </router-link>
    <div v-else class="preview-info">
      <h2>{{ game.title }}</h2>
      <p>{{ game.description }}</p>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";

export default {
  components: { Carousel },
  props: {
    game: {
      type: Object,
      required: true,
    },
    carousel: {
      type: Boolean,
      required: true,
    },
    link: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.item__wrapper {
  display: flex;
  margin: 3rem 0;
  & > * {
    width: 50%;
  }
  & p {
    font-family: var(--font-family-secondary);
    line-height: 1.6;
  }
}
.preview-img img {
  width: 100%;
}
.preview-info {
  padding: 0 0 0 2rem;
  text-align: left;
  text-decoration: none;
  color: currentcolor;
  opacity: 1;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.9;
  }
}
</style>
