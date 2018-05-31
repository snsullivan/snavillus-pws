<template>
  <div>
    <Header/>

    <main class="foo">
      <section class="container container--intro">
        <Intro/>
      </section>
      <section class="container">
        <Tile/>
      </section>
    </main>

    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Intro from '~/components/Intro.vue'
import Tile from '~/components/Tile.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Intro,
    Tile,
    Footer
  }
}
</script>

<style>
  /* Index page styles here. */
</style>
