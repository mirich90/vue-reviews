<template>
  <div id="app">
    <Nav></Nav>

    <router-view />

    <footer>
      <a v-if="!isNotFound" href="#app">Вернуться наверх</a>
    </footer>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
  components: { Nav },
  data() {
    return {
      isNotFound: this.$route.name === "notFound",
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/css/root.css";

html {
  scroll-behavior: smooth;
}
body {
  font-family: var(--font-family-primary);
  background-color: var(--color-bg);
  color: var(--color-font);
}
#app {
  font-family: var(--font-family-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  & h1,
  & h2,
  & h3,
  & h4 {
    font-family: var(--font-family-secondary);
  }
}

nav,
footer {
  padding: 30px;

  a {
    font-weight: bold;
    color: var(--color-font);

    &.router-link-exact-active {
      color: var(--color-primary);
    }
  }
}

.container {
  width: 100%;
  max-width: 900px;
  margin: auto;
  &.small {
    max-width: 700px;
  }
}
</style>
