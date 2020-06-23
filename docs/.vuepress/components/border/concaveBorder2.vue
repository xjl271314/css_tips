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
@mixin circle($bg, $r) {
  background: $bg;
  background: radial-gradient(circle at top left, transparent $r, $bg 0) top
      left,
    radial-gradient(circle at top right, transparent $r, $bg 0) top right,
    radial-gradient(circle at bottom right, transparent $r, $bg 0) bottom right,
    radial-gradient(circle at bottom left, transparent $r, $bg 0) bottom left;
  background-size: 50% 50%;
  background-repeat: no-repeat;
}

.radiusBox {
  $radius: 10px;
  $border: 2px;
  $color: #fff;
  $background: #d8403e;
  position: relative;
  height: 100%;
  @include circle($color, $radius);

  .radiusBoxInner{
      position: absolute;
      top: $border;
      left: $border;
      right: $border;
      bottom: $border;
      background: green;
      @include circle(green, $radius);
  }
  .inner {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    padding: $radius;
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
      <div ref="radiusBox" class="radiusBox">
        <div ref="radiusBoxInner" class="radiusBoxInner">
          <div class="inner">我是内部区域内容</div>
        </div>
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
      color: "#fff"
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
      const radiusBox = this.$refs["radiusBox"];
      const radiusBoxInner = this.$refs["radiusBoxInner"];

      radiusBox.style.cssText += `
        background: ${this.color};
        background: radial-gradient(circle at top left, transparent ${this.width}px, ${this.color} 0) top
            left,
            radial-gradient(circle at top right, transparent ${this.width}px, ${this.color} 0) top right,
            radial-gradient(circle at bottom right, transparent ${this.width}px, ${this.color} 0) bottom right,
            radial-gradient(circle at bottom left, transparent ${this.width}px, ${this.color} 0) bottom left;
        background-size: 50% 50%;
        background-repeat: no-repeat;
      `;
      radiusBoxInner.style.cssText += `
        position: absolute;
        top: ${this.border}px;
        left: ${this.border}px;
        right: ${this.border}px;
        bottom: ${this.border}px;
        background: green;
        background: radial-gradient(circle at top left, transparent ${this.width}px, green 0) top
            left,
            radial-gradient(circle at top right, transparent ${this.width}px, green 0) top right,
            radial-gradient(circle at bottom right, transparent ${this.width}px, green 0) bottom right,
            radial-gradient(circle at bottom left, transparent ${this.width}px, green 0) bottom left;
        background-size: 50% 50%;
        background-repeat: no-repeat;
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
        @mixin circle($bg, $r) {
            background: $bg;
            background: radial-gradient(circle at top left, transparent $r, $bg 0) top
                left,
                radial-gradient(circle at top right, transparent $r, $bg 0) top right,
                radial-gradient(circle at bottom right, transparent $r, $bg 0) bottom right,
                radial-gradient(circle at bottom left, transparent $r, $bg 0) bottom left;
            background-size: 50% 50%;
            background-repeat: no-repeat;
        }

        .radiusBox {
            $radius: ${this.width}px;
            $border: ${this.border}px;
            $color: #fff;
            $background: #d8403e;
            position: relative;
            height: 100%;
            @include circle($color, $radius);

            .radiusBoxInner{
                position: absolute;
                top: $border;
                left: $border;
                right: $border;
                bottom: $border;
                background: green;
                @include circle(green, $radius);
            }
            .inner {
                box-sizing: border-box;
                position: relative;
                width: 100%;
                height: 100%;
                text-align: center;
                padding: $radius;
            }
        }`;
        let cssCode = Prism.highlight(outputCssStr, Prism.languages.css);
        this.$refs["code-container"].innerHTML = cssCode;
    }
  }
};
</script>
