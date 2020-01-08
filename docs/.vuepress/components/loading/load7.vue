<template>
  <div class="container">
    <div class="load-container">
      <span>L</span>
      <span>O</span>
      <span>A</span>
      <span>D</span>
      <span>I</span>
      <span>N</span>
      <span>G</span>
    </div>
  </div>
</template>

<style lang="scss">
$color: #2980b9;
$shadowColor: darken($color, 10%);
.container {
  padding: 30px 0;
}
.load-container {
  display: flex;
  justify-content: center;
  align-items: center;
  color: $color;
  font-family: "Baloo Bhaijaan", cursive;
  font-weight: bolder;
  text-transform: uppercase;
  > span {
    font-size: 60px;
    text-shadow: 0 1px $shadowColor, 0 2px $shadowColor, 0 3px $shadowColor,
      0 4px $shadowColor, 0 5px $shadowColor, 0 6px transparent,
      0 7px transparent, 0 8px transparent, 0 9px transparent,
      0 10px 10px rgba(0, 0, 0, 0.6);
    transform: translateY(20px);
    animation: bounce 0.3s ease infinite alternate;
  }
  @for $i from 0 through 6 {
    span:nth-child(#{$i + 1}) {
      animation-delay: $i * 0.1s;
    }
  }

  @keyframes bounce {
    100% {
      text-shadow: 0 1px #bbb, 0 2px #bbb, 0 3px #bbb, 0 4px #bbb, 0 5px #bbb,
        0 6px #bbb, 0 7px #bbb, 0 8px #bbb, 0 9px #bbb,
        0 50px 25px rgba(0, 0, 0, 0.2);
      transform: translateY(-20px);
    }
  }
}
</style>

<script>
export default {
  name: "load7",
  data() {
    return {};
  }
};
</script>
