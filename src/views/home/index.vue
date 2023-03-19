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
              <br> <br> <br> 
              <div v-show="scrollHeight > 340" id="discribeWords1">西科好物 ,文化周边<br>校园之美 ,尽在其中</div>
              <div v-show="scrollHeight > 650" id="smallDiscribe"><span style="color:rgb(28, 58, 119);">我们将为你带来</span>精选的周边商品 ,涵盖学校文化和独立设计。这里出售自创商品和限量版商品 ,让你体验与众不同的购物感受。</div>
              <br> <br>
              <div v-show="scrollHeight > 650" id="learnMore" @click="navgateTo('/goodGoods')">
                <span>了解更多<i style="font-size:1.3rem;display: block;float: right;" class="el-icon-right"></i></span>
              </div>
            </div>
          </el-col>
          <el-col :span="4"> 
            <img v-show="scrollHeight > 340" id="area2Pic" src="../../assets/pic/home/showGoods/21.jpg" alt="西科大原创抱枕" style="width:20rem;margin: 7rem 0 0 1rem;">
          </el-col>
        </el-row>
        <!-- 过渡区 -->
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
      <div id="transitionArea1"></div>
      <!-- 西科创意展示区 -->
      <div v-show="scrollHeight > 1000" id="originalityArea">
        <el-row style="margin-top:6rem;margin-left: 4rem;">
          <el-col :span="10"> 
            <div style="overflow:hidden;width:25rem;height: 32rem;">
              <img v-show="scrollHeight > 1220" src="../../assets/pic/home/showGoods/42.jpg" alt="西科大原创抱枕" style="width:25rem;" id="area22Pic">
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <div v-show="scrollHeight > 1230" id="areaTitle2">西科创意 | originality</div>
              <div v-show="scrollHeight > 1340" id="discribeWords2">西南明珠出沧海 ,<br>桃李春风物华新</div>
              <div v-show="scrollHeight > 1340" id="smallDiscribe2">西科创意旨在展示西南科技大学的历史、人文、风景以及优秀的设计和创意作品。这里将会展现学校的独特魅力和创新精神 ,为师生和参观者提供一个充满艺术氛围的场所。</div>
            </div>
          </el-col>
          <el-col :span="4"> 
            <img v-show="scrollHeight > 1350" id="area22Pic2" src="../../assets/pic/home/showGoods/32.jpg" alt="西科大原创抱枕">
          </el-col>
          <div v-show="scrollHeight > 1550" id="learnMore2" @click="navgateTo('/originality')">
          <span>了解更多<i style="font-size:1.3rem;display: block;float: right;" class="el-icon-right"></i></span>
        </div>
        </el-row>
        <el-row style="margin-top:2.4rem">
          <el-col :span="18" v-show="scrollHeight > 1800" id="area2leftPic"  >
            <swiper :speed="1" :direction="'right'"></swiper>
          </el-col>
          <el-col :span="6" id="area2rightWords">
            <div>&emsp;&emsp;<span style="color:rgb(111, 160, 250)">西南科技大学</span>, 创建于1952年, 坐落于中国科技城——四川省绵阳市。是四川省人民政府与教育部共建高校, 被教育部确定为国家重点建设的西部14所高校之一。学校现占地5463亩, 环境优美, 设施完善, 是读书治学的好地方。70年来学校培养了众多优秀毕业生,涌现出了众多科技创新成果。</div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 过渡区 -->
    <div>
       <transitonArea/> 
       <div id="twoPic">  
          <div id="picBottomWords"  v-show="scrollHeight >=2100&&scrollHeight<2500">
            &emsp;&emsp;在西南科技大学 ,有一群坚持传承“艰苦奋斗 ,拼搏创新”校园精神的教学科研人员 ,他们崇尚“有一种力量叫团结 ,有一种胸怀叫包容 ,有一种精神叫实干 ,有一种境界叫奉献”的信念 ,自建校70年来 ,矢志不渝、百折不挠 ,硬是凭着苦干实干将学校的科技创新从无到有 ,从慢车道助推到全国第98位、省属高校第3位(中国内地高校自然指数排名)的发展快车道。
          </div>
          <img v-show="scrollHeight > 2100&&scrollHeight<2200" id="book1" src="../../assets/pic/home/books/rjcs.png" style="height:17rem">
          <img v-show="scrollHeight > 2200&&scrollHeight<2300" id="book2" src="../../assets/pic/home/books/rjcs.png" style="height:17rem">
          <img v-show="scrollHeight >= 2300&&scrollHeight<2400" id="book3" src="../../assets/pic/home/books/rjcs.png" style="height:17rem">
          <img v-show="scrollHeight >=2400&&scrollHeight<2500" id="book4" src="../../assets/pic/home/books/rjcs.png" style="height:17rem">
         
       </div>
    </div>
    <!-- 西科出版展示区 -->
    <div id="publishmentArea">
      <div v-show="scrollHeight > 1900&&scrollHeight<2300" id="publishmentAreaContent"></div>
      <div v-show="scrollHeight >= 2300&&scrollHeight<2500" id="publishmentAreaContent1"></div>
      <div v-show="scrollHeight >2500" id="publishmentAreaContent2"></div>
      <el-row id="area3">
        <el-col :span="6">
          <div style="width:100%;height:39rem;">
            <div v-show="scrollHeight > 2200" id="areaTitle3">西科出版 | publishment</div>
            <div v-show="scrollHeight > 2200" id="discribeWords3">知识智慧 , 不可匿藏<br>西科出版 , 献礼学堂</div>
            <div v-show="scrollHeight > 2200" id="smallDiscribe3">西科出版旨在展示学校教师出版的教材或书籍 ,以及学校的科研成果、学术论文等等。这里汇集大量高质量的出版物 ,包括学术著作、科研成果、教育教材和行业指南等。同时 ,西科出版还提供出版服务 ,为学校教师和学生提供出版支持和资源共享。</div>
          </div>
        </el-col>
        <el-col :span="18">
          <img v-show="scrollHeight > 2500" src="../../assets/pic/home/books/education.png" id="educationPic">
        </el-col>
      </el-row>
      <div id="learnMore3" v-show="scrollHeight > 2700" @click="navgateTo('/publishment')">
        查看更多
      </div>
      <div id="showPages" v-show="scrollHeight > 2700" >
        <div :class="'pages'+index" style="width: 12rem;height: 15rem;background-color: white;margin-left: 2.8rem;" v-for="(item,index) of imgList" :key="index">
          <img :src="item"/>
        </div>
      </div>
      
    </div>
    <toTop />
   
    <pageFooter/>
  </div>
</template>
<script>
import navigateBar from "../../components/navigateBar";
import toTop from "../../components/toTop";
import pageFooter from "../../components/pageFooter";
import transitonArea from "../../components/transitionArea";
import swiper from "../../components/swiper"
import "../home/home.css"
export default {
  name: "homePage",
  components: {
    navigateBar,
    toTop,
    swiper,
    transitonArea,
    pageFooter
  },
  data() {
    return {
      scrollHeight:0,
      imgList: [
          require('../../assets/pic/home/books/pages1.png'),
          require('../../assets/pic/home/books/pages5.png'),
          require('../../assets/pic/home/books/pages4.png'),
          require('../../assets/pic/home/books/pages3.png'),
          require('../../assets/pic/home/books/pages2.png'),
      ],
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