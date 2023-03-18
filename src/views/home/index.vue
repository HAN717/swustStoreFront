<template>
  <div id="main">
    <navigateBar />
    <div id="banner"></div>
    <div id="tmBlock"></div>
    <div id="content">
      <toTop />
    </div>
    <pageFooter/>
  </div>
</template>
<script>
import navigateBar from "../../components/navigateBar";
import toTop from "../../components/toTop";
import pageFooter from "../../components/pageFooter";
import "../home/home.css"
export default {
  name: "homePage",
  components: {
    navigateBar,
    toTop,
    pageFooter
  },
  data() {
    return {

    };
  },
  methods: {
    handleScroll() {
      var scrollTop = document.documentElement.scrollTop;
      this.scrollHeight = scrollTop;
    },
  },
  mounted() {
      window.addEventListener("scroll", this.handleScroll)
  },
};
</script>
<style>
</style>