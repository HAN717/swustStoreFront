<template>
    <div class="routerViewContent">
        <!-- 顶部操作栏 -->
        <el-card>
          <span>操作栏&emsp;&emsp;</span>
          <el-button  type="primary" style="background-color: #BBDEFB !important;color:rgb(64,158,255)" size="small">新增用户</el-button>
          <span style="margin-left:57.5rem;">
            <!-- 编辑按钮 -->
            <span>
              <el-button  id="editBox" v-show="multipleSelection.length===1" type="primary" icon="el-icon-edit" 
              style="background-color: #BBDEFB !important;color:rgb(64,158,255)" size="small">编辑信息</el-button> 
              <span v-show="multipleSelection.length>1">&emsp; &emsp;&emsp;&emsp;&emsp; &nbsp;</span>
            </span> 
            <!-- 删除按钮 -->
            &nbsp;<el-button id="editBox" v-show="multipleSelection.length!==0" type="danger" icon="el-icon-delete" 
              style="color:tomato;background-color: #fad0c3 !important;" size="small">删除用户</el-button>
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
    </div>
</template>
<script>
  export default {
    data() {
      return {
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
        },]
      }
    },
    methods:{
      handleSelectionChange(val) {
        console.log('this.multipleSelection',this.multipleSelection)
        this.multipleSelection = val;
      }
    },
  }

</script>
<style>
#editBox{
  animation: showeditBox 0.7s ease-out;
}
@keyframes showeditBox{
  from{ opacity: 0;}
  to{ opacity: 1;}
}
.routerViewContent{
	animation: showContentMain 1s ease-in-out;
}
@keyframes showContentMain {
	from{ opacity: 0; }
	/* from{ transform: translateX(-85rem); } */
	to{}
}
</style>