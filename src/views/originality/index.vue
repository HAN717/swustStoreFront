<template>
  <div class="content">
    <navigateBar />
    <div id="banner2"></div>
    <div id="mainContent">
      <!-- 左侧导航栏 -->
        <div id="leftNavbar" v-show="scrollHeight > 200">
          <div v-for="(item,index) in navBarList" :key="index" :id=" item.id"  @click="toDiv(item.index)">
            {{ item.title }}
          </div>
        </div>
      <!-- 右侧展示区 -->
      <div id="rightList">

        <!--风景板块 -->
        <div id="showlist1">
          <h3 style="margin: -3rem 0 0 38.8rem;font-size: 1.2rem; color: rgb(0,0,0,.7);position: absolute;">
            <span style="font-size:1rem;color: rgb(0,0,0,.2);">——</span>
            &emsp;风&nbsp;景&emsp;
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
                  <div id="itemBox">
                    <img :src="item.pic">
                    <div id="itemDiscribe">{{ item.title }}
                    </div> 
                  </div>
                    <!-- <div style="margin:-6rem 0 0 12.6rem;position: absolute;display: flex;width: 10rem;font-size: 0.8rem;color:rgb(0,0,0,.7)">{{ item.discribe }}</div> -->
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
                <div id="listIem" v-for="(item,index) in list2" :key="index" @click="goDetils(item.url)">
                  <div id="itemBox">
                    <img :src="item.pic">
                    <div id="itemDiscribe">{{ item.title }}
                    </div> 
                  </div>
                    <!-- <div style="margin:-6rem 0 0 12.6rem;position: absolute;display: flex;width: 10rem;font-size: 0.8rem;color:rgb(0,0,0,.7)">{{ item.discribe }}</div> -->
                </div>
              </div>
            </el-col>
          </el-row>
        </div>

        <!-- 文创板块 -->
        <div id="showlist3">
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
                <div id="listIem" v-for="(item,index) in list3" :key="index" @click="goDetils(item.url)">
                  <div id="itemBox">
                    <img :src="item.pic">
                    <div id="itemDiscribe">{{ item.title }}
                    </div> 
                  </div>
                    <!-- <div style="margin:-6rem 0 0 12.6rem;position: absolute;display: flex;width: 10rem;font-size: 0.8rem;color:rgb(0,0,0,.7)">{{ item.discribe }}</div> -->
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
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
          title:"风景",
          index:1
        },
        {
          id:"lnb2",
          title:"历史",
          index:2
        },
        {
          id:"lnb3",
          title:"文创",
          index:3
        }
      ],
      list1:[
        { 
          url:'https://mp.weixin.qq.com/s/9sZz3_D8W8fQacWStcQJRQ',
          title:'点击领取|夏日西科大',
          pic:'https://img2.baidu.com/it/u=4017775282,3880433396&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
        },
        { 
          url:'https://mp.weixin.qq.com/s/9sZz3_D8W8fQacWStcQJRQ',
          title:'湖边漫步|享休闲时光',
          pic:'https://img0.baidu.com/it/u=2613849618,2702453330&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
        },
        { 
          url:'https://mp.weixin.qq.com/s/sCSc9mGGLCo7xwPhj-zBQA',
          title:'花时来信|花开的五月',
          pic:'https://img0.baidu.com/it/u=3164847065,4086242804&fm=253&fmt=auto&app=138&f=JPEG?w=721&h=500',
        },
        { 
          url:'https://mp.weixin.qq.com/s/9sZz3_D8W8fQacWStcQJRQ',
          title:'拾光|阳光照耀的食堂',
          pic:'https://img1.baidu.com/it/u=4178695626,1778943187&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
        },{ 
          url:'https://mp.weixin.qq.com/s/9sZz3_D8W8fQacWStcQJRQ',
          title:'觅食|诱人科大美食',
          pic:'https://img2.baidu.com/it/u=186373152,1236110240&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
        },{ 
          url:'https://mp.weixin.qq.com/s/9sZz3_D8W8fQacWStcQJRQ',
          title:'温暖耀眼|西科夜晚',
          pic:'https://img1.baidu.com/it/u=2135511749,706079808&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
        },
        
      ],
      list2:[
        { 
          url:'https://mp.weixin.qq.com/s/9sZz3_D8W8fQacWStcQJRQ',
          title:'历史渊源|清华楼',
          pic:'https://img1.baidu.com/it/u=2352911326,3523601810&fm=253&fmt=auto&app=138&f=JPEG?w=764&h=500',
        },
        { 
          url:'https://baijiahao.baidu.com/s?id=1765887586798613816',
          title:'匠心筑梦|新时代奋斗者',
          pic:'https://pic.rmb.bdstatic.com/bjh/news/839ce6fb3c44a18c6f48612a581ed0b2.jpeg',
        },
        { 
          url:'https://baijiahao.baidu.com/s?id=1764990800950812231',
          title:'表彰|青春的荣光！',
          pic:'https://pic.rmb.bdstatic.com/bjh/news/9a3c0a9f2715bd823f7e2b12ada2b95e.jpeg',
        },
        { 
          url:'https://baijiahao.baidu.com/s?id=1764263603282951379',
          title:'跃进|创新成果百余项',
          pic:'https://pic.rmb.bdstatic.com/bjh/news/8879fd566f2a388339edb0f64951206d.jpeg',
        },{ 
          url:'https://baijiahao.baidu.com/s?id=1761834299834244122',
          title:'陇上花开|追光十年！',
          pic:'https://pic.rmb.bdstatic.com/bjh/news/e456e8c9bb89076052e3b9ce4bb96491.jpeg',
        },{ 
          url:'https://mp.weixin.qq.com/s/9sZz3_D8W8fQacWStcQJRQ',
          title:'科大限定|镜头下青春的活力',
          pic:'https://pic.rmb.bdstatic.com/bjh/news/149cea5e5d7a32ea82e049c123de4796.jpeg',
        },
        
      ],
      list3:[
        { 
          url:'https://mp.weixin.qq.com/s/9sZz3_D8W8fQacWStcQJRQ',
          title:'《美丽西科》系列文创',
          pic:'https://pic.rmb.bdstatic.com/bjh/news/f71d1fbcafbe7d3c6baa287cb64665aa.jpeg',
        },
        { 
          url:'https://baijiahao.baidu.com/s?id=1765887586798613816',
          title:'好“柿”成“兔”系列',
          pic:'https://pic.rmb.bdstatic.com/bjh/news/ece74746e2236f63bc665561eec55690.jpeg',
        },
        { 
          url:'https://baijiahao.baidu.com/s?id=1764990800950812231',
          title:'《科大风貌》系列',
          pic:'https://pic.rmb.bdstatic.com/bjh/news/27fb401c1f1f3714a6725ba875bdf62b.jpeg',
        },
        { 
          url:'https://baijiahao.baidu.com/s?id=1764263603282951379',
          title:'《万象西科》系列',
          pic:'https://pic.rmb.bdstatic.com/bjh/news/22e45779c207a604817394a2cd74c1aa.jpeg',
        },{ 
          url:'https://baijiahao.baidu.com/s?id=1761834299834244122',
          title:'《喜迎70》系列',
          pic:'https://pic.rmb.bdstatic.com/bjh/news/b530b141877dda4ca3bd8936efad5a73.jpeg',
        },{ 
          url:'https://mp.weixin.qq.com/s/9sZz3_D8W8fQacWStcQJRQ',
          title:'青春科大系列',
          pic:'https://pic.rmb.bdstatic.com/bjh/news/ae28066ecbca92e9e9e6ba69ff92d947.png',
        },
        
      ]
    };
  },
  methods: {
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