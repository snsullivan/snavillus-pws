<template>
  <div>
    <nuxt/>
  </div>
</template>

<style lang="scss">
@import '~assets/scss/_variables.scss';
@import '~assets/scss/_placeholders.scss';

html {
  color: $color2;
  font-family: 'Roboto', Arial, sans-serif;
  word-spacing: 1px;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  background: $color-fog;
}

button {
  background: transparent;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
}

ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}


.scroll-lock {
  overflow: hidden;
}

.container {
  @extend %gutters;
  @extend %cover-fixed;

  background: $color-fog;
  padding-top: 32px;
}

.container--intro {
  padding: 0;
}

.section-title {
  margin-bottom: 8px;
}

.section-copy {
  margin-bottom: 32px;
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
