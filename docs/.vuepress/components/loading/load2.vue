<template>
  <div class="load-container">
      <svg
        version="1.1"
        x="0px"
        y="0px"
        width="150px"
        height="150px"
        viewBox="0 0 213.235 241.176"
        enable-background="new 0 0 213.235 241.176"
        xml:space="preserve"
      >
        <path d="M108.581,64.968V14.124l44.007,25.422L108.581,64.968" />
        <path
          fill-opacity="0.9"
          d="M153.591,92.101V41.258L109.582,66.68L153.591,92.101"
        />
        <path d="M155.586,92.062V41.221l44.009,25.42L155.586,92.062" />
        <path
          fill-opacity="0.7"
          d="M200.299,119.14V68.297l-44.004,25.421L200.299,119.14"
        />
        <path
          fill-opacity="0.85"
          d="M155.586,146.255V95.412l44.009,25.422L155.586,146.255"
        />
        <path
          fill-opacity="0.7"
          d="M200.299,173.35v-50.844l-44.004,25.422L200.299,173.35"
        />
        <path
          fill-opacity="0.6"
          d="M155.586,200.482v-50.84l44.009,25.417L155.586,200.482"
        />
        <path
          fill-opacity="0.5"
          d="M153.591,200.521v-50.84l-44.009,25.418L153.591,200.521"
        />
        <path
          fill-opacity="0.6"
          d="M108.581,227.696v-50.844l44.007,25.421L108.581,227.696"
        />
        <path
          fill-opacity="0.5"
          d="M106.62,227.696v-50.844l-44.005,25.421L106.62,227.696"
        />
        <path
          fill-opacity="0.7"
          d="M61.562,200.553V149.71l44.007,25.423L61.562,200.553"
        />
        <path
          fill-opacity="0.7"
          d="M59.709,200.56v-50.843l-44.008,25.422L59.709,200.56"
        />
        <path
          fill-opacity="0.7"
          d="M14.699,173.467v-50.843l44.01,25.42L14.699,173.467"
        />
        <path
          fill-opacity="0.5"
          d="M59.709,146.235V95.392l-44.008,25.42L59.709,146.235"
        />
        <path
          fill-opacity="0.7"
          d="M14.699,119.141V68.297l44.01,25.421L14.699,119.141"
        />
        <path
          fill-opacity="0.6"
          d="M59.709,92.101V41.258L15.701,66.68L59.709,92.101"
        />
        <path
          fill-opacity="0.85"
          d="M61.562,92.092V41.249l44.007,25.419L61.562,92.092"
        />
        <path
          fill-opacity="0.9"
          d="M106.62,64.968V14.124L62.614,39.546L106.62,64.968"
        />
      </svg>
  </div>
</template>

<style scoped lang="scss">
$pathNumber: 18;
// The color that will be at the beginning and the end of the loop.
$firstColor: #0057B8;
// The list of all the used colors. You can add or remove colors, the animation stays fluid. The $first-color must remain at the end of the list though.
$listColors: #F11E4A, #F8A527, #266D7F, #82A, $firstColor;
// animation delay time
$delayCoeff: 0.1s; 

.load-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
}

svg {
  fill: $firstColor;
  @for $i from 1 through $pathNumber {
      path:nth-child(#{$i}) {
        animation: pweek $delayCoeff*$pathNumber linear infinite;
        animation-delay: $i*$delayCoeff;
        &:hover {
          animation-play-state: paused;
        }
      }
   }
}

@keyframes pweek {
  0% {
    fill: $firstColor;
  }
  @for $i from 1 through length($listColors) {
    #{$i*(100/length($listColors))}% {
      fill: nth($listColors, $i);
    }
  }
}
</style>


<script>
export default {
  name: "load2",
  data() {
    return {};
  }
};
</script>
