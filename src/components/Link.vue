<!--
todo
  ✔ dropable files
  ✔ fix video & audio thumbnails
  ✔ file hash unifies same-upload sources
  ✔ fix loading animations
  ✔ preload loading (and other) assets
  ✔ display errors
  ✔ tile-able cards (flex)
  ✔ log original file name
  ✔ lightbox sim / previews
  * users, optional logins/profiles
    └-> * comments
        * votes
        * collections
        * login button
        * profile page
        
  * youtube field
  * admin panel
  * optional autodelete
  * log & display asset origin
  * URL uploads
  * social media metadata
  * gallery / trending
  * load/resource balancing
  
-->

<template>
  <div class="link" ref="anchor">
    <div class="linkThumb" ref="linkThumb" @click.prevent.stop="preview()" title="view this asset"></div>
    <!--#{{link.ct+1}}-->
    <div class="copyLinkButton" @click.prevent.stop="copy()" title="copy link to clipboard"></div><br>
    <a :href="link.href" class="openButton" @click.prevent.stop="open()" title="open link in new tab"></a>
    <!-- <span style="visibility: hidden; position: absolute;" v-html="link.href" ref="href"></span> -->
    <!-- <span class="href" style="font-size: 1em" v-html="link.type"></span><br> -->
    <!-- <span class="href" style="font-size: 1em" v-html="'size: ' + link.size.toLocaleString('en-us')"></span><br> -->
  </div>
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
      img: null,
      w: 0,
      h: 0,
      t: 0,
    }
  },
  methods: {
    copy(){
      this.state.copy(this.link.href)
    },
    open(){
      open(this.link.href, '_blank')
    },
    preview(){
      this.state.previewLink = this.link
      this.state.showPreview = true
    },
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
      switch(this.linkType){
        case 'image':
          if(!this.img.width) setTimeout(()=>{requestAnimationFrame(this.Draw)}, 200)
          break
        case 'video:
          requestAnimationFrame(this.Draw)
          break
      }
    }
  },
  mounted(){
    this.$refs.linkThumb.appendChild(this.c)
    this.x = this.c.getContext('2d')
    switch(this.link.type.split('/')[0]){
      case 'image': this.linkType = 'image'; break
      case 'audio': this.linkType = 'audio'; break
      case 'video': this.linkType = 'video'; break
    }
    this.c.width = 500
    this.c.height = 500/1.77777778
    this.c.style.width = '200px'
    this.c.style.height = '113px'
    this.c.style.borderRadius = '20px'
    if(this.linkType == 'video'){
      this.img = document.createElement('video')
      this.img.loop = true
      this.img.muted = true
      this.img.oncanplay = () => {
        this.w = this.img.videoWidth
        this.h = this.img.videoHeight
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
        this.Draw()
      }
      let l
      this.img.src = this.linkType == 'audio' ? 'musicNotes.svg' : 'thumb.php?res=uploads/' + (l=this.link.href.split('/'))[l.length-1].split('?')[0]
    }
  }
}
</script>

<style scoped>
  .link:hover{
    background-color: #408a;
  }
  .link{
    display: inline-block;
    height: 123px;
    color: #acd;
    background-color: #204a;
    font-size: 20px;
    min-width: 268px;
    box-sizing: border-box;
    text-align: left;
    margin: 10px;
    word-break: break-word;
    border-radius: 20px;
    vertical-align: top;
  }
  .href{
    font-size: .6em;
    color: #0ff;
    margin: 5px;
    padding: 3px;
    width: calc(100% - 10px);
  }
  .copyLinkButton, .openButton{
    display: inline-block;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url(../assets/link.png);
    width: 45px;
    height: 45px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    margin-top: 8px;
    margin-left: 3px;
  }
  .openButton{
    background-image: url(../assets/open.png);
    background-color: #08f;
    background-size: 80% 80%;
  }
  .copyLinkButton{
    background-size: contain;
    background-image: url(../assets/link.png);
    background-color: #f06;
  }
  .linkThumb{
    float: left;
    width: 200px;
    height: 113px;
    margin: 5px;
    cursor: pointer;
    background-size: contain;
    background-position: 20px 20px;
    background-repeat: no-repeat;
    background-color: #000;
    border-radius: 20px;
  }
</style>

