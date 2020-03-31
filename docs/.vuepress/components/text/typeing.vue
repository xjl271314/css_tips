<style scoped lang="scss">
    h1 {
        font: bold 200% Consolas, Monaco, monospace;
        border-right: 0.1em solid;
        width: 16.5em;
        width: 26ch;
        margin: 2em 1em;
        white-space: nowrap;
        overflow: hidden;
        /* 这里的步骤需要拆分为每个单词 */
        animation: typing 3s steps(26, end),
            cursor-blink 0.3s step-end infinite alternate;
    }
    @keyframes typing {
        from {
            width: 0;
        }
    }

    @keyframes cursor-blink {
        50%{
            border-color: transparent;
        }
    }
</style>
<template>
  <div>
    <h1>Pure CSS Typing animation.</h1>
  </div>
</template>

<script>
export default {
  name: "typeing",
  data() {
    return {};
  }
};
</script>


