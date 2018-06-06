<template>
  <div class="intro-wrapper">
    <div class="intro-greeting">
      <img class="intro-greeting__image" src="https://loremflickr.com/320/320/pug" alt="">
      <h1 class="intro-greeting__title">Lorem ipsum dolor sit amet consectetur adipisicing elit!</h1>
      <p class="intro-greeting__copy">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis quos earum eveniet libero nisi necessitatibus ad quod, impedit nostrum ea voluptates maiores? Temporibus provident culpa ab, molestiae animi perferendis totam.
      Fugiat ab quidem quasi id ducimus, tempora ea rem beatae, necessitatibus sapiente commodi fugit. Suscipit aliquam mollitia eaque.</p>
    </div>

    <a href="#" class="see-more" v-scroll-to="{el: '#recent-work', easing: [.4, 0, .2, 1], duration: 600}">
      <i class="fas fa-chevron-down icon see-more__icon"></i>
      <span class="visually-hidden">down</span>
    </a>
  </div>
</template>

<style lang="scss">
@import '~assets/scss/_variables.scss';
@import '~assets/scss/_mixins.scss';
@import '~assets/scss/_placeholders.scss';

.intro-wrapper {
  background: tomato;
  height: calc(100vh - #{$header-height});
  overflow: auto;
  position: relative;
}

.intro-greeting {
  padding: 16px;
}

.intro-greeting__image {
  display: block;
  margin: 0 auto 16px;
  max-width: 100%;
}

.intro-greeting__title {
  margin-bottom: 8px;
}

.intro-greeting__copy {

}

.see-more {
  background: violet;
  border-radius: 50%;
  bottom: 16px;
  color: $white;
  height: 48px;
  left: 50%;
  position: fixed;
  text-align: center;
  transform: translateX(-50%);
  width: 48px;
}

.see-more__icon {
  transform: translateY(100%);
}
</style>

<script>
export default {
}
</script>
