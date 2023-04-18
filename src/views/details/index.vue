<template>
  <div class="detailsContent">
    <navigateBar />
    <div id="banner2"></div>
    <div id="goodsBox">
      <div id="goodsName">{{ this.goodsName }}</div>
        <div style="position: absolute;margin: 5rem 0 0 32rem;width: 40rem;">
          <div style=" background-color:aliceblue;padding: 1.5rem;">
            <div style="width: 14rem;margin: 0 0 2rem -0.6rem;">
              <el-statistic :value="deadline2" time-indices>
                <template slot="suffix"> 抢购即将开始 </template>
              </el-statistic>
            </div>
            <div style="font-family: 幼圆;">售价: <span style="color:tomato;font-size: 1.5rem;">￥ 99.00</span> </div>
          </div>
          <div style="margin:1.3rem 0 1rem 0;font-family: 幼圆">
            种类 <el-tag type="warning">装饰类</el-tag>&emsp; 
            材质 <el-tag>布料</el-tag>&emsp;
            发售时间 <el-tag type="success">2022-12-5</el-tag>
          </div>
          <div style="padding: 0.2rem 0;color: slategray;">
            由西科i货运公司发货, 并提供售后服务. 现在下单, 4月3日前发货, 预计4月6日送达
          </div>
          <div style="width: 14rem;height: 18rem;background-color: rgb(138, 58, 119,.08);right: -16rem;
          top: -3rem;position: absolute;border-radius: 0.5rem;">
          <img src="../../assets/pic/home/showGoods/32.jpg" width="200.8rem" height="200rem"
          style="margin: 0.7rem;border-radius: 0.5rem;;">
          <div style="margin: 1rem 0 0 0.1rem;">
            <el-row style="padding: 0 0.5rem;">
              <el-col :span="8">
                <div id="mbButton1" style="width: 4.6rem;">
                  <div class="buttonText">收藏</div>
                  <img src="../../assets/pic/home/icons/like.png" id="buttonPic1">
                </div>
              </el-col>
              <el-col :span="2">&emsp;</el-col>
              <el-col :span="14">
                <div id="mbButton2" style="width: 7.3rem;">
                  <div class="buttonText">加入购物车</div>
                  <img src="../../assets/pic/home/icons/gwc.png" id="buttonPic2">
                </div>
              </el-col>
            </el-row>
          </div>
            
          </div>
        </div>
      <img src="../../assets/pic/home/showGoods/25.jpg" id="goodsPicbig" />
      <div class="event" @mousemove="handler"></div>
      <div class="big">
        <img src="../../assets/pic/home/showGoods/25.jpg" ref="big" />
      </div>
      <!-- 遮罩层 -->
      <div class="mask" ref="mask"></div>
      <div id="showMore">
        <div>
          <div style="margin: 0.6rem 0 0.7rem 0.8rem;font-size: 1.1rem;color: rgb(28, 58, 119,.7);">更 多 推 荐</div>
            <div v-for="item in moreList" :key="item.index" id="showMoreItem">
            <img src="../../assets/pic/home/showGoods/18.jpg" id="showMorePic" width="198rem" height="144rem"> 
            </div>
          <div>我的购物车</div>
        </div>
      </div>
    </div>
    <pageFooter />
  </div>
</template>
<script>
import navigateBar from "../../components/navigateBar";
import pageFooter from "../../components/pageFooter";
import {search_item_by_id} from '../../api/goodGoods/goodGoods'
import "./index.css";
export default {
  components: {
    navigateBar,
    pageFooter,
  },
  data() {
    return {
      goodsName: this.$route.query.name,
      goodsId:this.$route.query.id,
      currentIndex: 0,
      deadline2: Date.now(),
      moreList:[
      {
          url:'../../assets/pic/home/showGoods/18.jpg',
          name:'70周年校庆周边抱枕',
          price:'￥99.0元',
          id:'1231'
        },
        {
          url:'../../assets/pic/home/showGoods/18.jpg',
          name:'70周年校庆周边抱枕',
          price:'￥99.0元',
          id:'1231'
        },
        {
          url:'../../assets/pic/home/showGoods/18.jpg',
          name:'70周年校庆周边抱枕',
          price:'￥99.0元',
          id:'1231'
        },
        {
          url:'../../assets/pic/home/showGoods/18.jpg',
          name:'70周年校庆周边抱枕',
          price:'￥99.0元',
          id:'1231'
        },
        {
          url:'../../assets/pic/home/showGoods/18.jpg',
          name:'70周年校庆周边抱枕',
          price:'￥99.0元',
          id:'1231'
        },
      ]
    };
  },
  computed: {
    
  },
  methods: {
    searchItem() {
      let id = this.goodsId
      let data={"id":id}
      search_item_by_id(data).then(
        (res)=>{
          console.log('res',res);
        }
      )
    },
    handler(event) {
      let mask = this.$refs.mask;
      let big = this.$refs.big;
      let left = event.offsetX - mask.offsetWidth / 4;
      let top = event.offsetY - mask.offsetHeight / 4;
      //约束范围
      if (left <= 0) left = 0;
      if (left >= mask.offsetWidth) left = mask.offsetWidth;
      if (top <= 0) top = 0;
      if (top >= mask.offsetHeight) top = mask.offsetHeight;
      mask.style.left = left + "px";
      mask.style.top = top + "px";
      big.style.left = -4 * left + "px";
      big.style.top = -4 * top + "px";
    },
  },
  mounted() {
    
  },
  created(){
    this.searchItem();
  }
};
</script>
<style>
</style>