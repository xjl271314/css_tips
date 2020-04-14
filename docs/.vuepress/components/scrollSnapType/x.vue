<style scoped lang="scss">
.container {
  width: 300px;
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  white-space: nowrap;
}
.swiper {
  width: auto;
  height: 150px;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  user-select: none;
}
.swiper-item {
  display: inline-block;
  margin: 0;
  width: 300px;
  height: 150px;
  line-height: 150px;
  scroll-snap-align: center;
  font-size: 32px;
  color: #fff;
  text-align: center;

  @for $i from 1 through 5 {
    &:nth-child(#{$i}) {
      background: rgba(random(255), random(255), random(255), 1);
    }
  }
}
</style>

<template>
  <div class="container">
    <div class="swiper">
      <div class="swiper-item">1</div>
      <div class="swiper-item">2</div>
      <div class="swiper-item">3</div>
      <div class="swiper-item">4</div>
      <div class="swiper-item">5</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "scrollSnapType-y",
  data() {
    return {};
  }
};
</script>
