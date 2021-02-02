<style scoped lang="scss">
.container {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.pesudo {
  position: relative;
  width: 200px;
  height: 100px;
  margin: auto;
  border-radius: 10px;
  &::after {
    content: '';
    position: absolute;
    width: 180px;
    height: 80px;
    background: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }

  &::before {
    content: "";
    position: absolute;
    width: 200px;
    height: 100px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: inherit;
    background: linear-gradient(45deg, gold, deeppink);
    z-index: 2;
  }
}

.size-section {
  margin-top: 30px;
  > div {
    margin-bottom: 8px;
    p {
      margin-bottom: 8px;
    }
  }
}
@keyframes move {
  0% {
    transform: translate(50px, -50%);
  }

  50%,
  100% {
    transform: translate(-50%, -50%);
  }
}

.w-50 {
  width: 48%;
  float: left;
  &:nth-of-type(even) {
    float: right;
  }
}
</style>

<template>
  <article>
    <div class="container">
      <div class="pesudo" v-bind:data-bg="background" ></div>
      <section class="size-section">
        <div class="w-50">
          <p>{{ __("外层宽度") }}</p>
          <el-input-number
            v-model="outWidth"
            :disabled="outWidthDisable"
            :min="200"
            size="mini"
          ></el-input-number>
        </div>
        <div class="w-50">
          <p>{{ __("外层高度") }}</p>
          <el-input-number
            v-model="outHeight"
            :disabled="outHeightDisable"
            :min="100"
            size="mini"
          ></el-input-number>
        </div>
        <div class="w-50">
          <p>{{ __("圆角半径") }}</p>
          <el-input-number
            v-model="radius"
            :disabled="radiusDisable"
            :min="1"
            :max="20"
            size="mini"
          ></el-input-number>
        </div>
        <div class="w-50">
          <p>{{ __("边框半径") }}</p>
          <el-input-number
            v-model="border"
            :disabled="borderDisable"
            :min="1"
            :max="10"
            size="mini"
          ></el-input-number>
        </div>
        <div class="w-50">
          <span class="key">{{ __("渐变颜色1") }}</span>
          <div class="block">
            <el-color-picker v-model="gradient1" ></el-color-picker>
          </div>
        </div>
        <div class="w-50">
          <span class="key">{{ __("渐变颜色2") }}</span>
          <div class="block">
            <el-color-picker v-model="gradient2" ></el-color-picker>
          </div>
        </div>
        <div class="w-50">
          <span class="key">{{ __("填充颜色") }}</span>
          <div class="block">
            <el-color-picker v-model="background" @change="updateBackground"></el-color-picker>
          </div>
        </div>
      </section>
    </div>

    <!-- css区域 -->
    <section style="width: 100%">
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
  name: "borderGradient1",
  data() {
    return {
      outWidth: 200,
      outWidthDisable: false,
      outHeight: 100,
      outHeightDisable: false,
      radius: 10,
      radiusDisable: false,
      border: 10,
      borderDisable: false,
      gradient1: 'gold',
      gradient2: 'deeppink',
      background: "#fff",
    };
  },
  mounted() {
    this.updateCSS();
  },

  watch:{
    outWidth(){
       document.styleSheets[0].insertRule(`.pesudo::before { width: ${this.outWidth}px!important;}`, 0);
       this.updateCSS();
    },
    outHeight(){
       console.log(this.outHeight,111)
       document.styleSheets[0].insertRule(`.pesudo::before { height: ${this.outHeight}!important;}`, 0);
       this.updateCSS();
    },
    border(){
      document.styleSheets[0].insertRule(`.pesudo::before { radius: ${this.border}!important;}`, 0);
    }
  },
  methods: {
    // 改变边框的属性
    changeSize(e) {
        document.styleSheets[0].insertRule(`.pesudo { border-radius:${this.radius}px;width: ${this.outWidth}px;height: ${this.outHeight}px;}`, 0);
    },
    updateBackground(color){
        document.styleSheets[0].deleteRule(`.pesudo::after { background: ${this.background}!important }`, 0);
        document.styleSheets[0].insertRule(`.pesudo::after { background: ${color}!important }`, 0);
        this.updateCSS();
    },

    updateCSS() {
      let outputCssStr = `
        .pesudo {
            position: relative;
            width: ${this.outWidth}px;
            height: ${this.outHeight}px;
            margin: auto;
            border-radius: ${this.radius}px;
            &::after {
              content: "";
              position: absolute;
              width: 180px;
              height: 80px;
              background: ${this.background};
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              z-index: 3;
            }

            &::before {
              content: "";
              position: absolute;
              width: ${this.outWidth}px;
              height: ${this.outHeight}px;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              border-radius: inherit;
              background: linear-gradient(45deg, ${this.gradient1}, ${this.gradient2});
              z-index: 2;
            }
          }
      `;

      let cssCode = Prism.highlight(outputCssStr, Prism.languages.css);
      this.$refs["code-container"].innerHTML = cssCode;
    },
  },
};
</script>
