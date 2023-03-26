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

        <!--教育板块 -->
        <div id="showlist1">
          <h3 style="margin: -3rem 0 0 38.8rem;font-size: 1.2rem; color: rgb(0,0,0,.7);position: absolute;">
            <span style="font-size:1rem;color: rgb(0,0,0,.2);">——</span>
            &emsp;教&nbsp;育&emsp;
            <span style="font-size:1rem;color: rgb(0,0,0,.2);">——</span>
          </h3>
          <el-row>
            <el-col :span="4">
              <div style="width:100%;background-image: linear-gradient(#b3e5fccc 6rem,#1c3a77) ;height: 35rem;">
                <div style="height:20rem;width: 100%;">
                  <div style="margin:3rem 0 0 1.5rem;position: absolute;color: rgb(0,0,0,.4);font-size: 1.6rem;line-height: 3rem;font-family: 幼圆;">
                    西南明珠出沧海 <br>桃李春风物华新
                  </div>
                </div>
                <div style="height:15rem;width: 100%;">
                  <!-- 卡片底部分页 -->
                  <div style="background-color:white;position:absolute;height: 6rem;width: 100%;bottom: 0;">
                    <div style="margin:2rem 0 0 32rem" id="buttomPagination">
                      <el-pagination
                        background-color:
                        layout="prev, pager, next, jumper"
                        :total="1000">
                      </el-pagination>
                    </div>
                  </div>
                  <img src="../../assets/pic/svg/list1.svg" alt="logo" width="240px" height="240px" 
                style="position:absolute;">
                </div>
                
              </div>
            </el-col>
            <el-col :span="20">
              <div id="list1ItemBox">
                <div id="listIem" v-for="(item,index) in list1" :key="index" @click="goDetils(item.url)">
                    <img src="../../assets/pic/home/scenery/fj2.png" style="width:10rem;height:10rem;margin: 1.5rem 0 0 0;">
                    <div id="itemDiscribe" style="margin:1rem 0 0 0">{{ item.title }}</div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>

        <!--历史板块 -->
        <div id="showlist2">
          <h3 style="margin: -3rem 0 0 38.8rem;font-size: 1.2rem; color: rgb(0,0,0,.7);position: absolute;">
            <span style="font-size:1rem;color: rgb(0,0,0,.2);">——</span>
            &emsp;历&nbsp;史&emsp;
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
                    <div style="margin:2rem 0 0 32rem" id="buttomPagination2">
                      <el-pagination
                        background-color:
                        layout="prev, pager, next, jumper"
                        :total="1000">
                      </el-pagination>
                    </div>
                  </div>
                  <img src="../../assets/pic/svg/list1.svg" alt="logo" width="240px" height="240px" 
                style="position:absolute;">
                </div>
              </div>
            </el-col>
            <el-col :span="20">
              <div id="list1ItemBox">
                <div id="listIem" v-for="(item,index) in list1" :key="index" @click="goDetils(item.url)">
                    <img src="../../assets/pic/home/scenery/fj1.jpg" style="width:10rem;height:10rem;margin: 1.5rem 0 0 0;">
                    <div id="itemDiscribe" style="margin:1rem 0 0 0">{{ item.title }}</div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        
        <!--风景板块 -->
        <div id="showlist3">
          <h3 style="margin: -3rem 0 0 38.8rem;font-size: 1.2rem; color: rgb(0,0,0,.7);position: absolute;">
            <span style="font-size:1rem;color: rgb(0,0,0,.2);">——</span>
            &emsp;风&nbsp;景&emsp;
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
                    <div style="margin:2rem 0 0 32rem" id="buttomPagination3">
                      <el-pagination
                        background-color:
                        layout="prev, pager, next, jumper"
                        :total="1000">
                      </el-pagination>
                    </div>
                  </div>
                  <img src="../../assets/pic/svg/list1.svg" alt="logo" width="240px" height="240px" 
                style="position:absolute;">
                </div>
              </div>
            </el-col>
            <el-col :span="20">
              <div id="list1ItemBox">
                <div id="listIem" v-for="(item,index) in list1" :key="index" @click="goDetils(item.url)">
                    <img src="../../assets/pic/home/scenery/fj4.jpg" style="width:10rem;height:10rem;margin: 1.5rem 0 0 0;">
                    <div id="itemDiscribe" style="margin:1rem 0 0 0">{{ item.title }}</div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>

        <!-- 文创板块 -->
        <div id="showlist4">
          <h3 style="margin: -3rem 0 0 38.8rem;font-size: 1.2rem; color: rgb(0,0,0,.7);position: absolute;">
            <span style="font-size:1rem;color: rgb(0,0,0,.2);">——</span>
            &emsp;文&nbsp;创&emsp;
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
                    <div style="margin:2rem 0 0 32rem" id="buttomPagination4">
                      <el-pagination
                        background-color:
                        layout="prev, pager, next, jumper"
                        :total="1000">
                      </el-pagination>
                    </div>
                  </div>
                  <img src="../../assets/pic/svg/list1.svg" alt="logo" width="240px" height="240px" 
                style="position:absolute;">
                </div>
              </div>
            </el-col>
            <el-col :span="20">
              <div id="list1ItemBox">
                <div id="listIem" v-for="(item,index) in list1" :key="index" @click="goDetils(item.url)">
                    <img src="../../assets/pic/home/scenery/fj3.jpg" style="width:10rem;height:10rem;margin: 1.5rem 0 0 0;">
                    <div id="itemDiscribe" style="margin:1rem 0 0 0">{{ item.title }}</div>
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
          title:"教育",
          index:1
        },
        {
          id:"lnb2",
          title:"历史",
          index:2
        },
        {
          id:"lnb3",
          title:"风景",
          index:3
        },
        {
          id:"lnb4",
          title:"文创",
          index:4
        }
      ],
      list1:[
        { 
          url:'https://mp.weixin.qq.com/s/9sZz3_D8W8fQacWStcQJRQ',
          title:'初春暖阳|快来一起赏花吧',
          pic:'../../assets/pic/home/scenery/fj1.jpg'
        },
        { 
          url:'https://mp.weixin.qq.com/s/9sZz3_D8W8fQacWStcQJRQ',
          title:'初春暖阳|快来一起赏花吧',
          pic:'../../assets/pic/home/scenery/fj1.jpg'
        },
        { 
          url:'https://mp.weixin.qq.com/s/9sZz3_D8W8fQacWStcQJRQ',
          title:'初春暖阳|快来一起赏花吧',
          pic:'../../assets/pic/home/scenery/fj1.jpg'
        },
        { 
          url:'https://mp.weixin.qq.com/s/9sZz3_D8W8fQacWStcQJRQ',
          title:'初春暖阳|快来一起赏花吧',
          pic:'../../assets/pic/home/scenery/fj1.jpg'
        },
        { 
          url:'https://mp.weixin.qq.com/s/9sZz3_D8W8fQacWStcQJRQ',
          title:'初春暖阳|快来一起赏花吧',
          pic:'../../assets/pic/home/scenery/fj1.jpg'
        },
        { 
          url:'https://mp.weixin.qq.com/s/9sZz3_D8W8fQacWStcQJRQ',
          title:'初春暖阳|快来一起赏花吧',
          pic:'../../assets/pic/home/scenery/fj1.jpg'
        },
        { 
          url:'https://mp.weixin.qq.com/s/9sZz3_D8W8fQacWStcQJRQ',
          title:'初春暖阳|快来一起赏花吧',
          pic:'../../assets/pic/home/scenery/fj1.jpg'
        },
        { 
          url:'https://mp.weixin.qq.com/s/9sZz3_D8W8fQacWStcQJRQ',
          title:'初春暖阳|快来一起赏花吧',
          pic:'../../assets/pic/home/scenery/fj1.jpg'
        },
        { 
          url:'https://mp.weixin.qq.com/s/9sZz3_D8W8fQacWStcQJRQ',
          title:'初春暖阳|快来一起赏花吧',
          pic:'../../assets/pic/home/scenery/fj1.jpg'
        },
        { 
          url:'https://mp.weixin.qq.com/s/9sZz3_D8W8fQacWStcQJRQ',
          title:'初春暖阳|快来一起赏花吧',
          pic:'../../assets/pic/home/scenery/fj1.jpg'
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
        case 4:
          this.targetHeight = 2305
          break;
        default: 
          this.targetHeight = 208
          break;
      }
      // 指定高度大于当前滚动条位置（即在下方）
      if(this.targetHeight > this.scrollHeight){
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