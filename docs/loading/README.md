## 交错加载动画

<loading-load1/>
```html
  <div class="load-container">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
```
```scss
.load-container {
  // 颜色可以自己选择喜欢的 也可以使用random()函数随机生成 
  // 也可以选定基色然后 进行lighten / darken / saturate / desaturate 等操作
  $colors: #7ef9ff, #89cff0, #4682b4, #0f52ba, #000080;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-delay: 1s;
  font-size: 16px;
  padding:0.5em;
  .dot {
    position: relative;
    width: 1.5em;
    height: 1.5em;
    margin: 0.5em;
    border-radius: 50%;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: inherit;
      border-radius: inherit;
      animation: wave 2s ease-out infinite;
    }

    @for $i from 1 through 5 {
      &:nth-child(#{$i}) {
        background: nth($colors, $i);
        // 每次生成随机颜色
        // background: rgb(random(256), random(256), random(256));
        &::before {
          animation-delay: $i * 0.2s;
        }
      }
    }
  }

  @keyframes wave {
    50%,
    75% {
      transform: scale(2);
    }

    80%,
    100% {
      opacity: 0;
    }
  }
}
```
## 六边形加载动画

<loading-load2/>

```html
  <div class="load-container">
      <svg
        version="1.1"
        x="0px"
        y="0px"
        width="150px"
        height="150px"
        viewBox="0 0 213.235 241.176"
        enable-background="new 0 0 213.235 241.176"
        xml:space="preserve"
      >
        <path d="M108.581,64.968V14.124l44.007,25.422L108.581,64.968" />
        <path
          fill-opacity="0.9"
          d="M153.591,92.101V41.258L109.582,66.68L153.591,92.101"
        />
        <path d="M155.586,92.062V41.221l44.009,25.42L155.586,92.062" />
        <path
          fill-opacity="0.7"
          d="M200.299,119.14V68.297l-44.004,25.421L200.299,119.14"
        />
        <path
          fill-opacity="0.85"
          d="M155.586,146.255V95.412l44.009,25.422L155.586,146.255"
        />
        <path
          fill-opacity="0.7"
          d="M200.299,173.35v-50.844l-44.004,25.422L200.299,173.35"
        />
        <path
          fill-opacity="0.6"
          d="M155.586,200.482v-50.84l44.009,25.417L155.586,200.482"
        />
        <path
          fill-opacity="0.5"
          d="M153.591,200.521v-50.84l-44.009,25.418L153.591,200.521"
        />
        <path
          fill-opacity="0.6"
          d="M108.581,227.696v-50.844l44.007,25.421L108.581,227.696"
        />
        <path
          fill-opacity="0.5"
          d="M106.62,227.696v-50.844l-44.005,25.421L106.62,227.696"
        />
        <path
          fill-opacity="0.7"
          d="M61.562,200.553V149.71l44.007,25.423L61.562,200.553"
        />
        <path
          fill-opacity="0.7"
          d="M59.709,200.56v-50.843l-44.008,25.422L59.709,200.56"
        />
        <path
          fill-opacity="0.7"
          d="M14.699,173.467v-50.843l44.01,25.42L14.699,173.467"
        />
        <path
          fill-opacity="0.5"
          d="M59.709,146.235V95.392l-44.008,25.42L59.709,146.235"
        />
        <path
          fill-opacity="0.7"
          d="M14.699,119.141V68.297l44.01,25.421L14.699,119.141"
        />
        <path
          fill-opacity="0.6"
          d="M59.709,92.101V41.258L15.701,66.68L59.709,92.101"
        />
        <path
          fill-opacity="0.85"
          d="M61.562,92.092V41.249l44.007,25.419L61.562,92.092"
        />
        <path
          fill-opacity="0.9"
          d="M106.62,64.968V14.124L62.614,39.546L106.62,64.968"
        />
      </svg>
  </div>
```

```scss
$pathNumber: 18;
// The color that will be at the beginning and the end of the loop.
$firstColor: #0057B8;
// The list of all the used colors. You can add or remove colors, the animation stays fluid. The $first-color must remain at the end of the list though.
$listColors: #F11E4A, #F8A527, #266D7F, #82A, $firstColor;
// animation delay time
$delayCoeff: 0.1s; 

.load-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
}

svg {
  fill: $firstColor;
  @for $i from 1 through $pathNumber {
      path:nth-child(#{$i}) {
        animation: pweek $delayCoeff*$pathNumber linear infinite;
        animation-delay: $i*$delayCoeff;
        &:hover {
          animation-play-state: paused;
        }
      }
   }
}

@keyframes pweek {
  0% {
    fill: $firstColor;
  }
  @for $i from 1 through length($listColors) {
    #{$i*(100/length($listColors))}% {
      fill: nth($listColors, $i);
    }
  }
}
```

## 爬楼梯动画

