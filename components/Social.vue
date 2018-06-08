<template>
  <div class="social-platforms">
    <a v-for="platform in platforms" :key="platform.id" :href="platform.url" class="social-platforms__link">
      <i :class="[platform.icon, 'social-platforms__icon']"></i>
      <span class="visually-hidden">{{ platform.hint }}</span>
    </a>
  </div>
</template>

<style lang="scss">
@import '~assets/scss/_variables.scss';
@import '~assets/scss/_mixins.scss';

.social-platforms {
  .header & {
    margin-left: auto;
  }

  .footer & {
    flex-basis: 100%;
    margin-bottom: 8px;
    text-align: center;

    @include medium {
      flex-basis: initial;
      margin-bottom: 0;
      margin-right: auto;
      text-align: initial;
    }
  }
}

.social-platforms__link {
  padding: 8px;
}

.social-platforms__icon {
  color: $white;
  font-size: 1.25rem;
  transition: font-size .25s linear;
  will-change: font-size;

  @include medium {
    font-size: 1rem;
  }
}
</style>

<script>
export default {
  data() {
    return {
      platforms: [
        {
          type: 'email',
          icon: 'fas fa-envelope-open',
          url: 'mailto:sean@snavillus.com',
          hint: 'email me!'
        },
        {
          type: 'twitter',
          icon: 'fab fa-twitter',
          url: 'https://twitter.com/snavillus',
          hint: 'tweet me!'
        },
        {
          type: 'linkedin',
          icon: 'fab fa-linkedin-in',
          url: 'https://www.linkedin.com/in/snavillus',
          hint: 'linkedin me!'
        }
      ]
    }
  },
}
</script>
