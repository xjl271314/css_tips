<template>
  <div class="load-container">
      <div class="boxLoading"></div>
      <div class="boxLoading"></div>
      <div class="boxLoading"></div>
      <div class="boxLoading"></div>
      <div class="boxLoading"></div>
  </div>
</template>

<style scoped lang="scss">
.load-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  .boxLoading {
    background-color: #00adb5;
    height: 60px;
    width: 6px;
    margin-right: 4px;
    display: inline-block;
    animation: stretchdelay 1.2s infinite ease-in-out;
  }
  @for $i from 2 through 5 {
    .boxLoading:nth-child(#{$i}) {
      animation-delay: 0.1 * $i - 1.3s;
    }
  }
}

@keyframes stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.5);
  }
  20% {
    transform: scaleY(1);
  }
}
</style>

<script>
export default {
  name: "load4",
  data() {
    return {};
  }
};
</script>
