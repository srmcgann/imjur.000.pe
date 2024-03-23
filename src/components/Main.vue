<template>
  <div class="main">
    <div class="dropTarget">
      throw sum filez [drag/click]<br><br>
      accepted: most images & video web formats. feeling lucky?<br>
      max size: 100MB<br>
      WARRANTY: none<br>
    </div>
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
    background-color: #201a;
    font-size: 20px;
    overflow-y: auto;
    overflow-x: hidden;
    height: calc(100vh - 122px);
    padding: 20px;
    box-sizing: border-box;
    text-align: center;
  }
  .dropTarget:hover{
    background-color: #0648;
  }
  .dropTarget{
    color: #0ff;
    display: inline-block;
    padding: 20px;
    text-align: left;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% 100%;
    border-radius: 10px;
    /*background-image: url(../assets/loading.gif);*/
    border: 1px solid #4088;
    background-color: #0468;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
</style>

