(function(){"use strict";var e={6179:function(e,i,n){var s=n(3751),o=n(641);const l=(0,o.Lk)("div",{id:"copyConfirmation"},[(0,o.Lk)("div",{id:"innerCopied"},"COPIED!")],-1);function a(t,e,i,n,s,a){const r=(0,o.g2)("Header"),d=(0,o.g2)("Main"),h=(0,o.g2)("Footer"),c=(0,o.g2)("Modal");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.bF)(r,{state:s.state},null,8,["state"]),(0,o.bF)(d,{state:s.state},null,8,["state"]),(0,o.bF)(h,{state:s.state},null,8,["state"]),s.state.showModal?((0,o.uX)(),(0,o.Wv)(c,{key:0,state:s.state,content:s.state.modalContent},null,8,["state","content"])):(0,o.Q3)("",!0),l])}const r=t=>((0,o.Qi)("data-v-705927d8"),t=t(),(0,o.jt)(),t),d={class:"header"},h=r((()=>(0,o.Lk)("div",{class:"headerImg"},null,-1))),c=[h];function p(t,e,i,n,s,l){return(0,o.uX)(),(0,o.CE)("div",d,c)}var u={name:"Header",props:["state"],data(){return{}},methods:{},mounted(){}},m=n(6262);const f=(0,m.A)(u,[["render",p],["__scopeId","data-v-705927d8"]]);var g=f;const k=t=>((0,o.Qi)("data-v-7b270c5d"),t=t(),(0,o.jt)(),t),v={class:"main",ref:"main"},y={ref:"dropTargetCaption",id:"dropTargetCaption"},b=k((()=>(0,o.Lk)("br",null,null,-1))),w=k((()=>(0,o.Lk)("br",null,null,-1))),L=k((()=>(0,o.Lk)("br",null,null,-1))),T=k((()=>(0,o.Lk)("br",null,null,-1))),C=k((()=>(0,o.Lk)("br",null,null,-1))),M=k((()=>(0,o.Lk)("br",null,null,-1))),j=k((()=>(0,o.Lk)("br",null,null,-1))),E=k((()=>(0,o.Lk)("br",null,null,-1))),x=k((()=>(0,o.Lk)("br",null,null,-1))),I=k((()=>(0,o.Lk)("br",null,null,-1))),A=k((()=>(0,o.Lk)("br",null,null,-1))),F=k((()=>(0,o.Lk)("div",{style:{"font-size":".7em"}},[(0,o.eW)(" WARRANTY: none"),(0,o.Lk)("br"),(0,o.Lk)("br"),(0,o.eW)(" this is a work-in-progress."),(0,o.Lk)("br"),(0,o.eW)(" your files will likely be deleted")],-1))),W={key:0,class:"links"},_=k((()=>(0,o.Lk)("br",null,null,-1)));function D(t,e,i,n,l,a){const r=(0,o.g2)("Link");return(0,o.uX)(),(0,o.CE)("div",v,[(0,o.Lk)("div",{id:"dropTarget",class:"dropTarget",onDragover:e[0]||(e[0]=(0,s.D$)((()=>{}),["prevent"])),onDrop:e[1]||(e[1]=(0,s.D$)((t=>a.dropFiles(t)),["prevent"])),onClick:e[2]||(e[2]=t=>a.loadFiles()),ref:"dropTarget"},[(0,o.Lk)("div",y,[(0,o.eW)(" throw sum filez [click/drop]"),b,w,(0,o.eW)(" accepted: gif"),L,(0,o.eW)("           web[p/m]"),T,(0,o.eW)("           png"),C,(0,o.eW)("           jp[e]g"),M,(0,o.eW)("           mp4"),j,(0,o.eW)("           mp3"),E,x,(0,o.eW)(" max size: 25MB"),I,A,F],512),i.state.links.length?((0,o.uX)(),(0,o.CE)("div",W,[(0,o.eW)(" links"),_,((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(i.state.links,(t=>((0,o.uX)(),(0,o.Wv)(r,{state:i.state,link:t},null,8,["state","link"])))),256))])):(0,o.Q3)("",!0)],544)],512)}n(4114);const O=t=>((0,o.Qi)("data-v-45ef4802"),t=t(),(0,o.jt)(),t),$={class:"link",ref:"anchor"},H=O((()=>(0,o.Lk)("br",null,null,-1))),R=["href"],S=["innerHTML"];function Q(t,e,i,n,l,a){return(0,o.uX)(),(0,o.CE)("div",$,[(0,o.Lk)("div",{class:"linkThumb",ref:"linkThumb",onClick:e[0]||(e[0]=(0,s.D$)((()=>{}),["prevent","stop"]))},null,512),(0,o.Lk)("div",{class:"copyLinkButton",onClick:e[1]||(e[1]=(0,s.D$)((t=>a.copy()),["prevent","stop"])),title:"copy link"}),H,(0,o.Lk)("a",{href:i.link.href,class:"openButton",onClick:e[2]||(e[2]=(0,s.D$)((t=>a.open()),["prevent","stop"])),title:"open link"},null,8,R),(0,o.Lk)("span",{style:{display:"none"},innerHTML:i.link.href,ref:"href"},null,8,S)],512)}var X={name:"Link",props:["state","link"],data(){return{c:document.createElement("canvas"),x:null,linkType:"",img:null,w:0,h:0,t:0}},methods:{copy(){this.state.copy(this.$refs.href)},open(){open(this.link.href,"_blank")},Draw(){this.x.globalAlpha=1,this.x.fillStyle="#0008",this.x.fillRect(0,0,this.c.width,this.c.height);let e,i="contain";switch(i){case"contain":e=this.c.width/this.c.height<=1.777777778?this.c.width/this.w:this.c.height/this.h;break;case"cover":e=this.c.width/this.c.height>1.777777778?this.c.width/this.w:this.c.height/this.h;break}let n=this.w*e,s=this.h*e;this.x.drawImage(this.img,this.c.width/2-n/2,this.c.height/2-s/2,n,s),this.t+=1/60,(t<2||"video"==this.linkType)&&requestAnimationFrame(this.Draw)}},mounted(){switch(this.$refs.linkThumb.appendChild(this.c),this.x=this.c.getContext("2d"),this.link.type.split("/")[0]){case"image":this.linkType="image";break;case"audio":this.linkType="audio";break;case"video":this.linkType="video";break}if(this.c.width=500,this.c.height=500/1.77777778,this.c.style.width="200px",this.c.style.height="113px",this.c.style.borderRadius="20px","video"==this.linkType&&(this.img=document.createElement("video"),this.img.loop=!0,this.img.muted=!0,this.img.oncanplay=()=>{this.w=this.img.videoWidth,this.h=this.img.videoHeight,this.img.play(),this.Draw()},this.img.src=this.link.href),"image"==this.linkType||"audio"==this.linkType){let t;this.img=new Image,this.img.onload=()=>{this.w=this.img.width,this.h=this.img.height,this.Draw()},this.img.src="audio"==this.linkType?"musicNote.png":"thumb.php?res=uploads/"+(t=this.link.href.split("/"))[t.length-1].split("?")[0]}}};const z=(0,m.A)(X,[["render",Q],["__scopeId","data-v-45ef4802"]]);var P=z,B={name:"Main",props:["state"],components:{Link:P},data(){return{preload:[],rejects:[]}},methods:{uploadFiles(t){fetch("upload.php",{method:"POST",body:t}).then((t=>t.json())).then((t=>{console.log("response from upload.php: ",t),this.state.uploadInprogress=!1,t[0]?(this.$refs.dropTargetCaption.style.display="none",t[1].map(((e,i)=>{this.addLink(t[2][i],t[3][i],i,location.href.split("?")[0]+e)})),this.state.modalContent="",this.state.closeModal()):this.state.modalContent='<div style="min-width:90vw; min-height: 50vh; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);background: #8002; color: #f88; padding-top: 100px;">'+t[5]+"</div>"}))},processUpload(t){this.state.uploadInprogress=!0,this.state.modalContent='<video src="loading.mp4" style="min-width:50vw; min-height: 50vh; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); pointer-events: none; opacity: .6;" loop autoplay muted></video>',this.state.showModal=!0,this.$nextTick((()=>{let e=0,i=new FormData;t.map(((t,n)=>{console.log(`file ${n}: `,t),t.size>25e6?this.rejects=[...this.rejects,t]:(e++,i.append(`uploads_${n}`,t))}));let n='<div style="min-width:90vw; min-height: 50vh; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);background: #4008; color: #f88; padding-top: 100px;">';this.rejects.map((t=>{let e=(t.size/1e6|0).toLocaleString("en-us")+" MB<br>";n+=`oversized/rejected: size: ${e} "${t.name}" <br><br>`})),this.rejects.length&&(this.state.modalQueue=[...this.state.modalQueue,n+"</div>"],this.state.closeModal()),e&&this.uploadFiles(i)}))},dropFiles(t){let e=[];t.dataTransfer.items?[...t.dataTransfer.items].forEach(((t,i)=>{if("file"===t.kind){const i=t.getAsFile();e=[...e,i]}})):e=Array.from(t.dataTransfer.files),e.length&&this.processUpload(e)},addLink(t,e,i,n){let s={size:t,type:e,ct:i,href:n};this.state.links.push(s)},loadFiles(){if(this.state.links.length)return;let t=document.createElement("input");t.type="file",t.name="uploads[]",t.multiple=!0,t.accept="image/gif, image/jiff, image/jpeg, image/jpg, image/png, image/webp, video/mp4, video/webm, video/mkv, audio/mp3, audio/wav, audio/mpeg",t.onchange=()=>this.processUpload(Array.from(t.files)),t.click()}},mounted(){this.preload=[...this.preload,[document.createElement("video"),"loading.mp4"]],this.preload.map((t=>{t[0].src=t[1]}))}};const N=(0,m.A)(B,[["render",D],["__scopeId","data-v-7b270c5d"]]);var U=N;const q={class:"footer"},G=["innerHTML"];function Y(t,e,i,n,s,l){return(0,o.uX)(),(0,o.CE)("div",q,[(0,o.Lk)("span",{class:"title",innerHTML:i.state.footerMsg},null,8,G)])}var J={name:"Footer",props:["state"],data(){return{}},methods:{},mounted(){}};const K=(0,m.A)(J,[["render",Y],["__scopeId","data-v-0d90a3d2"]]);var V=K;const Z={class:"modal"},tt=["innerHTML"];function et(t,e,i,n,s,l){return(0,o.uX)(),(0,o.CE)("div",Z,[(0,o.Lk)("button",{onClick:e[0]||(e[0]=t=>l.close()),class:"cancelButton"}," close/cancel "),(0,o.Lk)("div",{class:"modalInner",innerHTML:i.content},null,8,tt)])}var it={name:"Modal",props:["state","content"],methods:{close(){this.state.closeModal()}},mounted(){}};const nt=(0,m.A)(it,[["render",et],["__scopeId","data-v-6fbe076c"]]);var st=nt,ot={name:"App",components:{Header:g,Main:U,Footer:V,Modal:st},data(){return{state:{footerMsg:"<b>IMJUR</b><br>A FREE DIGITAL ASSET HOSTING SERVICE - ©"+(new Date).getFullYear()+'<br>contact: <a href="mailto:whitehotrobot@gmail.com">whitehotrobot@gmail.com</a>',links:[],uploadInProgress:!1,showModal:!1,modalContent:"",modalQueue:[],closeModal:null,copy:null}}},methods:{copy(t){var e=document.createRange();e.selectNode(t),window.getSelection().removeAllRanges(),window.getSelection().addRange(e),document.execCommand("copy"),window.getSelection().removeAllRanges();let i=document.querySelector("#copyConfirmation");i.style.display="block",i.style.opacity=1;let n=()=>{+i.style.opacity>0&&(i.style.opacity-=.04,+i.style.opacity<.1?(i.style.opacity=1,i.style.display="none"):setTimeout((()=>{n()}),10))};setTimeout((()=>{n()}),250)},closeModal(){this.state.modalQueue.length?this.state.modalContent=this.state.modalQueue.shift():(this.state.showModal=!1,this.state.modalContent="")}},watch:{"state.uploadInProgress"(t){}},mounted(){this.state.closeModal=this.closeModal,this.state.copy=this.copy}};const lt=(0,m.A)(ot,[["render",a]]);var at=lt;(0,s.Ef)(at).mount("#app")}},i={};function n(t){var s=i[t];if(void 0!==s)return s.exports;var o=i[t]={exports:{}};return e[t].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var t=[];n.O=function(e,i,s,o){if(!i){var l=1/0;for(h=0;h<t.length;h++){i=t[h][0],s=t[h][1],o=t[h][2];for(var a=!0,r=0;r<i.length;r++)(!1&o||l>=o)&&Object.keys(n.O).every((function(t){return n.O[t](i[r])}))?i.splice(r--,1):(a=!1,o<l&&(l=o));if(a){t.splice(h--,1);var d=s();void 0!==d&&(e=d)}}return e}o=o||0;for(var h=t.length;h>0&&t[h-1][2]>o;h--)t[h]=t[h-1];t[h]=[i,s,o]}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var s,o,l=i[0],a=i[1],r=i[2],d=0;if(l.some((function(e){return 0!==t[e]}))){for(s in a)n.o(a,s)&&(n.m[s]=a[s]);if(r)var h=r(n)}for(e&&e(i);d<l.length;d++)o=l[d],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(h)},i=self["webpackChunkimjur_000_pe"]=self["webpackChunkimjur_000_pe"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var s=n.O(void 0,[504],(function(){return n(6179)}));s=n.O(s)})();
//# sourceMappingURL=app.2c6e7b17.js.map