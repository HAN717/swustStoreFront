<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  /* background-color: #dff4ff; */
  background-color:rgb(255, 255, 255);
  margin: 0;
}
::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 0.3rem; /*高宽分别对应横竖滚动条的尺寸*/
  height: 0.1rem;
}
::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(97, 184, 179, 0.1);
  background: white;
}
::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  /* box-shadow: inset 0 0 5px rgba(87, 175, 187, 0.1); */
  border-radius: 10px;
  background: rgb(28, 58, 119);
}

</style>
