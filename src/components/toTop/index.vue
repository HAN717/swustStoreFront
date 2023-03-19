<template>
  <!-- 回到顶部按钮 -->
  <div @click="toTop()" class="toTop" v-show="scrollHeight > 1000">
    <!-- <img
      src="../../assets/pic/home/toTop.png"
      alt="回到顶部"
      style="width: 70px"
    /> -->
    <div style="color: rgb(28, 58, 119);font-family: Courier New;font-weight: 600;">
      To<br>Top<br>
    </div>
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
  bottom: 3rem;
  float: right;
  right: 1rem;
  cursor: pointer;
  animation: showMb 0.7s;
  z-index: 100;
  text-shadow: 0.1rem 0.1rem 0.6rem white;
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