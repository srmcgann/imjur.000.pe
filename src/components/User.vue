<template>
  <div class="user">
    <div v-if="!state.loggedIn">
      <button
        @click="state.login()"
        class="loginButton"
        title="sign in"
      >
        login
      </button>
      <button
        @click="state.register()"
        class="loginButton"
        style="top: 26px"
        title="register anonymously.<br><br>we only need a user name as<br>something to attach your files to"
      >
        register
      </button>
    </div>
    <div v-else>
      <div class="loggedIn">
        <div
          class="avatar"
          :style="background-image: url(state.loggedInUser.avatar)"
          title="click for your prefrences"
        ></div>
      </div>
    </div>
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
    top: 1px;
    border: 2px solid #0003;
    padding-top: 0;
    padding-bottom: 2px;
  }
  .loggedIn{
    height: 49px;
  }
  .avatar{
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-color: #000;
    border: 2px solid #40fa;
  }
</style>
