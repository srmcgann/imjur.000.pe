(function(){"use strict";var e={2658:function(e,t,i){var n=i(3751),a=i(641);function s(e,t,i,n,s,l){const r=(0,a.g2)("Header"),o=(0,a.g2)("Main"),h=(0,a.g2)("Footer");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.bF)(r,{state:s.state},null,8,["state"]),(0,a.bF)(o,{state:s.state},null,8,["state"]),(0,a.bF)(h,{state:s.state},null,8,["state"])])}const l=e=>((0,a.Qi)("data-v-705927d8"),e=e(),(0,a.jt)(),e),r={class:"header"},o=l((()=>(0,a.Lk)("div",{class:"headerImg"},null,-1))),h=[o];function c(e,t,i,n,s,l){return(0,a.uX)(),(0,a.CE)("div",r,h)}var d={name:"Header",props:["state"],data(){return{}},methods:{},mounted(){}},u=i(6262);const p=(0,u.A)(d,[["render",c],["__scopeId","data-v-705927d8"]]);var g=p;const m=e=>((0,a.Qi)("data-v-30d5c355"),e=e(),(0,a.jt)(),e),k={class:"main",ref:"main"},f=m((()=>(0,a.Lk)("br",null,null,-1))),v=m((()=>(0,a.Lk)("br",null,null,-1))),b=m((()=>(0,a.Lk)("br",null,null,-1))),w=m((()=>(0,a.Lk)("br",null,null,-1))),y=m((()=>(0,a.Lk)("br",null,null,-1))),T={key:0,class:"links"},L=m((()=>(0,a.Lk)("br",null,null,-1)));function x(e,t,i,n,s,l){const r=(0,a.g2)("Link");return(0,a.uX)(),(0,a.CE)("div",k,[(0,a.Lk)("div",{class:"dropTarget",onClick:t[0]||(t[0]=e=>l.loadFiles()),onDrop:t[1]||(t[1]=t=>e.dropHandler(e.event)),"on:dragOver":t[2]||(t[2]=(...e)=>l.dragOverHandler&&l.dragOverHandler(...e))},[(0,a.eW)(" throw sum filez [drag/click]"),f,v,(0,a.eW)(" accepted: gif, web[p/m], png, jp[e]g, mp4, mp3"),b,(0,a.eW)(" max size: 100MB"),w,(0,a.eW)(" WARRANTY: none"),y,i.state.links.length?((0,a.uX)(),(0,a.CE)("div",T,[(0,a.eW)(" links"),L,((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(i.state.links,(e=>((0,a.uX)(),(0,a.Wv)(r,{state:i.state,link:e},null,8,["state","link"])))),256))])):(0,a.Q3)("",!0)],32)],512)}i(4114);var j=i(33);const _=e=>((0,a.Qi)("data-v-595bcb73"),e=e(),(0,a.jt)(),e),E=["href"],O=_((()=>(0,a.Lk)("br",null,null,-1))),F=_((()=>(0,a.Lk)("br",null,null,-1))),A=_((()=>(0,a.Lk)("br",null,null,-1))),C=_((()=>(0,a.Lk)("br",null,null,-1)));function I(e,t,i,n,s,l){return(0,a.uX)(),(0,a.CE)("a",{href:i.link.href,target:"_blank",class:"link",ref:"anchor"},[(0,a.Lk)("div",{class:"linkThumb",ref:"linkThumb",onClick:t[0]||(t[0]=t=>l.clickHandler(e.event))},null,512),(0,a.eW)(" #"+(0,j.v_)(i.link.ct),1),O,(0,a.eW)(" href: "+(0,j.v_)(i.link.href),1),F,(0,a.eW)(" type: "+(0,j.v_)(i.link.type),1),A,(0,a.eW)(" size: "+(0,j.v_)(i.link.size.toLocaleString("en-us")),1),C],8,E)}var H={name:"Link",props:["state","link"],data(){return{c:document.createElement("canvas"),x:null,linkType:"",img:null}},methods:{clickHandler(e){e.stopPropagation(),e.preventDefault()},Draw(){this.x.globalAlpha=1,this.x.fillStyle="#0008",this.x.fillRect(0,0,this.c.width,this.c.height);let e,t="contain";switch(t){case"contain":e=this.c.width/this.c.height<=1.777777778?this.c.width/this.img.width:this.c.height/this.img.height;break;case"cover":e=this.c.width/this.c.height>1.777777778?this.c.width/this.img.width:this.c.height/this.img.height;break}let i=this.img.width*e,n=this.img.height*e;this.x.drawImage(this.img,this.c.width/2-i/2,this.c.height/2-n/2,i,n),requestAnimationFrame(this.Draw)}},mounted(){switch(this.$refs.linkThumb.appendChild(this.c),this.x=this.c.getContext("2d"),this.link.type){case"image/jpg":this.linkType="image";break;case"image/jpeg":this.linkType="image";break;case"image/webp":this.linkType="image";break;case"image/png":this.linkType="image";break;case"image/gif":this.linkType="image";break;case"video/mp4":this.linkType="video";break;case"video/mkv":this.linkType="video";break;case"video/webm":this.linkType="video";break;case"audio/mp3":this.linkType="audio";break;case"audio/mpeg":this.linkType="audio";break}this.c.width=500,this.c.height=500,"video"==this.linkType&&(this.img=document.createElement("video"),this.img.loop=!0,this.img.muted=!0,this.img.oncanplay=()=>{this.img.play(),this.c.style.width="100px",this.c.style.height="100px",this.Draw()},this.img.src=this.link.href),"image"==this.linkType&&(this.img=new Image,this.img.onload=()=>{this.c.style.width="100px",this.c.style.height="100px",this.Draw()},this.img.src=this.link.href),"audio"==this.linkType&&(this.img=new Image,this.img.onload=()=>{this.c.style.width="100px",this.c.style.height="100px",this.Draw()},this.img.src="../assets/musicNote.png")}};const D=(0,u.A)(H,[["render",I],["__scopeId","data-v-595bcb73"]]);var W=D,M={name:"Main",props:["state"],components:{Link:W},data(){return{}},methods:{dragOverHandler(e){e.preventDefault()},dropHandlerr(e){console.log("file(s) dropped: ",e)},addLink(e,t,i,n){let a={size:e,type:t,ct:i,href:n};this.state.links.push(a)},uploadFiles(e){fetch("upload.php",{method:"POST",body:e}).then((e=>e.json())).then((e=>{console.log("response from upload.php: ",e),e[0]&&e[1].map(((t,i)=>{this.addLink(e[2],e[3],i,location.origin+"/"+t)})),this.$refs.main.classList.toggle("loading")}))},loadFiles(){this.state.links.length||(this.$refs.main.className+="loading",this.$nextTick((()=>{let e=new FormData;e.append("title","uploading assets...");let t=document.createElement("input");t.type="file",t.name="uploads[]",t.multiple=!0,t.accept="image/gif, image/jiff, image/jpeg, image/jpg, image/png, image/webp, video/mp4, video/webm, video/mkv, audio/mp3",t.onchange=()=>{console.log("sending files: ",t);let i=0;Array.from(t.files).map(((t,n)=>{i++,console.log(`file ${n}: `,t),e.append(`uploads_${n}`,t)})),i&&this.uploadFiles(e)},t.click()})))}},mounted(){}};const X=(0,u.A)(M,[["render",x],["__scopeId","data-v-30d5c355"]]);var S=X;const R={class:"footer"},$=["innerHTML"];function z(e,t,i,n,s,l){return(0,a.uX)(),(0,a.CE)("div",R,[(0,a.Lk)("span",{class:"title",innerHTML:i.state.footerMsg},null,8,$)])}var N={name:"Footer",props:["state"],data(){return{}},methods:{},mounted(){}};const P=(0,u.A)(N,[["render",z],["__scopeId","data-v-0d90a3d2"]]);var Q=P,G={name:"App",components:{Header:g,Main:S,Footer:Q},data(){return{state:{footerMsg:"<b>IMJUR</b><br>A FREE DIGITAL ASSET HOSTING SERVICE - ©"+(new Date).getFullYear()+'<br>contact: <a href="mailto:whitehotrobot@gmail.com">whitehotrobot@gmail.com</a>',links:[]}}}};const Y=(0,u.A)(G,[["render",s]]);var q=Y;(0,n.Ef)(q).mount("#app")}},t={};function i(n){var a=t[n];if(void 0!==a)return a.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,i),s.exports}i.m=e,function(){var e=[];i.O=function(t,n,a,s){if(!n){var l=1/0;for(c=0;c<e.length;c++){n=e[c][0],a=e[c][1],s=e[c][2];for(var r=!0,o=0;o<n.length;o++)(!1&s||l>=s)&&Object.keys(i.O).every((function(e){return i.O[e](n[o])}))?n.splice(o--,1):(r=!1,s<l&&(l=s));if(r){e.splice(c--,1);var h=a();void 0!==h&&(t=h)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[n,a,s]}}(),function(){i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,s,l=n[0],r=n[1],o=n[2],h=0;if(l.some((function(t){return 0!==e[t]}))){for(a in r)i.o(r,a)&&(i.m[a]=r[a]);if(o)var c=o(i)}for(t&&t(n);h<l.length;h++)s=l[h],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(c)},n=self["webpackChunkimjur_000_pe"]=self["webpackChunkimjur_000_pe"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=i.O(void 0,[504],(function(){return i(2658)}));n=i.O(n)})();
//# sourceMappingURL=app.cd60b72f.js.map