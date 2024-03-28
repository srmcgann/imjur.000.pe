(function(){"use strict";var e={3295:function(e,t,i){var s=i(3751),n=i(641);const o=(0,n.Lk)("div",{id:"copyConfirmation"},[(0,n.Lk)("div",{id:"innerCopied"},"COPIED!")],-1);function l(e,t,i,s,l,a){const r=(0,n.g2)("Header"),h=(0,n.g2)("Main"),c=(0,n.g2)("Footer"),d=(0,n.g2)("Modal"),p=(0,n.g2)("Preview");return(0,n.uX)(),(0,n.CE)("div",null,[(0,n.bF)(r,{state:l.state},null,8,["state"]),(0,n.bF)(h,{state:l.state},null,8,["state"]),(0,n.bF)(c,{state:l.state},null,8,["state"]),l.state.showModal?((0,n.uX)(),(0,n.Wv)(d,{key:0,state:l.state,content:l.state.modalContent},null,8,["state","content"])):(0,n.Q3)("",!0),l.state.showPreview?((0,n.uX)(),(0,n.Wv)(p,{key:1,state:l.state,link:l.state.previewLink},null,8,["state","link"])):(0,n.Q3)("",!0),o])}const a={class:"header"};function r(e,t,i,s,o,l){return(0,n.uX)(),(0,n.CE)("div",a,[(0,n.Lk)("div",{class:"headerImg",onClick:t[0]||(t[0]=e=>l.reload())})])}var h={name:"Header",props:["state"],data(){return{}},methods:{reload(){window.location.reload()}},mounted(){}},c=i(6262);const d=(0,c.A)(h,[["render",r],["__scopeId","data-v-489bb0c8"]]);var p=d,u=i(33);const m=e=>((0,n.Qi)("data-v-6ca09891"),e=e(),(0,n.jt)(),e),v={class:"main",ref:"main"},k={ref:"dropTargetCaption",id:"dropTargetCaption"},f=m((()=>(0,n.Lk)("br",null,null,-1))),g=m((()=>(0,n.Lk)("br",null,null,-1))),y=m((()=>(0,n.Lk)("br",null,null,-1))),w=m((()=>(0,n.Lk)("br",null,null,-1))),b=m((()=>(0,n.Lk)("br",null,null,-1))),L=m((()=>(0,n.Lk)("br",null,null,-1))),T=m((()=>(0,n.Lk)("br",null,null,-1))),C=m((()=>(0,n.Lk)("br",null,null,-1))),M=m((()=>(0,n.Lk)("br",null,null,-1))),E=m((()=>(0,n.Lk)("br",null,null,-1))),j=m((()=>(0,n.Lk)("br",null,null,-1))),I=m((()=>(0,n.Lk)("div",{style:{"font-size":".7em"}},[(0,n.eW)(" WARRANTY: none"),(0,n.Lk)("br"),(0,n.Lk)("br"),(0,n.eW)(" this is a work-in-progress."),(0,n.Lk)("br"),(0,n.eW)(" your files will likely be deleted")],-1))),F={key:0,class:"links"},x=m((()=>(0,n.Lk)("br",null,null,-1)));function A(e,t,i,o,l,a){const r=(0,n.g2)("Link");return(0,n.uX)(),(0,n.CE)("div",v,[(0,n.Lk)("div",{id:"dropTarget",class:"dropTarget",style:(0,u.Tr)(i.state.links.length?"":"cursor: pointer;"),onDragover:t[0]||(t[0]=(0,s.D$)((()=>{}),["prevent"])),onDrop:t[1]||(t[1]=(0,s.D$)((e=>a.dropFiles(e)),["prevent"])),onClick:t[2]||(t[2]=e=>a.loadFiles()),ref:"dropTarget"},[(0,n.Lk)("div",k,[(0,n.eW)(" throw sum filez [click/drop]"),f,g,(0,n.eW)(" accepted: gif"),y,(0,n.eW)("           web[p/m]"),w,(0,n.eW)("           png"),b,(0,n.eW)("           jp[e]g"),L,(0,n.eW)("           mp4"),T,(0,n.eW)("           mp3"),C,M,(0,n.eW)(" max size: 25MB"),E,j,I],512),i.state.links.length?((0,n.uX)(),(0,n.CE)("div",F,[(0,n.eW)(" links"),x,((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(i.state.links,(e=>((0,n.uX)(),(0,n.Wv)(r,{state:i.state,link:e},null,8,["state","link"])))),256))])):(0,n.Q3)("",!0)],36)],512)}i(4114);const P=e=>((0,n.Qi)("data-v-5d8f7e6b"),e=e(),(0,n.jt)(),e),_={class:"link",ref:"anchor"},W=P((()=>(0,n.Lk)("br",null,null,-1))),$=["href"],D=["innerHTML"];function O(e,t,i,o,l,a){return(0,n.uX)(),(0,n.CE)("div",_,[(0,n.Lk)("div",{class:"linkThumb",ref:"linkThumb",onClick:t[0]||(t[0]=(0,s.D$)((e=>a.preview()),["prevent","stop"])),title:"view this asset"},null,512),(0,n.Lk)("div",{class:"copyLinkButton",onClick:t[1]||(t[1]=(0,s.D$)((e=>a.copy()),["prevent","stop"])),title:"copy link"}),W,(0,n.Lk)("a",{href:i.link.href,class:"openButton",onClick:t[2]||(t[2]=(0,s.D$)((e=>a.open()),["prevent","stop"])),title:"open link"},null,8,$),(0,n.Lk)("span",{style:{visibility:"hidden",position:"absolute"},innerHTML:i.link.href,ref:"href"},null,8,D)],512)}var R={name:"Link",props:["state","link"],data(){return{c:document.createElement("canvas"),x:null,linkType:"",img:null,w:0,h:0,t:0}},methods:{copy(){this.state.copy(this.$refs.href)},open(){open(this.link.href,"_blank")},preview(){this.state.previewLink=this.link,this.state.showPreview=!0},Draw(){this.x.globalAlpha=1,this.x.fillStyle="#0008",this.x.fillRect(0,0,this.c.width,this.c.height);let e,t="contain";switch(t){case"contain":e=this.c.width/this.c.height<=1.777777778?this.c.width/this.w:this.c.height/this.h;break;case"cover":e=this.c.width/this.c.height>1.777777778?this.c.width/this.w:this.c.height/this.h;break}let i=this.w*e,s=this.h*e;this.x.drawImage(this.img,this.c.width/2-i/2,this.c.height/2-s/2,i,s),this.t+=1/60,(this.t<2||"video"==this.linkType)&&requestAnimationFrame(this.Draw)}},mounted(){switch(this.$refs.linkThumb.appendChild(this.c),this.x=this.c.getContext("2d"),this.link.type.split("/")[0]){case"image":this.linkType="image";break;case"audio":this.linkType="audio";break;case"video":this.linkType="video";break}if(this.c.width=500,this.c.height=500/1.77777778,this.c.style.width="200px",this.c.style.height="113px",this.c.style.borderRadius="20px","video"==this.linkType&&(this.img=document.createElement("video"),this.img.loop=!0,this.img.muted=!0,this.img.oncanplay=()=>{this.w=this.img.videoWidth,this.h=this.img.videoHeight,this.img.play(),this.Draw()},this.img.src=this.link.href),"image"==this.linkType||"audio"==this.linkType){let e;this.img=new Image,this.img.onload=()=>{this.w=this.img.width,this.h=this.img.height,this.Draw()},this.img.src="audio"==this.linkType?"musicNotes.svg":"thumb.php?res=uploads/"+(e=this.link.href.split("/"))[e.length-1].split("?")[0]}}};const S=(0,c.A)(R,[["render",O],["__scopeId","data-v-5d8f7e6b"]]);var X=S,H={name:"Main",props:["state"],components:{Link:X},data(){return{preload:[],rejects:[]}},methods:{uploadFiles(e){fetch("upload.php",{method:"POST",body:e}).then((e=>e.json())).then((e=>{console.log("response from upload.php: ",e),this.state.uploadInprogress=!1,e[0]?(this.$refs.dropTargetCaption.style.display="none",e[1].map(((t,i)=>{this.addLink(e[2][i],e[3][i],i,location.href.split("?")[0]+t)})),this.state.modalContent="",this.state.closeModal()):this.state.modalContent='<div style="min-width:90vw; min-height: 50vh; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);background: #8002; color: #f88; padding-top: 100px;">'+e[5]+"</div>"}))},processUpload(e){this.state.uploadInprogress=!0,this.state.modalContent='<div style="position: absolute;left:0;top:0;width:100%;height:100%;background:#000;"><video src="loading.mp4" style="min-width:50vw; min-height: 50vh; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); pointer-events: none; opacity: .6;" loop autoplay muted></video></div>',this.state.showModal=!0,this.$nextTick((()=>{let t=0,i=new FormData;e.map(((e,s)=>{console.log(`file ${s}: `,e),e.size>25e6?this.rejects=[...this.rejects,e]:(t++,i.append(`uploads_${s}`,e))}));let s='<div style="min-width:90vw; min-height: 50vh; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);background: #4008; color: #f88; padding-top: 100px;">';this.rejects.map((e=>{let t=(e.size/1e6|0).toLocaleString("en-us")+" MB<br>";s+=`oversized/rejected: size: ${t} "${e.name}" <br><br>`})),this.rejects.length&&(this.state.modalQueue=[...this.state.modalQueue,s+"</div>"],this.state.closeModal()),t&&this.uploadFiles(i)}))},dropFiles(e){let t=[];e.dataTransfer.items?[...e.dataTransfer.items].forEach(((e,i)=>{if("file"===e.kind){const i=e.getAsFile();t=[...t,i]}})):t=Array.from(e.dataTransfer.files),t.length&&this.processUpload(t)},addLink(e,t,i,s){let n={size:e,type:t,ct:i,href:s};this.state.links.push(n)},loadFiles(){if(this.state.links.length)return;let e=document.createElement("input");e.type="file",e.name="uploads[]",e.multiple=!0,e.accept="image/gif, image/jiff, image/jpeg, image/jpg, image/png, image/webp, video/mp4, video/webm, video/mkv, audio/mp3, audio/wav, audio/mpeg",e.onchange=()=>this.processUpload(Array.from(e.files)),e.click()}},mounted(){this.preload=[...this.preload,[document.createElement("video"),"loading.mp4"]],this.preload.map((e=>{e[0].src=e[1]}))}};const Q=(0,c.A)(H,[["render",A],["__scopeId","data-v-6ca09891"]]);var z=Q;const B={class:"footer"},N=["innerHTML"];function U(e,t,i,s,o,l){return(0,n.uX)(),(0,n.CE)("div",B,[(0,n.Lk)("span",{class:"title",innerHTML:i.state.footerMsg},null,8,N)])}var q={name:"Footer",props:["state"],data(){return{}},methods:{},mounted(){}};const G=(0,c.A)(q,[["render",U],["__scopeId","data-v-0d90a3d2"]]);var Y=G;const J={class:"modal"},K=["innerHTML"];function V(e,t,i,s,o,l){return(0,n.uX)(),(0,n.CE)("div",J,[(0,n.Lk)("button",{onClick:t[0]||(t[0]=e=>l.close()),class:"cancelButton",title:"close this view"}," close/cancel "),(0,n.Lk)("div",{class:"modalInner",innerHTML:i.content},null,8,K)])}var Z={name:"Modal",props:["state","content"],methods:{close(){this.state.closeModal()}},mounted(){}};const ee=(0,c.A)(Z,[["render",V],["__scopeId","data-v-b3fc4592"]]);var te=ee;const ie={class:"preview"},se={class:"previewInner"},ne={class:"slideshow",ref:"slideshow"};function oe(e,t,i,s,o,l){return(0,n.uX)(),(0,n.CE)("div",ie,[(0,n.Lk)("button",{onClick:t[0]||(t[0]=e=>l.close()),class:"cancelButton",title:"close this view"}," close/cancel "),(0,n.Lk)("div",se,[(0,n.Lk)("div",ne,null,512)])])}var le={name:"Preview",props:["state","link"],methods:{close(){this.state.closePreview()}},mounted(){switch(this.link.type.split("/")[0]){case"image":this.linkType="image";break;case"audio":this.linkType="audio";break;case"video":this.linkType="video";break}if("image"==this.linkType||"audio"==this.linkType){let e=document.createElement("div");e.style.top="50%",e.style.left="50%",e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.transform="translate(-50%, -50%)",e.style.objectFit="contain",e.style.backgroundColor="#000",e.style.backgroundSize="contain",e.style.backgroundRepeat="no-repeat",e.style.backgroundPosition="center center",e.style.backgroundImage=`url(${"audio"==this.linkType?"musicNotes.svg":this.link.href})`,this.$refs.slideshow.appendChild(e)}if("audio"==this.linkType){let e=document.createElement("audio");e.controls=!0,e.style.position="absolute",e.style.left="50%",e.style.top="50%",e.loop=!0,e.style.transform="translate(-50%, -50%)",e.oncanplay=()=>{e.play()},this.$refs.slideshow.appendChild(e),e.src=this.link.href}if("video"==this.linkType){let e=document.createElement("video");e.controls=!0,e.style.position="absolute",e.style.left="50%",e.style.top="50%",e.style.width="100%",e.style.height="100%",e.style.objectFit="contain",e.style.background="#000",e.loop=!0,e.style.transform="translate(-50%, -50%)",e.oncanplay=()=>{e.play()},this.$refs.slideshow.appendChild(e),e.src=this.link.href}}};const ae=(0,c.A)(le,[["render",oe],["__scopeId","data-v-19053aca"]]);var re=ae,he={name:"App",components:{Header:p,Main:z,Footer:Y,Modal:te,Preview:re},data(){return{state:{footerMsg:"<b>IMJUR</b><br>A FREE DIGITAL ASSET HOSTING SERVICE - ©"+(new Date).getFullYear()+'<br>contact: <a href="mailto:whitehotrobot@gmail.com">whitehotrobot@gmail.com</a>',links:[],uploadInProgress:!1,showModal:!1,showPreview:!1,modalContent:"",modalQueue:[],previewLink:null,closeModal:null,closePreview:null,copy:null}}},methods:{copy(e){var t=document.createRange();t.selectNode(e),window.getSelection().removeAllRanges(),window.getSelection().addRange(t),document.execCommand("copy"),window.getSelection().removeAllRanges();let i=document.querySelector("#copyConfirmation");i.style.display="block",i.style.opacity=1;let s=()=>{+i.style.opacity>0&&(i.style.opacity-=.04,+i.style.opacity<.1?(i.style.opacity=1,i.style.display="none"):setTimeout((()=>{s()}),10))};setTimeout((()=>{s()}),250)},closeModal(){this.state.modalQueue.length?this.state.modalContent=this.state.modalQueue.shift():(this.state.showModal=!1,this.state.modalContent="")},closePreview(){this.state.showPreview=!1,this.state.previewLink=null}},watch:{"state.uploadInProgress"(e){}},mounted(){this.state.closeModal=this.closeModal,this.state.closePreview=this.closePreview,this.state.copy=this.copy}};const ce=(0,c.A)(he,[["render",l]]);var de=ce;(0,s.Ef)(de).mount("#app")}},t={};function i(s){var n=t[s];if(void 0!==n)return n.exports;var o=t[s]={exports:{}};return e[s].call(o.exports,o,o.exports,i),o.exports}i.m=e,function(){var e=[];i.O=function(t,s,n,o){if(!s){var l=1/0;for(c=0;c<e.length;c++){s=e[c][0],n=e[c][1],o=e[c][2];for(var a=!0,r=0;r<s.length;r++)(!1&o||l>=o)&&Object.keys(i.O).every((function(e){return i.O[e](s[r])}))?s.splice(r--,1):(a=!1,o<l&&(l=o));if(a){e.splice(c--,1);var h=n();void 0!==h&&(t=h)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[s,n,o]}}(),function(){i.d=function(e,t){for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};i.O.j=function(t){return 0===e[t]};var t=function(t,s){var n,o,l=s[0],a=s[1],r=s[2],h=0;if(l.some((function(t){return 0!==e[t]}))){for(n in a)i.o(a,n)&&(i.m[n]=a[n]);if(r)var c=r(i)}for(t&&t(s);h<l.length;h++)o=l[h],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(c)},s=self["webpackChunkimjur_000_pe"]=self["webpackChunkimjur_000_pe"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=i.O(void 0,[504],(function(){return i(3295)}));s=i.O(s)})();
//# sourceMappingURL=app.17fbb9ef.js.map