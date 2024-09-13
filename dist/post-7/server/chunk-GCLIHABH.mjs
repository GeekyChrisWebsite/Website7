import './polyfills.server.mjs';
import{a as Fe}from"./chunk-Z5Z34M7X.mjs";import{a as Te,b as Ae}from"./chunk-ZBKFFEJI.mjs";import{a as Ce,b as Be}from"./chunk-I32GS2YY.mjs";import"./chunk-5ODGC3JF.mjs";import{a as Ve,b as je,c as Oe,d as De}from"./chunk-G6REF3HD.mjs";import{b as Ie,c as q,d as Pe}from"./chunk-XWZ65BMV.mjs";import"./chunk-JASC4TJK.mjs";import{j as be,k as we,l as Se,n as j}from"./chunk-UT7EDS2Y.mjs";import{m as he,n as ye}from"./chunk-WXT6BTQ4.mjs";import{a as Ee}from"./chunk-TYJ6DJF3.mjs";import{a as Q,b as Me,c as Le}from"./chunk-JCBVK76S.mjs";import{a as ke}from"./chunk-FHBCFMKE.mjs";import{a as N}from"./chunk-FK5NVTLL.mjs";import{a as V}from"./chunk-7I7UKFLT.mjs";import"./chunk-MSAJWQQD.mjs";import"./chunk-TZTUFBVP.mjs";import{e as H,i as ve,n as E}from"./chunk-ORYGPZMT.mjs";import"./chunk-Y3ZZBKIK.mjs";import"./chunk-7MGJQSK6.mjs";import"./chunk-AUOO4LHJ.mjs";import{c as _e,q as xe,t as U,u as A,w as P}from"./chunk-JQFYH3H6.mjs";import{Ab as y,Ba as O,Ca as C,Cc as me,Db as le,Dc as $,Ec as G,Fc as ue,Gb as B,Hb as se,Hc as ge,Ic as fe,Jb as W,Jc as k,Mc as z,Oa as s,Pa as g,Qb as w,Rb as D,Sb as F,U as S,Ub as ce,Vb as pe,Xb as de,Yb as X,Z as v,_ as h,_a as d,bb as oe,eb as f,fb as T,j as ie,jb as o,kb as a,lb as u,ma as R,n as ne,pb as I,rb as x,sb as p,vb as M,w as re,wb as L,xb as ae,yb as m,zb as b}from"./chunk-C2J4IULD.mjs";import{a as ee,b as te}from"./chunk-KRLCULJA.mjs";function Ke(r,l){if(r&1&&u(0,"img",18),r&2){let i=p().$implicit;M("src",i.images[0],C)}}var We=()=>({width:"100%"});function Xe(r,l){if(r&1){let i=I();o(0,"div",4)(1,"p-card",5),f(2,Ke,1,1,"ng-template",6),o(3,"div",7)(4,"div",8)(5,"h5",9),m(6),a()(),o(7,"div",10)(8,"div",11),u(9,"i",12),o(10,"p",13),m(11),o(12,"span"),m(13,"Miles"),a()()()(),o(14,"div")(15,"p",14),m(16),a()(),o(17,"div",15)(18,"button",16),x("click",function(t){let c=v(i).$implicit;return p().makePhoneCall(c.business.phone_number),h(t.stopPropagation())}),m(19," Call Now "),a(),o(20,"button",17),x("click",function(){let n=v(i).$implicit,c=p();return h(c.handleMapClick(n.business.street,n.business.state))}),m(21," Directions "),a()()()()()}if(r&2){let i=l.$implicit,e=p();s(1),oe(se(6,We)),L("routerLink","/BuySelldetails/",i.id,""),s(5),b(i.business.name),s(5),y(" Distance: ",e.calculateDistance(i.business.geo_direction.lat,i.business.geo_direction.lng)," "),s(5),y(" ",e.truncateText(i.content,30)," ")}}var J=(()=>{let l=class l{constructor(e,t,n,c,_){this._filterservie=e,this._cookieService=t,this.router=n,this.distanceService=c,this.platformId=_,this.currentLocation=null,this.first=0,this.rows=10,this.BuySellArray=[],this.maxDescriptionLength=40,this.showFullText=!1,this.isLiked=[],this.likeCountValue=[]}makePhoneCall(e){console.log("Initiating phone call to:",e),window.location.href="tel:"+e}handleMapClick(e,t){if(e&&t){let n=encodeURIComponent(e),c=encodeURIComponent(t),_=`https://www.google.com/maps/search/?api=1&query=${n},+${c}`;window.open(_,"_blank")}}truncateText(e,t){return e.length<=t?e:e.substr(0,t)+"... see more"}likeBusiness(e,t){this._cookieService.get("token")?this.BuySellArray[t].liked==!0?(console.log(this.BuySellArray[t].liked),this._filterservie.addLike(e).subscribe({next:c=>{console.log(c,"like"),this.BuySellArray[t].liked=!1,this.BuySellArray[t].business.likes+=1}})):this._filterservie.addDislikes(e).subscribe({next:c=>{console.log(c,"dislike"),this.BuySellArray[t].liked=!0,this.BuySellArray[t].business.likes-=1}}):this.router.navigate(["/login"])}calculateDistance(e,t){let n=this.distanceService.calculateDistance(e,t);return n!==null?n.toFixed(0):"N/A"}ngOnInit(){z(this.platformId)&&this.distanceService.getCurrentLocation().then(e=>{this.currentLocation={latitude:e.latitude,longitude:e.longitude},this.distanceService.setCurrentLocationInLocalStorage(e)}).catch(e=>{console.error("Error getting user location:",e)}),this.totalRecords=this.BuySellArray.length}onPageChange(e){this.first=e.first,this.rows=e.rows}};l.\u0275fac=function(t){return new(t||l)(g(V),g(N),g(U),g(j),g(R))},l.\u0275cmp=S({type:l,selectors:[["app-bs-gellaryview"]],inputs:{BuySellArray:"BuySellArray",distances:"distances"},standalone:!0,features:[B],decls:5,vars:7,consts:[[1,"container"],[3,"first","rows","totalRecords","onPageChange"],[1,"row","py-2"],["class","col-md-3 col-12 mb-3",4,"ngFor","ngForOf"],[1,"col-md-3","col-12","mb-3"],[3,"routerLink"],["pTemplate","header"],[1,"card-body","text-center"],[1,"title","py-2","text-center"],[1,"m-0"],[1,"py-2"],[1,"d-flex","justify-content-center","align-items-center","gap-1"],[1,"pi","pi-directions","fs-4"],[1,"m-0","distance","text-center"],[1,"text-muted","m-0","p-0"],[1,"btns","justify-content-center","align-items-center","d-flex","gap-3","py-3"],[1,"call-now",3,"click"],[1,"Directions",3,"click"],["alt","Card",1,"w-100",3,"src"]],template:function(t,n){t&1&&(o(0,"div",0)(1,"p-paginator",1),x("onPageChange",function(_){return n.onPageChange(_)}),a(),o(2,"div",2),f(3,Xe,22,7,"div",3),a(),o(4,"p-paginator",1),x("onPageChange",function(_){return n.onPageChange(_)}),a()()),t&2&&(s(1),d("first",n.first)("rows",n.rows)("totalRecords",n.BuySellArray.length),s(2),d("ngForOf",n.BuySellArray.slice(n.first,n.first+n.rows)),s(1),d("first",n.first)("rows",n.rows)("totalRecords",n.BuySellArray.length))},dependencies:[k,$,P,A,q,Ie,E,we,be],styles:["span[_ngcontent-%COMP%]{color:#ffbf9d;font-weight:700}i[_ngcontent-%COMP%]{color:#ffbf9d}.div-like[_ngcontent-%COMP%]{position:absolute;top:203px;right:16px;background-color:#fff;width:45px;height:45px;border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%;justify-content:center;align-items:center;display:flex}.likes[_ngcontent-%COMP%]{position:absolute;top:294px;right:28px}.col-md-3[_ngcontent-%COMP%]{position:relative}.call-now[_ngcontent-%COMP%]{background-color:#000;color:#fff;width:120px;height:40px;border:none;outline:none;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px}.Directions[_ngcontent-%COMP%]{background-color:#ffbf9d;width:120px;height:40px;border:none;outline:none;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;color:#000}img[_ngcontent-%COMP%]{height:272px;width:300px;background-color:#000;border-radius:7px!important;-webkit-border-radius:7px!important;-moz-border-radius:7px!important;-ms-border-radius:7px!important;-o-border-radius:7px!important}.p-card[_ngcontent-%COMP%]   .p-card-content[_ngcontent-%COMP%]{padding:10px!important}.p-card[_ngcontent-%COMP%]   .p-card-body[_ngcontent-%COMP%]{padding:0!important}"]});let r=l;return r})();function Ye(r,l){if(r&1&&(o(0,"tr",6)(1,"td",7)(2,"h6",8),m(3),w(4,"date"),a()()()),r&2){let i=l.$implicit;s(3),b(F(4,1,i.updated_at,"MM/dd/yyyy"))}}function Ze(r,l){if(r&1&&(u(0,"div",35),w(1,"sanatizer")),r&2){let i=p(2).$implicit,e=p(2);d("innerHTML",D(1,1,i!=null&&i.content?i==null?null:i.content.slice(0,e.maxDescriptionLength):""),O)}}var Ue=(r,l)=>({"font-weight":r,"font-style":l});function et(r,l){if(r&1){let i=I();o(0,"div",10)(1,"div",11)(2,"div",12)(3,"div",13)(4,"img",14),x("error",function(t){v(i);let n=p(3);return h(n.onImageError(t))}),a()(),o(5,"div",15)(6,"div",16)(7,"div",17)(8,"div",18)(9,"h5",19),m(10),a()()(),o(11,"div",20),u(12,"i",21),o(13,"p",22),m(14),a()(),o(15,"div",23)(16,"small",24),f(17,Ze,2,3,"ng-template",null,25,X),a()(),u(19,"p",26),w(20,"sanatizer"),w(21,"truncateText"),o(22,"div",27)(23,"div",28),u(24,"i",29),o(25,"p",30),m(26),o(27,"span"),m(28,"miles"),a()()()(),o(29,"div",31)(30,"div",32)(31,"button",33),x("click",function(){v(i);let t=p().$implicit,n=p(2);return h(n.makePhoneCall(t.business.phone_number))}),m(32," Call "),a(),o(33,"button",34),x("click",function(){v(i);let t=p().$implicit,n=p(2);return h(n.handleMapClick(t.business.street,t.business.state))}),m(34," Directions "),a()()()()()()()()}if(r&2){let i=p().$implicit,e=p(2);s(4),M("src",i.images[0],C),L("routerLink","/BuySelldetails/",i.id,""),s(6),y(" ",i.business.name," "),s(4),y(" ",i.buySellTime," "),s(2),d("ngStyle",W(12,Ue,i!=null&&i.bold?"bold":"normal",i!=null&&i.italic?"italic":"normal")),s(3),d("innerHTML",D(20,7,F(21,9,i.content,50)),O),s(7),y(" Distance: ",e.calculateDistance(i.business.geo_direction.lat,i.business.geo_direction.lng)," ")}}function tt(r,l){if(r&1&&f(0,et,35,15,"div",9),r&2){let i=p(2);d("ngIf",i.BuySellArray)}}function it(r,l){if(r&1&&(o(0,"div",2)(1,"p-table",3),f(2,Ye,5,4,"ng-template",4)(3,tt,1,1,"ng-template",5),a()()),r&2){let i=p();s(1),d("value",i.BuySellArray)("sortOrder",-1)("rows",20)("paginator",!0)("scrollable",!0)}}function nt(r,l){if(r&1&&(o(0,"tr",6)(1,"td",7)(2,"h6",37),m(3),w(4,"date"),a()()()),r&2){let i=l.$implicit;s(3),b(F(4,1,i.updated_at,"MM/dd/yyyy"))}}function rt(r,l){if(r&1&&(o(0,"span"),u(1,"p",35),a()),r&2){let i=p(2).$implicit;s(1),d("innerHTML",i==null?null:i.content,O)}}function ot(r,l){if(r&1&&u(0,"p",35),r&2){let i=p(2).$implicit,e=p(2);d("innerHTML",e.truncateText(i==null?null:i.content,e.maxDescriptionLengthmpo),O)}}function at(r,l){if(r&1&&(o(0,"div",27)(1,"div",51),u(2,"i",52),o(3,"p",53),m(4),a()()()),r&2){let i=p(2).$implicit,e=p(2);s(4),y(" ",e.calculateDistance(i.business.geo_direction.lat,i.business.geo_direction.lng)," Miles ")}}function lt(r,l){if(r&1){let i=I();o(0,"div",39)(1,"div",40)(2,"div",41)(3,"div",42)(4,"img",43),x("error",function(t){v(i);let n=p(3);return h(n.onImageError(t))}),a()(),o(5,"div",44)(6,"div",45)(7,"div",17)(8,"div",37)(9,"h6",46),m(10),w(11,"truncateText"),a()()(),o(12,"small",24),f(13,rt,2,1,"span",47)(14,ot,1,1,"ng-template",null,25,X),a(),f(16,at,5,1,"div",48),o(17,"div",49)(18,"div",50)(19,"button",33),x("click",function(){v(i);let t=p().$implicit,n=p(2);return h(n.makePhoneCall(t.business.phone_number))}),m(20," Call "),a(),o(21,"button",34),x("click",function(){v(i);let t=p().$implicit,n=p(2);return h(n.handleMapClick(t.business.street,t.business.state))}),m(22," Directions "),a()()()()()()()()}if(r&2){let i=ae(15),e=p().$implicit,t=p(2);s(4),M("src",e.images[0],C),L("routerLink","/postingdetails/",e.id,""),s(6),y(" ",F(11,7,e.business.name,15)," "),s(2),d("ngStyle",W(10,Ue,e!=null&&e.bold?"bold":"normal",e!=null&&e.italic?"italic":"normal")),s(1),d("ngIf",t.showFullText)("ngIfElse",i),s(3),d("ngIf",t.distances)}}function st(r,l){if(r&1&&f(0,lt,23,13,"div",38),r&2){let i=p(2);d("ngIf",i.BuySellArray)}}function ct(r,l){if(r&1&&(o(0,"div",36)(1,"p-table",3),f(2,nt,5,4,"ng-template",4)(3,st,1,1,"ng-template",5),a()()),r&2){let i=p();s(1),d("value",i.BuySellArray)("sortOrder",-1)("rows",20)("paginator",!0)("scrollable",!0)}}var He=(()=>{let l=class l{constructor(e,t,n,c){this._filterservie=e,this._cookieService=t,this.router=n,this.distanceService=c,this.maxDescriptionLength=44,this.showFullText=!1,this.BuySellArray=[],this.isLiked=[],this.likeCountValue=[],this.maxDescriptionLengthmpo=14,this.customer={id:1,images:["../../assets/img/footer/default-image.jpg"]}}truncateText(e,t){return e.length<=t?e:e.substr(0,t)+""}makePhoneCall(e){console.log("Initiating phone call to:",e),window.location.href="tel:"+e}handleMapClick(e,t){if(e&&t){let n=encodeURIComponent(e),c=encodeURIComponent(t),_=`https://www.google.com/maps/search/?api=1&query=${n},+${c}`;window.open(_,"_blank")}}toggleLike(e){this.isLiked[e]=!this.isLiked[e],this.likeCountValue[e]=this.isLiked[e]?this.likeCountValue[e]+1:this.likeCountValue[e]-1,this.isLiked[e]?this.BuySellArray[e].likes+=1:this.BuySellArray[e].likes-=1}likeBusiness(e,t){this._cookieService.get("token")?this.BuySellArray[t].liked==!0?(console.log(this.BuySellArray[t].liked),this._filterservie.addLike(e).subscribe({next:c=>{console.log(c,"like"),this.BuySellArray[t].liked=!1,this.BuySellArray[t].business.likes+=1}})):this._filterservie.addDislikes(e).subscribe({next:c=>{console.log(c,"dislike"),this.BuySellArray[t].liked=!0,this.BuySellArray[t].business.likes-=1}}):this.router.navigate(["/login"])}truncatedname(e){return e.length<=24?e:e.substring(0,24)}onImageError(e){let t=e.target;t.src="../../assets/img/footer/default-image.jpg"}calculateDistance(e,t){let n=this.distanceService.calculateDistance(e,t);return n!==null?n.toFixed(0):"N/A"}};l.\u0275fac=function(t){return new(t||l)(g(V),g(N),g(U),g(j))},l.\u0275cmp=S({type:l,selectors:[["app-bs-listview"]],inputs:{BuySellArray:"BuySellArray",distances:"distances"},standalone:!0,features:[B],decls:2,vars:2,consts:[["class","web-view",4,"ngIf"],["class","mobileb-view",4,"ngIf"],[1,"web-view"],["sortField","updated_at","sortMode","single","rowGroupMode","subheader","groupRowsBy","updated_at","paginatorPosition","both",3,"value","sortOrder","rows","paginator","scrollable"],["pTemplate","groupheader"],["pTemplate","body"],[1,"p-rowgroup-header"],["colspan","5"],[1,"ms-5","ps-5"],["class","data d-flex gap-2 justify-content-center align-items-center py-3 row px-4",4,"ngIf"],[1,"data","d-flex","gap-2","justify-content-center","align-items-center","py-3","row","px-4"],[1,"card","my-0","py-0","px-0",2,"max-width","1200px"],[1,"row","g-0"],[1,"col-5",2,"width","27%"],["alt","...",1,"rounded-start","black",2,"height","195px","width","258px","object-fit","cover",3,"src","routerLink","error"],[1,"col-7",2,"width","70%"],[1,"card-body","card-body","d-flex","flex-column","align-items-between","justify-content-between","px-0","py-0",2,"height","100%"],[1,"d-flex","gap-1","justify-content-between","align-items-center"],[1,"m-0"],[1,"title-name","m-0"],[1,"d-flex","gap-1","justify-content-start","align-items-center"],[1,"bx","bx-world","fs-6",2,"color","#6b6666"],[1,"title-time","text-muted","m-0"],[1,"d-none","d-lg-block"],[1,"description",3,"ngStyle"],["truncatedContent",""],[1,"m-0",3,"innerHTML"],[1,"py-1"],[1,"d-flex","justify-content-start","align-items-start"],[1,"pi","pi-directions","fs-4"],[1,"px-1","m-0","distance"],[1,"btns","justify-content-between","align-items-end","d-flex","gap-1","py-2"],[1,"btns","d-flex","flex-column","gap-2"],[1,"call-now",3,"click"],[1,"Directions",3,"click"],[3,"innerHTML"],[1,"mobileb-view"],[1,""],["class","d-flex gap-2 justify-content-center align-items-center py-3 row px-4",4,"ngIf"],[1,"d-flex","gap-2","justify-content-center","align-items-center","py-3","row","px-4"],[1,"card","py-0","px-0"],[1,"row","gap-2"],[1,"col-6"],["alt","...",1,"rounded-start","black",2,"height","134px","width","177px","object-fit","contain",3,"src","routerLink","error"],[1,"col-4","py-1"],[1,"card-body","card-body","d-flex","flex-column","align-items-between","justify-content-between","px-0","py-0"],[1,"title-name","m-0",2,"font-size","14px","white-space","nowrap"],[4,"ngIf","ngIfElse"],["class","py-1",4,"ngIf"],[1,"btns","justify-content-between","align-items-end","d-flex","gap-1"],[1,"btns","d-flex","flex-column","gap-2","justify-content-center","align-items-center"],[1,"d-flex","justify-content-start","align-items-start","gap-1"],[1,"pi","pi-directions","fs-6"],[1,"m-0","distance",2,"font-size","12px"]],template:function(t,n){t&1&&f(0,it,4,5,"div",0)(1,ct,4,5,"div",1),t&2&&(d("ngIf",n.BuySellArray),s(1),d("ngIf",n.BuySellArray))},dependencies:[k,G,ue,fe,De,Oe,E,P,A,Ee,ke],styles:[".mobileb-view[_ngcontent-%COMP%]{display:none}#likeIcon[_ngcontent-%COMP%], img[_ngcontent-%COMP%]{cursor:pointer}.web-view[_ngcontent-%COMP%]{display:block}.miles[_ngcontent-%COMP%]{color:#258a8b;font-weight:700}.pi-directions[_ngcontent-%COMP%]{color:#258a8b}@media (max-width: 767px){.mobileb-view[_ngcontent-%COMP%]{display:block}.web-view[_ngcontent-%COMP%]{display:none}.call-now[_ngcontent-%COMP%]{border:none;outline:none;width:125px!important;height:25px!important;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;font-size:10px;color:#000!important}.Directions[_ngcontent-%COMP%]{background-color:#ffbf9d;border:none;outline:none;width:125px!important;height:25px!important;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;color:#000!important;font-size:10px}.miles[_ngcontent-%COMP%], .Distance[_ngcontent-%COMP%]{font-size:13px}p[_ngcontent-%COMP%]{margin:0!important;font-size:12px!important}.description[_ngcontent-%COMP%]{font-size:12px!important}}"]});let r=l;return r})();function pt(r,l){if(r&1&&(o(0,"div"),u(1,"map-marker",5),a()),r&2){let i=l.$implicit,e=p(2);s(1),d("position",i.business.geo_direction)("options",e.options)}}function dt(r,l){if(r&1&&(o(0,"google-map",null,3),f(2,pt,2,2,"div",4),a()),r&2){let i=p();s(2),d("ngForOf",i.BuySellArray)}}var Ne=(()=>{let l=class l{constructor(e){this._httpClient=e,this.options={mapTypeControl:!1,streetViewControl:!1,fullscreenControl:!1},this.markerOptions={draggable:!1},this.apiLoaded=e.jsonp("https://maps.googleapis.com/maps/api/js?key=AIzaSyAAb4SFQe0Kigpu3EiKhR93nC-OUitTKwM","callback").pipe(ne(()=>!0),re(()=>ie(!1)))}ngAfterViewInit(){this.apiLoaded&&setTimeout(()=>{this.fitBounds()},1e3)}fitBounds(){let e=new google.maps.LatLngBounds;for(let t of this.BuySellArray)console.log(t.business.geo_direction.lat),e.extend(new google.maps.LatLng(t.business.geo_direction.lat,t.business.geo_direction.lng));this.map.fitBounds(e)}};l.\u0275fac=function(t){return new(t||l)(g(_e))},l.\u0275cmp=S({type:l,selectors:[["app-bs-mapview"]],viewQuery:function(t,n){if(t&1&&pe(Q,5),t&2){let c;ce(c=de())&&(n.map=c.first)}},inputs:{distances:"distances",BuySellArray:"BuySellArray"},standalone:!0,features:[B],decls:5,vars:5,consts:[[1,"container"],[1,"map"],[3,"BuySellArray","distances"],["map",""],[4,"ngFor","ngForOf"],[3,"position","options"]],template:function(t,n){t&1&&(o(0,"div",0)(1,"div",1),f(2,dt,3,1,"google-map"),w(3,"async"),a(),u(4,"app-bs-gellaryview",2),a()),t&2&&(s(2),T(2,D(3,3,n.apiLoaded)?2:-1),s(2),d("BuySellArray",n.BuySellArray)("distances",n.distances))},dependencies:[k,$,ge,Le,Q,Me,J],styles:[`.map-container{width:85vw!important}
`],encapsulation:2});let r=l;return r})();function mt(r,l){if(r&1&&(o(0,"button",39)(1,"a",40),u(2,"img",41),a()()),r&2){let i=p().$implicit;s(1),d("href",i.business.booking_url,C)}}function ut(r,l){if(r&1){let i=I();o(0,"section",24)(1,"div",25),u(2,"img",26),a(),o(3,"div",27)(4,"div",28)(5,"h6",29),m(6),a()(),o(7,"h6"),m(8),a()(),o(9,"div",30)(10,"div",31),f(11,mt,3,1,"button",32),o(12,"button",33),x("click",function(t){let c=v(i).$implicit;return p(2).makePhoneCall(c.business.phone_number),h(t.stopPropagation())}),u(13,"img",34),a(),o(14,"button",35),x("click",function(){let n=v(i).$implicit,c=p(2);return h(c.handleMapClick(n.business.street,n.business.state))}),u(15,"img",36),a()()(),o(16,"div",37)(17,"span",38),m(18,"VIP"),a()()()}if(r&2){let i=l.$implicit;s(1),L("routerLink","/BuySelldetails/",i.id,""),s(1),M("src",i.images[0]||"../../../../assets/6-post-image-834823.png",C),s(4),b(i.title),s(2),b(i.business.price),s(3),d("ngIf",i.business.booking_url!==null&&i.business.booking_url.trim()!=="")}}function gt(r,l){if(r&1&&(o(0,"div",19)(1,"h2",20),m(2,"VIP Buy&Sell"),a(),o(3,"div")(4,"p-carousel",21,22),f(6,ut,19,5,"ng-template",23),a()()()),r&2){let i=p();s(4),d("value",i.vipBuysellArray)("numVisible",3)("numScroll",1)("responsiveOptions",i.responsiveOptions)("circular",!0)("autoplayInterval",2e3)}}function ft(r,l){if(r&1&&(o(0,"div",42)(1,"p"),u(2,"i",43),m(3),a(),o(4,"p"),m(5),a(),o(6,"p"),m(7),a()()),r&2){let i=p();s(3),y("",i.filter[0]==null?null:i.filter[0].category," > "),s(2),y("",i.filter[0]==null?null:i.filter[0].state," >"),s(2),b(i.filter[0]==null?null:i.filter[0].city)}}function _t(r,l){if(r&1&&(o(0,"div",44),u(1,"app-bs-listview",45),a()),r&2){let i=p();s(1),d("BuySellArray",i.buySellArray)("distances",i.distances)}}function xt(r,l){if(r&1&&(o(0,"div",44),u(1,"app-bs-gellaryview",45),a()),r&2){let i=p();s(1),d("BuySellArray",i.buySellArray)("distances",i.distances)}}function vt(r,l){if(r&1&&(o(0,"div",44),u(1,"app-bs-mapview",45),a()),r&2){let i=p();s(1),d("BuySellArray",i.buySellArray)("distances",i.distances)}}var ui=(()=>{let l=class l{constructor(e,t,n,c,_,K,qe,Qe){this._filterservice=e,this._router=t,this._BuySellService=n,this._messageService=c,this.distanceService=_,this.platformId=K,this.confirmationService=qe,this.previousRouteService=Qe,this.first=20,this.rows=20,this.distances=[],this.galleyView=!1,this.listView=!0,this.mapView=!1,this.buySellArray=[]}ngOnInit(){if(this.vipBuysell(),this.responsiveOptions=[{breakpoint:"1199px",numVisible:3,numScroll:3},{breakpoint:"991px",numVisible:1,numScroll:1},{breakpoint:"768px",numVisible:1,numScroll:1},{breakpoint:"576px",numVisible:1,numScroll:1}],this.previousRouteService.getPreviousUrl()=="/listing"||this.previousRouteService.getPreviousUrl()=="/posting"||this.previousRouteService.getPreviousUrl()=="/buysell")if(z(this.platformId)){let t=localStorage.getItem("filter"),n=[];t?(n=JSON.parse(t),console.log(n),this.getFilteredBuySell(n[0].category,n[0].state,n[0].city),this.filteredBuySell(),this.clearBuysell()):(this.getBuySell(),this.clearBuysell(),this.filteredBuySell())}else this.getBuySell();else this.getBuySell(),this.clearBuysell(),this.filteredBuySell();z(this.platformId)&&this.distanceService.getCurrentLocation().then(t=>{this.currentLocation={latitude:t.latitude,longitude:t.longitude},this.distanceService.setCurrentLocationInLocalStorage(t)}).catch(t=>{console.error("Error getting user location:",t)});let e=localStorage.getItem("filter");e&&(this.filter=JSON.parse(e)),this.loadFilter()}loadFilter(){let e=localStorage.getItem("filter");e&&(this.filter=JSON.parse(e))}calculateDistance(e,t){let n=this.distanceService.calculateDistance(e,t);return n!==null?n.toFixed(0):"N/A"}getBuySell(){this.buySellSubscription=this._BuySellService.getBuySell().subscribe({next:e=>{console.log(e),this.buySellArray=e.data,this.getGeoLocations(),this.buySellArray=this.buySellArray.map(t=>te(ee({},t),{updated_at:new Date(t.updated_at).toISOString().split("T")[0],datePart:t.updated_at})),this.buySellArray.sort((t,n)=>new Date(n.datePart).getTime()-new Date(t.datePart).getTime())}})}getFilteredBuySell(e,t,n){this.filteredBuySellSubscription=this._filterservice.getBuySells(e,t,n).subscribe({next:c=>{console.log(c.data.allBuySells),this.buySellArray=c.data.allBuySells,this.getGeoLocations()},error:c=>{console.log(c)}})}filteredBuySell(){this.FilteredSubscribtion=this._filterservice.filteredBuySell.subscribe({next:e=>{console.log("next has come",e),this.buySellArray=e.data.allBuySells,this.getGeoLocations()}})}getGeoLocations(){let e=this.buySellArray.map(c=>c.business.geo_direction),t=new Set(e.map(c=>`${c.lat}_${c.lng}`)),n=Array.from(t).map(c=>{let[_,K]=c.split("_");return{lat:parseFloat(_),lng:parseFloat(K)}});this.UniqueGeoLocations=n,console.log(this.UniqueGeoLocations)}clearBuysell(){this.clearSubscribtion=this._filterservice.clearBuysell.subscribe({next:e=>{this.buySellArray=e,console.log(e),this.getGeoLocations()}})}showGallery(){this.galleyView=!0,this.listView=!1,this.mapView=!1}showList(){this.listView=!0,this.galleyView=!1,this.mapView=!1}showMap(){this.mapView=!0,this.galleyView=!1,this.listView=!1}onPageChange(e){this.first=e.first}vipBuysell(){this._BuySellService.getVipBuySell().subscribe(e=>{this.vipBuysellArray=e.data,console.log(this.vipBuysellArray)})}makePhoneCall(e){console.log("Initiating phone call to:",e),window.location.href="tel:"+e}handleMapClick(e,t){if(e&&t){let n=encodeURIComponent(e),c=encodeURIComponent(t),_=`https://www.google.com/maps/search/?api=1&query=${n},+${c}`;window.open(_,"_blank")}}};l.\u0275fac=function(t){return new(t||l)(g(V),g(xe),g(Fe),g(ve),g(j),g(R),g(H),g(Pe))},l.\u0275cmp=S({type:l,selectors:[["app-buy-sell"]],hostAttrs:["ngSkipHydration","true"],standalone:!0,features:[le([H]),B],decls:33,vars:7,consts:[["ngSkipHydration","",1,"slider","py-5"],["class","container py-5",4,"ngIf"],[1,"posting"],[1,"box","mb-4","mt-lg-0","mt-5"],[1,"container"],[1,"title","mb-5","justify-content-between","align-items-center","d-flex"],[1,""],["class","d-lg-none d-block d-flex align-items-center justify-content-center",4,"ngIf"],[1,"form-group","d-none","d-lg-block"],[1,"div-searchBar","justify-content-center","align-items-center","d-flex"],[1,"view","d-flex","justify-content-between"],[1,"suggest"],[1,"m-0"],[1,"views","d-flex","gap-3"],[1,"box","d-flex","gap-2",3,"ngClass","click"],[1,"pi","pi-list","fs-4",2,"color","black"],[1,"m-0","d-none","d-lg-block"],[1,"pi-th-large","pi","fs-4",2,"color","black"],["class","view-data"],[1,"container","py-5"],[1,"text-center","py-5","h1"],[3,"value","numVisible","numScroll","responsiveOptions","circular","autoplayInterval"],["carousel",""],["pTemplate","item"],[1,"card"],[1,"mb-3","imagesdiv","d-flex",3,"routerLink"],["width","400","height","450",1,"vip-img","img-fluid","flex-grow-1",3,"src"],[1,"d-flex","align-items-center","justify-content-center","mx-2"],[1,"author","mb-1","d-flex","flex-column","align-items-center"],[1,"m-0","text-center"],[1,"body","bg-white","rounded-bottom","py-3"],[1,"btns","d-flex","justify-content-center","align-items-center","gap-3","py-1"],["class","date",4,"ngIf"],[1,"call",3,"click"],["src","../../../assets/img/posting/image 1.png","alt","Call"],[1,"location",3,"click"],["src","../../../assets/img/posting/image 2.png","alt",""],[1,"position-absolute","label"],[1,"my-2"],[1,"date"],["target","_blank",3,"href"],["src","../../../assets/img/posting/image 3.png","alt","Image"],[1,"d-lg-none","d-block","d-flex","align-items-center","justify-content-center"],[1,"pi","pi-filter-fill",2,"color","#8dd3bb"],[1,"view-data"],[3,"BuySellArray","distances"]],template:function(t,n){t&1&&(o(0,"section",0),f(1,gt,7,6,"div",1),a(),o(2,"section",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"h3"),m(8,"Top businesses in your Area"),a(),f(9,ft,8,3,"div",7),a(),o(10,"div",8)(11,"div",9),u(12,"app-filter"),a(),u(13,"p-toast")(14,"p-confirmDialog"),a()(),o(15,"div",10)(16,"div",11)(17,"h6",12),m(18,"Suggested Results:"),a()(),o(19,"div",13)(20,"div",14),x("click",function(){return n.showList()}),u(21,"i",15),o(22,"p",16),m(23,"List View"),a()(),o(24,"div",14),x("click",function(){return n.showGallery()}),u(25,"i",17),o(26,"p",16),m(27,"Gallery View"),a()()()()()(),o(28,"div",4),f(29,_t,2,2,"div",18)(30,xt,2,2,"div",18)(31,vt,2,2,"div",18),u(32,"div"),a()()),t&2&&(s(1),d("ngIf",n.vipBuysellArray),s(8),d("ngIf",n.filter&&n.filter.length>0),s(11),d("ngClass",n.listView?"active":null),s(4),d("ngClass",n.galleyView?"active":null),s(5),T(29,n.listView?29:-1),s(1),T(30,n.galleyView?30:-1),s(1),T(31,n.mapView?31:-1))},dependencies:[q,E,Be,Ce,Se,je,me,G,Ve,Ae,Te,k,J,He,Ne,P,A,he,ye],styles:[`.buy-sell .container .text{font-family:Lato,sans-serif;font-weight:600}.slider{background-color:#f1f3f4}.slider .container .h1{color:#ddac17;line-height:48.76px;font-weight:700}.slider .container .gold{color:#ddac17;font-size:16px}.slider .row{position:relative}.slider .corner-image{position:absolute;top:-1px;right:7px}.slider .text-loction{font-family:Lato,sans-serif}.slider .p-carousel-item-start,.slider .p-carousel-item-end{transform:scale(.8);-webkit-transform:scale(.8);-moz-transform:scale(.8);-ms-transform:scale(.8);-o-transform:scale(.8)}.slider .date{background:linear-gradient(180deg,rgba(255,216,101,.5) 0%,rgba(255,216,101,.186535) 62.69%,rgba(255,216,101,0) 100%);width:72px;height:40px;outline:none;border:none;box-shadow:0 4px 4px #00000040;border-radius:3px}.slider .call{background:linear-gradient(180deg,rgba(16,148,51,.5) 0%,rgba(52,168,83,0) 100%);width:72px;height:40px;outline:none;border:none;box-shadow:0 4px 4px #00000040;border-radius:3px}.slider .location{background:linear-gradient(180deg,rgba(0,110,253,.5) 0%,rgba(24,119,242,0) 100%);width:72px;height:40px;outline:none;border:none;box-shadow:0 4px 4px #00000040;border-radius:3px}.slider .searchBar .container .div-searchBar2 .form-group{flex:1;position:relative;margin:0;padding:0}.slider .searchBar .container .div-searchBar2 .form-group .div-searchBar form{display:flex!important;justify-content:center!important;align-items:center!important;gap:10rem;margin-right:228px}.slider .searchBar .container .div-searchBar2 .form-group .div-searchBar form .p-dropdown{border:none;width:100%;background-color:transparent;margin:0 15px}.slider .searchBar .container .div-searchBar2 .form-group .div-searchBar form input,.slider .searchBar .container .div-searchBar2 .form-group .div-searchBar form input:focus,.slider .searchBar .container .div-searchBar2 .form-group .div-searchBar form input:active{border:none;outline:none}.slider .searchBar .container .div-searchBar2 .form-group .div-searchBar form small{white-space:nowrap;font-family:Lato,sans-serif;font-size:14px!important}.slider .searchBar .container .div-searchBar2 .form-group .div-searchBar form .Search-btn{background-color:#0f3d3e;color:#fff;position:absolute;right:-6px;border-radius:12px;-webkit-border-radius:12px;-moz-border-radius:12px;-ms-border-radius:12px;-o-border-radius:12px;width:100px;height:38px}.slider .searchBar .container .div-searchBar2 .form-group .div-searchBar form small{font-size:12px}@media (max-width: 767px){.slider .searchBar{display:none}}.p-carousel-item-start,.p-carousel-item-end{transform:scale(.8)}.p-carousel-item-active .card{border-radius:34px;background:#fff;width:fit-content}.p-carousel-item{position:relative;display:flex;justify-content:center;align-items:center}.card{cursor:pointer;overflow:hidden}.card .label{width:150px;text-align:center;top:20px;right:-40px;box-shadow:0 2px 4px #0003;background:linear-gradient(45deg,#FCD34D,#B38728);transform:rotate(45deg);text-transform:uppercase;border:2px dashed #fff;color:#fff;font-weight:700;font-size:10px}.card .label span{font-size:20px}.cal{padding:8px 35px;border-radius:3px;background:linear-gradient(180deg,rgba(255,216,101,.5) 0%,rgba(255,216,101,.19) 62.69%,rgba(255,216,101,0) 100%);box-shadow:0 4px 4px #00000040}.tele{color:#000}.phone{padding:8px 35px;border-radius:3px;background:linear-gradient(180deg,rgba(16,148,51,.5) 0%,rgba(52,168,83,0) 100%);box-shadow:0 4px 4px #00000040}.geo{padding:8px 35px;border-radius:3px;background:linear-gradient(180deg,rgba(0,110,253,.5) 0%,rgba(24,119,242,0) 100%);box-shadow:0 4px 4px #00000040}.geoLink:hover{color:#000}.buttons{margin-bottom:10px}.p-carousel-container{margin-bottom:25px}.imagesdiv,.imagesdiv .vip-img{border-radius:34px 34px 0 0}.author>h6{color:#ddac17}.golden{color:#ddac17}.transparent{cursor:default}app-spinner{display:flex;justify-content:center}.booking_url{color:#000}i,.d-none{cursor:pointer}h3{font-family:Lato,sans-serif}.div-searchBar form{border-radius:12px;display:flex!important;justify-content:center!important;align-items:center!important;background-color:#f9f7f7;padding:11px}.div-searchBar form .p-dropdown{border:none;width:100%;background-color:transparent;margin:0 10px}.div-searchBar form input,.div-searchBar form input:focus,.div-searchBar form input:active{border:none;outline:none}.div-searchBar form small{white-space:nowrap;font-family:Lato,sans-serif;font-size:14px!important}.div-searchBar form .Search-btn{background-color:#0f3d3e;color:#fff;border-radius:12px;-webkit-border-radius:12px;-moz-border-radius:12px;-ms-border-radius:12px;-o-border-radius:12px;width:90px;height:38px}.div-searchBar form .clear-btn{background-color:#ffbf9d;border-radius:12px;-webkit-border-radius:12px;-moz-border-radius:12px;-ms-border-radius:12px;-o-border-radius:12px;width:90px;height:38px;outline:none;border:none}.div-searchBar form small{font-size:12px}.div-searchBar form ul{padding-left:0rem!important;margin:0!important;cursor:pointer}.div-searchBar form .p-dropdown-panel .p-dropdown-items{padding:0}i,.d-lg-block{cursor:pointer}.p-carousel-indicators{padding-left:27px}@media (max-width: 767px){.p-carousel-item-start,.p-carousel-item-end{transform:none!important;-webkit-transform:none!important;-moz-transform:none!important;-ms-transform:none!important;-o-transform:none!important}}
`],encapsulation:2});let r=l;return r})();export{ui as BuySellComponent};
