<template>
  <div id="notFondBody">
    <div id="notFoundBox">
      <h2 style="font-size: 3rem">
        抱歉，页面未找到，<span>{{ countDown }}</span>s后自动跳转到
        <a href="javascript:;" @click="goHome">首页</a>
      </h2>
      <img
        src="../../assets/pic/svg/404.svg"
        style="width: 50rem; height: 50rem; margin: -10rem 24%"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "404",
  data() {
    return {
      countDown: 5,
      timer: null,
    };
  },
  methods: {
    goHome() {
      this.$router.push("/");
      clearInterval(this.timer);
    },
  },
  created() {
    this.timer = setInterval(() => {
        this.countDown > 0 ? this.countDown-- : this.goHome()
    }, 1000)
  },
};
</script>

<style>
#notFondBody {
  padding: 3rem;
  color: #85a9f3;
  text-align: center;
  overflow: hidden;
}
#notFoundBox a {
  color: #1046b4cc;
}
</style>