<style scoped lang="scss">
    .container {
        position: relative;
        font-size: 24px;
        line-height: 30px;
        background-image: linear-gradient(to right top, #ffcc00 50%, #eee 50%);
        background-size: 100% calc(100% - 100vh + 3.8rem);
        background-repeat: no-repeat;
        z-index: 1;
    }
    .container::after {
        content: "";
        position: fixed;
        top: 3.8rem;
        left: 0;
        bottom: 0;
        right: 0;
        background: #fff;
        z-index: -1;
    }
    h1 {
        font-size: 32px;
        line-height: 60px;
    }
    >p {
        font-size: 24px;
        line-height: 30px;
        margin-top: 30px;
    }
</style>

<template>
  <div class="container">
    <h1>不可思议的纯 CSS 进度条效果</h1>

    <p>滚动下面的页面，你会看到顶部实现了进度条的效果，这里其实是个简单的利用了线性渐变的障眼法。</p>
    <p>滚动下面的页面，你会看到顶部实现了进度条的效果，这里其实是个简单的利用了线性渐变的障眼法。</p>
    <p>滚动下面的页面，你会看到顶部实现了进度条的效果，这里其实是个简单的利用了线性渐变的障眼法。</p>
    <p>滚动下面的页面，你会看到顶部实现了进度条的效果，这里其实是个简单的利用了线性渐变的障眼法。</p>
    <p>滚动下面的页面，你会看到顶部实现了进度条的效果，这里其实是个简单的利用了线性渐变的障眼法。</p>
    <p>滚动下面的页面，你会看到顶部实现了进度条的效果，这里其实是个简单的利用了线性渐变的障眼法。</p>
    <p>滚动下面的页面，你会看到顶部实现了进度条的效果，这里其实是个简单的利用了线性渐变的障眼法。</p>
    <p>滚动下面的页面，你会看到顶部实现了进度条的效果，这里其实是个简单的利用了线性渐变的障眼法。</p>
    <p>滚动下面的页面，你会看到顶部实现了进度条的效果，这里其实是个简单的利用了线性渐变的障眼法。</p>
    <p>滚动下面的页面，你会看到顶部实现了进度条的效果，这里其实是个简单的利用了线性渐变的障眼法。</p>
    <p>滚动下面的页面，你会看到顶部实现了进度条的效果，这里其实是个简单的利用了线性渐变的障眼法。</p>
    <p>滚动下面的页面，你会看到顶部实现了进度条的效果，这里其实是个简单的利用了线性渐变的障眼法。</p>
    <p>滚动下面的页面，你会看到顶部实现了进度条的效果，这里其实是个简单的利用了线性渐变的障眼法。</p>
  </div>
</template>

<script>
export default {
  name: "cssScrollBar",
  data() {
    return {};
  },
  watch: {},
  methods: {
  },
  mounted() {
  }
};
</script>
