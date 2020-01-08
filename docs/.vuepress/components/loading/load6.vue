<template>
  <div class="load-container">
    <div class="moon"></div>
  </div>
</template>

<style scoped lang="scss">
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
}
</style>

<script>
export default {
  name: "load6",
  data() {
    return {};
  }
};
</script>
