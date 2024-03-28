<template>
  <div class="user">
    <button
      @click="state.login()"
      class="loginButton">
      login
      title="sign in"
    </button>
    <button
      @click="state.register()"
      class="loginButton">
      register
      title="register anonymously.\n\nwe only need a user name as\nsomething to attach your files to"
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
    color: #4fa;
    font-size: 20px;
    top: 0;
    left: 0;
    width: 100%;
    position: fixed;
    text-align: center;
  }
  .loginButton{
    border-radius: 5px;
    background: #4f8;
    color: #022;
    text-shadow: 1px 1px 2px #000;
    font-size: 18px;
    min-width: 100px;
    position: absolute;
    left: 400px;
    top: 2px;
    border: 2px solid #0003;
    padding-top: 0;
    padding-bottom: 2px;
  }
</style>
