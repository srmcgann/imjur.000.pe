(function(){"use strict";var t={9492:function(t,e,i){var n=i(3751),s=i(641);const o=(0,s.Lk)("div",{id:"copyConfirmation"},[(0,s.Lk)("div",{id:"innerCopied"},"COPIED!")],-1);function a(t,e,i,n,a,l){const r=(0,s.g2)("Header"),d=(0,s.g2)("Main"),h=(0,s.g2)("Footer"),c=(0,s.g2)("Modal");return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.bF)(r,{state:a.state},null,8,["state"]),(0,s.bF)(d,{state:a.state},null,8,["state"]),(0,s.bF)(h,{state:a.state},null,8,["state"]),a.state.showModal?((0,s.uX)(),(0,s.Wv)(c,{key:0,state:a.state,content:a.state.modalContent},null,8,["state","content"])):(0,s.Q3)("",!0),o])}const l=t=>((0,s.Qi)("data-v-705927d8"),t=t(),(0,s.jt)(),t),r={class:"header"},d=l((()=>(0,s.Lk)("div",{class:"headerImg"},null,-1))),h=[d];function c(t,e,i,n,o,a){return(0,s.uX)(),(0,s.CE)("div",r,h)}var p={name:"Header",props:["state"],data(){return{}},methods:{},mounted(){}},u=i(6262);const m=(0,u.A)(p,[["render",c],["__scopeId","data-v-705927d8"]]);var g=m;const f=t=>((0,s.Qi)("data-v-7b270c5d"),t=t(),(0,s.jt)(),t),v={class:"main",ref:"main"},k={ref:"dropTargetCaption",id:"dropTargetCaption"},b=f((()=>(0,s.Lk)("br",null,null,-1))),y=f((()=>(0,s.Lk)("br",null,null,-1))),w=f((()=>(0,s.Lk)("br",null,null,-1))),L=f((()=>(0,s.Lk)("br",null,null,-1))),T=f((()=>(0,s.Lk)("br",null,null,-1))),C=f((()=>(0,s.Lk)("br",null,null,-1))),M=f((()=>(0,s.Lk)("br",null,null,-1))),j=f((()=>(0,s.Lk)("br",null,null,-1))),E=f((()=>(0,s.Lk)("br",null,null,-1))),x=f((()=>(0,s.Lk)("br",null,null,-1))),I=f((()=>(0,s.Lk)("br",null,null,-1))),A=f((()=>(0,s.Lk)("div",{style:{"font-size":".7em"}},[(0,s.eW)(" WARRANTY: none"),(0,s.Lk)("br"),(0,s.Lk)("br"),(0,s.eW)(" this is a work-in-progress."),(0,s.Lk)("br"),(0,s.eW)(" your files will likely be deleted")],-1))),F={key:0,class:"links"},W=f((()=>(0,s.Lk)("br",null,null,-1)));function _(t,e,i,o,a,l){const r=(0,s.g2)("Link");return(0,s.uX)(),(0,s.CE)("div",v,[(0,s.Lk)("div",{id:"dropTarget",class:"dropTarget",onDragover:e[0]||(e[0]=(0,n.D$)((()=>{}),["prevent"])),onDrop:e[1]||(e[1]=(0,n.D$)((t=>l.dropFiles(t)),["prevent"])),onClick:e[2]||(e[2]=t=>l.loadFiles()),ref:"dropTarget"},[(0,s.Lk)("div",k,[(0,s.eW)(" throw sum filez [click/drop]"),b,y,(0,s.eW)(" accepted: gif"),w,(0,s.eW)("           web[p/m]"),L,(0,s.eW)("           png"),T,(0,s.eW)("           jp[e]g"),C,(0,s.eW)("           mp4"),M,(0,s.eW)("           mp3"),j,E,(0,s.eW)(" max size: 25MB"),x,I,A],512),i.state.links.length?((0,s.uX)(),(0,s.CE)("div",F,[(0,s.eW)(" links"),W,((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(i.state.links,(t=>((0,s.uX)(),(0,s.Wv)(r,{state:i.state,link:t},null,8,["state","link"])))),256))])):(0,s.Q3)("",!0)],544)],512)}i(4114);var D=i(33);const O=t=>((0,s.Qi)("data-v-9b380924"),t=t(),(0,s.jt)(),t),$=["href"],H=O((()=>(0,s.Lk)("br",null,null,-1))),R=["innerHTML"],S=O((()=>(0,s.Lk)("br",null,null,-1)));function Q(t,e,i,o,a,l){return(0,s.uX)(),(0,s.CE)("a",{href:i.link.href,target:"_blank",class:"link",ref:"anchor"},[(0,s.Lk)("div",{class:"linkThumb",ref:"linkThumb",onClick:e[0]||(e[0]=(0,n.D$)((()=>{}),["prevent","stop"]))},null,512),(0,s.eW)(" #"+(0,D.v_)(i.link.ct+1)+" ",1),(0,s.Lk)("div",{class:"copyLinkButton",onClick:e[1]||(e[1]=(0,n.D$)((t=>l.copy()),["prevent","stop"])),title:"copy link"}),H,(0,s.Lk)("span",{class:"href",style:{display:"none"},innerHTML:i.link.href.split("//")[1],ref:"href"},null,8,R),S],8,$)}var X={name:"Link",props:["state","link"],data(){return{c:document.createElement("canvas"),x:null,linkType:"",img:null,w:0,h:0}},methods:{copy(){this.state.copy(this.$refs.href)},Draw(){this.x.globalAlpha=1,this.x.fillStyle="#0008",this.x.fillRect(0,0,this.c.width,this.c.height);let t,e="contain";switch(e){case"contain":t=this.c.width/this.c.height<=1.777777778?this.c.width/this.w:this.c.height/this.h;break;case"cover":t=this.c.width/this.c.height>1.777777778?this.c.width/this.w:this.c.height/this.h;break}let i=this.w*t,n=this.h*t;this.x.drawImage(this.img,this.c.width/2-i/2,this.c.height/2-n/2,i,n),"video"==this.linkType&&requestAnimationFrame(this.Draw)}},mounted(){switch(this.$refs.linkThumb.appendChild(this.c),this.x=this.c.getContext("2d"),this.link.type.split("/")[0]){case"image":this.linkType="image";break;case"audio":this.linkType="audio";break;case"video":this.linkType="video";break}if(this.c.width=500,this.c.height=500/1.77777778,this.c.style.width="200px",this.c.style.height="113px",this.c.style.borderRadius="20px","video"==this.linkType&&(this.img=document.createElement("video"),this.img.loop=!0,this.img.muted=!0,this.img.oncanplay=()=>{this.w=this.img.videoWidth,this.h=this.img.videoHeight,this.img.play(),this.Draw()},this.img.src=this.link.href),"image"==this.linkType||"audio"==this.linkType){let t;this.img=new Image,this.img.onload=()=>{this.w=this.img.width,this.h=this.img.height,this.Draw()},this.img.src="audio"==this.linkType?"musicNote.png":"thumb.php?res=uploads/"+(t=this.link.href.split("/"))[t.length-1].split("?")[0]}}};const z=(0,u.A)(X,[["render",Q],["__scopeId","data-v-9b380924"]]);var P=z,B={name:"Main",props:["state"],components:{Link:P},data(){return{preload:[],rejects:[]}},methods:{uploadFiles(t){fetch("upload.php",{method:"POST",body:t}).then((t=>t.json())).then((t=>{console.log("response from upload.php: ",t),this.state.uploadInprogress=!1,t[0]?(this.$refs.dropTargetCaption.style.display="none",t[1].map(((e,i)=>{this.addLink(t[2][i],t[3][i],i,location.href.split("?")[0]+e)})),this.state.modalContent="",this.state.closeModal()):this.state.modalContent='<div style="min-width:90vw; min-height: 50vh; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);background: #8002; color: #f88; padding-top: 100px;">'+t[5]+"</div>"}))},processUpload(t){this.state.uploadInprogress=!0,this.state.modalContent='<video src="loading.mp4" style="min-width:50vw; min-height: 50vh; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); pointer-events: none; opacity: .6;" loop autoplay muted></video>',this.state.showModal=!0,this.$nextTick((()=>{let e=0,i=new FormData;t.map(((t,n)=>{console.log(`file ${n}: `,t),t.size>25e6?this.rejects=[...this.rejects,t]:(e++,i.append(`uploads_${n}`,t))}));let n='<div style="min-width:90vw; min-height: 50vh; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);background: #4008; color: #f88; padding-top: 100px;">';this.rejects.map((t=>{let e=(t.size/1e6|0).toLocaleString("en-us")+" MB<br>";n+=`oversized/rejected: size: ${e} "${t.name}" <br><br>`})),this.rejects.length&&(this.state.modalQueue=[...this.state.modalQueue,n+"</div>"],this.state.closeModal()),e&&this.uploadFiles(i)}))},dropFiles(t){let e=[];t.dataTransfer.items?[...t.dataTransfer.items].forEach(((t,i)=>{if("file"===t.kind){const i=t.getAsFile();e=[...e,i]}})):e=Array.from(t.dataTransfer.files),e.length&&this.processUpload(e)},addLink(t,e,i,n){let s={size:t,type:e,ct:i,href:n};this.state.links.push(s)},loadFiles(){if(this.state.links.length)return;let t=document.createElement("input");t.type="file",t.name="uploads[]",t.multiple=!0,t.accept="image/gif, image/jiff, image/jpeg, image/jpg, image/png, image/webp, video/mp4, video/webm, video/mkv, audio/mp3, audio/wav, audio/mpeg",t.onchange=()=>this.processUpload(Array.from(t.files)),t.click()}},mounted(){this.preload=[...this.preload,[document.createElement("video"),"loading.mp4"]],this.preload.map((t=>{t[0].src=t[1]}))}};const N=(0,u.A)(B,[["render",_],["__scopeId","data-v-7b270c5d"]]);var U=N;const q={class:"footer"},G=["innerHTML"];function Y(t,e,i,n,o,a){return(0,s.uX)(),(0,s.CE)("div",q,[(0,s.Lk)("span",{class:"title",innerHTML:i.state.footerMsg},null,8,G)])}var J={name:"Footer",props:["state"],data(){return{}},methods:{},mounted(){}};const K=(0,u.A)(J,[["render",Y],["__scopeId","data-v-0d90a3d2"]]);var V=K;const Z={class:"modal"},tt=["innerHTML"];function et(t,e,i,n,o,a){return(0,s.uX)(),(0,s.CE)("div",Z,[(0,s.Lk)("button",{onClick:e[0]||(e[0]=t=>a.close()),class:"cancelButton"}," close/cancel "),(0,s.Lk)("div",{class:"modalInner",innerHTML:i.content},null,8,tt)])}var it={name:"Modal",props:["state","content"],methods:{close(){this.state.closeModal()}},mounted(){}};const nt=(0,u.A)(it,[["render",et],["__scopeId","data-v-6fbe076c"]]);var st=nt,ot={name:"App",components:{Header:g,Main:U,Footer:V,Modal:st},data(){return{state:{footerMsg:"<b>IMJUR</b><br>A FREE DIGITAL ASSET HOSTING SERVICE - ©"+(new Date).getFullYear()+'<br>contact: <a href="mailto:whitehotrobot@gmail.com">whitehotrobot@gmail.com</a>',links:[],uploadInProgress:!1,showModal:!1,modalContent:"",modalQueue:[],closeModal:null,copy:null}}},methods:{copy(t){var e=document.createRange();e.selectNode(t),window.getSelection().removeAllRanges(),window.getSelection().addRange(e),document.execCommand("copy"),window.getSelection().removeAllRanges();let i=document.querySelector("#copyConfirmation");i.style.display="block",i.style.opacity=1;let n=()=>{+i.style.opacity>0&&(i.style.opacity-=.04,+i.style.opacity<.1?(i.style.opacity=1,i.style.display="none"):setTimeout((()=>{n()}),10))};setTimeout((()=>{n()}),250)},closeModal(){this.state.modalQueue.length?this.state.modalContent=this.state.modalQueue.shift():(this.state.showModal=!1,this.state.modalContent="")}},watch:{"state.uploadInProgress"(t){}},mounted(){this.state.closeModal=this.closeModal,this.state.copy=this.copy}};const at=(0,u.A)(ot,[["render",a]]);var lt=at;(0,n.Ef)(lt).mount("#app")}},e={};function i(n){var s=e[n];if(void 0!==s)return s.exports;var o=e[n]={exports:{}};return t[n].call(o.exports,o,o.exports,i),o.exports}i.m=t,function(){var t=[];i.O=function(e,n,s,o){if(!n){var a=1/0;for(h=0;h<t.length;h++){n=t[h][0],s=t[h][1],o=t[h][2];for(var l=!0,r=0;r<n.length;r++)(!1&o||a>=o)&&Object.keys(i.O).every((function(t){return i.O[t](n[r])}))?n.splice(r--,1):(l=!1,o<a&&(a=o));if(l){t.splice(h--,1);var d=s();void 0!==d&&(e=d)}}return e}o=o||0;for(var h=t.length;h>0&&t[h-1][2]>o;h--)t[h]=t[h-1];t[h]=[n,s,o]}}(),function(){i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};i.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,o,a=n[0],l=n[1],r=n[2],d=0;if(a.some((function(e){return 0!==t[e]}))){for(s in l)i.o(l,s)&&(i.m[s]=l[s]);if(r)var h=r(i)}for(e&&e(n);d<a.length;d++)o=a[d],i.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return i.O(h)},n=self["webpackChunkimjur_000_pe"]=self["webpackChunkimjur_000_pe"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=i.O(void 0,[504],(function(){return i(9492)}));n=i.O(n)})();
//# sourceMappingURL=app.25e8916f.js.map