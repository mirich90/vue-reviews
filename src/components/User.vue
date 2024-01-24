<template>
  <router-link :to="/users/ + user.id" class="user">
    <img :src="require('@/assets/img/' + user.img)" :alt="user.name" />
    <span>{{ user.name }}</span>
  </router-link>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
a.user {
  color: var(--color-fonts);
  img {
    width: 60px;
    height: auto;
    border-radius: 50%;
    margin-right: 16px;
  }
}
</style>
