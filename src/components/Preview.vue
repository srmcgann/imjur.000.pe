<template>
  <div class="preview">
    <button @click="close()" class="cancelButton" title="close this view">
      close/cancel
    </button>
    <div class="modalInner">
      {{link.href}}
    <div>
  </div>
</template>

<script>
export default {
  name: 'Preview',
  props: [ 'state', 'link' ],
  methods: {
    close(){
      this.state.closePreview()
    }
  },
  mounted(){
  }
}
</script>

<style scoped>
  .preview{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    font-size: 14px;
  }
  .cancelButton{
    background: #822;
    color: #f88;
    text-shadow: 1px 1px 2px #000;
    font-weight: 900;
    width: 125px;
    font-family: Courier Prime;
    font-size: 14px;
    border: none;
    border-radius: 10px;
    padding: 5px;
    position: absolute;
    z-index: 1100;
    right: 20px;
    top: 14px;
  }
  .previewInner{
    text-align: center;
    padding: 25px;
    width: 100%;
    height: 100%;
    font-size: 25px;
    color: #fff;
    text-shadow: 2px 2px 2px #000;
    background: #001b;
  }
</style>
