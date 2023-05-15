<template>
  <div class="content">
    <navigateBar />
    <div id="banner2"></div>
    <div id="goodGoodscontent">
      <!-- 筛选框 -->
      <div id="goodGoodsSelect" v-show="scrollHeight > 300||this.isShow==true">
        <el-form id="selectForm">
          <el-form-item label="好物材质">
            <el-select v-model="value1" clearable style="width:13.1rem" @clear="clearSelect()"
             @change="searchByMaterial" placeholder="请选择材质">
              <el-option  
              v-for="item in materialList"
              :key="item.materialId"
              :label="item.materialName"
              :value="item.materialId">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="好物类型">
            <el-select v-model="value2" clearable style="width:13.1rem" @clear="clearSelect()"
             @change="searchByType" placeholder="请选择类型">
              <el-option
              v-for="item in typeList"
              :key="item.typeId"
              :label="item.typeName"
              :value="item.typeId">
              </el-option>
            </el-select>
          </el-form-item>
          <!-- <el-form-item label="发售时间">
            <el-select v-model="value3"  style="width:13.1rem" placeholder="请选择发售时间">
              <el-option
              v-for="item in selectOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
              </el-option>
            </el-select>
          </el-form-item> -->
        </el-form>
      </div>
      <!-- 展示区 -->
      <div :id="this.isShow == true ? 'goodGoodsList':'goodGoodsList1'">
        <el-empty style="height: 20rem;" v-show="goodLists.length==0" description="暂无数据" :image-size="200"></el-empty>
        <div class="listItem"   v-for="(item,index) of goodLists" :key="index">
          <el-row>
            <el-col :span="8">
              <div  @mouseenter="mouseIsHover(index)" @mouseleave="mouseIsLeave()">
                <img  :src="item.picPath[0]" :alt="item.itemName" id="goodsPic">
                <div id="goodsMb" v-show="mouseHovering == true&& index == activeItem"> 
                  <div id="mbContent">
                    <el-row>
                      <el-col :span="8">
                        <div id="mbButton1" @click="addToCollection(item.id)">
                          <div class="buttonText">收藏</div>
                          <img src="../../assets/pic/home/icons/like.png" id="buttonPic1">
                        </div>
                      </el-col>
                      <el-col :span="2">&emsp;</el-col>
                      <el-col :span="12">
                        <div id="mbButton2" @click="addToShopCar(item.id)">
                          <div class="buttonText">加入购物车</div>
                          <img src="../../assets/pic/home/icons/gwc.png" id="buttonPic2">
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div style="font-family:幼圆;font-size:1.2rem;margin: 1.5rem 0 0 0;">{{ item.itemName }}</div>
              <div style="margin:6.6rem 0 1rem 0">售价 <span style="color:rgb(0,0,0,.7);font-size:0.9rem">
                {{item.itemPrice}} 元</span> </div>
              <div style="margin-bottom:1rem">
                种类 <el-tag type="warning">{{item.typeName}}</el-tag>&emsp; 
                材质 <el-tag>{{item.materialName}}</el-tag>&emsp;
                发售时间 <el-tag type="success">{{ showTime(item.createTime) }}</el-tag>
              </div>
              <div id="lookDetails">
                <div style="position:absolute;margin: -2.5rem 0 0 12.3rem;" @click="goDetails(item)">查看详情&emsp;<i class="el-icon-arrow-right"></i></div>
              </div>
            </el-col>
          </el-row>
        </div>
        <!-- 列表分页 -->
        <div  v-show="goodLists.length!==0" id="buttomPagination">
          <el-pagination
            background-color:
            layout="prev, pager, next, jumper"
            :total="goodLists.length">
          </el-pagination>
        </div>
      </div>
      <br>
      <!-- <div style="clear:both"></div> -->
    </div>
    <toTop />
    <pageFooter/>
  </div>
</template>
<script>
import navigateBar from "../../components/navigateBar";
import pageFooter from "../../components/pageFooter";
import toTop from "../../components/toTop";
import { search_all_item , search_item_by_material , search_item_by_type ,
  add_shop_cart , add_collection} from "../../api/goodGoods/goodGoods";
import { search_all_item_material , search_all_item_type} from '../../api/common/index'
import "./index.css"
import { Message } from 'element-ui';
export default {
  components: {
    navigateBar,
    pageFooter,
    toTop
  },
  data() {
    return {
      isShow:false,
      scrollHeight:0,
      mouseHovering: false,
      activeItem:0,
      value1:'',
      value2:'',
      value3:'',
      materialList:{},
      typeList:{},
      goodLists:[]
    };
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
    getAllMateral(){
      search_all_item_material().then((res)=>{
        if(res.data.state==200){
          this.materialList = res.data.data;
        }
      })
    },
    getAllType(){
      search_all_item_type().then((res)=>{
        if(res.data.state==200){
          this.typeList = res.data.data;
        }
      })
    },
    searchByType(event){
      const data = {
        typeId: event
      }
      search_item_by_type(data).then((res)=>{
        if(res.data.state==200){
          this.goodLists = res.data.data
        }else{
          Message.warning(res.data.message)
        }
      }).catch((err)=>{
        Message.error(err)
      })
    },
    searchByMaterial(event){
      const data = {
        materialId: event
      }
      search_item_by_material(data).then((res)=>{
        if(res.data.state==200){
          this.goodLists = res.data.data
        }else{
          Message.warning(res.data.message)
        }
      }).catch((err)=>{
        Message.error(err)
      })
    },
    clearSelect(){
      this.getAllItem()
    },
    mouseIsHover(itemNum){
      this.activeItem = itemNum;
      this.mouseHovering=true;
    },
    mouseIsLeave(){
      this.activeItem = 0;
      this.mouseHovering=false;
    },
    handleScroll() {
      var scrollTop = document.documentElement.scrollTop;
      this.scrollHeight = scrollTop;
      if (this.scrollHeight > 200) {
        this.isShow = true
      }
    },
    goDetails(item){
      let id = item.id
      this.$router.push({
        path:'/details/'+id,
        params:{ 'id':id}
      });
    },
    addToCollection(id){
      let token = this.$cookies.get('token');
      const data = {
        itemId : id
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
    addToShopCar(id){
      let token = this.$cookies.get('token');
      const data = {
        itemId : id
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
    }
  },
  mounted(){
    window.addEventListener("scroll", this.handleScroll);
    this.getAllItem();
    this.getAllMateral();
    this.getAllType();
  },
  created(){
    this.getAllItem();
  }
};
</script>
<style>
</style>