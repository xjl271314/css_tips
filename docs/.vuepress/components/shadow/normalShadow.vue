<style scoped lang="scss">
.shadow-container {
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  .panel {
    box-sizing: border-box;
    width: 49%;
    height: 180px;
    p {
      text-align: center;
    }
  }
  .box {
    position: relative;
    width: 150px;
    height: 80px;
    background-color: #00adb5;
    margin: 0 auto 0;
  }
  .shadow1 {
    box-shadow: 0 0 12px rgba(0, 173, 181, 0.8);
  }
  .shadow2 {
    box-shadow: 0px 6px 12px -4px rgba(0, 173, 181, 0.8);
  }
  .shadow3 {
    box-shadow: 6px 6px 12px -5px rgba(0, 173, 181, 0.8);
  }
  .shadow4 {
    box-shadow: 6px 0 12px -5px rgba(0, 173, 181, 0.8),
      -6px 0 12px -5px rgba(0, 173, 181, 0.8);
  }
  .shadow5 {
    box-shadow: 0 3px 12px rgba(0, 173, 181, 0.8);
  }
  .shadow6 {
    box-shadow: 0 0 0 1px rgba(0, 173, 181, 0.8);
  }
  .shadow7 {
    background: hsl(199, 98%, 48%);
    box-shadow: 0 0 5px 2px hsl(199, 98%, 40%);
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 5%;
      right: 5%;
      bottom: 15%;
      border-radius: 10px;
      background: hsl(199, 98%, 20%);
      transform: translate(0, -20%) rotate(-4deg);
      transform-origin: center center;
      box-shadow: 0 0 20px 15px hsl(199, 98%, 20%);
      z-index: -1;
    }

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 5%;
      right: 5%;
      bottom: 15%;
      border-radius: 10px;
      background: hsl(199, 98%, 20%);
      transform: translate(0, -20%) rotate(4deg);
      transform-origin: center center;
      box-shadow: 0 0 20px 15px hsl(199, 98%, 20%);
      z-index: -1;
    }
  }
}
</style>

<template>
  <div class="shadow-container">
    <div class="panel">
      <p>{{ __("无偏移投影") }}</p>
      <div class="box shadow1"></div>
    </div>

    <div class="panel">
      <p>{{ __("下侧投影") }}</p>
      <div class="box shadow2"></div>
    </div>

    <div class="panel">
      <p>{{ __("右侧投影") }}</p>
      <div class="box shadow3"></div>
    </div>

    <div class="panel">
      <p>{{ __("双侧投影") }}</p>
      <div class="box shadow4"></div>
    </div>
    <div class="panel">
      <p>{{ __("菜单投影") }}</p>
      <div class="box shadow5"></div>
    </div>

    <div class="panel">
      <p>{{ __("投影边框") }}</p>
      <div class="box shadow6" style="background-color:#fff;"></div>
    </div>

    <div class="panel">
      <p>{{ __("立体投影") }}</p>
      <!-- <span>
        关键点
        立体投影的关键点在于利于伪元素生成一个大小与父元素相近的元素，然后对其进行 rotate 以及定位到合适位置，再赋于阴影操作。
        颜色的运用也很重要，阴影的颜色通常比本身颜色要更深，这里使用 hsl 表示颜色更容易操作，l 控制颜色的明暗度。
      </span> -->
      <div class="box shadow7"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  }
};
</script>
