import './polyfills.server.mjs';
import{b as T,c as j}from"./chunk-7JUSC5HX.mjs";import{j as G,k as N,n as z}from"./chunk-LNBKQAPO.mjs";import{a as L}from"./chunk-FK5NVTLL.mjs";import{a as D}from"./chunk-7I7UKFLT.mjs";import{n as U}from"./chunk-ORYGPZMT.mjs";import{t as V,u as E,w as A}from"./chunk-JQFYH3H6.mjs";import{Ab as x,Ca as b,Dc as S,Ec as $,Gb as O,Hb as R,Jc as I,Oa as s,Pa as u,U as P,Z as h,_ as C,_a as _,bb as F,eb as v,jb as r,kb as o,lb as p,pb as y,rb as g,sb as m,vb as k,wb as w,yb as d,zb as M}from"./chunk-C2J4IULD.mjs";function X(l,c){if(l&1&&p(0,"img",18),l&2){let n=m().$implicit;k("src",n.logo,b),w("routerLink","/details/",n.id,"")}}var Y=()=>({width:"100%"});function Z(l,c){if(l&1){let n=y();r(0,"div",4)(1,"p-card",5),v(2,X,1,2,"ng-template",6),r(3,"div",7)(4,"div",8)(5,"h5"),d(6),o()(),r(7,"div",9)(8,"div",10),p(9,"i",11),r(10,"p",12),d(11),r(12,"span"),d(13,"Miles"),o()()()(),r(14,"div"),p(15,"p",13),r(16,"p",14),d(17),o()(),r(18,"div",15)(19,"button",16),g("click",function(){let t=h(n).$implicit,a=m();return C(a.makePhoneCall(t.phone_number))}),d(20," Call Now "),o(),r(21,"button",17),g("click",function(){let t=h(n).$implicit,a=m();return C(a.handleMapClick(t.street,t.state))}),d(22," Directions "),o()()()()()}if(l&2){let n=c.$implicit,e=m();s(1),F(R(6,Y)),w("routerLink","/details/",n.id,""),s(5),M(n.name),s(5),x(" Distance: ",e.calculateDistance(n.geo_direction.lat,n.geo_direction.lng)," "),s(6),x(" ",e.truncateText(n.description,20)," ")}}var pe=(()=>{let c=class c{constructor(e,i,t,a){this.filterservice=e,this._cookieService=i,this.router=t,this.distanceService=a,this.first=0,this.rows=5,this.isLiked=[],this.likeCountValue=[]}makePhoneCall(e){console.log("Initiating phone call to:",e),window.location.href="tel:"+e}handleMapClick(e,i){if(e&&i){let t=encodeURIComponent(e),a=encodeURIComponent(i),f=`https://www.google.com/maps/search/?api=1&query=${t},+${a}`;window.open(f,"_blank")}}truncateText(e,i){return e.length<=i?e:e.slice(0,i)+"..."}likeBusiness(e,i){this._cookieService.get("token")?this.listingArray[i].liked==!0?this.filterservice.addDislikes(e).subscribe({next:a=>{this.listingArray[i].liked=!1,this.listingArray[i].likes+=1}}):this.filterservice.addLike(e).subscribe({next:a=>{this.listingArray[i].liked=!0,this.listingArray[i].likes-=1}}):this.router.navigate(["/login"])}calculateDistance(e,i){let t=this.distanceService.calculateDistance(e,i);return t!==null?t.toFixed(0):"N/A"}onPageChange(e){this.first=e.first,this.rows=e.rows}ngOnInit(){this.totalRecords=this.listingArray.length}};c.\u0275fac=function(i){return new(i||c)(u(D),u(L),u(V),u(z))},c.\u0275cmp=P({type:c,selectors:[["app-gallery-view"]],inputs:{listingArray:"listingArray",filterarray:"filterarray",distances:"distances"},standalone:!0,features:[O],decls:5,vars:7,consts:[[1,"container"],[3,"first","rows","totalRecords","onPageChange"],[1,"row","py-2"],["class","col-md-3 col-12 mb-3",4,"ngFor","ngForOf"],[1,"col-md-3","col-12","mb-3"],[3,"routerLink"],["pTemplate","header"],[1,"card-body"],[1,"title","py-2","text-center"],[1,"py-2"],[1,"d-flex","justify-content-center","align-items-center","gap-1"],[1,"pi","pi-directions","fs-4"],[1,"m-0","distance","text-center"],[1,"text-muted"],[1,"text-muted","text-center"],[1,"btns","justify-content-center","align-items-center","d-flex","gap-3","py-3"],[1,"call-now",3,"click"],[1,"Directions",3,"click"],["alt","Card",1,"w-100",3,"src","routerLink"]],template:function(i,t){i&1&&(r(0,"div",0)(1,"p-paginator",1),g("onPageChange",function(f){return t.onPageChange(f)}),o(),r(2,"div",2),v(3,Z,23,7,"div",3),o(),r(4,"p-paginator",1),g("onPageChange",function(f){return t.onPageChange(f)}),o()()),i&2&&(s(1),_("first",t.first)("rows",t.rows)("totalRecords",t.listingArray.length),s(2),_("ngForOf",t.listingArray.slice(t.first,t.first+t.rows)),s(1),_("first",t.first)("rows",t.rows)("totalRecords",t.listingArray.length))},dependencies:[I,S,A,E,j,T,U,N,G],styles:["span[_ngcontent-%COMP%]{color:#ffbf9d;font-weight:700}i[_ngcontent-%COMP%]{color:#ffbf9d}.div-like[_ngcontent-%COMP%]{position:absolute;top:222px;right:19px;background-color:#fff;width:45px;height:45px;border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%;justify-content:center;align-items:center;display:flex}.likes[_ngcontent-%COMP%]{position:absolute;top:280px;right:28px}.col-md-3[_ngcontent-%COMP%]{position:relative}.call-now[_ngcontent-%COMP%]{background-color:#000;color:#fff;width:100px;height:40px;border:none;outline:none;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px}.Directions[_ngcontent-%COMP%]{background-color:#ffbf9d;width:100px;height:40px;border:none;outline:none;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;color:#000}img[_ngcontent-%COMP%]{height:272px;width:300px;background-color:#000;border-radius:7px!important;-webkit-border-radius:7px!important;-moz-border-radius:7px!important;-ms-border-radius:7px!important;-o-border-radius:7px!important}"]});let l=c;return l})();function ee(l,c){if(l&1){let n=y();r(0,"div",6)(1,"div",7)(2,"div",8),p(3,"img",9),o(),r(4,"div",10)(5,"div",11)(6,"div",12)(7,"div",13)(8,"div")(9,"h5",14),d(10),o()()(),p(11,"div"),o(),r(12,"div",15),p(13,"i",16),r(14,"small",17),d(15),o()(),r(16,"div",18),p(17,"i",19),r(18,"p",20),d(19),r(20,"span"),d(21,"miles"),o()()(),r(22,"div",21)(23,"div",22)(24,"button",23),g("click",function(){let t=h(n).$implicit,a=m(2);return C(a.makePhoneCall(t.phone_number))}),d(25," Call "),o(),r(26,"button",24),g("click",function(){let t=h(n).$implicit,a=m(2);return C(a.handleMapClick(t.street,t.state))}),d(27," Directions "),o()(),r(28,"div"),p(29,"div"),o()()()()()()}if(l&2){let n=c.$implicit,e=m(2);s(3),k("src",n.logo,b),w("routerLink","/details/",n.id,""),s(7),x(" ",n.name," "),s(5),x(" ",n.street+", "+n.city1+", "+n.state+", "+n.city_zip,""),s(4),x(" Distance: ",e.calculateDistance(n.geo_direction.lat,n.geo_direction.lng)," ")}}function te(l,c){if(l&1&&(r(0,"div",4),v(1,ee,30,5,"div",5),o()),l&2){let n=m();s(1),_("ngForOf",n.listingArray.slice(n.first,n.first+n.rows))}}function ie(l,c){if(l&1){let n=y();r(0,"div",25)(1,"div",7)(2,"div",10),p(3,"img",26),o(),r(4,"div",8)(5,"div",11)(6,"div",12)(7,"div",13)(8,"div")(9,"h5",27),d(10),o()()(),p(11,"div"),o(),r(12,"div",28)(13,"div",15),p(14,"i",16),r(15,"small",29),d(16),o(),r(17,"small"),d(18),o()()(),r(19,"div",18),p(20,"i",30),r(21,"p",20),d(22),r(23,"span"),d(24,"miles"),o()()(),r(25,"div",31)(26,"div",22)(27,"button",23),g("click",function(){let t=h(n).$implicit,a=m();return C(a.makePhoneCall(t.phone_number))}),d(28," Call "),o(),r(29,"button",24),g("click",function(){let t=h(n).$implicit,a=m();return C(a.handleMapClick(t.street,t.state))}),d(30," Directions "),o()(),r(31,"div"),p(32,"div"),o()()()()()()}if(l&2){let n=c.$implicit,e=m();s(3),k("src",n.logo,b),w("routerLink","/details/",n.id,""),s(7),x(" ",n.name," "),s(6),x(" ",n.street+", ",""),s(2),M(n.city1+", "+n.state+", "+n.city_zip),s(4),x(" Distance: ",e.calculateDistance(n.geo_direction.lat,n.geo_direction.lng)," ")}}var _e=(()=>{let c=class c{constructor(e,i,t,a){this.filterservice=e,this._cookieService=i,this.router=t,this.distanceService=a,this.first=0,this.rows=6,this.maxDescriptionLength=20,this.maxname=24,this.likeCountValue=[],this.isLiked=Array(this.listingArray?.length).fill(!1)}makePhoneCall(e){window.location.href="tel:"+e}handleMapClick(e,i){if(e&&i){let t=encodeURIComponent(e),a=encodeURIComponent(i),f=`https://www.google.com/maps/search/?api=1&query=${t},+${a}`;window.open(f,"_blank")}}truncateText(e,i){return e.length<=i?e:e.slice(0,i)+"..."}likeBusiness(e,i){this._cookieService.get("token")?this.listingArray[i].liked==!0?this.filterservice.addDislikes(e).subscribe({next:a=>{this.listingArray[i].liked=!1,this.listingArray[i].likes+=1}}):this.filterservice.addLike(e).subscribe({next:a=>{this.listingArray[i].liked=!0,this.listingArray[i].likes-=1}}):this.router.navigate(["/login"])}truncateName(e){return e.length<=24?e:e.substring(0,24)}truncatedis(e){return e.length<=44?e:e.substring(0,44)}calculateDistance(e,i){let t=this.distanceService.calculateDistance(e,i);return t!==null?t.toFixed(0):"N/A"}ngOnInit(){this.totalRecords=this.listingArray.length}onPageChange(e){this.first=e.first,this.rows=e.rows}};c.\u0275fac=function(i){return new(i||c)(u(D),u(L),u(V),u(z))},c.\u0275cmp=P({type:c,selectors:[["app-list-view"]],inputs:{listingArray:"listingArray",filterarray:"filterarray",distances:"distances"},standalone:!0,features:[O],decls:6,vars:8,consts:[[1,"container"],[3,"first","rows","totalRecords","onPageChange"],["class","rania d-flex gap-4 justify-content-start align-items-center py-3 row web-v",4,"ngIf"],["class","mobile-v d-flex gap-4 justify-content-start align-items-center py-3","class","card my-2 py-0 mobile-v","style","padding-right: 23px",4,"ngFor","ngForOf"],[1,"rania","d-flex","gap-4","justify-content-start","align-items-center","py-3","row","web-v"],["class","card my-0 py-0 px-0","style","max-width: 635px",4,"ngFor","ngForOf"],[1,"card","my-0","py-0","px-0",2,"max-width","635px"],[1,"row","g-0"],[1,"col-5"],[1,"rounded-start","imgg",2,"height","195px","width","256px","object-fit","cover",3,"src","routerLink"],[1,"col-7"],[1,"card-body","d-flex","flex-column","align-items-between","justify-content-between","px-2","py-0",2,"height","100%"],[1,"d-flex","justify-content-between","align-items-center"],[1,"d-flex","justify-content-between","align-items-center","gap-3"],[1,"me-lg-5","me-0","mobile-font-size"],[1,"d-flex","gap-1","py-2"],[1,"pi","pi-map-marker",2,"color","#101010","font-size","1rem"],[2,"color","#101010","font-size","16px"],[1,"d-flex","justify-content-start","align-items-start","gap-1"],[1,"pi","pi-directions","fs-5"],[1,"m-0","distance"],[1,"btns","justify-content-between","align-items-end","d-flex","gap-1","py-2"],[1,"btns","flex-column","d-flex","gap-2"],[1,"call-now",3,"click"],[1,"Directions",3,"click"],[1,"card","my-2","py-0","mobile-v",2,"padding-right","23px"],[1,"rounded-start","imgg",2,"height","133px","width","176px","object-fit","cover",3,"src","routerLink"],[1,"me-lg-5","m-0",2,"font-size","13px"],[1,"gap-1"],[2,"color","#101010","font-size","10px"],[1,"pi","pi-directions",2,"font-size","10px"],[1,"btns","justify-content-between","align-items-baseline","d-flex","gap-1"]],template:function(i,t){i&1&&(r(0,"section")(1,"div",0)(2,"p-paginator",1),g("onPageChange",function(f){return t.onPageChange(f)}),o(),v(3,te,2,1,"div",2)(4,ie,33,6,"div",3),o(),r(5,"p-paginator",1),g("onPageChange",function(f){return t.onPageChange(f)}),o()()),i&2&&(s(2),_("first",t.first)("rows",t.rows)("totalRecords",t.listingArray.length),s(1),_("ngIf",t.listingArray),s(1),_("ngForOf",t.listingArray.slice(t.first,t.first+t.rows)),s(1),_("first",t.first)("rows",t.rows)("totalRecords",t.listingArray.length))},dependencies:[A,E,I,S,$,j,T],styles:[".rania[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;cursor:pointer}.rania[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-family:Lato,sans-serif;font-size:16px;line-height:33px;font-weight:900!important;white-space:nowrap}.rania[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ff8682;width:107px;height:59px;font-weight:700;font-size:17px;padding:0;font-family:Lato,sans-serif;gap:0!important}.rania[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-family:Lato,sans-serif}.rania[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   .call-now[_ngcontent-%COMP%]{background-color:#aefcc9;width:170px;height:30px;border:none;outline:none;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px}.rania[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   .Directions[_ngcontent-%COMP%]{background-color:#ffbf9d;width:170px;height:30px;border:none;outline:none;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px}#likeIcon[_ngcontent-%COMP%]{color:#000;cursor:pointer}#likeContainer.liked[_ngcontent-%COMP%]   #likeIcon[_ngcontent-%COMP%]{color:#9090e6}.imgg[_ngcontent-%COMP%]{background-color:#000}@media (max-width: 767px){.mobile-font-size[_ngcontent-%COMP%]{font-size:14px!important}.distance[_ngcontent-%COMP%]{font-size:10px!important}.btns[_ngcontent-%COMP%]   .call-now[_ngcontent-%COMP%]{width:95px!important;height:22px!important;font-size:10px!important;color:#000!important}.btns[_ngcontent-%COMP%]   .Directions[_ngcontent-%COMP%]{width:95px!important;height:22px!important;font-size:10px!important;margin-bottom:10px;color:#000!important}.web-v[_ngcontent-%COMP%]{display:none!important}.mobile-v[_ngcontent-%COMP%]{display:block!important}}.web-v[_ngcontent-%COMP%]{display:block}.mobile-v[_ngcontent-%COMP%]{display:none}"]});let l=c;return l})();export{pe as a,_e as b};
