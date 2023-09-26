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
                          <el-input v-model="formList.pwd" maxlength="16" show-password
                          placeholder="密码长度大于8且小于16，并由数字和字母组合"></el-input>
                        </el-form-item>
                      </el-tooltip>
                    </el-col>
                    <el-col :span="8">
                      <el-form-item label="确认密码" style="width:28rem" > 
                          <el-input v-model="pwd" maxlength="16" show-password
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
          <!-- 用户购买记录 -->
          <el-card style="margin-top: 0.4rem;">
          <el-descriptions title="我的订单" border> </el-descriptions>
          <span style="cursor: pointer;margin: -2.5rem 0 0 88%;position: absolute;color: #92b3f5;"
               @click="isShowOrder()" >{{showOrder==true ? '收起':'展开'}}</span>
            <el-table v-if="showOrder==true" :data="tableData" border style="width: 100%">
              <el-table-column prop="date" label="日期" width="180"> </el-table-column>
              <el-table-column prop="name" label="好物" width="180"> </el-table-column>
              <el-table-column prop="address"  label="收货地址"></el-table-column>
              <el-table-column prop="status"  label="状态"></el-table-column>
            </el-table>
          </el-card>
          <!-- 用户购物车 -->
          <el-card style="margin-top: 0.4rem;">
            <el-descriptions title="我的购物车" border></el-descriptions>
            <span style="cursor: pointer;margin: -2.5rem 0 0 88%;position: absolute;color: #92b3f5;"
               @click="isShowShopCart()" >{{showShopCart==true ? '收起':'展开'}}</span>
              <el-table v-show="showShopCart==true" :data="userShopCarList" border style="width: 100%"  @selection-change="handleSelectionChange"   @select="selectChecked">
                <el-table-column prop="picPath"  label="图片"  width="220">
                  <template slot-scope="scope">
                    <img :src="scope.row.picPath" alt="" style="width: 10rem;">
                  </template>
                </el-table-column>
                <el-table-column prop="itemName" label="好物名称" width="180"> 
                  <template slot-scope="scope">
                    <el-button type="text" @click="gotoDetils(scope.row.id)">{{scope.row.itemName}}</el-button>
                  </template>
                </el-table-column>
                <el-table-column prop="typeName" label="好物类别" width="180"> </el-table-column>
                <el-table-column prop="materialName"  label="好物材质"></el-table-column>
                <el-table-column type="selection" width="55"> </el-table-column>
              </el-table>
              <div style="float: right;" v-show="multipleSelection.length>0"><br>
                <template slot-scope="scope">
                  <el-button v-show="multipleSelection.length===1"
                    @click="dropShopCart(scope.row.id)" v-if="showShopCart==true"
                    type="danger" plain
                    size="big">
                    移除
                  </el-button></template>
                  <el-button v-show="multipleSelection.length>0"
                    @click="showPayDialog=true" v-if="showShopCart==true"
                    type="success" plain
                    size="big">
                    购买
                  </el-button>
                  <br><br>
                
              </div>
          </el-card>
          <!-- 用户收藏 -->
          <el-card style="margin-top: 0.4rem;">
            <el-descriptions title="我的收藏"  border></el-descriptions>
            <span style="cursor: pointer;margin: -2.5rem 0 0 88%;position: absolute;color: #92b3f5;"
               @click="isShowCollection()" >{{showCollection==true ? '收起':'展开'}}</span>
              <el-table v-if="showCollection==true" :data="userCollectionList"  border style="width: 100%">
                <el-table-column prop="picPath"  label="图片"  width="220">
                  <template slot-scope="scope">
                    <img :src="scope.row.picPath" alt="" style="width: 10rem;">
                  </template>
                </el-table-column>
                <el-table-column prop="itemName" label="好物名称" width="180"> 
                  <template slot-scope="scope">
                    <el-button type="text" @click="gotoDetils(scope.row.id)">{{scope.row.itemName}}</el-button>
                  </template>
                </el-table-column>
                <el-table-column prop="typeName" label="好物类别" width="180"> </el-table-column>
                <el-table-column prop="materialName"  label="好物材质"></el-table-column>
                <el-table-column label="操作" width="130"> 
                  <template slot-scope="scope">
                    <el-button
                      @click="dropCollect(scope.row.id)"
                      type="danger" plain
                      size="big">
                      移除
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
          </el-card>
          <!-- 支付确认弹框 -->
          <el-dialog
            title="支付确认"
            :visible.sync="showPayDialog"
            width="50%"
            :before-close="handleClose">
            <span>共选择{{multipleSelection.length}}件好物,总计{{sumPrice()}}元</span>
            <div>是否支付？</div>
            <span slot="footer" class="dialog-footer">
              <el-button @click="showPayDialog = false">取 消</el-button>
              <el-button type="primary" @click="payAllSelectItem()">确 定</el-button>
            </span>
          </el-dialog>
          <!-- 支付弹框 -->
          <el-dialog
            :visible.sync="payDialog"
            width="50%"
            :before-close="handleClose">
            <img src="data:image/png;base64,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" alt="">
          </el-dialog>
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
  import { update_user , get_user_info , search_user_shop_cart , search_user_collection ,
    remove_user_collection , remove_user_shop_cart , add_order , search_all_order , add_order_item} from '../../api/userContent/userContent'
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
        showCollection:true,
        showShopCart:true,
        showOrder:true,
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
        userOrderList:[],
        userShopCarList:[],
        userCollectionList:[],
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
        activeNames: ['2'],
        multipleSelection: [],
        showPayDialog: false,
        payDialog: false,
        orderStatus:'未支付',
        orderId:null,
        orderNo:'',
        itemCount:0,
        amountTotal:0
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
      getUserOrder(){
        let user = this.$cookies.get('token');
        search_all_order(user).then((res)=>{
          if(res.data.state==200){
            this.userOrderList = res.data.data
          }else{
            Message.error(res.data.message)
          }
        }).catch((err)=>{
          Message.error(err)
        })
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
      getUserShopCar(){
        let user = this.$cookies.get('token');
        search_user_shop_cart(user).then((res)=>{
          if(res.data.state==200){
            this.userShopCarList = res.data.data
            // console.log('first',this.userShopCarList)
          }else{
            Message.error(res.data.message);
          }
        }).catch((err)=>{
          Message.error(err)
        })
      },
      getUserCollection(){
        let user = this.$cookies.get('token');
        search_user_collection(user).then((res)=>{
          if(res.data.state==200){
            this.userCollectionList = res.data.data
            // console.log('first',this.userCollectionList)
          }else{
            Message.error(res.data.message);
          }
        }).catch((err)=>{
          Message.error(err)
        })
      },
      dropCollect(id){
        let user = this.$cookies.get('token');
        const data = {
          itemId:id
        }
        remove_user_collection(data,user).then((res=>{
          if(res.data.state==200){
            this.getUserCollection();
            Message.success('已从收藏夹中移出好物')
          }else{
            Message.error(res.data.message)
          }
        })).catch((err)=>{
          Message.error(err)
        })
      },
      dropShopCart(id){
        let user = this.$cookies.get('token');
        const data = {
          itemId:id
        }
        remove_user_shop_cart(data,user).then((res=>{
          if(res.data.state==200){
            this.getUserShopCar();
            Message.success('已从购物车中移出好物')
          }else{
            Message.error(res.data.message)
          }
        })).catch((err)=>{
          Message.error(err)
        })
      },
      handleChange(val) {
        // console.log(val);
      },
      gotoDetils(id){
        this.$router.push({
        path:'/details/'+id,
        params:{ 'id':id }
      });
      },
      isShowCollection(){
        this.showCollection = !this.showCollection
      },
      isShowShopCart(){
        this.showShopCart = !this.showShopCart
      },
      isShowOrder(){
        this.showOrder = !this.showOrder
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      selectChecked(select,row){
        this.multipleSelection = row;
      },
      sumPrice(){
        let payment = 0
        for(let i in this.multipleSelection){
          payment += this.multipleSelection[i].itemPrice
        }
        this.amountTotal = payment
        this.itemCount = this.multipleSelection.length
        return payment
      },
      handleClose() {
        this.showPayDialog = false
        this.payDialog = false
      },
      payAllSelectItem(){
        this.showPayDialog = false
        // this.payDialog = true;
        const data = {
          orderStatus:'未付款',
          userId: this.formList.id,
          // amountTotal : this.amountTotal,
          // itemCount : this.itemCount 
        }
        let orderId = null
        add_order(data).then((res)=>{
          if(res.data.state==200){
            this.orderId = res.data.data.orderId
            orderId = res.data.data.orderId
            this.orderNo = res.data.data.orderNo
            
            for(let i in this.multipleSelection){
              const data = {
                itemId: this.multipleSelection[i].id,
                orderId: orderId 
              }
              add_order_item(data).then((res)=>{
                if(res.data.state==200){
                  Message.success('购买成功')
                }else{
                  Message.error(res.data.message)
                }
              }).catch((err)=>{
                Message.error(err)
              })
            }

          }else{
            Message.error(res.data.message)
          }
        }).catch((err)=>{
          Message.error(err)
        })
      }
    },
    mounted(){
      this.getUserInfo();
      this.getUserOrder();
      this.getUserShopCar();
      this.getUserCollection()
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
    /* height:86rem; */
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