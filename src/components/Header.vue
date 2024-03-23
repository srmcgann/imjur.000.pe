<template>
  <div class="header">
    <span class="title" v-html="state.headerMsg"></span>
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
    height: 32px;
    background: #0f44;
    color: #4fa;
    font-size: 20px;
  }
  .title{
    font-weight: 900;
  }
</style>
