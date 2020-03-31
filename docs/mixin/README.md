## Scss常用mixin
```css
/* 
 * 自定义实现border-radius
 * $radius Number radius半径  
 * $direction Array 方向数组
 */
@mixin borderRadius($radius, $direction:'') {
    @if $direction=='' {
        border-radius: $radius;
    }
    @else {
        @if $direction=='top' {
            border-top-left-radius: $radius;
            border-top-right-radius: $radius;
        }
        @if $direction=='bottom' {
            border-bottom-left-radius: $radius;
            border-bottom-right-radius: $radius;
        }
        @if $direction=='left' {
            border-top-left-radius: $radius;
            border-bottom-left-radius: $radius;
        }
        @if $direction=='right' {
            border-top-right-radius: $radius;
            border-bottom-right-radius: $radius;
        }
    }
}

/* 图片宽高比例自适应或者固定比例 宽高比16:9 （100%*9）/16 */
@mixin imgFixPercent($percent:100%) {
    position: relative;
    overflow: hidden;
    padding-bottom: $percent;
    >img {
        position: absolute;
        left: 0;
        top: 0;
    }
}

/* 当元素数量为指定数量时 选择所有的元素 
 * $bortherClassName的原因是因为层级嵌套的情况下会失效 
 */
@mixin nItems($n, $bortherClassName) {
    &:first-child:nth-last-child(#{$n}),
    &:first-child:nth-last-child(#{$n})~#{$bortherClassName} {
        @content;
    }
}

/* css选择器 选择列表中第n个到第m个之间的元素 */
@mixin checkedInCros($start, $end) {
    :nth-child(-n+#{$end}):nth-child(n+#{$start}) {
        @content;
    }
}

/* 根据每行排列几个 将数字转化为宽度 */
@mixin column($num:2) {
    width: 100% / $num;
}

/* 文本超过多少行显示省略号 */
@mixin textEllipsis($line:2) {
    display: -webkit-box !important;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    /* autoprefixer: off */
    -webkit-box-orient: vertical;
    -webkit-line-clamp: $line;
}

/* 假如每行n列 最后一列元素的特殊样式 */
@mixin columnLastRowStyle($column:2) {
    @if $column==2 {
        &:last-child,
        &:nth-last-child(2):nth-of-type(2n+1) {
            @content;
        }
    }
    @if $column==3 {
        &:last-child,
        &:nth-last-child(2):nth-of-type(3n+2),
        &:nth-last-child(3):nth-of-type(3n+1),
            {
            @content;
        }
    }
}

/* 高度和行高一致 */
@mixin lineHeight($height:50px) {
    @if ($height !=null) {
        height: $height;
        line-height: $height;
    }
}

/* flex布局简写 */
@mixin displayFlex($direction:'row',$justify:'flex-start',$align:'center',$wrap:'flex-wrap'){
    display:-webkit-flex;
    display:flex;
    @if $direction == 'row'{
        flex-direction: row;
        justify-content:$justify;
        align-items:$align;
        flex-wrap:$wrap;
    }
    @else{
        flex-direction: column;
        justify-content:$justify;
        align-items:$align;
        flex-wrap:$wrap;
    }
}

/* 清除浮动 */
@mixin clearfix {
  &:after {
    content: '.';
    clear: both;
    display: block;
    height: 0;
    font-size:0;
    overflow: hidden;
  }
  *height: 1%;
}


/* 画三角形 */
@mixin triangle($width:10px, $direction:top, $color:red) {
  border: $width solid transparent;
  @if ($direction == top) { // 上三角
    border-bottom-color: $color;
  }
  @if ($direction == bottom) { // 下三角
    border-top-color: $color;
  }
  @if ($direction == left) { // 左三角
    border-right-color: $color;
  }
  @if ($direction == right) { // 右三角
    border-left-color: $color;
  }
}

/* 定义滚动条样式 圆角和阴影不需要则传入null */
@mixin scrollBar($width:10px,$height:10px,$outColor:$bgColor,$innerColor:$bgGrey,$radius:5px,$shadow:null) {
  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  &::-webkit-scrollbar {
    width: $width;
    height: $height;
    background-color: $outColor;
  }
 
  /*定义滚动条轨道 内阴影+圆角*/
  &::-webkit-scrollbar-track {
    @if ($shadow!=null) {
      -webkit-box-shadow: $shadow;
    }
    @if ($radius!=null) {
      border-radius: $radius;
    }
    background-color: $outColor;
  }
 
  /*定义滑块 内阴影+圆角*/
  &::-webkit-scrollbar-thumb {
    @if ($shadow!=null) {
      -webkit-box-shadow: $shadow;
    }
    @if ($radius!=null) {
      border-radius: $radius;
    }
    background-color: $innerColor;
    border: 1px solid $innerColor;
  }
}

/* 正方形盒子 */
@mixin square($size){
    width: $size;
    height: $size;
}

/* 圆形盒子 */
@mixin circle($size: 11px,$bg: #fff) {
  @include square($size);
  border-radius: 50%;
  line-height: $size;
  text-align: center;
  background: $bg;
}
```