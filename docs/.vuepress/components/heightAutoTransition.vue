<style scoped lang="scss">
.card {
  width: 200px;
  margin: 50px auto 0;
  background-color: orange;
  .head {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    background-color: chartreuse;
  }
  .content {
    overflow: hidden;
    max-height: 0;
    transition: max-height 1s;
    p {
      width: 100%;
      height: 45px;
      line-height: 45px;
      text-align: center;
      border-bottom: 1px solid #eee;
    }
    &.show{
        max-height: 270px;
    }
  }
}
</style>

<template>
  <div class="card">
    <div class="head" @click="toggleShow">点击我{{ txt }}</div>
    <div class="content" :class="isActive ? 'show' : ''">
      <p>我是卡片item1</p>
      <p>我是卡片item2</p>
      <p>我是卡片item3</p>
      <p>我是卡片item4</p>
      <p>我是卡片item5</p>
      <p>我是卡片item6</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      txt: "展开",
      isActive: false,
    };
  },
  methods:{
      toggleShow(){
          this.isActive = !this.isActive;
          this.txt = this.txt == '展开' ? '收起' : '展开';
      }
  }
};
</script>
