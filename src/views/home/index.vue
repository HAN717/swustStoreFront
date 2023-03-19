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
            <img v-show="scrollHeight > 320" src="../../assets/pic/home/showGoods/18.jpg" alt="西科大原创抱枕" style="width:30rem;margin-left: 2rem;" id="area1Pic">
          </el-col>
          <el-col :span="8">
            <div>
              <div v-show="scrollHeight > 330" id="areaTitle1">西科好物 | goodGoods</div>
              <div v-show="scrollHeight > 340" id="discribeWords1">发现优质好物，<br>畅享无限购物乐趣，<br>尽在西科周边商城！</div>
              <div v-show="scrollHeight > 650" id="smallDiscribe"><span style="color:rgb(28, 58, 119);">我们将为你带来</span>精选的周边商品，涵盖学校文化和独立设计。这里出售自创商品和限量版商品，让你体验与众不同的购物感受。</div>
              <div v-show="scrollHeight > 650" id="learnMore" @click="navgateTo('/goodGoods')">
                <span>了解更多<i style="font-size:1.3rem;display: block;float: right;" class="el-icon-right"></i></span>
              </div>
            </div>
          </el-col>
          <el-col :span="4"> 
            <img v-show="scrollHeight > 340" id="area2Pic" src="../../assets/pic/home/showGoods/21.jpg" alt="西科大原创抱枕" style="width:20rem;margin: 8rem 0 0 1rem;">
          </el-col>
        </el-row>
        <!-- 图片滚动展示 -->
        <div id="scrollShowPic" v-show="scrollHeight > 900&&scrollHeight<1300">
          <div id="scrollShowPic1">
            <img src="../../assets/pic/home/showGoods/25.jpg" style="height:17rem">
          </div>
          <div id="scrollShowPic2">
            <img src="../../assets/pic/home/showGoods/27.jpg" style="height:17rem">
          </div>
        </div>
        <div id="scrollShowPicSecond" v-show="scrollHeight >= 1300&&scrollHeight<1500">
          <div id="scrollShowPic11">
            <img src="../../assets/pic/home/showGoods/25.jpg" style="height:17rem">
          </div>
          <div id="scrollShowPic22">
            <img src="../../assets/pic/home/showGoods/27.jpg" style="height:17rem">
          </div>
        </div>
        <div id="scrollShowPicThird" v-show="scrollHeight >= 1500&&scrollHeight<1660">
          <div id="scrollShowPic111">
            <img src="../../assets/pic/home/showGoods/25.jpg" style="height:17rem">
          </div>
          <div id="scrollShowPic222">
            <img src="../../assets/pic/home/showGoods/27.jpg" style="height:17rem">
          </div>
        </div>
      </div>
      <!-- 过渡区 -->
      <div id="transitionArea1"></div>
      <!-- 西科创意展示区 -->
      <div v-show="scrollHeight > 1000" id="originalityArea">
        <el-row style="margin-top:6rem;margin-left: 4rem;">
          <el-col :span="10"> 
            <div style="overflow:hidden;width:25rem;height: 32rem;">
              <img v-show="scrollHeight > 1320" src="../../assets/pic/home/showGoods/42.jpg" alt="西科大原创抱枕" style="width:25rem;" id="area22Pic">
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <div v-show="scrollHeight > 1330" id="areaTitle2">西科创意 | originality</div>
              <div v-show="scrollHeight > 1340" id="discribeWords2">西南明珠出沧海，<br>桃李春风物华新</div>
              <div v-show="scrollHeight > 1340" id="smallDiscribe2">西科创意旨在展示西南科技大学的历史、人文、风景以及优秀的设计和创意作品。这里将会展现学校的独特魅力和创新精神，为师生和参观者提供一个充满艺术氛围的场所。</div>
            </div>
          </el-col>
          <el-col :span="4"> 
            <img v-show="scrollHeight > 1350" id="area22Pic2" src="../../assets/pic/home/showGoods/32.jpg" alt="西科大原创抱枕">
          </el-col>
          <div v-show="scrollHeight > 1450" id="learnMore2" @click="navgateTo('/goodGoods')">
          <span>了解更多<i style="font-size:1.3rem;display: block;float: right;" class="el-icon-right"></i></span>
        </div>
        </el-row>
      </div>
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
    pageFooter,
  },
  data() {
    return {
      scrollHeight:0,
    };
  },
  methods: {
    handleScroll() {
      var scrollTop = document.documentElement.scrollTop;
      this.scrollHeight = scrollTop;
      // console.log('当前滚轮高度:',this.scrollHeight);
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