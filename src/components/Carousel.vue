<template>
  <div class="carousel">
    <div class="carousel-images">
      <img
        v-for="(slide, index) in images"
        :key="index"
        :src="require('@/assets/img/' + slide.img)"
        :alt="slide.name"
        class="carousel-img"
      />
    </div>
    <div class="carousel-buttons">
      <div class="wrapper">
        <button @click="prevImage"><</button>
        <button @click="nextImage">></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      id: 0,
    };
  },
  methods: {
    nextImage: function () {
      this.id = this.id === this.images.length - 1 ? 0 : this.id + 1;
      this.changeImage();
    },
    prevImage: function () {
      this.id = this.id === 0 ? this.images.length - 1 : this.id - 1;
      this.changeImage();
    },
    changeImage: function () {
      const img = document.querySelectorAll(".carousel-img")[this.id];
      const images = document.querySelector(".carousel-images");
      const offsetLeft = img.offsetLeft;
      const marginLeft = this.formatInt(images.style.marginLeft);
      images.style.marginLeft = marginLeft - offsetLeft + "px";
    },
    formatInt: function (str) {
      return -parseInt(str.match(/\d+/)) || 0;
    },
  },
  created: () => {},
};
</script>

<style lang="scss" scoped>
.carousel {
  height: 300px;
  width: 100%;
  overflow: hidden;
  background-color: #000;
  position: relative;

  & .carousel-images {
    display: flex;
    height: 100%;
    transition: margin 0.5s;
  }

  & .carousel-buttons {
    display: flex;
    justify-content: center;
    margin-top: -2rem;

    & button {
      border-radius: 50%;
      border: none;
    }
  }
}
</style>
