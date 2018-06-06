<template>
  <div class="donut">
    <svg class="donut-percent" xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 192 192">
      <circle class="donut-percent__base" cx="91" cy="91" r="88"/>
      <circle class="donut-percent__amount" cx="91" cy="91" r="88" stroke-dashoffset="290.44"/>
    </svg>
  </div>
</template>

<style lang="scss">
@import '~assets/scss/_variables.scss';
@import '~assets/scss/_mixins.scss';

.donut {
  width: 120px;
}

.donut-percent {
  transform: rotate(-90deg);
}

.donut-percent__base {
  fill: none;
  stroke-width: 2;
  stroke: rgba($black, .12);
}

.donut-percent__amount {
  fill: none;
  opacity: 1;
  stroke-dasharray: 548;
  // stroke-linecap: round;
  stroke-width: 4;
  stroke: tomato;
  transition: stroke-dashoffset 1s;
}
</style>

<script>
export default {

}
</script>
