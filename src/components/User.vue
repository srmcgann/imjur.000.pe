<template>
  <div class="User">
    <button @click="state.login()">
      login
    </button>
  </div>
</template>

<script>
export default {
  name: 'Login',
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
  .user{
    height: 52px;
    background: linear-gradient(90deg, #000a, #206a, #088a);
    color: #4fa;
    font-size: 20px;
    top: 0;
    left: 0;
    width: 100%;
    position: fixed;
    text-align: center;
  }
</style>
