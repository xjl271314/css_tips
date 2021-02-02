- 2020.11.26

手风琴效果是一个比较常见的效果,常用于列表等的折叠显示,这里介绍一个应用场景,如何实现为不定高度的元素实现transition动画。

开始之前,我们知道当一个元素不设置高度的时候height的默认值是auto,浏览器会自动计算出元素实际的高度。

那么如果未height:auto的元素增加一个CSS3动画呢?

在MDN的文档中我们可以发现：

> 当 height 的值是 length，百分比或 calc() 时支持 css3 过渡，所以当元素 height : auto 时,默认是不支持 css3 动画的。

为了解决这个问题，我们可以通过js 获取精确的 height 值，或者使用max-height 代替 height。只需要设置一个肯定比元素自增长大的高度值，由于是根据 max-height 值进行过渡效果，所以最好不要大得离谱，否则动画效果不理想。下面就介绍这2种方式的实现：

## 利用max-height:

<heightAutoTransition />

```html
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
```

```css
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
```

:::warning
使用`max-height`可以完成我们的效果,但是对于高度不确定的内容,max-height可能会丢失部分内容的显示。
:::

## 动态计算元素的高度

```js
var funTransitionHeight = function(element, time) { // time, 数值，可缺省
    if (typeof window.getComputedStyle == "undefined") return;
     
    var height = window.getComputedStyle(element).height;
 
    element.style.transition = "none";    // 本行2015-05-20新增，mac Safari下，貌似auto也会触发transition, 故要none下~
    
    element.style.height = "auto";
    var targetHeight = window.getComputedStyle(element).height;
    element.style.height = height;
    element.offsetWidth = element.offsetWidth;
    if (time) element.style.transition = "height "+ time +"ms";
    element.style.height = targetHeight;
};
```

