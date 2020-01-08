// 创作于2020-01-07 灵感来源掘金社区
<template>
  <div class="load-container">
    <div v-for="(item, i) in repeat" class="dot"></div>
  </div>
</template>

<style scoped lang="scss">
.load-container {
  $colors: #7ef9ff, #89cff0, #4682b4, #0f52ba, #000080;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-delay: 1s;
  font-size: 16px;
  padding:0.5em;
  .dot {
    position: relative;
    width: 1.5em;
    height: 1.5em;
    margin: 0.5em;
    border-radius: 50%;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: inherit;
      border-radius: inherit;
      animation: wave 2s ease-out infinite;
    }

    @for $i from 1 through 5 {
      &:nth-child(#{$i}) {
        // background: nth($colors, $i);
        background: rgb(random(256), random(256), random(256));

        &::before {
          animation-delay: $i * 0.2s;
        }
      }
    }
  }

  @keyframes wave {
    50%,
    75% {
      transform: scale(2);
    }

    80%,
    100% {
      opacity: 0;
    }
  }
}
</style>

<script>
export default {
  name: "load1",
  data() {
    return {
      repeat: Array(5).fill(1)
    };
  }
};
</script>
