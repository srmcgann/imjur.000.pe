<template>
  <div class="modal">
    <div class="modalInner" v-html="content">
      <button @click="close()">
        close/cancel
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: [ 'state', 'content' ],
  methods: {
    close(){
      this.state.showModal = false
    }
  },
  mounted(){
  }
}
</script>

<style scoped>
  .modal{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
  }
  .modalInner{
    text-align: center;
    padding: 25px;
    font-size: 25px;
    color: #fff;
    text-shadow: 2px 2px 2px #000;
    background: #000d;
  }
</style>
