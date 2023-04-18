<template>
  <!-- 初始导航栏 -->
  <div v-if="scrollHeight <= 70" id="topBar">
    <div :id="isHover == true ? 'navBanner' : ''"></div>
    <img
      id = 'logoPic'
      @click="navgateTo('/')"
      src="../../assets/pic/logo.png"
      alt="logo"
      width="50rem"
      height="50rem"
      style="margin: 0.6rem 0 0 4rem"
    />
    <div id="pageTitle" @click="navgateTo('/')"  @mouseenter="mouseIsHover()" @mouseleave="mouseIsLeave()">西科周边好物</div>
    <div id="text_bar">
      <!-- 根据当前路由动态设置class类名 -->
      <div :class="activeBar == '/goodGoods'? 'activeBar' : 'normal'" @click="navgateTo('/goodGoods')">西科好物</div>
      <div :class="activeBar == '/originality'? 'activeBar' : 'normal'" @click="navgateTo('/originality')">西科创意</div>
      <div :class="activeBar == '/publishment'? 'activeBar' : 'normal'" @click="navgateTo('/publishment')">西科出版</div>
      <div v-if="isLogin == false" class="bardiv" @click="navgateTo('/login')">
        登录系统
      </div>
      <div v-if="isLogin == true" class="bardiv" style="margin-top: -0.1rem;">
        <el-dropdown>
          <span class="el-dropdown-link" style="color: rgb(0,0,0);margin: -2rem 0 0  -2.5rem;font-size: 1.1rem;">
            {{ userName }}
            <!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <span @click="navgateTo('/userCenter')">用户中心</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <span @click="outLogin()">退出系统</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>

  <!-- 页面滚动后导航栏 -->
  <div id="bar" v-else>
    <div id="secondBarTitle"  @click="navgateTo('/')" style="cursor: pointer;">SWUST</div>
    <div id="text_bar" style="margin-top: -1.8rem;">
      <!-- 根据当前路由动态设置class类名 -->
      <div :class="activeBar == '/goodGoods'? 'activeBar' : 'normal'" @click="navgateTo('/goodGoods')">西科好物</div>
      <div :class="activeBar == '/originality'? 'activeBar' : 'normal'" @click="navgateTo('/originality')">西科创意</div>
      <div :class="activeBar == '/publishment'? 'activeBar' : 'normal'" @click="navgateTo('/publishment')">西科出版</div>
      <div v-if="isLogin == false" class="bardiv" @click="navgateTo('/login')">
        登录系统
      </div>
      <div v-if="isLogin == true" class="bardiv" style="margin-top: -0.1rem;">
        <el-dropdown>
          <span class="el-dropdown-link" style="color: rgb(0,0,0);margin: -2rem 0 0  -2.5rem;font-size: 1.1rem;">
            {{ userName }}
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <span @click="navgateTo('/userCenter')">用户中心</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <span @click="outLogin()">退出系统</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <!-- <div id="input_1">
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
          style="position: absolute; margin-top: -20px; height: 40px;color: white;"
        ></el-button>
      </el-input>
    </div> -->
  </div>
</template>
<script>
import "../navigateBar/navigateBar.css";
export default {
  name: "navigateBar",
  data() {
    return {
      isHover: false,
      isLogin: false,
      userName: "",
      select: "",
      inputText: "",
      scrollHeight: 0,
      dialogVisible: false,
      activeBar:0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.getLoginState();
    this.activeBar = this.$route.path;
  },
  methods: {
    mouseIsHover(){
      this.isHover=true;
    },
    mouseIsLeave(){
      this.isHover=false;
    },
    getLoginState() {
      let user = this.$cookies.get('token');
      // console.log("user", user);
      if (user !== null) {
        this.isLogin = true;
        this.userName = localStorage.getItem("user");
      }
    },
    outLogin() {
      // console.log("退出系统");
      localStorage.removeItem('user');
      this.$cookies.remove("token");
      this.isLogin = false;
      location.reload();
    },
    handleScroll() {
      // var sortMenu = document.body.scrollTop;
      var scrollTop = document.documentElement.scrollTop;
      this.scrollHeight = scrollTop;
      // console.log('滚动条高度',this.scrollHeight);
    },
    navgateTo(dataPath) {
      this.$router.push(dataPath);
      // document.title = "欢迎登录";
    },
  },
};
</script>
<style>
</style>