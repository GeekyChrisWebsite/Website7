import{a as Oe}from"./chunk-YAQQWGLR.js";import{a as ke,b as Ie}from"./chunk-P72YY5OY.js";import{a as Me,b as Le}from"./chunk-L5KREIL4.js";import"./chunk-7MHNBSLW.js";import{a as Pe,b as Ve,c as Ee,d as je,e as De}from"./chunk-376CFMF4.js";import{b as xe,c as H,d as Se,e as Ae}from"./chunk-O6SOSBES.js";import{j,k as be,l as we,n as Te}from"./chunk-NN7MHJ6T.js";import{a as E}from"./chunk-MDLD5AMO.js";import{a as q,b as Ce,c as Be}from"./chunk-T4PXBOKC.js";import"./chunk-PVNN46WA.js";import"./chunk-77ZL3MI5.js";import"./chunk-OIYTWRTJ.js";import"./chunk-24KCW4DQ.js";import{a as N}from"./chunk-POW34RVY.js";import{m as he,n as ye}from"./chunk-PX4PHDST.js";import{e as U,i as _e,n as V}from"./chunk-CIY2GROO.js";import"./chunk-KMXITLPI.js";import{c as fe,m as ve,o as G,p as A,r as P}from"./chunk-EOFWODBS.js";import{A as ie,Ab as u,Ac as ge,Bb as L,Bc as B,Cb as y,Dc as F,Eb as re,Fa as J,Ga as S,Hb as C,Ib as oe,Kb as le,Qa as s,Ra as g,Rb as b,Sb as D,Tb as O,Vb as ae,Wb as se,Y as w,Yb as ce,Zb as pe,a as Y,ab as d,b as Z,ba as _,ca as h,db as ne,gb as f,hb as T,lb as o,mb as a,n as ee,nb as m,qa as z,r as te,rb as k,tb as v,ub as c,uc as de,vc as R,wc as $,xb as I,xc as me,yb as M,zc as ue}from"./chunk-ZFJE44N6.js";function Qe(n,l){if(n&1&&m(0,"img",17),n&2){let i=c().$implicit;I("src",i.images[0],S)}}var Ke=()=>({width:"100%"});function Je(n,l){if(n&1){let i=k();o(0,"div",4)(1,"p-card",5),f(2,Qe,1,1,"ng-template",6),o(3,"div",7)(4,"div",8)(5,"h5"),u(6),a()(),o(7,"div",9)(8,"div",10),m(9,"i",11),o(10,"p",12),u(11),o(12,"span"),u(13,"Miles"),a()()()(),o(14,"div")(15,"p",13),u(16),a()(),o(17,"div",14)(18,"button",15),v("click",function(){let r=_(i).$implicit,p=c();return h(p.makePhoneCall(r.phone_number))}),u(19," Call Now "),a(),o(20,"button",16),v("click",function(){let r=_(i).$implicit,p=c();return h(p.handleMapClick(r.business.geo_direction))}),u(21," Directions "),a()()()()()}if(n&2){let i=l.$implicit,e=c();s(1),ne(oe(6,Ke)),M("routerLink","/BuySelldetails/",i.id,""),s(5),L(i.business.name),s(5),y(" Distance: ",e.calculateDistance(i.business.geo_direction.lat,i.business.geo_direction.lng)," "),s(5),y(" ",e.truncateText(i.content,30)," ")}}var Q=(()=>{let l=class l{constructor(e,t,r,p,x){this._filterservie=e,this._cookieService=t,this.router=r,this.distanceService=p,this.platformId=x,this.currentLocation=null,this.first=0,this.rows=10,this.BuySellArray=[],this.maxDescriptionLength=40,this.showFullText=!1,this.isLiked=[],this.likeCountValue=[]}makePhoneCall(e){if(e){console.log("Initiating phone call to:",e);let t=e.replace(/\D/g,"");t?window.location.href="tel:"+t:console.error("Invalid phone number")}else console.error("No phone number provided")}handleMapClick(e){if(console.log(e),e){let t=`https://www.google.com/maps/search/?api=1&query=${e.lat},${e.lng}`;window.open(t,"_blank")}}truncateText(e,t){return e.length<=t?e:e.substr(0,t)+"... see more"}likeBusiness(e,t){this._cookieService.get("token")?this.BuySellArray[t].liked==!0?(console.log(this.BuySellArray[t].liked),this._filterservie.addLike(e).subscribe({next:p=>{console.log(p,"like"),this.BuySellArray[t].liked=!1,this.BuySellArray[t].business.likes+=1}})):this._filterservie.addDislikes(e).subscribe({next:p=>{console.log(p,"dislike"),this.BuySellArray[t].liked=!0,this.BuySellArray[t].business.likes-=1}}):this.router.navigate(["/login"])}calculateDistance(e,t){let r=this.distanceService.calculateDistance(e,t);return r!==null?r.toFixed(0):"N/A"}ngOnInit(){F(this.platformId)&&this.distanceService.getCurrentLocation().then(e=>{this.currentLocation={latitude:e.latitude,longitude:e.longitude},this.distanceService.setCurrentLocationInLocalStorage(e)}).catch(e=>{console.error("Error getting user location:",e)}),this.totalRecords=this.BuySellArray.length}onPageChange(e){this.first=e.first,this.rows=e.rows}};l.\u0275fac=function(t){return new(t||l)(g(E),g(N),g(G),g(j),g(z))},l.\u0275cmp=w({type:l,selectors:[["app-bs-gellaryview"]],inputs:{BuySellArray:"BuySellArray",distances:"distances"},standalone:!0,features:[C],decls:5,vars:7,consts:[[1,"container"],[3,"first","rows","totalRecords","onPageChange"],[1,"row","py-2"],["class","col-md-3 col-12 mb-3",4,"ngFor","ngForOf"],[1,"col-md-3","col-12","mb-3"],[3,"routerLink"],["pTemplate","header"],[1,"card-body"],[1,"title","py-2","text-center"],[1,"py-2"],[1,"d-flex","justify-content-center","align-items-center","gap-1"],[1,"pi","pi-directions","fs-4"],[1,"m-0","distance","text-center"],[1,"text-muted"],[1,"btns","justify-content-center","align-items-center","d-flex","gap-3","py-3"],[1,"call-now",3,"click"],[1,"Directions",3,"click"],["alt","Card",1,"w-100",3,"src"]],template:function(t,r){t&1&&(o(0,"div",0)(1,"p-paginator",1),v("onPageChange",function(x){return r.onPageChange(x)}),a(),o(2,"div",2),f(3,Je,22,7,"div",3),a(),o(4,"p-paginator",1),v("onPageChange",function(x){return r.onPageChange(x)}),a()()),t&2&&(s(1),d("first",r.first)("rows",r.rows)("totalRecords",r.BuySellArray.length),s(2),d("ngForOf",r.BuySellArray.slice(r.first,r.first+r.rows)),s(1),d("first",r.first)("rows",r.rows)("totalRecords",r.BuySellArray.length))},dependencies:[B,R,P,A,H,xe,V,we,be],styles:["span[_ngcontent-%COMP%]{color:#ffbf9d;font-weight:700}i[_ngcontent-%COMP%]{color:#ffbf9d}.div-like[_ngcontent-%COMP%]{position:absolute;top:203px;right:16px;background-color:#fff;width:45px;height:45px;border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%;justify-content:center;align-items:center;display:flex}.likes[_ngcontent-%COMP%]{position:absolute;top:294px;right:28px}.col-md-3[_ngcontent-%COMP%]{position:relative}.call-now[_ngcontent-%COMP%]{background-color:#000;color:#fff;width:100px;height:40px;border:none;outline:none;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px}.Directions[_ngcontent-%COMP%]{background-color:#ffbf9d;width:100px;height:40px;border:none;outline:none;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;color:#000}img[_ngcontent-%COMP%]{height:272px;width:300px;background-color:#000;border-radius:7px!important;-webkit-border-radius:7px!important;-moz-border-radius:7px!important;-ms-border-radius:7px!important;-o-border-radius:7px!important}"]});let n=l;return n})();function We(n,l){if(n&1&&(o(0,"tr",6)(1,"td",7)(2,"h6",8),u(3),b(4,"date"),a()()()),n&2){let i=l.$implicit;s(3),L(O(4,1,i.updated_at,"MM/dd/yyyy"))}}function Xe(n,l){if(n&1&&(m(0,"div",35),b(1,"sanatizer")),n&2){let i=c(2).$implicit,e=c(2);d("innerHTML",D(1,1,i!=null&&i.content?i==null?null:i.content.slice(0,e.maxDescriptionLength):""),J)}}var Ye=(n,l)=>({"font-weight":n,"font-style":l});function Ze(n,l){if(n&1){let i=k();o(0,"div",10)(1,"div",11)(2,"div",12)(3,"div",13)(4,"img",14),v("error",function(t){_(i);let r=c(3);return h(r.onImageError(t))}),a()(),o(5,"div",15)(6,"div",16)(7,"div",17)(8,"div",18)(9,"h5",19),u(10),a()()(),o(11,"div",20),m(12,"i",21),o(13,"p",22),u(14),a()(),o(15,"div",23)(16,"small",24),f(17,Xe,2,3,"ng-template",null,25,pe),a()(),m(19,"p",26),b(20,"sanatizer"),b(21,"truncateText"),o(22,"div",27)(23,"div",28),m(24,"i",29),o(25,"p",30),u(26),o(27,"span"),u(28,"miles"),a()()()(),o(29,"div",31)(30,"div",32)(31,"button",33),v("click",function(){_(i);let t=c().$implicit,r=c(2);return h(r.makePhoneCall(t.phone_number))}),u(32," Call "),a(),o(33,"button",34),v("click",function(){_(i);let t=c().$implicit,r=c(2);return h(r.handleMapClick(t.geo_direction))}),u(34," Directions "),a()()()()()()()()}if(n&2){let i=c().$implicit,e=c(2);s(4),I("src",i.images[0],S),M("routerLink","/BuySelldetails/",i.id,""),s(6),y(" ",i.business.name," "),s(4),y(" ",i.buySellTime," "),s(2),d("ngStyle",le(12,Ye,i!=null&&i.bold?"bold":"normal",i!=null&&i.italic?"italic":"normal")),s(3),d("innerHTML",D(20,7,O(21,9,i.content,50)),J),s(7),y(" Distance: ",e.calculateDistance(i.business.geo_direction.lat,i.business.geo_direction.lng)," ")}}function et(n,l){if(n&1&&f(0,Ze,35,15,"div",9),n&2){let i=c(2);d("ngIf",i.BuySellArray)}}function tt(n,l){if(n&1&&(o(0,"div",2)(1,"p-table",3),f(2,We,5,4,"ng-template",4)(3,et,1,1,"ng-template",5),a()()),n&2){let i=c();s(1),d("value",i.BuySellArray)("sortOrder",-1)("rows",20)("paginator",!0)("scrollable",!0)}}function it(n,l){if(n&1&&(o(0,"tr",6)(1,"td",7)(2,"h6",8),u(3),b(4,"date"),a()()()),n&2){let i=l.$implicit;s(3),L(O(4,1,i.updated_at,"MM/dd/yyyy"))}}function nt(n,l){if(n&1&&(o(0,"div",27)(1,"div",49),m(2,"i",50),o(3,"p",51),u(4),a()()()),n&2){let i=c(2).$implicit,e=c(2);s(4),y(" Distance: ",e.calculateDistance(i.business.geo_direction.lat,i.business.geo_direction.lng)," Miles ")}}function rt(n,l){if(n&1){let i=k();o(0,"div",38)(1,"div",39)(2,"div",12)(3,"div",40)(4,"img",41),v("error",function(t){_(i);let r=c(3);return h(r.onImageError(t))}),a()(),o(5,"div",42)(6,"div",43)(7,"div",17)(8,"div",44)(9,"p",45),u(10),b(11,"truncateText"),a()()(),o(12,"div",20),m(13,"i",21),o(14,"p",46),u(15),a()(),f(16,nt,5,1,"div",47),o(17,"div",48)(18,"div",32)(19,"button",33),v("click",function(){_(i);let t=c().$implicit,r=c(2);return h(r.makePhoneCall(t.phone_number))}),u(20," Call "),a(),o(21,"button",34),v("click",function(){_(i);let t=c().$implicit,r=c(2);return h(r.handleMapClick(t.geo_direction))}),u(22," Directions "),a()()()()()()()()}if(n&2){let i=c().$implicit,e=c(2);s(4),I("src",i.images[0],S),M("routerLink","/BuySelldetails/",i.id,""),s(6),y(" ",O(11,5,i.business.name,10)," "),s(5),y(" ",i.buySellTime," "),s(1),d("ngIf",e.distances)}}function ot(n,l){if(n&1&&f(0,rt,23,8,"div",37),n&2){let i=c(2);d("ngIf",i.BuySellArray)}}function lt(n,l){if(n&1&&(o(0,"div",36)(1,"p-table",3),f(2,it,5,4,"ng-template",4)(3,ot,1,1,"ng-template",5),a()()),n&2){let i=c();s(1),d("value",i.BuySellArray)("sortOrder",-1)("rows",20)("paginator",!0)("scrollable",!0)}}var Ge=(()=>{let l=class l{constructor(e,t,r,p){this._filterservie=e,this._cookieService=t,this.router=r,this.distanceService=p,this.maxDescriptionLength=44,this.showFullText=!1,this.BuySellArray=[],this.isLiked=[],this.likeCountValue=[],this.customer={id:1,images:["../../assets/img/footer/default-image.jpg"]}}truncateText(e,t){return e.length<=t?e:e.substr(0,t)+""}makePhoneCall(e){if(e){console.log("Initiating phone call to:",e);let t=e.replace(/\D/g,"");t?window.location.href="tel:"+t:console.error("Invalid phone number")}else console.error("No phone number provided")}handleMapClick(e){if(e&&e.lat!==void 0&&e.lng!==void 0){let t=`https://www.google.com/maps/search/?api=1&query=${e.lat},${e.lng}`;window.open(t,"_blank")}}toggleLike(e){this.isLiked[e]=!this.isLiked[e],this.likeCountValue[e]=this.isLiked[e]?this.likeCountValue[e]+1:this.likeCountValue[e]-1,this.isLiked[e]?this.BuySellArray[e].likes+=1:this.BuySellArray[e].likes-=1}likeBusiness(e,t){this._cookieService.get("token")?this.BuySellArray[t].liked==!0?(console.log(this.BuySellArray[t].liked),this._filterservie.addLike(e).subscribe({next:p=>{console.log(p,"like"),this.BuySellArray[t].liked=!1,this.BuySellArray[t].business.likes+=1}})):this._filterservie.addDislikes(e).subscribe({next:p=>{console.log(p,"dislike"),this.BuySellArray[t].liked=!0,this.BuySellArray[t].business.likes-=1}}):this.router.navigate(["/login"])}truncatedname(e){return e.length<=24?e:e.substring(0,24)}onImageError(e){let t=e.target;t.src="../../assets/img/footer/default-image.jpg"}calculateDistance(e,t){let r=this.distanceService.calculateDistance(e,t);return r!==null?r.toFixed(0):"N/A"}};l.\u0275fac=function(t){return new(t||l)(g(E),g(N),g(G),g(j))},l.\u0275cmp=w({type:l,selectors:[["app-bs-listview"]],inputs:{BuySellArray:"BuySellArray",distances:"distances"},standalone:!0,features:[C],decls:2,vars:2,consts:[["class","web-view",4,"ngIf"],["class","mobileb-view",4,"ngIf"],[1,"web-view"],["sortField","updated_at","sortMode","single","rowGroupMode","subheader","groupRowsBy","updated_at","paginatorPosition","both",3,"value","sortOrder","rows","paginator","scrollable"],["pTemplate","groupheader"],["pTemplate","body"],[1,"p-rowgroup-header"],["colspan","5"],[1,"ms-5","ps-5"],["class","data d-flex gap-2 justify-content-center align-items-center py-3 row px-4",4,"ngIf"],[1,"data","d-flex","gap-2","justify-content-center","align-items-center","py-3","row","px-4"],[1,"card","my-0","py-0","px-0",2,"max-width","1200px"],[1,"row","g-0"],[1,"col-5",2,"width","27%"],["alt","...",1,"rounded-start","black",2,"height","195px","width","258px","object-fit","cover",3,"src","routerLink","error"],[1,"col-7",2,"width","70%"],[1,"card-body","card-body","d-flex","flex-column","align-items-between","justify-content-between","px-0","py-0",2,"height","100%"],[1,"d-flex","gap-1","justify-content-between","align-items-center"],[1,"m-0"],[1,"title-name","m-0"],[1,"d-flex","gap-1","justify-content-start","align-items-center"],[1,"bx","bx-world","fs-6",2,"color","#6b6666"],[1,"title-time","text-muted","m-0"],[1,"d-none","d-lg-block"],[1,"description",3,"ngStyle"],["truncatedContent",""],[1,"m-0",3,"innerHTML"],[1,"py-1"],[1,"d-flex","justify-content-start","align-items-start"],[1,"pi","pi-directions","fs-4"],[1,"px-1","m-0","distance"],[1,"btns","justify-content-between","align-items-end","d-flex","gap-1","py-2"],[1,"btns","d-flex","flex-column","gap-2"],[1,"call-now",3,"click"],[1,"Directions",3,"click"],[3,"innerHTML"],[1,"mobileb-view"],["class","d-flex gap-2 justify-content-center align-items-center py-3 row px-4",4,"ngIf"],[1,"d-flex","gap-2","justify-content-center","align-items-center","py-3","row","px-4"],[1,"card","my-0","py-0","px-0"],[1,"col-7"],["alt","...",1,"rounded-start","black",2,"height","134px","width","176px","object-fit","cover",3,"src","routerLink","error"],[1,"col-4"],[1,"card-body","card-body","d-flex","flex-column","align-items-between","justify-content-between","px-0","py-0"],[1,""],[1,"title-name","m-0",2,"font-size","13px"],[1,"title-time","text-muted","m-0",2,"font-size","8px"],["class","py-1",4,"ngIf"],[1,"btns","justify-content-between","align-items-end","d-flex","gap-1"],[1,"d-flex","justify-content-start","align-items-start","gap-1"],[1,"pi","pi-directions","fs-6"],[1,"px-1","m-0","distance",2,"font-size","8px"]],template:function(t,r){t&1&&f(0,tt,4,5,"div",0)(1,lt,4,5,"div",1),t&2&&(d("ngIf",r.BuySellArray),s(1),d("ngIf",r.BuySellArray))},dependencies:[B,$,me,ge,je,Ee,V,P,A,De,Se],styles:[".mobileb-view[_ngcontent-%COMP%]{display:none}#likeIcon[_ngcontent-%COMP%], img[_ngcontent-%COMP%]{cursor:pointer}.web-view[_ngcontent-%COMP%]{display:block}.miles[_ngcontent-%COMP%]{color:#258a8b;font-weight:700}.pi-directions[_ngcontent-%COMP%]{color:#258a8b}@media (max-width: 767px){.mobileb-view[_ngcontent-%COMP%]{display:block}.web-view[_ngcontent-%COMP%]{display:none}.call-now[_ngcontent-%COMP%]{border:none;outline:none;width:74px!important;height:22px!important;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;font-size:10px;color:#000!important}.Directions[_ngcontent-%COMP%]{background-color:#ffbf9d;border:none;outline:none;width:74px!important;height:22px!important;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;color:#000!important;font-size:10px}.miles[_ngcontent-%COMP%], .Distance[_ngcontent-%COMP%]{font-size:13px}}"]});let n=l;return n})();function at(n,l){if(n&1&&(o(0,"div"),m(1,"map-marker",5),a()),n&2){let i=l.$implicit,e=c(2);s(1),d("position",i.business.geo_direction)("options",e.options)}}function st(n,l){if(n&1&&(o(0,"google-map",null,3),f(2,at,2,2,"div",4),a()),n&2){let i=c();s(2),d("ngForOf",i.BuySellArray)}}var Ue=(()=>{let l=class l{constructor(e){this._httpClient=e,this.options={mapTypeControl:!1,streetViewControl:!1,fullscreenControl:!1},this.markerOptions={draggable:!1},this.apiLoaded=e.jsonp("https://maps.googleapis.com/maps/api/js?key=AIzaSyAAb4SFQe0Kigpu3EiKhR93nC-OUitTKwM","callback").pipe(te(()=>!0),ie(()=>ee(!1)))}ngAfterViewInit(){this.apiLoaded&&setTimeout(()=>{this.fitBounds()},1e3)}fitBounds(){let e=new google.maps.LatLngBounds;for(let t of this.BuySellArray)console.log(t.business.geo_direction.lat),e.extend(new google.maps.LatLng(t.business.geo_direction.lat,t.business.geo_direction.lng));this.map.fitBounds(e)}};l.\u0275fac=function(t){return new(t||l)(g(fe))},l.\u0275cmp=w({type:l,selectors:[["app-bs-mapview"]],viewQuery:function(t,r){if(t&1&&se(q,5),t&2){let p;ae(p=ce())&&(r.map=p.first)}},inputs:{distances:"distances",BuySellArray:"BuySellArray"},standalone:!0,features:[C],decls:5,vars:5,consts:[[1,"container"],[1,"map"],[3,"BuySellArray","distances"],["map",""],[4,"ngFor","ngForOf"],[3,"position","options"]],template:function(t,r){t&1&&(o(0,"div",0)(1,"div",1),f(2,st,3,1,"google-map"),b(3,"async"),a(),m(4,"app-bs-gellaryview",2),a()),t&2&&(s(2),T(2,D(3,3,r.apiLoaded)?2:-1),s(2),d("BuySellArray",r.BuySellArray)("distances",r.distances))},dependencies:[B,R,ue,Be,q,Ce,Q],styles:[`.map-container{width:85vw!important}
`],encapsulation:2});let n=l;return n})();function ct(n,l){if(n&1&&m(0,"img",37),n&2){let i=c().$implicit;I("src",i.images[0],S),M("routerLink","/BuySelldetails/",i.id,"")}}function pt(n,l){n&1&&m(0,"img",38)}function dt(n,l){if(n&1&&(o(0,"button",39)(1,"a",40),m(2,"img",41),a()()),n&2){let i=c().$implicit;s(1),d("href",i.business.booking_url,S)}}function mt(n,l){if(n&1){let i=k();o(0,"div",22)(1,"div",23)(2,"div"),f(3,ct,1,2,"img",24)(4,pt,1,0,"img",25),a(),m(5,"img",26),o(6,"div",27)(7,"div",28)(8,"div",29)(9,"div",29)(10,"h5",30),u(11),a(),o(12,"h5",30),u(13),a()(),m(14,"div"),a()(),o(15,"div",31),f(16,dt,3,1,"button",32),o(17,"button",33),v("click",function(){let r=_(i).$implicit,p=c(2);return h(p.makePhoneCall(r.business.phone_number))}),m(18,"img",34),a(),o(19,"button",35),m(20,"img",36),a()()()()()}if(n&2){let i=l.$implicit;s(3),d("ngIf",i.images&&i.images[0]),s(1),d("ngIf",!i.images||!i.images[0]),s(7),L(i.title),s(2),y("",i.price,"$"),s(3),d("ngIf",i.business.booking_url!==null&&i.business.booking_url.trim()!=="")}}function ut(n,l){if(n&1&&(o(0,"div",18)(1,"h2",19),u(2,"VIP Buy&sell"),a(),o(3,"div")(4,"p-carousel",20),f(5,mt,21,5,"ng-template",21),a()()()),n&2){let i=c();s(4),d("value",i.vipBuysellArray)("numVisible",3)("numScroll",3)("circular",!0)("responsiveOptions",i.responsiveOptions)("autoplayInterval",2e3)}}function gt(n,l){if(n&1&&(o(0,"div",42),m(1,"app-bs-listview",43),a()),n&2){let i=c();s(1),d("BuySellArray",i.buySellArray)("distances",i.distances)}}function ft(n,l){if(n&1&&(o(0,"div",42),m(1,"app-bs-gellaryview",43),a()),n&2){let i=c();s(1),d("BuySellArray",i.buySellArray)("distances",i.distances)}}function vt(n,l){if(n&1&&(o(0,"div",42),m(1,"app-bs-mapview",43),a()),n&2){let i=c();s(1),d("BuySellArray",i.buySellArray)("distances",i.distances)}}var di=(()=>{let l=class l{constructor(e,t,r,p,x,K,Ne,He){this._filterservice=e,this._router=t,this._BuySellService=r,this._messageService=p,this.distanceService=x,this.platformId=K,this.confirmationService=Ne,this.previousRouteService=He,this.first=20,this.rows=20,this.distances=[],this.galleyView=!1,this.listView=!0,this.mapView=!1,this.buySellArray=[]}ngOnInit(){if(this.vipBuysell(),this.responsiveOptions=[{breakpoint:"1199px",numVisible:3,numScroll:3},{breakpoint:"991px",numVisible:1,numScroll:1},{breakpoint:"768px",numVisible:1,numScroll:1},{breakpoint:"576px",numVisible:1,numScroll:1}],this.previousRouteService.getPreviousUrl()=="/listing"||this.previousRouteService.getPreviousUrl()=="/posting"||this.previousRouteService.getPreviousUrl()=="/buysell")if(F(this.platformId)){let e=localStorage.getItem("filter"),t=[];e?(t=JSON.parse(e),console.log(t),this.getFilteredBuySell(t[0].category,t[0].state,t[0].city),this.filteredBuySell(),this.clearBuysell()):(this.getBuySell(),this.clearBuysell(),this.filteredBuySell())}else this.getBuySell();else this.getBuySell(),this.clearBuysell(),this.filteredBuySell();F(this.platformId)&&this.distanceService.getCurrentLocation().then(e=>{this.currentLocation={latitude:e.latitude,longitude:e.longitude},this.distanceService.setCurrentLocationInLocalStorage(e)}).catch(e=>{console.error("Error getting user location:",e)})}calculateDistance(e,t){let r=this.distanceService.calculateDistance(e,t);return r!==null?r.toFixed(0):"N/A"}getBuySell(){this.buySellSubscription=this._BuySellService.getBuySell().subscribe({next:e=>{console.log(e),this.buySellArray=e.data,this.getGeoLocations(),this.buySellArray=this.buySellArray.map(t=>Z(Y({},t),{updated_at:new Date(t.updated_at).toISOString().split("T")[0],datePart:t.updated_at})),this.buySellArray.sort((t,r)=>new Date(r.datePart).getTime()-new Date(t.datePart).getTime())}})}getFilteredBuySell(e,t,r){this.filteredBuySellSubscription=this._filterservice.getBuySells(e,t,r).subscribe({next:p=>{console.log(p.data.allBuySells),this.buySellArray=p.data.allBuySells,this.getGeoLocations()},error:p=>{console.log(p)}})}filteredBuySell(){this.FilteredSubscribtion=this._filterservice.filteredBuySell.subscribe({next:e=>{console.log("next has come",e),this.buySellArray=e.data.allBuySells,this.getGeoLocations()}})}getGeoLocations(){let e=this.buySellArray.map(p=>p.business.geo_direction),t=new Set(e.map(p=>`${p.lat}_${p.lng}`)),r=Array.from(t).map(p=>{let[x,K]=p.split("_");return{lat:parseFloat(x),lng:parseFloat(K)}});this.UniqueGeoLocations=r,console.log(this.UniqueGeoLocations)}clearBuysell(){this.clearSubscribtion=this._filterservice.clearBuysell.subscribe({next:e=>{this.buySellArray=e,console.log(e),this.getGeoLocations()}})}showGallery(){this.galleyView=!0,this.listView=!1,this.mapView=!1}showList(){this.listView=!0,this.galleyView=!1,this.mapView=!1}showMap(){this.mapView=!0,this.galleyView=!1,this.listView=!1}onPageChange(e){this.first=e.first}vipBuysell(){this._BuySellService.getVipBuySell().subscribe(e=>{this.vipBuysellArray=e.data,console.log(this.vipBuysellArray)})}makePhoneCall(e){console.log("Initiating phone call to:",e),window.location.href="tel:"+e}};l.\u0275fac=function(t){return new(t||l)(g(E),g(ve),g(Oe),g(_e),g(j),g(z),g(U),g(Ae))},l.\u0275cmp=w({type:l,selectors:[["app-buy-sell"]],hostAttrs:["ngSkipHydration","true"],standalone:!0,features:[re([U]),C],decls:32,vars:6,consts:[["ngSkipHydration","",1,"slider","py-5"],["class","container py-3",4,"ngIf"],[1,"posting","mt-5","py-5"],[1,"box","mb-4","mt-lg-0","mt-5"],[1,"container"],[1,"title","mb-5","justify-content-between","align-items-center","d-flex"],[1,""],[1,"form-group","d-none","d-lg-block"],[1,"div-searchBar","justify-content-center","align-items-center","d-flex"],[1,"view","d-flex","justify-content-between"],[1,"suggest"],[1,"m-0"],[1,"views","d-flex","gap-3"],[1,"box","d-flex","gap-2",3,"ngClass","click"],[1,"pi","pi-list","fs-4",2,"color","black"],[1,"m-0","d-none","d-lg-block"],[1,"pi-th-large","pi","fs-4",2,"color","black"],["class","view-data"],[1,"container","py-3"],[1,"text-center","py-5","h1"],[1,"gap-5",3,"value","numVisible","numScroll","circular","responsiveOptions","autoplayInterval"],["pTemplate","item","class","gap-5"],[1,"row","justify-content-center","align-items-center","gap-5"],[1,"col-md-3",2,"width","95%"],["alt","","class","w-100 rounded-top rounded-2",3,"src","routerLink",4,"ngIf"],["src","../../../assets/img/listing/missing (2).png","alt","","class","w-25 rounded-top rounded-2",4,"ngIf"],["src","../../../assets/img/posting/VIP TAG.png","alt","",1,"corner-image"],[1,"body","bg-white","rounded-bottom","py-3"],[1,"title","py-2"],[1,"d-flex","justify-content-center","align-items-center","gap-5"],[1,"gold","text-center","m-0"],[1,"btns","d-flex","justify-content-center","align-items-center","gap-3","py-1"],["class","date",4,"ngIf"],[1,"call",3,"click"],["src","../../../assets/img/posting/image 1.png","alt","Call"],[1,"location"],["src","../../../assets/img/posting/image 2.png","alt",""],["alt","",1,"w-100","rounded-top","rounded-2",3,"src","routerLink"],["src","../../../assets/img/listing/missing (2).png","alt","",1,"w-25","rounded-top","rounded-2"],[1,"date"],["target","_blank",3,"href"],["src","../../../assets/img/posting/image 3.png","alt","Image"],[1,"view-data"],[3,"BuySellArray","distances"]],template:function(t,r){t&1&&(o(0,"section",0),f(1,ut,6,6,"div",1),a(),o(2,"section",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"h3"),u(8,"Top businesses in your Area"),a()(),o(9,"div",7)(10,"div",8),m(11,"app-filter"),a(),m(12,"p-toast")(13,"p-confirmDialog"),a()(),o(14,"div",9)(15,"div",10)(16,"h6",11),u(17,"Suggested Results:"),a()(),o(18,"div",12)(19,"div",13),v("click",function(){return r.showList()}),m(20,"i",14),o(21,"p",15),u(22,"List View"),a()(),o(23,"div",13),v("click",function(){return r.showGallery()}),m(24,"i",16),o(25,"p",15),u(26,"Gallery View"),a()()()()()(),o(27,"div",4),f(28,gt,2,2,"div",17)(29,ft,2,2,"div",17)(30,vt,2,2,"div",17),m(31,"div"),a()()),t&2&&(s(1),d("ngIf",r.vipBuysellArray),s(18),d("ngClass",r.listView?"active":null),s(4),d("ngClass",r.galleyView?"active":null),s(5),T(28,r.listView?28:-1),s(1),T(29,r.galleyView?29:-1),s(1),T(30,r.mapView?30:-1))},dependencies:[H,V,Le,Me,Te,Ve,de,$,Pe,Ie,ke,B,Q,Ge,Ue,P,A,he,ye],styles:[`.buy-sell .container .text{font-family:Lato,sans-serif;font-weight:600}.slider{background-color:#f1f3f4}.slider .container .h1{color:#ddac17;line-height:48.76px;font-weight:700}.slider .container .gold{color:#ddac17}.slider .row{position:relative}.slider .corner-image{position:absolute;top:-1px;right:7px}.slider .text-loction{font-family:Lato,sans-serif}.slider .p-carousel-item-start,.slider .p-carousel-item-end{transform:scale(.8);-webkit-transform:scale(.8);-moz-transform:scale(.8);-ms-transform:scale(.8);-o-transform:scale(.8)}.slider .date{background:linear-gradient(180deg,rgba(255,216,101,.5) 0%,rgba(255,216,101,.186535) 62.69%,rgba(255,216,101,0) 100%);width:72px;height:40px;outline:none;border:none;box-shadow:0 4px 4px #00000040;border-radius:3px}.slider .call{background:linear-gradient(180deg,rgba(16,148,51,.5) 0%,rgba(52,168,83,0) 100%);width:72px;height:40px;outline:none;border:none;box-shadow:0 4px 4px #00000040;border-radius:3px}.slider .location{background:linear-gradient(180deg,rgba(0,110,253,.5) 0%,rgba(24,119,242,0) 100%);width:72px;height:40px;outline:none;border:none;box-shadow:0 4px 4px #00000040;border-radius:3px}.slider .searchBar .container .div-searchBar2 .form-group{flex:1;position:relative;margin:0;padding:0}.slider .searchBar .container .div-searchBar2 .form-group .div-searchBar form{display:flex!important;justify-content:center!important;align-items:center!important;gap:10rem;margin-right:228px}.slider .searchBar .container .div-searchBar2 .form-group .div-searchBar form .p-dropdown{border:none;width:100%;background-color:transparent;margin:0 15px}.slider .searchBar .container .div-searchBar2 .form-group .div-searchBar form input,.slider .searchBar .container .div-searchBar2 .form-group .div-searchBar form input:focus,.slider .searchBar .container .div-searchBar2 .form-group .div-searchBar form input:active{border:none;outline:none}.slider .searchBar .container .div-searchBar2 .form-group .div-searchBar form small{white-space:nowrap;font-family:Lato,sans-serif;font-size:14px!important}.slider .searchBar .container .div-searchBar2 .form-group .div-searchBar form .Search-btn{background-color:#0f3d3e;color:#fff;position:absolute;right:-6px;border-radius:12px;-webkit-border-radius:12px;-moz-border-radius:12px;-ms-border-radius:12px;-o-border-radius:12px;width:100px;height:38px}.slider .searchBar .container .div-searchBar2 .form-group .div-searchBar form small{font-size:12px}@media (max-width: 767px){.slider .searchBar{display:none}}.div-searchBar form{border-radius:12px;display:flex!important;justify-content:center!important;align-items:center!important;background-color:#f9f7f7;padding:11px}.div-searchBar form .p-dropdown{border:none;width:100%;background-color:transparent;margin:0 10px}.div-searchBar form input,.div-searchBar form input:focus,.div-searchBar form input:active{border:none;outline:none}.div-searchBar form small{white-space:nowrap;font-family:Lato,sans-serif;font-size:14px!important}.div-searchBar form .Search-btn{background-color:#000;color:#fff;border-radius:12px;-webkit-border-radius:12px;-moz-border-radius:12px;-ms-border-radius:12px;-o-border-radius:12px;width:90px;height:38px}.div-searchBar form .clear-btn{background-color:#ffbf9d;color:#fff;border-radius:12px;-webkit-border-radius:12px;-moz-border-radius:12px;-ms-border-radius:12px;-o-border-radius:12px;width:90px;height:38px;outline:none;border:none}.div-searchBar form small{font-size:12px}.div-searchBar form ul{padding-left:0rem!important;margin:0!important}.div-searchBar form .p-dropdown-panel .p-dropdown-items{padding:0}.p-datatable>.p-datatable-wrapper{overflow:hidden!important}i{cursor:pointer}
`],encapsulation:2});let n=l;return n})();export{di as BuySellComponent};
