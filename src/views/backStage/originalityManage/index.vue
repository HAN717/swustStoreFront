<template>
    <div class="routerViewContent">
      <!-- 顶部操作栏 -->
      <el-card>
        <span>操作栏&emsp;&emsp;</span>
        <el-button  type="primary" style="background-color: #BBDEFB !important;color:rgb(64,158,255)" size="small"
          @click="addUserDialog = true" >新增创意</el-button>
        <span style="margin-left:57.0rem;">
          <!-- 编辑按钮 -->
          <span>
            <el-button  id="editBox" v-show="multipleSelection.length===1" type="primary" icon="el-icon-edit" 
            style="background-color: #BBDEFB !important;color:rgb(64,158,255)" size="small"
            @click="editUserDialog = true" >编辑信息</el-button> 
            <span v-show="multipleSelection.length>1">&emsp; &emsp;&emsp;&emsp;&emsp; &nbsp;</span>
          </span> 
          <!-- 删除按钮 -->
          &nbsp;
          <template >
          <el-popconfirm v-show="multipleSelection.length!==0"
            @confirm="deleteUser()"
            @onConfirm="deleteUser()"
            confirm-button-text='确定'
            cancel-button-text='取消'
            icon="el-icon-info"
            icon-color="red"
            title="确定删除所选创意吗？删除后将无法恢复哦"
          >
          <el-button  slot="reference" id="editBox" v-show="multipleSelection.length!==0" type="danger" icon="el-icon-delete" 
              style="color:tomato;background-color: #fad0c3 !important;" size="small">删除创意</el-button>
          </el-popconfirm>
          </template>
        </span>
      </el-card>
      <!-- 表格 -->
      <el-card>
        <el-table
            :data="tableData"
            border
            ref="filterTable"  @selection-change="handleSelectionChange"
            style="width: 100%">
            <el-table-column type="index" width="40"> </el-table-column>
            <el-table-column prop="userRole" label="用户身份" width="91">
                <template slot-scope="scope">
                    <el-tag  v-if="scope.row.userRole=='普通用户'" type="primary" disable-transitions>{{scope.row.userRole}}</el-tag>  
                    <el-tag  v-else-if="scope.row.userRole=='学生'" type="success" disable-transitions>{{scope.row.userRole}}用户</el-tag>  
                    <el-tag  v-else type="warning" disable-transitions>教职员工</el-tag>   
                </template>
            </el-table-column>
            <el-table-column prop="date" label="注册日期" width="110"> </el-table-column>
            <el-table-column prop="userName" label="姓名" width="100"> </el-table-column>
            <el-table-column prop="sex" label="性别" width="60"> </el-table-column>
            <el-table-column prop="account" label="账号名称" width="150"> </el-table-column>
            <el-table-column prop="pwd" label="密码" width="150"> </el-table-column>
            <el-table-column prop="phoneNum" label="电话" width="140"> </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
            <el-table-column type="selection" width="55"> </el-table-column>
        </el-table>
        <br>
        <!-- 底部分页 -->
        <div id="buttomPagination" style="margin-left: 41rem;">
            <el-pagination
            background-color:
            layout="prev, pager, next, jumper"
            :total="1000">
            </el-pagination>
        </div>
      </el-card>
      <!-- 对话框 -->
        <!-- 新增用户对话框 -->
        <el-dialog
          title="新增用户"
          :visible.sync="addUserDialog"
          width="40%"
          :before-close="handleClose">
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
            <el-button  style="background-color: #BBDEFB !important;width:575px;"
            @click="addUser()" >确认新增</el-button>
          </el-form>
        </el-dialog>
        <!-- 编辑信息对话框 -->
        <el-dialog
          title="编辑用户信息"
          :visible.sync="editUserDialog"
          width="40%"
          :before-close="handleClose">
          <el-form label-position="left" :model="formList" label-width="80px" >
            <el-form-item label="用户名">
                <el-input v-model="formList.account"  maxlength="6"
                placeholder="用户名长度不超过6位且不能出现字符"></el-input>
            </el-form-item>
            <el-form-item label="用户密码" >
                <el-input v-model="formList.pwd" maxlength="16"
                placeholder="密码长度大于8且小于16，并由数字和字母组合"></el-input>
            </el-form-item>
            <!-- <el-form-item label="确认密码"> 
                <el-input v-model="pwd" maxlength="16"
                placeholder="再次输入密码"></el-input>
            </el-form-item> -->
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
            <el-button  style="background-color: #BBDEFB !important;width:575px;"
            @click="editUser()" >确认修改</el-button>
          </el-form>
        </el-dialog>
    </div>
  </template>
  <script>
  import { Message } from 'element-ui';
  import { getUserRole } from "../../../api/regist/regist"
  export default {
    data() {
      return {
        addUserDialog:false,
        editUserDialog:false,
        multipleSelection: [],
        tableData: [{
          date: '2023-04-02',
          userName: '王小虎',
          sex: '男',
          account: '王小虎666',
          pwd: '124124412',
          address: '上海市普陀区金沙江路 1518 弄',
          userRole:'普通用户',
          phoneNum:'18333334567'
        },
        {
          date: '2023-04-02',
          userName: '王小虎',
          sex: '男',
          account: '王小虎666',
          pwd: '124124412',
          address: '上海市普陀区金沙江路 1518 弄',
          userRole:'学生',
          phoneNum:'18333334567'
        },
        {
          date: '2023-04-02',
          userName: '王小虎',
          sex: '男',
          account: '王小虎666',
          pwd: '124124412',
          address: '上海市普陀区金沙江路 1518 弄',
          userRole:'普通用户',
          phoneNum:'18333334567'
        },{
          date: '2023-04-02',
          userName: '王小虎',
          sex: '男',
          account: '王小虎666',
          pwd: '124124412',
          address: '上海市普陀区金沙江路 1518 弄',
          userRole:'教职工',
          phoneNum:'18333334567'
        },{
          date: '2023-04-02',
          userName: '王小虎',
          sex: '男',
          account: '王小虎666',
          pwd: '124124412',
          address: '上海市普陀区金沙江路 1518 弄',
          userRole:'普通用户',
          phoneNum:'18333334567'
        },{
          date: '2023-04-02',
          userName: '王小虎',
          sex: '男',
          account: '王小虎666',
          pwd: '124124412',
          address: '上海市普陀区金沙江路 1518 弄',
          userRole:'普通用户',
          phoneNum:'18333334567'
        },{
          date: '2023-04-02',
          userName: '王小虎',
          sex: '男',
          account: '王小虎666',
          pwd: '124124412',
          address: '上海市普陀区金沙江路 1518 弄',
          userRole:'普通用户',
          phoneNum:'18333334567'
        }],
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
      handleSelectionChange(val) {
        // console.log('this.multipleSelection',this.multipleSelection)
        this.multipleSelection = val;
      },
      handleClose() {
        this.addUserDialog = false
        this.editUserDialog = false
      },
      getUserRoleList(){
        getUserRole().then((res)=>{
          if(res.data.state===200){
              this.userRoleList = res.data.data;
              // console.log(this.userRoleList)
          }
          else{
              Message.warning(res.message)
          }
        })
      },
      addUser(){
        this.dialogVisible = false
        this.$notify({
            title: '操作成功',
            message: '已完成新增用户！',
            type: 'success',
            // showClose: false
        });
      },
      editUser(){
        this.editUserDialog = false
        this.$refs.filterTable.clearSelection(); // 清空所选项
        this.$notify({
            title: '操作成功',
            message: '已完成用户信息修改！',
            type: 'success',
        });
      },
      deleteUser(){
        // console.log('first',this.$refs)
        this.$refs.filterTable.clearSelection(); // 清空所选项
        this.$notify({
            title: '操作成功',
            message: '已删除所选用户信息！',
            type: 'success',
        });
      }
    },
    mounted(){
      // this.getUserRoleList()
    },
  }
  </script>
  <style>
  #editBox{
    animation: showeditBox 0.7s ease-out;
  }
  .routerViewContent{
      animation: showContentMain 1s ease-in-out;
  }
  </style>