<template>
    <div class="usercontent">
      <navigateBar />
      <div id="banner3" ></div>
        <!-- 若用户未登录则不显示内容 -->
        <div style="height:28.9rem;text-align: center;line-height: 24rem;color: #1c3a77;font-family: 幼圆;"
           v-show="isLogin==false">
          <h1><span style="letter-spacing: 1rem;color: #FFFFFF;">页面不见了，请先完成</span>
            <span style="color: cornflowerblue;cursor: pointer;" @click="toLogin()">登 录 </span>
            <span style="letter-spacing: 1rem;color: #FFF">再来看看吧</span>
          </h1>
        </div>
        <div id="userContent" v-show="isLogin==true"><br>
          <!-- 用户信息 -->
          <avatar :username="userName" id="userAvatar" :size="150" background-color="rgb(200 233 246)" color="#1c3a77"></avatar>
          <el-card style="margin-top: -4.5rem;">
            <br> <br>
            <el-descriptions title="用户信息" border>
                <el-descriptions-item label="用户名">{{userName}}</el-descriptions-item>
                <el-descriptions-item label="手机号">{{formList.phoneNum}}</el-descriptions-item>
                <el-descriptions-item label="真实姓名">{{formList.userName}}</el-descriptions-item>
                <el-descriptions-item label="用户身份">
                  <el-tag size="small">普通用户</el-tag>
                </el-descriptions-item>
                <el-descriptions-item label="联系地址">{{formList.address}}</el-descriptions-item>
            </el-descriptions>
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="信息修改" name="1">
                <el-form label-position="left" :model="formList" label-width="90px" >
                  <el-row>
                    <el-col :span="8">
                      <el-form-item label="用户名" style="width:28rem" >
                        <el-input v-model="formList.account"  maxlength="6"
                        placeholder="用户名长度不超过6位且不能出现字符"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="8">
                      <el-tooltip class="item" effect="dark" content="密码已加密显示" placement="top">
                        <el-form-item label="用户密码" show-password style="width:28rem" >
                          <el-input v-model="formList.pwd" maxlength="16"
                          placeholder="密码长度大于8且小于16，并由数字和字母组合"></el-input>
                        </el-form-item>
                      </el-tooltip>
                    </el-col>
                    <el-col :span="8">
                      <el-form-item label="确认密码" style="width:28rem" > 
                          <el-input v-model="pwd" maxlength="16"
                          placeholder="再次输入密码"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item label="用户性别">
                            <el-select v-model="formList.sex" style="width:8rem" placeholder="请选择性别">
                                <el-option
                                v-for="item in userSex"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item label="真实姓名" style="width:13.6rem">
                            <el-input v-model="formList.userName" 
                            placeholder="请输入真实姓名"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="电话号码" style="width:28rem">
                            <el-input v-model="formList.phoneNum" 
                            placeholder="请输入正确电话号码格式"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7">
                      <el-form-item label="用户地址" style="width:28rem">
                        <el-input v-model="formList.address" 
                        placeholder="请输入详细地址"></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <div style="text-align: center;" id="confirmButton">
                    <el-button  @click="putInfo()" style="width:400px;">确认修改</el-button>
                  </div>
                </el-form>
              </el-collapse-item>
            </el-collapse>
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
  import Avatar from 'vue-avatar';
  import { Message } from "element-ui";
  import { update_user , get_user_info} from '../../api/userContent/userContent'
  export default {
    components: {
      navigateBar,
      pageFooter,
      toTop,
      Avatar
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
        }],
        userRoleList:[],
        pwd:'',
        err:'',
        formList:{
          id:'',
          userName:'',
          account:'',
          pwd:'',
          sex:'',
          userRole:'',
          address:'',
          phoneNum:''
        },
        userSex: [{
          value: '0',
          label: '男'
          }, {
          value: '1',
          label: '女'
          }, {
          value: '2',
          label: '其他'
        }],
        activeNames: ['2']
      };
    },
    methods: {
      toLogin() {
        this.$router.push('/login');
      },
      putInfo(){
        let user = this.$cookies.get('token');
        update_user(this.formList ,user).then(
          (res)=>{
            if(res.data.state == 200){
              this.formList = res.data.data;
              Message.success('修改成功')
            }
          }
        )
      },
      getUserInfo(){
        let user = this.$cookies.get('token');
        get_user_info(user).then(
          (res)=>{
            if(res.data.state == 200){
              this.formList = res.data.data;
            }
          }
        )
      },
      handleChange(val) {
        // console.log(val);
      }
    },
    mounted(){
      this.getUserInfo()
    }
  };
  </script>
  <style>
  .usercontent{
    background-color: #1c3a77;
  }
  #userAvatar{
    margin: auto;position:relative;
  }
  #userContent{
    background-color: rgb(28 58 119);
    height:80rem;
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
#confirmButton .el-button {
    background-color: #c8e9f6!important;
}
  </style>