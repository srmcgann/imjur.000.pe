(function(){"use strict";var t={6404:function(t,e,s){var i=s(3751),o=s(641);const a=(0,o.Lk)("div",{id:"copyConfirmation"},[(0,o.Lk)("div",{id:"innerCopied"},"COPIED!")],-1);function n(t,e,s,i,n,l){const r=(0,o.g2)("Header"),h=(0,o.g2)("Main"),d=(0,o.g2)("Footer"),c=(0,o.g2)("LoginPrompt"),u=(0,o.g2)("Modal"),p=(0,o.g2)("Preview");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.bF)(r,{state:n.state},null,8,["state"]),(0,o.bF)(h,{state:n.state},null,8,["state"]),(0,o.bF)(d,{state:n.state},null,8,["state"]),n.state.showLoginPrompt?((0,o.uX)(),(0,o.Wv)(c,{key:0,state:n.state},null,8,["state"])):(0,o.Q3)("",!0),n.state.showModal?((0,o.uX)(),(0,o.Wv)(u,{key:1,state:n.state,content:n.state.modalContent},null,8,["state","content"])):(0,o.Q3)("",!0),n.state.showPreview?((0,o.uX)(),(0,o.Wv)(p,{key:2,state:n.state,link:n.state.previewLink},null,8,["state","link"])):(0,o.Q3)("",!0),a])}var l=s(33);const r=t=>((0,o.Qi)("data-v-3eaa6ae6"),t=t(),(0,o.jt)(),t),h={class:"main",ref:"main"},d={ref:"dropTargetCaption",id:"dropTargetCaption"},c=r((()=>(0,o.Lk)("br",null,null,-1))),u=r((()=>(0,o.Lk)("br",null,null,-1))),p=r((()=>(0,o.Lk)("br",null,null,-1))),m=r((()=>(0,o.Lk)("br",null,null,-1))),g=r((()=>(0,o.Lk)("br",null,null,-1))),k=r((()=>(0,o.Lk)("br",null,null,-1))),w=r((()=>(0,o.Lk)("br",null,null,-1))),v=r((()=>(0,o.Lk)("br",null,null,-1))),f=r((()=>(0,o.Lk)("br",null,null,-1))),b=r((()=>(0,o.Lk)("br",null,null,-1))),y=r((()=>(0,o.Lk)("span",{style:{"font-size":".7em"}},"(per file)",-1))),L=r((()=>(0,o.Lk)("br",null,null,-1))),C=r((()=>(0,o.Lk)("br",null,null,-1))),T=r((()=>(0,o.Lk)("br",null,null,-1))),P=r((()=>(0,o.Lk)("span",{style:{"font-size":".7em"}},"(at a time)",-1))),D=r((()=>(0,o.Lk)("br",null,null,-1))),x=r((()=>(0,o.Lk)("br",null,null,-1))),A=r((()=>(0,o.Lk)("br",null,null,-1))),I=r((()=>(0,o.Lk)("div",{style:{"font-size":".6em"}},[(0,o.eW)(" WARRANTY: none"),(0,o.Lk)("br"),(0,o.Lk)("br"),(0,o.eW)(" this website is a work-in-progress."),(0,o.Lk)("br"),(0,o.eW)(" your files will likely be deleted")],-1))),E={key:0,class:"links"},j=r((()=>(0,o.Lk)("br",null,null,-1)));function M(t,e,s,a,n,r){const M=(0,o.g2)("Link");return(0,o.uX)(),(0,o.CE)("div",h,[(0,o.Lk)("div",{id:"dropTarget",class:"dropTarget",style:(0,l.Tr)(s.state.links.length?"":"cursor: pointer;"),onDragover:e[0]||(e[0]=(0,i.D$)((()=>{}),["prevent"])),onDrop:e[1]||(e[1]=(0,i.D$)((t=>r.dropFiles(t)),["prevent"])),onClick:e[2]||(e[2]=t=>r.loadFiles()),ref:"dropTarget"},[(0,o.Lk)("div",d,[(0,o.eW)(" throw sum filez [click/drop]"),c,u,(0,o.eW)(" accepted : gif"),p,(0,o.eW)("            web[p/m]"),m,(0,o.eW)("            png"),g,(0,o.eW)("            jp[e]g"),k,(0,o.eW)("            mp4"),w,(0,o.eW)("            mp3"),v,f,(0,o.eW)(" max size : 25MB"),b,y,L,C,(0,o.eW)(" max files: 15"),T,P,D,x,A,I],512),s.state.links.length?((0,o.uX)(),(0,o.CE)("div",E,[(0,o.eW)(" links"),j,((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(s.state.links,(t=>((0,o.uX)(),(0,o.Wv)(M,{state:s.state,link:t},null,8,["state","link"])))),256))])):(0,o.Q3)("",!0)],36)],512)}s(4114);const U=t=>((0,o.Qi)("data-v-57332ef4"),t=t(),(0,o.jt)(),t),R={class:"link",ref:"anchor"},$=U((()=>(0,o.Lk)("br",null,null,-1))),N=["href"];function X(t,e,s,a,n,l){return(0,o.uX)(),(0,o.CE)("div",R,[(0,o.Lk)("div",{class:"linkThumb",ref:"linkThumb",onClick:e[0]||(e[0]=(0,i.D$)((t=>l.preview()),["prevent","stop"])),title:"view this asset"},null,512),(0,o.Lk)("div",{class:"copyLinkButton",onClick:e[1]||(e[1]=(0,i.D$)((t=>l.copy()),["prevent","stop"])),title:"copy link to clipboard"}),$,(0,o.Lk)("a",{href:s.link.href,class:"openButton",onClick:e[2]||(e[2]=(0,i.D$)((t=>l.open()),["prevent","stop"])),title:"open link in new tab"},null,8,N)],512)}var S={name:"Link",props:["state","link"],data(){return{c:document.createElement("canvas"),x:null,linkType:"",img:null,w:0,h:0,t:0}},methods:{copy(){this.state.copy(this.link.href)},open(){open(this.link.href,"_blank")},preview(){this.state.previewLink=this.link,this.state.showPreview=!0},Draw(){this.x.globalAlpha=1,this.x.fillStyle="#0008",this.x.fillRect(0,0,this.c.width,this.c.height);let t,e="contain";switch(e){case"contain":t=this.c.width/this.c.height<=1.777777778?this.c.width/this.w:this.c.height/this.h;break;case"cover":t=this.c.width/this.c.height>1.777777778?this.c.width/this.w:this.c.height/this.h;break}let s=this.w*t,i=this.h*t;switch(this.x.drawImage(this.img,this.c.width/2-s/2,this.c.height/2-i/2,s,i),this.t+=1/60,this.linkType){case"image":this.img.width||setTimeout((()=>{requestAnimationFrame(this.Draw)}),200);break;case"video":requestAnimationFrame(this.Draw);break}}},mounted(){if(this.$refs.linkThumb.appendChild(this.c),this.x=this.c.getContext("2d"),this.linkType=this.link.type.split("/")[0],this.c.width=500,this.c.height=500/1.77777778,this.c.style.width="200px",this.c.style.height="113px",this.c.style.borderRadius="20px","video"==this.linkType&&(this.img=document.createElement("video"),this.img.loop=!0,this.img.muted=!0,this.img.oncanplay=()=>{this.w=this.img.videoWidth,this.h=this.img.videoHeight,this.img.play(),this.Draw()},this.img.src=this.link.href),"image"==this.linkType||"audio"==this.linkType){let t;this.img=new Image,this.img.onload=()=>{this.w=this.img.width,this.h=this.img.height,this.Draw()},this.img.src="audio"==this.linkType?"musicNotes.svg":"thumb.php?res=uploads/"+(t=this.link.href.split("/"))[t.length-1].split("?")[0]}}},W=s(6262);const F=(0,W.A)(S,[["render",X],["__scopeId","data-v-57332ef4"]]);var O=F,Q={name:"Main",props:["state"],components:{Link:O},data(){return{preload:[],rejects:[]}},methods:{uploadFiles(t){fetch("upload.php",{method:"POST",body:t}).then((t=>t.json())).then((t=>{console.log("response from upload.php: ",t),this.state.uploadInprogress=!1,t[0]?(this.$refs.dropTargetCaption.style.display="none",t[1].map(((e,s)=>{this.addLink(t[2][s],t[3][s],s,location.href.split("?")[0]+e)})),this.state.modalContent="",this.state.closeModal()):this.state.modalContent='<div style="min-width:90vw; min-height: 50vh; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);background: #8002; color: #f88; padding-top: 100px;">'+t[5]+"</div>"}))},processUpload(t){this.state.uploadInprogress=!0,this.state.modalContent='<div style="position: absolute;left:0;top:0;width:100%;height:100%;background:#000;"><video src="loading.mp4" style="min-width:50vw; min-height: 50vh; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); pointer-events: none; opacity: .6;" loop autoplay muted></video></div>',this.state.showModal=!0,this.$nextTick((()=>{let e=0,s=new FormData;t.map(((t,i)=>{console.log(`file ${i}: `,t),t.size>25e6?this.rejects=[...this.rejects,t]:(e++,s.append(`uploads_${i}`,t))}));let i='<div style="min-width:90vw; min-height: 50vh; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);background: #4008; color: #f88; padding-top: 100px;">';this.rejects.map((t=>{let e=(t.size/1e6|0).toLocaleString("en-us")+" MB<br>";i+=`oversized/rejected: size: ${e} "${t.name}" <br><br>`})),this.rejects.length&&(this.state.modalQueue=[...this.state.modalQueue,i+"</div>"],this.state.closeModal()),e&&this.uploadFiles(s)}))},dropFiles(t){let e=[];t.dataTransfer.items?[...t.dataTransfer.items].forEach(((t,s)=>{if("file"===t.kind){const s=t.getAsFile();e=[...e,s]}})):e=Array.from(t.dataTransfer.files),e.length&&this.processUpload(e)},addLink(t,e,s,i){let o={size:t,type:e,ct:s,href:i};this.state.links.push(o)},loadFiles(){let t=document.createElement("input");t.type="file",t.name="uploads[]",t.multiple=!0,t.accept="image/gif, image/jiff, image/jpeg, image/jpg, image/png, image/webp, video/mp4, video/webm, video/mkv, audio/mp3, audio/wav, audio/mpeg",t.onchange=()=>this.processUpload(Array.from(t.files)),t.click()}},mounted(){this.preload=[...this.preload,[document.createElement("video"),"loading.mp4"]],this.preload.map((t=>{t[0].src=t[1]}))}};const _=(0,W.A)(Q,[["render",M],["__scopeId","data-v-3eaa6ae6"]]);var B=_;const z={class:"modal"},V=["innerHTML"];function H(t,e,s,i,a,n){return(0,o.uX)(),(0,o.CE)("div",z,[this.state.uploadInProgress?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.CE)("button",{key:0,onClick:e[0]||(e[0]=t=>n.close()),class:"cancelButton",title:"close this view [ESC]"}," close/cancel ")),(0,o.Lk)("div",{class:"modalInner",innerHTML:s.content},null,8,V)])}var K={name:"Modal",props:["state","content"],methods:{close(){this.state.closeModal()}},mounted(){}};const J=(0,W.A)(K,[["render",H],["__scopeId","data-v-b6b9d7c8"]]);var q=J;const G={class:"header"};function Y(t,e,s,i,a,n){const l=(0,o.g2)("User");return(0,o.uX)(),(0,o.CE)("div",G,[(0,o.Lk)("div",{class:"headerImg",onClick:e[0]||(e[0]=t=>n.reload())}),(0,o.bF)(l,{state:s.state},null,8,["state"])])}const Z={class:"user"},tt={key:0},et={key:1},st={class:"loggedIn"};function it(t,e,s,i,a,n){return(0,o.uX)(),(0,o.CE)("div",Z,[s.state.loggedIn?((0,o.uX)(),(0,o.CE)("div",et,[(0,o.Lk)("div",st,[(0,o.Lk)("div",{class:"avatar",style:(0,l.Tr)("background-image: url(state.loggedInUser.avatar)"),title:"click for your prefrences"},null,4)])])):((0,o.uX)(),(0,o.CE)("div",tt,[(0,o.Lk)("button",{onClick:e[0]||(e[0]=t=>s.state.login()),class:"loginButton",title:"sign in"}," login "),(0,o.Lk)("button",{onClick:e[1]||(e[1]=t=>s.state.register()),class:"loginButton",style:{top:"26px"},title:"register anonymously.<br><br>we only need a user name as<br>something to attach your files to"}," register ")]))])}var ot={name:"Login",props:["state"],data(){return{}},methods:{},mounted(){}};const at=(0,W.A)(ot,[["render",it],["__scopeId","data-v-91ccc6f8"]]);var nt=at,lt={name:"Header",props:["state"],components:{User:nt},data(){return{}},methods:{reload(){window.location.reload()}},mounted(){}};const rt=(0,W.A)(lt,[["render",Y],["__scopeId","data-v-0454703c"]]);var ht=rt;const dt={class:"footer"},ct=["innerHTML"];function ut(t,e,s,i,a,n){return(0,o.uX)(),(0,o.CE)("div",dt,[(0,o.Lk)("span",{class:"title",innerHTML:s.state.footerMsg},null,8,ct)])}var pt={name:"Footer",props:["state"],data(){return{}},methods:{},mounted(){}};const mt=(0,W.A)(pt,[["render",ut],["__scopeId","data-v-0d90a3d2"]]);var gt=mt;const kt={class:"preview"},wt={class:"previewInner"},vt={class:"slideshow",ref:"slideshow"};function ft(t,e,s,i,a,n){return(0,o.uX)(),(0,o.CE)("div",kt,[(0,o.Lk)("button",{onClick:e[0]||(e[0]=t=>n.close()),class:"cancelButton",title:"close this view"}," close/cancel "),(0,o.Lk)("div",wt,[(0,o.Lk)("div",vt,null,512),s.state.links.length>1?((0,o.uX)(),(0,o.CE)("div",{key:0,class:"leftButton",onClick:e[1]||(e[1]=t=>s.state.prev()),title:"view previous asset [left arrow]"})):(0,o.Q3)("",!0),s.state.links.length>1?((0,o.uX)(),(0,o.CE)("div",{key:1,class:"rightButton",onClick:e[2]||(e[2]=t=>s.state.next()),title:"view next asset [right arrow]"})):(0,o.Q3)("",!0)])])}var bt={name:"Preview",props:["state","link"],data(){return{asset:null,linkType:""}},methods:{close(){this.state.closePreview()}},mounted(){this.linkType=this.link.type.split("/")[0],"image"!=this.linkType&&"audio"!=this.linkType||(this.asset=document.createElement("div"),this.asset.style.top="50%",this.asset.style.left="50%",this.asset.style.width="100%",this.asset.style.height="100%",this.asset.style.position="absolute",this.asset.style.transform="translate(-50%, -50%)",this.asset.style.objectFit="contain",this.asset.style.backgroundColor="#000",this.asset.style.backgroundSize="contain",this.asset.style.backgroundRepeat="no-repeat",this.asset.style.backgroundPosition="center center",this.asset.style.backgroundImage=`url(${"audio"==this.linkType?"musicNotes.svg":this.link.href})`,this.$refs.slideshow.appendChild(this.asset)),"audio"==this.linkType&&(this.asset=document.createElement("audio"),this.asset.controls=!0,this.asset.style.position="absolute",this.asset.style.left="50%",this.asset.style.top="50%",this.asset.loop=!0,this.asset.style.transform="translate(-50%, -50%)",this.asset.oncanplay=()=>{this.asset.play()},this.$refs.slideshow.appendChild(this.asset),this.asset.src=this.link.href),"video"==this.linkType&&(this.asset=document.createElement("video"),this.asset.controls=!0,this.asset.style.position="absolute",this.asset.style.left="50%",this.asset.style.top="50%",this.asset.style.width="100%",this.asset.style.height="100%",this.asset.style.objectFit="contain",this.asset.style.background="#000",this.asset.loop=!0,this.asset.style.transform="translate(-50%, -50%)",this.asset.oncanplay=()=>{this.asset.play()},this.$refs.slideshow.appendChild(this.asset),this.asset.src=this.link.href)},beforeUnmount(){this.asset.src=""}};const yt=(0,W.A)(bt,[["render",ft],["__scopeId","data-v-7a414b0b"]]);var Lt=yt;const Ct=t=>((0,o.Qi)("data-v-de235fb4"),t=t(),(0,o.jt)(),t),Tt={class:"LoginPrompt"},Pt={class:"mainLoginContainer"},Dt={key:0},xt=Ct((()=>(0,o.Lk)("span",{class:"title"},"login",-1))),At=Ct((()=>(0,o.Lk)("br",null,null,-1))),It={class:"inputContainer"},Et=Ct((()=>(0,o.Lk)("div",{class:"inputTitle"},"User Name",-1))),jt=Ct((()=>(0,o.Lk)("br",null,null,-1))),Mt={class:"inputContainer"},Ut=Ct((()=>(0,o.Lk)("div",{class:"inputTitle"},"Password",-1))),Rt=Ct((()=>(0,o.Lk)("br",null,null,-1))),$t={key:0,class:"invalidLogin"},Nt=Ct((()=>(0,o.Lk)("div",{class:"spacerDiv",style:{"margin-top":"30px"}},null,-1))),Xt={key:1},St=Ct((()=>(0,o.Lk)("div",{class:"spacerDiv",style:{"margin-top":"10px"}},null,-1))),Wt=Ct((()=>(0,o.Lk)("br",null,null,-1))),Ft={key:0,class:"mustRegister"},Ot=Ct((()=>(0,o.Lk)("br",null,null,-1))),Qt=Ct((()=>(0,o.Lk)("br",null,null,-1))),_t=Ct((()=>(0,o.Lk)("span",{class:"title"},"register",-1))),Bt=Ct((()=>(0,o.Lk)("br",null,null,-1))),zt={class:"inputContainer"},Vt={class:"inputTitle"},Ht={key:0,style:{display:"inline-block",color:"#f00"}},Kt=Ct((()=>(0,o.Lk)("i",null,"user name unavailable",-1))),Jt={key:1,style:{display:"inline-block",color:"#0f4"}},qt=Ct((()=>(0,o.Lk)("i",null,"user name available",-1))),Gt=Ct((()=>(0,o.Lk)("br",null,null,-1))),Yt={class:"inputContainer"},Zt={class:"inputTitle"},te={key:0,style:{display:"inline-block",color:"#f00"}},ee={key:1,style:{display:"inline-block",color:"#0f4"}},se=Ct((()=>(0,o.Lk)("i",null,"passwords match!",-1))),ie=Ct((()=>(0,o.Lk)("br",null,null,-1))),oe={class:"inputContainer"},ae=Ct((()=>(0,o.Lk)("div",{class:"inputTitle"},"Confirm Password",-1))),ne=Ct((()=>(0,o.Lk)("br",null,null,-1))),le=["disabled"],re={key:1,class:"invalidLogin"},he={style:{position:"absolute","z-index":"-1",opacity:"0"},ref:"bottomTabAnchor",type:"text"};function de(t,e,s,a,n,r){return(0,o.uX)(),(0,o.CE)("div",Tt,[(0,o.Lk)("div",Pt,[s.state.showRegister?((0,o.uX)(),(0,o.CE)("div",Xt,[St,(0,o.Lk)("button",{class:"toggleButton",onClick:e[11]||(e[11]=t=>r.toggleView())}," ↑   login   ↑ "),Wt,s.state.displayLoginRequired?((0,o.uX)(),(0,o.CE)("div",Ft,[(0,o.eW)(" You must register or"),Ot,(0,o.eW)(" log-in to create a demo!"),Qt])):(0,o.Q3)("",!0),_t,Bt,(0,o.Lk)("div",zt,[(0,o.Lk)("div",Vt,[(0,o.eW)(" User Name "),n.userNameAvailable?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.CE)("div",Ht,[(0,o.eW)("     "),Kt])),n.userNameAvailable&&s.state.regusername?((0,o.uX)(),(0,o.CE)("div",Jt,[(0,o.eW)("     "),qt])):(0,o.Q3)("",!0)]),(0,o.Lk)("input",{style:{position:"absolute","z-index":"-1",opacity:"0"},ref:"loginTabAnchor",type:"text",onKeydown:[e[12]||(e[12]=(0,i.jR)((t=>r.submit()),["enter"])),e[13]||(e[13]=(0,i.jR)((0,i.D$)((e=>t.$refs.bottomTabAnchor.focus()),["shift"]),["tab"]))]},null,544),(0,o.bo)((0,o.Lk)("input",{type:"text",ref:"regusername","onUpdate:modelValue":e[14]||(e[14]=t=>s.state.regusername=t),class:(0,l.C4)(["input",{userNameUnavailable:!n.userNameAvailable,userNameAvailable:n.userNameAvailable&&s.state.regusername}]),maxlength:"16",onInput:e[15]||(e[15]=t=>r.checkUserNameAvailability()),onKeydown:[e[16]||(e[16]=(0,i.jR)((t=>r.submit()),["enter"])),e[17]||(e[17]=(0,i.jR)((0,i.D$)((e=>t.$refs.bottomTabAnchor.focus()),["shift"]),["tab"]))]},null,34),[[i.Jo,s.state.regusername]]),Gt]),(0,o.Lk)("div",Yt,[(0,o.Lk)("div",Zt,[(0,o.eW)(" Password "),!r.passwordsMatch&&s.state.regpassword&&s.state.confirmpassword?((0,o.uX)(),(0,o.CE)("div",te,"     passwords do not match ")):(0,o.Q3)("",!0),r.passwordsMatch&&s.state.regpassword&&s.state.confirmpassword?((0,o.uX)(),(0,o.CE)("div",ee,[(0,o.eW)("     "),se])):(0,o.Q3)("",!0)]),(0,o.bo)((0,o.Lk)("input",{type:"password",ref:"regpassword","onUpdate:modelValue":e[18]||(e[18]=t=>s.state.regpassword=t),class:(0,l.C4)(["input",{passwordsDoNotMatch:!r.passwordsMatch&&s.state.regpassword&&s.state.confirmpassword,passwordsMatch:r.passwordsMatch&&s.state.regpassword&&s.state.confirmpassword}]),onKeydown:e[19]||(e[19]=(0,i.jR)((t=>r.submit()),["enter"]))},null,34),[[i.Jo,s.state.regpassword]]),ie]),(0,o.Lk)("div",oe,[ae,(0,o.bo)((0,o.Lk)("input",{type:"password",ref:"confirmpassword","onUpdate:modelValue":e[20]||(e[20]=t=>s.state.confirmpassword=t),class:(0,l.C4)(["input",{passwordsDoNotMatch:!r.passwordsMatch&&s.state.regpassword&&s.state.confirmpassword,passwordsMatch:r.passwordsMatch&&s.state.regpassword&&s.state.confirmpassword}]),onKeydown:e[21]||(e[21]=(0,i.jR)((t=>r.submit()),["enter"]))},null,34),[[i.Jo,s.state.confirmpassword]]),ne]),(0,o.Lk)("button",{onClick:e[22]||(e[22]=t=>r.submit()),disabled:!r.validate,class:(0,l.C4)({disabledButton:!r.validate})},"submit",10,le),(0,o.Lk)("button",{onClick:e[23]||(e[23]=t=>r.closePrompt()),onKeydown:[e[24]||(e[24]=(0,i.jR)((e=>t.$refs.loginTabAnchor.focus()),["tab"])),e[25]||(e[25]=(0,i.jR)((0,i.D$)((e=>t.$refs.cancelButton.focus()),["shift"]),["tab"]))],ref:"cancelButton",style:{background:"#faa"}},"cancel",544),n.showInvalid?((0,o.uX)(),(0,o.CE)("div",re," Whoa! check your info... ")):(0,o.Q3)("",!0),(0,o.Lk)("input",he,null,512)])):((0,o.uX)(),(0,o.CE)("div",Dt,[xt,At,(0,o.Lk)("div",It,[Et,(0,o.Lk)("input",{style:{position:"absolute","z-index":"-1",opacity:"0"},ref:"loginTabAnchor",onKeydown:e[0]||(e[0]=(0,i.jR)((0,i.D$)((e=>t.$refs.bottomTabAnchor.focus()),["shift"]),["tab"])),type:"text"},null,544),(0,o.bo)((0,o.Lk)("input",{type:"text",ref:"username","onUpdate:modelValue":e[1]||(e[1]=t=>s.state.username=t),class:"input",onKeydown:[e[2]||(e[2]=(0,i.jR)((t=>s.state.login()),["enter"])),e[3]||(e[3]=(0,i.jR)((0,i.D$)((e=>t.$refs.bottomTabAnchor.focus()),["shift"]),["tab"]))]},null,544),[[i.Jo,s.state.username]]),jt]),(0,o.Lk)("div",Mt,[Ut,(0,o.bo)((0,o.Lk)("input",{type:"password",ref:"password","onUpdate:modelValue":e[4]||(e[4]=t=>s.state.password=t),class:"input",onKeydown:e[5]||(e[5]=(0,i.jR)((t=>s.state.login()),["enter"]))},null,544),[[i.Jo,s.state.password]]),Rt]),(0,o.Lk)("button",{onClick:e[6]||(e[6]=t=>s.state.login()),ref:"go"},"Go",512),(0,o.Lk)("button",{onClick:e[7]||(e[7]=t=>r.closePrompt()),onKeydown:[e[8]||(e[8]=(0,i.jR)((e=>t.$refs.loginTabAnchor.focus()),["tab"])),e[9]||(e[9]=(0,i.jR)((0,i.D$)((e=>t.$refs.cancelButton.focus()),["shift"]),["tab"]))],style:{background:"#faa"},ref:"cancelButton"},"cancel",544),s.state.invalidLoginAttempt?((0,o.uX)(),(0,o.CE)("div",$t," Invalid User Name or Password ")):(0,o.Q3)("",!0),Nt,(0,o.Lk)("button",{class:"toggleButton",onClick:e[10]||(e[10]=t=>r.toggleView()),ref:"bottomTabAnchor"}," ↓   register   ↓ ",512)]))])])}var ce={name:"Account",props:["state"],data(){return{userNameAvailable:!0,showInvalid:!1}},computed:{passwordsMatch(){return this.state.regpassword===this.state.confirmpassword},validate(){return this.state.regusername&&this.state.regpassword&&this.passwordsMatch&&this.userNameAvailable}},methods:{submit(){if(this.validate){let t={userName:this.state.regusername,password:this.state.regpassword};fetch("submitReg.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((t=>t.json())).then((t=>{t[0]?(this.state.loggedIn=!0,this.state.loginPromptVisible=!1):this.showInvalid=!0}))}else this.showInvalid=!0},toggleView(){this.state.showRegister=!this.state.showRegister,this.$nextTick((()=>{this.state.showRegister?this.$refs.regusername.focus():this.$refs.username.focus()}))},toggleLogin(){this.state.loggedIn||this.state.showLoginPrompt()},closePrompt(){this.state.closePrompts()},checkUserNameAvailability(){if(this.userNameAvailable=!0,this.state.regusername){let t={userName:this.state.regusername};fetch("checkUserNameAvailability.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((t=>t.json())).then((t=>{this.userNameAvailable=t}))}}},mounted(){this.state.confirmpassword="",this.state.showRegister?this.$refs.regusername.focus():this.$refs.username.focus()}};const ue=(0,W.A)(ce,[["render",de],["__scopeId","data-v-de235fb4"]]);var pe=ue,me={name:"App",components:{Header:ht,Main:B,Footer:gt,Modal:q,Preview:Lt,LoginPrompt:pe},data(){return{state:{footerMsg:"<b>IMJUR</b><br>A FREE DIGITAL ASSET HOSTING SERVICE - ©"+(new Date).getFullYear()+'<br>contact: <a href="mailto:whitehotrobot@gmail.com">whitehotrobot@gmail.com</a>',links:[],uploadInProgress:!1,showModal:!1,setCookie:null,showPreview:!1,rootDomain:location.hostname,modalContent:"",modalQueue:[],previewLink:null,closeModal:null,closePreview:null,closePrompts:null,loggedInUser:{avatar:null},copy:null,next:null,prev:null,login:null,register:null,regusername:"",username:"",password:"",invalidLoginAttempt:!1,displayLoginRequired:!1,regpassword:"",confirmpassword:"",showLoginPrompt:!1,showRegister:!1,loggedIn:!1,loggedInUser:null,loginPromptVisible:!1}}},methods:{prev(){if(!this.state.showPreview)return;let t=this.state.previewLink.ct-1;t<0&&(t=this.state.links.length-1),this.state.showPreview=!1,this.$nextTick((()=>{this.state.showPreview=!0,this.state.previewLink=this.state.links[t]}))},next(){if(!this.state.showPreview)return;let t=this.state.previewLink.ct+1;t%=this.state.links.length,this.state.showPreview=!1,this.$nextTick((()=>{this.state.showPreview=!0,this.state.previewLink=this.state.links[t]}))},register(){console.log("registering"),this.state.showLoginPrompt=!0,this.state.showRegister=!0},copy(t){let e=document.createElement("div");e.innerHTML=t,e.style.opacity=.01,e.style.position="absolute",document.body.appendChild(e);var s=document.createRange();s.selectNode(e),window.getSelection().removeAllRanges(),window.getSelection().addRange(s),document.execCommand("copy"),window.getSelection().removeAllRanges(),e.remove();let i=document.querySelector("#copyConfirmation");i.style.display="block",i.style.opacity=1;let o=()=>{+i.style.opacity>0&&(i.style.opacity-=.04,+i.style.opacity<.1?(i.style.opacity=1,i.style.display="none"):setTimeout((()=>{o()}),10))};setTimeout((()=>{o()}),250)},closePrompts(){this.state.showLoginPrompt=!1},closeModal(){this.state.modalQueue.length?this.state.modalContent=this.state.modalQueue.shift():(this.state.showModal=!1,this.state.modalContent="")},closePreview(){this.state.showPreview=!1,this.state.previewLink=null},setCookie(){let t=document.cookie;t.split(";").map((t=>{-1==t.indexOf("autoplay")&&(document.cookie=t+"; expires="+new Date(0).toUTCString()+"; path=/; domain="+this.state.rootDomain)})),document.cookie="loggedinuser="+this.state.loggedinUserName+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain,document.cookie="loggedinuserID="+this.state.loggedinUserID+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain,document.cookie="token="+this.state.passhash+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain,document.cookie="autoplay="+this.state.autoplay+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain,document.cookie="showControls="+this.state.showControls+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain},login(){let t={userName:this.state.username,password:this.state.password};fetch(this.state.baseURL+"/login.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((t=>t.json())).then((t=>{t[0]?(this.state.loggedin=!0,this.state.loggedinUserName=this.state.username,this.state.loggedinUserID=+t[2],this.state.fetchUserData(this.state.loggedinUserID),this.state.isAdmin=+t[4],this.state.passhash=t[1],this.setCookie(),this.closePrompts(),this.state.invalidLoginAttemp=!1,this.state.showRegister=!1,this.state.showLoginPrompt=!0):(this.state.loggedin=!1,this.state.invalidLoginAttempt=!0)}))},logout(){let t=document.cookie;switch(t.split(";").map((t=>{-1==t.indexOf("autoplay")&&(document.cookie=t+"; expires="+new Date(0).toUTCString()+"; path=/; domain="+this.state.rootDomain)})),""!=this.state.search.string&&(this.state.search.demos=this.state.search.demos.filter((t=>!t.private))),this.state.mode){case"user":this.state.user.demos=this.state.user.demos.filter((t=>!t.private));break;case"single":this.state.demos=this.state.demos.filter((t=>!t.private));break;case"default":this.state.landingPage.demos=this.state.landingPage.demos.filter((t=>!t.private));break}this.state.loggedin=!1,this.state.isAdmin=!1,this.state.loggedinUserID=this.state.loggedinUserName="",window.location.reload()},checkLogin(){let t=document.cookie.split(";").filter((t=>"loggedinuser"===t.split("=")[0].trim()));if(t.length){this.state.loggedinUserName=t[0].split("=")[1];let e=document.cookie.split(";").filter((t=>"token"===t.split("=")[0].trim()));if(e.length){this.state.passhash=e[0].split("=")[1];let t=document.cookie.split(";").filter((t=>"loggedinuserID"===t.split("=")[0].trim()));t.length&&(this.state.loggedinUserID=+t[0].split("=")[1],this.checkEnabled())}}else this.getMode();this.checkShowControlsPref(),this.checkAutoplayPref(),this.checkExactSearchPref()}},watch:{"state.uploadInProgress"(t){}},mounted(){document.body.onkeydown=t=>{switch(t.keyCode){case 37:this.prev();break;case 39:this.next();break;case 27:this.state.showPreview=!1,this.state.uploadInProgress||(this.state.showModal=!1);break}},this.state.closeModal=this.closeModal,this.state.prev=this.prev,this.state.next=this.next,this.state.copy=this.copy,this.state.login=this.login,this.state.register=this.register,this.state.closePrompts=this.closePrompts,this.state.closePreview=this.closePreview,this.state.setCookie=this.setCookie}};const ge=(0,W.A)(me,[["render",n]]);var ke=ge;(0,i.Ef)(ke).mount("#app")}},e={};function s(i){var o=e[i];if(void 0!==o)return o.exports;var a=e[i]={exports:{}};return t[i].call(a.exports,a,a.exports,s),a.exports}s.m=t,function(){var t=[];s.O=function(e,i,o,a){if(!i){var n=1/0;for(d=0;d<t.length;d++){i=t[d][0],o=t[d][1],a=t[d][2];for(var l=!0,r=0;r<i.length;r++)(!1&a||n>=a)&&Object.keys(s.O).every((function(t){return s.O[t](i[r])}))?i.splice(r--,1):(l=!1,a<n&&(n=a));if(l){t.splice(d--,1);var h=o();void 0!==h&&(e=h)}}return e}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[i,o,a]}}(),function(){s.d=function(t,e){for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};s.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,a,n=i[0],l=i[1],r=i[2],h=0;if(n.some((function(e){return 0!==t[e]}))){for(o in l)s.o(l,o)&&(s.m[o]=l[o]);if(r)var d=r(s)}for(e&&e(i);h<n.length;h++)a=n[h],s.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return s.O(d)},i=self["webpackChunkimjur_000_pe"]=self["webpackChunkimjur_000_pe"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=s.O(void 0,[504],(function(){return s(6404)}));i=s.O(i)})();
//# sourceMappingURL=app.1a3660e9.js.map