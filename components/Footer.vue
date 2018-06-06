<template>
  <footer class="footer">
    <Social/>
    <p>&copy; Sean Sullivan | {{ year }}.</p>
  </footer>
</template>

<style lang="scss">
@import '~assets/scss/_variables.scss';
@import '~assets/scss/_mixins.scss';
@import '~assets/scss/_placeholders.scss';

.footer {
  @extend %cover-fixed;

  align-items: center;
  background: #202124;
  color: $white;
  display: flex;
  height: $header-height;
  justify-content: flex-end;
  padding: 16px;
}
</style>

<script>
import Social from '~/components/Social.vue'

export default {
  components: {
    Social
  },
  data() {
    return {
      year: '2018'
    }
  },
  mounted() {
    const thisYear = new Date().getFullYear();

    this.year = thisYear;
  }
}
</script>
