<template>
  <header class="header">
    <button class="hamburger" type="button" v-on:click="toggleNav()">
      <i class="fas fa-bars hamburger__icon"></i>
    </button>
    <nuxt-link to="/" class="header__logo">
      <img class="header__logo-img" src="~/static/images/snavillus_logo-light.svg" alt="snavillus logo">
    </nuxt-link>
  </header>
</template>

<style lang="scss">
@import '~assets/scss/_variables.scss';
@import '~assets/scss/_mixins.scss';

.header {
  align-items: center;
  background: $color2;
  color: $white;
  display: flex;
  height: $header-height;
  padding: 16px;
}

.hamburger {
  margin-left: -8px;
  padding: 8px;
}

.hamburger__icon {
  color: $white;
  font-size: 24px;
}

.header__logo {
  color: $white;
  text-decoration: none;
  margin-left: auto;
}

.header__logo-img {
  height: 32px;
  width: auto;
}
</style>

<script>
export default {
  methods: {
    toggleNav() {
      this.$store.commit('toggleNav');
      this.$root.$emit('NAV_TOGGLE');
    }
  },
}
</script>
