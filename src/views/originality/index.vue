<template>
  <div class="content">
    <navigateBar />
    <div id="mainContent">

    </div>
    <pageFooter/>
  </div>
</template>
<script>
import navigateBar from "../../components/navigateBar";
import pageFooter from "../../components/pageFooter"
export default {
  components: {
    navigateBar,
    pageFooter
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style>
#mainContent{
  width: 100%;
  /* height: 35rem; */
}
</style>