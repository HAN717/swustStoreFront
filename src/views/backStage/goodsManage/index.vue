<template>
    <div class="routerViewContent">
      <!-- 顶部操作栏 -->
      <el-card>
        <span>操作栏&emsp;&emsp;</span>
        <el-button  type="primary" style="background-color: #BBDEFB !important;color:rgb(64,158,255)" size="small"
          @click="addItemDialog = true" >新增好物</el-button>
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
            @confirm="deleteItem()"
            @onConfirm="deleteItem()"
            confirm-button-text='确定'
            cancel-button-text='取消'
            icon="el-icon-info"
            icon-color="red"
            title="确定删除所选好物吗？删除后将无法恢复哦"
          >
          <el-button  slot="reference" id="editBox" v-show="multipleSelection.length!==0" type="danger" icon="el-icon-delete" 
              style="color:tomato;background-color: #fad0c3 !important;" size="small">删除好物</el-button>
          </el-popconfirm>
          </template>
        </span>
      </el-card>
      <!-- 表格 -->
      <el-card>
        <el-table
          :data="goodLists"
          border
          ref="filterTable"  @selection-change="handleSelectionChange"
          @select="selectChecked"
          style="width: 100%">
          <el-table-column type="index" width="40" label="id"> </el-table-column>
          <el-table-column prop="itemName" label="好物名称" > </el-table-column>
          <el-table-column prop="itemDesc" label="好物描述" > </el-table-column>
          <el-table-column prop="ifSale" label="是否出售" >
            <template slot-scope="scope">
              {{scope.row.ifSale===1?'是':'否'}}
            </template></el-table-column>
          <el-table-column prop="typeName" label="好物类别" > </el-table-column>
          <el-table-column prop="materialName" label="好物材质" ></el-table-column>
          <el-table-column prop="itemPrice" label="好物价格" > </el-table-column>
          <el-table-column prop="count" label="剩余数量"> </el-table-column>
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
          title="新增好物"
          :visible.sync="addItemDialog"
          width="40%"
          :before-close="handleClose">
          <el-form label-position="center" :model="formList" label-width="80px" >
            <el-row>
              <el-col :span="12">
                <el-form-item label="好物名称">
                  <el-input v-model="formList.itemName"  maxlength="6"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="是否出售">
                  <el-select v-model="formList.ifSale" placeholder="请选择">
                    <el-option
                      v-for="item in ifSaleOp"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="好物类别">
                  <el-select v-model="formList.itemType" placeholder="请选择">
                    <el-option
                    v-for="item in typeList"
                    :key="item.typeId"
                    :label="item.typeName"
                    :value="item.typeId">
                  </el-option>
                </el-select>
              </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="好物材质">
                  <el-select v-model="formList.itemMaterial" placeholder="请选择">
                    <el-option
                    v-for="item in materialList"
                    :key="item.materialId"
                    :label="item.materialName"
                    :value="item.materialId">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            </el-row>
            <el-form-item label="好物描述">
                <el-input v-model="formList.itemDesc"  maxlength="6"></el-input>
            </el-form-item>
            <el-form-item label="好物价格">
                <el-input v-model="formList.itemPrice"  maxlength="6"></el-input>
            </el-form-item>
            <el-form-item label="好物图片">
              <el-upload
                class="upload-demo"
                action="http://10.10.4.36:8080/item/add_picture"
                name="files"
                :limit="1"
                :on-success="uploadSuccess">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </el-form-item>
          </el-form>
          <el-button  style="width:575px;"
          @click="addItem()" >确认新增</el-button>
        </el-dialog>
        <!-- 编辑信息对话框 -->
        <el-dialog
          title="编辑用户信息"
          :visible.sync="editUserDialog"
          width="40%"
          :before-close="handleClose">
   
        </el-dialog>
    </div>
  </template>
  <script>
  import { Message } from 'element-ui';
  import { search_all_item , add_item , delete_item_by_id} from '../../../api/backstage/goodsManage/goodGoods'
  import { search_all_item_material , search_all_item_type} from '../../../api/common/index'
  export default {
    data() {
      return {
        itemId:'',
        editUserDialog:false,
        addItemDialog:false,
        multipleSelection: [],
        goodLists:[],
        picUrl:'',
        formList:{
          itemName:'',
          ifSale:null,
          itemAuthor:'西科大',
          itemDesc:'',
          itemMaterial:null,
          itemPrice:null,
          itemType:null
        },
        materialList:{},
        typeList:{},
        ifSaleOp:[
          {
            value:1,
            label:'是'
          },
          {
            value:0,
            label:'否'
          }
        ]
      }
    },
    methods:{
      getAllMateral(){
        search_all_item_material().then((res)=>{
          if(res.data.state==200){
            this.materialList = res.data.data;
          }
        }).catch((error)=>{
          Message.error(error)
        })
      },
      getAllType(){
        search_all_item_type().then((res)=>{
          if(res.data.state==200){
            this.typeList = res.data.data;
          }
        }).catch((error)=>{
          Message.error(error)
        })
      },
      handleSelectionChange(val) {
        // console.log('this.multipleSelection',this.multipleSelection)
        this.multipleSelection = val;
      },
      selectChecked(select,row){
        this.itemId = row.id;
      },
      handleClose() {
        this.addItemDialog = false
        this.editItemDialog = false
        this.formList.itemName='',
        this.formList.ifSale=null,
        this.formList.itemAuthor='西科大',
        this.formList.itemDesc='',
        this.formList.itemMaterial=null,
        this.formList.itemPrice=null,
        this.formList.itemType=null
      },
      uploadSuccess(res, file) {
        if(res.state===200){
          Message.success('上传成功')
          this.picUrl=res.data
        }
        else{
          Message.error(res.message)
        }
      },
      getAllItem(){
        search_all_item().then(
          (res)=>{
            if(res.data.state!==200){
              Message.warning(res.data.message)
            }
            else{
              this.goodLists = res.data.data;
            }
          }
        ).catch((error)=>{
          Message.error(error)
        })
      },
      addItem(){
        const data={
          itemName:this.formList.itemName,
          ifSale:this.formList.ifSale,
          itemAuthor:'西科大',
          itemDesc:this.formList.itemDesc,
          itemMaterial:this.formList.itemMaterial,
          itemPrice:this.formList.itemPrice,
          itemType:this.formList.itemType,
          picUrl:this.picUrl
        }
        let admin = this.$cookies.get('adminToken');
        add_item(data,admin).then((res)=>{
            if(res.data.state==200){
              this.$notify({
                title: '操作成功',
                message: '已完成好物新增！',
                type: 'success',
              });
              this.getAllItem()
            }
            else{}
        }).catch((error)=>{
          Message.error(error)
        })
        this.addItemDialog=false;  
      },
      editUser(){
        this.editUserDialog = false
        // this.$refs.filterTable.clearSelection(); // 清空所选项
        this.$notify({
            title: '操作成功',
            message: '已完成用户信息修改！',
            type: 'success',
        });
      },
      deleteItem(){
        let admin = this.$cookies.get('adminToken');
        let itemId = {
          id : this.itemId
        }
        delete_item_by_id(itemId).then((res)=>{
          if(res.data.state==200){
            this.$notify({
              title: '操作成功',
              message: '已删除所选好物信息！',
              type: 'success',
            });
            this.getAllItem()
          }else{
            Message.error(res.data.message)
          }
        }).catch((error)=>{
          Message.error(error)
        })
        // console.log('first',this.$refs)
        // this.$refs.filterTable.clearSelection(); // 清空所选项
       
      }
    },
    mounted(){
      this.getAllItem(),
      this.getAllMateral(),
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