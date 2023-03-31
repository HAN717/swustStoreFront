<template>
    <div class="content">
      <navigateBar />
      <div id="banner2"></div>
      <div id="mainContent">
      用户中心
      </div>
      <toTop />
      <pageFooter/>
    </div>
  </template>
  <script>
  import navigateBar from "../../components/navigateBar";
  import pageFooter from "../../components/pageFooter"
  import toTop from "../../components/toTop";
  export default {
    components: {
      navigateBar,
      pageFooter,
      toTop
    },
    data() {
      return {
      
      };
    },
    methods: {
    
    },
    mounted(){
      
    }
  };
  </script>
  <style>
  </style>