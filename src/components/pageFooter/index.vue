<template>
    <div id="footer">
      <el-row>
        <el-col :span="6" style="margin: 1.5rem 0 0 4rem;">
          <span style="color:white">友情链接：</span>
          <br><br>
          <a id="footText" href="https://www.baidu.com" style="color:rgb(174, 200, 253);margin-top: 1rem;">清华大学官网</a>
          <a id="footText" href="https://www.baidu.com" style="color:rgb(174, 200, 253);margin-top: 1rem;">&emsp;&emsp;清华大学官网</a>
          <br>
          <a href="https://www.baidu.com" id="footText" style="color:rgb(174, 200, 253);line-height: 2.4rem;font-size: 0.8rem;">西南科技大学官网</a>
          <a href="https://www.baidu.com" id="footText" style="color:rgb(174, 200, 253);line-height: 2.4rem;font-size: 0.8rem;">&emsp;&emsp;西南科技大学官网</a>
          <br>
          <a href="https://www.baidu.com" id="footText" style="color:rgb(174, 200, 253);font-size: 0.8rem;">计算机科学与技术学院</a>
          <a href="https://www.baidu.com" id="footText" style="color:rgb(174, 200, 253);font-size: 0.8rem;">&emsp;&emsp;计算机科学与技术学院</a>
        </el-col>
        <el-col :span="10">
          <div style="color:rgb(174, 200, 253);margin: 1.5rem 0 0 0rem;">
            <div style="color:white;font-family:Courier New;font-weight: 500;font-size: 1.3rem;">SWUST周边好物</div>
            <div style="color:white;line-height:4.5rem;letter-spacing:0.6rem">校园之美,尽在其中</div>
            <span style="font-size:0.8rem">版权所有 ©2023 西南科技大学 | 地址：四川省绵阳市涪城区青龙大道中段59号 | 蜀ICP备13012090号</span>
          </div>
        </el-col>
        <el-col :span="6" style="margin: 1.5rem 0 0 2rem;">
          <span style="color:white">关注我们：</span>
          <div style="position:absolute;text-align: center;margin-top: 1rem;">
            <img src="../../assets/pic/home/icons/qrcode.jpg" style="width:3.8rem;height:3.8rem" alt="">
            <div style="color:rgb(174, 200, 253);font-size:0.8rem">微博账号</div>
          </div>
          <div style="position:absolute;margin: 1rem 0 0 6rem;text-align: center;">
            <img src="../../assets/pic/home/icons/qrcode.png" style="width:3.8rem;height:3.8rem" alt="">
            <div style="color:rgb(174, 200, 253);font-size:0.8rem">微信公众号</div>
          </div>
          <div style="position:absolute;margin: 1rem 0 0 12rem;text-align: center;">
            <img src="../../assets/pic/home/icons/qrcode.png" style="width:3.8rem;height:3.8rem" alt="">
            <div style="color:rgb(174, 200, 253);font-size:0.8rem">微信公众号</div>
          </div>
        </el-col>
      </el-row>
    </div>
  </template>
  <script>
  import "../pageFooter/index.css"
  export default {
    data() {
      return {};
    },
    methods: {
      imgClick(url){
        let path=window.location.protocol+'//'+url
        window.location.href=path
      },
    },
  };
  </script>
  <style>
  </style>