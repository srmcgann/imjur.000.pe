<template>
  <div class="main" ref="main">
    <div
      id="dropTarget"
      class="dropTarget"
      @dragover.prevent
      @drop.prevent="dropFiles($event)"
      @click=""
      ref="dropTarget"
    >
      <div ref="dropTargetCaption" id="dropTargetCaption" v-if="!(state.userLinks.length || state.links.length)">
        throw sum filez [click/drop]<br><br>
        accepted : gif<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;web[p/m]<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;png<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;jp[e]g<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mp4<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mp3<br><br>
        max size : 25MB<br>
        <span style="font-size: .7em;">(per file)</span><br><br>
        max files: 15<br>
        <span style="font-size: .7em;">(at a time)</span><br><br><br>
        <div style="font-size: .6em;">
        WARRANTY: none<br><br>
        this website is a work-in-progress.<br>
        your files will likely be deleted</div>
      </div>
      <div v-if="state.links.length || state.userLinks.length" class="links">
        <Link
          :state="state"
          v-for="link in state.links"
          :link="link" :linkMode="'link'"
        />
        <Link
          :state="state"
          v-for="link in state.userLinks"
          :link="link"
          :linkMode="'userLink'"
          v-if="state.userLinks.length"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Link from './Link'

export default {
  name: 'Main',
  props: [ 'state' ],
  components: {
    Link
  },
  data(){
    return {
      preload: [],
      rejects: []
    }
  },
  methods: {
    processUpload(files){
      this.state.uploadInprogress = true
      this.state.modalContent = `<div style="position: absolute;left:0;top:0;width:100%;height:100%;background:#000;"><video src="loading.mp4" style="min-width:50vw; min-height: 50vh; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); pointer-events: none; opacity: .6;" loop autoplay muted></video></div>`
      this.state.showModal = true
      this.$nextTick(()=>{
        let ct = 0
        let fd = new FormData()
        files.map((file, i) => {
          console.log(`file ${i}: `, file)
          if(file.size > 25000000){
            this.rejects = [...this.rejects, file]
          } else {
            ct++
            fd.append(`uploads_${i}`, file)
          }
        })
        let rej = '<div style="min-width:90vw; min-height: 50vh; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);background: #4008; color: #f88; padding-top: 100px;">'
        this.rejects.map(reject=>{
          let sz = (reject.size/1e6|0).toLocaleString('en-us') + ' MB<br>'
          rej += `oversized/rejected: size: ${sz} "${reject.name}" <br><br>`
        })
        if(this.rejects.length) {
          this.state.modalQueue = [...this.state.modalQueue, rej + '</div>']
          this.state.closeModal()
        }
        if(ct) {
          let batchMetaData = {
            loggedIn: this.state.loggedIn,
            userID: this.state.loggedinUserID,
            passhash: this.state.passhash,
            description: '',
          }
          console.log('batchMetaData', batchMetaData)
          fd.append('batchMetaData', JSON.stringify(batchMetaData))
          fetch('upload.php', {
            method: "POST", body: fd
          }).then(res=>res.json()).then(data => {
            console.log('response from upload.php: ', data)
            this.state.uploadInprogress = false
            if(data[0]){
              //this.$refs.dropTargetCaption.style.display = 'none'
              data[1].map((v, i)=>{
                this.addLink(data[2][i], data[3][i], i, location.href.split('?')[0] + v, false, this.state.loggedinUserID)
              })
              this.state.modalContent = ''
              this.state.closeModal()
            }else{
              this.state.modalContent = '<div style="min-width:90vw; min-height: 50vh; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);background: #8002; color: #f88; padding-top: 100px;">' + data[5] + '</div>'
            }
          })
        }
      })
    },
    dropFiles(e){

      /*let files = document.createElement('input')
      files.type = 'file'
      files.name = 'uploads[]'
      files.multiple = true
      files.accept = 'image/gif, image/jiff, image/jpeg, image/jpg, image/png, image/webp, video/mp4, video/webm, video/mkv, audio/mp3, audio/wav, audio/mpeg'
      files.files = []*/
      
      let files = []
      if(e.dataTransfer.items){
        [...e.dataTransfer.items].forEach((item, i) => {
          if (item.kind === "file") {
            const file = item.getAsFile()
            files = [...files, file]
          }
        })
      }else{
        files = Array.from(e.dataTransfer.files)
      }
      if(files.length) this.processUpload(files)
    },
    addLink(size, type, ct, href, selected, userID){
      let obj = {
        size,
        type,
        ct,
        href,
        selected,
        userID
      }
      this.state.links.push(obj)
    },
    loadFiles(){
      //if(this.state.links.length) return
      // uncomment above to disable subsequent
      // click->open-file-dialog, after 1 successful upload
      
      let files = document.createElement('input')
      files.type = 'file'
      files.multiple = true
      files.accept = 'image/gif, image/jiff, image/jpeg, image/jpg, image/png, image/webp, video/mp4, video/webm, video/mkv, audio/mp3, audio/wav, audio/mpeg'
      files.onchange = () => this.processUpload(Array.from(files.files))
      files.click()
    }
  },
  mounted(){
    this.state.loadFiles = this.loadFiles
    this.preload = [ ...this.preload,
      [document.createElement('video'), 'loading.mp4'],
    ]
    this.preload.map(v => {
      v[0].src = v[1]
    })
  }
}
</script>

