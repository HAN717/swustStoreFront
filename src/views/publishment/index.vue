<template>
  <div class="content">
    <navigateBar />
    <div id="banner2"></div>
    <div id="mainContent">
      <!-- 左侧导航栏 -->
        <div id="leftNavbar" v-show="scrollHeight > 200">
          <div v-for="(item,index) in navBarList" :key="index" :id="item.id" @click="toDiv(item.index)">
            {{ item.title }}
          </div>
        </div>
      <!-- 右侧展示区 -->
      <div id="rightList">

        <!--文献板块 -->
        <div id="showlist1">
          <h3 style="margin: -3rem 0 0 38.8rem;font-size: 1.2rem; color: rgb(0,0,0,.7);position: absolute;">
            <span style="font-size:1rem;color: rgb(0,0,0,.2);">——</span>
            &emsp;文&nbsp;献&emsp;
            <span style="font-size:1rem;color: rgb(0,0,0,.2);">——</span>
          </h3>
          <el-row>
            <el-col :span="4">
              <div style="width:100%;background-image: linear-gradient( #c8e6c9cc 6rem,#2f7331) ;height: 35rem;">
                <div style="height:20rem;width: 100%;">
                  <div style="margin:3rem 0 0 1.5rem;position: absolute;color: rgb(0,0,0,.4);font-size: 1.6rem;line-height: 3rem;font-family: 幼圆;">
                    西南明珠出沧海 <br>桃李春风物华新
                  </div>
                </div>
                <div style="height:15rem;width: 100%;">
                  <!-- 卡片底部分页 -->
                  <div style="background-color:white;position:absolute;height: 6rem;width: 100%;bottom: 0;">
                    <div style="margin:2rem 0 0 69rem" id="buttomPagination2">
                      <el-pagination
                        background-color:
                        layout="prev, pager, next, jumper"
                        :total="list1.length">
                      </el-pagination>
                    </div>
                  </div>
                  <img src="../../assets/pic/svg/list1.svg" alt="logo" width="240px" height="240px" 
                style="position:absolute;">
                </div>
              </div>
            </el-col>
            <el-col :span="20">
              <div id="list1ItemBox" style="margin-left: 3rem;">
                <div id="listIem" v-for="(item,index) in list1" :key="index" @click="goDetils(item.url)" style="width: 17rem;">
                  <div id="itemBox" style="width: 11.6rem;">
                    <img src="../../assets/pic/home/books/pages1.png" style="width:10rem;margin: 1rem 0 0 1rem;position: absolute;">
                    <div id="itemDiscribe" style="position: absolute;margin: 11rem 0 0 3rem;">{{ item.title }}
                    </div> 
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        
        <!--教材板块 -->
        <div id="showlist2">
          <h3 style="margin: -3rem 0 0 38.8rem;font-size: 1.2rem; color: rgb(0,0,0,.7);position: absolute;">
            <span style="font-size:1rem;color: rgb(0,0,0,.2);">——</span>
            &emsp;教&nbsp;材&emsp;
            <span style="font-size:1rem;color: rgb(0,0,0,.2);">——</span>
          </h3>
          <el-row>
            <el-col :span="4">
              <div style="width:100%;background-image: linear-gradient(  #fff9c499 6rem, #ebd82e) ;height: 35rem;">
                <div style="height:20rem;width: 100%;">
                  <div style="margin:3rem 0 0 1.5rem;position: absolute;color: rgb(0,0,0,.4);font-size: 1.6rem;line-height: 3rem;font-family: 幼圆;">
                    西南明珠出沧海 <br>桃李春风物华新
                  </div>
                </div>
                <div style="height:15rem;width: 100%;">
                  <!-- 卡片底部分页 -->
                  <div style="background-color:white;position:absolute;height: 6rem;width: 100%;bottom: 0;">
                    <div style="margin:2rem 0 0 69rem" id="buttomPagination3">
                      <el-pagination
                        background-color:
                        layout="prev, pager, next, jumper"
                        :total="list1.length">
                      </el-pagination>
                    </div>
                  </div>
                  <img src="../../assets/pic/svg/list1.svg" alt="logo" width="240px" height="240px" 
                style="position:absolute;">
                </div>
              </div>
            </el-col>
            <el-col :span="20">
              <div id="list1ItemBox" style="margin-left: 3rem;">
                <div id="listIem" v-for="(item,index) in list1" :key="index" @click="goDetils(item.url)" style="width: 17rem;">
                  <div id="itemBox" style="width: 11.6rem;">
                    <img src="../../assets/pic/home/books/rjcs.png" style="width:10rem;margin: 1rem 0 0 1rem;position: absolute;">
                    <div id="itemDiscribe" style="position: absolute;margin: 11rem 0 0 3rem;">{{ item.title }}
                    </div> 
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>

        <!-- 其他板块 -->
        <div id="showlist3">
          <h3 style="margin: -3rem 0 0 38.8rem;font-size: 1.2rem; color: rgb(0,0,0,.7);position: absolute;">
            <span style="font-size:1rem;color: rgb(0,0,0,.2);">——</span>
            &emsp;其&nbsp;他&emsp;
            <span style="font-size:1rem;color: rgb(0,0,0,.2);">——</span>
          </h3>
          <el-row>
            <el-col :span="4">
              <div style="width:100%;background-image: linear-gradient(  #ffccbccc 7rem, #f86a3f) ;height: 35rem;">
                <div style="height:20rem;width: 100%;">
                  <div style="margin:3rem 0 0 1.5rem;position: absolute;color: rgb(0,0,0,.4);font-size: 1.6rem;line-height: 3rem;font-family: 幼圆;">
                    西南明珠出沧海 <br>桃李春风物华新
                  </div>
                </div>
                <div style="height:15rem;width: 100%;">
                  <!-- 卡片底部分页 -->
                  <div style="background-color:white;position:absolute;height: 6rem;width: 100%;bottom: 0;">
                    <div style="margin:2rem 0 0 69rem" id="buttomPagination4">
                      <el-pagination
                        background-color:
                        layout="prev, pager, next, jumper"
                        :total="list1.length">
                      </el-pagination>
                    </div>
                  </div>
                  <img src="../../assets/pic/svg/list1.svg" alt="logo" width="240px" height="240px" 
                style="position:absolute;">
                </div>
              </div>
            </el-col>
            <el-col :span="20">
              <div id="list1ItemBox" style="margin-left: 3rem;">
                <div id="listIem" v-for="(item,index) in list1" :key="index" @click="goDetils(item.url)" style="width: 17rem;">
                  <div id="itemBox" style="width: 11.6rem;">
                    <img src="../../assets/pic/home/books/pages3.png" style="width:10rem;margin: 1rem 0 0 1rem;position: absolute;">
                    <div id="itemDiscribe" style="position: absolute;margin: 11rem 0 0 3rem;text-align: center;">{{ item.title }}
                    </div> 
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <!-- <div v-show="activeBarNum==2" id="showlist2"></div>
        <div v-show="activeBarNum==3" id="showlist3"></div>
        <div v-show="activeBarNum==4" id="showlist4"></div> -->
      </div>
    </div>
    <toTop />
    <pageFooter/>
  </div>
