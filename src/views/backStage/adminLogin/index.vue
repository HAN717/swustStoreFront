<template>
    <div class="adminContent">
        <div class="input_box">
            <div id="loginCard">
                <div style="text-align: center;font-size: 1.3rem;margin-top: 2rem;letter-spacing: 0.6rem;">西科周边好物后台登录</div><br><br>
                <div style="height:40px;color: rgb(28, 58, 119,.5);margin-left: 3.5rem;letter-spacing: 0.6rem;">
                    /校园之美,尽在其中/
                </div>
                <br>
                <el-input placeholder="请输入账号" v-model="input_name" style="margin-left: 1.8rem;width:300px;"
                prefix-icon="el-icon-user"></el-input>
                <div style="height:30px"></div>
                <el-input placeholder="请输入密码" v-model="input_pwd" show-password  style="margin-left: 1.8rem;width:300px;"
                prefix-icon="el-icon-lock"></el-input>
                <div style="height:50px"></div>
                <el-button @click="adminLogin()" style="width:300px;margin-left: 1.8rem;" >确认登录</el-button>
            </div>
        </div>
    </div>    
</template>
<script>
import { Message } from "element-ui";
// import { admin } from "../../api/login/login";
    export default {
        data(){
            return{
                input_name:'',
                input_pwd:'',
                loginMes:'',
                token:'AASFDCASD123CWE2141DFQW1234'
            }
        },
        methods:{
          adminLogin(){
            if(this.input_name==123){
            //   this.loginMes = "登录成功"
            //   Message.success(this.loginMes)
            this.$notify({
                title: '登录成功',
                message: '管理员 '+this.input_name+' 祝您工作愉快!',
                type: 'success',
                // showClose: false
            });
              // this.$cookies.set("token", res.data.data, {expires: "15D"});
              localStorage.setItem("admin",this.input_name)
              this.$cookies.set("adminToken", this.token, {expires: "7D"});
              this.$router.push("/userManage",()=>{})
              // console.log('登陆成功',this.$cookies.isKey("token"))
            }
           
            // const user = {
            //   account: this.input_name,
            //   pwd:this.input_pwd
            // };
            // admin(user).then((res) =>{
            //     if(res.data.state!==200){
            //       Message.warning(res.data.message)
            //     }
            //     else{
            //       this.loginMes = "登录成功"
            //       Message.success(this.loginMes)
            //       // this.$cookies.set("token", res.data.data, {expires: "15D"});
            //       localStorage.setItem("user",this.input_name)
            //       this.$router.push("/")
            //     }
            //   }
            // )
          }
        },
    }
</script>
<style>
.adminContent{
    height: 44.5rem;
    width: 100%;
    background-image: linear-gradient(to right,#E1BEE7 ,#BBDEFB);
    filter: blur(2px);
}
.adminContent:hover{
    transition: all 0.3s ease-in-out;filter: blur(0px);
}
#loginCard{
    height: 400px;width:360px;margin:160px 578px;
    padding: 10px;position: absolute;
    background-color: white;
    border-radius: 0.5rem;
}
#loginCard .el-button {
    background-image: linear-gradient(to left,#E1BEE7,#BBDEFB) !important;
    color: white !important;
}
</style>