<style scoped>
  .main{
    background-color: #000011ee;
    font-size: 20px;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    padding: 0px;
    box-sizing: border-box;
    text-align: center;
    position: absolute;
    padding-top: 100px;
    z-index: 0;
    padding-bottom: 100px;
    width: 100vw;
  }
  /*.dropTarget:hover{
    background-color: #0648;
    cursor: pointer;
  }*/
  .dropTarget{
    color: #0f8;
    display: inline-block;
    text-align: left;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% 100%;
    border-radius: 10px;
    /*background-image: url(../assets/loading.gif);*/
    /*border: 1px solid #4088;*/
    /*background-color: #0468;*/
    width: 100%;
    min-height: calc(100% - 10px);
    box-sizing: border-box;
  }
  .links{
    margin: 0;
    box-sizing: border-box;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  @keyframes colorCycle{
    0% {
      background-color:  #ff000022;
      box-shadow: 0 0 150px 150px #ff000022;
    }
    5% {
      background-color: #ff4c0022;
      box-shadow: 0 0 150px 150px #ff4c0022;
    }
    10% {
      background-color: #ff990022;
      box-shadow: 0 0 150px 150px #ff990022;
    }
    15% {
      background-color: #ffe50022;
      box-shadow: 0 0 150px 150px #ffe50022;
    }
    20% {
      background-color: #ccff0022;
      box-shadow: 0 0 150px 150px #ccff0022;
    }
    25% {
      background-color: #7fff0022;
      box-shadow: 0 0 150px 150px #7fff0022;
    }
    30% {
      background-color: #32ff0022;
      box-shadow: 0 0 150px 150px #32ff0022;
    }
    35% {
      background-color: #00ff1922;
      box-shadow: 0 0 150px 150px #00ff1922;
    }
    40% {
      background-color: #00ff6522;
      box-shadow: 0 0 150px 150px #00ff6522;
    }
    45% {
      background-color: #00ffb222;
      box-shadow: 0 0 150px 150px #00ffb222;
    }
    50% {
      background-color: #00ffff22;
      box-shadow: 0 0 150px 150px #00ffff22;
    }
    55% {
      background-color: #00b2ff22;
      box-shadow: 0 0 150px 150px #00b2ff22;
    }
    60% {
      background-color: #0065ff22;
      box-shadow: 0 0 150px 150px #0065ff22;
    }
    65% {
      background-color: #0019ff22;
      box-shadow: 0 0 150px 150px #0019ff22;
    }
    70% {
      background-color: #3300ff22;
      box-shadow: 0 0 150px 150px #3300ff22;
    }
    75% {
      background-color: #7f00ff22;
      box-shadow: 0 0 150px 150px #7f00ff22;
    }
    80% {
      background-color: #cb00ff22;
      box-shadow: 0 0 150px 150px #cb00ff22;
    }
    85% {
      background-color: #ff00e522;
      box-shadow: 0 0 150px 150px #ff00e522;
    }
    90% {
      background-color: #ff009822;
      box-shadow: 0 0 150px 150px #ff009822;
    }
    95% {
      background-color: #ff004c22;
      box-shadow: 0 0 150px 150px #ff004c22;
    }
    100% {
      background-color: #ff000022;
      box-shadow: 0 0 150px 150px #ff000022;
    }
  }
  #dropTargetCaption{
    display: inline-block;
    width: 340px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 38px;
    border-radius: 32%;
    height: 320px;
    padding-top: 0;
    padding-right: 28px;
    background-color: #103c;
    box-shadow: 0 0 150px 150px #103c;
    /*animation: colorCycle 5s infinite linear;*/
  }
</style>

