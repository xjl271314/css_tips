<style scoped lang="scss">
.container {
  width: 200px;
  height: 300px;
  background: #d8403e;
  padding: 20px;
  margin: 30px auto;
  color: #fff;
  user-select: none;
}
.radiusBox {
  $width: 10px;
  $radius: $width;
  $border: 2px;
  $color: rgba(255, 255, 255, 1);
  position: relative;
  height: 100%;
  border: $border solid $color;

  .radius_left_top,
  .radius_right_top,
  .radius_left_bottom,
  .radius_right_bottom {
    position: absolute;
    width: $radius;
    height: $radius;
    border: $border solid #d8403e;
    z-index: 1;
    background: transparent;
  }
  .radius_left_top {
    top: -$border;
    left: -$border;
    border-bottom-right-radius: $radius;
    border-bottom: $border solid $color;
    border-right: $border solid $color;
  }
  .radius_right_top {
    top: -$border;
    right: -$border;
    border-radius: 0 0 0 $radius;
    border-bottom: $border solid $color;
    border-left: $border solid $color;
  }
  .radius_left_bottom {
    left: -$border;
    bottom: -$border;
    border-radius: 0 $radius 0 0;
    border-top: $border solid $color;
    border-right: $border solid $color;
  }
  .radius_right_bottom {
    right: -$border;
    bottom: -$border;
    border-radius: $radius 0 0 0;
    border-top: $border solid $color;
    border-left: $border solid $color;
  }
  .inner {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    text-align: center;
    padding: $width;
  }
}
.size-section {
  width: 400px;
  p {
    margin: 10px 0 6px 0;
  }
}
h4 {
  margin: 1em auto;
}
</style>

<template>
  <article>
    <div class="container">
      <div class="radiusBox">
        <div class="radius radius_left_top"></div>
        <div class="radius radius_right_top"></div>
        <div class="radius radius_left_bottom"></div>
        <div class="radius radius_right_bottom"></div>
        <div class="inner">我是内部区域内容</div>
      </div>
    </div>
    <!-- 操作区域 -->
    <section class="size-section">
      <div>
        <p>{{__("圆角半径")}}</p>
        <el-input-number
          @change="update"
          v-model="width"
          :disabled="widthDisable"
          :min="1"
          :max="20"
          size="mini"
        ></el-input-number>
      </div>
      <div>
        <p>{{__("边框宽度")}}</p>
        <el-input-number
          @change="update"
          v-model="border"
          :disabled="borderDisable"
          :min="1"
          :max="10"
          size="mini"
        ></el-input-number>
      </div>
    </section>
    <!-- css区域 -->
    <section style="width:100%;">
      <h4>CSS</h4>
      <div class="language-css extra-class">
        <pre class="language-css"><code ref="code-container"></code></pre>
      </div>
    </section>
  </article>
</template>

<script>
import Prism from "prismjs";

export default {
  name: "concaveBorder1",
  data() {
    return {
      width: 10,
      widthDisable: false,
      border: 2,
      borderDisable: false,
      color: '#fff',
    };
  },
  mounted() {
    this.changeSize();
    this.updateCSS();
  },
  watch: {
    width() {
      this.changeSize();
      this.updateCSS();
    },
    border() {
      this.changeSize();
      this.updateCSS();
    }
  },
  methods: {
    update() {
      this.changeSize();
      this.updateCSS();
    },
    // 改变边框的属性
    changeSize() {
      const circles = document.querySelectorAll(".radius");
      const radiusBox = document.querySelector(".radiusBox");
      radiusBox.style.cssText += `border-width:${this.border}px`;
      // left_top
      const left_top_circle = circles[0];
      left_top_circle.style.cssText += `
          width:${this.width}px;
          height:${this.width}px;
          border-width:${this.border}px;
          top: -${this.border}px;
          left: -${this.border}px;
          border-bottom-right-radius: ${this.width}px;
          border-bottom: ${this.border}px solid ${this.color};
          border-right: ${this.border}px solid ${this.color};
      `
      // right_top
      const right_top_circle = circles[1];
      right_top_circle.style.cssText += `
          width:${this.width}px;
          height:${this.width}px;
          border-width:${this.border}px;
          top: -${this.border}px;
          right: -${this.border}px;
          border-radius: 0 0 0 ${this.width}px;
          border-bottom: ${this.border}px solid ${this.color};
          border-left: ${this.border}px solid ${this.color};
      `
      // left_bottom
      const left_bottom_circle = circles[2];
      left_bottom_circle.style.cssText += `
          width:${this.width}px;
          height:${this.width}px;
          border-width:${this.border}px;
          left: -${this.border}px;
          bottom: -${this.border}px;
          border-radius: 0 ${this.width}px 0 0;
          border-top: ${this.border}px solid ${this.color};
          border-right: ${this.border}px solid ${this.color};
      `
      // right_bottom
      const right_bottom_circle = circles[3];
      right_bottom_circle.style.cssText += `
          width:${this.width}px;
          height:${this.width}px;
          border-width:${this.border}px;
          right: -${this.border}px;
          bottom: -${this.border}px;
          border-radius: ${this.width}px 0 0 0;
          border-top: ${this.border}px solid ${this.color};
          border-left: ${this.border}px solid ${this.color};
      `
    },
    updateCSS() {
      let outputCssStr = `
      .container {
          width: 200px;
          height: 300px;
          background: #d8403e;
          padding: 20px;
          margin: 30px auto;
          color: #fff;
          user-select: none;
      }
      .radiusBox {
          $width: ${this.width}px;
          $radius: $width;
          $border: ${this.border}px;
          $color: rgba(255, 255, 255, 1);
          position: relative;
          height: 100%;
          border: $border solid $color;

          .radius_left_top,
          .radius_right_top,
          .radius_left_bottom,
          .radius_right_bottom {
            position: absolute;
            width: $radius;
            height: $radius;
            border: $border solid #d8403e;
            z-index: 1;
            background: transparent;
          }
          .radius_left_top {
            top: -$border;
            left: -$border;
            border-bottom-right-radius: $radius;
            border-bottom: $border solid $color;
            border-right: $border solid $color;
          }
          .radius_right_top {
            top: -$border;
            right: -$border;
            border-radius: 0 0 0 $radius;
            border-bottom: $border solid $color;
            border-left: $border solid $color;
          }
          .radius_left_bottom {
            left: -$border;
            bottom: -$border;
            border-radius: 0 $radius 0 0;
            border-top: $border solid $color;
            border-right: $border solid $color;
          }
          .radius_right_bottom {
            right: -$border;
            bottom: -$border;
            border-radius: $radius 0 0 0;
            border-top: $border solid $color;
            border-left: $border solid $color;
          }
          .inner {
            box-sizing: border-box;
            position: relative;
            width: 100%;
            text-align: center;
            padding: $width;
          }
        }
      `;

      let cssCode = Prism.highlight(outputCssStr, Prism.languages.css);
      this.$refs["code-container"].innerHTML = cssCode;
    }
  }
};
</script>
