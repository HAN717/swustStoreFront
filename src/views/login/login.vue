<template>
    <div class="content">
        <div class="login_mb">
            <div class="login_bg">
                <el-row>
                    <el-col :span="12">
                        <div style="background-color:rgb(255,255,255);height:560px;position: absolute;width:580px">
                            <div style="font-size: 40px;text-align: center;margin-top: 50px;
                            font-family:宋体;font-weight: 600;">Hi!&nbsp; 欢迎登录逸物</div>
                            <img src="../../assets/pic/login/login.png" width="580px" height="580px"
                            style="position:absolute;margin-top: -50px;">
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div style="height:560px;width:580px;position: absolute;margin:60px 0 0 580px;">
                           
                            <img src="../../assets/pic/home/toTop.png" alt="logo" width="65px" height="65px" 
                            style="position:absolute;right: 335px;top: 45px;">
                            <img src="../../assets/pic/text_logo_no_background.png" alt="logo" width="90px" height="60px"
                            style="position:absolute;right: 245px;top: 47px;">
                            <div style="margin:130px 0 0 150px;position:absolute;color: rgb(236,219,186);letter-spacing: 5px;">/个人闲置物品交换平台/</div>
                            <div class="input_box">
                            <div style="width:400px;margin:200px 0 0 50px;padding: 10px;">
                                <div style="height:40px;color: rgb(255,255,255,.5);">账号密码登录</div>
                                <div  @click="goto()" style="height:40px;color: rgb(236,219,186);margin: -35px 0 0 270px;font-size: 13px;
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
            document.title = '免费注册'
          },
          userLogin(){
            const user = {
              name: this.input_name,
              pwd:this.input_pwd
            };
            login(user).then((res) =>{
                if(res.data==-1){
                  this.loginMes = "账号不存在"
                  Message.warning(this.loginMes)
                }
                else if(res.data==0){
                  this.loginMes = "密码错误"
                  Message.warning(this.loginMes)
                }
                else{
                  this.loginMes = "登录成功"
                  Message.success(this.loginMes)
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
    background-color: rgb(53,104,82);
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
  background-image: linear-gradient(-60deg, rgb(53,104,82,.4) 50%, rgb(93,134,117) 50%);
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
</style>