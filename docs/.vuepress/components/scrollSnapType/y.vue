<style scoped lang="scss">
	.swiper{
		width: 300px;
		height: 150px;
		overflow:auto;
		scroll-snap-type: y mandatory;
		user-select: none;
	}
	.swiper-item{
		float: left;
		width: 300px;
		height: 150px;
		line-height: 150px;
		scroll-snap-align: center;
		font-size: 32px;
		color: #FFF;
		text-align: center;
		@for $i from 1 through 5{
			&:nth-child(#{$i}){
				background: rgba(random(255),random(255),random(255),1);
			}
		}
	}
</style>

<template>
  <div class="swiper">
	  <div class="swiper-item">1</div>
	  <div class="swiper-item">2</div>
	  <div class="swiper-item">3</div>
	  <div class="swiper-item">4</div>
	  <div class="swiper-item">5</div>
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
