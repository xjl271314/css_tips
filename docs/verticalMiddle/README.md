# 垂直居中

## 未知父元素高度
```scss
.parentElement {
  position: relative;
  // 方法1   transform: translateY(-50%);
  .childElement {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  // 方法2
  .childElement {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
  }
}

```

## 已知父元素高度，仅有一个子元素
```scss
.parentElement {
  height: xxx;
  .childElement {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
}
```

## display:flex
```scss
.parentElement{
  display: flex;
  align-items: center
}
```

## 伪元素:before
```scss
.parentElement {
  display: block;
  &:before {
    content: " ";
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }
  .childElement {
    display: inline-block;
    vertical-align: middle;
  }
}
```


## 隐藏节点
```scss
.parentElement {
  background: blue;
  width: 100%;
  height: 100px;
  .hide {
    width: 20%;
    height: 35%;//隐藏节点的高为 (父级高 - 去子级高)/2
  }
  .childElement {
    background: yellow;
    width: 20%;
    height: 30%;
  }
}
```


## display:table-cell

```scss
.parentElement {
  display: table;
  .childElement {
    display: table-cell;
    vertical-align: middle;
  }
  .grandsonElement {}
}
```


## 单行文本的图标垂直居中

:::tip
关键属性使用1ex来实现垂直居中
:::

<demos-ex />

```html
<div class="box">
    显示全部内容
    <div class="arrow-down" />
</div>
```

```scss
.box {
  padding: 10px;
  background: skyblue;
  color: #fff;
  font-size: 24px;
}

.arrow-down {
  display: inline-block;
  width: 24px;
  height: 1ex; // 关键代码 不会随着字号的改变改变效果
  background: url("../images/arrow-down.png") no-repeat center / cover;
}
```