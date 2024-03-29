<template>
  <div>
    <Header :state="state" />
    <Main   :state="state" />
    <Footer :state="state" />
    <LoginPrompt :state="state" v-if="state.showLoginPrompt"/>
    <Modal
      :state="state"
      v-if="state.showModal"
      :content="state.modalContent"
    />
    <Preview
      :state="state"
      v-if="state.showPreview"
      :link="state.previewLink"
    />
    <div id="copyConfirmation"><div id="innerCopied">COPIED!</div></div>
  </div>
</template>

<script>
import Main from './components/Main'
import Modal from './components/Modal'
import Header from './components/Header'
import Footer from './components/Footer'
import Preview from './components/Preview'
import LoginPrompt from './components/LoginPrompt'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer,
    Modal,
    Preview,
    LoginPrompt,
  },
  data(){
    return {
      state: {
        footerMsg: '<b>IMJUR</b><br>A FREE DIGITAL ASSET HOSTING SERVICE - ©'+(new Date()).getFullYear() + `<br>contact: <a href="mailto:whitehotrobot@gmail.com">whitehotrobot@gmail.com</a>`,
        links: [],
        uploadInProgress: false,
        showModal: false,
        showPreview: false,
        modalContent: '',
        modalQueue: [],
        previewLink: null,
        closeModal: null,
        closePreview: null,
        closePrompts: null,
        loggedInUser: {
          avatar: null,
        },
        copy: null,
        next: null,
        prev: null,
        login: null,
        register: null,
        regusername: '',
        username: '',
        password: '',
        invalidLoginAttempt: false,
        displayLoginRequired: false,
        regpassword: '',
        confirmpassword: '',
        showLoginPrompt: false,
        showRegister: false,
        loggedIn: false,
        loggedInUser: null,
        loginPromptVisible: false,
      }
    }
  },
  methods:{
    prev(){
      if(!this.state.showPreview) return
      let idx = this.state.previewLink.ct -1
      if(idx<0) idx = this.state.links.length-1
      this.state.showPreview = false
      this.$nextTick(()=>{
        this.state.showPreview = true
        this.state.previewLink = this.state.links[idx]
      })
    },
    next(){
      if(!this.state.showPreview) return
      let idx = this.state.previewLink.ct +1
      idx %= this.state.links.length
      this.state.showPreview = false
      this.$nextTick(()=>{
        this.state.showPreview = true
        this.state.previewLink = this.state.links[idx]
      })
    },
    login(){
      console.log('logging in')
      this.state.showRegister = false
      this.state.showLoginPrompt = true
    },
    register(){
      console.log('registering')
      this.state.showLoginPrompt = true
      this.state.showRegister = true
    },
    copy(val){
      let copyEl = document.createElement('div')
      copyEl.innerHTML = val
      copyEl.style.opacity = .01
      copyEl.style.position = 'absolute'
      document.body.appendChild(copyEl)
      var range = document.createRange()
      range.selectNode(copyEl)
      window.getSelection().removeAllRanges()
      window.getSelection().addRange(range)
      document.execCommand("copy")
      window.getSelection().removeAllRanges()
      copyEl.remove()
      let el = document.querySelector('#copyConfirmation')
      el.style.display = 'block';
      el.style.opacity = 1
      let reduceOpacity = () => {
        if(+el.style.opacity > 0){
          el.style.opacity -= .02 * 2
          if(+el.style.opacity<.1){
            el.style.opacity = 1
            el.style.display = 'none'
          }else{
            setTimeout(()=>{
              reduceOpacity()
            }, 10)
          }
        }
      }
      setTimeout(()=>{reduceOpacity()}, 250)
    },
    closePrompts(){
      this.state.showLoginPrompt = false
    },
    closeModal(){
      if(this.state.modalQueue.length){
        this.state.modalContent = this.state.modalQueue.shift()
      }else{
        this.state.showModal = false
        this.state.modalContent = ''
      }
    },
    closePreview(){
      this.state.showPreview = false
      this.state.previewLink = null
    }
  },
  watch: {
    'state.uploadInProgress' (val) {
      /*console.log('state.uploadInProgress val', val)
      if(val){
        this.state.modalContent = `
          loading...
        `
        this.state.showModal = true
      }else{
        this.state.modalContent = ''
        this.state.showModal = false
      }
      */
    }
  },
  mounted(){
    document.body.onkeydown = e =>{
      switch(e.keyCode){
        case 37:
          this.prev()
        break
        case 39:
          this.next()
        break
        case 27:
          this.state.showPreview = false
          if(!this.state.uploadInProgress) this.state.showModal = false
        break
      }
    }
    this.state.closeModal = this.closeModal
    this.state.prev = this.prev
    this.state.next = this.next
    this.state.copy = this.copy
    this.state.login = this.login
    this.state.register = this.register
    this.state.closePrompts = this.closePrompts
    this.state.closePreview = this.closePreview
  }
}
</script>

