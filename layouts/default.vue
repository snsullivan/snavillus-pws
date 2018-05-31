<template>
  <div>
    <nuxt/>
  </div>
</template>

<style lang="scss">
@import '~assets/scss/_variables.scss';

html {
  font-family: 'Roboto', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  background: $off-white;
}

.container {
  padding: 0 16px;
  margin-bottom: 32px;
}

.container--intro {
  padding: 0;
}

/* Helpers */
.visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
</style>
