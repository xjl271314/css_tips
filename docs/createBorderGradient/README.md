# 巧妙实现带圆角的渐变边框

实际开发过程中,设计往往会对边框做出一个渐变背景色和阴影叠加的效果，类似实现如下图这种效果。

<br />
<br />
<br />

![示例图片](https://qiniu.mqdlf.cn/608782-20200217150241075-134163775.png)

## border-image

> `border-image`是CSS3中的一个新的属性,我们可以给 `border` 元素添加 `image`，类似于 `background-image`，可以是图片也可以是渐变，不再局限于纯色。


## background-image + 伪元素

<br />
使用 `border-image` 最大的问题在于，设置的 `border-radius` 会失效。此方案采用伪元素来实现。

:::tip
A box's backgrounds, but not its border-image, are clipped to the appropriate curve (as determined by ‘background-clip’). Other effects that clip to the border or padding edge (such as ‘overflow’ other than ‘visible’) also must clip to the curve. The content of replaced elements is always trimmed to the content edge curve. Also, the area outside the curve of the border edge does not accept mouse events on behalf of the element.
:::

<gradient-borderGradient1 />