import{a as Te}from"./chunk-SBBJ3JZR.js";import{a as be,b as Ce}from"./chunk-3MVB2CZL.js";import{a as Se,b as ke}from"./chunk-G6L4YRPD.js";import"./chunk-HQ2OBL6G.js";import{b as Pe,c as Ie}from"./chunk-NXYUWRNG.js";import{b as xe,c as ye,d as Me}from"./chunk-UWISXORW.js";import{j as ve,l as Be}from"./chunk-4IFH6M4A.js";import{a as T}from"./chunk-Z5VBVE4D.js";import{a as J,b as he,c as we}from"./chunk-YT6L4OTO.js";import"./chunk-R6ILXGZQ.js";import"./chunk-JCXYB5EJ.js";import"./chunk-EC63AKSL.js";import"./chunk-JR3KP5SO.js";import{a as K}from"./chunk-RCRIBXQ6.js";import{m as ge,n as fe}from"./chunk-NW72TZDH.js";import{e as H,i as Q,n as _e}from"./chunk-52DG2NUO.js";import"./chunk-KMXITLPI.js";import{b as me,j as ue,l as N,m as q,o as I}from"./chunk-4KABLKUB.js";import{A as te,Ab as P,Ga as r,Ha as g,Hb as b,Ib as le,Jb as F,Kb as D,Mb as re,Nb as se,Pb as ae,Sa as m,Ta as O,Ua as A,Y as C,Ya as _,Za as M,ba as v,bb as l,ca as x,cb as a,db as u,hb as S,jb as f,kb as c,lc as ce,mc as G,n as Z,nb as V,nc as R,ob as E,oc as $,qa as ie,qb as d,qc as pe,r as ee,rb as h,rc as z,sb as w,sc as U,tc as B,ub as oe,va as ne,vc as de,wa as L,xb as k}from"./chunk-MGRODROF.js";function Ge(i,s){if(i&1&&(l(0,"div",20)(1,"div",21),u(2,"i",22),l(3,"p",23),d(4),b(5,"number"),l(6,"span"),d(7,"Miles"),a()()()()),i&2){let o=c().index,e=c(2);r(4),w("Distance: ",F(5,1,e.distances[o],"1.0-0")," ")}}function Re(i,s){if(i&1){let o=S();l(0,"span",24),f("click",function(){v(o);let t=c(3);return x(t.showFullText=!t.showFullText)}),d(1),a()}if(i&2){let o=c(3);r(1),w(" ",o.showFullText?"Less":"..."," ")}}var $e=(i,s)=>({"font-weight":i,"font-style":s});function ze(i,s){if(i&1){let o=S();l(0,"div",5)(1,"div",6)(2,"div",7),f("click",function(t){let n=v(o),p=n.$implicit,y=n.index;return c(2).likeBusiness(p.business_id,y),x(t.stopPropagation())}),u(3,"i",8),a(),l(4,"p",9),d(5),a(),u(6,"img",10),l(7,"div",11)(8,"h5"),d(9),a()(),l(10,"div",12),u(11,"i",13),l(12,"small"),d(13),a()(),_(14,Ge,8,4,"div",14),l(15,"p",15),d(16),b(17,"slice"),_(18,Re,2,1,"span",16),a(),l(19,"div",17)(20,"button",18),f("click",function(){let n=v(o).$implicit,p=c(2);return x(p.makePhoneCall(n.phone_number))}),d(21,"Call Now"),a(),l(22,"button",19),f("click",function(){let n=v(o).$implicit,p=c(2);return x(p.handleMapClick(n.business.geo_direction))}),d(23,"Directions"),a()()()()}if(i&2){let o=s.$implicit,e=s.index,t=c(2);r(1),E("routerLink","/BuySelldetails/",o.id,""),r(1),A("liked",t.BuySellArray[e].liked),r(1),O("color",t.BuySellArray[e].liked?"black":"#0069D9"),r(2),h(t.BuySellArray[e].business.likes),r(1),V("src",o.business.logo,L),r(3),h(o.business.name),r(4),h(o.business.state+","+o.business.st),r(1),m("ngIf",t.distances&&t.distances.length>0),r(1),m("ngStyle",P(17,$e,o!=null&&o.bold?"bold":"normal",o!=null&&o.italic?"italic":"normal")),r(1),w(" ",t.showFullText?o==null?null:o.content:D(17,13,o==null?null:o.content,0,t.maxDescriptionLength)," "),r(2),m("ngIf",(o==null?null:o.content.length)>t.maxDescriptionLength)}}function Ue(i,s){if(i&1&&(l(0,"section",1)(1,"div",2)(2,"div",3),_(3,ze,24,20,"div",4),a()()()),i&2){let o=c();r(3),m("ngForOf",o.BuySellArray)}}var Ae=(()=>{let s=class s{constructor(e,t,n){this._filterservie=e,this._cookieService=t,this.router=n,this.BuySellArray=[],this.maxDescriptionLength=40,this.showFullText=!1,this.isLiked=[],this.likeCountValue=[]}makePhoneCall(e){console.log("Initiating phone call to:",e),window.location.href="tel:"+e}handleMapClick(e){if(console.log(e),e){let t=`https://www.google.com/maps/search/?api=1&query=${e.lat},${e.lng}`;window.open(t,"_blank")}}truncateText(e,t){return e.length<=t?e:e.substr(0,t)+"... see more"}likeBusiness(e,t){this._cookieService.get("token")?this.BuySellArray[t].liked==!0?(console.log(this.BuySellArray[t].liked),this._filterservie.addLike(e).subscribe({next:p=>{console.log(p,"like"),this.BuySellArray[t].liked=!1,this.BuySellArray[t].business.likes+=1}})):this._filterservie.addDislikes(e).subscribe({next:p=>{console.log(p,"dislike"),this.BuySellArray[t].liked=!0,this.BuySellArray[t].business.likes-=1}}):this.router.navigate(["/login"])}};s.\u0275fac=function(t){return new(t||s)(g(T),g(K),g(N))},s.\u0275cmp=C({type:s,selectors:[["app-bs-gellaryview"]],inputs:{BuySellArray:"BuySellArray",distances:"distances"},standalone:!0,features:[k],decls:1,vars:1,consts:[["class","list-img",4,"ngIf"],[1,"list-img"],[1,"container"],[1,"row","justify-content-start","align-items-center","d-flex","flex-wrap","gap-3","py-3","gap-lg-0"],["class","col-md-3 col-12 mb-3",4,"ngFor","ngForOf"],[1,"col-md-3","col-12","mb-3"],[1,"card","justify-content-between","align-items-center","d-flex",3,"routerLink"],[1,"d-flex","justify-content-center","align-items-center","gap-1","div-like",3,"click"],["id","likeIcon",1,"bx","bxs-like","fs-4"],["id","likeCount",1,"m-0","likes"],["alt","",1,"w-100","img-fluid","object-fit-fill","border","rounded",3,"src"],[1,"title","py-2"],[1,"d-flex","gap-1","py-2"],[1,"pi","pi-map-marker",2,"color","#101010","font-size","1rem"],["class","py-2",4,"ngIf"],[1,"description","mx-3","text-center",3,"ngStyle"],[3,"click",4,"ngIf"],[1,"btns","justify-content-start","align-items-start","d-flex","gap-3","py-3"],[1,"call-now",3,"click"],[1,"Directions",3,"click"],[1,"py-2"],[1,"d-flex","justify-content-center","align-items-center","gap-1"],[1,"pi","pi-directions","fs-4"],[1,"p-0","m-0"],[3,"click"]],template:function(t,n){t&1&&_(0,Ue,4,1,"section",0),t&2&&m("ngIf",n.BuySellArray)},dependencies:[B,G,R,$,U,z,I,q],styles:[".list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{position:relative}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border-radius:10px;-webkit-border-radius:10px;-moz-border-radius:10px;-ms-border-radius:10px;-o-border-radius:10px;box-shadow:0 4px 4px #00000040}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:250px;border-radius:7px!important;-webkit-border-radius:7px!important;-moz-border-radius:7px!important;-ms-border-radius:7px!important;-o-border-radius:7px!important}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 4px 4px #00000040}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-weight:600;font-family:Lato,sans-serif;color:#0f3d3e;font-size:25px}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   .call-now[_ngcontent-%COMP%]{background-color:#aefcc9;width:130px;height:50px;border:none;outline:none;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   .Directions[_ngcontent-%COMP%]{background-color:#ffbf9d;width:130px;height:50px;border:none;outline:none;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .div-like[_ngcontent-%COMP%]{position:absolute;top:203px;right:16px;background-color:#fff;width:50px;height:50px;border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%;justify-content:center;align-items:center;display:flex}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .likes[_ngcontent-%COMP%]{position:absolute;top:260px;right:38px}"]});let i=s;return i})();function qe(i,s){if(i&1&&(l(0,"tr",6)(1,"td",7)(2,"h6",8),d(3),a()()()),i&2){let o=s.$implicit;r(3),h(o.buySellTime)}}function He(i,s){if(i&1){let o=S();l(0,"span",36),f("click",function(){v(o);let t=c(4);return x(t.showFullText=!t.showFullText)}),d(1),a()}if(i&2){let o=c(4);r(1),w(" ",o.showFullText?"Less":"..."," ")}}function Qe(i,s){if(i&1&&(l(0,"div",37)(1,"div",38),u(2,"i",39),l(3,"p",40),d(4),b(5,"number"),l(6,"span",41),d(7,"Miles"),a()()()()),i&2){let o=c(2).rowIndex,e=c(2);r(4),w(" Distance: ",F(5,1,e.distances[o],"1.0-0")," ")}}var Y=(i,s)=>({"font-weight":i,"font-style":s});function Ke(i,s){if(i&1){let o=S();l(0,"div",10)(1,"div",11)(2,"div",12)(3,"div",13),u(4,"img",14),a(),l(5,"div",15)(6,"div",16)(7,"div",17)(8,"div",18)(9,"h5",19),d(10),a()()(),l(11,"div",20),u(12,"i",21),l(13,"p",22),d(14),a()(),l(15,"div",23),u(16,"small",24),a(),l(17,"div",25)(18,"small",26),d(19),b(20,"slice"),_(21,He,2,1,"span",27),a()(),_(22,Qe,8,4,"div",28),l(23,"div",29)(24,"div",30)(25,"button",31),f("click",function(){v(o);let t=c().$implicit,n=c(2);return x(n.makePhoneCall(t.phone_number))}),d(26,"Call"),a(),l(27,"button",32),f("click",function(){v(o);let t=c().$implicit,n=c(2);return x(n.handleMapClick(t.geo_direction))}),d(28,"Directions"),a()(),l(29,"div",33),f("click",function(){v(o);let t=c(),n=t.$implicit,p=t.rowIndex,y=c(2);return x(y.likeBusiness(n.business_id,p))}),u(30,"i",34),l(31,"p",35),d(32),a()()()()()()()()}if(i&2){let o=c(),e=o.$implicit,t=o.rowIndex,n=c(2);r(4),V("src",e.images[0],L),E("routerLink","/BuySelldetails/",e.id,""),r(6),h(e.title),r(4),h(e.buySellTime),r(2),m("ngStyle",P(19,Y,e!=null&&e.bold?"bold":"normal",e!=null&&e.italic?"italic":"normal"))("innerHTML",e==null?null:e.content,ne),r(2),m("ngStyle",P(22,Y,e!=null&&e.bold?"bold":"normal",e!=null&&e.italic?"italic":"normal")),r(1),w(" ",n.showFullText?e==null?null:e.content:D(20,15,e==null?null:e.content,0,n.maxDescriptionLength)," "),r(2),m("ngIf",(e==null?null:e.content.length)>n.maxDescriptionLength),r(1),m("ngIf",n.distances&&n.distances.length>0),r(7),A("liked",n.BuySellArray[t].liked),r(1),O("color",n.BuySellArray[t].liked?"black":"#0069D9"),r(2),h(n.BuySellArray[t].business.likes)}}function Je(i,s){if(i&1&&_(0,Ke,33,25,"div",9),i&2){let o=c(2);m("ngIf",o.BuySellArray)}}function We(i,s){if(i&1&&(l(0,"div",2)(1,"p-table",3),_(2,qe,4,1,"ng-template",4)(3,Je,1,1,"ng-template",5),a()()),i&2){let o=c();r(1),m("value",o.BuySellArray)("scrollable",!0)}}function Xe(i,s){if(i&1&&(l(0,"tr",6)(1,"td",44)(2,"h6",45),d(3),a()()()),i&2){let o=s.$implicit;r(3),h(o.buySellTime)}}function Ye(i,s){if(i&1){let o=S();l(0,"span",36),f("click",function(){v(o);let t=c(4);return x(t.showFullText=!t.showFullText)}),d(1),a()}if(i&2){let o=c(4);r(1),w(" ",o.showFullText?"Less":"..."," ")}}function Ze(i,s){if(i&1&&(l(0,"div",37)(1,"div",51),u(2,"i",52),l(3,"p",40),d(4),b(5,"number"),l(6,"span",41),d(7,"Miles"),a()()()()),i&2){let o=c(2).rowIndex,e=c(2);r(4),w(" Distance: ",F(5,1,e.distances[o],"1.0-0")," ")}}function et(i,s){if(i&1){let o=S();l(0,"div",10)(1,"div",11)(2,"div",12)(3,"div",46),u(4,"img",47),a(),l(5,"div",48)(6,"div",16)(7,"div",17)(8,"div",18)(9,"h5",49),d(10),a()()(),l(11,"div",20),u(12,"i",21),l(13,"p",22),d(14),a()(),l(15,"div",18)(16,"small",26),d(17),b(18,"slice"),_(19,Ye,2,1,"span",27),a()(),_(20,Ze,8,4,"div",28),l(21,"div",29)(22,"div",50)(23,"button",31),f("click",function(){v(o);let t=c().$implicit,n=c(2);return x(n.makePhoneCall(t.phone_number))}),d(24,"Call"),a(),l(25,"button",32),f("click",function(){v(o);let t=c().$implicit,n=c(2);return x(n.handleMapClick(t.business.geo_direction))}),d(26,"Directions"),a()(),l(27,"div",33),f("click",function(){v(o);let t=c(),n=t.$implicit,p=t.rowIndex,y=c(2);return x(y.likeBusiness(n.business_id,p))}),u(28,"i",34),l(29,"p",35),d(30),a()()()()()()()()}if(i&2){let o=c(),e=o.$implicit,t=o.rowIndex,n=c(2);r(4),V("src",e.images[0],L),E("routerLink","/BuySelldetails/",e.id,""),r(6),h(e.title),r(4),h(e.buySellTime),r(2),m("ngStyle",P(17,Y,e!=null&&e.bold?"bold":"normal",e!=null&&e.italic?"italic":"normal")),r(1),w(" ",n.showFullText?e==null?null:e.content:D(18,13,e==null?null:e.content,0,n.maxDescriptionLength)," "),r(2),m("ngIf",(e==null?null:e.content.length)>n.maxDescriptionLength),r(1),m("ngIf",n.distances&&n.distances.length>0),r(7),A("liked",n.BuySellArray[t].liked),r(1),O("color",n.BuySellArray[t].liked?"black":"#0069D9"),r(2),h(n.BuySellArray[t].business.likes)}}function tt(i,s){if(i&1&&_(0,et,31,20,"div",9),i&2){let o=c(2);m("ngIf",o.BuySellArray)}}function it(i,s){if(i&1&&(l(0,"div",42)(1,"p-table",3),_(2,Xe,4,1,"ng-template",4)(3,tt,1,1,"ng-template",43),a()()),i&2){let o=c();r(1),m("value",o.BuySellArray)("scrollable",!0)}}var Ve=(()=>{let s=class s{constructor(e,t,n){this._filterservie=e,this._cookieService=t,this.router=n,this.maxDescriptionLength=20,this.showFullText=!1,this.BuySellArray=[],this.isLiked=[],this.likeCountValue=[]}truncateText(e,t){return e.length<=t?e:e.substr(0,t)+"... see more"}makePhoneCall(e){console.log("Initiating phone call to:",e),window.location.href="tel:"+e}handleMapClick(e){if(e&&e.lat!==void 0&&e.lng!==void 0){let t=`https://www.google.com/maps/search/?api=1&query=${e.lat},${e.lng}`;window.open(t,"_blank")}}toggleLike(e){this.isLiked[e]=!this.isLiked[e],this.likeCountValue[e]=this.isLiked[e]?this.likeCountValue[e]+1:this.likeCountValue[e]-1,this.isLiked[e]?this.BuySellArray[e].likes+=1:this.BuySellArray[e].likes-=1}likeBusiness(e,t){this._cookieService.get("token")?this.BuySellArray[t].liked==!0?(console.log(this.BuySellArray[t].liked),this._filterservie.addLike(e).subscribe({next:p=>{console.log(p,"like"),this.BuySellArray[t].liked=!1,this.BuySellArray[t].business.likes+=1}})):this._filterservie.addDislikes(e).subscribe({next:p=>{console.log(p,"dislike"),this.BuySellArray[t].liked=!0,this.BuySellArray[t].business.likes-=1}}):this.router.navigate(["/login"])}};s.\u0275fac=function(t){return new(t||s)(g(T),g(K),g(N))},s.\u0275cmp=C({type:s,selectors:[["app-bs-listview"]],inputs:{BuySellArray:"BuySellArray",distances:"distances"},standalone:!0,features:[k],decls:2,vars:2,consts:[["class","web-view",4,"ngIf"],["class","mobileb-view",4,"ngIf"],[1,"web-view"],["sortField","id","sortMode","single","rowGroupMode","subheader","groupRowsBy","buySellTime",3,"value","scrollable"],["pTemplate","groupheader"],["pTemplate","body"],[1,"p-rowgroup-header"],["colspan","5"],[1,"ms-5","ps-5"],["class"," data d-flex gap-2 justify-content-center align-items-center py-3 row px-4",4,"ngIf"],[1,"data","d-flex","gap-2","justify-content-center","align-items-center","py-3","row","px-4"],[1,"card","my-0","py-0","px-0",2,"max-width","1200px"],[1,"row","g-0"],[1,"col-3",2,"width","27%"],["alt","...","height","100%","width","310",1,"rounded-start",3,"src","routerLink"],[1,"col-9",2,"width","70%"],[1,"card-body","card-body","d-flex","flex-column","align-items-between","justify-content-between","px-2","py-0",2,"height","100%"],[1,"d-flex","gap-1","justify-content-between","align-items-center"],[1,""],[1,"title-name"],[1,"d-flex","gap-1","justify-content-start","align-items-center"],[1,"bx","bx-world","fs-6",2,"color","#6b6666"],[1,"title-time","text-muted","m-0"],[1,"d-none","d-lg-block"],[1,"description",3,"ngStyle","innerHTML"],[1,"d-lg-none","d-block"],[1,"description",3,"ngStyle"],[3,"click",4,"ngIf"],["class","py-1",4,"ngIf"],[1,"btns","justify-content-between","align-items-end","d-flex","gap-1","py-2"],[1,"btns","d-flex","gap-2"],[1,"call-now",3,"click"],[1,"Directions",3,"click"],[1,"d-flex","justify-content-center","align-items-center","gap-1",3,"click"],["id","likeIcon",1,"bx","bxs-like","fs-4"],["id","likeCount",1,"m-0"],[3,"click"],[1,"py-1"],[1,"d-flex","justify-content-start","align-items-start","gap-1"],[1,"pi","pi-directions","fs-4"],[1,"p-0","m-0"],[1,"miles"],[1,"mobileb-view"],["pTemplate","body","class","py-3"],["colspan","5",2,"padding","0px"],[1,"",2,"padding","0px 1rem"],[1,"col-3",2,"width","44%"],["alt","...","height","100%",1,"rounded-start","w-100",3,"src","routerLink"],[1,"col-9",2,"width","56%"],[1,"title-name",2,"font-size","14px"],[1,"btns","d-flex","gap-1"],[1,"d-flex","justify-content-start","align-items-start","gap-1",2,"font-size","13px"],[1,"pi","pi-directions","fs-6"]],template:function(t,n){t&1&&_(0,We,4,2,"div",0)(1,it,4,2,"div",1),t&2&&(m("ngIf",n.BuySellArray),r(1),m("ngIf",n.BuySellArray))},dependencies:[B,R,$,U,z,Ie,Pe,_e,I,q],styles:[".mobileb-view[_ngcontent-%COMP%]{display:none}#likeIcon[_ngcontent-%COMP%], img[_ngcontent-%COMP%]{cursor:pointer}.web-view[_ngcontent-%COMP%]{display:block}.miles[_ngcontent-%COMP%]{color:#258a8b;font-weight:700}.pi-directions[_ngcontent-%COMP%]{color:#258a8b}@media (max-width: 767px){.mobileb-view[_ngcontent-%COMP%]{display:block}.web-view[_ngcontent-%COMP%]{display:none}.call-now[_ngcontent-%COMP%]{width:45px}.Directions[_ngcontent-%COMP%]{width:73px;font-size:10px}}"]});let i=s;return i})();function nt(i,s){if(i&1&&(l(0,"div"),u(1,"map-marker",4),a()),i&2){let o=s.$implicit,e=c(2);r(1),m("position",o.business.geo_direction)("options",e.options)}}function ot(i,s){if(i&1&&(l(0,"google-map",null,2),_(2,nt,2,2,"div",3),a()),i&2){let o=c();r(2),m("ngForOf",o.BuySellArray)}}var Ee=(()=>{let s=class s{constructor(e){this._httpClient=e,this.options={mapTypeControl:!1,streetViewControl:!1,fullscreenControl:!1},this.markerOptions={draggable:!1},this.apiLoaded=e.jsonp("https://maps.googleapis.com/maps/api/js?key=AIzaSyAAb4SFQe0Kigpu3EiKhR93nC-OUitTKwM","callback").pipe(ee(()=>!0),te(()=>Z(!1)))}ngAfterViewInit(){this.apiLoaded&&setTimeout(()=>{this.fitBounds()},1e3)}fitBounds(){let e=new google.maps.LatLngBounds;for(let t of this.BuySellArray)console.log(t.business.geo_direction.lat),e.extend(new google.maps.LatLng(t.business.geo_direction.lat,t.business.geo_direction.lng));this.map.fitBounds(e)}};s.\u0275fac=function(t){return new(t||s)(g(me))},s.\u0275cmp=C({type:s,selectors:[["app-bs-mapview"]],viewQuery:function(t,n){if(t&1&&se(J,5),t&2){let p;re(p=ae())&&(n.map=p.first)}},inputs:{distances:"distances",BuySellArray:"BuySellArray"},standalone:!0,features:[k],decls:4,vars:3,consts:[[1,"container"],[1,"map"],["map",""],[4,"ngFor","ngForOf"],[3,"position","options"]],template:function(t,n){t&1&&(l(0,"div",0)(1,"div",1),_(2,ot,3,1,"google-map"),b(3,"async"),a()()),t&2&&(r(2),M(2,le(3,1,n.apiLoaded)?2:-1))},dependencies:[B,G,pe,we,J,he],styles:[`.map-container{width:85vw!important}
`],encapsulation:2});let i=s;return i})();function lt(i,s){if(i&1&&(l(0,"div",19),u(1,"app-bs-listview",20),a()),i&2){let o=c();r(1),m("BuySellArray",o.buySellArray)("distances",o.distances)}}function rt(i,s){if(i&1&&(l(0,"div",19),u(1,"app-bs-gellaryview",20),a()),i&2){let o=c();r(1),m("BuySellArray",o.buySellArray)("distances",o.distances)}}function st(i,s){if(i&1&&(l(0,"div",19),u(1,"app-bs-mapview",21),a()),i&2){let o=c();r(1),m("BuySellArray",o.buySellArray)}}var qt=(()=>{let s=class s{constructor(e,t,n,p,y,j,Fe,De){this._filterservice=e,this._router=t,this._BuySellService=n,this._messageService=p,this.distanceService=y,this.platformId=j,this.confirmationService=Fe,this.previousRouteService=De,this.first=20,this.rows=20,this.distances=[],this.galleyView=!1,this.listView=!0,this.mapView=!1,this.buySellArray=[]}ngOnInit(){if(this.previousRouteService.getPreviousUrl()=="/listing"||this.previousRouteService.getPreviousUrl()=="/posting"||this.previousRouteService.getPreviousUrl()=="/buysell")if(de(this.platformId)){let t=localStorage.getItem("filter"),n=[];t?(n=JSON.parse(t),console.log(n),this.getFilteredBuySell(n[0].category,n[0].state,n[0].city),this.filteredBuySell(),this.clearBuysell()):(this.getBuySell(),this.clearBuysell(),this.filteredBuySell())}else this.getBuySell();else this.getBuySell(),this.clearBuysell(),this.filteredBuySell();navigator.geolocation&&navigator.geolocation.getCurrentPosition(t=>{this.currentLocation={latitude:t.coords.latitude,longitude:t.coords.longitude};for(let n of this.buySellArray){let p={latitude:n.geo_direction.lat,longitude:n.geo_direction.lng},y=this.distanceService.calculateDistance(this.currentLocation,p);this.distances.push(y)}this.distanceService.setCurrentLocation(this.currentLocation),this.distanceService.setDistances(this.distances).then(()=>{}).catch(n=>{console.error("Error setting distances:",n)})},t=>{console.error("Error getting user location:",t)});let e=this.distanceService.getDistances();e.length>0&&(this.distances=e)}getBuySell(){this.buySellSubscription=this._BuySellService.getBuySell().subscribe({next:e=>{console.log(e),this.buySellArray=e.data,this.getGeoLocations()}})}getFilteredBuySell(e,t,n){this.filteredBuySellSubscription=this._filterservice.getBuySells(e,t,n).subscribe({next:p=>{console.log(p.data.allBuySells),this.buySellArray=p.data.allBuySells,this.getGeoLocations()},error:p=>{console.log(p)}})}filteredBuySell(){this.FilteredSubscribtion=this._filterservice.filteredBuySell.subscribe({next:e=>{console.log("next has come",e),this.buySellArray=e.data.allBuySells,this.getGeoLocations()}})}getGeoLocations(){let e=this.buySellArray.map(p=>p.business.geo_direction),t=new Set(e.map(p=>`${p.lat}_${p.lng}`)),n=Array.from(t).map(p=>{let[y,j]=p.split("_");return{lat:parseFloat(y),lng:parseFloat(j)}});this.UniqueGeoLocations=n,console.log(this.UniqueGeoLocations)}clearBuysell(){this.clearSubscribtion=this._filterservice.clearBuysell.subscribe({next:e=>{this.buySellArray=e,console.log(e),this.getGeoLocations()}})}showGallery(){this.galleyView=!0,this.listView=!1,this.mapView=!1}showList(){this.listView=!0,this.galleyView=!1,this.mapView=!1}showMap(){this.mapView=!0,this.galleyView=!1,this.listView=!1}onPageChange(e){this.first=e.first}};s.\u0275fac=function(t){return new(t||s)(g(T),g(ue),g(Te),g(Q),g(ve),g(ie),g(H),g(Me))},s.\u0275cmp=C({type:s,selectors:[["app-buy-sell"]],hostAttrs:["ngSkipHydration","true"],standalone:!0,features:[oe([H,Q]),k],decls:35,vars:9,consts:[[1,"posting","mt-5","py-5"],[1,"box","mb-4","mt-lg-0","mt-5"],[1,"container"],[1,"title","mb-5","justify-content-between","align-items-center","d-flex"],[1,""],[1,"form-group","d-none","d-lg-block"],[1,"div-searchBar","justify-content-center","align-items-center","d-flex"],[1,"view","d-flex","justify-content-between"],[1,"suggest"],[1,"m-0"],[1,"views","d-flex","gap-3"],[1,"box","d-flex","gap-2",3,"ngClass","click"],[1,"pi","pi-list","fs-4",2,"color","black"],[1,"m-0","d-none","d-lg-block"],[1,"pi-th-large","pi","fs-4",2,"color","black"],[1,"pi","pi-map","fs-4",2,"color","black"],["class","view-data"],["class","view-data "],[3,"first","rows","totalRecords","onPageChange"],[1,"view-data"],[3,"BuySellArray","distances"],[3,"BuySellArray"]],template:function(t,n){t&1&&(l(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h3"),d(6,"Top businesses in your Area"),a()(),l(7,"div",5)(8,"div",6),u(9,"app-filter"),a(),u(10,"p-toast")(11,"p-confirmDialog"),a()(),l(12,"div",7)(13,"div",8)(14,"h6",9),d(15,"Suggested Results:"),a()(),l(16,"div",10)(17,"div",11),f("click",function(){return n.showList()}),u(18,"i",12),l(19,"p",13),d(20,"List View"),a()(),l(21,"div",11),f("click",function(){return n.showGallery()}),u(22,"i",14),l(23,"p",13),d(24,"Gallery View"),a()(),l(25,"div",11),f("click",function(){return n.showMap()}),u(26,"i",15),l(27,"p",13),d(28,"Map View"),a()()()()()(),l(29,"div",2),_(30,lt,2,2,"div",16)(31,rt,2,2,"div",16)(32,st,2,1,"div",17),l(33,"div")(34,"p-paginator",18),f("onPageChange",function(y){return n.onPageChange(y)}),a()()()()),t&2&&(r(17),m("ngClass",n.listView?"active":null),r(4),m("ngClass",n.galleyView?"active":null),r(4),m("ngClass",n.mapView?"active":null),r(5),M(30,n.listView?30:-1),r(1),M(31,n.galleyView?31:-1),r(1),M(32,n.mapView?32:-1),r(2),m("first",n.first)("rows",n.rows)("totalRecords",n.buySellArray.length))},dependencies:[ye,xe,ke,Se,Be,Ce,be,B,ce,Ae,Ve,Ee,I,ge,fe],styles:[`.buy-sell .container .text{font-family:Lato,sans-serif;font-weight:600}.div-searchBar form{border-radius:12px;display:flex!important;justify-content:center!important;align-items:center!important;background-color:#f9f7f7;padding:11px}.div-searchBar form .p-dropdown{border:none;width:100%;background-color:transparent;margin:0 10px}.div-searchBar form input,.div-searchBar form input:focus,.div-searchBar form input:active{border:none;outline:none}.div-searchBar form small{white-space:nowrap;font-family:Lato,sans-serif;font-size:14px!important}.div-searchBar form .Search-btn{background-color:#000;color:#fff;border-radius:12px;-webkit-border-radius:12px;-moz-border-radius:12px;-ms-border-radius:12px;-o-border-radius:12px;width:90px;height:38px}.div-searchBar form .clear-btn{background-color:#ffbf9d;color:#fff;border-radius:12px;-webkit-border-radius:12px;-moz-border-radius:12px;-ms-border-radius:12px;-o-border-radius:12px;width:90px;height:38px;outline:none;border:none}.div-searchBar form small{font-size:12px}.div-searchBar form ul{padding-left:0rem!important;margin:0!important}.div-searchBar form .p-dropdown-panel .p-dropdown-items{padding:0}.p-datatable>.p-datatable-wrapper{overflow:hidden!important}i{cursor:pointer}
`],encapsulation:2});let i=s;return i})();export{qt as BuySellComponent};