<style>
/* latin-ext */
@font-face {
  font-family: 'Courier Prime';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/courierprime/v9/u-450q2lgwslOqpF_6gQ8kELaw9pWt_-.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Courier Prime';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/courierprime/v9/u-450q2lgwslOqpF_6gQ8kELawFpWg.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
body,html{
  background-color: #000;
  background-image: url(./assets/bg_lores.jpg);
  background-repeat: repeat;
  background-size: cover;
  background-position: center center;
  margin: 0;
  height: 100vh;
  overflow: hidden;
  font-family: Courier Prime;
}
a:visited{
  color: #40f;
}
button{
  font-family: Play;
  font-size: 18px;
  border: none;
  border-radius: 6px;
  background: #adc;
  padding: 4px;
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  font-weight: 900;
  margin: 10px;
  min-width: 140px;
  cursor: pointer;
}
a{
  text-decoration: none;
  color: #08f;
}
.buttons:focus{
  outline: none;
}
button, .buttons{
  border: none;
  border-radius: 5px;
  background: #4f8;
  color: #000;
  text-shadow: 3px 3px 3px #000;
  font-size: 18px;
  min-width: 80px;
}
.buttons{
  border: none;
  border-radius: 5px;
  background: #4f88;
  color: #fff;
  padding: 3px;
  min-width: 200px;
  cursor: pointer;
  font-family: Courier Prime;
}
.copyButton{
  display: inline-block;
  width: 30px;
  height: 30px;
  background-image: url(./assets/link.png);
  cursor: pointer;
  z-index: 500;
  background-size: 90% 90%;
  left: calc(50% + 180px);
  background-position: center center;
  background-repeat: no-repeat;
  border: none;
  background-color: #8fcc;
  margin: 5px;
  border-radius: 5px;
  vertical-align: middle;
}
#copyConfirmation{
  display: none;
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #012d;
  color: #8ff;
  opacity: 1;
  text-shadow: 0 0 5px #fff;
  font-size: 46px;
  text-align: center;
  z-index: 10000;
}
#innerCopied{
  position: absolute;
  top: 50%;
  width: 100%;
  z-index: 1020;
  text-align: center;
  transform: translate(0, -50%) scale(2.0, 1);
}
.resultLink{
  text-decoration: none;
  color: #fff;
  background: #4f86;
  padding: 10px;
  display: inline-block;
}
#resultDiv{
  position: absolute;
  margin-top: 50px;
  left: 50%;
  transform: translate(-50%);
}
.input{
  text-align: center;
  font-size: 24px;
  background: #0004;
  border: none;
  border-bottom: 2px solid #2fa;
  width: 300px;
  color: #ffa;
}
input[type=text]{
  font-size: 24px;
  background: #0004;
  border: none;
  border-bottom: 2px solid #2fa;
  width: 300px;
  color: #ffa;
}
input[type=checkbox]{
  transform: scale(1.5);
  margin: 8px;
  margin-left: 5px;
}
input:focus{
  outline: none;
}
button:focus{
  outline: none;
}
select:focus{
  outline: none;
}
</style>
