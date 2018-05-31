<template>
  <div class="tile-wrapper">
    <article class="tile" v-for="item in catalog" :key="item.id">
      <a class="tile__image" :href="item.url" :style="{'background-image': `url(${ item.img });`}">
        <span class="visually-hidden">{{ item.title }}</span>
      </a>
      <h2 class="">{{ item.title }}</h2>
      <p class="">{{ item.desc }}</p>
    </article>
  </div>
</template>

<style>
.tile-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.tile {
  background: lime;
  position: relative;
  flex: 1 1 100%;
}

.tile__image {
  background-size: cover;
  display: block;
  height: 0;
  padding-top: 56.25%;

  &::before {
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>

<script>
export default {
  data: () => ({
    catalog: [
      {
        title: 'Post1 title',
        desc: 'Post1 desc',
        img: './images/snavillus-bw.jpg',
        url: 'https://www.google.com'
      },
      {
        title: 'Post2 title',
        desc: 'Post2 desc',
        img: './images/snavillus-bw.jpg',
        url: 'https://www.google.com'
      }
    ]
  })
}
</script>
