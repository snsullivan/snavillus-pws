<template>
  <div>
    <Header/>
    <Sidenav/>

    <main class="foo" role="main">
      <section class="container container--intro">
        <Intro/>
      </section>
      <section id="recent-work" class="container">
        <h2 class="section-title">Mas here.</h2>
        <p class="section-copy">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloremque officiis veritatis accusamus, perspiciatis dolorem sunt fugit, nesciunt nulla dignissimos perferendis ad distinctio debitis repellat inventore sit vitae nemo. Aliquam.</p>
        <Tile/>
      </section>
      <section id="skills" class="container">
        <h2 class="section-title">Mas here.</h2>
        <p class="section-copy">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloremque officiis veritatis accusamus, perspiciatis dolorem sunt fugit, nesciunt nulla dignissimos perferendis ad distinctio debitis repellat inventore sit vitae nemo. Aliquam.</p>
        <CareerPath/>
      </section>
    </main>

    <Footer/>
    <UiMask/>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Sidenav from '~/components/Sidenav.vue'
import Intro from '~/components/Intro.vue'
import Tile from '~/components/Tile.vue'
import Donut from '~/components/Donut.vue'
import CareerPath from '~/components/CareerPath.vue'
import Footer from '~/components/Footer.vue'
import UiMask from '~/components/UiMask.vue'

export default {
  components: {
    Header,
    Sidenav,
    Intro,
    Tile,
    Donut,
    CareerPath,
    Footer,
    UiMask
  },
  head () {
    return {
      bodyAttrs: {
        class: this.$store.state.navActive ? 'scroll-lock' : ''
      }
    }
  },
  mounted() {
    const bannerText = `
                                        $$\\ $$\\ $$\\
                                        \\__|$$ |$$ |
 $$$$$$$\\ $$$$$$$\\   $$$$$$\\ $$\\    $$\\ $$\\ $$ |$$ |$$\\   $$\\  $$$$$$$\\
$$  _____|$$  __$$\\  \\____$$\\\\$$\\  $$  |$$ |$$ |$$ |$$ |  $$ |$$  _____|
\\$$$$$$\\  $$ |  $$ | $$$$$$$ |\\$$\\$$  / $$ |$$ |$$ |$$ |  $$ |\\$$$$$$\\
 \\____$$\\ $$ |  $$ |$$  __$$ | \\$$$  /  $$ |$$ |$$ |$$ |  $$ | \\____$$\\
$$$$$$$  |$$ |  $$ |\\$$$$$$$ |  \\$  /   $$ |$$ |$$ |\\$$$$$$  |$$$$$$$  |
\\_______/ \\__|  \\__| \\_______|   \\_/    \\__|\\__|\\__| \\______/ \\_______/
`;
    console.log(`%c ${ bannerText } \n sean sullivan | web engineer | https://www.linkedin.com/in/snavillus \n\n`, `color: #758289;`);
  }
}
</script>

<style>
  /* Index page styles here. */
</style>
