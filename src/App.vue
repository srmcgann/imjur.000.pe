<template>
  <div>
    <Header :state="state" />
    <Main   :state="state" />
    <Footer :state="state" />
    <UserSettings v-if="state.userSettingsVisible" :state="state"/>
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
import UserSettings from './components/UserSettings'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer,
    UserSettings,
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
        setCookie: null,
        mode: null,
        showPreview: false,
        rootDomain: location.hostname,
        modalContent: '',
        modalQueue: [],
        previewLink: null,
        passhash: '',
        loggedinUserID: null,
        closeModal: null,
        closePreview: null,
        closePrompts: null,
        loggedInUser: {
          avatar: 'avatarDefault.png',
        },
        loggedinUserName: '',
        copy: null,
        next: null,
        prev: null,
        login: null,
        register: null,
        logout: null,
        regusername: '',
        username: '',
        password: '',
        showUserSettings: null,
        invalidLoginAttempt: false,
        displayLoginRequired: false,
        userSettingsVisible: false,
        regpassword: '',
        confirmpassword: '',
        showLoginPrompt: false,
        showRegister: false,
        loggedIn: false,
        loggedInUser: null,
        loginPromptVisible: false,
        getPages: null
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
    register(){
      console.log('registering')
      this.state.showLoginPrompt = true
      this.state.showRegister = true
    },
    showUserSettings(){
      document.getElementsByTagName('HTML')[0].style.overflowY = 'hidden'
      this.state.userSettingsVisible = true
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
    },
    checkEnabled(){
      if(this.state.loggedinUserName) {
        let sendData = {
          userName: this.state.loggedinUserName, passhash: this.state.passhash,
        }
        fetch('checkEnabled.php',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(sendData),
        })
        .then(res => res.json())
        .then(data => {
          if(!!(+data[0])){
            console.log('logged in.')
            this.state.loggedIn= true
            this.state.loggedinUserID = +data[1]
            this.state.loggedInUser.avatar = data[2]
            //this.state.fetchUserData(this.state.loggedinUserID)
            this.setCookie()
            this.state.loginPromptVisible = false
            this.state.invalidLoginAttemp = false
            //this.state.userInfo[this.state.loggedinUserID] = {}
            //this.state.userInfo[this.state.loggedinUserID].name = this.state.regusername || this.state.loggedinUserName
            //this.state.userInfo[this.state.loggedinUserID].avatar = data[2]
            //this.state.userInfo[this.state.loggedinUserID].isAdmin = +data[3]
            if(+data[3]) this.state.isAdmin = true
            //this.state.maxResultsPerPage = +data[4]
          }else{
            console.log('not logged in.')
            this.state.loggedIn= false
            this.state.loggedinUserName = ''
            this.state.loggedinUserID = ''
            this.state.passhash = ''
            this.state.isAdmin = false
            this.state.invalidLoginAttempt = true
          }
          this.getMode()
        })
      }
    },
    setCookie() {
      let cookies = document.cookie
      cookies.split(';').map(v=>{
        if(v.indexOf('autoplay')==-1){
          document.cookie = v + '; expires=' + (new Date(0)).toUTCString() + '; path=/; domain=' + this.state.rootDomain
        }
      })
      document.cookie = 'loggedinuser=' + this.state.loggedinUserName + '; expires=' + (new Date((Date.now()+3153600000000))).toUTCString() + '; path=/; domain=' + this.state.rootDomain
      document.cookie = 'loggedinuserID=' + this.state.loggedinUserID + '; expires=' + (new Date((Date.now()+3153600000000))).toUTCString() + '; path=/; domain=' + this.state.rootDomain
      document.cookie = 'token=' + this.state.passhash + '; expires=' + (new Date((Date.now()+3153600000000))).toUTCString() + '; path=/; domain=' + this.state.rootDomain
      document.cookie = 'autoplay=' + this.state.autoplay + '; expires=' + (new Date((Date.now()+3153600000000))).toUTCString() + '; path=/; domain=' + this.state.rootDomain
      document.cookie = 'showControls=' + this.state.showControls + '; expires=' + (new Date((Date.now()+3153600000000))).toUTCString() + '; path=/; domain=' + this.state.rootDomain
    },
    getPages(){
      console.log('loaded. mode: ' + this.state.mode)
    },
    login(){
      let sendData = {userName: this.state.username, password: this.state.password}
      fetch('login.php',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sendData),
      })
      .then(res => res.json())
      .then(data => {
        if(data[0]){
          console.log('login succeeded!')
          this.state.loggedIn= true
          this.state.loggedinUserName = this.state.username
          this.state.loggedinUserID = +data[2]
          //this.state.fetchUserData(this.state.loggedinUserID)
          this.state.isAdmin = +data[4]
          this.state.passhash = data[1]
          this.setCookie()
          this.closePrompts()
          this.state.invalidLoginAttemp = false
          this.state.loggedInUser.avatar = data[3]
          //this.state.userInfo[this.state.loggedinUserID] = {}
          //this.state.userInfo[this.state.loggedinUserID].name = this.state.regusername
          //this.state.userInfo[this.state.loggedinUserID].avatar = data[3]
          //this.state.userInfo[this.state.loggedinUserID].isAdmin = +data[4]
          
          //this.checkAutoplayPref()
          //this.checkExactSearchPref()
          //this.checkShowControlsPref()
          //this.getPages()
          //window.location.reload()
        }else{
          console.log('not logged in.')
          this.state.loggedIn= false
          this.state.invalidLoginAttempt = true
        }
      })
    },
    getMode(){
      let vars = window.location.pathname.split('/').filter(v=>v)
      if(vars.length>0){
        switch(vars[0]){
          case 'd':
            this.state.mode = 'single'
            //this.state.curPage = (+vars[1])-1
            //this.state.viewDemo = this.alphaToDec(vars[1])
            //this.state.rawDemoID = vars[1]
            //this.$nextTick(()=>this.loadDemo(this.alphaToDec(vars[1])))
            //if(vars[2]){
            //  this.state.search.string = decodeURIComponent(vars[2])
           //}
            break
          case 'u':
            /*if(!vars[1]) window.location.href = window.location.origin
            this.state.viewAuthor = decodeURIComponent(vars[1]);
            this.state.user = {name: decodeURIComponent(vars[1])}
            this.state.mode = 'user'
            if(vars[2]){
              this.state.curUserPage = (+vars[2])-1
              if(vars[3]){
                this.state.search.string = decodeURIComponent(vars[3])
                search = '/' + vars[3]
                history.pushState(null,null,window.location.origin + '/u/' + (this.state.user.name) + '/' + (this.state.curPage + 1)) + search
                this.beginSearch()
              }else{
                if(!this.state.curUserPage || this.state.curUserPage < 0 || this.state.curUserPage > 1e6) this.state.curUserPage = 0
                history.pushState(null,null,window.location.origin + '/u/' + (vars[1]) + ((this.state.curUserPage) ? '/' + (this.state.curUserPage + 1) : ''))
                this.getPages()
              }
            } else {
              this.state.curUserPage = 0
              history.pushState(null,null,window.location.origin + '/u/' + (vars[1]) + ((this.state.curUserPage) ? '/' + (this.state.curUserPage + 1) : ''))
              this.getPages()
            }*/
          break
          default:
            this.state.mode = 'default'
            /*
            let search = ''
            if(vars[0]){
              this.state.curPage = (+vars[0])-1
              if(vars[1]){
                this.state.search.string = decodeURIComponent(vars[1])
                search = '/' + vars[1]
                history.pushState(null,null,window.location.origin + '/' + (this.state.curPage + 1)) + search
                this.beginSearch()
              }else{
                history.pushState(null,null,window.location.origin + '/' + this.state.curPage ? (this.state.curPage + 1) : '')
                if(!this.state.curPage || this.state.curPage < 0 || this.state.curPage > 1e6) this.state.curPage = 0
                this.getPages()
              }
            }else{
              //window.location.href = window.location.origin
            }
            */
          break
        }
      }else{
        this.state.mode = 'default'
        this.getPages()
        if(window.location.href !== window.location.origin + '/') window.location.href = window.location.origin
      }
    },
    logout(){
      let cookies = document.cookie
      cookies.split(';').map(v=>{
        if(v.indexOf('autoplay')==-1){
          document.cookie = v + '; expires=' + (new Date(0)).toUTCString() + '; path=/; domain=' + this.state.rootDomain
        }
      })
      if(this.state.search.string != '') this.state.search.demos = this.state.search.demos.filter(v=>!v.private)
      switch(this.state.mode){
        case 'user':
        this.state.user.demos = this.state.user.demos.filter(v=>!v.private)
        break
        case 'single':
        this.state.demos = this.state.demos.filter(v=>!v.private)
        break
        case 'default':
        this.state.landingPage.demos = this.state.landingPage.demos.filter(v=>!v.private)
        break
      }
      this.state.loggedIn= false
      this.state.isAdmin = false
      this.state.loggedinUserID = this.state.loggedinUserName = ''
      window.location.reload()
    },
    logout(){
      let cookies = document.cookie
      cookies.split(';').map(v=>{
        if(v.indexOf('autoplay')==-1){
          document.cookie = v + '; expires=' + (new Date(0)).toUTCString() + '; path=/; domain=' + this.state.rootDomain
        }
      })
      //if(this.state.search.string != '') this.state.search.demos = this.state.search.demos.filter(v=>!v.private)
      switch(this.state.mode){
        case 'user':
        this.state.user.demos = this.state.user.demos.filter(v=>!v.private)
        break
        case 'single':
        this.state.demos = this.state.demos.filter(v=>!v.private)
        break
        case 'default':
        this.state.landingPage.demos = this.state.landingPage.demos.filter(v=>!v.private)
        break
      }
      this.state.loggedin = false
      this.state.isAdmin = false
      this.state.loggedinUserID = this.state.loggedinUserName = ''
      window.location.reload()
    },
    checkLogin(){
      let l = (document.cookie).split(';').filter(v=>v.split('=')[0].trim()==='loggedinuser')
      if(l.length){
        this.state.loggedinUserName = l[0].split('=')[1]
        let l2 = (document.cookie).split(';').filter(v=>v.split('=')[0].trim()==='token')
        if(l2.length){
          this.state.passhash = l2[0].split('=')[1]
          let l3 = (document.cookie).split(';').filter(v=>v.split('=')[0].trim()==='loggedinuserID')
          if(l3.length){
            this.state.loggedinUserID = +l3[0].split('=')[1]
            this.checkEnabled()
          }
        }
      } else {
        this.getMode() 
      }
      //this.checkShowControlsPref()
      //this.checkAutoplayPref()
      //this.checkExactSearchPref()
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
    this.state.logout = this.logout
    this.state.register = this.register
    this.state.getPages = this.getPages
    this.state.setCookie = this.setCookie
    this.state.closePrompts = this.closePrompts
    this.state.closePreview = this.closePreview
    this.state.showUserSettings = this.showUserSettings
    this.checkLogin()
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
  min-width: 140px;
  cursor: pointer;
  font-family: Courier Prime;
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
  text-shadow: 1px 1px 3px #40f;
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
