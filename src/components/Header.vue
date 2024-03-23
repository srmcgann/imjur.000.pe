<template>
  <div class="header">
    <div class="headerImg"></div>
  </div>
</template>

<script>
export default {
  name: 'Header',
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
  .header{
    height: 52px;
    background: #0f44;
    color: #4fa;
    font-size: 20px;
  }
  .headerImg{
    height: 50px;
    width: 100%;
    background-position: 0 50%;
    background-image: url(../assets/header.png);
    background-color: linear-gradient(90deg, #000, #206, #088);
    background-repeat: no-repeat;
    background-size: auto 50px;
  }
</style>
