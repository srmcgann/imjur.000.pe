<template>
  <div class="main">
    throw sum filez [drag/click]
    <div class="dropTarget"></div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: [ 'state' ],
  data(){
    return {
    }
  },
  methods: {
  },
  mounted(){
  }
}
</script>

<style scoped>
  .main{
    background: #123;
    color: #ff0;
    font-size: 20px;
    overflow-y: auto;
    overflow-x: hidden;
    height: calc(100vh - 102px);
    padding: 20px;
    padding-top: 100px;
    box-sizing: boorder-box;
    text-align: center;
  }
  .dropTarget:hover{
    background-color: #032;
  }
  .dropTarget{
    display: inline-block;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% 100%;
    /*background-image: url(../assets/loading.gif);*/
    border: 1px solid #4f84;
    background-color: #0320;
    width: 500px;
    height: 500px;
  }
</style>

