(function(){"use strict";var t={3100:function(t,e,n){var i=n(3751),s=n(641);function a(t,e,n,i,a,o){const l=(0,s.g2)("Header"),r=(0,s.g2)("Main"),h=(0,s.g2)("Footer"),c=(0,s.g2)("Modal");return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.bF)(l,{state:a.state},null,8,["state"]),(0,s.bF)(r,{state:a.state},null,8,["state"]),(0,s.bF)(h,{state:a.state},null,8,["state"]),a.state.showModal?((0,s.uX)(),(0,s.Wv)(c,{key:0,state:a.state,content:a.state.modalContent},null,8,["state","content"])):(0,s.Q3)("",!0)])}const o=t=>((0,s.Qi)("data-v-705927d8"),t=t(),(0,s.jt)(),t),l={class:"header"},r=o((()=>(0,s.Lk)("div",{class:"headerImg"},null,-1))),h=[r];function c(t,e,n,i,a,o){return(0,s.uX)(),(0,s.CE)("div",l,h)}var d={name:"Header",props:["state"],data(){return{}},methods:{},mounted(){}},u=n(6262);const p=(0,u.A)(d,[["render",c],["__scopeId","data-v-705927d8"]]);var m=p,g=n(33);const f=t=>((0,s.Qi)("data-v-3665ed36"),t=t(),(0,s.jt)(),t),k=f((()=>(0,s.Lk)("br",null,null,-1))),v=f((()=>(0,s.Lk)("br",null,null,-1))),b=f((()=>(0,s.Lk)("br",null,null,-1))),w=f((()=>(0,s.Lk)("br",null,null,-1))),y=f((()=>(0,s.Lk)("br",null,null,-1))),L={key:0,class:"links"},T=f((()=>(0,s.Lk)("br",null,null,-1)));function C(t,e,n,a,o,l){const r=(0,s.g2)("Link");return(0,s.uX)(),(0,s.CE)("div",{class:(0,g.C4)(["main",{loading:n.state.uploadInProgress}]),ref:"main"},[(0,s.Lk)("div",{id:"dropTarget",class:"dropTarget",onDragover:e[0]||(e[0]=(0,i.D$)((()=>{}),["prevent"])),onDrop:e[1]||(e[1]=(0,i.D$)((t=>l.dropFiles(t)),["prevent"])),onClick:e[2]||(e[2]=t=>l.loadFiles())},[(0,s.eW)(" throw sum filez [drag/click]"),k,v,(0,s.eW)(" accepted: gif, web[p/m], png, jp[e]g, mp4, mp3"),b,(0,s.eW)(" max size: 25MB"),w,(0,s.eW)(" WARRANTY: none"),y,n.state.links.length?((0,s.uX)(),(0,s.CE)("div",L,[(0,s.eW)(" links"),T,((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.state.links,(t=>((0,s.uX)(),(0,s.Wv)(r,{state:n.state,link:t},null,8,["state","link"])))),256))])):(0,s.Q3)("",!0)],32)],2)}n(4114);const F=t=>((0,s.Qi)("data-v-5ec1c7a0"),t=t(),(0,s.jt)(),t),I=["href"],_=F((()=>(0,s.Lk)("br",null,null,-1))),E=F((()=>(0,s.Lk)("br",null,null,-1))),M=F((()=>(0,s.Lk)("br",null,null,-1))),A=F((()=>(0,s.Lk)("br",null,null,-1))),j=F((()=>(0,s.Lk)("div",{style:{clear:"both"}},null,-1)));function x(t,e,n,a,o,l){return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("a",{href:n.link.href,target:"_blank",class:"link",ref:"anchor"},[(0,s.Lk)("div",{class:"linkThumb",ref:"linkThumb",onClick:e[0]||(e[0]=(0,i.D$)((()=>{}),["prevent","stop"]))},null,512),(0,s.eW)(" #"+(0,g.v_)(n.link.ct+1),1),_,(0,s.eW)(" href: "+(0,g.v_)(n.link.href),1),E,(0,s.eW)(" type: "+(0,g.v_)(n.link.type),1),M,(0,s.eW)(" size: "+(0,g.v_)(n.link.size.toLocaleString("en-us")),1),A],8,I),j],64)}var O={name:"Link",props:["state","link"],data(){return{c:document.createElement("canvas"),x:null,linkType:"",img:null,w:0,h:0}},methods:{Draw(){this.x.globalAlpha=1,this.x.fillStyle="#0008",this.x.fillRect(0,0,this.c.width,this.c.height);let t,e="contain";switch(e){case"contain":t=this.c.width/this.c.height<=1.777777778?this.c.width/this.w:this.c.height/this.h;break;case"cover":t=this.c.width/this.c.height>1.777777778?this.c.width/this.w:this.c.height/this.h;break}let n=this.w*t,i=this.h*t;this.x.drawImage(this.img,this.c.width/2-n/2,this.c.height/2-i/2,n,i),"video"==this.linkType&&requestAnimationFrame(this.Draw)}},mounted(){switch(this.$refs.linkThumb.appendChild(this.c),this.x=this.c.getContext("2d"),this.link.type.split("/")[0]){case"image":this.linkType="image";break;case"audio":this.linkType="audio";break;case"video":this.linkType="video";break}this.c.width=500,this.c.height=500,this.c.style.width="200px",this.c.style.height="200px","video"==this.linkType&&(this.img=document.createElement("video"),this.img.loop=!0,this.img.muted=!0,this.img.oncanplay=()=>{this.w=this.img.videoWidth,this.h=this.img.videoHeight,this.img.play(),this.Draw()},this.img.src=this.link.href),"image"!=this.linkType&&"audio"!=this.linkType||(this.img=new Image,this.img.onload=()=>{this.w=this.img.width,this.h=this.img.height,this.Draw()},this.img.src="audio"==this.linkType?"musicNote.png":this.link.href)}};const W=(0,u.A)(O,[["render",x],["__scopeId","data-v-5ec1c7a0"]]);var D=W,X={name:"Main",props:["state"],components:{Link:D},data(){return{}},methods:{uploadFiles(t){fetch("upload.php",{method:"POST",body:t}).then((t=>t.json())).then((t=>{console.log("response from upload.php: ",t),t[0]&&t[1].map(((e,n)=>{this.addLink(t[2][n],t[3][n],n,location.href.split("?")[0]+e)})),this.state.uploadInprogress=!1}))},processUpload(t){this.state.uploadInprogress=!0,this.$nextTick((()=>{let e=0,n=new FormData;n.append("description","no description"),t.map(((t,i)=>{e++,console.log(`file ${i}: `,t),n.append(`uploads_${i}`,t)})),e&&this.uploadFiles(n)}))},dropFiles(t){let e=[];t.dataTransfer.items?[...t.dataTransfer.items].forEach(((t,n)=>{if("file"===t.kind){const n=t.getAsFile();e=[...e,n]}})):e=Array.from(t.dataTransfer.files),e.length&&this.processUpload(e)},addLink(t,e,n,i){let s={size:t,type:e,ct:n,href:i};this.state.links.push(s)},loadFiles(){if(this.state.links.length)return;let t=document.createElement("input");t.type="file",t.name="uploads[]",t.multiple=!0,t.accept="image/gif, image/jiff, image/jpeg, image/jpg, image/png, image/webp, video/mp4, video/webm, video/mkv, audio/mp3, audio/wav, audio/mpeg",t.onchange=()=>this.processUpload(Array.from(t.files)),t.click()}},mounted(){}};const H=(0,u.A)(X,[["render",C],["__scopeId","data-v-3665ed36"]]);var S=H;const $={class:"footer"},P=["innerHTML"];function R(t,e,n,i,a,o){return(0,s.uX)(),(0,s.CE)("div",$,[(0,s.Lk)("span",{class:"title",innerHTML:n.state.footerMsg},null,8,P)])}var z={name:"Footer",props:["state"],data(){return{}},methods:{},mounted(){}};const Q=(0,u.A)(z,[["render",R],["__scopeId","data-v-0d90a3d2"]]);var U=Q;const N={class:"modal"},B=["innerHTML"];function G(t,e,n,i,a,o){return(0,s.uX)(),(0,s.CE)("div",N,[(0,s.Lk)("button",{onClick:e[0]||(e[0]=t=>o.close()),class:"cancelButton"}," close/cancel "),(0,s.Lk)("div",{class:"modalInner",innerHTML:n.content},null,8,B)])}var K={name:"Modal",props:["state","content"],methods:{close(){this.state.showModal=!1}},mounted(){}};const Y=(0,u.A)(K,[["render",G],["__scopeId","data-v-c0d3b3d0"]]);var q=Y,J={name:"App",components:{Header:m,Main:S,Footer:U,Modal:q},data(){return{state:{footerMsg:"<b>IMJUR</b><br>A FREE DIGITAL ASSET HOSTING SERVICE - ©"+(new Date).getFullYear()+'<br>contact: <a href="mailto:whitehotrobot@gmail.com">whitehotrobot@gmail.com</a>',links:[],uploadInProgress:!1,showModal:!1,modalContent:""}}},watch:{"state.uploadInProgress"(t){t?(state.modalContent="\n          loading...\n        ",state.showModal=!0):(state.modalContent="",state.showModal=!1)}}};const V=(0,u.A)(J,[["render",a]]);var Z=V;(0,i.Ef)(Z).mount("#app")}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var a=e[i]={exports:{}};return t[i].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,i,s,a){if(!i){var o=1/0;for(c=0;c<t.length;c++){i=t[c][0],s=t[c][1],a=t[c][2];for(var l=!0,r=0;r<i.length;r++)(!1&a||o>=a)&&Object.keys(n.O).every((function(t){return n.O[t](i[r])}))?i.splice(r--,1):(l=!1,a<o&&(o=a));if(l){t.splice(c--,1);var h=s();void 0!==h&&(e=h)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[i,s,a]}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var s,a,o=i[0],l=i[1],r=i[2],h=0;if(o.some((function(e){return 0!==t[e]}))){for(s in l)n.o(l,s)&&(n.m[s]=l[s]);if(r)var c=r(n)}for(e&&e(i);h<o.length;h++)a=o[h],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(c)},i=self["webpackChunkimjur_000_pe"]=self["webpackChunkimjur_000_pe"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[504],(function(){return n(3100)}));i=n.O(i)})();
//# sourceMappingURL=app.821b5e4e.js.map