<loading-load3/>
```html
  <div class="load-container">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="ball"></div>
  </div>
```
```scss
$gap: 2px;
$width: 10px;
$size: 5;
$colors: red, orange, yellow, green, purple;
$ballColor: gray;

.load-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  .bar {
    width: $width;
    height: $width * $size;
    margin-right: $gap;
    transform-origin: center bottom;
  }
  .ball {
    position: absolute;
    width: $width;
    height: $width;
    bottom: 50%;
    left: 50%;
    margin-left: -$width * ($size/2 + 0.5);
    border-radius: 50%;
    background: $ballColor;
    animation: ballUp 4s infinite;
  }
  @for $i from 1 through $size {
    .bar:nth-child(#{$i}) {
      background: nth($colors, $i);
      box-shadow: 0px 0px 1px darken(nth($colors, $i), 10%);
      transform: scale(1, $i * 0.2);
      animation: barUp#{$i} 4s infinite;
    }
  }
  @keyframes ballUp {
    0%,
    100% {
      transform: translate(0, 14px);
    }
    5% {
      transform: translate(7px, -9px);
    }
    10% {
      transform: translate(15px, -5px);
    }
    17% {
      transform: translate(22px, -19px);
    }
    20% {
      transform: translate(30px, -15px);
    }
    27% {
      transform: translate(37px, -29px);
    }
    30% {
      transform: translate(42px, -25px);
    }
    37% {
      transform: translate(45px, -39px);
    }
    40% {
      transform: translate(50px, -35px);
    }
    50% {
      transform: translate(50px, 14px);
    }
    57% {
      transform: translate(45px, -9px);
    }
    60% {
      transform: translate(42px, 0px);
    }
    67% {
      transform: translate(37px, -14px);
    }
    70% {
      transform: translate(30px, -10px);
    }
    77% {
      transform: translate(22px, -24px);
    }
    80% {
      transform: translate(15px, -20px);
    }
    87% {
      transform: translate(7px, -34px);
    }
    90% {
      transform: translate(0, -30px);
    }
  }

  @for $i from 1 through $size {
    @keyframes barUp#{$i} {
      0%,
      40%,
      100% {
        transform: scale(1, 0.2 * $i);
      }
      @if $i != 3 {
        50%,
        90% {
          transform: scale(1, 1.2 - 0.2 * $i);
        }
      }
    }
  }
}
```



## 条纹加载动画

<loading-load4/>
```html
  <div class="load-container">
      <div class="boxLoading"></div>
      <div class="boxLoading"></div>
      <div class="boxLoading"></div>
      <div class="boxLoading"></div>
      <div class="boxLoading"></div>
  </div>
```
```scss
.load-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  .boxLoading {
    background-color: #00adb5;
    height: 60px;
    width: 6px;
    margin-right: 4px;
    display: inline-block;
    animation: stretchdelay 1.2s infinite ease-in-out;
  }
  @for $i from 2 through 5 {
    .boxLoading:nth-child(#{$i}) {
      animation-delay: 0.1 * $i - 1.3s;
    }
  }
}

@keyframes stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.5);
  }
  20% {
    transform: scaleY(1);
  }
}
```


## 3D翻转

<loading-load5/>
```html
  <div class="load-container"></div>
```
```scss
.load-container {
  width: 60px;
  height: 60px;
  background-color: #00adb5;
  margin: 50px auto;
  transition: background-color .4s ease-in-out;
  animation: rotateplane 1.2s infinite ease-in-out;
}
@keyframes rotateplane {
  0% {
    background-color: rgb(random(256),random(256),random(256));
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
  }
  50% {
    background-color: rgb(random(256),random(256),random(256));
    transform: perspective(120px) rotateX(-180deg) rotateY(0deg);
  }
  100% {
    background-color: rgb(random(256),random(256),random(256));
    transform: perspective(120px) rotateX(-180deg) rotateY(-180deg);
  }
}
```

## 猩红之月

<loading-load6/>
```html
  <div class="load-container">
    <div class="moon"></div>
  </div>
```
```scss
$size: 60px;
.load-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 15px;
  .moon {
    position: relative;
    width: $size;
    height: $size;
    border-radius: 50%;
    box-shadow: inset 0.1 * $size -0.1 * $size crimson;
    animation: spin 2s linear infinite;
    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: inherit;
      border-radius: inherit;
      box-shadow: inherit;
    }
    &::before {
      filter: blur(5px);
    }
    &::after {
      filter: blur(10px);
    }
  }
  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(1turn);
    }
  }
```

## 3D动态文本

<loading-load7/>
```html
    <div class="load-container">
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
    </div>
```
```scss
    $color:#2980b9;
    $shadowColor:darken($color, 10%);
    .load-container{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 30px 0;
        color: $color;
        font-family: "Baloo Bhaijaan", cursive;
        font-weight: bolder;
        text-transform: uppercase;
        >span{
            font-size: 60px;
            text-shadow: 0 1px $shadowColor, 
            0 2px $shadowColor, 
            0 3px $shadowColor, 
            0 4px $shadowColor, 
            0 5px $shadowColor, 
            0 6px transparent, 
            0 7px transparent, 
            0 8px transparent, 
            0 9px transparent, 
            0 10px 10px rgba(0, 0, 0, 0.6);
            transform: translateY(20px);
            animation: bounce 0.3s ease infinite alternate;
        }
        @for $i from 0 through 6{
            span:nth-child(#{$i+1}){
                animation-delay:  $i*0.1s;
            }
        }

        @keyframes bounce {
            100%{
                text-shadow: 0 1px #bbb, 0 2px #bbb, 0 3px #bbb, 0 4px #bbb, 0 5px #bbb, 0 6px #bbb, 0 7px #bbb, 0 8px #bbb, 0 9px #bbb, 0 50px 25px rgba(0, 0, 0, 0.2);
                transform: translateY(-20px);
            }
        }
    }
```

## 相关项目

1. <a href="https://epic-spinners.epicmax.co/#/" target="_blank">Epic Spinners</a>

