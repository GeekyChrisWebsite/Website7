import{a as Q}from"./chunk-C4GXKO76.js";import{a as te}from"./chunk-7MHNBSLW.js";import{a as ke}from"./chunk-DBLGXQ5P.js";import{a as De,b as xe,d as Ce}from"./chunk-H7FBMMPD.js";import{a as Me,b as Te}from"./chunk-VF6NAT27.js";import"./chunk-77ZL3MI5.js";import"./chunk-OIYTWRTJ.js";import{n as q,o as ee}from"./chunk-CIY2GROO.js";import"./chunk-KMXITLPI.js";import{c as be,m as U,p as we}from"./chunk-EOFWODBS.js";import{$a as b,A as ae,Ab as u,Bb as w,Bc as D,Cb as C,Dc as W,Fa as Z,Ga as S,Hb as j,Pa as oe,Q as M,Qa as l,R as L,Ra as y,Rb as V,Sb as pe,Tb as Y,U as G,V as $,Vb as k,Wa as R,Wb as me,Xb as J,Y as x,Yb as I,Z as P,Zb as fe,ab as c,ba as g,ca as p,eb as T,gb as h,gc as ve,j as se,jb as le,kb as ce,lb as a,mb as o,n as K,nb as m,ob as H,pb as F,qa as A,r as ne,rb as _,tb as f,ub as d,uc as _e,vb as de,vc as N,wb as ue,wc as B,xb as X,xc as Se,y as re,yb as he,yc as ye,zb as ge}from"./chunk-ZFJE44N6.js";var Pe=(()=>{class e{errorHandler;constructor(t){this.errorHandler=t}log(t,...i){ve()&&console.log(t,...i)}error(t){this.errorHandler.handleError(t)}warn(t,...i){console.warn(t,...i)}static \u0275fac=function(i){return new(i||e)($(oe))};static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var Ie=new G("WindowToken"),O=class{get nativeWindow(){throw new Error("Not implemented.")}},Ae=(()=>{class e extends O{constructor(){super()}get nativeWindow(){return window}static \u0275fac=function(i){return new(i||e)};static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();function Re(e,n){return W(n)?e.nativeWindow:{setTimeout:(i,s)=>{},clearTimeout:i=>{}}}var He={provide:O,useClass:Ae},Fe={provide:Ie,useFactory:Re,deps:[O,A]},je=[He,Fe],Ve=new G("DocumentToken"),E=class{get nativeDocument(){throw new Error("Not implemented.")}},Ne=(()=>{class e extends E{constructor(){super()}get nativeDocument(){return document}static \u0275fac=function(i){return new(i||e)};static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();function Be(e,n){return W(n)?e.nativeDocument:{hidden:!1,visibilityState:"visible"}}var We={provide:E,useClass:Ne},Ue={provide:Ve,useFactory:Be,deps:[E,A]},qe=[We,Ue];var Qe=(()=>{class e{resizeObservable$;get onResize$(){return this.resizeObservable$}constructor(t,i){this.resizeObservable$=W(i)?re(t,"resize"):new se().asObservable()}static \u0275fac=function(i){return new(i||e)($(Ie),$(A))};static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var Oe=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=P({type:e});static \u0275inj=L({providers:[je,Qe,qe,Pe],imports:[D]})}return e})();function Ke(e,n){if(e&1){let t=_();a(0,"img",6),f("error",function(s){g(t);let r=d(2);return p(r.imageError(s))}),o()}if(e&2){let t=d(2);c("src",t.image,S)}}function Ge(e,n){if(e&1&&m(0,"span",8),e&2){let t=d(3);T(t.icon),c("ngClass","p-chip-icon"),b("data-pc-section","icon")}}function Ze(e,n){if(e&1&&h(0,Ge,1,4,"span",7),e&2){let t=d(2);c("ngIf",t.icon)}}function Xe(e,n){if(e&1&&(a(0,"div",9),u(1),o()),e&2){let t=d(2);b("data-pc-section","label"),l(1),w(t.label)}}function Ye(e,n){if(e&1){let t=_();a(0,"span",13),f("click",function(s){g(t);let r=d(4);return p(r.close(s))})("keydown",function(s){g(t);let r=d(4);return p(r.onKeydown(s))}),o()}if(e&2){let t=d(4);T(t.removeIcon),c("ngClass","pi-chip-remove-icon"),b("data-pc-section","removeicon")}}function Je(e,n){if(e&1){let t=_();a(0,"TimesCircleIcon",14),f("click",function(s){g(t);let r=d(4);return p(r.close(s))})("keydown",function(s){g(t);let r=d(4);return p(r.onKeydown(s))}),o()}e&2&&(T("pi-chip-remove-icon"),b("data-pc-section","removeicon"))}function et(e,n){if(e&1&&(H(0),h(1,Ye,1,4,"span",11)(2,Je,1,3,"TimesCircleIcon",12),F()),e&2){let t=d(3);l(1),c("ngIf",t.removeIcon),l(1),c("ngIf",!t.removeIcon)}}function tt(e,n){}function it(e,n){e&1&&h(0,tt,0,0,"ng-template")}function st(e,n){if(e&1){let t=_();a(0,"span",15),f("click",function(s){g(t);let r=d(3);return p(r.close(s))})("keydown",function(s){g(t);let r=d(3);return p(r.onKeydown(s))}),h(1,it,1,0,null,16),o()}if(e&2){let t=d(3);b("data-pc-section","removeicon"),l(1),c("ngTemplateOutlet",t.removeIconTemplate)}}function nt(e,n){if(e&1&&(H(0),h(1,et,3,2,"ng-container",5)(2,st,2,2,"span",10),F()),e&2){let t=d(2);l(1),c("ngIf",!t.removeIconTemplate),l(1),c("ngIf",t.removeIconTemplate)}}function rt(e,n){if(e&1&&(a(0,"div",1),ue(1),h(2,Ke,1,1,"img",2)(3,Ze,1,1,"ng-template",null,3,fe)(5,Xe,2,2,"div",4)(6,nt,3,2,"ng-container",5),o()),e&2){let t=ge(4),i=d();T(i.styleClass),c("ngClass",i.containerClass())("ngStyle",i.style),b("data-pc-name","chip")("aria-label",i.label)("data-pc-section","root"),l(2),c("ngIf",i.image)("ngIfElse",t),l(3),c("ngIf",i.label),l(1),c("ngIf",i.removable)}}var at=["*"],ze=(()=>{class e{label;icon;image;style;styleClass;removable=!1;removeIcon;onRemove=new R;onImageError=new R;visible=!0;removeIconTemplate;templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"removeicon":this.removeIconTemplate=t.template;break;default:this.removeIconTemplate=t.template;break}})}containerClass(){return{"p-chip p-component":!0,"p-chip-image":this.image!=null}}close(t){this.visible=!1,this.onRemove.emit(t)}onKeydown(t){(t.key==="Enter"||t.key==="Backspace")&&this.close(t)}imageError(t){this.onImageError.emit(t)}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=x({type:e,selectors:[["p-chip"]],contentQueries:function(i,s,r){if(i&1&&J(r,q,4),i&2){let v;k(v=I())&&(s.templates=v)}},hostAttrs:[1,"p-element"],inputs:{label:"label",icon:"icon",image:"image",style:"style",styleClass:"styleClass",removable:"removable",removeIcon:"removeIcon"},outputs:{onRemove:"onRemove",onImageError:"onImageError"},ngContentSelectors:at,decls:1,vars:1,consts:[[3,"ngClass","class","ngStyle",4,"ngIf"],[3,"ngClass","ngStyle"],[3,"src","error",4,"ngIf","ngIfElse"],["iconTemplate",""],["class","p-chip-text",4,"ngIf"],[4,"ngIf"],[3,"src","error"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],[1,"p-chip-text"],["tabindex","0","class","pi-chip-remove-icon",3,"click","keydown",4,"ngIf"],["tabindex","0",3,"class","ngClass","click","keydown",4,"ngIf"],["tabindex","0",3,"class","click","keydown",4,"ngIf"],["tabindex","0",3,"ngClass","click","keydown"],["tabindex","0",3,"click","keydown"],["tabindex","0",1,"pi-chip-remove-icon",3,"click","keydown"],[4,"ngTemplateOutlet"]],template:function(i,s){i&1&&(de(),h(0,rt,7,11,"div",0)),i&2&&c("ngIf",s.visible)},dependencies:()=>[_e,B,ye,Se,te],styles:[`@layer primeng{.p-chip{display:inline-flex;align-items:center}.p-chip-text,.p-chip-icon.pi,.pi-chip-remove-icon.pi{line-height:1.5}.pi-chip-remove-icon{cursor:pointer}.p-chip img{border-radius:50%}}
`],encapsulation:2,changeDetection:0})}return e})(),Le=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=P({type:e});static \u0275inj=L({imports:[D,te,ee,ee]})}return e})();function dt(e,n){if(e&1){let t=_();a(0,"div",3),m(1,"img",4),a(2,"div",5)(3,"h4",6),u(4),V(5,"truncateText"),o(),a(6,"h6",7),u(7),o(),m(8,"p",8),V(9,"sanatizer"),V(10,"truncateText"),a(11,"div",9)(12,"div",10)(13,"button",11),f("click",function(s){let v=g(t).$implicit;return d().makePhoneCall(v.business.phone_number),p(s.stopPropagation())}),u(14," Call "),o(),a(15,"button",12),f("click",function(s){let v=g(t).$implicit;return d().handleMapClick(v.business.geo_direction),p(s.stopPropagation())}),u(16," Directions "),o()()()()()}if(e&2){let t=n.$implicit;he("routerLink","/postingdetails/",t.id,""),l(1),c("src",t.business.logo,S),l(3),C(" ",Y(5,5,t.title,15)," "),l(3),w(t.postTime),l(1),c("innerHTML",pe(9,8,Y(10,10,t.content,30)),Z)}}var $e=(()=>{let n=class n{constructor(i,s){this.service=i,this.router=s,this.id=s.snapshot.params.id}ngOnInit(){this.getSimilar(this.id)}getSimilar(i){this.service.getpostsbusinessID(i).subscribe(s=>{this.data=s.data})}truncateText(i,s){return i.length<=s?i:i.substr(0,s)+"..."}makePhoneCall(i){window.location.href="tel:"+i}handleMapClick(i){if(i&&i.lat!==void 0&&i.lng!==void 0){let s=`https://www.google.com/maps/search/?api=1&query=${i.lat},${i.lng}`,r=document.createElement("a");r.href=s,r.target="_blank",r.click()}console.log(i)}};n.\u0275fac=function(s){return new(s||n)(y(Q),y(U))},n.\u0275cmp=x({type:n,selectors:[["app-similar-work"]],standalone:!0,features:[j],decls:3,vars:1,consts:[[1,"similars"],[1,"row"],["class","card d-flex flex-row p-0 my-4",3,"routerLink",4,"ngFor","ngForOf"],[1,"card","d-flex","flex-row","p-0","my-4",3,"routerLink"],["alt","",3,"src"],[1,"content","py-1","ms-3"],[1,"fw-bold","fs-5","px-3","m-0"],[1,"text-black-50","fw-normal","px-3"],[1,"m-0",3,"innerHTML"],[1,"btns","justify-content-between","align-items-end","d-flex","gap-1","py-2"],[1,"btns","d-flex","gap-2"],[1,"call-now",3,"click"],[1,"Directions",3,"click"]],template:function(s,r){s&1&&(a(0,"div",0)(1,"div",1),h(2,dt,17,13,"div",2),o()()),s&2&&(l(2),c("ngForOf",r.data))},dependencies:[D,N,we,ke,De],styles:[`.similars .row .card img{width:23%;height:250px}@media only screen and (max-width: 768px){.similars .row .card img{width:40%}.call-now{background-color:#0f3d3e;border:none;outline:none;width:71px!important;height:25px!important;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;font-size:10px;color:#000!important}.Directions{background-color:#ffbf9d;border:none;outline:none;width:71px!important;height:25px!important;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;color:#000!important;font-size:10px}}@media only screen and (max-width: 480px){.similars .row{padding:10px}.similars .row .card img{width:50%;height:160px}.similars .row .card .content h3,.similars .row .card .content p{font-size:15px!important}.similars .row .card .content .text{width:150px;padding:15px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin:0!important;padding:0 5px!important}}
`],encapsulation:2});let e=n;return e})();var ut=(e,n)=>n.datainfo;function ht(e,n){if(e&1&&(a(0,"div",33)(1,"button",34)(2,"a",35),u(3,"Book Now"),o()()()),e&2){let t=d(2);l(2),X("href",t.datainfo.booking_url,S)}}function gt(e,n){if(e&1&&m(0,"img",36),e&2){let t=n.$implicit;c("src",t,S)}}function pt(e,n){if(e&1&&(a(0,"div",37),m(1,"img",38),o()),e&2){let t=n.$implicit;l(1),c("src",t,S)}}function mt(e,n){if(e&1&&(a(0,"div",39)(1,"div")(2,"p",40),u(3),o()(),a(4,"div",41)(5,"p",42),u(6),o()()()),e&2){let t=n.$implicit,i=d(2);l(3),C(" ",t.day," "),l(3),C(" ",t.open_24h?"Open All Day":i.formatTime(t.start_time)+" - "+i.formatTime(t.end_time)," ")}}function ft(e,n){if(e&1&&m(0,"p-chip",43),e&2){let t=n.$implicit;X("label",t)}}function vt(e,n){e&1&&(a(0,"p",44),u(1,"There is no Keywords for this bussiness"),o())}function _t(e,n){if(e&1){let t=_();a(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5)(4,"div",6)(5,"div",7)(6,"h3",8),u(7),o()()()()(),a(8,"div",9)(9,"div",10)(10,"ul")(11,"li")(12,"div",11),m(13,"img",12),a(14,"p",13),f("click",function(){g(t);let s=d();return p(s.handleMapClick(s.datainfo.geo_direction))}),u(15," 1036 Cambell St, Rapid City, South Dakota,57701 "),o()()(),a(16,"li")(17,"div",11),m(18,"img",14),a(19,"p",15),u(20),o()()(),a(21,"li")(22,"div",11),m(23,"img",16),a(24,"p",13),f("click",function(s){g(t);let r=d();return r.makePhoneCall(r.datainfo.phone_number),p(s.stopPropagation())}),u(25),o()()()()(),a(26,"div",17)(27,"div",18),h(28,ht,4,1,"div",19),o()()()(),a(29,"div",20)(30,"p-galleria",21),h(31,gt,1,1,"ng-template",22)(32,pt,2,1,"ng-template",23),o()(),a(33,"div",24)(34,"h3",25),u(35,"Description"),o(),a(36,"p"),u(37),o()(),a(38,"section",26)(39,"div",2)(40,"div",27)(41,"div",17)(42,"h3",28),u(43,"Working Hours:"),o(),h(44,mt,7,2,"div",29),a(45,"h3",30),u(46,"Keywords"),o(),a(47,"div",31),le(48,ft,1,1,"p-chip",45,ut,!1,vt,2,0),o()()()()(),a(51,"section")(52,"h3",32),u(53,"Posting"),o()(),m(54,"app-similar-work"),o()}if(e&2){let t=d();l(7),w(t.datainfo.name),l(13),w(t.datainfo.email),l(5),C(" ",t.datainfo.phone_number," "),l(3),c("ngIf",t.datainfo.booking_url!==null&&t.datainfo.booking_url.trim()!==""),l(2),c("value",t.galleryphotos)("showItemNavigators",!0)("responsiveOptions",t.responsiveOptions)("circular",!0)("numVisible",5)("autoPlay",!0),l(7),w(t.datainfo.description),l(7),c("ngForOf",t.datainfo.working_hours),l(4),ce(t.datainfo.tags)}}var Ei=(()=>{let n=class n{constructor(i,s,r){this.listingservice=i,this.route=s,this._httpClient=r,this.imgs=[],this.photo=[],this.twoImgs=!1,this.displayCount=4,this.img=[],this.displayBasic=!1,this.galleryphotos=[],this.galleryphotosmobile=[],this.data=[],this.posts=[],this.options={mapTypeControl:!1,streetViewControl:!1,fullscreenControl:!1},this.customOptions={loop:!0,autoplay:!1,mouseDrag:!0,touchDrag:!1,pullDrag:!1,dots:!1,navSpeed:1e3,navText:["",""],responsive:{0:{items:1},400:{items:1},740:{items:1},940:{items:1},1200:{items:1}},nav:!1},this.responsiveOptions=[{breakpoint:"1500px",numVisible:5},{breakpoint:"1024px",numVisible:3},{breakpoint:"768px",numVisible:2},{breakpoint:"560px",numVisible:1}],this.id=s.snapshot.paramMap.get("id"),this.apiLoaded=r.jsonp("https://maps.googleapis.com/maps/api/js?key=AIzaSyAAb4SFQe0Kigpu3EiKhR93nC-OUitTKwM","callback").pipe(ne(()=>!0),ae(()=>K(!1)))}getdetalisId(i){this.listingservice.GetListingByID(i).subscribe(s=>{this.datainfo=s.data,this.galleryphotos=s.data.images,this.imgs=s.data.images,this.imgs.length==2&&(this.twoImgs=!0)})}getimges(){this.listingservice.GetListingByID(this.id).subscribe(i=>{this.datainfo=i.data,this.galleryphotos=i.data.images})}getPosts(i){this.listingservice.GetListingByID(i).subscribe(s=>{this.posts=s.data})}ngOnInit(){this.galleryphotos=this.img,this.route.params.subscribe(i=>{console.log(i),this.getdetalisId(i.id),this.getPosts(this.id)})}makePhoneCall(i){window.location.href="tel:"+i}formatTime(i){let s=i.split(":"),r=parseInt(s[0],10),v=s[1],z="AM";return r>=12&&(r>12&&(r-=12),z="PM"),`${r}:${v} ${z}`}handleMapClick(i){if(i&&i.lat!==void 0&&i.lng!==void 0){let s=`https://www.google.com/maps/search/?api=1&query=${i.lat},${i.lng}`;window.open(s,"_blank")}}};n.\u0275fac=function(s){return new(s||n)(y(Q),y(U),y(be))},n.\u0275cmp=x({type:n,selectors:[["app-details-listing"]],viewQuery:function(s,r){if(s&1&&me(xe,5),s&2){let v;k(v=I())&&(r.map=v.first)}},hostAttrs:["ngSkipHydration","true"],standalone:!0,features:[j],decls:2,vars:1,consts:[["ngSkipHydration","",1,"details","py-5","mt-5"],["class","container",4,"ngIf"],[1,"container"],[1,"card-info","py-4"],[1,"row","justify-content-between"],[1,"col-8","rate-container"],[1,"justify-content-start","align-items-start"],[1,"title","d-flex","align-items-center","justify-content-start","rate-flex-box"],[1,"d-inline","mt-5"],[1,"row","card-info-2","justify-content-between","align-items-center","gap-5"],[1,"col-md-4"],[1,"d-flex","gap-1","py-1"],["src","../../../assets/img/detalis-info/location.png","width","30","height","30"],[1,"p-0","m-0",2,"cursor","pointer","color","blue",3,"click"],["src","../../../assets/img/detalis-info/earth.png","alt","","width","30","height","30"],[1,"p-0","m-0",2,"color","blue"],["src","../../../assets/img/detalis-info/telephone.png","alt","","width","30","height","30"],[1,"col-md-5"],[1,"d-flex","gap-3","align-items-center","justify-content-center"],["class","d-flex gap-4",4,"ngIf"],[1,"row","justify-content-center","align-items-center","d-flex"],[3,"value","showItemNavigators","responsiveOptions","circular","numVisible","autoPlay"],["pTemplate","item"],["pTemplate","thumbnail"],[1,"Description"],[1,"py-4"],[1,"workHour","py-3"],[1,"row","justify-content-between","align-items-between","d-flex","flex-lg-row","flex-column"],[1,"py-2"],["class","d-flex gap-3",4,"ngFor","ngForOf"],[1,""],[1,"flex-wrap","d-flex","gap-2"],[2,"margin-left","17px"],[1,"d-flex","gap-4"],[1,"book-btn"],["target","_blank",3,"href"],[1,"img-fluid",2,"max-height","800px","max-width","100%",3,"src"],[1,"grid","grid-nogutter","justify-content-center","gap-2"],[1,"img-thumbnail",2,"max-height","160px","max-width","100%",3,"src"],[1,"d-flex","gap-3"],[1,"div-days","justify-content-center","align-items-center","d-flex"],[1,"justify-content-center","align-items-center","d-flex"],[1,"div-time","justify-content-center","align-items-center","d-flex"],[1,"",3,"label"],[1,"m-0","p-0"],["class","",3,"label"]],template:function(s,r){s&1&&(a(0,"section",0),h(1,_t,55,13,"div",1),o()),s&2&&(l(1),c("ngIf",r.datainfo))},dependencies:[D,N,B,Te,Me,q,Oe,Ce,Le,ze,$e],styles:[`.details .card-info-2 .col-md-4 ul{padding:0!important}.details .card-info-2 .col-md-4 ul li{list-style:none;font-family:Lato,sans-serif}.details .card-info-2 .col-md-5 .d-flex i{border:1px #258a8b solid!important;height:48px;width:48px;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;justify-content:center;align-items:center;display:flex;color:#121;font-weight:600}.details .card-info-2 .col-md-5 .d-flex .call-btn{border:1px #258a8b solid!important;height:48px;width:150px;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;justify-content:center;align-items:center;display:flex;background-color:transparent;color:#121;font-weight:600}.details .card-info-2 .col-md-5 .d-flex .book-btn{border:none;height:48px;width:150px;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;justify-content:center;align-items:center;display:flex;background-color:#8dd3bb;color:#121;font-weight:600}a{text-decoration:none;color:#000}.p-galleria-item-prev-icon,.p-galleria-item-next-icon{color:#000!important}.view-button{background-color:#8dd3bb;border:none;color:#121;font-weight:600;padding:10px 20px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:4px 2px;transition-duration:.4s;border-radius:4px;position:absolute;top:20px;right:66px!important;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px}.div-time{background-color:#e5e7eb;width:180px;height:52px;border-radius:5px}.div-days{height:52px;border-radius:5px;width:123px;background-color:#ffbf9d}
`],encapsulation:2});let e=n;return e})();export{Ei as DetailsListingComponent};
