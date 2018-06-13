<template>
  <div class="intro-wrapper">
    <div class="intro-greeting">
      <img class="intro-greeting__image" src="https://loremflickr.com/320/320/pug" alt="">
      <!-- <img class="intro-greeting__image" src="~/static/images/snavillus_logo-dark.svg" alt="snavillus logo"> -->
      <h1 class="intro-greeting__title">Lorem ipsum dolor sit. <span class="intro-greeting__title-trailer">Officiis quos earum even.</span></h1>
      <p class="intro-greeting__copy">I enjoy turning ambitious ideas into responsive web applications.</p>
      <p class="intro-greeting__copy">I currently live and work in Brooklyn. Handcrafting artisanal, local code in small batches.</p>
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

@keyframes levitate {
  0% {
    transform: translateY(95%);
  }
  100% {
    transform: translateY(110%);
  }
}

.intro-wrapper {
  background: rgba($color-warm-grey, .5);
  height: calc(100vh - #{$header-height});
  overflow: auto;
  position: relative;
}

.intro-greeting {
  margin: 0 auto;
  padding: 16px;

  @include medium {
    max-width: 75vw;
  }

  @include large {
    max-width: 50vw;
  }
}

.intro-greeting__image {
  display: block;
  margin: 0 auto 16px;
  width: 100%;
}

.intro-greeting__title {
  font-size: 32px;
  margin-bottom: 8px;
}

.intro-greeting__title-trailer {
  display: block;
  font-size: 16px;
  padding-top: 4px;
}

.intro-greeting__copy {
  margin-bottom: 4px;
}

.see-more {
  background: $color5;
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
  animation: levitate .75s ease infinite alternate;
  transform: translateY(100%);
}
</style>

<script>
export default {
}
</script>
