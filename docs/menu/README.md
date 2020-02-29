<menu-corner />

## 环形菜单组件使用说明

**可选参数**
|  参数名  |  描述  |  默认值
| ----- | ----- | ----- |
|`radius`| item距离menu的button的距离 | 100px
|`startAngle`| item开始的角度，以时钟3点钟方向记为0，然后顺时针方向为递增方向。| 0
|`endAngle`| 最后一个item的角度。 | 315
|`itemNum`| 有几个菜单项 | 8
|`animationDuration`| 每个item动画的执行时间 | 0.5s
|`itemAnimationDelay`| 每个item之间animation触发的间隔延迟时间 | 0.04s

**必选参数**

|  参数名  |  描述  |
| ----- | ----- | 
|`iconImgArr`| `import`您需要的`icon`,然后生成`iconImgArr`（computed属性绑定），作为`props`传给menu组件

