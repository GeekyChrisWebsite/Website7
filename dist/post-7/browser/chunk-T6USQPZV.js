import{a as K}from"./chunk-C4GXKO76.js";import{a as ie}from"./chunk-7MHNBSLW.js";import{a as Le}from"./chunk-DBLGXQ5P.js";import{a as Te,b as Ie,d as Oe}from"./chunk-H7FBMMPD.js";import{a as ke}from"./chunk-MDLD5AMO.js";import{a as Ee,b as ze}from"./chunk-VF6NAT27.js";import"./chunk-77ZL3MI5.js";import"./chunk-PVNN46WA.js";import"./chunk-OIYTWRTJ.js";import{a as Me}from"./chunk-POW34RVY.js";import{n as Q,o as te}from"./chunk-CIY2GROO.js";import"./chunk-KMXITLPI.js";import{c as De,m as q,o as xe,p as Ce}from"./chunk-EOFWODBS.js";import{$a as b,A as oe,Ab as u,Bb as w,Bc as D,Cb as C,Dc as U,Fa as X,Ga as S,Hb as V,Pa as le,Q as M,Qa as o,R as L,Ra as _,Rb as N,Sb as fe,Tb as J,U as Z,V as $,Vb as I,Wa as A,Wb as ve,Xb as ee,Y as x,Yb as O,Z as P,Zb as _e,ab as d,ba as h,bb as ce,ca as g,cb as de,eb as T,gb as p,gc as Se,j as ne,jb as ue,kb as he,lb as a,mb as l,n as G,nb as m,ob as F,pb as H,qa as R,r as re,rb as y,tb as v,ub as c,uc as ye,vb as ge,vc as B,wb as pe,wc as W,xb as Y,xc as be,y as ae,yb as j,yc as we,zb as me}from"./chunk-ZFJE44N6.js";var Ve=(()=>{class e{errorHandler;constructor(t){this.errorHandler=t}log(t,...i){Se()&&console.log(t,...i)}error(t){this.errorHandler.handleError(t)}warn(t,...i){console.warn(t,...i)}static \u0275fac=function(i){return new(i||e)($(le))};static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var $e=new Z("WindowToken"),E=class{get nativeWindow(){throw new Error("Not implemented.")}},Ne=(()=>{class e extends E{constructor(){super()}get nativeWindow(){return window}static \u0275fac=function(i){return new(i||e)};static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();function Be(e,n){return U(n)?e.nativeWindow:{setTimeout:(i,s)=>{},clearTimeout:i=>{}}}var We={provide:E,useClass:Ne},Ue={provide:$e,useFactory:Be,deps:[E,R]},qe=[We,Ue],Qe=new Z("DocumentToken"),z=class{get nativeDocument(){throw new Error("Not implemented.")}},Ke=(()=>{class e extends z{constructor(){super()}get nativeDocument(){return document}static \u0275fac=function(i){return new(i||e)};static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();function Ge(e,n){return U(n)?e.nativeDocument:{hidden:!1,visibilityState:"visible"}}var Ze={provide:z,useClass:Ke},Xe={provide:Qe,useFactory:Ge,deps:[z,R]},Ye=[Ze,Xe];var Je=(()=>{class e{resizeObservable$;get onResize$(){return this.resizeObservable$}constructor(t,i){this.resizeObservable$=U(i)?ae(t,"resize"):new ne().asObservable()}static \u0275fac=function(i){return new(i||e)($($e),$(R))};static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var Pe=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=P({type:e});static \u0275inj=L({providers:[qe,Je,Ye,Ve],imports:[D]})}return e})();function et(e,n){if(e&1){let t=y();a(0,"img",6),v("error",function(s){h(t);let r=c(2);return g(r.imageError(s))}),l()}if(e&2){let t=c(2);d("src",t.image,S)}}function tt(e,n){if(e&1&&m(0,"span",8),e&2){let t=c(3);T(t.icon),d("ngClass","p-chip-icon"),b("data-pc-section","icon")}}function it(e,n){if(e&1&&p(0,tt,1,4,"span",7),e&2){let t=c(2);d("ngIf",t.icon)}}function st(e,n){if(e&1&&(a(0,"div",9),u(1),l()),e&2){let t=c(2);b("data-pc-section","label"),o(1),w(t.label)}}function nt(e,n){if(e&1){let t=y();a(0,"span",13),v("click",function(s){h(t);let r=c(4);return g(r.close(s))})("keydown",function(s){h(t);let r=c(4);return g(r.onKeydown(s))}),l()}if(e&2){let t=c(4);T(t.removeIcon),d("ngClass","pi-chip-remove-icon"),b("data-pc-section","removeicon")}}function rt(e,n){if(e&1){let t=y();a(0,"TimesCircleIcon",14),v("click",function(s){h(t);let r=c(4);return g(r.close(s))})("keydown",function(s){h(t);let r=c(4);return g(r.onKeydown(s))}),l()}e&2&&(T("pi-chip-remove-icon"),b("data-pc-section","removeicon"))}function at(e,n){if(e&1&&(F(0),p(1,nt,1,4,"span",11)(2,rt,1,3,"TimesCircleIcon",12),H()),e&2){let t=c(3);o(1),d("ngIf",t.removeIcon),o(1),d("ngIf",!t.removeIcon)}}function ot(e,n){}function lt(e,n){e&1&&p(0,ot,0,0,"ng-template")}function ct(e,n){if(e&1){let t=y();a(0,"span",15),v("click",function(s){h(t);let r=c(3);return g(r.close(s))})("keydown",function(s){h(t);let r=c(3);return g(r.onKeydown(s))}),p(1,lt,1,0,null,16),l()}if(e&2){let t=c(3);b("data-pc-section","removeicon"),o(1),d("ngTemplateOutlet",t.removeIconTemplate)}}function dt(e,n){if(e&1&&(F(0),p(1,at,3,2,"ng-container",5)(2,ct,2,2,"span",10),H()),e&2){let t=c(2);o(1),d("ngIf",!t.removeIconTemplate),o(1),d("ngIf",t.removeIconTemplate)}}function ut(e,n){if(e&1&&(a(0,"div",1),pe(1),p(2,et,1,1,"img",2)(3,it,1,1,"ng-template",null,3,_e)(5,st,2,2,"div",4)(6,dt,3,2,"ng-container",5),l()),e&2){let t=me(4),i=c();T(i.styleClass),d("ngClass",i.containerClass())("ngStyle",i.style),b("data-pc-name","chip")("aria-label",i.label)("data-pc-section","root"),o(2),d("ngIf",i.image)("ngIfElse",t),o(3),d("ngIf",i.label),o(1),d("ngIf",i.removable)}}var ht=["*"],Ae=(()=>{class e{label;icon;image;style;styleClass;removable=!1;removeIcon;onRemove=new A;onImageError=new A;visible=!0;removeIconTemplate;templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"removeicon":this.removeIconTemplate=t.template;break;default:this.removeIconTemplate=t.template;break}})}containerClass(){return{"p-chip p-component":!0,"p-chip-image":this.image!=null}}close(t){this.visible=!1,this.onRemove.emit(t)}onKeydown(t){(t.key==="Enter"||t.key==="Backspace")&&this.close(t)}imageError(t){this.onImageError.emit(t)}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=x({type:e,selectors:[["p-chip"]],contentQueries:function(i,s,r){if(i&1&&ee(r,Q,4),i&2){let f;I(f=O())&&(s.templates=f)}},hostAttrs:[1,"p-element"],inputs:{label:"label",icon:"icon",image:"image",style:"style",styleClass:"styleClass",removable:"removable",removeIcon:"removeIcon"},outputs:{onRemove:"onRemove",onImageError:"onImageError"},ngContentSelectors:ht,decls:1,vars:1,consts:[[3,"ngClass","class","ngStyle",4,"ngIf"],[3,"ngClass","ngStyle"],[3,"src","error",4,"ngIf","ngIfElse"],["iconTemplate",""],["class","p-chip-text",4,"ngIf"],[4,"ngIf"],[3,"src","error"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],[1,"p-chip-text"],["tabindex","0","class","pi-chip-remove-icon",3,"click","keydown",4,"ngIf"],["tabindex","0",3,"class","ngClass","click","keydown",4,"ngIf"],["tabindex","0",3,"class","click","keydown",4,"ngIf"],["tabindex","0",3,"ngClass","click","keydown"],["tabindex","0",3,"click","keydown"],["tabindex","0",1,"pi-chip-remove-icon",3,"click","keydown"],[4,"ngTemplateOutlet"]],template:function(i,s){i&1&&(ge(),p(0,ut,7,11,"div",0)),i&2&&d("ngIf",s.visible)},dependencies:()=>[ye,W,we,be,ie],styles:[`@layer primeng{.p-chip{display:inline-flex;align-items:center}.p-chip-text,.p-chip-icon.pi,.pi-chip-remove-icon.pi{line-height:1.5}.pi-chip-remove-icon{cursor:pointer}.p-chip img{border-radius:50%}}
`],encapsulation:2,changeDetection:0})}return e})(),Fe=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=P({type:e});static \u0275inj=L({imports:[D,ie,te,te]})}return e})();function ft(e,n){if(e&1){let t=y();a(0,"div",3),m(1,"img",4),a(2,"div",5)(3,"h4",6),u(4),N(5,"truncateText"),l(),a(6,"h6",7),u(7),l(),m(8,"p",8),N(9,"sanatizer"),N(10,"truncateText"),a(11,"div",9)(12,"div",10)(13,"button",11),v("click",function(s){let f=h(t).$implicit;return c().makePhoneCall(f.business.phone_number),g(s.stopPropagation())}),u(14," Call "),l(),a(15,"button",12),v("click",function(s){let f=h(t).$implicit;return c().handleMapClick(f.business.geo_direction),g(s.stopPropagation())}),u(16," Directions "),l()()()()()}if(e&2){let t=n.$implicit;j("routerLink","/postingdetails/",t.id,""),o(1),d("src",t.business.logo,S),o(3),C(" ",J(5,5,t.title,15)," "),o(3),w(t.postTime),o(1),d("innerHTML",fe(9,8,J(10,10,t.content,30)),X)}}var He=(()=>{let n=class n{constructor(i,s){this.service=i,this.router=s,this.id=s.snapshot.params.id}ngOnInit(){this.getSimilar(this.id)}getSimilar(i){this.service.getpostsbusinessID(i).subscribe(s=>{this.data=s.data})}truncateText(i,s){return i.length<=s?i:i.substr(0,s)+"..."}makePhoneCall(i){window.location.href="tel:"+i}handleMapClick(i){if(i&&i.lat!==void 0&&i.lng!==void 0){let s=`https://www.google.com/maps/search/?api=1&query=${i.lat},${i.lng}`,r=document.createElement("a");r.href=s,r.target="_blank",r.click()}console.log(i)}};n.\u0275fac=function(s){return new(s||n)(_(K),_(q))},n.\u0275cmp=x({type:n,selectors:[["app-similar-work"]],standalone:!0,features:[V],decls:3,vars:1,consts:[[1,"similars"],[1,"row"],["class","card d-flex flex-row p-0 my-4",3,"routerLink",4,"ngFor","ngForOf"],[1,"card","d-flex","flex-row","p-0","my-4",3,"routerLink"],["alt","",3,"src"],[1,"content","py-1","ms-4"],[1,"fw-bold","fs-5","px-3","m-0"],[1,"text-black-50","fw-normal","px-3"],[1,"m-0",3,"innerHTML"],[1,"btns","justify-content-between","align-items-end","d-flex","gap-1","py-2"],[1,"btns","d-flex","gap-2"],[1,"call-now",3,"click"],[1,"Directions",3,"click"]],template:function(s,r){s&1&&(a(0,"div",0)(1,"div",1),p(2,ft,17,13,"div",2),l()()),s&2&&(o(2),d("ngForOf",r.data))},dependencies:[D,B,Ce,Le,Te],styles:[`.similars .row .card img{width:23%;height:250px}@media only screen and (max-width: 768px){.similars .row .card img{width:40%}.call-now{background-color:#0f3d3e;border:none;outline:none;width:71px!important;height:25px!important;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;font-size:10px;color:#000!important}.Directions{background-color:#ffbf9d;border:none;outline:none;width:71px!important;height:25px!important;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;color:#000!important;font-size:10px}}@media only screen and (max-width: 480px){.similars .row{padding:10px}.similars .row .card img{width:50%;height:160px}.similars .row .card .content h3,.similars .row .card .content p{font-size:15px!important}.similars .row .card .content .text{width:150px;padding:15px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin:0!important;padding:0 5px!important}}
`],encapsulation:2});let e=n;return e})();var vt=(e,n)=>n.datainfo;function _t(e,n){if(e&1&&(a(0,"div",37)(1,"button",38)(2,"a",39),u(3,"Book Now"),l()()()),e&2){let t=c(2);o(2),Y("href",t.datainfo.booking_url,S)}}function St(e,n){if(e&1&&m(0,"img",40),e&2){let t=n.$implicit;d("src",t,S)}}function yt(e,n){if(e&1&&(a(0,"div",41),m(1,"img",42),l()),e&2){let t=n.$implicit;o(1),d("src",t,S)}}function bt(e,n){if(e&1&&(a(0,"div",43)(1,"div")(2,"p",44),u(3),l()(),a(4,"div",45)(5,"p",46),u(6),l()()()),e&2){let t=n.$implicit,i=c(2);o(3),C(" ",t.day," "),o(3),C(" ",t.open_24h?"Open All Day":i.formatTime((t==null?null:t.start_time)||"0")+" - "+i.formatTime((t==null?null:t.end_time)||"0")," ")}}function wt(e,n){if(e&1&&m(0,"p-chip",47),e&2){let t=n.$implicit;Y("label",t)}}function Dt(e,n){e&1&&(a(0,"p",48),u(1,"There is no Keywords for this bussiness"),l())}function xt(e,n){if(e&1){let t=y();a(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5)(4,"div",6)(5,"div",7)(6,"h3",8),u(7),l()(),a(8,"div",9),v("click",function(){h(t);let s=c();return g(s.likeBusiness(s.datainfo.id))}),m(9,"i",10),a(10,"p",11),u(11),l()()()()(),a(12,"div",12)(13,"div",13)(14,"ul")(15,"li")(16,"div",14),m(17,"img",15),a(18,"p",16),v("click",function(){h(t);let s=c();return g(s.handleMapClick(s.datainfo.geo_direction))}),u(19," 1036 Cambell St, Rapid City, South Dakota,57701 "),l()()(),a(20,"li")(21,"div",14),m(22,"img",17),a(23,"p",18)(24,"a",19),u(25),l()()()(),a(26,"li")(27,"div",14),m(28,"img",20),a(29,"p",16),v("click",function(s){h(t);let r=c();return r.makePhoneCall(r.datainfo.phone_number),g(s.stopPropagation())}),u(30),l()()()()(),a(31,"div",21)(32,"div",22),p(33,_t,4,1,"div",23),l()()()(),a(34,"div",24)(35,"p-galleria",25),p(36,St,1,1,"ng-template",26)(37,yt,2,1,"ng-template",27),l()(),a(38,"div",28)(39,"h3",29),u(40,"Description"),l(),a(41,"p"),u(42),l()(),a(43,"section",30)(44,"div",2)(45,"div",31)(46,"div",21)(47,"h3",32),u(48,"Working Hours:"),l(),p(49,bt,7,2,"div",33),a(50,"h3",34),u(51,"Keywords"),l(),a(52,"div",35),ue(53,wt,1,1,"p-chip",49,vt,!1,Dt,2,0),l()()()()(),a(56,"section")(57,"h3",36),u(58,"Posting"),l()(),m(59,"app-similar-work"),l()}if(e&2){let t=c();o(7),w(t.datainfo.name),o(1),de("liked",t.datainfo.liked),o(1),ce("color",t.datainfo.liked?"black":"#0069D9"),o(2),C(" ",t.datainfo.likes," "),o(13),j("href","mailto:",t.datainfo.email,"",S),o(1),w(t.datainfo.email),o(5),C(" ",t.datainfo.phone_number," "),o(3),d("ngIf",t.datainfo.booking_url!==null&&t.datainfo.booking_url.trim()!==""),o(2),d("value",t.galleryphotos)("showItemNavigators",!0)("responsiveOptions",t.responsiveOptions)("circular",!0)("numVisible",5)("autoPlay",!0),o(7),w(t.datainfo.description),o(7),d("ngForOf",t.datainfo.working_hours),o(4),he(t.datainfo.tags)}}var Hi=(()=>{let n=class n{constructor(i,s,r,f,k,je){this.listingservice=i,this.route=s,this._httpClient=r,this._cookieService=f,this.filterService=k,this.router=je,this.imgs=[],this.photo=[],this.twoImgs=!1,this.displayCount=4,this.img=[],this.displayBasic=!1,this.galleryphotos=[],this.galleryphotosmobile=[],this.data=[],this.posts=[],this.options={mapTypeControl:!1,streetViewControl:!1,fullscreenControl:!1},this.customOptions={loop:!0,autoplay:!1,mouseDrag:!0,touchDrag:!1,pullDrag:!1,dots:!1,navSpeed:1e3,navText:["",""],responsive:{0:{items:1},400:{items:1},740:{items:1},940:{items:1},1200:{items:1}},nav:!1},this.responsiveOptions=[{breakpoint:"1500px",numVisible:5},{breakpoint:"1024px",numVisible:3},{breakpoint:"768px",numVisible:2},{breakpoint:"560px",numVisible:1}],this.id=s.snapshot.paramMap.get("id"),this.apiLoaded=r.jsonp("https://maps.googleapis.com/maps/api/js?key=AIzaSyAAb4SFQe0Kigpu3EiKhR93nC-OUitTKwM","callback").pipe(re(()=>!0),oe(()=>G(!1)))}getdetalisId(i){this.listingservice.GetListingByID(i).subscribe(s=>{this.datainfo=s.data,this.galleryphotos=s.data.images,this.imgs=s.data.images,this.imgs.length==2&&(this.twoImgs=!0)})}getimges(){this.listingservice.GetListingByID(this.id).subscribe(i=>{this.datainfo=i.data,this.galleryphotos=i.data.images})}getPosts(i){this.listingservice.GetListingByID(i).subscribe(s=>{this.posts=s.data})}ngOnInit(){this.galleryphotos=this.img,this.route.params.subscribe(i=>{console.log(i),this.getdetalisId(i.id),this.getPosts(this.id)})}makePhoneCall(i){window.location.href="tel:"+i}formatTime(i){if(console.log({time:i}),i){let s=i.split(":"),r=parseInt(s[0],10),f=s[1],k="AM";return r>=12&&(r>12&&(r-=12),k="PM"),`${r}:${f||"00"} ${k}`}else return"00"}handleMapClick(i){if(i&&i.lat!==void 0&&i.lng!==void 0){let s=`https://www.google.com/maps/search/?api=1&query=${i.lat},${i.lng}`;window.open(s,"_blank")}}likeBusiness(i){this._cookieService.get("token")?this.datainfo.liked?this.filterService.addDislikes(i).subscribe({next:r=>{console.log(r,"dislike"),this.datainfo.liked=!1,this.datainfo.likes-=1}}):this.filterService.addLike(i).subscribe({next:r=>{console.log(r,"like"),this.datainfo.liked=!0,this.datainfo.likes+=1}}):this.router.navigate(["/login"])}};n.\u0275fac=function(s){return new(s||n)(_(K),_(q),_(De),_(Me),_(ke),_(xe))},n.\u0275cmp=x({type:n,selectors:[["app-details-listing"]],viewQuery:function(s,r){if(s&1&&ve(Ie,5),s&2){let f;I(f=O())&&(r.map=f.first)}},hostAttrs:["ngSkipHydration","true"],standalone:!0,features:[V],decls:2,vars:1,consts:[["ngSkipHydration","",1,"details","py-5","mt-5"],["class","container",4,"ngIf"],[1,"container"],[1,"card-info","py-4"],[1,"row","justify-content-between"],[1,"col-8","rate-container"],[1,"justify-content-between","align-items-center","d-flex","gap-3"],[1,"title","d-flex","align-items-center","justify-content-start","rate-flex-box"],[1,"d-inline","mt-5"],[1,"div-like","d-flex","gap-1","mt-5",3,"click"],["id","likeIcon",1,"bx","bxs-like","fs-4"],["id","likeCount",1,"m-0","likes"],[1,"row","card-info-2","justify-content-between","align-items-center","gap-5"],[1,"col-md-4"],[1,"d-flex","gap-1","py-1"],["src","../../../assets/img/detalis-info/location.png","width","30","height","30"],[1,"p-0","m-0",2,"cursor","pointer","color","blue",3,"click"],["src","../../../assets/img/detalis-info/earth.png","alt","","width","30","height","30"],[1,"p-0","m-0",2,"color","blue"],[2,"color","inherit","text-decoration","none",3,"href"],["src","../../../assets/img/detalis-info/telephone.png","alt","","width","30","height","30"],[1,"col-md-5"],[1,"d-flex","gap-3","align-items-center","justify-content-center"],["class","d-flex gap-4",4,"ngIf"],[1,"row","justify-content-center","align-items-center","d-flex"],[3,"value","showItemNavigators","responsiveOptions","circular","numVisible","autoPlay"],["pTemplate","item"],["pTemplate","thumbnail"],[1,"Description"],[1,"py-4"],[1,"workHour","py-3"],[1,"row","justify-content-between","align-items-between","d-flex","flex-lg-row","flex-column"],[1,"py-2"],["class","d-flex gap-3",4,"ngFor","ngForOf"],[1,""],[1,"flex-wrap","d-flex","gap-2"],[2,"margin-left","17px"],[1,"d-flex","gap-4"],[1,"book-btn"],["target","_blank",3,"href"],[1,"img-fluid",2,"max-height","800px","max-width","100%",3,"src"],[1,"grid","grid-nogutter","justify-content-center","gap-2"],[1,"img-thumbnail",2,"max-height","160px","max-width","100%",3,"src"],[1,"d-flex","gap-3"],[1,"div-days","justify-content-center","align-items-center","d-flex"],[1,"justify-content-center","align-items-center","d-flex"],[1,"div-time","justify-content-center","align-items-center","d-flex"],[1,"",3,"label"],[1,"m-0","p-0"],["class","",3,"label"]],template:function(s,r){s&1&&(a(0,"section",0),p(1,xt,60,19,"div",1),l()),s&2&&(o(1),d("ngIf",r.datainfo))},dependencies:[D,B,W,ze,Ee,Q,Pe,Oe,Fe,Ae,He],styles:[`.details .card-info-2 .col-md-4 ul{padding:0!important}.details .card-info-2 .col-md-4 ul li{list-style:none;font-family:Lato,sans-serif}.details .card-info-2 .col-md-5 .d-flex i{border:1px #258a8b solid!important;height:48px;width:48px;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;justify-content:center;align-items:center;display:flex;color:#121;font-weight:600}.details .card-info-2 .col-md-5 .d-flex .call-btn{border:1px #258a8b solid!important;height:48px;width:150px;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;justify-content:center;align-items:center;display:flex;background-color:transparent;color:#121;font-weight:600}.details .card-info-2 .col-md-5 .d-flex .book-btn{border:none;height:48px;width:150px;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;justify-content:center;align-items:center;display:flex;background-color:#8dd3bb;color:#121;font-weight:600}a{text-decoration:none;color:#000}.p-galleria-item-prev-icon,.p-galleria-item-next-icon{color:#000!important}.view-button{background-color:#8dd3bb;border:none;color:#121;font-weight:600;padding:10px 20px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:4px 2px;transition-duration:.4s;border-radius:4px;position:absolute;top:20px;right:66px!important;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px}.div-time{background-color:#e5e7eb;width:180px;height:52px;border-radius:5px}.div-days{height:52px;border-radius:5px;width:123px;background-color:#ffbf9d}
`],encapsulation:2});let e=n;return e})();export{Hi as DetailsListingComponent};
