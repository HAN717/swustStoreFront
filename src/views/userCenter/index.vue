<template>
    <div class="usercontent">
      <navigateBar />
      <div id="banner3" ></div>
        <!-- 若用户未登录则不显示内容 -->
        <div style="height:28.9rem;text-align: center;line-height: 24rem;color: #1c3a77;font-family: 幼圆;"
           v-show="isLogin==false">
          <h1><span style="letter-spacing: 1rem;">页面不见了，请先完成</span>
            <span style="color: cornflowerblue;cursor: pointer;" @click="toLogin()">登录 </span>
            <span style="letter-spacing: 1rem;">再来看看吧</span>
          </h1>
        </div>
        <div id="userContent" v-show="isLogin==true"><br>
          <!-- 用户信息 -->
          <el-card>
            <el-descriptions title="用户信息" border>
                <el-descriptions-item label="用户名">{{userName}}</el-descriptions-item>
                <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
                <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
                <el-descriptions-item label="用户身份">
                  <el-tag size="small">普通用户</el-tag>
                </el-descriptions-item>
                <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
            </el-descriptions>
          </el-card>
          <!-- 修改信息 -->
          <el-card style="margin-top: 0.4rem;">
            <el-descriptions title="信息修改" border></el-descriptions>
          </el-card>
          <!-- 用户收藏 -->
          <el-card style="margin-top: 0.4rem;">
            <el-descriptions title="我的收藏" border></el-descriptions>
              <el-table :data="tableData" height="250" border style="width: 100%">
                <el-table-column prop="date" label="日期" width="180"> </el-table-column>
                <el-table-column prop="name" label="好物" width="180"> </el-table-column>
                <el-table-column prop="address"  label="收货地址"></el-table-column>
                <el-table-column prop="status"  label="状态"></el-table-column>
              </el-table>
          </el-card>
          <!-- 用户购买记录 -->
          <el-card style="margin-top: 0.4rem;">
            <el-descriptions title="我的购物记录" border> </el-descriptions>
              <el-table :data="tableData" height="250" border style="width: 100%">
                <el-table-column prop="date" label="日期" width="180"> </el-table-column>
                <el-table-column prop="name" label="好物" width="180"> </el-table-column>
                <el-table-column prop="address"  label="收货地址"></el-table-column>
                <el-table-column prop="status"  label="状态"></el-table-column>
              </el-table>
          </el-card>
        </div>
      <toTop />
      <pageFooter/>
    </div>
  </template>
  <script>
  import navigateBar from "../../components/navigateBar";
  import pageFooter from "../../components/pageFooter"
  import toTop from "../../components/toTop";
  export default {
    components: {
      navigateBar,
      pageFooter,
      toTop
    },
    data() {
      return {
        userName:localStorage.getItem("user"),
        isLogin:this.$cookies.isKey("token"),
        tableData: [{
          date: '2024-04-02',
          name: '123',
          address: '上海市普陀区金沙江路 1518 弄',
          status:'待发货'
        },{
          date: '2024-04-02',
          name: '123',
          address: '上海市普陀区金沙江路 1518 弄',
          status:'已签收'
        },{
          date: '2024-04-02',
          name: '123',
          address: '上海市普陀区金沙江路 1518 弄',
          status:'运输中'
        },{
          date: '2024-04-02',
          name: '123',
          address: '上海市普陀区金沙江路 1518 弄',
          status:'已签收'
        },,{
          date: '2024-04-02',
          name: '123',
          address: '上海市普陀区金沙江路 1518 弄',
          status:'已签收'
        },,{
          date: '2024-04-02',
          name: '123',
          address: '上海市普陀区金沙江路 1518 弄',
          status:'已签收'
        },,{
          date: '2024-04-02',
          name: '123',
          address: '上海市普陀区金沙江路 1518 弄',
          status:'已签收'
        },,{
          date: '2024-04-02',
          name: '123',
          address: '上海市普陀区金沙江路 1518 弄',
          status:'已签收'
        },,{
          date: '2024-04-02',
          name: '123',
          address: '上海市普陀区金沙江路 1518 弄',
          status:'已签收'
        }]
      };
    },
    methods: {
      toLogin() {
        this.$router.push('/login');
      },
    },
    mounted(){
      
    }
  };
  </script>
  <style>
  .usercontent{
    background-color: rgb(28 58 119);
  }
  #userContent{
    background-color: rgb(28 58 119);
    height:61rem;
    padding: 0.8rem 3rem;
    /* animation: showUserContent 1.2s ease-in-out; */
  }
  @keyframes showUserContent {
    from{ height: 0;}
    to{}
  }
  #banner3 {
    background-image: url("../../assets/pic/bg.png");
    background-position: 0 -22rem;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 4.3rem;
    z-index: -4;
}
  </style>