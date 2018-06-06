<template>
  <nav :class="['sidenav', {active: $store.state.navActive}]" role="navigation">
    <button class="sidenav__close-btn" v-on:click="$store.commit('toggleNav', false)">
      <i class="fas fa-times sidenav__close-btn-icon"></i>
    </button>
    <ul class="sidenav__menu">
      <li v-for="link in links" :key="link.id" class="sidenav__menu-item">
        <a :href="link.url" v-on:click.prevent="$store.commit('toggleNav', false)" v-scroll-to="{el: link.url, easing: [.4, 0, .2, 1], duration: 600}" class="sidenav__menu-link">{{ link.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
@import '~assets/scss/_variables.scss';
@import '~assets/scss/_mixins.scss';

.sidenav {
  background: #ffa500;
  bottom: 0;
  padding-top: 40px;
  position: fixed;
  top: 0;
  transform: translateX(-100%);
  transition: transform .15s $cubic-ease;
  width: 75vw;
  will-change: transform;
  z-index: 2;

  &.active {
    transform: translateX(0);
  }
}

.sidenav__close-btn {
  height: 24px;
  padding: 0;
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
  background: #f5f5dc;
  color: inherit;
  display: block;
  padding: 16px;
  text-decoration: none;
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
  }
}
</script>
