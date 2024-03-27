(function(){"use strict";var t={8861:function(t,e,i){var s=i(3751),n=i(641);const o=(0,n.Lk)("div",{id:"copyConfirmation"},[(0,n.Lk)("div",{id:"innerCopied"},"COPIED!")],-1);function l(t,e,i,s,l,a){const h=(0,n.g2)("Header"),r=(0,n.g2)("Main"),c=(0,n.g2)("Footer"),d=(0,n.g2)("Modal"),p=(0,n.g2)("Preview");return(0,n.uX)(),(0,n.CE)("div",null,[(0,n.bF)(h,{state:l.state},null,8,["state"]),(0,n.bF)(r,{state:l.state},null,8,["state"]),(0,n.bF)(c,{state:l.state},null,8,["state"]),l.state.showModal?((0,n.uX)(),(0,n.Wv)(d,{key:0,state:l.state,content:l.state.modalContent},null,8,["state","content"])):(0,n.Q3)("",!0),l.state.showPreview?((0,n.uX)(),(0,n.Wv)(p,{key:1,state:l.state,link:l.state.previewLink},null,8,["state","link"])):(0,n.Q3)("",!0),o])}const a={class:"header"};function h(t,e,i,s,o,l){return(0,n.uX)(),(0,n.CE)("div",a,[(0,n.Lk)("div",{class:"headerImg",onClick:e[0]||(e[0]=(...e)=>t.window.location.refresh&&t.window.location.refresh(...e))})])}var r={name:"Header",props:["state"],data(){return{}},methods:{},mounted(){}},d=i(6262);const p=(0,d.A)(r,[["render",h],["__scopeId","data-v-3b37f853"]]);var u=p;const m=t=>((0,n.Qi)("data-v-7b270c5d"),t=t(),(0,n.jt)(),t),g={class:"main",ref:"main"},v={ref:"dropTargetCaption",id:"dropTargetCaption"},f=m((()=>(0,n.Lk)("br",null,null,-1))),k=m((()=>(0,n.Lk)("br",null,null,-1))),w=m((()=>(0,n.Lk)("br",null,null,-1))),y=m((()=>(0,n.Lk)("br",null,null,-1))),b=m((()=>(0,n.Lk)("br",null,null,-1))),L=m((()=>(0,n.Lk)("br",null,null,-1))),T=m((()=>(0,n.Lk)("br",null,null,-1))),C=m((()=>(0,n.Lk)("br",null,null,-1))),x=m((()=>(0,n.Lk)("br",null,null,-1))),M=m((()=>(0,n.Lk)("br",null,null,-1))),E=m((()=>(0,n.Lk)("br",null,null,-1))),I=m((()=>(0,n.Lk)("div",{style:{"font-size":".7em"}},[(0,n.eW)(" WARRANTY: none"),(0,n.Lk)("br"),(0,n.Lk)("br"),(0,n.eW)(" this is a work-in-progress."),(0,n.Lk)("br"),(0,n.eW)(" your files will likely be deleted")],-1))),j={key:0,class:"links"},A=m((()=>(0,n.Lk)("br",null,null,-1)));function F(t,e,i,o,l,a){const h=(0,n.g2)("Link");return(0,n.uX)(),(0,n.CE)("div",g,[(0,n.Lk)("div",{id:"dropTarget",class:"dropTarget",onDragover:e[0]||(e[0]=(0,s.D$)((()=>{}),["prevent"])),onDrop:e[1]||(e[1]=(0,s.D$)((t=>a.dropFiles(t)),["prevent"])),onClick:e[2]||(e[2]=t=>a.loadFiles()),ref:"dropTarget"},[(0,n.Lk)("div",v,[(0,n.eW)(" throw sum filez [click/drop]"),f,k,(0,n.eW)(" accepted: gif"),w,(0,n.eW)("           web[p/m]"),y,(0,n.eW)("           png"),b,(0,n.eW)("           jp[e]g"),L,(0,n.eW)("           mp4"),T,(0,n.eW)("           mp3"),C,x,(0,n.eW)(" max size: 25MB"),M,E,I],512),i.state.links.length?((0,n.uX)(),(0,n.CE)("div",j,[(0,n.eW)(" links"),A,((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(i.state.links,(t=>((0,n.uX)(),(0,n.Wv)(h,{state:i.state,link:t},null,8,["state","link"])))),256))])):(0,n.Q3)("",!0)],544)],512)}i(4114);const W=t=>((0,n.Qi)("data-v-16017fca"),t=t(),(0,n.jt)(),t),D={class:"link",ref:"anchor"},P=W((()=>(0,n.Lk)("br",null,null,-1))),_=["href"],$=["innerHTML"];function H(t,e,i,o,l,a){return(0,n.uX)(),(0,n.CE)("div",D,[(0,n.Lk)("div",{class:"linkThumb",ref:"linkThumb",onClick:e[0]||(e[0]=(0,s.D$)((t=>a.preview()),["prevent","stop"]))},null,512),(0,n.Lk)("div",{class:"copyLinkButton",onClick:e[1]||(e[1]=(0,s.D$)((t=>a.copy()),["prevent","stop"])),title:"copy link"}),P,(0,n.Lk)("a",{href:i.link.href,class:"openButton",onClick:e[2]||(e[2]=(0,s.D$)((t=>a.open()),["prevent","stop"])),title:"open link"},null,8,_),(0,n.Lk)("span",{style:{visibility:"hidden",position:"absolute"},innerHTML:i.link.href,ref:"href"},null,8,$)],512)}var O={name:"Link",props:["state","link"],data(){return{c:document.createElement("canvas"),x:null,linkType:"",img:null,w:0,h:0,t:0}},methods:{copy(){this.state.copy(this.$refs.href)},open(){open(this.link.href,"_blank")},preview(){this.state.previewLink=this.link,this.state.showPreview=!0},Draw(){this.x.globalAlpha=1,this.x.fillStyle="#0008",this.x.fillRect(0,0,this.c.width,this.c.height);let t,e="contain";switch(e){case"contain":t=this.c.width/this.c.height<=1.777777778?this.c.width/this.w:this.c.height/this.h;break;case"cover":t=this.c.width/this.c.height>1.777777778?this.c.width/this.w:this.c.height/this.h;break}let i=this.w*t,s=this.h*t;this.x.drawImage(this.img,this.c.width/2-i/2,this.c.height/2-s/2,i,s),this.t+=1/60,(this.t<2||"video"==this.linkType)&&requestAnimationFrame(this.Draw)}},mounted(){switch(this.$refs.linkThumb.appendChild(this.c),this.x=this.c.getContext("2d"),this.link.type.split("/")[0]){case"image":this.linkType="image";break;case"audio":this.linkType="audio";break;case"video":this.linkType="video";break}if(this.c.width=500,this.c.height=500/1.77777778,this.c.style.width="200px",this.c.style.height="113px",this.c.style.borderRadius="20px","video"==this.linkType&&(this.img=document.createElement("video"),this.img.loop=!0,this.img.muted=!0,this.img.oncanplay=()=>{this.w=this.img.videoWidth,this.h=this.img.videoHeight,this.img.play(),this.Draw()},this.img.src=this.link.href),"image"==this.linkType||"audio"==this.linkType){let t;this.img=new Image,this.img.onload=()=>{this.w=this.img.width,this.h=this.img.height,this.Draw()},this.img.src="audio"==this.linkType?"musicNote.png":"thumb.php?res=uploads/"+(t=this.link.href.split("/"))[t.length-1].split("?")[0]}}};const R=(0,d.A)(O,[["render",H],["__scopeId","data-v-16017fca"]]);var S=R,X={name:"Main",props:["state"],components:{Link:S},data(){return{preload:[],rejects:[]}},methods:{uploadFiles(t){fetch("upload.php",{method:"POST",body:t}).then((t=>t.json())).then((t=>{console.log("response from upload.php: ",t),this.state.uploadInprogress=!1,t[0]?(this.$refs.dropTargetCaption.style.display="none",t[1].map(((e,i)=>{this.addLink(t[2][i],t[3][i],i,location.href.split("?")[0]+e)})),this.state.modalContent="",this.state.closeModal()):this.state.modalContent='<div style="min-width:90vw; min-height: 50vh; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);background: #8002; color: #f88; padding-top: 100px;">'+t[5]+"</div>"}))},processUpload(t){this.state.uploadInprogress=!0,this.state.modalContent='<video src="loading.mp4" style="min-width:50vw; min-height: 50vh; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); pointer-events: none; opacity: .6;" loop autoplay muted></video>',this.state.showModal=!0,this.$nextTick((()=>{let e=0,i=new FormData;t.map(((t,s)=>{console.log(`file ${s}: `,t),t.size>25e6?this.rejects=[...this.rejects,t]:(e++,i.append(`uploads_${s}`,t))}));let s='<div style="min-width:90vw; min-height: 50vh; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);background: #4008; color: #f88; padding-top: 100px;">';this.rejects.map((t=>{let e=(t.size/1e6|0).toLocaleString("en-us")+" MB<br>";s+=`oversized/rejected: size: ${e} "${t.name}" <br><br>`})),this.rejects.length&&(this.state.modalQueue=[...this.state.modalQueue,s+"</div>"],this.state.closeModal()),e&&this.uploadFiles(i)}))},dropFiles(t){let e=[];t.dataTransfer.items?[...t.dataTransfer.items].forEach(((t,i)=>{if("file"===t.kind){const i=t.getAsFile();e=[...e,i]}})):e=Array.from(t.dataTransfer.files),e.length&&this.processUpload(e)},addLink(t,e,i,s){let n={size:t,type:e,ct:i,href:s};this.state.links.push(n)},loadFiles(){if(this.state.links.length)return;let t=document.createElement("input");t.type="file",t.name="uploads[]",t.multiple=!0,t.accept="image/gif, image/jiff, image/jpeg, image/jpg, image/png, image/webp, video/mp4, video/webm, video/mkv, audio/mp3, audio/wav, audio/mpeg",t.onchange=()=>this.processUpload(Array.from(t.files)),t.click()}},mounted(){this.preload=[...this.preload,[document.createElement("video"),"loading.mp4"]],this.preload.map((t=>{t[0].src=t[1]}))}};const Q=(0,d.A)(X,[["render",F],["__scopeId","data-v-7b270c5d"]]);var z=Q;const B={class:"footer"},N=["innerHTML"];function U(t,e,i,s,o,l){return(0,n.uX)(),(0,n.CE)("div",B,[(0,n.Lk)("span",{class:"title",innerHTML:i.state.footerMsg},null,8,N)])}var q={name:"Footer",props:["state"],data(){return{}},methods:{},mounted(){}};const G=(0,d.A)(q,[["render",U],["__scopeId","data-v-0d90a3d2"]]);var Y=G;const J={class:"modal"},K=["innerHTML"];function V(t,e,i,s,o,l){return(0,n.uX)(),(0,n.CE)("div",J,[(0,n.Lk)("button",{onClick:e[0]||(e[0]=t=>l.close()),class:"cancelButton",title:"close this view"}," close/cancel "),(0,n.Lk)("div",{class:"modalInner",innerHTML:i.content},null,8,K)])}var Z={name:"Modal",props:["state","content"],methods:{close(){this.state.closeModal()}},mounted(){}};const tt=(0,d.A)(Z,[["render",V],["__scopeId","data-v-b3fc4592"]]);var et=tt;const it={class:"preview"},st={class:"previewInner"},nt={class:"slideshow",ref:"slideshow"};function ot(t,e,i,s,o,l){return(0,n.uX)(),(0,n.CE)("div",it,[(0,n.Lk)("button",{onClick:e[0]||(e[0]=t=>l.close()),class:"cancelButton",title:"close this view"}," close/cancel "),(0,n.Lk)("div",st,[(0,n.Lk)("div",nt,null,512)])])}var lt={name:"Preview",props:["state","link"],data(){return{c:document.createElement("canvas"),x:null,linkType:"",img:null,w:0,h:0,t:0}},methods:{Draw(){this.x.globalAlpha=1,this.x.fillStyle="#0008",this.x.fillRect(0,0,this.c.width,this.c.height);let t,e="contain";switch(e){case"contain":t=this.c.width/this.c.height<=1.777777778?this.c.width/this.w:this.c.height/this.h;break;case"cover":t=this.c.width/this.c.height>1.777777778?this.c.width/this.w:this.c.height/this.h;break}let i=this.w*t,s=this.h*t;this.x.drawImage(this.img,this.c.width/2-i/2,this.c.height/2-s/2,i,s),this.t+=1/60,(this.t<2||"video"==this.linkType)&&requestAnimationFrame(this.Draw)},close(){this.state.closePreview()}},mounted(){switch(this.$refs.slideshow.appendChild(this.c),this.x=this.c.getContext("2d"),this.link.type.split("/")[0]){case"image":this.linkType="image";break;case"audio":this.linkType="audio";break;case"video":this.linkType="video";break}if(this.c.style.width="200px",this.c.style.height="113px",this.c.style.borderRadius="20px","video"==this.linkType&&(this.img=document.createElement("video"),this.img.loop=!0,this.img.muted=!0,this.img.oncanplay=()=>{this.w=this.img.videoWidth,this.h=this.img.videoHeight,this.c.width=this.w,this.c.height=this.h,this.img.play(),this.Draw()},this.img.src=this.link.href),"image"==this.linkType||"audio"==this.linkType){if(this.img=new Image,this.img.onload=()=>{this.w=this.img.width,this.h=this.img.height,this.c.width=this.w,this.c.height=this.h;let t=window.onresize=()=>{let t=this.$refs.slideshow,e=t.clientWidth/t.clientHeight,i=this.w/this.h,s=20;e>i?(c.style.height=t.clientHeight-s+"px",c.style.width=t.clientHeight*i-s+"px"):(c.style.width=t.clientWidth-s+"px",c.style.height=t.clientWidth/i-s+"px")};t(),this.Draw()},"audio"==this.linkType){let t=document.createElement("audio");t.controls=!0,t.style.position="absolute",t.style.left="50%",t.style.top="50%",t.loop=!0,t.style.transform="translate(-50%, -50%)",t.oncanplay=()=>{t.play()},this.$refs.slideshow.appendChild(t),t.src=this.link.href}if("video"==this.linkType){let t=document.createElement("video");t.controls=!0,t.style.position="absolute",t.style.left="50%",t.style.top="50%",t.style.width="100%",t.style.height="100%",t.style.objectFit="contain",t.loop=!0,t.style.transform="translate(-50%, -50%)",t.oncanplay=()=>{t.play()},this.$refs.slideshow.appendChild(audio),t.src=this.link.href}let t;this.img.src="audio"==this.linkType?"musicNote.png":"thumb.php?res=uploads/"+(t=this.link.href.split("/"))[t.length-1].split("?")[0]}}};const at=(0,d.A)(lt,[["render",ot],["__scopeId","data-v-02a3fc47"]]);var ht=at,rt={name:"App",components:{Header:u,Main:z,Footer:Y,Modal:et,Preview:ht},data(){return{state:{footerMsg:"<b>IMJUR</b><br>A FREE DIGITAL ASSET HOSTING SERVICE - ©"+(new Date).getFullYear()+'<br>contact: <a href="mailto:whitehotrobot@gmail.com">whitehotrobot@gmail.com</a>',links:[],uploadInProgress:!1,showModal:!1,showPreview:!1,modalContent:"",modalQueue:[],previewLink:null,closeModal:null,closePreview:null,copy:null}}},methods:{copy(t){var e=document.createRange();e.selectNode(t),window.getSelection().removeAllRanges(),window.getSelection().addRange(e),document.execCommand("copy"),window.getSelection().removeAllRanges();let i=document.querySelector("#copyConfirmation");i.style.display="block",i.style.opacity=1;let s=()=>{+i.style.opacity>0&&(i.style.opacity-=.04,+i.style.opacity<.1?(i.style.opacity=1,i.style.display="none"):setTimeout((()=>{s()}),10))};setTimeout((()=>{s()}),250)},closeModal(){this.state.modalQueue.length?this.state.modalContent=this.state.modalQueue.shift():(this.state.showModal=!1,this.state.modalContent="")},closePreview(){this.state.showPreview=!1,this.state.previewLink=null}},watch:{"state.uploadInProgress"(t){}},mounted(){this.state.closeModal=this.closeModal,this.state.closePreview=this.closePreview,this.state.copy=this.copy}};const ct=(0,d.A)(rt,[["render",l]]);var dt=ct;(0,s.Ef)(dt).mount("#app")}},e={};function i(s){var n=e[s];if(void 0!==n)return n.exports;var o=e[s]={exports:{}};return t[s].call(o.exports,o,o.exports,i),o.exports}i.m=t,function(){var t=[];i.O=function(e,s,n,o){if(!s){var l=1/0;for(c=0;c<t.length;c++){s=t[c][0],n=t[c][1],o=t[c][2];for(var a=!0,h=0;h<s.length;h++)(!1&o||l>=o)&&Object.keys(i.O).every((function(t){return i.O[t](s[h])}))?s.splice(h--,1):(a=!1,o<l&&(l=o));if(a){t.splice(c--,1);var r=n();void 0!==r&&(e=r)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[s,n,o]}}(),function(){i.d=function(t,e){for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};i.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,o,l=s[0],a=s[1],h=s[2],r=0;if(l.some((function(e){return 0!==t[e]}))){for(n in a)i.o(a,n)&&(i.m[n]=a[n]);if(h)var c=h(i)}for(e&&e(s);r<l.length;r++)o=l[r],i.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return i.O(c)},s=self["webpackChunkimjur_000_pe"]=self["webpackChunkimjur_000_pe"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=i.O(void 0,[504],(function(){return i(8861)}));s=i.O(s)})();
//# sourceMappingURL=app.e981b8d6.js.map