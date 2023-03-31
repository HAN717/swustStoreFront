<template>
    <div class="content">
        <div class="login_mb">
            <div class="login_bg">
                <el-row>
                    <el-col :span="12">
                        <div style="background-color:rgb(255,255,255);height:560px;position: absolute;width:580px">
                            <div style="font-size: 40px;text-align: center;margin-top: 50px;
                            font-family:宋体;font-weight: 600;">Hi! 欢迎登录西科周边好物</div>
                            <!-- <img src="../../assets/pic/login/login.png" width="580px" height="580px"
                            style="position:absolute;margin-top: -50px;"> -->
                            <img src="../../assets/pic/svg/login.svg" width="480px" height="480px"
                            style="position:absolute;margin: -0.25rem 0 0 2.5rem;">
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div style="height:560px;width:580px;position: absolute;margin:60px 0 0 580px;">
                            <img src="../../assets/pic/logo.png" alt="logo" width="65px" height="65px" 
                            style="position:absolute;right: 26rem;top: 2.3rem;">
                            <div style="position:absolute;right: 11rem;top: 47px;font-size: 1.7rem;color:rgb(28, 58, 119);letter-spacing: 0.5rem;">西科周边好物</div>
                            <div style="margin:9rem 0 0 4rem;position:absolute;color: rgb(28, 58, 119);letter-spacing:1.5rem">/校园之美,尽在其中/</div>
                            <div class="input_box">
                            <div style="width:400px;margin:200px 0 0 50px;padding: 10px;">
                                <div style="height:40px;color: rgb(28, 58, 119,.5);">账号密码登录</div>
                                <div  @click="goto()" style="height:40px;color: rgb(28, 58, 119);margin: -35px 0 0 270px;font-size: 13px;
                                position: absolute;cursor: pointer;">没有账号？前去注册吧</div>
                                <el-input placeholder="请输入账号" v-model="input_name" 
                                prefix-icon="el-icon-user"></el-input>
                                <div style="height:30px"></div>
                                <el-input placeholder="请输入密码" v-model="input_pwd" show-password
                                prefix-icon="el-icon-lock"></el-input>
                                <div style="height:50px"></div>
                                <el-button @click="userLogin()" style="width:400px" >确认登录</el-button>
                            </div>
                            
                        </div>
                        </div>
                        
                    </el-col>
                </el-row>
            </div> 
        </div>       
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
    </div>    
</template>
<script>
import { Message } from "element-ui";
import { login } from "../../api/login/login";
    export default {
        data(){
            return{
                input_name:'',
                input_pwd:'',
                loginMes:'',
            }
        },
        methods:{
          goto(){
            this.$router.push("/regist")
          },
          userLogin(){
            const user = {
              account: this.input_name,
              pwd:this.input_pwd
            };
            login(user).then((res) =>{
                if(res.data.state!==200){
                  Message.warning(res.data.message)
                }
                else{
                  this.loginMes = "登录成功"
                  Message.success(this.loginMes)
                  // this.$cookies.set("token", res.data.data, {expires: "15D"});
                  localStorage.setItem("user",this.input_name)
                  this.$router.push("/")
                }
              }
            )
          }
        }
    }
</script>
<style>
.login_title{
    height: 90px;
    font-size: 30px;
}
.login_mb{
    width:100%;height:710px;
    position: absolute;
    animation:opa 4s ease-in-out infinite alternate;
}
@keyframes opa {
  0% {
    background-color: rgb(0,0,0,.0);
  }
  100% {
    background-color: rgb(255,255,255,.3);
  }
}
.login_bg{
    /* background-color: rgb(53,104,82); */
    background-color: rgb(174, 200, 253);
    height: 560px;
    width: 1100px;
    border-radius: 10px;
    margin: 80px 0 0 220px;
    overflow: hidden;
    /* width: 1100px;
    margin: 0 0 0 150px; */
}

.bg {
  animation:slide 4s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, rgb(174, 200, 253,.1) 50%, rgb(174, 200, 253,.5) 50%);
  bottom:0;
  left:-50%;
  opacity:.5;
  position:fixed;
  right:-50%;
  top:0;
  z-index:-1;
}
.bg2 {
  animation-direction:alternate-reverse;
  animation-duration:5s;
}
.bg3 {
  animation-duration:6s;
}
@keyframes slide {
  0% {
    transform:translateX(-25%);
  }
  100% {
    transform:translateX(25%);
  }
}

.el-button {
    background-color: white !important;
}
</style>