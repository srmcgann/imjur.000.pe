<template>
  <div class="preview">
    <button @click="close()" class="cancelButton" title="close this view">
      close/cancel
    </button>
    <div class="previewInner">
      <div class="slideshow" ref="slideshow"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Preview',
  props: [ 'state', 'link' ],
  methods: {
    close(){
      this.state.closePreview()
    }
  },
  mounted(){
    this.x = this.c.getContext('2d')
    switch(this.link.type.split('/')[0]){
      case 'image': this.linkType = 'image'; break
      case 'audio': this.linkType = 'audio'; break
      case 'video': this.linkType = 'video'; break
    }

    if(this.linkType == 'image'){
      this.img = document.createElement('div')
      img.style.top = '50%'
      img.style.left = '50%'
      img.style.width = '100%'
      img.style.height = '100%'
      img.style.position = 'absolute'
      img.style.objectFit = 'contain'
      img.style.backgroundColor = '#000'
      img.style.backgroundSize = 'contain'
      img.style.backgroundRepeat = 'no-repeat'
      img.style.backgroundPosition = 'center center'
      img.style.backgroundImage = `url(${this.link.href})`
      this.$refs.slideshow.appendChild(img)
    }
    if(this.linkType == 'audio'){
      let audio = document.createElement('audio')
      audio.controls = true
      audio.style.position = 'absolute'
      audio.style.left = '50%'
      audio.style.top = '50%'
      audio.loop = true
      audio.style.transform = 'translate(-50%, -50%)'
      audio.oncanplay = () => {
        audio.play()
      }
      this.$refs.slideshow.appendChild(audio)
      audio.src = this.link.href
      let l
      this.img.src = this.linkType == 'audio' ? 'musicNote.png' : 'thumb.php?res=uploads/' + (l=this.link.href.split('/'))[l.length-1].split('?')[0]
    }
    if(this.linkType == 'video'){
      let vid = document.createElement('video')
      vid.controls = true
      vid.style.position = 'absolute'
      vid.style.left = '50%'
      vid.style.top = '50%'
      vid.style.width = '100%'
      vid.style.height = '100%'
      vid.style.objectFit = 'contain'
      vid.loop = true
      vid.style.transform = 'translate(-50%, -50%)'
      vid.oncanplay = () => {
        vid.play()
      }
      this.$refs.slideshow.appendChild(vid)
      vid.src = this.link.href
    }
  }
}
</script>

<style scoped>
  .preview{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    font-size: 14px;
  }
  .cancelButton{
    background: #822;
    color: #f88;
    text-shadow: 1px 1px 2px #000;
    font-weight: 900;
    width: 125px;
    font-family: Courier Prime;
    font-size: 14px;
    border: none;
    border-radius: 10px;
    padding: 5px;
    position: absolute;
    z-index: 1100;
    right: 20px;
    top: 14px;
  }
  .slideshow{
    margin: 100px;
    height: 100%;
    width: 100%;
    border: 1px solid red;
  }
  .previewInner{
    text-align: center;
    padding: 25px;
    width: 100%;
    height: 100%;
    font-size: 25px;
    color: #fff;
    text-shadow: 2px 2px 2px #000;
    background: #001b;
  }
</style>
