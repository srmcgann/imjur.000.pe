<template>
  <a :href="link.href" target="_blank" class="link" ref="anchor">
    <div class="linkThumb" ref="linkThumb" @click="clickHandler(event)"></div>
    #{{link.ct}}<br>
    href: {{link.href}}<br>
    type: {{link.type}}<br>
    size: {{link.size.toLocaleString('en-us')}}<br>
  </a>
</template>

<script>

export default {
  name: 'Link',
  props: [ 'state', 'link' ],
  data(){
    return {
      c: document.createElement('canvas'),
      x: null,
      linkType: '',
      img: null
    }
  },
  methods: {
    clickHandler(e){
      e.stopPropagation()
      e.preventDefault()
    },
    Draw(){
      this.x.globalAlpha = 1
      this.x.fillStyle='#0008'
      this.x.fillRect(0,0,this.c.width,this.c.height)
      let fillStyle = 'contain'
      let scl
      switch(fillStyle){
        case 'contain':
          scl = this.c.width/this.c.height <= 1.777777778 ? this.c.width/this.img.width : this.c.height/this.img.height
          break
        case 'cover':
          scl = this.c.width/this.c.height > 1.777777778 ? this.c.width/this.img.width : this.c.height/this.img.height
          break
      }
      let w = this.img.width * scl
      let h = this.img.height * scl
      this.x.drawImage(this.img,this.c.width/2-w/2,this.c.height/2-h/2,w,h)
      requestAnimationFrame(this.Draw)
    }
  },
  mounted(){
    this.$refs.linkThumb.appendChild(this.c)
    this.x = this.c.getContext('2d')
    switch(this.link.type){
      case 'image/jpg':
        this.linkType = 'image';
        break
      case 'image/jpeg':
        this.linkType = 'image';
        break
      case 'image/webp':
        this.linkType = 'image';
        break
      case 'image/png': 
        this.linkType = 'image';
        break
      case 'image/gif':
        this.linkType = 'image';
        break
      case 'video/mp4':
        this.linkType = 'video';
        break
      case 'video/mkv':
        this.linkType = 'video';
        break
      case 'video/webm':
        this.linkType = 'video';
        break
      case 'audio/mp3':
        this.linkType = 'audio';
        break
    }
    this.c.width = 500
    this.c.height = 500
    if(this.linkType == 'video'){
      this.img = document.createElement('video')
      this.img.loop = true
      this.img.muted = true
      this.img.oncanplay = () => {
        this.img.play()
        this.c.style.width = '40px'
        this.c.style.height = '40px'
        this.Draw()
      }
      this.img.src = this.link.href
    }
    if(this.linkType == 'image'){
      this.img = new Image
      this.img.onload = () => {
        this.c.style.width = '40px'
        this.c.style.height = '40px'
        this.Draw()
      }
      this.img.src = this.link.href
    }
    if(this.linkType == 'audio'){
      this.img = new Image
      this.img.onload = () => {
        this.c.style.width = '40px'
        this.c.style.height = '40px'
        this.Draw()
      }
      this.img.src = '../assets/musicNote.png'
    }
  }
}
</script>

<style scoped>
  .link:hover{
    background-color: #80fa;
  }
  .link{
    background-color: #408a;
    font-size: 20px;
    height: 50px;
    min-width: 400px;
    margin: 20px;
    box-sizing: border-box;
    text-align: left;
    margin: 10px;
  }
  .linkThumb{
    float: left;
    width: 40px;
    height: 40px;
    margin: 5px;
    background-size: contain;
    background-position: 20px 20px;
    background-repeat: no-repeat;
    background-color: #000;
  }
</style>

