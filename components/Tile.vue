<template>
  <div class="tile-wrapper">
    <article :class="['tile', {'tile--badges': item.badges}]" v-for="item in catalog" :key="item.id">
      <a class="tile__link" :href="item.url">
        <span class="tile__image" :style="{'background-image': `url(${ item.img });`}"></span>
        <span class="visually-hidden">{{ item.title }}</span>
      </a>
      <h3 class="tile__title">{{ item.title }}</h3>
      <p class="tile__description">{{ item.desc }}</p>
      <span v-if="item.badges" class="tile__badges">
        <i v-for="badge in item.badges" :key="badge.id" :class="[badge.icon, 'tile__badge']"></i>
      </span>
    </article>
  </div>
</template>

<style lang="scss">
@import '~assets/scss/_variables.scss';
@import '~assets/scss/_mixins.scss';

$gutter-width: 20px;
$color-shadow-card: rgba(0, 0, 0, .12);

.tile-wrapper {
  display: flex;
  flex-wrap: wrap;

  @include medium {
    margin: 0 -#{$gutter-width/2};
  }
}

.tile {
  background: $white;
  box-shadow: 0 2px 3px 0 $color-shadow-card;
  flex: 1 1 100%;
  margin-bottom: $gutter-width;
  padding: 12px 12px 16px;
  position: relative;
  transition: box-shadow .15s linear;
  will-change: box-shadow;

  &:hover {
    box-shadow: 0 2px 9px 0 $color-shadow-card;

    .tile__image {
      filter: grayscale(100%);
    }
  }

  @include medium {
    flex-basis: calc(50% - #{$gutter-width});
    margin: 0 10px $gutter-width;
  }

  @include large {
    flex: 0 1 calc(33.333% - #{$gutter-width});
  }
}

.tile__link {
  &::before {
    bottom: 0;
    content: '';
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
  }
}

.tile__image {
  background-size: cover;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  display: block;
  filter: grayscale(0);
  height: 0;
  margin-bottom: 16px;
  padding-top: 56.25%;
  transition: filter .15s linear;
  will-change: filter;
}

.tile__title {
  font-weight: 400;
  margin-bottom: 8px;
}

.tile__description {
 .tile--badges & {
   padding-bottom: 24px + 16px; // size of tile__badge plus 16px buffer
 }
}

.tile__badges {
  bottom: 16px;
  position: absolute;
  right: 12px;
}

.tile__badge {
  color: $color-warm-grey;
  font-size: 24px;

  &:not(:first-of-type) {
    padding-left: 4px;
  }
}
</style>

<script>
export default {
  data: () => ({
    catalog: [
      {
        title: 'Huge Inc',
        desc: 'The first project I cut my teeth on at Huge was the company website.',
        img: './images/huge_6.2018.jpg',
        url: 'https://www.hugeinc.com',
        badges: [
          {icon: 'fab fa-html5'},
          {icon: 'fab fa-css3-alt'},
          {icon: 'fab fa-js'}
        ]
      },
      {
        title: 'Think with Google',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis ducimus, quasi earum accusantium et eligendi deleniti, dolorum animi suscipit non? Error voluptates ipsum nobis. Eaque, corporis. Minus, odio perferendis.',
        img: './images/twg_6.2018.jpg',
        url: 'https://www.thinkwithgoogle.com',
        badges: [
          {icon: 'fab fa-html5'},
          {icon: 'fab fa-css3-alt'},
          {icon: 'fab fa-vuejs'},
          {icon: 'fab fa-angular'}
        ]
      },
      {
        title: 'Think with Google Newsletter',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis ducimus, quasi earum accusantium et eligendi deleniti.',
        img: './images/newsletter_6.2018.jpg',
        url: 'https://getsubscriptions.withgoogle.com/newsletter/thinkwithgoogle/signup',
        badges: [
          {icon: 'fab fa-html5'},
          {icon: 'fab fa-css3-alt'},
          {icon: 'fab fa-js'}
        ]
      },
      {
        title: 'Google Material',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis ducimus, quasi earum accusantium et eligendi deleniti, dolorum animi suscipit non?',
        img: './images/material_6.2018.jpg',
        url: 'https://material.io',
        badges: [
          {icon: 'fab fa-html5'},
          {icon: 'fab fa-css3-alt'},
          {icon: 'fab fa-js'},
          {icon: 'fab fa-google-drive'}
        ]
      }
    ]
  })
}
</script>
