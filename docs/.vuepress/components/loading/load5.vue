<template>
  <div class="load-container"></div>
</template>

<style scoped lang="scss">
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
</style>

<script>
export default {
  name: "load5",
  data() {
    return {};
  }
};
</script>
