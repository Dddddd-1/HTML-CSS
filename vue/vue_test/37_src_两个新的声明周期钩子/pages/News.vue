<template>
  <ul>
    <li :style="{ opacity }">欢迎学习Vue</li>
    <li>news001<input /></li>
    <li>news002<input /></li>
    <li>news003<input /></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1,
    };
  },
  /* beforeDestroy() {
    console.log("News组件即将被销毁了");
    clearInterval(this.timer);
  }, */
  /* mounted() {
    this.timer = setInterval(() => {
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);
  }, */
  activated() {
    this.timer = setInterval(() => {
      this.opacity -= 0.01;
      // console.log("@");
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);
    console.log("News组件被激活了");
  },
  deactivated() {
    clearInterval(this.timer);
    console.log("News组件失活了");
  },
};
</script>

<style></style>
