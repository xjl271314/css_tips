## 使用 sroll-snap-type 优化滚动

`scroll-snap-type`：属性定义在滚动容器中的一个临时点（snap point）如何被严格的执行。

语法:
```css
{
    scroll-snap-type: none | [ x | y | block | inline | both ] [ mandatory | proximity ]?
}
```

举个例子，假设，我们希望一个横向可滚动容器，每次滚动之后，子元素最终的停留位置不是尴尬的被分割，而是完整的呈现在容器内，可以这样写：

```html
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>
```

```css
ul {
    scroll-snap-type: x mandatory;
}

li {
    scroll-snap-align: center;
}
```

上面 `scroll-snap-type: x mandatory` 中，x 表示捕捉 x 轴方向上的滚动，`mandatory` 表示强制将滚动结束后元素的停留位置设置到我们规定的地方。


添加了 `scroll-snap-` 之后：

<scrollSnapType-x />

如果是 y 轴方向的滚动也是一样的，只需要简单改一下 `scroll-snap-type：`

```css
ul {
    scroll-snap-type: y mandatory;
}
```

<scrollSnapType-y />

### `scroll-snap-type` 中的 `mandatory` 与 `proximity`


`scroll-snap-type`中的另外一个重点就是 `mandatory` 与 `proximity`。

- mandatory: 通常在 CSS 代码中我们都会使用这个，`mandatory` 的英文意思是强制性的，表示滚动结束后，滚动停止点一定会强制停在我们指定的地方。

- proximity: 英文意思是接近、临近、大约，在这个属性中的意思是滚动结束后，滚动停止点可能就是滚动停止的地方，也可能会再进行额外移动，停在我们指定的地方。

也就是说，如上指定了 `scroll-snap-type`: `y proximity` 的滚动容器，如果不额外设置 `scroll-snap-margin/scroll-snap-padding`，是有可能停在下面这样尴尬的位置：

![示例](https://user-images.githubusercontent.com/8554143/70125593-0f01fe00-16b2-11ea-9262-433595e0581d.png)

### scroll-snap-type: both mandatory

当然，还有一种比较特殊的情况是，`scroll-snap-type: both mandatory`，表示横向与竖向的滚动，都会同时进行捕捉，也是可以的：

![示例](https://user-images.githubusercontent.com/8554143/70142517-5a2d0880-16d4-11ea-81fb-08fe0493e422.gif)


### scroll-snap-align

> 使用 `scroll-snap-align` 可以简单的控制将要聚焦的当前滚动子元素在滚动方向上相对于父容器的对齐方式。

其需要作用在父元素上，可选值有三个：

```css
{
    scroll-snap-align: start | center | end;
}
```

![示例](https://user-images.githubusercontent.com/8554143/70130027-c13dc380-16ba-11ea-878b-b90426fdbf81.gif)

可以类比单个元素在 `flexbox` 里面的 `justify-content` 属性的 flex-start | flex-end | center，规定当前元素在主轴上相对父容器的对齐方式去理解。

再看看实际的 Demo ，将 `scroll-snap-align`添加到滚动子容器上：

### scroll-snap-align: start

> 使当前聚焦的滚动子元素在滚动方向上相对于父容器顶部对齐。

![示例](https://user-images.githubusercontent.com/8554143/69909886-f806a600-143c-11ea-9935-2d77718ac9d4.gif)

### scroll-snap-align: center

> 使当前聚焦的滚动子元素在滚动方向上相对于父容器中心对齐。

![示例](https://user-images.githubusercontent.com/8554143/69909891-fd63f080-143c-11ea-8d1b-b7fd9c1e4384.gif)

### scroll-snap-align: end

> 使当前聚焦的滚动子元素在滚动方向上相对于父容器底部对齐。

### 不规则子元素滚动

如果子元素大小不一，也能有非常好的表现，使用 `scroll-snap-align: center`，使得不规则子元素在每次滚动后居于容器中
间：

![示例](https://user-images.githubusercontent.com/8554143/70142474-471a3880-16d4-11ea-8d0b-b6623049d376.gif)

### scroll-margin / scroll-padding

上述的 `scroll-snap-align` 很好用，可以控制滚动子元素与父容器的对齐方式。然而可选的值只有三个，有的时候我们希望进行一些更精细的控制时，可以使用 `scroll-margin` 或者 `scroll-padding`

其中：

- scroll-padding 是作用于滚动父容器，类似于盒子的 padding
- scroll-margin 是作用于滚动子元素，每个子元素的 scroll-margin 可以设置为不一样的值，类似于盒子的 margin

举个例子，在竖向滚动下，给滚动父容器添加一个 scroll-padding-top: 30px 等同于给每个子元素添加 ``scroll-margin-top: 30px`：

```html
<ul class="snap">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  ...
</ul>
```

我们希望滚动子元素在 `scroll-snap-align: start` 的基础上，与容器顶部的距离为 30px：

```css
.snap {
    overflow-x: auto;
    scroll-snap-type: y mandatory;
    scroll-padding-top: 30px;
}

li {
    scroll-snap-align: start;
}
```

总结一下就是，`scroll-snap-align` 可以对滚动之后的对齐方式进行简单控制，而配合 `scroll-margin / scroll-padding` 则可以进行精确控制。


### 实际应用，渐进增强

在实际应用中，应用在全屏滚动/广告banner上有很多用武之地：

![示例](https://user-images.githubusercontent.com/8554143/70144165-4f747280-16d8-11ea-9ed4-fbfe421ee908.gif)
