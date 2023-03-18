<template>
  <!-- 回到顶部按钮 -->
  <div @click="toTop()" class="toTop" v-show="scrollHeight > 400">
    <img
      src="../../assets/pic/home/toTop.png"
      alt="回到顶部"
      style="width: 70px"
    />
    <div style="margin: -7px 0 0 5px; color: rgb(236, 219, 186)">回到顶部</div>
  </div>
</template>
<script>
export default {
  name: "toTop",
  data() {
    return {
      showToTop: false,
      scrollHeight: 0,
    };
  },
  methods: {
    toTop() {
      const timeTop = setInterval(() => {
        document.documentElement.scrollTop = this.scrollHeight -= 50;
        if (this.scrollHeight <= 0) {
          clearInterval(timeTop); //清除定时器
        }
      }, 10);
    },
    handleScroll() {
      // var sortMenu = document.body.scrollTop;
      var scrollTop = document.documentElement.scrollTop;
      this.scrollHeight = scrollTop;
      // console.log('滚动条高度',this.scrollHeight);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>
<style>
.toTop {
  position: sticky;
  bottom: 7rem;
  float: right;
  right: 10rem;
  cursor: pointer;
  animation: showMb 0.7s;
}

@keyframes showbar {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>