</template>
<script>
import navigateBar from "../../components/navigateBar";
import pageFooter from "../../components/pageFooter"
import toTop from "../../components/toTop";
import "./index.css"
export default {
  components: {
    navigateBar,
    pageFooter,
    toTop
  },
  data() {
    return {
      scrollHeight:0,
      metaHeight:15,
      metaTime: 10,
      targetHeight:0,
      activeBarNum:1,
      navBarList:[
        {
          id:"lnb1",
          title:"文献",
          index:1
        },
        {
          id:"lnb2",
          title:"教材",
          index:2
        },
        {
          id:"lnb3",
          title:"其他",
          index:3
        }
      ],
      list1:[
        { 
          url:'https://mp.weixin.qq.com/s/9sZz3_D8W8fQacWStcQJRQ',
          title:'软件测试技术',
          pic:'@/assets/pic/home/scenery/fj1.jpg',
          discribe:'安保处的非工会的一二三六七八计划书会啥UI是按时水岸世气温会轻武器第四十滴啊会滴啊的书画爱打谁'
        },
        { 
          url:'https://mp.weixin.qq.com/s/9sZz3_D8W8fQacWStcQJRQ',
          title:'软件测试技术',
          pic:'../../assets/pic/home/scenery/fj2.png',
          discribe:'安保处的非工会的一二三六七八计划书会啥UI是按时水岸世气温会轻武器第四十滴啊会滴啊的书画爱打谁'
        },
        { 
          url:'https://mp.weixin.qq.com/s/9sZz3_D8W8fQacWStcQJRQ',
          title:'软件测试技术',
          pic:'../../assets/pic/home/scenery/fj3.jpg',
          discribe:'安保处的非工会的一二三六七八计划书会啥UI是按时水岸世气温会轻武器第四十滴啊会滴啊的书画爱打谁'
        },{ 
          url:'https://mp.weixin.qq.com/s/9sZz3_D8W8fQacWStcQJRQ',
          title:'软件测试技术',
          pic:'../../assets/pic/home/scenery/fj4.jpg',
          discribe:'安保处的非工会的一二三六七八计划书会啥UI是按时水岸世气温会轻武器第四十滴啊会滴啊的书画爱打谁'
        },{ 
          url:'https://mp.weixin.qq.com/s/9sZz3_D8W8fQacWStcQJRQ',
          title:'软件测试技术',
          pic:'../../assets/pic/home/scenery/fj5.jpg',
          discribe:'安保处的非工会的一二三六七八计划书会啥UI是按时水岸世气温会轻武器第四十滴啊会滴啊的书画爱打谁'
        },{ 
          url:'https://mp.weixin.qq.com/s/9sZz3_D8W8fQacWStcQJRQ',
          title:'软件测试技术',
          pic:'../../assets/pic/home/scenery/fj1.jpg',
          discribe:'安保处的非工会的一二三六七八计划书会啥UI是按时水岸世气温会轻武器第四十滴啊会滴啊的书画爱打谁'
        },{ 
          url:'https://mp.weixin.qq.com/s/9sZz3_D8W8fQacWStcQJRQ',
          title:'软件测试技术',
          pic:'../../assets/pic/home/scenery/fj5.jpg',
          discribe:'安保处的非工会的一二三六七八计划书会啥UI是按时水岸世气温会轻武器第四十滴啊会滴啊的书画爱打谁'
        },{ 
          url:'https://mp.weixin.qq.com/s/9sZz3_D8W8fQacWStcQJRQ',
          title:'软件测试技术',
          pic:'../../assets/pic/home/scenery/fj1.jpg',
          discribe:'安保处的非工会的一二三六七八计划书会啥UI是按时水岸世气温会轻武器第四十滴啊会滴啊的书画爱打谁'
        },
        
      ]
    };
  },
  methods: {
    mouseIsHover(itemNum){
      this.activeBarNum = itemNum;
    },
    handleScroll() {
      var scrollTop = document.documentElement.scrollTop;
      this.scrollHeight = scrollTop;
      // console.log('当前滚轮高度:',this.scrollHeight);
    },
    toDiv(index) {
      switch (index) {
        case 1:
          this.targetHeight = 208
          break;
        case 2:
          this.targetHeight = 960
          break;
        case 3:
          this.targetHeight = 1637
          break;
        default: 
          this.targetHeight = 208
          break;
      }
      if( (document.documentElement.scrollTop===208&&this.targetHeight === 208)||
          (document.documentElement.scrollTop===960&&this.targetHeight === 960)||
          (document.documentElement.scrollTop===1637&&this.targetHeight === 1637)
        ){
        // console.log('已经到达区域了哦')
      }
      // 指定高度大于当前滚动条位置（即在下方）
      else if(this.targetHeight > this.scrollHeight){
        //高度差
        let x = this.targetHeight - this.scrollHeight;
        // 先加上余数，保证高度差能整除设定的最小移动单位
        document.documentElement.scrollTop += x%this.metaHeight;
        x -= x%this.metaHeight;
        const goto = setInterval(() => {
          document.documentElement.scrollTop  += this.metaHeight;
          x-= this.metaHeight;
          if (x == 0) {
            clearInterval(goto); //清除定时器
          }
        }, this.metaTime);
      }
      // 指定高度小于当前滚动条位置（即在上方）
      else{
        //高度差
        let x = this.scrollHeight - this.targetHeight;
        // 先减去余数，保证高度差能整除设定的最小移动单位
        document.documentElement.scrollTop -= x%this.metaHeight;
        x -= x%this.metaHeight;
        const goto = setInterval(() => {
          document.documentElement.scrollTop -= this.metaHeight;
          x-= this.metaHeight;
          if (x == 0) {
            clearInterval(goto); //清除定时器
          }
        }, this.metaTime);
      }
    },
    goDetils(url){
      // let path=window.location.protocol+'//'+url
      // const routeUrl = window.location.href=url
      window.open(url, '_blank')
    }
  },
  mounted(){
    window.addEventListener("scroll", this.handleScroll)
  }
};
</script>
<style>
</style>