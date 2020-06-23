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

.inner {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
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
    <div class="container" ref="container"></div>
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
    <!-- HTML区域 -->
    <section style="width:100%;">
      <h4>HTML</h4>
      <div class="language-svg extra-class">
        <pre class="language-svg"><code ref="code-container"></code></pre>
      </div>
    </section>
  </article>
</template>

<script>
import Prism from "prismjs";

export default {
  name: "concaveBorder3",
  data() {
    return {
      width: 10,
      widthDisable: false,
      border: 1,
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
    changeSize() {},
    updateCSS() {
      const circle = (endX, endY)=> `A${this.width} ${this.width} 0 0 0 ${endX} ${endY}`
      const line = (endX, endY) => `L${endX} ${endY}`;
      const text =`<svg style="width:100%;height:100%">
    <path
        d="M0 ${this.width} ${circle(this.width, 0)}${line(200-this.width, 0)}${circle(200, this.width)}${line(200, 300-this.width)}${circle(200-this.width, 300)}${line(this.width, 300)}${circle(0, 300 - this.width)}Z"
        stroke="${this.color}"
        fill="transparent"
        stroke-width="${this.border}"
    />
</svg>`;
        this.$refs.container.innerHTML = text;
        let svgCode = Prism.highlight(text, Prism.languages.svg);
        this.$refs["code-container"].innerHTML = svgCode;
    }
  }
};
</script>
