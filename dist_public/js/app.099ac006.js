(function(){"use strict";var t={8066:function(t,e,s){var a=s(3751),o=s(641);const i=(0,o.Lk)("div",{id:"copyConfirmation"},[(0,o.Lk)("div",{id:"innerCopied"},"COPIED!")],-1);function n(t,e,s,a,n,l){const r=(0,o.g2)("Header"),d=(0,o.g2)("Main"),h=(0,o.g2)("Footer"),c=(0,o.g2)("UserSettings"),u=(0,o.g2)("LoginPrompt"),p=(0,o.g2)("Modal"),g=(0,o.g2)("Preview");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.bF)(r,{state:n.state},null,8,["state"]),(0,o.bF)(d,{state:n.state},null,8,["state"]),(0,o.bF)(h,{state:n.state},null,8,["state"]),n.state.userSettingsVisible?((0,o.uX)(),(0,o.Wv)(c,{key:0,state:n.state},null,8,["state"])):(0,o.Q3)("",!0),n.state.showLoginPrompt?((0,o.uX)(),(0,o.Wv)(u,{key:1,state:n.state},null,8,["state"])):(0,o.Q3)("",!0),n.state.showModal?((0,o.uX)(),(0,o.Wv)(p,{key:2,state:n.state,content:n.state.modalContent},null,8,["state","content"])):(0,o.Q3)("",!0),n.state.showPreview?((0,o.uX)(),(0,o.Wv)(g,{key:3,state:n.state,link:n.state.previewLink},null,8,["state","link"])):(0,o.Q3)("",!0),i])}var l=s(33);const r=t=>((0,o.Qi)("data-v-01792266"),t=t(),(0,o.jt)(),t),d={class:"main",ref:"main"},h={ref:"dropTargetCaption",id:"dropTargetCaption"},c=r((()=>(0,o.Lk)("br",null,null,-1))),u=r((()=>(0,o.Lk)("br",null,null,-1))),p=r((()=>(0,o.Lk)("br",null,null,-1))),g=r((()=>(0,o.Lk)("br",null,null,-1))),m=r((()=>(0,o.Lk)("br",null,null,-1))),w=r((()=>(0,o.Lk)("br",null,null,-1))),k=r((()=>(0,o.Lk)("br",null,null,-1))),v=r((()=>(0,o.Lk)("br",null,null,-1))),f=r((()=>(0,o.Lk)("br",null,null,-1))),b=r((()=>(0,o.Lk)("br",null,null,-1))),y=r((()=>(0,o.Lk)("span",{style:{"font-size":".7em"}},"(per file)",-1))),L=r((()=>(0,o.Lk)("br",null,null,-1))),C=r((()=>(0,o.Lk)("br",null,null,-1))),P=r((()=>(0,o.Lk)("br",null,null,-1))),T=r((()=>(0,o.Lk)("span",{style:{"font-size":".7em"}},"(at a time)",-1))),I=r((()=>(0,o.Lk)("br",null,null,-1))),U=r((()=>(0,o.Lk)("br",null,null,-1))),x=r((()=>(0,o.Lk)("br",null,null,-1))),A=r((()=>(0,o.Lk)("div",{style:{"font-size":".6em"}},[(0,o.eW)(" WARRANTY: none"),(0,o.Lk)("br"),(0,o.Lk)("br"),(0,o.eW)(" this website is a work-in-progress."),(0,o.Lk)("br"),(0,o.eW)(" your files will likely be deleted")],-1))),D={key:0,class:"links"},N=r((()=>(0,o.Lk)("br",null,null,-1)));function S(t,e,s,i,n,r){const S=(0,o.g2)("Link");return(0,o.uX)(),(0,o.CE)("div",d,[(0,o.Lk)("div",{id:"dropTarget",class:"dropTarget",style:(0,l.Tr)(s.state.links.length?"":"cursor: pointer;"),onDragover:e[0]||(e[0]=(0,a.D$)((()=>{}),["prevent"])),onDrop:e[1]||(e[1]=(0,a.D$)((t=>r.dropFiles(t)),["prevent"])),onClick:e[2]||(e[2]=t=>r.loadFiles()),ref:"dropTarget"},[(0,o.Lk)("div",h,[(0,o.eW)(" throw sum filez [click/drop]"),c,u,(0,o.eW)(" accepted : gif"),p,(0,o.eW)("            web[p/m]"),g,(0,o.eW)("            png"),m,(0,o.eW)("            jp[e]g"),w,(0,o.eW)("            mp4"),k,(0,o.eW)("            mp3"),v,f,(0,o.eW)(" max size : 25MB"),b,y,L,C,(0,o.eW)(" max files: 15"),P,T,I,U,x,A],512),s.state.links.length?((0,o.uX)(),(0,o.CE)("div",D,[(0,o.eW)(" links"),N,((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(s.state.links,(t=>((0,o.uX)(),(0,o.Wv)(S,{state:s.state,link:t},null,8,["state","link"])))),256))])):(0,o.Q3)("",!0)],36)],512)}s(4114);const j=t=>((0,o.Qi)("data-v-4a42540a"),t=t(),(0,o.jt)(),t),M={class:"link",ref:"anchor"},E=j((()=>(0,o.Lk)("br",null,null,-1))),R=["href"];function $(t,e,s,i,n,l){return(0,o.uX)(),(0,o.CE)("div",M,[(0,o.Lk)("div",{class:"linkThumb",ref:"linkThumb",onClick:e[0]||(e[0]=(0,a.D$)((t=>l.preview()),["prevent","stop"])),title:"view this asset"},null,512),(0,o.Lk)("div",{class:"copyLinkButton",onClick:e[1]||(e[1]=(0,a.D$)((t=>l.copy()),["prevent","stop"])),title:"copy link to clipboard"}),E,(0,o.Lk)("a",{href:s.link.href,class:"openButton",onClick:e[2]||(e[2]=(0,a.D$)((t=>l.open()),["prevent","stop"])),title:"open link in new tab"},null,8,R)],512)}var X={name:"Link",props:["state","link"],data(){return{c:document.createElement("canvas"),x:null,linkType:"",img:null,w:0,h:0,t:0}},methods:{copy(){this.state.copy(this.link.href)},open(){open(this.link.href,"_blank")},preview(){this.state.previewLink=this.link,this.state.showPreview=!0},Draw(){this.x.globalAlpha=1,this.x.fillStyle="#0008",this.x.fillRect(0,0,this.c.width,this.c.height);let t,e="contain";switch(e){case"contain":t=this.c.width/this.c.height<=1.777777778?this.c.width/this.w:this.c.height/this.h;break;case"cover":t=this.c.width/this.c.height>1.777777778?this.c.width/this.w:this.c.height/this.h;break}let s=this.w*t,a=this.h*t;switch(this.x.drawImage(this.img,this.c.width/2-s/2,this.c.height/2-a/2,s,a),this.t+=1/60,this.linkType){case"image":this.img.width||setTimeout((()=>{requestAnimationFrame(this.Draw)}),200);break;case"video":requestAnimationFrame(this.Draw);break}}},mounted(){if(this.$refs.linkThumb.appendChild(this.c),this.x=this.c.getContext("2d"),this.linkType=this.link.type.split("/")[0],this.c.width=500,this.c.height=500/1.77777778,this.c.style.width="200px",this.c.style.height="113px",this.c.style.borderRadius="20px","video"==this.linkType&&(this.img=document.createElement("video"),this.img.loop=!0,this.img.muted=!0,this.img.oncanplay=()=>{this.w=this.img.videoWidth,this.h=this.img.videoHeight,this.img.play(),this.Draw()},this.img.src=this.link.href),"image"==this.linkType||"audio"==this.linkType){let t;this.img=new Image,this.img.onload=()=>{this.w=this.img.width,this.h=this.img.height,this.Draw()},this.img.src="audio"==this.linkType?"musicNotes.svg":"thumb.php?res=uploads/"+(t=this.link.href.split("/"))[t.length-1].split("?")[0]}}},W=s(6262);const O=(0,W.A)(X,[["render",$],["__scopeId","data-v-4a42540a"]]);var Q=O,B={name:"Main",props:["state"],components:{Link:Q},data(){return{preload:[],rejects:[]}},methods:{processUpload(t){this.state.uploadInprogress=!0,this.state.modalContent='<div style="position: absolute;left:0;top:0;width:100%;height:100%;background:#000;"><video src="loading.mp4" style="min-width:50vw; min-height: 50vh; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); pointer-events: none; opacity: .6;" loop autoplay muted></video></div>',this.state.showModal=!0,this.$nextTick((()=>{let e=0,s=new FormData;t.map(((t,a)=>{console.log(`file ${a}: `,t),t.size>25e6?this.rejects=[...this.rejects,t]:(e++,s.append(`uploads_${a}`,t))}));let a='<div style="min-width:90vw; min-height: 50vh; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);background: #4008; color: #f88; padding-top: 100px;">';if(this.rejects.map((t=>{let e=(t.size/1e6|0).toLocaleString("en-us")+" MB<br>";a+=`oversized/rejected: size: ${e} "${t.name}" <br><br>`})),this.rejects.length&&(this.state.modalQueue=[...this.state.modalQueue,a+"</div>"],this.state.closeModal()),e){let t={loggedIn:this.state.loggedIn,userID:this.state.loggedInUserID,passhash:this.state.passhash,description:""};s.append("batchMetaData",JSON.stringify(t)),fetch("upload.php",{method:"POST",body:s}).then((t=>t.json())).then((t=>{console.log("response from upload.php: ",t),this.state.uploadInprogress=!1,t[0]?(this.$refs.dropTargetCaption.style.display="none",t[1].map(((e,s)=>{this.addLink(t[2][s],t[3][s],s,location.href.split("?")[0]+e)})),this.state.modalContent="",this.state.closeModal()):this.state.modalContent='<div style="min-width:90vw; min-height: 50vh; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);background: #8002; color: #f88; padding-top: 100px;">'+t[5]+"</div>"}))}}))},dropFiles(t){let e=[];t.dataTransfer.items?[...t.dataTransfer.items].forEach(((t,s)=>{if("file"===t.kind){const s=t.getAsFile();e=[...e,s]}})):e=Array.from(t.dataTransfer.files),e.length&&this.processUpload(e)},addLink(t,e,s,a){let o={size:t,type:e,ct:s,href:a};this.state.links.push(o)},loadFiles(){let t=document.createElement("input");t.type="file",t.multiple=!0,t.accept="image/gif, image/jiff, image/jpeg, image/jpg, image/png, image/webp, video/mp4, video/webm, video/mkv, audio/mp3, audio/wav, audio/mpeg",t.onchange=()=>this.processUpload(Array.from(t.files)),t.click()}},mounted(){this.preload=[...this.preload,[document.createElement("video"),"loading.mp4"]],this.preload.map((t=>{t[0].src=t[1]}))}};const F=(0,W.A)(B,[["render",S],["__scopeId","data-v-01792266"]]);var _=F;const z={class:"modal"},V=["innerHTML"];function J(t,e,s,a,i,n){return(0,o.uX)(),(0,o.CE)("div",z,[this.state.uploadInProgress?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.CE)("button",{key:0,onClick:e[0]||(e[0]=t=>n.close()),class:"cancelButton",title:"close this view [ESC]"}," close/cancel ")),(0,o.Lk)("div",{class:"modalInner",innerHTML:s.content},null,8,V)])}var K={name:"Modal",props:["state","content"],methods:{close(){this.state.closeModal()}},mounted(){}};const H=(0,W.A)(K,[["render",J],["__scopeId","data-v-d2bf34ba"]]);var q=H;const G={class:"header"};function Y(t,e,s,a,i,n){const l=(0,o.g2)("User");return(0,o.uX)(),(0,o.CE)("div",G,[(0,o.Lk)("div",{class:"headerImg",onClick:e[0]||(e[0]=t=>n.reload())}),(0,o.bF)(l,{state:s.state},null,8,["state"])])}const Z={class:"user"},tt={key:0},et={key:1},st={class:"userButtonContainer"},at={class:"loggedIn"},ot=["title"];function it(t,e,s,a,i,n){return(0,o.uX)(),(0,o.CE)("div",Z,[s.state.loggedIn?((0,o.uX)(),(0,o.CE)("div",et,[(0,o.Lk)("div",st,[(0,o.Lk)("button",{onClick:e[2]||(e[2]=t=>n.logout()),title:"log out",class:"userbutton"},"logout"),(0,o.Lk)("button",{onClick:e[3]||(e[3]=e=>t.userFiles()),title:"go to your assets",style:{"background-color":"#80fc",color:"#fff"},class:"userbutton"},"my assets"),(0,o.Lk)("button",{onClick:e[4]||(e[4]=t=>n.showSettings()),title:"show user settings",class:"userbutton"},"settings"),(0,o.Lk)("button",{onClick:e[5]||(e[5]=t=>n.explore()),title:"learn more about similar tools offered",style:{"background-color":"#08fc",color:"#fff"},class:"userbutton"},"explore")]),(0,o.Lk)("div",at,[(0,o.Lk)("div",{onClick:e[6]||(e[6]=t=>n.showSettings()),class:"avatar",title:`logged in as ${s.state.loggedinUserName}. click to show user settings`,style:(0,l.Tr)(`background-image: url(${s.state.loggedInUser.avatar})`)},null,12,ot)])])):((0,o.uX)(),(0,o.CE)("div",tt,[(0,o.Lk)("button",{onClick:e[0]||(e[0]=t=>n.login()),class:"loginButton",title:"sign in"}," login "),(0,o.Lk)("button",{onClick:e[1]||(e[1]=t=>s.state.register()),class:"loginButton",style:{top:"26px"},title:"register anonymously.<br><br>we only need a user name as<br>something to attach your files to"}," register ")]))])}var nt={name:"Login",props:["state"],data(){return{}},methods:{explore(){open("https://whr.rf.gd/a/about","_blank")},showSettings(){this.state.showUserSettings()},login(){this.state.showRegister=!1,this.state.showLoginPrompt=!0},logout(){this.state.logout()},toggleLogin(){this.state.loggedin||this.state.showLoginPrompt()}},mounted(){}};const lt=(0,W.A)(nt,[["render",it],["__scopeId","data-v-31cce280"]]);var rt=lt,dt={name:"Header",props:["state"],components:{User:rt},data(){return{}},methods:{reload(){window.location.reload()}},mounted(){}};const ht=(0,W.A)(dt,[["render",Y],["__scopeId","data-v-23495987"]]);var ct=ht;const ut={class:"footer"},pt=["innerHTML"];function gt(t,e,s,a,i,n){return(0,o.uX)(),(0,o.CE)("div",ut,[(0,o.Lk)("span",{innerHTML:s.state.footerMsg},null,8,pt)])}var mt={name:"Footer",props:["state"],data(){return{}},methods:{},mounted(){}};const wt=(0,W.A)(mt,[["render",gt],["__scopeId","data-v-2c431019"]]);var kt=wt;const vt={class:"preview"},ft={class:"previewInner"},bt={class:"slideshow",ref:"slideshow"};function yt(t,e,s,a,i,n){return(0,o.uX)(),(0,o.CE)("div",vt,[(0,o.Lk)("button",{onClick:e[0]||(e[0]=t=>n.close()),class:"cancelButton",title:"close this view"}," close/cancel "),(0,o.Lk)("div",ft,[(0,o.Lk)("div",bt,null,512),s.state.links.length>1?((0,o.uX)(),(0,o.CE)("div",{key:0,class:"leftButton",onClick:e[1]||(e[1]=t=>s.state.prev()),title:"view previous asset [left arrow]"})):(0,o.Q3)("",!0),s.state.links.length>1?((0,o.uX)(),(0,o.CE)("div",{key:1,class:"rightButton",onClick:e[2]||(e[2]=t=>s.state.next()),title:"view next asset [right arrow]"})):(0,o.Q3)("",!0)])])}var Lt={name:"Preview",props:["state","link"],data(){return{asset:null,linkType:""}},methods:{close(){this.state.closePreview()}},mounted(){this.linkType=this.link.type.split("/")[0],"image"!=this.linkType&&"audio"!=this.linkType||(this.asset=document.createElement("div"),this.asset.style.top="50%",this.asset.style.left="50%",this.asset.style.width="100%",this.asset.style.height="100%",this.asset.style.position="absolute",this.asset.style.transform="translate(-50%, -50%)",this.asset.style.objectFit="contain",this.asset.style.backgroundColor="#000",this.asset.style.backgroundSize="contain",this.asset.style.backgroundRepeat="no-repeat",this.asset.style.backgroundPosition="center center",this.asset.style.backgroundImage=`url(${"audio"==this.linkType?"musicNotes.svg":this.link.href})`,this.$refs.slideshow.appendChild(this.asset)),"audio"==this.linkType&&(this.asset=document.createElement("audio"),this.asset.controls=!0,this.asset.style.position="absolute",this.asset.style.left="50%",this.asset.style.top="50%",this.asset.loop=!0,this.asset.style.transform="translate(-50%, -50%)",this.asset.oncanplay=()=>{this.asset.play()},this.$refs.slideshow.appendChild(this.asset),this.asset.src=this.link.href),"video"==this.linkType&&(this.asset=document.createElement("video"),this.asset.controls=!0,this.asset.style.position="absolute",this.asset.style.left="50%",this.asset.style.top="50%",this.asset.style.width="100%",this.asset.style.height="100%",this.asset.style.objectFit="contain",this.asset.style.background="#000",this.asset.loop=!0,this.asset.style.transform="translate(-50%, -50%)",this.asset.oncanplay=()=>{this.asset.play()},this.$refs.slideshow.appendChild(this.asset),this.asset.src=this.link.href)},beforeUnmount(){this.asset.src=""}};const Ct=(0,W.A)(Lt,[["render",yt],["__scopeId","data-v-77010092"]]);var Pt=Ct;const Tt=t=>((0,o.Qi)("data-v-b65192d2"),t=t(),(0,o.jt)(),t),It={class:"LoginPrompt"},Ut={class:"mainLoginContainer"},xt={key:0},At=Tt((()=>(0,o.Lk)("span",{class:"title"},"login",-1))),Dt=Tt((()=>(0,o.Lk)("br",null,null,-1))),Nt={class:"inputContainer"},St=Tt((()=>(0,o.Lk)("div",{class:"inputTitle"},"User Name",-1))),jt=Tt((()=>(0,o.Lk)("br",null,null,-1))),Mt={class:"inputContainer"},Et=Tt((()=>(0,o.Lk)("div",{class:"inputTitle"},"Password",-1))),Rt=Tt((()=>(0,o.Lk)("br",null,null,-1))),$t={key:0,class:"invalidLogin"},Xt=Tt((()=>(0,o.Lk)("div",{class:"spacerDiv",style:{"margin-top":"30px"}},null,-1))),Wt={key:1},Ot=Tt((()=>(0,o.Lk)("div",{class:"spacerDiv",style:{"margin-top":"10px"}},null,-1))),Qt=Tt((()=>(0,o.Lk)("br",null,null,-1))),Bt={key:0,class:"mustRegister"},Ft=Tt((()=>(0,o.Lk)("br",null,null,-1))),_t=Tt((()=>(0,o.Lk)("br",null,null,-1))),zt=Tt((()=>(0,o.Lk)("span",{class:"title"},"register",-1))),Vt=Tt((()=>(0,o.Lk)("br",null,null,-1))),Jt={class:"inputContainer"},Kt={class:"inputTitle"},Ht={key:0,style:{display:"inline-block",color:"#f00"}},qt=Tt((()=>(0,o.Lk)("i",null,"user name unavailable",-1))),Gt={key:1,style:{display:"inline-block",color:"#0f4"}},Yt=Tt((()=>(0,o.Lk)("i",null,"user name available",-1))),Zt=Tt((()=>(0,o.Lk)("br",null,null,-1))),te={class:"inputContainer"},ee={class:"inputTitle"},se={key:0,style:{display:"inline-block",color:"#f00"}},ae={key:1,style:{display:"inline-block",color:"#0f4"}},oe=Tt((()=>(0,o.Lk)("i",null,"passwords match!",-1))),ie=Tt((()=>(0,o.Lk)("br",null,null,-1))),ne={class:"inputContainer"},le=Tt((()=>(0,o.Lk)("div",{class:"inputTitle"},"Confirm Password",-1))),re=Tt((()=>(0,o.Lk)("br",null,null,-1))),de=["disabled"],he={key:1,class:"invalidLogin"},ce={style:{position:"absolute","z-index":"-1",opacity:"0"},ref:"bottomTabAnchor",type:"text"};function ue(t,e,s,i,n,r){return(0,o.uX)(),(0,o.CE)("div",It,[(0,o.Lk)("div",Ut,[s.state.showRegister?((0,o.uX)(),(0,o.CE)("div",Wt,[Ot,(0,o.Lk)("button",{class:"toggleButton",onClick:e[11]||(e[11]=t=>r.toggleView())}," ↑   login   ↑ "),Qt,s.state.displayLoginRequired?((0,o.uX)(),(0,o.CE)("div",Bt,[(0,o.eW)(" You must register or"),Ft,(0,o.eW)(" log-in to create a demo!"),_t])):(0,o.Q3)("",!0),zt,Vt,(0,o.Lk)("div",Jt,[(0,o.Lk)("div",Kt,[(0,o.eW)(" User Name "),n.userNameAvailable?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.CE)("div",Ht,[(0,o.eW)("     "),qt])),n.userNameAvailable&&s.state.regusername?((0,o.uX)(),(0,o.CE)("div",Gt,[(0,o.eW)("     "),Yt])):(0,o.Q3)("",!0)]),(0,o.Lk)("input",{style:{position:"absolute","z-index":"-1",opacity:"0"},ref:"loginTabAnchor",type:"text",onKeydown:[e[12]||(e[12]=(0,a.jR)((t=>r.submit()),["enter"])),e[13]||(e[13]=(0,a.jR)((0,a.D$)((e=>t.$refs.bottomTabAnchor.focus()),["shift"]),["tab"]))]},null,544),(0,o.bo)((0,o.Lk)("input",{type:"text",ref:"regusername","onUpdate:modelValue":e[14]||(e[14]=t=>s.state.regusername=t),class:(0,l.C4)(["input",{userNameUnavailable:!n.userNameAvailable,userNameAvailable:n.userNameAvailable&&s.state.regusername}]),maxlength:"16",onInput:e[15]||(e[15]=t=>r.checkUserNameAvailability()),onKeydown:[e[16]||(e[16]=(0,a.jR)((t=>r.submit()),["enter"])),e[17]||(e[17]=(0,a.jR)((0,a.D$)((e=>t.$refs.bottomTabAnchor.focus()),["shift"]),["tab"]))]},null,34),[[a.Jo,s.state.regusername]]),Zt]),(0,o.Lk)("div",te,[(0,o.Lk)("div",ee,[(0,o.eW)(" Password "),!r.passwordsMatch&&s.state.regpassword&&s.state.confirmpassword?((0,o.uX)(),(0,o.CE)("div",se,"     passwords do not match ")):(0,o.Q3)("",!0),r.passwordsMatch&&s.state.regpassword&&s.state.confirmpassword?((0,o.uX)(),(0,o.CE)("div",ae,[(0,o.eW)("     "),oe])):(0,o.Q3)("",!0)]),(0,o.bo)((0,o.Lk)("input",{type:"password",ref:"regpassword","onUpdate:modelValue":e[18]||(e[18]=t=>s.state.regpassword=t),class:(0,l.C4)(["input",{passwordsDoNotMatch:!r.passwordsMatch&&s.state.regpassword&&s.state.confirmpassword,passwordsMatch:r.passwordsMatch&&s.state.regpassword&&s.state.confirmpassword}]),onKeydown:e[19]||(e[19]=(0,a.jR)((t=>r.submit()),["enter"]))},null,34),[[a.Jo,s.state.regpassword]]),ie]),(0,o.Lk)("div",ne,[le,(0,o.bo)((0,o.Lk)("input",{type:"password",ref:"confirmpassword","onUpdate:modelValue":e[20]||(e[20]=t=>s.state.confirmpassword=t),class:(0,l.C4)(["input",{passwordsDoNotMatch:!r.passwordsMatch&&s.state.regpassword&&s.state.confirmpassword,passwordsMatch:r.passwordsMatch&&s.state.regpassword&&s.state.confirmpassword}]),onKeydown:e[21]||(e[21]=(0,a.jR)((t=>r.submit()),["enter"]))},null,34),[[a.Jo,s.state.confirmpassword]]),re]),(0,o.Lk)("button",{onClick:e[22]||(e[22]=t=>r.submit()),disabled:!r.validate,class:(0,l.C4)({disabledButton:!r.validate})},"submit",10,de),(0,o.Lk)("button",{onClick:e[23]||(e[23]=t=>r.closePrompt()),onKeydown:[e[24]||(e[24]=(0,a.jR)((e=>t.$refs.loginTabAnchor.focus()),["tab"])),e[25]||(e[25]=(0,a.jR)((0,a.D$)((e=>t.$refs.cancelButton.focus()),["shift"]),["tab"]))],ref:"cancelButton",style:{background:"#faa"}},"cancel",544),n.showInvalid?((0,o.uX)(),(0,o.CE)("div",he," Whoa! check your info... ")):(0,o.Q3)("",!0),(0,o.Lk)("input",ce,null,512)])):((0,o.uX)(),(0,o.CE)("div",xt,[At,Dt,(0,o.Lk)("div",Nt,[St,(0,o.Lk)("input",{style:{position:"absolute","z-index":"-1",opacity:"0"},ref:"loginTabAnchor",onKeydown:e[0]||(e[0]=(0,a.jR)((0,a.D$)((e=>t.$refs.bottomTabAnchor.focus()),["shift"]),["tab"])),type:"text"},null,544),(0,o.bo)((0,o.Lk)("input",{type:"text",ref:"username","onUpdate:modelValue":e[1]||(e[1]=t=>s.state.username=t),class:"input",onKeydown:[e[2]||(e[2]=(0,a.jR)((t=>s.state.login()),["enter"])),e[3]||(e[3]=(0,a.jR)((0,a.D$)((e=>t.$refs.bottomTabAnchor.focus()),["shift"]),["tab"]))]},null,544),[[a.Jo,s.state.username]]),jt]),(0,o.Lk)("div",Mt,[Et,(0,o.bo)((0,o.Lk)("input",{type:"password",ref:"password","onUpdate:modelValue":e[4]||(e[4]=t=>s.state.password=t),class:"input",onKeydown:e[5]||(e[5]=(0,a.jR)((t=>s.state.login()),["enter"]))},null,544),[[a.Jo,s.state.password]]),Rt]),(0,o.Lk)("button",{onClick:e[6]||(e[6]=t=>s.state.login()),ref:"go"},"Go",512),(0,o.Lk)("button",{onClick:e[7]||(e[7]=t=>r.closePrompt()),onKeydown:[e[8]||(e[8]=(0,a.jR)((e=>t.$refs.loginTabAnchor.focus()),["tab"])),e[9]||(e[9]=(0,a.jR)((0,a.D$)((e=>t.$refs.cancelButton.focus()),["shift"]),["tab"]))],style:{background:"#faa"},ref:"cancelButton"},"cancel",544),s.state.invalidLoginAttempt?((0,o.uX)(),(0,o.CE)("div",$t," Invalid User Name or Password ")):(0,o.Q3)("",!0),Xt,(0,o.Lk)("button",{class:"toggleButton",onClick:e[10]||(e[10]=t=>r.toggleView()),ref:"bottomTabAnchor"}," ↓   register   ↓ ",512)]))])])}var pe={name:"LoginPrompt",props:["state"],data(){return{userNameAvailable:!0,showInvalid:!1}},computed:{passwordsMatch(){return this.state.regpassword===this.state.confirmpassword},validate(){return this.state.regusername&&this.state.regpassword&&this.passwordsMatch&&this.userNameAvailable}},methods:{submit(){if(this.validate){let t={userName:this.state.regusername,password:this.state.regpassword,avatar:this.state.defaultAvatar};fetch("submitReg.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((t=>t.json())).then((t=>{console.log(t),t[0]?(this.state.userName=this.state.regusername,console.log("login succeeded!"),this.state.loggedIn=!0,this.state.loggedinUserName=this.state.regusername,this.state.loggedinUserID=+t[2],this.state.isAdmin=+t[4],this.state.loggedInUser.avatar=this.state.defaultAvatar,this.state.passhash=t[1],this.state.setCookie(),this.state.closePrompts(),this.state.invalidLoginAttemp=!1,this.state.checkLogin()):this.showInvalid=!0}))}else console.log("failed validation. no reg submitted"),this.showInvalid=!0},toggleView(){this.state.showRegister=!this.state.showRegister,this.$nextTick((()=>{this.state.showRegister?this.$refs.regusername.focus():this.$refs.username.focus()}))},toggleLogin(){this.state.loggedIn||this.state.showLoginPrompt()},closePrompt(){this.state.closePrompts()},checkUserNameAvailability(){if(this.userNameAvailable=!0,this.state.regusername){let t={userName:this.state.regusername};fetch("checkUserNameAvailability.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((t=>t.json())).then((t=>{this.userNameAvailable=t}))}}},mounted(){this.state.confirmpassword="",this.state.showRegister?this.$refs.regusername.focus():this.$refs.username.focus()}};const ge=(0,W.A)(pe,[["render",ue],["__scopeId","data-v-b65192d2"]]);var me=ge;const we={class:"UserSettings"},ke={class:"mainContainer"},ve={style:{"font-size":"28px","line-height":"1em","font-weight":"900"}},fe=(0,o.Lk)("br",null,null,-1),be=(0,o.Lk)("span",{style:{color:"#aff","font-size":"36px","font-weight":"400"}},"settings",-1),ye=(0,o.Lk)("div",{class:"spacerDiv"},null,-1),Le=(0,o.Lk)("br",null,null,-1),Ce={class:"editAvatarImgContainer"},Pe=["src"],Te=(0,o.Lk)("br",null,null,-1),Ie={key:0,style:{color:"#4f8","font-size":"18px",background:"#055",padding:"4px","margin-top":"10px","padding-bottom":"8px"}},Ue={key:1,style:{color:"#f44","font-size":"18px",background:"#500",padding:"4px","margin-top":"10px","padding-bottom":"8px"}},xe=(0,o.Lk)("div",{class:"spacerDiv",style:{"margin-top":"20px"}},null,-1),Ae=(0,o.Lk)("br",null,null,-1),De=(0,o.Lk)("br",null,null,-1),Ne=(0,o.Lk)("br",null,null,-1),Se=(0,o.Lk)("br",null,null,-1),je={key:2,style:{color:"#4f8","font-size":"24px",background:"#055",padding:"4px","margin-top":"10px","padding-bottom":"8px"}},Me={key:3,style:{color:"#f44","font-size":"20px",background:"#400",padding:"4px","margin-top":"10px","padding-bottom":"8px"}},Ee={key:4,style:{color:"#f00","font-size":"20px"}},Re={key:5,style:{color:"#0f4"}},$e=(0,o.Lk)("i",null,"passwords match!",-1),Xe=["disabled"],We=(0,o.Lk)("div",{class:"spacerDiv"},null,-1);function Oe(t,e,s,i,n,r){return(0,o.uX)(),(0,o.CE)("div",we,[(0,o.Lk)("div",ke,[(0,o.Lk)("span",ve,[(0,o.eW)((0,l.v_)(s.state.loggedinUserName)+" ",1),fe,be]),ye,(0,o.eW)(" your avatar"),Le,(0,o.Lk)("div",Ce,[(0,o.Lk)("img",{src:s.state.loggedInUser.avatar,class:"editAvatarImg"},null,8,Pe)]),(0,o.Lk)("input",{style:{opacity:"0",position:"absolute","z-index":"-1"},ref:"tabAnchor",onKeydown:e[0]||(e[0]=(0,a.jR)((0,a.D$)((e=>t.$refs.cancelButton.focus()),["shift"]),["tab"]))},null,544),(0,o.bo)((0,o.Lk)("input",{type:"text",ref:"avatarURL","onUpdate:modelValue":e[1]||(e[1]=t=>s.state.loggedInUser.avatar=t),class:"input avatarInput",onInput:e[2]||(e[2]=t=>r.updateAvatar()),onClick:e[3]||(e[3]=t=>t.target.select()),placeholder:"URL to an online image..."},null,544),[[a.Jo,s.state.loggedInUser.avatar]]),Te,1==n.avatarUpdateSuccessful?((0,o.uX)(),(0,o.CE)("div",Ie,"     avatar update successful ")):(0,o.Q3)("",!0),-1==n.avatarUpdateSuccessful?((0,o.uX)(),(0,o.CE)("div",Ue,"     avatar update NOT successful ")):(0,o.Q3)("",!0),xe,(0,o.eW)(" change your password"),Ae,(0,o.bo)((0,o.Lk)("input",{type:"password",ref:"currentpassword",class:"input passwordFields","onUpdate:modelValue":e[4]||(e[4]=t=>n.currentPassword=t),onKeydown:e[5]||(e[5]=(0,a.jR)((t=>r.savePassword()),["enter"])),onClick:e[6]||(e[6]=t=>t.target.select()),onInput:e[7]||(e[7]=t=>n.showInvalid=!1),placeholder:"current password"},null,544),[[a.Jo,n.currentPassword]]),De,(0,o.bo)((0,o.Lk)("input",{type:"password",ref:"newpassword",class:(0,l.C4)(["input passwordFields",{passwordsDoNotMatch:!r.passwordsMatch&&n.newPassword&&n.confirmNewPassword,passwordsMatch:r.passwordsMatch&&n.newPassword&&n.confirmNewPassword}]),"onUpdate:modelValue":e[8]||(e[8]=t=>n.newPassword=t),onKeydown:e[9]||(e[9]=(0,a.jR)((t=>r.savePassword()),["enter"])),onInput:e[10]||(e[10]=t=>n.showInvalid=!1),onClick:e[11]||(e[11]=t=>t.target.select()),placeholder:"new password"},null,34),[[a.Jo,n.newPassword]]),Ne,(0,o.bo)((0,o.Lk)("input",{type:"password",ref:"confirmnewpassword","onUpdate:modelValue":e[12]||(e[12]=t=>n.confirmNewPassword=t),onInput:e[13]||(e[13]=t=>n.showInvalid=!1),class:(0,l.C4)(["input passwordFields",{passwordsDoNotMatch:!r.passwordsMatch&&n.newPassword&&n.confirmNewPassword,passwordsMatch:r.passwordsMatch&&n.newPassword&&n.confirmNewPassword}]),onClick:e[14]||(e[14]=t=>t.target.select()),onKeydown:e[15]||(e[15]=(0,a.jR)((t=>r.savePassword()),["enter"])),placeholder:"confirm new password"},null,34),[[a.Jo,n.confirmNewPassword]]),Se,n.savedPassword?((0,o.uX)(),(0,o.CE)("div",je,"     password saved ")):(0,o.Q3)("",!0),n.showInvalid?((0,o.uX)(),(0,o.CE)("div",Me,"     ERROR SAVING PASSWORD! ")):(0,o.Q3)("",!0),n.savedPassword||n.showInvalid||r.passwordsMatch||!n.newPassword||!n.confirmNewPassword?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.CE)("div",Ee,"     passwords do not match ")),!n.savedPassword&&!n.showInvalid&&r.passwordsMatch&&n.newPassword&&n.confirmNewPassword?((0,o.uX)(),(0,o.CE)("div",Re,[(0,o.eW)("     "),$e])):(0,o.Q3)("",!0),(0,o.Lk)("button",{onClick:e[16]||(e[16]=t=>r.savePassword()),ref:"cancelButton",disabled:!r.validate,class:(0,l.C4)([{disabledButton:!r.validate},"userSettingsButton"])},"save",10,Xe),We,(0,o.Lk)("button",{onClick:e[17]||(e[17]=t=>r.closePrompt()),onKeydown:[e[18]||(e[18]=(0,a.jR)((e=>t.$refs.tabAnchor.focus()),["tab"])),e[19]||(e[19]=(0,a.jR)((0,a.D$)((e=>t.$refs.cancelButton.focus()),["shift"]),["tab"]))],ref:"cancelButton",style:{background:"#faa"},class:"userSettingsButton"},"close / cancel",544),(0,o.Lk)("input",{style:{opacity:"0",position:"absolute","z-index":"-1"},ref:"endTabAnchor",onKeydown:e[20]||(e[20]=(0,a.jR)((0,a.D$)((e=>t.$refs.confirmnewassword.focus()),["shift"]),["tab"]))},null,544)])])}var Qe={name:"UserSettings",props:["state"],data(){return{newPassword:"",confirmNewPassword:"",currentPassword:"",savedPassword:!1,showInvalid:!1,avatarUpdateSuccessful:0}},computed:{passwordsMatch(){return this.newPassword===this.confirmNewPassword},validate(){return this.passwordsMatch&&this.newPassword&&this.confirmNewPassword&&this.currentPassword}},methods:{savePassword(){if(this.validate){let t={userName:this.state.loggedinUserName,currentPassword:this.currentPassword,newPassword:this.newPassword};fetch("changePassword.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((t=>t.json())).then((t=>{t[0]?(this.state.passhash=t[1],this.savedPassword=!0,this.currentPassword=this.newPassword=this.confirmNewPassword="",this.state.setCookie()):this.showInvalid=!0}))}else this.savedPassword=!1,this.showInvalid=!0},closePrompt(){this.state.closePrompts()},updateAvatar(){let t={userName:this.state.loggedinUserName,passhash:this.state.passhash,newAvatar:this.state.loggedInUser.avatar};fetch("updateAvatar.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((t=>t.json())).then((t=>{t[0]?(this.avatarUpdateSuccessful=1,setTimeout((()=>this.avatarUpdateSuccessful=0),2e3)):(this.avatarUpdateSuccssful=-1,setTimeout((()=>this.avatarUpdateSuccessful=0),2e3))}))}},mounted(){this.$refs.currentpassword.focus()}};const Be=(0,W.A)(Qe,[["render",Oe]]);var Fe=Be,_e={name:"App",components:{Header:ct,Main:_,Footer:kt,UserSettings:Fe,Modal:q,Preview:Pt,LoginPrompt:me},data(){return{state:{footerMsg:"<b>IMJUR</b><br>A FREE DIGITAL ASSET HOSTING SERVICE - ©"+(new Date).getFullYear()+'<br>contact: <a href="mailto:whitehotrobot@gmail.com">whitehotrobot@gmail.com</a>',links:[],uploadInProgress:!1,showModal:!1,setCookie:null,mode:null,getAvatar:null,showPreview:!1,rootDomain:location.hostname,modalContent:"",modalQueue:[],previewLink:null,passhash:"",loggedinUserID:null,closeModal:null,closePreview:null,closePrompts:null,defaultAvatar:"avatarDefault.png",loggedInUser:{avatar:"avatarDefault.png"},loggedinUserName:"",copy:null,next:null,prev:null,login:null,register:null,logout:null,regusername:"",username:"",password:"",showUserSettings:null,invalidLoginAttempt:!1,displayLoginRequired:!1,userSettingsVisible:!1,regpassword:"",checkLogin:null,confirmpassword:"",showLoginPrompt:!1,showRegister:!1,loggedIn:!1,loginPromptVisible:!1,getPages:null}}},methods:{prev(){if(!this.state.showPreview)return;let t=this.state.previewLink.ct-1;t<0&&(t=this.state.links.length-1),this.state.showPreview=!1,this.$nextTick((()=>{this.state.showPreview=!0,this.state.previewLink=this.state.links[t]}))},next(){if(!this.state.showPreview)return;let t=this.state.previewLink.ct+1;t%=this.state.links.length,this.state.showPreview=!1,this.$nextTick((()=>{this.state.showPreview=!0,this.state.previewLink=this.state.links[t]}))},register(){console.log("registering"),this.state.showLoginPrompt=!0,this.state.showRegister=!0},showUserSettings(){document.getElementsByTagName("HTML")[0].style.overflowY="hidden",this.state.userSettingsVisible=!0},copy(t){let e=document.createElement("div");e.innerHTML=t,e.style.opacity=.01,e.style.position="absolute",document.body.appendChild(e);var s=document.createRange();s.selectNode(e),window.getSelection().removeAllRanges(),window.getSelection().addRange(s),document.execCommand("copy"),window.getSelection().removeAllRanges(),e.remove();let a=document.querySelector("#copyConfirmation");a.style.display="block",a.style.opacity=1;let o=()=>{+a.style.opacity>0&&(a.style.opacity-=.04,+a.style.opacity<.1?(a.style.opacity=1,a.style.display="none"):setTimeout((()=>{o()}),10))};setTimeout((()=>{o()}),250)},closePrompts(){this.state.showLoginPrompt=!1,this.state.userSettingsVisible=!1},closeModal(){this.state.modalQueue.length?this.state.modalContent=this.state.modalQueue.shift():(this.state.showModal=!1,this.state.modalContent="")},getAvatar(t){return this.state.loggedIn?this.state.loggedInUser.avatar:this.state.defaultAvatar},closePreview(){this.state.showPreview=!1,this.state.previewLink=null},checkEnabled(){if(this.state.loggedinUserName){let t={userName:this.state.loggedinUserName,passhash:this.state.passhash};fetch("checkEnabled.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((t=>t.json())).then((t=>{+t[0]?(console.log("logged in."),this.state.loggedIn=!0,this.state.loggedinUserID=+t[1],this.state.loggedInUser.avatar=t[2],this.setCookie(),this.state.loginPromptVisible=!1,this.state.invalidLoginAttemp=!1,+t[3]&&(this.state.isAdmin=!0)):(console.log("not logged in."),this.state.loggedIn=!1,this.state.loggedinUserName="",this.state.loggedinUserID="",this.state.passhash="",this.state.isAdmin=!1,this.state.invalidLoginAttempt=!0),this.getMode()}))}},setCookie(){let t=document.cookie;t.split(";").map((t=>{-1==t.indexOf("autoplay")&&(document.cookie=t+"; expires="+new Date(0).toUTCString()+"; path=/; domain="+this.state.rootDomain)})),document.cookie="loggedinuser="+this.state.loggedinUserName+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain,document.cookie="loggedinuserID="+this.state.loggedinUserID+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain,document.cookie="token="+this.state.passhash+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain,document.cookie="autoplay="+this.state.autoplay+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain,document.cookie="showControls="+this.state.showControls+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain},getPages(){console.log("loaded. mode: "+this.state.mode)},login(){let t={userName:this.state.username,password:this.state.password};fetch("login.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((t=>t.json())).then((t=>{t[0]?(console.log("login succeeded!"),this.state.loggedIn=!0,this.state.loggedinUserName=this.state.username,this.state.loggedinUserID=+t[2],this.state.isAdmin=+t[4],this.state.passhash=t[1],this.setCookie(),this.closePrompts(),this.state.invalidLoginAttemp=!1,this.state.loggedInUser.avatar=t[3]):(console.log("not logged in."),this.state.loggedIn=!1,this.state.invalidLoginAttempt=!0)}))},getMode(){let t=window.location.pathname.split("/").filter((t=>t));if(t.length>0)switch(t[0]){case"d":this.state.mode="single";break;case"u":break;default:this.state.mode="default";break}else this.state.mode="default",this.getPages(),window.location.href!==window.location.origin+"/"&&(window.location.href=window.location.origin)},logout(){let t=document.cookie;switch(t.split(";").map((t=>{-1==t.indexOf("autoplay")&&(document.cookie=t+"; expires="+new Date(0).toUTCString()+"; path=/; domain="+this.state.rootDomain)})),this.state.mode){case"user":break;case"single":break;case"default":break}this.state.loggedIn=!1,this.state.isAdmin=!1,this.state.loggedinUserID=this.state.loggedinUserName="",window.location.reload()},checkLogin(){let t=document.cookie.split(";").filter((t=>"loggedinuser"===t.split("=")[0].trim()));if(t.length){this.state.loggedinUserName=t[0].split("=")[1];let e=document.cookie.split(";").filter((t=>"token"===t.split("=")[0].trim()));if(e.length){this.state.passhash=e[0].split("=")[1];let t=document.cookie.split(";").filter((t=>"loggedinuserID"===t.split("=")[0].trim()));t.length&&(this.state.loggedinUserID=+t[0].split("=")[1],this.checkEnabled())}}else this.getMode()}},watch:{"state.uploadInProgress"(t){}},mounted(){document.body.onkeydown=t=>{switch(t.keyCode){case 37:this.prev();break;case 39:this.next();break;case 27:this.state.showPreview=!1,this.closePrompts(),this.state.uploadInProgress||(this.state.showModal=!1);break}},this.state.closeModal=this.closeModal,this.state.prev=this.prev,this.state.next=this.next,this.state.copy=this.copy,this.state.login=this.login,this.state.logout=this.logout,this.state.register=this.register,this.state.getPages=this.getPages,this.state.getAvatar=this.getAvatar,this.state.setCookie=this.setCookie,this.state.checkLogin=this.checkLogin,this.state.closePrompts=this.closePrompts,this.state.closePreview=this.closePreview,this.state.showUserSettings=this.showUserSettings,this.checkLogin()}};const ze=(0,W.A)(_e,[["render",n]]);var Ve=ze;(0,a.Ef)(Ve).mount("#app")}},e={};function s(a){var o=e[a];if(void 0!==o)return o.exports;var i=e[a]={exports:{}};return t[a].call(i.exports,i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(e,a,o,i){if(!a){var n=1/0;for(h=0;h<t.length;h++){a=t[h][0],o=t[h][1],i=t[h][2];for(var l=!0,r=0;r<a.length;r++)(!1&i||n>=i)&&Object.keys(s.O).every((function(t){return s.O[t](a[r])}))?a.splice(r--,1):(l=!1,i<n&&(n=i));if(l){t.splice(h--,1);var d=o();void 0!==d&&(e=d)}}return e}i=i||0;for(var h=t.length;h>0&&t[h-1][2]>i;h--)t[h]=t[h-1];t[h]=[a,o,i]}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};s.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,i,n=a[0],l=a[1],r=a[2],d=0;if(n.some((function(e){return 0!==t[e]}))){for(o in l)s.o(l,o)&&(s.m[o]=l[o]);if(r)var h=r(s)}for(e&&e(a);d<n.length;d++)i=n[d],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(h)},a=self["webpackChunkimjur_000_pe"]=self["webpackChunkimjur_000_pe"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[504],(function(){return s(8066)}));a=s.O(a)})();
//# sourceMappingURL=app.099ac006.js.map