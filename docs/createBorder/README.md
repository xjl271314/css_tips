# 创建内凹边框

## 使用1个div 内嵌4个div来实现内凹边框的效果

```html
<div class="container">
    <div class="radiusBox">
        <div class="radius_left_top"></div>
        <div class="radius_right_top"></div>
        <div class="radius_left_bottom"></div>
        <div class="radius_right_bottom"></div>
        <div class="inner">我是内部区域内容</div>
    </div>
</div>
```

<border-concaveBorder1 />

:::tip
该种方式的实现兼容性较好，但是在边框宽度大于3px的时候显示的效果就没有特别好了，而且该种方式的HTML元素使用较多，下面将尝试使用 `radial-gradient` 来实现相同的效果。
:::

## 使用径向渐变+绝对定位来实现

```html
<div class="container">
    <div class="radiusBox">
        <div class="radiusBoxInner">
          <div class="inner">我是内部区域内容</div>
        </div>
    </div>
</div>
```

<border-concaveBorder2 />

:::tip
使用渐变来实现，是一个很棒的技巧，但是也存在一些问题。

首先`radial-gradient`是CSS3的属性,存在一定兼容性的问题。

其次使用径向渐变来实现的时候有一个很明显的毛边效果，但是如果在边框较细情况下毛边不明显。

:::

## 使用SVG方案来绘制边框

```html
<svg>
    <path
        d="M0 10 A10 10 0 0 0 10 0L190 0A10 10 0 0 0 200 10L200 290A10 10 0 0 0 190 300L10 300A10 10 0 0 0 0 290Z"
        stroke="#fff"
        fill="transparent"
        stroke-width="1"
    />
</svg>
```

在此先回顾下画圆弧的属性:

| 参数名  | 参数描述
| :--- | :----
|`rx`| 规定圆弧在x轴方向的半径吃尺寸。
|`ry`| 规定元素在y轴方向的半径尺寸，如果与rx相等则正圆圆弧，否则是椭圆圆弧。
|`x-axis-rotation`| 规定圆弧的横轴与x轴的夹角，正数表示顺时针旋转，反之表示逆时针。
|`large-arc-flag`| 规定绘制大圆弧还是小圆弧，1表示绘制大角度圆弧，0表示绘制小角度圆弧。
|`sweep-flag`| 规定绘制顺时针方向绘制，还是逆时针方向绘制，1表示顺时针，0表示逆时针。
|`x`| 规定圆弧终点的x轴坐标。
|`y`| 规定圆弧终点的y轴坐标。

<border-concaveBorder3 />

:::tip

使用svg绘制需要熟练的运用各种svg的基本绘图技巧和path高级属性等，绘制上稍微有点难度。

在使用svg绘制的情况下，在1px、2px情况下显示效果较佳，如果边框特别的粗的话看起来就不是那么逼真了
:::



