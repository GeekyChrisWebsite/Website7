import{a as Te}from"./chunk-KTEIAZLS.js";import{a as we,b as Ce}from"./chunk-P67XHRMX.js";import{a as Se,b as ke}from"./chunk-J2LFD6P6.js";import"./chunk-R2SV2WYE.js";import{b as Pe,c as Oe,d as Ie,e as Le}from"./chunk-XINZIGNS.js";import{c as xe,d as Me}from"./chunk-XSUQOZBK.js";import{j as P,l as Be}from"./chunk-5RGJEPLB.js";import{a as M}from"./chunk-NFFZMRKC.js";import{a as q,b as he,c as be}from"./chunk-VHJTVGTX.js";import"./chunk-CCR2RI5S.js";import"./chunk-DU7A3LZM.js";import"./chunk-V4OHRVXY.js";import"./chunk-AHDVZE4G.js";import{a as H}from"./chunk-DV7ZQGJ3.js";import{m as ve,n as ye}from"./chunk-ZPK6SI4E.js";import{e as U,i as fe,n as _e}from"./chunk-5TFSM2L3.js";import"./chunk-KMXITLPI.js";import{c as ue,m as ge,o as $,p as N,r as B}from"./chunk-446XVE5Q.js";import{A as ie,Ab as d,Ac as pe,Bb as A,Bc as de,Cb as x,Dc as me,Eb as ne,Ec as C,Fa as J,Ga as I,Gc as j,Hb as w,Kb as F,Qa as a,Ra as u,Rb as h,Sb as V,Tb as E,Ub as oe,Wb as re,Xb as le,Y as b,Zb as se,_b as ae,a as Y,ab as m,b as Z,ba as v,ca as y,gb as f,hb as S,lb as l,mb as s,n as ee,nb as g,qa as D,r as te,rb as k,tb as _,ub as c,vc as ce,wc as z,xb as L,xc as G,yb as T,yc as R}from"./chunk-DNKOXMCJ.js";function Re(n,r){if(n&1){let i=k();l(0,"span",17),_("click",function(){v(i);let t=c(3);return y(t.showFullText=!t.showFullText)}),d(1),s()}if(n&2){let i=c(3);a(1),x(" ",i.showFullText?"Less":"..."," ")}}var $e=(n,r)=>({"font-weight":n,"font-style":r});function Ne(n,r){if(n&1){let i=k();l(0,"div",5)(1,"div",6),g(2,"img",7),l(3,"div",8)(4,"h5"),d(5),s()(),l(6,"div",9),g(7,"i",10),l(8,"p",11),d(9),l(10,"span"),d(11,"miles"),s()()(),l(12,"p",12),d(13),h(14,"slice"),f(15,Re,2,1,"span",13),s(),l(16,"div",14)(17,"button",15),_("click",function(){let o=v(i).$implicit,p=c(2);return y(p.makePhoneCall(o.phone_number))}),d(18," Call Now "),s(),l(19,"button",16),_("click",function(){let o=v(i).$implicit,p=c(2);return y(p.handleMapClick(o.business.geo_direction))}),d(20," Directions "),s()()()()}if(n&2){let i=r.$implicit,e=c(2);a(1),T("routerLink","/BuySelldetails/",i.id,""),a(1),L("src",i.business.logo,I),a(3),A(i.business.name),a(4),x(" Distance: ",e.calculateDistance(i.business.geo_direction.lat,i.business.geo_direction.lng)," "),a(3),m("ngStyle",F(11,$e,i!=null&&i.bold?"bold":"normal",i!=null&&i.italic?"italic":"normal")),a(1),x(" ",e.showFullText?i==null?null:i.content:oe(14,7,i==null?null:i.content,0,e.maxDescriptionLength)," "),a(2),m("ngIf",(i==null?null:i.content.length)>e.maxDescriptionLength)}}function Ue(n,r){if(n&1&&(l(0,"section",1)(1,"div",2)(2,"div",3),f(3,Ne,21,14,"div",4),s()()()),n&2){let i=c();a(3),m("ngForOf",i.BuySellArray)}}var Q=(()=>{let r=class r{constructor(e,t,o,p,O){this._filterservie=e,this._cookieService=t,this.router=o,this.distanceService=p,this.platformId=O,this.currentLocation=null,this.BuySellArray=[],this.maxDescriptionLength=40,this.showFullText=!1,this.isLiked=[],this.likeCountValue=[]}makePhoneCall(e){console.log("Initiating phone call to:",e),window.location.href="tel:"+e}handleMapClick(e){if(console.log(e),e){let t=`https://www.google.com/maps/search/?api=1&query=${e.lat},${e.lng}`;window.open(t,"_blank")}}truncateText(e,t){return e.length<=t?e:e.substr(0,t)+"... see more"}likeBusiness(e,t){this._cookieService.get("token")?this.BuySellArray[t].liked==!0?(console.log(this.BuySellArray[t].liked),this._filterservie.addLike(e).subscribe({next:p=>{console.log(p,"like"),this.BuySellArray[t].liked=!1,this.BuySellArray[t].business.likes+=1}})):this._filterservie.addDislikes(e).subscribe({next:p=>{console.log(p,"dislike"),this.BuySellArray[t].liked=!0,this.BuySellArray[t].business.likes-=1}}):this.router.navigate(["/login"])}calculateDistance(e,t){let o=this.distanceService.calculateDistance(e,t);return o!==null?o.toFixed(0):"N/A"}ngOnInit(){j(this.platformId)&&this.distanceService.getCurrentLocation().then(e=>{this.currentLocation={latitude:e.latitude,longitude:e.longitude},this.distanceService.setCurrentLocationInLocalStorage(e)}).catch(e=>{console.error("Error getting user location:",e)})}};r.\u0275fac=function(t){return new(t||r)(u(M),u(H),u($),u(P),u(D))},r.\u0275cmp=b({type:r,selectors:[["app-bs-gellaryview"]],inputs:{BuySellArray:"BuySellArray",distances:"distances"},standalone:!0,features:[w],decls:1,vars:1,consts:[["class","list-img",4,"ngIf"],[1,"list-img"],[1,"container"],[1,"row","justify-content-start","align-items-center","d-flex","flex-wrap","gap-3","py-3","gap-lg-0"],["class","col-md-3 col-12 mb-3",4,"ngFor","ngForOf"],[1,"col-md-3","col-12","mb-3"],[1,"card","justify-content-between","align-items-center","d-flex",3,"routerLink"],["alt","",1,"border","rounded",3,"src"],[1,"title","py-2"],[1,"d-flex","justify-content-center","align-items-center","gap-1"],[1,"pi","pi-directions","fs-4"],[1,"px-1","m-0","distance"],[1,"description","mx-3","text-center",3,"ngStyle"],[3,"click",4,"ngIf"],[1,"btns","justify-content-start","align-items-start","d-flex","gap-3","py-3"],[1,"call-now",3,"click"],[1,"Directions",3,"click"],[3,"click"]],template:function(t,o){t&1&&f(0,Ue,4,1,"section",0),t&2&&m("ngIf",o.BuySellArray)},dependencies:[C,z,G,R,me,B,N],styles:[".list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{position:relative}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border-radius:10px;-webkit-border-radius:10px;-moz-border-radius:10px;-ms-border-radius:10px;-o-border-radius:10px;box-shadow:0 4px 4px #00000040}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:228px;width:300px;background-color:#000;object-fit:cover;border-radius:7px!important;-webkit-border-radius:7px!important;-moz-border-radius:7px!important;-ms-border-radius:7px!important;-o-border-radius:7px!important}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 4px 4px #00000040}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-weight:600;font-family:Lato,sans-serif;color:#0f3d3e;font-size:25px}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   .call-now[_ngcontent-%COMP%]{background-color:#aefcc9;width:130px;height:50px;border:none;outline:none;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;color:#000}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   .Directions[_ngcontent-%COMP%]{background-color:#ffbf9d;width:130px;height:50px;border:none;outline:none;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;color:#000}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .div-like[_ngcontent-%COMP%]{position:absolute;top:203px;right:16px;background-color:#fff;width:50px;height:50px;border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%;justify-content:center;align-items:center;display:flex}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .likes[_ngcontent-%COMP%]{position:absolute;top:260px;right:38px}@media (max-width: 767px){img[_ngcontent-%COMP%]{height:247px!important;width:326px!important}}"]});let n=r;return n})();function qe(n,r){if(n&1&&(l(0,"tr",6)(1,"td",7)(2,"h6",8),d(3),h(4,"date"),s()()()),n&2){let i=r.$implicit;a(3),A(E(4,1,i.updated_at,"MM/dd/yyyy"))}}function Qe(n,r){if(n&1&&(g(0,"div",35),h(1,"sanatizer")),n&2){let i=c(2).$implicit,e=c(2);m("innerHTML",V(1,1,i!=null&&i.content?i==null?null:i.content.slice(0,e.maxDescriptionLength):""),J)}}var Ke=(n,r)=>({"font-weight":n,"font-style":r});function Je(n,r){if(n&1){let i=k();l(0,"div",10)(1,"div",11)(2,"div",12)(3,"div",13)(4,"img",14),_("error",function(t){v(i);let o=c(3);return y(o.onImageError(t))}),s()(),l(5,"div",15)(6,"div",16)(7,"div",17)(8,"div",18)(9,"h5",19),d(10),s()()(),l(11,"div",20),g(12,"i",21),l(13,"p",22),d(14),s()(),l(15,"div",23)(16,"small",24),f(17,Qe,2,3,"ng-template",null,25,ae),s()(),g(19,"p",26),h(20,"sanatizer"),h(21,"truncateText"),l(22,"div",27)(23,"div",28),g(24,"i",29),l(25,"p",30),d(26),l(27,"span"),d(28,"miles"),s()()()(),l(29,"div",31)(30,"div",32)(31,"button",33),_("click",function(){v(i);let t=c().$implicit,o=c(2);return y(o.makePhoneCall(t.phone_number))}),d(32," Call "),s(),l(33,"button",34),_("click",function(){v(i);let t=c().$implicit,o=c(2);return y(o.handleMapClick(t.geo_direction))}),d(34," Directions "),s()()()()()()()()}if(n&2){let i=c().$implicit,e=c(2);a(4),L("src",i.images[0],I),T("routerLink","/BuySelldetails/",i.id,""),a(6),x(" ",i.title," "),a(4),x(" ",i.buySellTime," "),a(2),m("ngStyle",F(12,Ke,i!=null&&i.bold?"bold":"normal",i!=null&&i.italic?"italic":"normal")),a(3),m("innerHTML",V(20,7,E(21,9,i.content,50)),J),a(7),x(" Distance: ",e.calculateDistance(i.business.geo_direction.lat,i.business.geo_direction.lng)," ")}}function We(n,r){if(n&1&&f(0,Je,35,15,"div",9),n&2){let i=c(2);m("ngIf",i.BuySellArray)}}function Xe(n,r){if(n&1&&(l(0,"div",2)(1,"p-table",3),f(2,qe,5,4,"ng-template",4)(3,We,1,1,"ng-template",5),s()()),n&2){let i=c();a(1),m("value",i.BuySellArray)("sortOrder",-1)("rows",20)("paginator",!0)("scrollable",!0)}}function Ye(n,r){if(n&1&&(l(0,"tr",6)(1,"td",7)(2,"h6",8),d(3),h(4,"date"),s()()()),n&2){let i=r.$implicit;a(3),A(E(4,1,i.updated_at,"MM/dd/yyyy"))}}function Ze(n,r){if(n&1&&(l(0,"div",27)(1,"div",49),g(2,"i",50),l(3,"p",51),d(4),s()()()),n&2){let i=c(2).$implicit,e=c(2);a(4),x(" Distance: ",e.calculateDistance(i.business.geo_direction.lat,i.business.geo_direction.lng)," Miles ")}}function et(n,r){if(n&1){let i=k();l(0,"div",38)(1,"div",39)(2,"div",12)(3,"div",40)(4,"img",41),_("error",function(t){v(i);let o=c(3);return y(o.onImageError(t))}),s()(),l(5,"div",42)(6,"div",43)(7,"div",17)(8,"div",44)(9,"p",45),d(10),h(11,"truncateText"),s()()(),l(12,"div",20),g(13,"i",21),l(14,"p",46),d(15),s()(),f(16,Ze,5,1,"div",47),l(17,"div",48)(18,"div",32)(19,"button",33),_("click",function(){v(i);let t=c().$implicit,o=c(2);return y(o.makePhoneCall(t.phone_number))}),d(20," Call "),s(),l(21,"button",34),_("click",function(){v(i);let t=c().$implicit,o=c(2);return y(o.handleMapClick(t.geo_direction))}),d(22," Directions "),s()()()()()()()()}if(n&2){let i=c().$implicit,e=c(2);a(4),L("src",i.images[0],I),T("routerLink","/BuySelldetails/",i.id,""),a(6),x(" ",E(11,5,i.title,10)," "),a(5),x(" ",i.buySellTime," "),a(1),m("ngIf",e.distances)}}function tt(n,r){if(n&1&&f(0,et,23,8,"div",37),n&2){let i=c(2);m("ngIf",i.BuySellArray)}}function it(n,r){if(n&1&&(l(0,"div",36)(1,"p-table",3),f(2,Ye,5,4,"ng-template",4)(3,tt,1,1,"ng-template",5),s()()),n&2){let i=c();a(1),m("value",i.BuySellArray)("sortOrder",-1)("rows",20)("paginator",!0)("scrollable",!0)}}var je=(()=>{let r=class r{constructor(e,t,o,p){this._filterservie=e,this._cookieService=t,this.router=o,this.distanceService=p,this.maxDescriptionLength=44,this.showFullText=!1,this.BuySellArray=[],this.isLiked=[],this.likeCountValue=[],this.customer={id:1,images:["../../assets/img/footer/default-image.jpg"]}}truncateText(e,t){return e.length<=t?e:e.substr(0,t)+""}makePhoneCall(e){console.log("Initiating phone call to:",e),window.location.href="tel:"+e}handleMapClick(e){if(e&&e.lat!==void 0&&e.lng!==void 0){let t=`https://www.google.com/maps/search/?api=1&query=${e.lat},${e.lng}`;window.open(t,"_blank")}}toggleLike(e){this.isLiked[e]=!this.isLiked[e],this.likeCountValue[e]=this.isLiked[e]?this.likeCountValue[e]+1:this.likeCountValue[e]-1,this.isLiked[e]?this.BuySellArray[e].likes+=1:this.BuySellArray[e].likes-=1}likeBusiness(e,t){this._cookieService.get("token")?this.BuySellArray[t].liked==!0?(console.log(this.BuySellArray[t].liked),this._filterservie.addLike(e).subscribe({next:p=>{console.log(p,"like"),this.BuySellArray[t].liked=!1,this.BuySellArray[t].business.likes+=1}})):this._filterservie.addDislikes(e).subscribe({next:p=>{console.log(p,"dislike"),this.BuySellArray[t].liked=!0,this.BuySellArray[t].business.likes-=1}}):this.router.navigate(["/login"])}truncatedname(e){return e.length<=24?e:e.substring(0,24)}onImageError(e){let t=e.target;t.src="../../assets/img/footer/default-image.jpg"}calculateDistance(e,t){let o=this.distanceService.calculateDistance(e,t);return o!==null?o.toFixed(0):"N/A"}};r.\u0275fac=function(t){return new(t||r)(u(M),u(H),u($),u(P))},r.\u0275cmp=b({type:r,selectors:[["app-bs-listview"]],inputs:{BuySellArray:"BuySellArray",distances:"distances"},standalone:!0,features:[w],decls:2,vars:2,consts:[["class","web-view",4,"ngIf"],["class","mobileb-view",4,"ngIf"],[1,"web-view"],["sortField","updated_at","sortMode","single","rowGroupMode","subheader","groupRowsBy","updated_at",3,"value","sortOrder","rows","paginator","scrollable"],["pTemplate","groupheader"],["pTemplate","body"],[1,"p-rowgroup-header"],["colspan","5"],[1,"ms-5","ps-5"],["class","data d-flex gap-2 justify-content-center align-items-center py-3 row px-4",4,"ngIf"],[1,"data","d-flex","gap-2","justify-content-center","align-items-center","py-3","row","px-4"],[1,"card","my-0","py-0","px-0",2,"max-width","1200px"],[1,"row","g-0"],[1,"col-5",2,"width","27%"],["alt","...",1,"rounded-start","black",2,"height","195px","width","258px","object-fit","contain",3,"src","routerLink","error"],[1,"col-7",2,"width","70%"],[1,"card-body","card-body","d-flex","flex-column","align-items-between","justify-content-between","px-0","py-0",2,"height","100%"],[1,"d-flex","gap-1","justify-content-between","align-items-center"],[1,"m-0"],[1,"title-name","m-0"],[1,"d-flex","gap-1","justify-content-start","align-items-center"],[1,"bx","bx-world","fs-6",2,"color","#6b6666"],[1,"title-time","text-muted","m-0"],[1,"d-none","d-lg-block"],[1,"description",3,"ngStyle"],["truncatedContent",""],[1,"m-0",3,"innerHTML"],[1,"py-1"],[1,"d-flex","justify-content-start","align-items-start"],[1,"pi","pi-directions","fs-4"],[1,"px-1","m-0","distance"],[1,"btns","justify-content-between","align-items-end","d-flex","gap-1","py-2"],[1,"btns","d-flex","flex-column","gap-2"],[1,"call-now",3,"click"],[1,"Directions",3,"click"],[3,"innerHTML"],[1,"mobileb-view"],["class","d-flex gap-2 justify-content-center align-items-center py-3 row px-4",4,"ngIf"],[1,"d-flex","gap-2","justify-content-center","align-items-center","py-3","row","px-4"],[1,"card","my-0","py-0","px-0"],[1,"col-8"],["alt","...",1,"rounded-start","black",2,"height","134px","width","176px","object-fit","contain",3,"src","routerLink","error"],[1,"col-4"],[1,"card-body","card-body","d-flex","flex-column","align-items-between","justify-content-between","px-0","py-0"],[1,""],[1,"title-name","m-0",2,"font-size","13px"],[1,"title-time","text-muted","m-0",2,"font-size","8px"],["class","py-1",4,"ngIf"],[1,"btns","justify-content-between","align-items-end","d-flex","gap-1"],[1,"d-flex","justify-content-start","align-items-start","gap-1"],[1,"pi","pi-directions","fs-6"],[1,"px-1","m-0","distance",2,"font-size","8px"]],template:function(t,o){t&1&&f(0,Xe,4,5,"div",0)(1,it,4,5,"div",1),t&2&&(m("ngIf",o.BuySellArray),a(1),m("ngIf",o.BuySellArray))},dependencies:[C,G,R,de,Oe,Pe,_e,B,N,Ie,Le],styles:[".mobileb-view[_ngcontent-%COMP%]{display:none}#likeIcon[_ngcontent-%COMP%], img[_ngcontent-%COMP%]{cursor:pointer}.web-view[_ngcontent-%COMP%]{display:block}.miles[_ngcontent-%COMP%]{color:#258a8b;font-weight:700}.pi-directions[_ngcontent-%COMP%]{color:#258a8b}@media (max-width: 767px){.mobileb-view[_ngcontent-%COMP%]{display:block}.web-view[_ngcontent-%COMP%]{display:none}.call-now[_ngcontent-%COMP%]{border:none;outline:none;width:74px!important;height:22px!important;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;font-size:10px;color:#000!important}.Directions[_ngcontent-%COMP%]{background-color:#ffbf9d;border:none;outline:none;width:74px!important;height:22px!important;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;color:#000!important;font-size:10px}.miles[_ngcontent-%COMP%], .Distance[_ngcontent-%COMP%]{font-size:13px}}"]});let n=r;return n})();function nt(n,r){if(n&1&&(l(0,"div"),g(1,"map-marker",5),s()),n&2){let i=r.$implicit,e=c(2);a(1),m("position",i.business.geo_direction)("options",e.options)}}function ot(n,r){if(n&1&&(l(0,"google-map",null,3),f(2,nt,2,2,"div",4),s()),n&2){let i=c();a(2),m("ngForOf",i.BuySellArray)}}var De=(()=>{let r=class r{constructor(e){this._httpClient=e,this.options={mapTypeControl:!1,streetViewControl:!1,fullscreenControl:!1},this.markerOptions={draggable:!1},this.apiLoaded=e.jsonp("https://maps.googleapis.com/maps/api/js?key=AIzaSyAAb4SFQe0Kigpu3EiKhR93nC-OUitTKwM","callback").pipe(te(()=>!0),ie(()=>ee(!1)))}ngAfterViewInit(){this.apiLoaded&&setTimeout(()=>{this.fitBounds()},1e3)}fitBounds(){let e=new google.maps.LatLngBounds;for(let t of this.BuySellArray)console.log(t.business.geo_direction.lat),e.extend(new google.maps.LatLng(t.business.geo_direction.lat,t.business.geo_direction.lng));this.map.fitBounds(e)}};r.\u0275fac=function(t){return new(t||r)(u(ue))},r.\u0275cmp=b({type:r,selectors:[["app-bs-mapview"]],viewQuery:function(t,o){if(t&1&&le(q,5),t&2){let p;re(p=se())&&(o.map=p.first)}},inputs:{distances:"distances",BuySellArray:"BuySellArray"},standalone:!0,features:[w],decls:5,vars:5,consts:[[1,"container"],[1,"map"],[3,"BuySellArray","distances"],["map",""],[4,"ngFor","ngForOf"],[3,"position","options"]],template:function(t,o){t&1&&(l(0,"div",0)(1,"div",1),f(2,ot,3,1,"google-map"),h(3,"async"),s(),g(4,"app-bs-gellaryview",2),s()),t&2&&(a(2),S(2,V(3,3,o.apiLoaded)?2:-1),a(2),m("BuySellArray",o.BuySellArray)("distances",o.distances))},dependencies:[C,z,pe,be,q,he,Q],styles:[`.map-container{width:85vw!important}
`],encapsulation:2});let n=r;return n})();function rt(n,r){if(n&1&&(l(0,"div",17),g(1,"app-bs-listview",18),s()),n&2){let i=c();a(1),m("BuySellArray",i.buySellArray)("distances",i.distances)}}function lt(n,r){if(n&1&&(l(0,"div",17),g(1,"app-bs-gellaryview",18),s()),n&2){let i=c();a(1),m("BuySellArray",i.buySellArray)("distances",i.distances)}}function st(n,r){if(n&1&&(l(0,"div",17),g(1,"app-bs-mapview",18),s()),n&2){let i=c();a(1),m("BuySellArray",i.buySellArray)("distances",i.distances)}}var Wt=(()=>{let r=class r{constructor(e,t,o,p,O,K,Fe,ze){this._filterservice=e,this._router=t,this._BuySellService=o,this._messageService=p,this.distanceService=O,this.platformId=K,this.confirmationService=Fe,this.previousRouteService=ze,this.first=20,this.rows=20,this.distances=[],this.galleyView=!1,this.listView=!0,this.mapView=!1,this.buySellArray=[]}ngOnInit(){if(this.previousRouteService.getPreviousUrl()=="/listing"||this.previousRouteService.getPreviousUrl()=="/posting"||this.previousRouteService.getPreviousUrl()=="/buysell")if(j(this.platformId)){let e=localStorage.getItem("filter"),t=[];e?(t=JSON.parse(e),console.log(t),this.getFilteredBuySell(t[0].category,t[0].state,t[0].city),this.filteredBuySell(),this.clearBuysell()):(this.getBuySell(),this.clearBuysell(),this.filteredBuySell())}else this.getBuySell();else this.getBuySell(),this.clearBuysell(),this.filteredBuySell();j(this.platformId)&&this.distanceService.getCurrentLocation().then(e=>{this.currentLocation={latitude:e.latitude,longitude:e.longitude},this.distanceService.setCurrentLocationInLocalStorage(e)}).catch(e=>{console.error("Error getting user location:",e)}),this.buySellArray=this.buySellArray.map(e=>Z(Y({},e),{updated_at:new Date(e.updated_at).toISOString().split("T")[0],datePart:e.updated_at})),this.buySellArray.sort((e,t)=>new Date(t.datePart).getTime()-new Date(e.datePart).getTime())}calculateDistance(e,t){let o=this.distanceService.calculateDistance(e,t);return o!==null?o.toFixed(0):"N/A"}getBuySell(){this.buySellSubscription=this._BuySellService.getBuySell().subscribe({next:e=>{console.log(e),this.buySellArray=e.data,this.getGeoLocations()}})}getFilteredBuySell(e,t,o){this.filteredBuySellSubscription=this._filterservice.getBuySells(e,t,o).subscribe({next:p=>{console.log(p.data.allBuySells),this.buySellArray=p.data.allBuySells,this.getGeoLocations()},error:p=>{console.log(p)}})}filteredBuySell(){this.FilteredSubscribtion=this._filterservice.filteredBuySell.subscribe({next:e=>{console.log("next has come",e),this.buySellArray=e.data.allBuySells,this.getGeoLocations()}})}getGeoLocations(){let e=this.buySellArray.map(p=>p.business.geo_direction),t=new Set(e.map(p=>`${p.lat}_${p.lng}`)),o=Array.from(t).map(p=>{let[O,K]=p.split("_");return{lat:parseFloat(O),lng:parseFloat(K)}});this.UniqueGeoLocations=o,console.log(this.UniqueGeoLocations)}clearBuysell(){this.clearSubscribtion=this._filterservice.clearBuysell.subscribe({next:e=>{this.buySellArray=e,console.log(e),this.getGeoLocations()}})}showGallery(){this.galleyView=!0,this.listView=!1,this.mapView=!1}showList(){this.listView=!0,this.galleyView=!1,this.mapView=!1}showMap(){this.mapView=!0,this.galleyView=!1,this.listView=!1}onPageChange(e){this.first=e.first}};r.\u0275fac=function(t){return new(t||r)(u(M),u(ge),u(Te),u(fe),u(P),u(D),u(U),u(Me))},r.\u0275cmp=b({type:r,selectors:[["app-buy-sell"]],hostAttrs:["ngSkipHydration","true"],standalone:!0,features:[ne([U]),w],decls:30,vars:5,consts:[[1,"posting","mt-5","py-5"],[1,"box","mb-4","mt-lg-0","mt-5"],[1,"container"],[1,"title","mb-5","justify-content-between","align-items-center","d-flex"],[1,""],[1,"form-group","d-none","d-lg-block"],[1,"div-searchBar","justify-content-center","align-items-center","d-flex"],[1,"view","d-flex","justify-content-between"],[1,"suggest"],[1,"m-0"],[1,"views","d-flex","gap-3"],[1,"box","d-flex","gap-2",3,"ngClass","click"],[1,"pi","pi-list","fs-4",2,"color","black"],[1,"m-0","d-none","d-lg-block"],[1,"pi-th-large","pi","fs-4",2,"color","black"],["class","view-data"],["class","view-data "],[1,"view-data"],[3,"BuySellArray","distances"]],template:function(t,o){t&1&&(l(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h3"),d(6,"Top businesses in your Area"),s()(),l(7,"div",5)(8,"div",6),g(9,"app-filter"),s(),g(10,"p-toast")(11,"p-confirmDialog"),s()(),l(12,"div",7)(13,"div",8)(14,"h6",9),d(15,"Suggested Results:"),s()(),l(16,"div",10)(17,"div",11),_("click",function(){return o.showList()}),g(18,"i",12),l(19,"p",13),d(20,"List View"),s()(),l(21,"div",11),_("click",function(){return o.showGallery()}),g(22,"i",14),l(23,"p",13),d(24,"Gallery View"),s()()()()()(),l(25,"div",2),f(26,rt,2,2,"div",15)(27,lt,2,2,"div",15)(28,st,2,2,"div",16),g(29,"div"),s()()),t&2&&(a(17),m("ngClass",o.listView?"active":null),a(4),m("ngClass",o.galleyView?"active":null),a(5),S(26,o.listView?26:-1),a(1),S(27,o.galleyView?27:-1),a(1),S(28,o.mapView?28:-1))},dependencies:[xe,ke,Se,Be,Ce,we,C,ce,Q,je,De,B,ve,ye],styles:[`.buy-sell .container .text{font-family:Lato,sans-serif;font-weight:600}.div-searchBar form{border-radius:12px;display:flex!important;justify-content:center!important;align-items:center!important;background-color:#f9f7f7;padding:11px}.div-searchBar form .p-dropdown{border:none;width:100%;background-color:transparent;margin:0 10px}.div-searchBar form input,.div-searchBar form input:focus,.div-searchBar form input:active{border:none;outline:none}.div-searchBar form small{white-space:nowrap;font-family:Lato,sans-serif;font-size:14px!important}.div-searchBar form .Search-btn{background-color:#000;color:#fff;border-radius:12px;-webkit-border-radius:12px;-moz-border-radius:12px;-ms-border-radius:12px;-o-border-radius:12px;width:90px;height:38px}.div-searchBar form .clear-btn{background-color:#ffbf9d;color:#fff;border-radius:12px;-webkit-border-radius:12px;-moz-border-radius:12px;-ms-border-radius:12px;-o-border-radius:12px;width:90px;height:38px;outline:none;border:none}.div-searchBar form small{font-size:12px}.div-searchBar form ul{padding-left:0rem!important;margin:0!important}.div-searchBar form .p-dropdown-panel .p-dropdown-items{padding:0}.p-datatable>.p-datatable-wrapper{overflow:hidden!important}i{cursor:pointer}
`],encapsulation:2});let n=r;return n})();export{Wt as BuySellComponent};
