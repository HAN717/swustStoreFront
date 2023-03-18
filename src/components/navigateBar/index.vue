<template>
  <div v-if="scrollHeight <= 130" id="topBar">
    <img
      src="../../assets/pic/logo.png"
      alt="logo"
      width="80rem"
      height="80rem"
      style="margin: 0.3rem 0 0 1rem"
    />
    <div id="pageTitle">西科周边好物商城</div>
    <!-- <div id="input">
          <el-input placeholder="请输入内容" v-model="inputText" class="input-with-select" style="width:600px">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="西科好物" value="1"></el-option>
              <el-option label="西科创意" value="2"></el-option>
              <el-option label="西科出版" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search" style="position:absolute;margin-top: -20px;height: 40px;"></el-button>
          </el-input>
        </div>       -->
    <div id="text_bar">
      <div  @click="navgateTo('/goodGoods')">西科好物</div>
      <div  @click="navgateTo('/originality')">西科创意</div>
      <div  @click="navgateTo('/publishment')">西科出版</div>
      <div v-if="isLogin == false" class="bardiv" @click="navgateTo('/login')">
        登录系统
      </div>
      <div v-if="isLogin == true" class="bardiv">
        欢迎
        <el-dropdown>
          <span class="el-dropdown-link" style="color: rgb(236, 219, 186)">
            &nbsp;{{ userName }}
            <!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              ><span @click="outLogin()">退出系统</span></el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <!-- <div style="position: absolute; color: rgb(0, 0, 0); margin: -60px 0 0 1070px">
      <div style="color: black">
        <span><i class="el-icon-location-information"></i>&nbsp;绵阳</span
        ><span>&emsp;</span>
        <i v-if="wea_img == 'yin'" class="el-icon-cloudy-and-sunny"></i>
        <i v-else-if="wea_img == 'qing'" class="el-icon-sunny"></i>
        <i v-else-if="wea_img == 'yu'" class="el-icon-light-rain"></i>
        <i v-else-if="wea_img == 'yun'" class="el-icon-cloudy"></i>&nbsp;{{
          tem
        }}°C
      </div>
    </div> -->
  </div>
  <div id="bar" v-else>
    <div id="secondBarTitle">西科周边好物</div>
    <div id="input_1">
      <el-input
        placeholder="请输入内容"
        v-model="inputText"
        class="input-with-select"
      >
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="逸物" value="1"></el-option>
          <el-option label="精选" value="2"></el-option>
          <el-option label="同城" value="3"></el-option>
        </el-select>
        <el-button
          slot="append"
          icon="el-icon-search"
          style="position: absolute; margin-top: -20px; height: 40px"
        ></el-button>
      </el-input>
    </div>
  </div>
</template>
<script>
import { getWether } from "../../api/wether/wether";
import "../navigateBar/navigateBar.css";
export default {
  name: "navigateBar",
  data() {
    return {
      isLogin: false,
      userName: "",
      select: "",
      inputText: "",
      scrollHeight: 0,
      dialogVisible: false,
      wea: "",
      tem: "",
      wea_img: "",
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll), this.getLoginState();
  },
  created() {
    this.getWeaAndTem();
  },
  methods: {
    getLoginState() {
      let user = localStorage.getItem("user");
      console.log("user", user);
      if (user !== null) {
        this.isLogin = true;
        this.userName = user;
      }
    },
    outLogin() {
      console.log("退出系统");
      localStorage.clear();
      location.reload();
    },
    handleScroll() {
      // var sortMenu = document.body.scrollTop;
      var scrollTop = document.documentElement.scrollTop;
      this.scrollHeight = scrollTop;
      // console.log('滚动条高度',this.scrollHeight);
    },
    getWeaAndTem() {
      const dataList = {
        appid: "55297681", // 账号ID
        appsecret: "PZcXgN1m", // 账号密钥
        city: "绵阳", // 城市名称,不要带市和区
        version: "v61",
      };
      getWether(dataList).then((res) => {
        this.wea = res.data.wea;
        this.tem = res.data.tem;
        this.wea_img = res.data.wea_img;
      });
    },
    navgateTo(dataPath) {
      this.$router.push(dataPath);
      document.title = "欢迎登录";
    },
  },
};
</script>
<style>
</style>