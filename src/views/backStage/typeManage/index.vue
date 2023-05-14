<template>
  <div class="routerViewContent">
    <!-- 顶部操作栏 -->
    <el-card>
      <span>操作栏&emsp;&emsp;</span>
      <el-button  type="primary" style="background-color: #BBDEFB !important;color:rgb(64,158,255)" size="small"
        @click="addItemDialog = true" >新增类别</el-button>
        <span style="margin-left:57.0rem;">
        <!-- 编辑按钮 -->
        <span>
          <el-button  id="editBox" v-show="multipleSelection.length===1" type="primary" icon="el-icon-edit" 
          style="background-color: #BBDEFB !important;color:rgb(64,158,255)" size="small"
          @click="updateItemDialog = true" >编辑信息</el-button> 
          <span v-show="multipleSelection.length>1">&emsp; &emsp;&emsp;&emsp;&emsp; &nbsp;</span>
        </span> 
        <!-- 删除按钮 -->
        &nbsp;
        <template >
        <el-popconfirm v-show="multipleSelection.length!==0"
          @confirm="deleteType()"
          @onConfirm="deleteType()"
          confirm-button-text='确定'
          cancel-button-text='取消'
          icon="el-icon-info"
          icon-color="red"
          title="确定删除所选类别吗？删除后将无法恢复哦"
        >
        <el-button  slot="reference" id="editBox" v-show="multipleSelection.length!==0" type="danger" icon="el-icon-delete" 
            style="color:tomato;background-color: #fad0c3 !important;" size="small">删除类别</el-button>
        </el-popconfirm>
        </template>
      </span>
    </el-card>
    <!-- 表格 -->
    <el-card>
      <el-table
        :data="typeList"
        border
        ref="filterTable"  @selection-change="handleSelectionChange"
        @select="selectChecked"
        style="width: 100%">
        <el-table-column type="index" label="id" width="40"> </el-table-column>
        <el-table-column prop="typeName" label="类别名称" width="120"> </el-table-column>
        <el-table-column prop="typeRemark" label="类别描述" > </el-table-column>
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
      <!-- 新增类别对话框 -->
      <el-dialog
        title="新增类别"
        :visible.sync="addItemDialog"
        width="40%"
        :before-close="handleClose">
        <el-form label-position="center" :model="formList" label-width="80px" >
          <el-form-item label="类别名称">
              <el-input v-model="formList.typeName"  maxlength="6"></el-input>
          </el-form-item>
          <el-form-item label="类别描述">
              <el-input v-model="formList.typeRemark" ></el-input>
          </el-form-item>
        </el-form>
        <el-button  style="width:575px;"
        @click="addItem()" >确认新增</el-button>
      </el-dialog>

      <!-- 修改类别对话框 -->
      <el-dialog
        title="修改类别"
        :visible.sync="updateItemDialog"
        width="40%"
        :before-close="handleClose">
        <el-form label-position="center" :model="formList" label-width="80px" >
          <el-form-item label="类别名称">
              <el-input v-model="formList.typeName"  maxlength="6"></el-input>
          </el-form-item>
          <el-form-item label="类别描述">
              <el-input v-model="formList.typeRemark" ></el-input>
          </el-form-item>
        </el-form>
        <el-button  style="width:575px;"
        @click="addItem()" >确认修改</el-button>
      </el-dialog>
  </div>
</template>
<script>
import { Message } from 'element-ui';
import { add_item_type , delete_item_type , update_item_type} from '../../../api/backstage/typeManage/index'
import { search_all_item_type } from '../../../api/common/index'
export default {
  data() {
    return {
      formList:{
        typeName:'',
        typeRemark:''
      },
      typeId:'',
      typeList:[],
      multipleSelection: [],
      addItemDialog: false,
      updateItemDialog: false,
    }
  },
  methods:{
    getAllType(){
      search_all_item_type().then((res)=>{
        if(res.data.state==200){
          this.typeList = res.data.data;
        }
      })
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    selectChecked(select,row){
      this.typeId = row.typeId;
      this.formList.typeName = row.typeName;
      this.formList.typeRemark = row.typeRemark;
    },
    handleClose() {
      this.addItemDialog = false
      this.updateItemDialog=false; 
    },
    addItem(){
      let admin = this.$cookies.get('adminToken');
      add_item_type(this.formList,admin).then((res)=>{
          if(res.data.state==200){
            this.$notify({
              title: '操作成功',
              message: '已完成类别新增！',
              type: 'success',
            });
            this.getAllType()
          }
          else{
            Message.error(res.data.message)
          }
      })
      this.addItemDialog=false;  
    },
    deleteType(){
      let admin = this.$cookies.get('adminToken');
      const data = {
        typeId:this.typeId
      }
      delete_item_type(data,admin).then((res)=>{
        if(res.data.state == 200){
          this.$notify({
            title: '操作成功',
            message: '已完成类别删除！',
            type: 'success',
          });
          this.getAllType()
        }else{
            Message.error(res.data.message)
        }
      }).catch((err)=>{
        Message.error(err)
      })
    },
    updateType(){
      let admin = this.$cookies.get('adminToken');
      const data = {
        typeId:this.typeId
      }
      update_item_type(data,admin).then((res)=>{
        if(res.data.state == 200){
          this.$notify({
            title: '操作成功',
            message: '已完成类别信息更新！',
            type: 'success',
          });
          this.getAllType()
        }else{
            Message.error(res.data.message)
        }
      }).catch((err)=>{
        Message.error(err)
      })
      this.updateItemDialog=false; 
    },
  },
  mounted(){
    this.getAllType()
  },
}
</script>
<style>
#editBox{
  animation: showeditBox 0.7s ease-out;
}
.routerViewContent{
    height: 40.5rem;
    animation: showContentMain 1s ease-in-out;
}
</style>