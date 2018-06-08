<template>
  <div class="subway-wrapper">
    <div class="subway">
      <div class="subway__rail"></div>
      <div class="subway__stops">
        <a :href="job.url" v-for="job in jobs" :key="job.id" class="subway__stop">
          <p class="subway__stop-name">{{ job.name }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '~assets/scss/_variables.scss';
@import '~assets/scss/_mixins.scss';

@keyframes pulse {
  0% {
    background: white;
  }
  100% {
    background: orange;
  }
}

$track-width: 16px;
$track-outbound-width: $track-width * 2;

.subway-wrapper {
  padding: 104px 0 80px;
}

.subway {
  margin: 0 auto;
  position: relative;
  width: 75vw;
}

.subway__rail {
  background: green;
  height: $track-width;
  position: absolute;
  transform: translateY(calc(50% - 2px)); // subtract border radius
  width: 100%;
  z-index: -1;

  &::before,
  &::after {
    background: inherit;
    content: '';
    display: block;
    height: $track-width;
    position: absolute;
    transform: rotate(-45deg);
    width: $track-outbound-width;
  }

  &::before {
    left: -$track-outbound-width;
    transform-origin: top right;
  }
  &::after {
    right: -$track-outbound-width;
    transform-origin: bottom left;
  }
}

.subway__stops {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 75%;
}

.subway__stop {
  background: white;
  border-radius: 50%;
  border: 3px solid black;
  box-sizing: content-box;
  color: black;
  flex-shrink: 0;
  height: 20px;
  width: 20px;

  &:last-of-type {
    animation: pulse .75s ease infinite alternate;
  }
}

.subway__stop-name {
  position: absolute;
  transform-origin: left;
  transform: rotate(-45deg) translateY(calc(-100% + 25px)) translateX(30px);
  white-space: nowrap;
}
</style>

<script>
export default {
  data() {
    return {
      jobs: [
        {
          name: 'Harrison&Star',
          url: '',
          year: ''
        },
        {
          name: 'mcgarrybowen',
          url: '',
          year: ''
        },
        {
          name: 'Huge',
          url: '',
          year: ''
        },
        {
          name: '',
          url: '',
          year: ''
        }
      ]
    }
  },
}
</script>
