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

.social-platforms {
  .header & {
    margin-left: auto;
  }
  .footer & {
    margin-right: auto;
  }
}

.social-platforms__link {
  padding: 8px;
}

.social-platforms__icon {
  color: $white;
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
