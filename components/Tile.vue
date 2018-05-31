<template>
  <div id="intro-ref" class="tile-wrapper">
    <article class="tile" v-for="item in catalog" :key="item.id">
      <a class="tile__link" :href="item.url">
        <span class="tile__image" :style="{'background-image': `url(${ item.img });`}"></span>
        <span class="visually-hidden">{{ item.title }}</span>
      </a>
      <h2 class="tile__title">{{ item.title }}</h2>
      <p class="tile__description">{{ item.desc }}</p>
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
  transition: box-shadow .25s linear;
  will-change: box-shadow;

  &:hover {
    box-shadow: 0 2px 9px 0 $color-shadow-card;
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
  }
}

.tile__image {
  background-size: cover;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  display: block;
  height: 0;
  margin-bottom: 16px;
  padding-top: 56.25%;
}

.tile__title {
  font-weight: 400;
  margin-bottom: 8px;
}

.tile__description {

}
</style>

<script>
export default {
  data: () => ({
    catalog: [
      {
        title: 'Post1 title',
        desc: 'Post1 desc',
        // img: './images/snavillus-bw.jpg',
        img: 'https://loremflickr.com/320/240/dog',
        url: 'https://www.google.com'
      },
      {
        title: 'Post2 title',
        desc: 'Post2 desc',
        img: 'https://loremflickr.com/320/240/dog',
        url: 'https://www.google.com'
      },
      {
        title: 'Post3 title',
        desc: 'Post3 desc',
        img: 'https://loremflickr.com/320/240/dog',
        url: 'https://www.google.com'
      },
      {
        title: 'Post4 title',
        desc: 'Post4 desc',
        img: 'https://loremflickr.com/320/240/dog',
        url: 'https://www.google.com'
      }
    ]
  })
}
</script>
