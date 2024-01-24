<template>
  <nav>
    <router-link to="/">Отзовик</router-link> |
    <router-link to="/games">Игры</router-link> |
    <router-link to="/users">Авторы</router-link> |
    <SwitchTheme />
  </nav>
</template>

<script>
import SwitchTheme from "@/components/SwitchTheme.vue";

export default {
  components: { SwitchTheme },
};
</script>

<style lang="scss"></style>
