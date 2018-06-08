<template>
  <header class="header">
    <button class="hamburger" type="button" v-on:click="toggleNav()">
      <i class="fas fa-bars hamburger__icon"></i>
    </button>

    <Social/>
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

}

.hamburger__icon {
  color: $white;
  font-size: 24px;
}
</style>

<script>
import Social from '~/components/Social.vue'

export default {
  components: {
    Social
  },
  methods: {
    toggleNav() {
      this.$store.commit('toggleNav');
      this.$root.$emit('NAV_TOGGLE');
    }
  },
}
</script>
