<template>
  <div class="footer">
    <span v-html="state.footerMsg"></span>
  </div>
</template>

<script>
export default {
  name: 'Footer',
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
  .footer{
    height: 70px;
    background: linear-gradient(90deg, #000, #024e, #204e);
    color: #fff;
    min-width:600px;
    width: 100vw;
    left: 50%;
    transform: translatex(-50%);
    font-size: 20px;
    text-shadow: 2px 2px 2px #000;
    padding-top: 5px;
    line-height: 16px;
    box-sizing: border-box;
    text-align: left;
    padding-left: 20px;
    position: fixed;
    bottom: 0;
  }
</style>
