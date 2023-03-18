<template>
  <div class="content">
    <navigateBar />
    西科创意
  </div>
</template>
<script>
import navigateBar from "../../components/navigateBar";
export default {
  components: {
    navigateBar,
  },
  data() {
    return {};
  },
  methods: {
    setTitle(){
      document.title='西科原创'
    }
  },
  mounted(){
    setTitle();
  }
};
</script>
<style>

</style>