<template>
  <div class="intro-wrapper">
    <a href="#" class="see-more" v-scroll-to="{el: '#intro-ref', easing: [.4, 0, .2, 1], duration: 600}">
      <i class="material-icons see-more__icon">arrow_downward</i>
      <span class="visually-hidden">down</span>
    </a>
  </div>
</template>

<style lang="scss">
@import '~assets/scss/_variables.scss';
@import '~assets/scss/_mixins.scss';

.intro-wrapper {
  background: tomato;
  min-height: 100vh;
}

.see-more {
  background: violet;
  border-radius: 50%;
  bottom: 16px;
  color: $white;
  height: 48px;
  left: 50%;
  position: absolute;
  text-align: center;
  transform: translateX(-50%);
  width: 48px;
}

.see-more__icon {
  transform: translateY(50%);
}
</style>

<script>
export default {
  methods: {
  },
  mounted() {
    console.log('mounted!');
  }
}
</script>
