<template>
  <div class="detailsContent">
    <navigateBar />
    <div id="banner2"></div>
    <div id="goodsBox">
        {{this.itemData.name}}
        <img src="../../assets/pic/home/showGoods/25.jpg" id="goodsPicbig">
    </div>
    <pageFooter />
  </div>
</template>
<script>
import navigateBar from "../../components/navigateBar";
import pageFooter from "../../components/pageFooter";
import "./index.css";
export default {
  components: {
    navigateBar,
    pageFooter,
  },
  data() {
    return {
      itemData:this.$route.query.itemData,
    };
  },
  methods: {
    shuchu(){
        console.log('itemData',itemData)
    }
  },
  mounted(){
    this.shuchu()
  }
};
</script>
<style>
</style>