<template>
  <div id="main">
    <navigateBar />
    <div id="banner"></div>
    <div id="tmBlock"></div>
    <div id="content">
      <!-- 西科好物展示区 -->
      <div id="goodGoodsArea">
        <el-row style="margin-top:4rem">
          <el-col :span="10"> 
            <img src="../../assets/pic/home/showGoods/18.jpg" alt="西科大原创抱枕" style="width:33rem;margin-left: 2rem;">
          </el-col>
          <el-col :span="8">
            <div>
              <div id="areaTitle1">西科好物 | goodGoods</div>
              <div id="discribeWords1">发现优质好物，<br>畅享无限购物乐趣，<br>尽在西科周边商城！</div>
              <div id="smallDiscribe"><span style="color:rgb(28, 58, 119);">我们将为你带来</span>精选的周边商品，涵盖学校文化和独立设计。这里出售自创商品和限量版商品，让你体验与众不同的购物感受。</div>
              <div id="learnMore" @click="navgateTo('/goodGoods')">
                <span>了解更多<i style="font-size:1.3rem;display: block;float: right;" class="el-icon-right"></i></span>
              </div>
            </div>
          </el-col>
          <el-col :span="4"> 
            <img src="../../assets/pic/home/showGoods/21.jpg" alt="西科大原创抱枕" style="width:20rem;margin: 8rem 0 0 1rem;">
          </el-col>
        </el-row>
      </div>
      <!-- 过渡区 -->

      <!-- 西科创意展示区 -->
      <div id="originalityArea"></div>
      <!-- 过渡区 -->

      <!-- 西科出版展示区 -->
      <div id="publishmentArea"></div>

    </div>
    <toTop />
    <pageFooter/>
  </div>
</template>
<script>
import navigateBar from "../../components/navigateBar";
import toTop from "../../components/toTop";
import pageFooter from "../../components/pageFooter";
import "../home/home.css"
export default {
  name: "homePage",
  components: {
    navigateBar,
    toTop,
    pageFooter
  },
  data() {
    return {

    };
  },
  methods: {
    handleScroll() {
      var scrollTop = document.documentElement.scrollTop;
      this.scrollHeight = scrollTop;
    },
    navgateTo(dataPath) {
      this.$router.push(dataPath);
    },
  },
  mounted() {
      window.addEventListener("scroll", this.handleScroll)
  },
};
</script>
<style>
</style>