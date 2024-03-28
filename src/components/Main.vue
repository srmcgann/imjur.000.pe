<template>
  <div class="main" ref="main">
    <div
      id="dropTarget"
      class="dropTarget"
      :style="state.links.length ? '' : 'cursor: pointer;'"
      @dragover.prevent
      @drop.prevent="dropFiles($event)"
      @click="loadFiles()"
      ref="dropTarget"
    >
      <div ref="dropTargetCaption" id="dropTargetCaption">
        throw sum filez [click/drop]<br><br>
        accepted : gif<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;web[p/m]<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;png<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;jp[e]g<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mp4<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mp3<br><br>
        max size : 25MB<br><br>
        max files: 25MB<br>
        (at a time)<br><br><br>
        <div style="font-size: .6em;">
        WARRANTY: none<br><br>
        this website is a work-in-progress.<br>
        your files will likely be deleted</div>
      </div>
      <div v-if="state.links.length" class="links">
        links<br>
        <Link :state="state" v-for="link in state.links" :link="link" />
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
    uploadFiles(fd){
      fetch('upload.php', {
        method: "POST", body: fd
      }).then(res=>res.json()).then(data => {
        console.log('response from upload.php: ', data)
        this.state.uploadInprogress = false
        if(data[0]){
          this.$refs.dropTargetCaption.style.display = 'none'
          data[1].map((v, i)=>{
            this.addLink(data[2][i], data[3][i], i, location.href.split('?')[0] + v)
          })
          this.state.modalContent = ''
          this.state.closeModal()
        }else{
          this.state.modalContent = '<div style="min-width:90vw; min-height: 50vh; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);background: #8002; color: #f88; padding-top: 100px;">' + data[5] + '</div>'
        }
      })
    },
    processUpload(files){
      this.state.uploadInprogress = true
      this.state.modalContent = `<div style="position: absolute;left:0;top:0;width:100%;height:100%;background:#000;"><video src="loading.mp4" style="min-width:50vw; min-height: 50vh; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); pointer-events: none; opacity: .6;" loop autoplay muted></video></div>`
      this.state.showModal = true
      
      this.$nextTick(()=>{
        let ct = 0
        let fd = new FormData()
        //fd.append('description', 'no description')
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
        if(ct) this.uploadFiles(fd)
      })
    },
    dropFiles(e){
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
    addLink(size, type, ct, href){
      let obj = {
        size,
        type,
        ct,
        href,
      }
      this.state.links.push(obj)
    },
    loadFiles(){
      if(this.state.links.length) return
      let files = document.createElement('input')
      files.type = 'file'
      files.name = 'uploads[]'
      files.multiple = true
      files.accept = 'image/gif, image/jiff, image/jpeg, image/jpg, image/png, image/webp, video/mp4, video/webm, video/mkv, audio/mp3, audio/wav, audio/mpeg'
      files.onchange = () => this.processUpload(Array.from(files.files))
      files.click()
    }
  },
  mounted(){
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
    background-color: #201a;
    font-size: 20px;
    overflow-y: auto;
    overflow-x: hidden;
    height: calc(100vh - 122px);
    min-height: calc(100vh - 122px);
    padding: 20px;
    box-sizing: border-box;
    text-align: center;
  }
  /*.dropTarget:hover{
    background-color: #0648;
    cursor: pointer;
  }*/
  .dropTarget{
    color: #0ff;
    display: inline-block;
    padding: 20px;
    text-align: left;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% 100%;
    border-radius: 10px;
    /*background-image: url(../assets/loading.gif);*/
    border: 1px solid #4088;
    background-color: #0468;
    width: 100%;
    min-height: 100%;
    box-sizing: border-box;
  }
  .links{
    margin: 0;
    box-sizing: border-box;
    text-align: center;
  }
  #dropTargetCaption{
    display: inline-block;
    width: 340px;
    position: fixed;
    left: 50%;
    top: 49%;
    transform: translate(-50%, -50%);
    padding: 38px;
    border-radius: 32%;
    background: #0f02;
    box-shadow: 0 0 150px 150px #0f02;
    height: 264px;
    padding-top: 0;
    padding-right: 28px;
  }
</style>

