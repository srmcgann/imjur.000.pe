<template>
  <div class="main">
    <div class="dropTarget" @click="loadFiles()">
      throw sum filez [drag/click]<br><br>
      accepted: gif, web[p/m], png, jp[e]g, mp4, mp3
      max size: 100MB<br>
      WARRANTY: none<br>
    </div>
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
    uploadFiles(fd){
      fetch('upload.php', {
        method: "POST", body: fd
      }).then(res=>res.json()).then(data=>{
        console.log('response from upload.php: ', data)
        if(data[0]){
          console.log(`success! slug is: ${data[1]}`
        })
      })
    },
    loadFiles(){
      let fd = new FormData()
      let files = document.createElement('input')
      files.type = 'file'
      files.name = 'uploads[]'
      files.multiple = true
      files.accept = 'image/gif, image/jiff, image/jpeg, image/jpg, image/png, image/webp, video/mp4, video/webm, video/mkv, audio/mp3'
      files.click()
      console.log('sending files: ', files)
      let ct = 0
      for ([i, file] of Array.from(files.files).entries()){
        ct++
        fd.append(`uploads_${i}`, file)
      }
      if(ct) uploadFiles(fd)
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
</style>

