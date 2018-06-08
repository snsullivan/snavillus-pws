<template>
  <nav :class="['sidenav', {active: $store.state.navActive}]" :aria-hidden="$store.state.navActive ? 'false' : 'true'" role="navigation">
    <button class="sidenav__close-btn" :tabindex="$store.state.navActive ? 1 : -1" v-on:click="$store.commit('toggleNav', false)" ref="closeButton">
      <i class="fas fa-times sidenav__close-btn-icon"></i>
    </button>
    <ul class="sidenav__menu">
      <li v-for="link in links" :key="link.id" class="sidenav__menu-item" >
        <a :href="link.url" :tabindex="$store.state.navActive ? 1 : -1" v-on:click.prevent="$store.commit('toggleNav', false)" v-scroll-to="{el: link.url, easing: [.4, 0, .2, 1], duration: 600}" class="sidenav__menu-link">{{ link.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
@import '~assets/scss/_variables.scss';
@import '~assets/scss/_mixins.scss';

.sidenav {
  background: $color-fog;
  bottom: 0;
  padding-top: 56px; // close button size + padding
  position: fixed;
  top: 0;
  transform: translateX(-100%);
  transition: transform .25s $cubic-ease;
  width: 75vw;
  will-change: transform;
  z-index: 2;

  &.active {
    transform: translateX(0);
  }
}

.sidenav__close-btn {
  box-sizing: content-box;
  height: 24px;
  padding: 0;
  padding: 8px;
  position: absolute;
  right: 8px;
  top: 8px;
  width: 24px;
}

.sidenav__close-btn-icon {
  font-size: 24px;
}

// MENU
.sidenav__menu {
  padding: 0;
  margin: 0;
}

.sidenav__menu-link {
  color: inherit;
  display: block;
  padding: 16px;
  text-decoration: none;

  &:hover {
    background: rgba($black, .04);
  }
}
</style>

<script>
export default {
  components: {
  },
  data() {
    return {
      links: [
        {
          name: 'Lorem',
          url: '#recent-work'
        },
        {
          name: 'Ipsum',
          url: '#skills'
        }
      ]
    }
  },
  methods: {
    setFocus() {
      this.$refs.closeButton.focus();
    }
  },
  mounted() {
    this.$root.$on('NAV_TOGGLE', this.setFocus);
  }
}
</script>
