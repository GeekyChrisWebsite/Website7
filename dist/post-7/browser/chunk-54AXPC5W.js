import{b as F,c as $}from"./chunk-3CEIRDKU.js";import{j,k as U,l as q}from"./chunk-NN7MHJ6T.js";import{a as z}from"./chunk-MDLD5AMO.js";import{a as L}from"./chunk-POW34RVY.js";import{n as B}from"./chunk-CIY2GROO.js";import{o as E,p as D,r as T}from"./chunk-EOFWODBS.js";import{Ab as c,Bb as O,Bc as A,Cb as x,Ga as k,Hb as V,Ib as G,Qa as a,Ra as C,Y as S,ab as h,ba as f,bb as w,ca as u,cb as y,db as R,gb as v,lb as r,mb as o,nb as p,rb as P,tb as g,ub as m,vc as I,wc as N,xb as M,yb as b}from"./chunk-ZFJE44N6.js";function Z(d,l){if(d&1&&p(0,"img",21),d&2){let n=m().$implicit;M("src",n.logo,k),b("routerLink","/details/",n.id,"")}}var ee=()=>({width:"100%"});function te(d,l){if(d&1){let n=P();r(0,"div",4)(1,"p-card",5),v(2,Z,1,2,"ng-template",6),r(3,"div",7)(4,"div",8),g("click",function(){let e=f(n),i=e.$implicit,s=e.index,_=m();return u(_.likeBusiness(i.id,s))}),p(5,"i",9),o(),r(6,"p",10),c(7),o(),r(8,"div",11)(9,"h5"),c(10),o()(),r(11,"div",12)(12,"div",13),p(13,"i",14),r(14,"p",15),c(15),r(16,"span"),c(17,"Miles"),o()()()(),r(18,"div"),p(19,"p",16),r(20,"p",17),c(21),o()(),r(22,"div",18)(23,"button",19),g("click",function(){let i=f(n).$implicit,s=m();return u(s.makePhoneCall(i.phone_number))}),c(24," Call Now "),o(),r(25,"button",20),g("click",function(){let i=f(n).$implicit,s=m();return u(s.handleMapClick(i.geo_direction))}),c(26," Directions "),o()()()()()}if(d&2){let n=l.$implicit,t=l.index,e=m();a(1),R(G(11,ee)),b("routerLink","/details/",n.id,""),a(3),y("liked",e.listingArray[t].liked),a(1),w("color",e.listingArray[t].liked?"black":"#0069D9"),a(2),x(" ",e.listingArray[t].likes," "),a(3),O(n.name),a(5),x(" Distance: ",e.calculateDistance(n.geo_direction.lat,n.geo_direction.lng)," "),a(6),x(" ",e.truncateText(n.description,20)," ")}}var ge=(()=>{let l=class l{constructor(t,e,i,s){this.filterservice=t,this._cookieService=e,this.router=i,this.distanceService=s,this.first=0,this.rows=5,this.isLiked=[],this.likeCountValue=[]}makePhoneCall(t){console.log("Initiating phone call to:",t),window.location.href="tel:"+t}handleMapClick(t){if(t){let e=`https://www.google.com/maps/search/?api=1&query=${t.lat},${t.lng}`,i=document.createElement("a");i.href=e,i.target="_blank",i.click()}}truncateText(t,e){return t.length<=e?t:t.slice(0,e)+"..."}likeBusiness(t,e){this._cookieService.get("token")?this.listingArray[e].liked==!0?this.filterservice.addDislikes(t).subscribe({next:s=>{this.listingArray[e].liked=!1,this.listingArray[e].likes+=1}}):this.filterservice.addLike(t).subscribe({next:s=>{this.listingArray[e].liked=!0,this.listingArray[e].likes-=1}}):this.router.navigate(["/login"])}calculateDistance(t,e){let i=this.distanceService.calculateDistance(t,e);return i!==null?i.toFixed(0):"N/A"}onPageChange(t){this.first=t.first,this.rows=t.rows}ngOnInit(){this.totalRecords=this.listingArray.length}};l.\u0275fac=function(e){return new(e||l)(C(z),C(L),C(E),C(j))},l.\u0275cmp=S({type:l,selectors:[["app-gallery-view"]],inputs:{listingArray:"listingArray",filterarray:"filterarray",distances:"distances"},standalone:!0,features:[V],decls:5,vars:7,consts:[[1,"container"],[3,"first","rows","totalRecords","onPageChange"],[1,"row","py-2"],["class","col-md-3 col-12 mb-3",4,"ngFor","ngForOf"],[1,"col-md-3","col-12","mb-3"],[3,"routerLink"],["pTemplate","header"],[1,"card-body"],[1,"div-like",3,"click"],["id","likeIcon",1,"bx","bxs-like","fs-4"],["id","likeCount",1,"m-0","likes"],[1,"title","py-2","text-center"],[1,"py-2"],[1,"d-flex","justify-content-center","align-items-center","gap-1"],[1,"pi","pi-directions","fs-4"],[1,"m-0","distance","text-center"],[1,"text-muted"],[1,"text-muted","text-center"],[1,"btns","justify-content-center","align-items-center","d-flex","gap-3","py-3"],[1,"call-now",3,"click"],[1,"Directions",3,"click"],["alt","Card",1,"w-100",3,"src","routerLink"]],template:function(e,i){e&1&&(r(0,"div",0)(1,"p-paginator",1),g("onPageChange",function(_){return i.onPageChange(_)}),o(),r(2,"div",2),v(3,te,27,12,"div",3),o(),r(4,"p-paginator",1),g("onPageChange",function(_){return i.onPageChange(_)}),o()()),e&2&&(a(1),h("first",i.first)("rows",i.rows)("totalRecords",i.listingArray.length),a(2),h("ngForOf",i.listingArray.slice(i.first,i.first+i.rows)),a(1),h("first",i.first)("rows",i.rows)("totalRecords",i.listingArray.length))},dependencies:[A,I,T,D,$,F,B,q,U],styles:["span[_ngcontent-%COMP%]{color:#ffbf9d;font-weight:700}i[_ngcontent-%COMP%]{color:#ffbf9d}.div-like[_ngcontent-%COMP%]{position:absolute;top:222px;right:19px;background-color:#fff;width:45px;height:45px;border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%;justify-content:center;align-items:center;display:flex}.likes[_ngcontent-%COMP%]{position:absolute;top:280px;right:28px}.col-md-3[_ngcontent-%COMP%]{position:relative}.call-now[_ngcontent-%COMP%]{background-color:#000;color:#fff;width:100px;height:40px;border:none;outline:none;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px}.Directions[_ngcontent-%COMP%]{background-color:#ffbf9d;width:100px;height:40px;border:none;outline:none;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;color:#000}img[_ngcontent-%COMP%]{height:272px;width:300px;background-color:#000;border-radius:7px!important;-webkit-border-radius:7px!important;-moz-border-radius:7px!important;-ms-border-radius:7px!important;-o-border-radius:7px!important}"]});let d=l;return d})();function ie(d,l){if(d&1){let n=P();r(0,"div",6)(1,"div",7)(2,"div",8),p(3,"img",9),o(),r(4,"div",10)(5,"div",11)(6,"div",12)(7,"div",13)(8,"div")(9,"h5",14),c(10),o()()(),p(11,"div"),o(),r(12,"div",15),p(13,"i",16),r(14,"small"),c(15),o()(),r(16,"div",17),p(17,"i",18),r(18,"p",19),c(19),r(20,"span"),c(21,"miles"),o()()(),r(22,"div",20)(23,"div",21)(24,"button",22),g("click",function(){let i=f(n).$implicit,s=m(2);return u(s.makePhoneCall(i.phone_number))}),c(25," Call "),o(),r(26,"button",23),g("click",function(){let i=f(n).$implicit,s=m(2);return u(s.handleMapClick(i.geo_direction))}),c(27," Directions "),o()(),r(28,"div")(29,"div")(30,"div",24),g("click",function(){let e=f(n),i=e.$implicit,s=e.index,_=m(2);return u(_.likeBusiness(i.id,s))}),p(31,"i",25),r(32,"p",26),c(33),o()()()()()()()()()}if(d&2){let n=l.$implicit,t=l.index,e=m(2);a(3),M("src",n.logo,k),b("routerLink","/details/",n.id,""),a(7),x(" ",n.name," "),a(5),O(e.truncateText(n.state,10)+", "+e.truncateText(n.street,10)),a(4),x(" Distance: ",e.calculateDistance(n.geo_direction.lat,n.geo_direction.lng)," "),a(11),y("liked",e.listingArray[t].liked),a(1),w("color",e.listingArray[t].liked?"black":"#0069D9"),a(2),x(" ",e.listingArray[t].likes," ")}}function ne(d,l){if(d&1&&(r(0,"div",4),v(1,ie,34,10,"div",5),o()),d&2){let n=m();a(1),h("ngForOf",n.listingArray.slice(n.first,n.first+n.rows))}}function re(d,l){if(d&1){let n=P();r(0,"div",27)(1,"div",7)(2,"div",10),p(3,"img",28),o(),r(4,"div",8)(5,"div",11)(6,"div",12)(7,"div",13)(8,"div")(9,"h5",29),c(10),o()()(),p(11,"div"),o(),r(12,"div",30),p(13,"i",31),r(14,"small",32),c(15),o()(),r(16,"div",17),p(17,"i",33),r(18,"p",19),c(19),r(20,"span"),c(21,"miles"),o()()(),r(22,"div",34)(23,"div",21)(24,"button",22),g("click",function(){let i=f(n).$implicit,s=m();return u(s.makePhoneCall(i.phone_number))}),c(25," Call "),o(),r(26,"button",23),g("click",function(){let i=f(n).$implicit,s=m();return u(s.handleMapClick(i.geo_direction))}),c(27," Directions "),o()(),r(28,"div")(29,"div")(30,"div",24),g("click",function(){let e=f(n),i=e.$implicit,s=e.index,_=m();return u(_.likeBusiness(i.id,s))}),p(31,"i",35),r(32,"p",36),c(33),o()()()()()()()()()}if(d&2){let n=l.$implicit,t=l.index,e=m();a(3),M("src",n.logo,k),b("routerLink","/details/",n.id,""),a(7),x(" ",n.name," "),a(5),O(e.truncateText(n.state,5)+", "+e.truncateText(n.street,5)),a(4),x(" Distance: ",e.calculateDistance(n.geo_direction.lat,n.geo_direction.lng)," "),a(11),y("liked",e.listingArray[t].liked),a(1),w("color",e.listingArray[t].liked?"black":"#0069D9"),a(2),x(" ",e.listingArray[t].likes," ")}}var Ce=(()=>{let l=class l{constructor(t,e,i,s){this.filterservice=t,this._cookieService=e,this.router=i,this.distanceService=s,this.first=0,this.rows=6,this.maxDescriptionLength=20,this.maxname=24,this.likeCountValue=[],this.isLiked=Array(this.listingArray?.length).fill(!1)}makePhoneCall(t){window.location.href="tel:"+t}handleMapClick(t){if(t){let e=`https://www.google.com/maps/search/?api=1&query=${t.lat},${t.lng}`,i=document.createElement("a");i.href=e,i.target="_blank",i.click()}}truncateText(t,e){return t.length<=e?t:t.slice(0,e)+"..."}likeBusiness(t,e){this._cookieService.get("token")?this.listingArray[e].liked==!0?this.filterservice.addDislikes(t).subscribe({next:s=>{this.listingArray[e].liked=!1,this.listingArray[e].likes+=1}}):this.filterservice.addLike(t).subscribe({next:s=>{this.listingArray[e].liked=!0,this.listingArray[e].likes-=1}}):this.router.navigate(["/login"])}truncateName(t){return t.length<=24?t:t.substring(0,24)}truncatedis(t){return t.length<=44?t:t.substring(0,44)}calculateDistance(t,e){let i=this.distanceService.calculateDistance(t,e);return i!==null?i.toFixed(0):"N/A"}ngOnInit(){this.totalRecords=this.listingArray.length}onPageChange(t){this.first=t.first,this.rows=t.rows}};l.\u0275fac=function(e){return new(e||l)(C(z),C(L),C(E),C(j))},l.\u0275cmp=S({type:l,selectors:[["app-list-view"]],inputs:{listingArray:"listingArray",filterarray:"filterarray",distances:"distances"},standalone:!0,features:[V],decls:6,vars:8,consts:[[1,"container"],[3,"first","rows","totalRecords","onPageChange"],["class","rania d-flex gap-4 justify-content-start align-items-center py-3 row web-v",4,"ngIf"],["class","mobile-v d-flex gap-4 justify-content-start align-items-center py-3","class","card my-2 py-0 mobile-v","style","padding-right: 23px",4,"ngFor","ngForOf"],[1,"rania","d-flex","gap-4","justify-content-start","align-items-center","py-3","row","web-v"],["class","card my-0 py-0 px-0","style","max-width: 635px",4,"ngFor","ngForOf"],[1,"card","my-0","py-0","px-0",2,"max-width","635px"],[1,"row","g-0"],[1,"col-5"],[1,"rounded-start","imgg",2,"height","195px","width","256px","object-fit","cover",3,"src","routerLink"],[1,"col-7"],[1,"card-body","d-flex","flex-column","align-items-between","justify-content-between","px-2","py-0",2,"height","100%"],[1,"d-flex","justify-content-between","align-items-center"],[1,"d-flex","justify-content-between","align-items-center","gap-3"],[1,"me-lg-5","me-0","mobile-font-size"],[1,"d-flex","gap-1","py-2"],[1,"pi","pi-map-marker",2,"color","#101010","font-size","1rem"],[1,"d-flex","justify-content-start","align-items-start","gap-1"],[1,"pi","pi-directions","fs-5"],[1,"m-0","distance"],[1,"btns","justify-content-between","align-items-end","d-flex","gap-1","py-2"],[1,"btns","flex-column","d-flex","gap-2"],[1,"call-now",3,"click"],[1,"Directions",3,"click"],[1,"d-flex","justify-content-center","align-items-center","gap-1",3,"click"],["id","likeIcon",1,"bx","bxs-like","fs-4"],["id","likeCount",1,"m-0"],[1,"card","my-2","py-0","mobile-v",2,"padding-right","23px"],[1,"rounded-start","imgg",2,"height","133px","width","176px","object-fit","cover",3,"src","routerLink"],[1,"me-lg-5","m-0",2,"font-size","13px"],[1,"d-flex","gap-1"],[1,"pi","pi-map-marker",2,"font-size","10px"],[2,"font-size","10px","margin","0px"],[1,"pi","pi-directions",2,"font-size","10px"],[1,"btns","justify-content-between","align-items-baseline","d-flex","gap-1"],["id","likeIcon",1,"bx","bxs-like","fs-6"],["id","likeCount",1,"m-0",2,"font-size","12px"]],template:function(e,i){e&1&&(r(0,"section")(1,"div",0)(2,"p-paginator",1),g("onPageChange",function(_){return i.onPageChange(_)}),o(),v(3,ne,2,1,"div",2)(4,re,34,10,"div",3),o(),r(5,"p-paginator",1),g("onPageChange",function(_){return i.onPageChange(_)}),o()()),e&2&&(a(2),h("first",i.first)("rows",i.rows)("totalRecords",i.listingArray.length),a(1),h("ngIf",i.listingArray),a(1),h("ngForOf",i.listingArray.slice(i.first,i.first+i.rows)),a(1),h("first",i.first)("rows",i.rows)("totalRecords",i.listingArray.length))},dependencies:[T,D,A,I,N,$,F],styles:[".rania[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;cursor:pointer}.rania[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-family:Lato,sans-serif;font-size:16px;line-height:33px;font-weight:900!important;white-space:nowrap}.rania[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ff8682;width:107px;height:59px;font-weight:700;font-size:17px;padding:0;font-family:Lato,sans-serif;gap:0!important}.rania[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-family:Lato,sans-serif}.rania[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:44px;border-radius:10px;width:86px;background-color:#8dd3bb;outline:none;border:none}.rania[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   .call-now[_ngcontent-%COMP%]{background-color:#aefcc9;width:90px;height:30px;border:none;outline:none;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px}.rania[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   .Directions[_ngcontent-%COMP%]{background-color:#ffbf9d;width:90px;height:30px;border:none;outline:none;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px}#likeIcon[_ngcontent-%COMP%]{color:#000;cursor:pointer}#likeContainer.liked[_ngcontent-%COMP%]   #likeIcon[_ngcontent-%COMP%]{color:#9090e6}@media (max-width: 767px){.mobile-font-size[_ngcontent-%COMP%]{font-size:14px!important}.btns[_ngcontent-%COMP%]   .call-now[_ngcontent-%COMP%]{width:87px!important;font-size:15px;color:#000}.btns[_ngcontent-%COMP%]   .Directions[_ngcontent-%COMP%]{width:90px!important;font-size:15px;color:#000}}.imgg[_ngcontent-%COMP%]{background-color:#000}@media (max-width: 767px){.mobile-font-size[_ngcontent-%COMP%]{font-size:14px!important}.distance[_ngcontent-%COMP%]{font-size:10px!important}.btns[_ngcontent-%COMP%]   .call-now[_ngcontent-%COMP%]{width:72px!important;height:22px!important;font-size:10px!important}.btns[_ngcontent-%COMP%]   .Directions[_ngcontent-%COMP%]{width:72px!important;height:22px!important;font-size:10px!important;margin-bottom:10px}.web-v[_ngcontent-%COMP%]{display:none!important}.mobile-v[_ngcontent-%COMP%]{display:block!important}}.web-v[_ngcontent-%COMP%]{display:block}.mobile-v[_ngcontent-%COMP%]{display:none}"]});let d=l;return d})();export{ge as a,Ce as b};
