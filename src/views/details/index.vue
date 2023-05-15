<template>
  <div class="detailsContent">
    <navigateBar />
    <div id="banner2"></div>
    <div id="goodsBox">
      <div style="margin-top: .4rem;" id="goodsName">{{ this.itemInfo.itemName }}</div>
        <div style="position: absolute;margin: 5rem 0 0 32rem;width: 40rem;">
          <div style=" background-color:aliceblue;padding: 1.5rem;">
            <div style="width: 14rem;margin: 0 0 2rem -0.6rem;">
              <div style="font-family: 幼圆;"> &nbsp;介绍:
                <span style="color:rgb(118, 119, 119);font-size: 1.1rem;">{{ this.itemInfo.itemDesc }}</span>
              </div>
            </div>
            <div style="font-family: 幼圆;">售价: <span style="color:tomato;font-size: 1.5rem;">
              ￥ {{ this.itemInfo.itemPrice }}</span> </div>
          </div>
          <div style="margin:1.6rem 0 1rem 0;font-family: 幼圆">
            种类 <el-tag type="warning">{{ this.itemInfo.typeName }}</el-tag>&emsp; 
            材质 <el-tag>{{ this.itemInfo.materialName }}</el-tag>&emsp;
            发售时间 <el-tag type="success">{{ showTime( this.itemInfo.createTime) }}</el-tag>
          </div>
          <div style="color: slategray;margin-top: 2rem;">
            由西科i货运公司发货, 并提供售后服务. 现在下单, 2日后发货, 预计7日可送达
          </div>
          <div style="width: 14rem;height: 18rem;background-color: rgb(138, 58, 119,.08);right: -16rem;
          top: -3rem;position: absolute;border-radius: 0.5rem;">
          <img :src="this.itemInfo.picPath" width="200.8rem" height="200rem"
          style="margin: 0.7rem;border-radius: 0.5rem;border: 0.1rem solid #bebebe;">
          <div style="margin: 1rem 0 0 0.1rem;">
            <el-row style="padding: 0 0.5rem;">
              <el-col :span="8">
                <div id="mbButton1" style="width: 4.6rem;" @click="addToCollection()">
                  <div class="buttonText">收藏</div>
                  <img src="../../assets/pic/home/icons/like.png" id="buttonPic1">
                </div>
              </el-col>
              <el-col :span="2">&emsp;</el-col>
              <el-col :span="14">
                <div id="mbButton2" style="width: 7.3rem;" @click="addToShopCar()">
                  <div class="buttonText">加入购物车</div>
                  <img src="../../assets/pic/home/icons/gwc.png" id="buttonPic2">
                </div>
              </el-col>
            </el-row>
          </div>
            
          </div>
        </div>
      <img :src="this.itemInfo.picPath" id="goodsPicbig" style="border: 0.1rem solid #bebebe;"/>
      <div class="event" @mousemove="handler"></div>
      <div class="big">
        <img :src="this.itemInfo.picPath" ref="big" />
      </div>
      <!-- 遮罩层 -->
      <div class="mask" ref="mask"></div>
      <div id="showMore">
        <div>
          <div style="margin: 0.6rem 0 0.7rem 0.8rem;font-size: 1.1rem;color: rgb(28, 58, 119,.7);">更 多 推 荐</div>
          <div v-for="item in goodLists" :key="item.index" id="showMoreItem">
            <img :src="item.picPath" id="showMorePic" width="198rem" height="144rem" @click="goDetails(item.id)"> 
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
import { Message } from "element-ui";
import { get_item } from '../../api/details/index'
import { add_shop_cart , add_collection ,  search_all_item } from '../../api/goodGoods/goodGoods'
import "./index.css";
export default {
  components: {
    navigateBar,
    pageFooter,
  },
  data() {
    return {
      goodsId:this.$route.params.id,
      currentIndex: 0,
      deadline2: Date.now(),
      itemInfo:[],
      goodLists:[]
    };
  },
  computed: {
    
  },
  methods: {
    showTime(time){
      return this.$moment(time).format('YYYY-MM-DD');
    },
    getAllItem(){
      search_all_item().then(
        (res)=>{
          if(res.data.state!==200){
            Message.warning(res.data.message)
          }
          else{
            this.goodLists = res.data.data;
          }
        }
      )
    },
    searchItem() {
      let data={"id": this.goodsId}
      get_item(data).then(
        (res)=>{
          if(res.data.state==200){
            this.itemInfo = res.data.data
          }
          else{
            Message.error(this.data.message)
          }
        }
      ).catch((err)=>{
        Message.error(err)
      })
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
    addToCollection(){
      let token = this.$cookies.get('token');
      const data = {
        itemId : this.goodsId
      }
      add_collection(data,token).then((res)=>{
        if(res.data.state == 200){
          this.$notify({
            title: '成功',
            message: '已添加到收藏夹！',
            type: 'success',
          });
        }else{
          Message.error(res.data.message)
        }
      }).catch((err)=>{
        Message.error(err);
      })
    },
    addToShopCar(){
      let token = this.$cookies.get('token');
      const data = {
        itemId : this.goodsId
      }
      add_shop_cart(data,token).then((res)=>{
        if(res.data.state == 200){
          this.$notify({
            title: '成功',
            message: '已添加到购物车！',
            type: 'success',
          });
        }else{
          Message.error(res.data.message)
        }
      }).catch((err)=>{
        Message.error(err);
      })
    },
    goDetails(id){
      this.$router.push({
        path:'/details/'+id,
        params:{'id':id}
      });
      window.location.reload()
    },
  },
  mounted() {
    this.getAllItem();
  },
  created(){
    this.searchItem();
  }
};
</script>
<style>
</style>