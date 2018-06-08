<template>
  <div :class="['ui-mask', {active: $store.state.navActive}]" v-on:click="$store.commit('toggleNav', false)"></div>
</template>

<style lang="scss">
@import '~assets/scss/_variables.scss';

.ui-mask {
  background: #0000009e;
  bottom: 0;
  left: 0;
  opacity: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity .25s linear;
  visibility: hidden;
  z-index: -1;

  &.active {
    opacity: 1;
    visibility: visible;
    z-index: 1;
  }
}
</style>

<script>
export default {
}
</script>
