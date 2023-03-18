<template>
    <div >
        <div class="maincont">
            <img class="yuan1" src="../../assets/pic/regist/c5.png" style="margin: -180px 0 0 1200px;">
            <img class="yuan2" src="../../assets/pic/regist/c1.png" style="top: -280px;left:-100px;position: relative;">
            <img  src="../../assets/pic/regist/c2.png" style="top: 180px;left:-290px;position: relative;
            z-index: -1;">
            <img class="yuan3" src="../../assets/pic/regist/c3.png" >
            <img class="yuan4" src="../../assets/pic/regist/c4.png" style="bottom: -160px;left:150px;position: relative;">

            <div class="regcontent">
                <div style="width:170px;height:60px;background-color: rgb(93,134,117);margin: 30px 0 0 40px;
                border-radius: 10px;">
                    <img src="../../assets/pic/home/toTop.png" alt="logo" width="65px" height="65px" 
                        style="margin:-4px 0 0 0 ;position: absolute;">
                    <img src="../../assets/pic/text_logo_no_background.png" alt="logo" width="90px" height="55px"
                        style="margin:0px 0 0 70px ;position: absolute;">
                </div>
                <div style="font-size:26px;position: relative;margin: -50px 0 0 760px;font-family: 幼圆;
                letter-spacing: 10px;">免费注册逸物平台用户</div>
                <div style="font-size:26px;position: relative;margin: 60px 0 0 40px;font-family: 幼圆;
                letter-spacing: 10px;line-height: 50px;">全国十四亿分之一的人都在用的<br>个人闲置物品交换系统</div>
                <img src="../../assets/pic/regist/register.png" alt="logo" width="500px" height="500px" 
                style="position:absolute;right: 205px;top: 125px;">
                <div class="formcontent">
                    <el-form label-position="left" :model="formList" label-width="80px" >
                        <el-form-item label="用户名">
                            <el-input v-model="formList.userName"  maxlength="6"
                            placeholder="用户名长度不超过6位且不能出现字符"></el-input>
                        </el-form-item>
                        <el-form-item label="用户密码" >
                            <el-input v-model="formList.userPwd" maxlength="16"
                            placeholder="密码长度大于8且小于16，并由数字和字母组合"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码"> 
                            <el-input v-model="pwd" maxlength="16"
                            placeholder="再次输入密码"></el-input>
                        </el-form-item>
                        <el-button  @click="listenInput()" style="width:580px;">确认注册</el-button>
                    </el-form>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import { Message } from "element-ui";
import { regist } from "../../api/regist/regist"
export default {
    data(){
        return{
            activeNum:1,
            formList:{
                userName:'',
                userPwd:''
            },
            pwd:'',
            err:'',
            infoIsOk:true
        }
    },
    methods:{
        listenInput(){
            this.infoIsOk = true
            if(this.formList.userName==''||this.formList.userPwd==''){
                Message.warning("请填写完整信息")
                this.infoIsOk=false
            }
            var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/
            if(reg.test(this.formList.userPwd)==false){
                this.pwd = ''
                Message.warning("请确保密码在8-16位，且为数字和字母组合")
                this.infoIsOk=false
            }
            else{
                if(this.formList.userPwd!==this.pwd){
                    this.pwd = ''
                    Message.warning("请重新确认密码")
                    this.infoIsOk=false
                }
            }
            if(this.infoIsOk==true){
                const regList = {
                    userName : this.formList.userName,
                    userPwd : this.formList.userPwd
                }
                regist(regList).then((res)=>{
                    if(res.data=='注册成功'){
                        Message.success("注册成功！")
                        this.$router.push("/login")
                    }
                    else{
                        Message.warning(res.data)
                    }
                })
            }
        }
    },
}
</script>
<style>
.maincont{
    overflow: hidden;
    /* background-color:cadetblue; */
    width: 100%;
    height: 712px;
}
.regcontent{
    overflow: hidden;
    background-color: white;
    height: 600px;
    width: 1200px;
    margin: -545px auto ;
    border-radius: 10px;
}
.yuan2{
    animation:return_c1 4s ease-in-out infinite alternate;
}
.yuan4{
    animation:return_c2 4s ease-in-out infinite alternate;
}
@keyframes return_c1 {
  0% {  top: -280px; }
  100% {  top: -200px; }
}
@keyframes return_c2 {
  0% { left:150px; }
  100% { left:130px; }
}
.yuan3{
    animation:return_c3 4s ease-in-out infinite alternate;
}
@keyframes return_c3 {
  0% { top: 20px; }
  100% { }
}
.formcontent{
    border: 2px dashed rgb(93,134,117);
    border-radius: 10px;
    padding: 20px;
    margin: 30px 0 0 45px;
    width: 580px;
    background-color: white;
}
.tips{
    position:absolute;
    margin-top: -10px;
    font-size: 12px;
    color: tomato;
}
</style>