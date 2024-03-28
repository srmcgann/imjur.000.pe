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
  data(){
    return {
      c: document.createElement('canvas'),
      x: null,
      linkType: '',
      img: null,
      w: 0,
      h: 0,
      t: 0,
    }
  },
  methods: {
    Draw(){
      this.x.globalAlpha = 1
      this.x.fillStyle='#0008'
      this.x.fillRect(0,0,this.c.width,this.c.height)
      let fillStyle = 'contain'
      let scl
      switch(fillStyle){
        case 'contain':
          scl = this.c.width/this.c.height <= 1.777777778 ? this.c.width/this.w : this.c.height/this.h
          break
        case 'cover':
          scl = this.c.width/this.c.height > 1.777777778 ? this.c.width/this.w : this.c.height/this.h
          break
      }
      let w = this.w * scl
      let h = this.h * scl
      this.x.drawImage(this.img,this.c.width/2-w/2,this.c.height/2-h/2,w,h)
      this.t += 1/60
      if(this.t<2 || this.linkType == 'video') requestAnimationFrame(this.Draw)
    },
    close(){
      this.state.closePreview()
    }
  },
  mounted(){
    this.$refs.slideshow.appendChild(this.c)
    this.x = this.c.getContext('2d')
    switch(this.link.type.split('/')[0]){
      case 'image': this.linkType = 'image'; break
      case 'audio': this.linkType = 'audio'; break
      case 'video': this.linkType = 'video'; break
    }


    this.c.style.width = '200px'
    this.c.style.height = '113px'
    this.c.style.borderRadius = '20px'
    if(0 && this.linkType == 'video'){
      this.img = document.createElement('video')
      this.img.loop = true
      this.img.muted = true
      this.img.oncanplay = () => {
        this.w = this.img.videoWidth
        this.h = this.img.videoHeight
        this.c.width = this.w
        this.c.height = this.h
        this.img.play()
        this.Draw()
      }
      this.img.src = this.link.href
    }
    if(this.linkType == 'image' || this.linkType == 'audio'){
      this.img = new Image()
      this.img.onload = () => {
        this.w = this.img.width
        this.h = this.img.height
        this.c.width = this.w
        this.c.height = this.h

        let rsz = window.onresize = () => {
          let el = this.$refs.slideshow
          let ar = el.clientWidth / el.clientHeight
          let tgt_ar = this.w/this.h
          let margin = 20
          if(ar > tgt_ar){
            this.c.style.height = (el.clientHeight - margin) + 'px'
            this.c.style.width = (el.clientHeight * tgt_ar - margin) + 'px'
          }else{
            this.c.style.width = (el.clientWidth - margin) + 'px'
            this.c.style.height = (el.clientWidth / tgt_ar - margin) + 'px'
          }
        }
        rsz()

        this.Draw()
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
      }
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
      this.$refs.slideshow.appendChild(video)
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
    border: 1px solid red;
    background: #000;
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
