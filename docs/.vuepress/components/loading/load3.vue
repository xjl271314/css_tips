<template>
  <div class="load-container">
    <div v-for="(item, i) in repeat" class="bar"></div>
    <div class="ball"></div>
  </div>
</template>

<style scoped lang="scss">
$gap: 2px;
$width: 10px;
$size: 5;
$colors: red, orange, yellow, green, purple;
$ballColor: gray;

.load-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  .bar {
    width: $width;
    height: $width * $size;
    margin-right: $gap;
    transform-origin: center bottom;
  }
  .ball {
    position: absolute;
    width: $width;
    height: $width;
    bottom: 50%;
    left: 50%;
    margin-left: -$width * ($size/2 + 0.5);
    border-radius: 50%;
    background: $ballColor;
    animation: ballUp 4s infinite;
  }
  @for $i from 1 through $size {
    .bar:nth-child(#{$i}) {
      background: nth($colors, $i);
      box-shadow: 0px 0px 1px darken(nth($colors, $i), 10%);
      transform: scale(1, $i * 0.2);
      animation: barUp#{$i} 4s infinite;
    }
  }
  @keyframes ballUp {
    0%,
    100% {
      transform: translate(0, 14px);
    }
    5% {
      transform: translate(7px, -9px);
    }
    10% {
      transform: translate(15px, -5px);
    }
    17% {
      transform: translate(22px, -19px);
    }
    20% {
      transform: translate(30px, -15px);
    }
    27% {
      transform: translate(37px, -29px);
    }
    30% {
      transform: translate(42px, -25px);
    }
    37% {
      transform: translate(45px, -39px);
    }
    40% {
      transform: translate(50px, -35px);
    }
    50% {
      transform: translate(50px, 14px);
    }
    57% {
      transform: translate(45px, -9px);
    }
    60% {
      transform: translate(42px, 0px);
    }
    67% {
      transform: translate(37px, -14px);
    }
    70% {
      transform: translate(30px, -10px);
    }
    77% {
      transform: translate(22px, -24px);
    }
    80% {
      transform: translate(15px, -20px);
    }
    87% {
      transform: translate(7px, -34px);
    }
    90% {
      transform: translate(0, -30px);
    }
  }

  @for $i from 1 through $size {
    @keyframes barUp#{$i} {
      0%,
      40%,
      100% {
        transform: scale(1, 0.2 * $i);
      }
      @if $i != 3 {
        50%,
        90% {
          transform: scale(1, 1.2 - 0.2 * $i);
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: "load3",
  data() {
    return {
      repeat: Array(5).fill(1)
    };
  }
};
</script>
