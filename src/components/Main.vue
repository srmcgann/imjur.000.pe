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
    padding: 50px;
    box-sizing: boorder-box;
  }
  .dropTarget:hover{
    background-color: #032;
  }
  .dropTarget{
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% 100%;
    background-image: url(loading.gif);
    border: 1px solid #4f84;
    background-color: #0320;
  }
</style>

