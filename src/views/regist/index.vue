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
                <div style="width:173px;height:50px;background-color: rgb(236,219,186,.7);margin: 20px 0 0 42px;
                border-radius: 10px;" @click="goto()">
                    <img src="../../assets/pic/logo.png" alt="logo" width="40rem" height="40rem" 
                        style="margin:0.35rem 0 0 0.75rem ;position: absolute;">
                    <div width="90px" height="55px" style="margin:0px 0 0 70px ;position: absolute;font-family: 幼圆;
                    margin: 0.8rem 0 0 4.5rem;font-size: 1.4rem;color:rgb(0,0,0,.7)">用户注册</div>
                </div>
                <div style="font-size:26px;position: relative;margin: -35px 0 0 720px;font-family: 幼圆;
                letter-spacing: 10px;">免费注册西科周边好物用户</div>
                <img src="../../assets/pic/svg/regist.svg" alt="logo" width="500px" height="500px" 
                style="position:absolute;right: 205px;top: 148px;">
                <div class="formcontent">
                    <el-form label-position="left" :model="formList" label-width="80px" >
                        <el-form-item label="用户名">
                            <el-input v-model="formList.account"  maxlength="6"
                            placeholder="用户名长度不超过6位且不能出现字符"></el-input>
                        </el-form-item>
                        <el-form-item label="用户密码" >
                            <el-input v-model="formList.pwd" maxlength="16"
                            placeholder="密码长度大于8且小于16，并由数字和字母组合"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码"> 
                            <el-input v-model="pwd" maxlength="16"
                            placeholder="再次输入密码"></el-input>
                        </el-form-item>
                         <el-row>
                            <el-col :span="12">
                                <el-form-item label="用户性别">
                                    <el-select v-model="formList.sex" style="width:12rem" placeholder="请选择性别">
                                        <el-option
                                        v-for="item in userSex"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="用户身份">
                                    <el-select v-model="formList.userRole" style="width:13.1rem" placeholder="请选择身份">
                                        <el-option
                                        v-for="item in userRoleList"
                                        :key="item.roleId"
                                        :label="item.roleName"
                                        :value="item.roleId">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="电话号码" style="width:17rem">
                                    <el-input v-model="formList.phoneNum" 
                                    placeholder="请输入正确电话号码格式"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="真实姓名" >
                                    <el-input v-model="formList.userName" 
                                    placeholder="请输入用户真实姓名"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-form-item label="用户地址">
                            <el-input v-model="formList.address" 
                            placeholder="请输入详细地址"></el-input>
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
import { userReg , getUserRole } from "../../api/regist/regist"
export default {
    data(){
        return{
            activeNum:1,
            formList:{
                userName:'',
                account:'',
                pwd:'',
                sex:'',
                userRole:'',
                address:'',
                phoneNum:''
            },
            pwd:'',
            err:'',
            infoIsOk:true,
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
            userRoleList:[]
        }
    },
    methods:{
        goto(){
            this.$router.push("/")
        },
        getUserRoleList(){
            getUserRole().then((res)=>{
                console.log(res.data.state)
                if(res.data.state===200){
                    this.userRoleList = res.data.data;
                    // console.log(this.userRoleList)
                }
                else{
                    Message.warning(res.message)
                }
            })
        },
        listenInput(){
            this.infoIsOk = true
            if(this.formList.userName==''||this.formList.userPwd==''){
                Message.warning("请填写完整信息")
                this.infoIsOk=false
            }
            // var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/
            // if(reg.test(this.formList.userPwd)==false){
            //     this.pwd = ''
            //     Message.warning("请确保密码在8-16位，且为数字和字母组合")
            //     this.infoIsOk=false
            // }
            // else{
            //     if(this.formList.userPwd!==this.pwd){
            //         this.pwd = ''
            //         Message.warning("请重新确认密码")
            //         this.infoIsOk=false
            //     }
            // }
            if(this.infoIsOk==true){
                // const regList = {
                //     userName : this.formList.userName,
                //     userPwd : this.formList.userPwd
                // }
                let dataList ={
                    userName:this.formList.userName,
                    account:this.formList.account,
                    pwd:this.formList.pwd,
                    sex:this.formList.sex,
                    userRole:this.formList.userRole,
                    address:this.formList.address,
                    phoneNum:this.formList.phoneNum
                }
                userReg(dataList).then((res)=>{
                    if(res.data.state==200){
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
    mounted(){
        this.getUserRoleList()
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
    margin: -540px auto ;
    border-radius: 10px;
}
.yuan2{
    animation:return_c1 3s ease-in-out infinite alternate;
}
.yuan4{
    animation:return_c2 3s ease-in-out infinite alternate;
}
@keyframes return_c1 {
  0% {  top: -380px; }
  100% {  top: -200px; }
}
@keyframes return_c2 {
  0% { left:180px; }
  100% { left:130px; }
}
.yuan3{
    animation:return_c3 3s ease-in-out infinite alternate;
}
@keyframes return_c3 {
  0% { top: 20px; }
  100% { }
}
.formcontent{
    border: 2px dashed rgb(235,218,185);
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