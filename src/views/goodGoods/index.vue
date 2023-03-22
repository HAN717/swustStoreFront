<template>
  <div class="content">
    <navigateBar />
    <div id="banner2"></div>
    <div id="mainContent">
      <!-- 筛选框 -->
      <div id="goodGoodsSelect">
        <el-form id="selectForm">
          <el-form-item label="好物材质">
            <el-select v-model="value1"  style="width:13.1rem" placeholder="请选择材质">
              <el-option
              v-for="item in selectOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="好物类型">
            <el-select v-model="value2" style="width:13.1rem" placeholder="请选择类型">
              <el-option
              v-for="item in selectOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="发售时间">
            <el-select v-model="value3"  style="width:13.1rem" placeholder="请选择发售时间">
              <el-option
              v-for="item in selectOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <!-- 展示区 -->
      <div id="goodGoodsList">
        <div class="listItem"   v-for="(item,index) of goodsList" :key="index">
          <el-row>
            <el-col :span="8">
              <div  @mouseenter="mouseIsHover(index)" @mouseleave="mouseIsLeave()">
                <img src="../../assets/pic/home/showGoods/25.jpg" :alt="item.name" id="goodsPic">
                <div id="goodsMb" v-show="mouseHovering == true&& index == activeItem"> 
                  <div id="mbContent">
                    <el-row>
                      <el-col :span="8">
                        <div id="mbButton1">
                          <div class="buttonText">收藏</div>
                          <img src="../../assets/pic/home/icons/like.png" id="buttonPic1">
                        </div>
                      </el-col>
                      <el-col :span="2">&emsp;</el-col>
                      <el-col :span="12">
                        <div id="mbButton2">
                          <div class="buttonText">加入购物车</div>
                          <img src="../../assets/pic/home/icons/gwc.png" id="buttonPic2">
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div style="font-family:幼圆;font-size:1.2rem;margin: 1.5rem 0 0 0;">{{ item.name }}</div>
            </el-col>
            <el-col :span="9">
              <div style="font-family:幼圆;font-size:0.8rem;margin: 12.5rem 0 0 5rem;">
                <div>
                  <div style="position:absolute;margin-left: 12.3rem;">查看详情&emsp;<i class="el-icon-arrow-right"></i></div>
                    
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div style="clear:both"></div>
    </div>
    <pageFooter/>
  </div>
</template>
<script>
import navigateBar from "../../components/navigateBar";
import pageFooter from "../../components/pageFooter";
import "./index.css"
export default {
  components: {
    navigateBar,
    pageFooter
  },
  data() {
    return {
      mouseHovering: false,
      activeItem:0,
      value1:'',
      value2:'',
      value3:'',
      selectOptions:[
        {
          label:'饰品',
          value:'1'
        },
        {
          label:'布艺品',
          value:'2'
        },
        {
          label:'玻璃陶瓷品',
          value:'3'
        },
      ],
      goodsList:[
        {
          url:'../../assets/pic/home/showGoods/18.jpg',
          name:'70周年校庆周边抱枕',
          price:'￥99.0元',
          id:'1'
        },
        {
          url:'../../assets/pic/home/showGoods/25.jpg',
          name:'70周年校庆周边抱枕',
          price:'￥99.0元',
          id:'22'
        },
        {
          url:'../../assets/pic/home/showGoods/25.jpg',
          name:'70周年校庆周边抱枕',
          price:'￥99.0元',
          id:'3'
        },
        {
          url:'../../assets/pic/home/showGoods/25.jpg',
          name:'70周年校庆周边抱枕',
          price:'￥99.0元',
          id:'4'
        },
        {
          url:'../../assets/pic/home/showGoods/25.jpg',
          name:'70周年校庆周边抱枕',
          price:'￥99.0元',
          id:'5'
        },
        {
          url:'../../assets/pic/home/showGoods/25.jpg',
          name:'70周年校庆周边抱枕',
          price:'￥99.0元',
          id:'6'
        },
        {
          url:'../../assets/pic/home/showGoods/25.jpg',
          name:'70周年校庆周边抱枕',
          price:'￥99.0元',
          id:'7'
        },
        {
          url:'../../assets/pic/home/showGoods/25.jpg',
          name:'70周年校庆周边抱枕',
          price:'￥99.0元',
          id:'8'
        },
        {
          url:'../../assets/pic/home/showGoods/25.jpg',
          name:'70周年校庆周边抱枕',
          price:'￥99.0元',
          id:'9'
        },
      ]
    };
  },
  methods: {
    mouseIsHover(itemNum){
      this.activeItem = itemNum;
      this.mouseHovering=true;
    },
    mouseIsLeave(){
      this.activeItem = 0;
      this.mouseHovering=false;
    },
  },
};
</script>
<style>
</style>