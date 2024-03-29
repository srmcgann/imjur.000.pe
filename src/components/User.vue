<template>
  <div class="user">
    <div v-if="!state.loggedIn">
      <button
        @click="login()"
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
    <!--<div v-else>
      <div class="loggedIn">
        <div
          class="avatar"
          :style="'background-image: url(state.loggedInUser.avatar)'"
          title="click for your prefrences"
        ></div>
      </div>
    </div>-->
    <div v-else class="userButtonContainer">
      <button @click="logout()"
        class="userbutton"
      >logout</button>
      <button @click="showSettings()"
        class="userbutton"
      >settings</button>
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
    showSettings(){
      this.state.showUserSettings = true
    },
    login(){
      this.state.showRegister = false
      this.state.showLoginPrompt = true
    },
    logout(){
      this.state.logout()
    },
    toggleLogin(){
      if(!this.state.loggedin) this.state.showLoginPrompt()
    }
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
    font-size: 16px;
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
  
  .userButtonContainer{
    float: right;
    //margin-left: 80px;
    margin-top: -2px;
    width: 80px;
  }
  .userbutton:focus{
    outline: none;
  }
  .userbutton{
    font-size: 12px;
    min-width: 50px;
    margin: 0;
    margin-top: 1px;
    margin-bottom: 1px;
    padding: 1px;
    padding-bottom: 2px;
    padding-left: 8px;
    padding-right: 8px;
    min-width: 70px;
  }
</style>
