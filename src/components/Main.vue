<template>
  <div class="main">
    main section....
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
    font-size: 32px;
    overflow-y: auto;
    overflow-x: hidden;
    height: calc(100vh - 102px);
  }
</style>
