import{a as Oe}from"./chunk-A3TQEWKI.js";import{a as be,b as Se}from"./chunk-EVURVPUL.js";import{a as Be,b as ke}from"./chunk-TZ53DYKZ.js";import"./chunk-KLXPR6T4.js";import{b as Le,c as Pe,d as Ie}from"./chunk-ZJIMXWAE.js";import{b as ye,c as he,d as Te}from"./chunk-3KFBWE3J.js";import{j as xe,l as Me}from"./chunk-M3RKTT2S.js";import{a as O}from"./chunk-4O2QTFZ7.js";import{a as q,b as we,c as Ce}from"./chunk-6DAJAWBC.js";import"./chunk-TT6HVVD5.js";import"./chunk-GLGTO7M2.js";import"./chunk-5PA3NH23.js";import"./chunk-K6EK75OT.js";import{a as N}from"./chunk-N3Q5VJD2.js";import{m as fe,n as ve}from"./chunk-S3LGUFV4.js";import{e as U,i as _e,n as ge}from"./chunk-OJXW572A.js";import"./chunk-KMXITLPI.js";import{c as me,m as ue,o as G,p as H,r as I}from"./chunk-DAQJKRHW.js";import{A as te,Ab as m,Ac as ce,Bb as C,Bc as $,Cb as h,Cc as pe,Dc as k,Eb as ne,Fa as T,Fc as de,Ga as A,Hb as B,Kb as P,Qa as s,Ra as g,Rb as v,Sb as b,Tb as F,Ub as oe,Wb as le,Xb as re,Y as S,Zb as se,_b as D,ab as p,ba as x,ca as y,gb as _,hb as L,lb as l,mb as c,n as Z,nb as u,qa as ie,r as ee,rb as w,tb as f,ub as a,vc as ae,wc as j,xb as E,xc as z,yb as V,yc as R,zb as J}from"./chunk-UIKUD3CR.js";function Re(t,o){if(t&1&&(l(0,"div",15)(1,"div",16),u(2,"i",17),l(3,"p",18),m(4),v(5,"number"),l(6,"span"),m(7,"Miles"),c()()()()),t&2){let n=a().index,e=a(2);s(4),h("Distance: ",F(5,1,e.distances[n],"1.0-0")," ")}}function $e(t,o){if(t&1){let n=w();l(0,"span",19),f("click",function(){x(n);let i=a(3);return y(i.showFullText=!i.showFullText)}),m(1),c()}if(t&2){let n=a(3);s(1),h(" ",n.showFullText?"Less":"..."," ")}}var Ge=(t,o)=>({"font-weight":t,"font-style":o});function He(t,o){if(t&1){let n=w();l(0,"div",5)(1,"div",6),u(2,"img",7),l(3,"div",8)(4,"h5"),m(5),c()(),_(6,Re,8,4,"div",9),l(7,"p",10),m(8),v(9,"slice"),_(10,$e,2,1,"span",11),c(),l(11,"div",12)(12,"button",13),f("click",function(){let r=x(n).$implicit,d=a(2);return y(d.makePhoneCall(r.phone_number))}),m(13,"Call Now"),c(),l(14,"button",14),f("click",function(){let r=x(n).$implicit,d=a(2);return y(d.handleMapClick(r.business.geo_direction))}),m(15,"Directions"),c()()()()}if(t&2){let n=o.$implicit,e=a(2);s(1),V("routerLink","/BuySelldetails/",n.id,""),s(1),E("src",n.business.logo,A),s(3),C(n.business.name),s(1),p("ngIf",e.distances&&e.distances.length>0),s(1),p("ngStyle",P(11,Ge,n!=null&&n.bold?"bold":"normal",n!=null&&n.italic?"italic":"normal")),s(1),h(" ",e.showFullText?n==null?null:n.content:oe(9,7,n==null?null:n.content,0,e.maxDescriptionLength)," "),s(2),p("ngIf",(n==null?null:n.content.length)>e.maxDescriptionLength)}}function Ue(t,o){if(t&1&&(l(0,"section",1)(1,"div",2)(2,"div",3),_(3,He,16,14,"div",4),c()()()),t&2){let n=a();s(3),p("ngForOf",n.BuySellArray)}}var Q=(()=>{let o=class o{constructor(e,i,r){this._filterservie=e,this._cookieService=i,this.router=r,this.BuySellArray=[],this.maxDescriptionLength=40,this.showFullText=!1,this.isLiked=[],this.likeCountValue=[]}makePhoneCall(e){console.log("Initiating phone call to:",e),window.location.href="tel:"+e}handleMapClick(e){if(console.log(e),e){let i=`https://www.google.com/maps/search/?api=1&query=${e.lat},${e.lng}`;window.open(i,"_blank")}}truncateText(e,i){return e.length<=i?e:e.substr(0,i)+"... see more"}likeBusiness(e,i){this._cookieService.get("token")?this.BuySellArray[i].liked==!0?(console.log(this.BuySellArray[i].liked),this._filterservie.addLike(e).subscribe({next:d=>{console.log(d,"like"),this.BuySellArray[i].liked=!1,this.BuySellArray[i].business.likes+=1}})):this._filterservie.addDislikes(e).subscribe({next:d=>{console.log(d,"dislike"),this.BuySellArray[i].liked=!0,this.BuySellArray[i].business.likes-=1}}):this.router.navigate(["/login"])}};o.\u0275fac=function(i){return new(i||o)(g(O),g(N),g(G))},o.\u0275cmp=S({type:o,selectors:[["app-bs-gellaryview"]],inputs:{BuySellArray:"BuySellArray",distances:"distances"},standalone:!0,features:[B],decls:1,vars:1,consts:[["class","list-img",4,"ngIf"],[1,"list-img"],[1,"container"],[1,"row","justify-content-start","align-items-center","d-flex","flex-wrap","gap-3","py-3","gap-lg-0"],["class","col-md-3 col-12 mb-3",4,"ngFor","ngForOf"],[1,"col-md-3","col-12","mb-3"],[1,"card","justify-content-between","align-items-center","d-flex",3,"routerLink"],["alt","",1,"w-100","img-fluid","object-fit-fill","border","rounded",3,"src"],[1,"title","py-2"],["class","py-2",4,"ngIf"],[1,"description","mx-3","text-center",3,"ngStyle"],[3,"click",4,"ngIf"],[1,"btns","justify-content-start","align-items-start","d-flex","gap-3","py-3"],[1,"call-now",3,"click"],[1,"Directions",3,"click"],[1,"py-2"],[1,"d-flex","justify-content-center","align-items-center","gap-1"],[1,"pi","pi-directions","fs-4"],[1,"p-0","m-0"],[3,"click"]],template:function(i,r){i&1&&_(0,Ue,4,1,"section",0),i&2&&p("ngIf",r.BuySellArray)},dependencies:[k,j,z,R,pe,$,I,H],styles:[".list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{position:relative}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border-radius:10px;-webkit-border-radius:10px;-moz-border-radius:10px;-ms-border-radius:10px;-o-border-radius:10px;box-shadow:0 4px 4px #00000040}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:250px;border-radius:7px!important;-webkit-border-radius:7px!important;-moz-border-radius:7px!important;-ms-border-radius:7px!important;-o-border-radius:7px!important}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 4px 4px #00000040}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-weight:600;font-family:Lato,sans-serif;color:#0f3d3e;font-size:25px}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   .call-now[_ngcontent-%COMP%]{background-color:#aefcc9;width:130px;height:50px;border:none;outline:none;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   .Directions[_ngcontent-%COMP%]{background-color:#ffbf9d;width:130px;height:50px;border:none;outline:none;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .div-like[_ngcontent-%COMP%]{position:absolute;top:203px;right:16px;background-color:#fff;width:50px;height:50px;border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%;justify-content:center;align-items:center;display:flex}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .likes[_ngcontent-%COMP%]{position:absolute;top:260px;right:38px}"]});let t=o;return t})();function qe(t,o){if(t&1&&(l(0,"tr",6)(1,"td",7)(2,"h6",8),m(3),c()()()),t&2){let n=o.$implicit;s(3),C(n.buySellTime)}}function Qe(t,o){if(t&1&&(l(0,"span"),u(1,"div",34),v(2,"sanatizer"),c()),t&2){let n=a(2).$implicit;s(1),p("innerHTML",b(2,1,n==null?null:n.content),T)}}function Ke(t,o){if(t&1&&(u(0,"div",34),v(1,"sanatizer")),t&2){let n=a(2).$implicit,e=a(2);p("innerHTML",b(1,1,n!=null&&n.content?n==null?null:n.content.slice(0,e.maxDescriptionLength):""),T)}}function Je(t,o){if(t&1){let n=w();l(0,"span",35),f("click",function(){x(n);let i=a(4);return y(i.showFullText=!i.showFullText)}),m(1),c()}if(t&2){let n=a(4);s(1),h(" ",n.showFullText?"Less":"..."," ")}}function We(t,o){if(t&1&&(l(0,"span"),u(1,"div",34),v(2,"sanatizer"),c()),t&2){let n=a(2).$implicit;s(1),p("innerHTML",b(2,1,n==null?null:n.content),T)}}function Xe(t,o){if(t&1&&(u(0,"div",34),v(1,"sanatizer")),t&2){let n=a(2).$implicit,e=a(2);p("innerHTML",b(1,1,n!=null&&n.content?n==null?null:n.content.slice(0,e.maxDescriptionLength):""),T)}}function Ye(t,o){if(t&1){let n=w();l(0,"span",35),f("click",function(){x(n);let i=a(4);return y(i.showFullText=!i.showFullText)}),m(1),c()}if(t&2){let n=a(4);s(1),h(" ",n.showFullText?"Less":"..."," ")}}function Ze(t,o){if(t&1&&(l(0,"div",36)(1,"div",37),u(2,"i",38),l(3,"p",39),m(4),v(5,"number"),l(6,"span",40),m(7,"Miles"),c()()()()),t&2){let n=a(2).rowIndex,e=a(2);s(4),h(" Distance: ",F(5,1,e.distances[n],"1.0-0")," ")}}var Y=(t,o)=>({"font-weight":t,"font-style":o});function et(t,o){if(t&1){let n=w();l(0,"div",10)(1,"div",11)(2,"div",12)(3,"div",13),u(4,"img",14),c(),l(5,"div",15)(6,"div",16)(7,"div",17)(8,"div",18)(9,"h5",19),m(10),c()()(),l(11,"div",20),u(12,"i",21),l(13,"p",22),m(14),c()(),l(15,"div",23)(16,"small",24),_(17,Qe,3,3,"span",25)(18,Ke,2,3,"ng-template",null,26,D)(20,Je,2,1,"span",27),c()(),l(21,"div",28)(22,"small",24),_(23,We,3,3,"span",25)(24,Xe,2,3,"ng-template",null,26,D)(26,Ye,2,1,"span",27),c()(),_(27,Ze,8,4,"div",29),l(28,"div",30)(29,"div",31)(30,"button",32),f("click",function(){x(n);let i=a().$implicit,r=a(2);return y(r.makePhoneCall(i.phone_number))}),m(31,"Call"),c(),l(32,"button",33),f("click",function(){x(n);let i=a().$implicit,r=a(2);return y(r.handleMapClick(i.geo_direction))}),m(33,"Directions"),c()()()()()()()()}if(t&2){let n=J(19),e=a().$implicit,i=a(2);s(4),E("src",e.images[0],A),V("routerLink","/BuySelldetails/",e.id,""),s(6),C(e.title),s(4),C(e.buySellTime),s(2),p("ngStyle",P(13,Y,e!=null&&e.bold?"bold":"normal",e!=null&&e.italic?"italic":"normal")),s(1),p("ngIf",i.showFullText)("ngIfElse",n),s(3),p("ngIf",(e==null?null:e.content)&&(e==null?null:e.content.length)>i.maxDescriptionLength),s(2),p("ngStyle",P(16,Y,e!=null&&e.bold?"bold":"normal",e!=null&&e.italic?"italic":"normal")),s(1),p("ngIf",i.showFullText)("ngIfElse",n),s(3),p("ngIf",(e==null?null:e.content)&&(e==null?null:e.content.length)>i.maxDescriptionLength),s(1),p("ngIf",i.distances&&i.distances.length>0)}}function tt(t,o){if(t&1&&_(0,et,34,19,"div",9),t&2){let n=a(2);p("ngIf",n.BuySellArray)}}function it(t,o){if(t&1&&(l(0,"div",2)(1,"p-table",3),_(2,qe,4,1,"ng-template",4)(3,tt,1,1,"ng-template",5),c()()),t&2){let n=a();s(1),p("value",n.BuySellArray)("scrollable",!0)}}function nt(t,o){if(t&1&&(l(0,"tr",6)(1,"td",43)(2,"h6",44),m(3),c()()()),t&2){let n=o.$implicit;s(3),C(n.buySellTime)}}function ot(t,o){if(t&1&&(l(0,"span"),u(1,"div",34),v(2,"sanatizer"),c()),t&2){let n=a(2).$implicit;s(1),p("innerHTML",b(2,1,n==null?null:n.content),T)}}function lt(t,o){if(t&1&&(u(0,"div",34),v(1,"sanatizer")),t&2){let n=a(2).$implicit,e=a(2);p("innerHTML",b(1,1,n!=null&&n.content?n==null?null:n.content.slice(0,e.maxDescriptionLength):""),T)}}function rt(t,o){if(t&1){let n=w();l(0,"span",35),f("click",function(){x(n);let i=a(4);return y(i.showFullText=!i.showFullText)}),m(1),c()}if(t&2){let n=a(4);s(1),h(" ",n.showFullText?"Less":"..."," ")}}function st(t,o){if(t&1&&(l(0,"div",36)(1,"div",50),u(2,"i",51),l(3,"p",39),m(4),v(5,"number"),l(6,"span",40),m(7,"Miles"),c()()()()),t&2){let n=a(2).rowIndex,e=a(2);s(4),h(" Distance: ",F(5,1,e.distances[n],"1.0-0")," ")}}function at(t,o){if(t&1){let n=w();l(0,"div",10)(1,"div",11)(2,"div",12)(3,"div",45),u(4,"img",46),c(),l(5,"div",47)(6,"div",16)(7,"div",17)(8,"div",18)(9,"h5",48),m(10),c()()(),l(11,"div",20),u(12,"i",21),l(13,"p",22),m(14),c()(),l(15,"div",18)(16,"small",24),_(17,ot,3,3,"span",25)(18,lt,2,3,"ng-template",null,26,D)(20,rt,2,1,"span",27),c()(),_(21,st,8,4,"div",29),l(22,"div",30)(23,"div",49)(24,"button",32),f("click",function(){x(n);let i=a().$implicit,r=a(2);return y(r.makePhoneCall(i.phone_number))}),m(25,"Call"),c(),l(26,"button",33),f("click",function(){x(n);let i=a().$implicit,r=a(2);return y(r.handleMapClick(i.business.geo_direction))}),m(27,"Directions"),c()()()()()()()()}if(t&2){let n=J(19),e=a().$implicit,i=a(2);s(4),E("src",e.images[0],A),V("routerLink","/BuySelldetails/",e.id,""),s(6),C(e.title),s(4),C(e.buySellTime),s(2),p("ngStyle",P(9,Y,e!=null&&e.bold?"bold":"normal",e!=null&&e.italic?"italic":"normal")),s(1),p("ngIf",i.showFullText)("ngIfElse",n),s(3),p("ngIf",(e==null?null:e.content)&&(e==null?null:e.content.length)>i.maxDescriptionLength),s(1),p("ngIf",i.distances&&i.distances.length>0)}}function ct(t,o){if(t&1&&_(0,at,28,12,"div",9),t&2){let n=a(2);p("ngIf",n.BuySellArray)}}function pt(t,o){if(t&1&&(l(0,"div",41)(1,"p-table",3),_(2,nt,4,1,"ng-template",4)(3,ct,1,1,"ng-template",42),c()()),t&2){let n=a();s(1),p("value",n.BuySellArray)("scrollable",!0)}}var Ve=(()=>{let o=class o{constructor(e,i,r){this._filterservie=e,this._cookieService=i,this.router=r,this.maxDescriptionLength=60,this.showFullText=!1,this.BuySellArray=[],this.isLiked=[],this.likeCountValue=[]}truncateText(e,i){return e.length<=i?e:e.substr(0,i)+"... see more"}makePhoneCall(e){console.log("Initiating phone call to:",e),window.location.href="tel:"+e}handleMapClick(e){if(e&&e.lat!==void 0&&e.lng!==void 0){let i=`https://www.google.com/maps/search/?api=1&query=${e.lat},${e.lng}`;window.open(i,"_blank")}}toggleLike(e){this.isLiked[e]=!this.isLiked[e],this.likeCountValue[e]=this.isLiked[e]?this.likeCountValue[e]+1:this.likeCountValue[e]-1,this.isLiked[e]?this.BuySellArray[e].likes+=1:this.BuySellArray[e].likes-=1}likeBusiness(e,i){this._cookieService.get("token")?this.BuySellArray[i].liked==!0?(console.log(this.BuySellArray[i].liked),this._filterservie.addLike(e).subscribe({next:d=>{console.log(d,"like"),this.BuySellArray[i].liked=!1,this.BuySellArray[i].business.likes+=1}})):this._filterservie.addDislikes(e).subscribe({next:d=>{console.log(d,"dislike"),this.BuySellArray[i].liked=!0,this.BuySellArray[i].business.likes-=1}}):this.router.navigate(["/login"])}};o.\u0275fac=function(i){return new(i||o)(g(O),g(N),g(G))},o.\u0275cmp=S({type:o,selectors:[["app-bs-listview"]],inputs:{BuySellArray:"BuySellArray",distances:"distances"},standalone:!0,features:[B],decls:2,vars:2,consts:[["class","web-view",4,"ngIf"],["class","mobileb-view",4,"ngIf"],[1,"web-view"],["sortField","id","sortMode","single","rowGroupMode","subheader","groupRowsBy","buySellTime",3,"value","scrollable"],["pTemplate","groupheader"],["pTemplate","body"],[1,"p-rowgroup-header"],["colspan","5"],[1,"ms-5","ps-5"],["class"," data d-flex gap-2 justify-content-center align-items-center py-3 row px-4",4,"ngIf"],[1,"data","d-flex","gap-2","justify-content-center","align-items-center","py-3","row","px-4"],[1,"card","my-0","py-0","px-0",2,"max-width","1200px"],[1,"row","g-0"],[1,"col-3",2,"width","27%"],["alt","...","height","100%","width","310",1,"rounded-start",3,"src","routerLink"],[1,"col-9",2,"width","70%"],[1,"card-body","card-body","d-flex","flex-column","align-items-between","justify-content-between","px-2","py-0",2,"height","100%"],[1,"d-flex","gap-1","justify-content-between","align-items-center"],[1,""],[1,"title-name"],[1,"d-flex","gap-1","justify-content-start","align-items-center"],[1,"bx","bx-world","fs-6",2,"color","#6b6666"],[1,"title-time","text-muted","m-0"],[1,"d-none","d-lg-block"],[1,"description",3,"ngStyle"],[4,"ngIf","ngIfElse"],["truncatedContent",""],[3,"click",4,"ngIf"],[1,"d-lg-none","d-block"],["class","py-1",4,"ngIf"],[1,"btns","justify-content-between","align-items-end","d-flex","gap-1","py-2"],[1,"btns","d-flex","gap-2"],[1,"call-now",3,"click"],[1,"Directions",3,"click"],[3,"innerHTML"],[3,"click"],[1,"py-1"],[1,"d-flex","justify-content-start","align-items-start","gap-1"],[1,"pi","pi-directions","fs-4"],[1,"p-0","m-0"],[1,"miles"],[1,"mobileb-view"],["pTemplate","body","class","py-3"],["colspan","5",2,"padding","0px"],[1,"",2,"padding","0px 1rem"],[1,"col-3",2,"width","44%"],["alt","...","height","100%",1,"rounded-start","w-100",3,"src","routerLink"],[1,"col-9",2,"width","56%"],[1,"title-name",2,"font-size","14px"],[1,"btns","d-flex","gap-1"],[1,"d-flex","justify-content-start","align-items-start","gap-1",2,"font-size","13px"],[1,"pi","pi-directions","fs-6"]],template:function(i,r){i&1&&_(0,it,4,2,"div",0)(1,pt,4,2,"div",1),i&2&&(p("ngIf",r.BuySellArray),s(1),p("ngIf",r.BuySellArray))},dependencies:[k,z,R,$,Pe,Le,ge,I,H,Ie],styles:[".mobileb-view[_ngcontent-%COMP%]{display:none}#likeIcon[_ngcontent-%COMP%], img[_ngcontent-%COMP%]{cursor:pointer}.web-view[_ngcontent-%COMP%]{display:block}.miles[_ngcontent-%COMP%]{color:#258a8b;font-weight:700}.pi-directions[_ngcontent-%COMP%]{color:#258a8b}@media (max-width: 767px){.mobileb-view[_ngcontent-%COMP%]{display:block}.web-view[_ngcontent-%COMP%]{display:none}.call-now[_ngcontent-%COMP%]{width:45px}.Directions[_ngcontent-%COMP%]{width:73px;font-size:10px}}"]});let t=o;return t})();function dt(t,o){if(t&1&&(l(0,"div"),u(1,"map-marker",5),c()),t&2){let n=o.$implicit,e=a(2);s(1),p("position",n.business.geo_direction)("options",e.options)}}function mt(t,o){if(t&1&&(l(0,"google-map",null,3),_(2,dt,2,2,"div",4),c()),t&2){let n=a();s(2),p("ngForOf",n.BuySellArray)}}var Fe=(()=>{let o=class o{constructor(e){this._httpClient=e,this.options={mapTypeControl:!1,streetViewControl:!1,fullscreenControl:!1},this.markerOptions={draggable:!1},this.apiLoaded=e.jsonp("https://maps.googleapis.com/maps/api/js?key=AIzaSyAAb4SFQe0Kigpu3EiKhR93nC-OUitTKwM","callback").pipe(ee(()=>!0),te(()=>Z(!1)))}ngAfterViewInit(){this.apiLoaded&&setTimeout(()=>{this.fitBounds()},1e3)}fitBounds(){let e=new google.maps.LatLngBounds;for(let i of this.BuySellArray)console.log(i.business.geo_direction.lat),e.extend(new google.maps.LatLng(i.business.geo_direction.lat,i.business.geo_direction.lng));this.map.fitBounds(e)}};o.\u0275fac=function(i){return new(i||o)(g(me))},o.\u0275cmp=S({type:o,selectors:[["app-bs-mapview"]],viewQuery:function(i,r){if(i&1&&re(q,5),i&2){let d;le(d=se())&&(r.map=d.first)}},inputs:{distances:"distances",BuySellArray:"BuySellArray"},standalone:!0,features:[B],decls:5,vars:5,consts:[[1,"container"],[1,"map"],[3,"BuySellArray","distances"],["map",""],[4,"ngFor","ngForOf"],[3,"position","options"]],template:function(i,r){i&1&&(l(0,"div",0)(1,"div",1),_(2,mt,3,1,"google-map"),v(3,"async"),c(),u(4,"app-bs-gellaryview",2),c()),i&2&&(s(2),L(2,b(3,3,r.apiLoaded)?2:-1),s(2),p("BuySellArray",r.BuySellArray)("distances",r.distances))},dependencies:[k,j,ce,Ce,q,we,Q],styles:[`.map-container{width:85vw!important}
`],encapsulation:2});let t=o;return t})();function ut(t,o){if(t&1&&(l(0,"div",19),u(1,"app-bs-listview",20),c()),t&2){let n=a();s(1),p("BuySellArray",n.buySellArray)("distances",n.distances)}}function _t(t,o){if(t&1&&(l(0,"div",19),u(1,"app-bs-gellaryview",20),c()),t&2){let n=a();s(1),p("BuySellArray",n.buySellArray)("distances",n.distances)}}function gt(t,o){if(t&1&&(l(0,"div",19),u(1,"app-bs-mapview",20),c()),t&2){let n=a();s(1),p("BuySellArray",n.buySellArray)("distances",n.distances)}}var ti=(()=>{let o=class o{constructor(e,i,r,d,M,K,De,je){this._filterservice=e,this._router=i,this._BuySellService=r,this._messageService=d,this.distanceService=M,this.platformId=K,this.confirmationService=De,this.previousRouteService=je,this.first=20,this.rows=20,this.distances=[],this.galleyView=!1,this.listView=!0,this.mapView=!1,this.buySellArray=[]}ngOnInit(){if(this.previousRouteService.getPreviousUrl()=="/listing"||this.previousRouteService.getPreviousUrl()=="/posting"||this.previousRouteService.getPreviousUrl()=="/buysell")if(de(this.platformId)){let i=localStorage.getItem("filter"),r=[];i?(r=JSON.parse(i),console.log(r),this.getFilteredBuySell(r[0].category,r[0].state,r[0].city),this.filteredBuySell(),this.clearBuysell()):(this.getBuySell(),this.clearBuysell(),this.filteredBuySell())}else this.getBuySell();else this.getBuySell(),this.clearBuysell(),this.filteredBuySell();navigator.geolocation&&navigator.geolocation.getCurrentPosition(i=>{this.currentLocation={latitude:i.coords.latitude,longitude:i.coords.longitude};for(let r of this.buySellArray){let d={latitude:r.geo_direction.lat,longitude:r.geo_direction.lng},M=this.distanceService.calculateDistance(this.currentLocation,d);this.distances.push(M)}this.distanceService.setCurrentLocation(this.currentLocation),this.distanceService.setDistances(this.distances).then(()=>{}).catch(r=>{console.error("Error setting distances:",r)})},i=>{console.error("Error getting user location:",i)});let e=this.distanceService.getDistances();e.length>0&&(this.distances=e)}getBuySell(){this.buySellSubscription=this._BuySellService.getBuySell().subscribe({next:e=>{console.log(e),this.buySellArray=e.data,this.getGeoLocations()}})}getFilteredBuySell(e,i,r){this.filteredBuySellSubscription=this._filterservice.getBuySells(e,i,r).subscribe({next:d=>{console.log(d.data.allBuySells),this.buySellArray=d.data.allBuySells,this.getGeoLocations()},error:d=>{console.log(d)}})}filteredBuySell(){this.FilteredSubscribtion=this._filterservice.filteredBuySell.subscribe({next:e=>{console.log("next has come",e),this.buySellArray=e.data.allBuySells,this.getGeoLocations()}})}getGeoLocations(){let e=this.buySellArray.map(d=>d.business.geo_direction),i=new Set(e.map(d=>`${d.lat}_${d.lng}`)),r=Array.from(i).map(d=>{let[M,K]=d.split("_");return{lat:parseFloat(M),lng:parseFloat(K)}});this.UniqueGeoLocations=r,console.log(this.UniqueGeoLocations)}clearBuysell(){this.clearSubscribtion=this._filterservice.clearBuysell.subscribe({next:e=>{this.buySellArray=e,console.log(e),this.getGeoLocations()}})}showGallery(){this.galleyView=!0,this.listView=!1,this.mapView=!1}showList(){this.listView=!0,this.galleyView=!1,this.mapView=!1}showMap(){this.mapView=!0,this.galleyView=!1,this.listView=!1}onPageChange(e){this.first=e.first}};o.\u0275fac=function(i){return new(i||o)(g(O),g(ue),g(Oe),g(_e),g(xe),g(ie),g(U),g(Te))},o.\u0275cmp=S({type:o,selectors:[["app-buy-sell"]],hostAttrs:["ngSkipHydration","true"],standalone:!0,features:[ne([U]),B],decls:35,vars:9,consts:[[1,"posting","mt-5","py-5"],[1,"box","mb-4","mt-lg-0","mt-5"],[1,"container"],[1,"title","mb-5","justify-content-between","align-items-center","d-flex"],[1,""],[1,"form-group","d-none","d-lg-block"],[1,"div-searchBar","justify-content-center","align-items-center","d-flex"],[1,"view","d-flex","justify-content-between"],[1,"suggest"],[1,"m-0"],[1,"views","d-flex","gap-3"],[1,"box","d-flex","gap-2",3,"ngClass","click"],[1,"pi","pi-list","fs-4",2,"color","black"],[1,"m-0","d-none","d-lg-block"],[1,"pi-th-large","pi","fs-4",2,"color","black"],[1,"pi","pi-map","fs-4",2,"color","black"],["class","view-data"],["class","view-data "],[3,"first","rows","totalRecords","onPageChange"],[1,"view-data"],[3,"BuySellArray","distances"]],template:function(i,r){i&1&&(l(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h3"),m(6,"Top businesses in your Area"),c()(),l(7,"div",5)(8,"div",6),u(9,"app-filter"),c(),u(10,"p-toast")(11,"p-confirmDialog"),c()(),l(12,"div",7)(13,"div",8)(14,"h6",9),m(15,"Suggested Results:"),c()(),l(16,"div",10)(17,"div",11),f("click",function(){return r.showList()}),u(18,"i",12),l(19,"p",13),m(20,"List View"),c()(),l(21,"div",11),f("click",function(){return r.showGallery()}),u(22,"i",14),l(23,"p",13),m(24,"Gallery View"),c()(),l(25,"div",11),f("click",function(){return r.showMap()}),u(26,"i",15),l(27,"p",13),m(28,"Map View"),c()()()()()(),l(29,"div",2),_(30,ut,2,2,"div",16)(31,_t,2,2,"div",16)(32,gt,2,2,"div",17),l(33,"div")(34,"p-paginator",18),f("onPageChange",function(M){return r.onPageChange(M)}),c()()()()),i&2&&(s(17),p("ngClass",r.listView?"active":null),s(4),p("ngClass",r.galleyView?"active":null),s(4),p("ngClass",r.mapView?"active":null),s(5),L(30,r.listView?30:-1),s(1),L(31,r.galleyView?31:-1),s(1),L(32,r.mapView?32:-1),s(2),p("first",r.first)("rows",r.rows)("totalRecords",r.buySellArray.length))},dependencies:[he,ye,ke,Be,Me,Se,be,k,ae,Q,Ve,Fe,I,fe,ve],styles:[`.buy-sell .container .text{font-family:Lato,sans-serif;font-weight:600}.div-searchBar form{border-radius:12px;display:flex!important;justify-content:center!important;align-items:center!important;background-color:#f9f7f7;padding:11px}.div-searchBar form .p-dropdown{border:none;width:100%;background-color:transparent;margin:0 10px}.div-searchBar form input,.div-searchBar form input:focus,.div-searchBar form input:active{border:none;outline:none}.div-searchBar form small{white-space:nowrap;font-family:Lato,sans-serif;font-size:14px!important}.div-searchBar form .Search-btn{background-color:#000;color:#fff;border-radius:12px;-webkit-border-radius:12px;-moz-border-radius:12px;-ms-border-radius:12px;-o-border-radius:12px;width:90px;height:38px}.div-searchBar form .clear-btn{background-color:#ffbf9d;color:#fff;border-radius:12px;-webkit-border-radius:12px;-moz-border-radius:12px;-ms-border-radius:12px;-o-border-radius:12px;width:90px;height:38px;outline:none;border:none}.div-searchBar form small{font-size:12px}.div-searchBar form ul{padding-left:0rem!important;margin:0!important}.div-searchBar form .p-dropdown-panel .p-dropdown-items{padding:0}.p-datatable>.p-datatable-wrapper{overflow:hidden!important}i{cursor:pointer}
`],encapsulation:2});let t=o;return t})();export{ti as BuySellComponent};
