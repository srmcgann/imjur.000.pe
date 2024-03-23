<template>
  <div class="main">
    <div class="dropTarget" @click="loadFiles()" @drop="dropHandler(event)" @dragOver="">
      throw sum filez [drag/click]<br><br>
      accepted: gif, web[p/m], png, jp[e]g, mp4, mp3<br>
      max size: 100MB<br>
      WARRANTY: none<br>
      <div v-if="state.links.length" class="links">
        links<br>
        <Link :state="state" v-for="link in state.links" :links="link" />
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
    }
  },
  methods: {
    dropHandlerr(event){
      console.log('file(s) dropped: ', event)
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
    uploadFiles(fd){
      fetch('upload.php', {
        method: "POST", body: fd
      }).then(res=>res.json()).then(data=>{
        console.log('response from upload.php: ', data)
        if(data[0]){
          data[1].map((v, i)=>{
            this.addLink(data[2], data[3], i, location.origin + '/' + v)
          })
        }
      })
    },
    loadFiles(){
      let fd = new FormData()
      fd.append('title', 'uploading assets...')
      let files = document.createElement('input')
      files.type = 'file'
      files.name = 'uploads[]'
      files.multiple = true
      files.accept = 'image/gif, image/jiff, image/jpeg, image/jpg, image/png, image/webp, video/mp4, video/webm, video/mkv, audio/mp3'
      files.onchange = () => {
        console.log('sending files: ', files)
        let ct = 0
        Array.from(files.files).map((file, i) => {
          ct++
          console.log(`file ${i}: `, file)
          fd.append(`uploads_${i}`, file)
        })
        if(ct) this.uploadFiles(fd)
      }
      files.click()
    }
  },
  mounted(){
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
    padding: 20px;
    box-sizing: border-box;
    text-align: center;
  }
  .dropTarget:hover{
    background-color: #0648;
    cursor: pointer;
  }
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
    height: 100%;
    box-sizing: border-box;
  }
  .links{
    margin: 10px;
    box-sizeing: border-box;
    background: #3338;
  }
</style>

