import{b as T,c as D}from"./chunk-MYIDNY4V.js";import{j,k as G,l as N}from"./chunk-ZPBOED5T.js";import{a as E}from"./chunk-ZGDLFKNH.js";import{a as A}from"./chunk-ZX3COAAW.js";import{n as U}from"./chunk-YHHAJLGB.js";import{o as I,p as V,r as z}from"./chunk-G24YDE2W.js";import{Ab as c,Bb as F,Cb as g,Cc as S,Ga as y,Ib as M,Jb as R,Qa as s,Ra as _,Y as P,ab as x,ba as C,ca as h,db as L,gb as v,lb as r,mb as o,nb as f,rb as b,tb as u,ub as m,wc as O,xb as k,xc as $,yb as w}from"./chunk-OU66KZKH.js";function X(l,d){if(l&1&&f(0,"img",18),l&2){let n=m().$implicit;k("src",n.logo,y),w("routerLink","/details/",n.id,"")}}var Y=()=>({width:"100%"});function Z(l,d){if(l&1){let n=b();r(0,"div",4)(1,"p-card",5),v(2,X,1,2,"ng-template",6),r(3,"div",7)(4,"div",8)(5,"h5"),c(6),o()(),f(7,"i",9),r(8,"small",10),c(9),o(),f(10,"br"),r(11,"small",10),c(12),o()(),r(13,"div",11)(14,"div",12),f(15,"i",13),r(16,"p",14),c(17),r(18,"span"),c(19,"Miles"),o()()()(),r(20,"div",15)(21,"button",16),u("click",function(i){let a=C(n).$implicit;return m().makePhoneCall(a.phone_number),h(i.stopPropagation())}),c(22," Call Now "),o(),r(23,"button",17),u("click",function(i){let a=C(n).$implicit;return m().handleMapClick(a.street,a.state),h(i.stopPropagation())}),c(24," Directions "),o()()()()}if(l&2){let n=d.$implicit,e=m();s(1),L(R(7,Y)),w("routerLink","/details/",n.id,""),s(5),F(n.name),s(3),g(" ",e.truncateText(n.street,29)," "),s(3),g(" ",n.city1+", "+n.state+(n.city_zip?" "+n.city_zip:"")," "),s(5),g(" Distance: ",e.calculateDistance(n.geo_direction.lat,n.geo_direction.lng)," ")}}var pe=(()=>{let d=class d{constructor(e,i,t,a){this.filterservice=e,this._cookieService=i,this.router=t,this.distanceService=a,this.first=0,this.rows=5,this.isLiked=[],this.likeCountValue=[]}makePhoneCall(e){console.log("Initiating phone call to:",e),window.location.href="tel:"+e}handleMapClick(e,i){if(e&&i){let t=encodeURIComponent(e),a=encodeURIComponent(i),p=`https://www.google.com/maps/search/?api=1&query=${t},+${a}`;window.open(p,"_blank")}}truncateText(e,i){return e.length<=i?e:e.slice(0,i)+"..."}likeBusiness(e,i){this._cookieService.get("token")?this.listingArray[i].liked==!0?this.filterservice.addDislikes(e).subscribe({next:a=>{this.listingArray[i].liked=!1,this.listingArray[i].likes+=1}}):this.filterservice.addLike(e).subscribe({next:a=>{this.listingArray[i].liked=!0,this.listingArray[i].likes-=1}}):this.router.navigate(["/login"])}calculateDistance(e,i){let t=this.distanceService.calculateDistance(e,i);return t!==null?t.toFixed(0):"N/A"}onPageChange(e){this.first=e.first,this.rows=e.rows}ngOnInit(){this.totalRecords=this.listingArray.length}};d.\u0275fac=function(i){return new(i||d)(_(E),_(A),_(I),_(j))},d.\u0275cmp=P({type:d,selectors:[["app-gallery-view"]],inputs:{listingArray:"listingArray",filterarray:"filterarray",distances:"distances"},standalone:!0,features:[M],decls:5,vars:7,consts:[[1,"container"],[3,"first","rows","totalRecords","onPageChange"],[1,"row","py-2"],["class","col-md-3 col-12 mb-3",4,"ngFor","ngForOf"],[1,"col-md-3","col-12","mb-3"],[3,"routerLink"],["pTemplate","header"],[1,"card-body","text-center"],[1,"title","py-2","text-center"],[1,"pi","pi-map-marker",2,"color","#101010","font-size","14px"],[1,"text-center",2,"color","#101010"],[1,"py-2"],[1,"d-flex","justify-content-center","align-items-center","gap-1"],[1,"pi","pi-directions","fs-4"],[1,"m-0","distance","text-center"],[1,"btns","justify-content-center","align-items-center","d-flex","gap-3","py-3"],[1,"call-now",3,"click"],[1,"Directions",3,"click"],["alt","Card",1,"imgg",3,"src","routerLink"]],template:function(i,t){i&1&&(r(0,"div",0)(1,"p-paginator",1),u("onPageChange",function(p){return t.onPageChange(p)}),o(),r(2,"div",2),v(3,Z,25,8,"div",3),o(),r(4,"p-paginator",1),u("onPageChange",function(p){return t.onPageChange(p)}),o()()),i&2&&(s(1),x("first",t.first)("rows",t.rows)("totalRecords",t.listingArray.length),s(2),x("ngForOf",t.listingArray.slice(t.first,t.first+t.rows)),s(1),x("first",t.first)("rows",t.rows)("totalRecords",t.listingArray.length))},dependencies:[S,O,z,V,D,T,U,N,G],styles:[".div-like[_ngcontent-%COMP%]{position:absolute;top:222px;right:19px;background-color:#fff;width:45px;height:45px;border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%;justify-content:center;align-items:center;display:flex}.likes[_ngcontent-%COMP%]{position:absolute;top:280px;right:28px}.col-md-3[_ngcontent-%COMP%]{position:relative}.call-now[_ngcontent-%COMP%]{background-color:#000;color:#fff;width:190px!important;height:47px!important;border:none;outline:none;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px}.Directions[_ngcontent-%COMP%]{width:190px!important;height:47px!important;border:none;outline:none;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;color:#000}.imgg[_ngcontent-%COMP%]{height:250px;object-fit:contain;background-color:#fff;border-radius:7px!important;-webkit-border-radius:7px!important;-moz-border-radius:7px!important;-ms-border-radius:7px!important;-o-border-radius:7px!important}.p-card[_ngcontent-%COMP%]   .p-card-content[_ngcontent-%COMP%]{padding:0!important}.p-card[_ngcontent-%COMP%]   .p-card-body[_ngcontent-%COMP%]{padding:10px!important}.p-card-content[_ngcontent-%COMP%]{padding:0!important}"]});let l=d;return l})();function ee(l,d){if(l&1){let n=b();r(0,"div",6)(1,"div",7)(2,"div",8),f(3,"img",9),o(),r(4,"div",10)(5,"div",11)(6,"div",12)(7,"div",13)(8,"h5",14),c(9),o()()(),r(10,"div",15)(11,"small",16),c(12),o()(),r(13,"small",16),c(14),o()(),r(15,"div",15),f(16,"i",17),r(17,"p",18),c(18),r(19,"span"),c(20,"Miles"),o()()(),r(21,"div",19)(22,"div",20)(23,"button",21),u("click",function(){let t=C(n).$implicit,a=m(2);return h(a.makePhoneCall(t.phone_number))}),c(24," Call "),o(),r(25,"button",22),u("click",function(){let t=C(n).$implicit,a=m(2);return h(a.handleMapClick(t.street,t.state))}),c(26," Directions "),o()()()()()()}if(l&2){let n=d.$implicit,e=m(2);s(3),k("src",n.logo,y),w("routerLink","/details/",n.id,""),s(6),g(" ",n.name," "),s(3),g(" ",n.street,""),s(2),g(" ",n.city1+", "+n.state+" "+(n.city_zip?" "+n.city_zip:"")," "),s(4),g(" ",e.calculateDistance(n.geo_direction.lat,n.geo_direction.lng)," ")}}function te(l,d){if(l&1&&(r(0,"div",4),v(1,ee,27,6,"div",5),o()),l&2){let n=m();s(1),x("ngForOf",n.listingArray.slice(n.first,n.first+n.rows))}}function ie(l,d){if(l&1){let n=b();r(0,"div",23)(1,"div",7)(2,"div",24),f(3,"img",25),o(),r(4,"div",26)(5,"div",27)(6,"div",12)(7,"div",13)(8,"div")(9,"h5",28),c(10),o()()(),f(11,"div"),o(),r(12,"div",29)(13,"small",30),c(14),o()(),r(15,"small",31),c(16),o(),r(17,"div",15),f(18,"i",32),r(19,"p",33),c(20),o()(),r(21,"div",34)(22,"div",20)(23,"button",21),u("click",function(){let t=C(n).$implicit,a=m();return h(a.makePhoneCall(t.phone_number))}),c(24," Call "),o(),r(25,"button",22),u("click",function(){let t=C(n).$implicit,a=m();return h(a.handleMapClick(t.street,t.state))}),c(26," Directions "),o()(),f(27,"div"),o()()()()()}if(l&2){let n=d.$implicit,e=m();s(3),k("src",n.logo,y),w("routerLink","/details/",n.id,""),s(7),g(" ",e.truncateText(n.name,14)," "),s(4),g(" ",e.truncateText(n.street,18)," "),s(2),g(" ",n.city1+", "+n.state+" "+(n.city_zip?" "+n.city_zip:"")," "),s(4),g(" ",e.calculateDistance(n.geo_direction.lat,n.geo_direction.lng)," Miles ")}}var _e=(()=>{let d=class d{constructor(e,i,t,a){this.filterservice=e,this._cookieService=i,this.router=t,this.distanceService=a,this.first=0,this.rows=6,this.maxDescriptionLength=20,this.maxname=24,this.likeCountValue=[],this.isLiked=Array(this.listingArray?.length).fill(!1)}makePhoneCall(e){window.location.href="tel:"+e}handleMapClick(e,i){if(e&&i){let t=encodeURIComponent(e),a=encodeURIComponent(i),p=`https://www.google.com/maps/search/?api=1&query=${t},+${a}`;window.open(p,"_blank")}}truncateText(e,i){return e.length<=i?e:e.slice(0,i)+"..."}likeBusiness(e,i){this._cookieService.get("token")?this.listingArray[i].liked==!0?this.filterservice.addDislikes(e).subscribe({next:a=>{this.listingArray[i].liked=!1,this.listingArray[i].likes+=1}}):this.filterservice.addLike(e).subscribe({next:a=>{this.listingArray[i].liked=!0,this.listingArray[i].likes-=1}}):this.router.navigate(["/login"])}truncateName(e){return e.length<=24?e:e.substring(0,24)}truncatedis(e){return e.length<=44?e:e.substring(0,44)}calculateDistance(e,i){let t=this.distanceService.calculateDistance(e,i);return t!==null?t.toFixed(0):"N/A"}ngOnInit(){this.totalRecords=this.listingArray.length}onPageChange(e){this.first=e.first,this.rows=e.rows}};d.\u0275fac=function(i){return new(i||d)(_(E),_(A),_(I),_(j))},d.\u0275cmp=P({type:d,selectors:[["app-list-view"]],inputs:{listingArray:"listingArray",filterarray:"filterarray",distances:"distances"},standalone:!0,features:[M],decls:6,vars:8,consts:[[1,"container"],[3,"first","rows","totalRecords","onPageChange"],["class","rania d-flex gap-4 justify-content-start align-items-center py-3 row web-v",4,"ngIf"],["class","mobile-v d-flex gap-4 justify-content-start align-items-center py-3","class","card my-2 py-0 mobile-v",4,"ngFor","ngForOf"],[1,"rania","d-flex","gap-4","justify-content-start","align-items-center","py-3","row","web-v"],["class","card my-0 py-0 px-0","style","max-width: 635px",4,"ngFor","ngForOf"],[1,"card","my-0","py-0","px-0",2,"max-width","635px"],[1,"row","g-0"],[1,"col-5"],[1,"rounded-start","imgg",2,"height","195px","width","256px","object-fit","contain",3,"src","routerLink"],[1,"col-7"],[1,"card-body","d-flex","flex-column","align-items-between","justify-content-between","px-2","py-0"],[1,"d-flex","justify-content-between","align-items-center"],[1,"d-flex","justify-content-between","align-items-center","gap-3"],[1,"m-0","p-0","mobile-font-size"],[1,"d-flex","justify-content-start","align-items-center","gap-1"],[2,"color","#101010","font-size","16px"],[1,"pi","pi-directions","fs-6"],[1,"m-0","distance"],[1,"btns","justify-content-between","align-items-end","d-flex","gap-1","py-2"],[1,"btns","flex-column","d-flex","gap-2"],[1,"call-now",3,"click"],[1,"Directions",3,"click"],[1,"card","my-2","py-0","mobile-v"],[1,"col-7","justify-content-center","align-items-center","d-flex"],[1,"rounded-start",2,"height","150px","width","180px","object-fit","contain",3,"src","routerLink"],[1,"col-5","py-1"],[1,"card-body","d-flex","flex-column","align-items-between","justify-content-between","px-2","py-0",2,"height","100%"],[1,"me-lg-5","m-0",2,"font-size","16px","white-space","nowrap"],[1,"d-flex","justify-content-start","align-items-center"],[2,"color","#101010","font-size","12px","white-space","nowrap"],[2,"color","#101010","font-size","12px"],[1,"pi","pi-directions",2,"font-size","16px"],[1,"m-0","distance",2,"word-break","none","font-size","12px"],[1,"btns","justify-content-between","align-items-baseline","d-flex","gap-1"]],template:function(i,t){i&1&&(r(0,"section")(1,"div",0)(2,"p-paginator",1),u("onPageChange",function(p){return t.onPageChange(p)}),o(),v(3,te,2,1,"div",2),o(),v(4,ie,28,6,"div",3),r(5,"p-paginator",1),u("onPageChange",function(p){return t.onPageChange(p)}),o()()),i&2&&(s(2),x("first",t.first)("rows",t.rows)("totalRecords",t.listingArray.length),s(1),x("ngIf",t.listingArray),s(1),x("ngForOf",t.listingArray.slice(t.first,t.first+t.rows)),s(1),x("first",t.first)("rows",t.rows)("totalRecords",t.listingArray.length))},dependencies:[z,V,S,O,$,D,T],styles:[".rania[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;cursor:pointer}.rania[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-family:Lato,sans-serif;font-size:16px;line-height:33px;font-weight:900!important;white-space:nowrap}.rania[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ff8682;width:107px;height:59px;font-weight:700;font-size:17px;padding:0;font-family:Lato,sans-serif;gap:0!important}.rania[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-family:Lato,sans-serif}.rania[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   .call-now[_ngcontent-%COMP%]{background-color:#aefcc9;width:170px;height:30px;border:none;outline:none;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px}.rania[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   .Directions[_ngcontent-%COMP%]{background-color:#ffbf9d;width:170px;height:30px;border:none;outline:none;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px}#likeIcon[_ngcontent-%COMP%]{color:#000;cursor:pointer}#likeContainer.liked[_ngcontent-%COMP%]   #likeIcon[_ngcontent-%COMP%]{color:#9090e6}@media (max-width: 767px){.mobile-font-size[_ngcontent-%COMP%]{font-size:15px!important}.distance[_ngcontent-%COMP%]{font-size:12px!important}.btns[_ngcontent-%COMP%]   .call-now[_ngcontent-%COMP%]{width:120px!important;font-size:14px!important;color:#fff!important}.btns[_ngcontent-%COMP%]   .Directions[_ngcontent-%COMP%]{width:120px!important;font-size:14px!important;margin-bottom:10px;color:#000!important}.web-v[_ngcontent-%COMP%]{display:none!important}.mobile-v[_ngcontent-%COMP%]{display:block!important}}.web-v[_ngcontent-%COMP%]{display:block}.mobile-v[_ngcontent-%COMP%]{display:none}"]});let l=d;return l})();export{pe as a,_e as b};
