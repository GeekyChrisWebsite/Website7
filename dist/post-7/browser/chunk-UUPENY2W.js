import{j as F}from"./chunk-2QU2VZ2J.js";import{a as L}from"./chunk-4O2QTFZ7.js";import{a as T}from"./chunk-N3Q5VJD2.js";import{o as z,p as j,r as E}from"./chunk-DAQJKRHW.js";import{Ab as d,Bb as b,Bc as G,Cb as f,Dc as D,Ga as h,Hb as I,Qa as c,Ra as u,Rb as $,Tb as B,Y as S,ab as C,ba as g,bb as M,ca as _,cb as w,gb as v,lb as o,mb as s,nb as m,rb as P,tb as x,ub as p,wc as V,xb as O,xc as A,yb as y}from"./chunk-UIKUD3CR.js";function K(l,a){if(l&1&&(o(0,"div",17)(1,"div",18),m(2,"i",19),o(3,"p",20),d(4),$(5,"number"),o(6,"span"),d(7,"Miles"),s()()()()),l&2){let i=p().index,e=p(2);c(4),f(" Distance: ",B(5,1,e.distances[i],"1.0-0")," ")}}function Q(l,a){if(l&1){let i=P();o(0,"div",5)(1,"div",6)(2,"div",7),x("click",function(t){let n=g(i),r=n.$implicit,k=n.index;return p(2).likeBusiness(r.id,k),_(t.stopPropagation())}),m(3,"i",8),s(),o(4,"p",9),d(5),s(),m(6,"img",10),o(7,"div",11)(8,"h5"),d(9),s()(),v(10,K,8,4,"div",12),o(11,"div")(12,"p",13),d(13),s()(),o(14,"div",14)(15,"button",15),x("click",function(){let n=g(i).$implicit,r=p(2);return _(r.makePhoneCall(n.phone_number))}),d(16," Call Now "),s(),o(17,"button",16),x("click",function(){let n=g(i).$implicit,r=p(2);return _(r.handleMapClick(n.geo_direction))}),d(18," Directions "),s()()()()}if(l&2){let i=a.$implicit,e=a.index,t=p(2);c(1),y("routerLink","/details/",i.id,""),c(1),w("liked",t.listingArray[e].liked),c(1),M("color",t.listingArray[e].liked?"black":"#0069D9"),c(2),b(t.listingArray[e].likes),c(1),O("src",i.logo,h),c(3),b(i.name),c(1),C("ngIf",t.distances&&t.distances.length>0),c(3),b(t.truncateText(i.description,20))}}function W(l,a){if(l&1&&(o(0,"section",1)(1,"div",2)(2,"div",3),v(3,Q,19,10,"div",4),s()()()),l&2){let i=p();c(3),C("ngForOf",i.listingArray)}}var nt=(()=>{let a=class a{constructor(e,t,n,r){this.filterservice=e,this._cookieService=t,this.router=n,this.distanceService=r,this.isLiked=[],this.likeCountValue=[]}makePhoneCall(e){console.log("Initiating phone call to:",e),window.location.href="tel:"+e}handleMapClick(e){if(console.log(e),e){let t=`https://www.google.com/maps/search/?api=1&query=${e.lat},${e.lng}`;window.open(t,"_blank")}}truncateText(e,t){return e.length<=t?e:e.slice(0,t)+"..."}likeBusiness(e,t){this._cookieService.get("token")?this.listingArray[t].liked==!0?(console.log(this.listingArray[t].liked),this.filterservice.addDislikes(e).subscribe({next:r=>{console.log(r,"like"),this.listingArray[t].liked=!1,this.listingArray[t].likes+=1}})):this.filterservice.addLike(e).subscribe({next:r=>{console.log(r,"dislike"),this.listingArray[t].liked=!0,this.listingArray[t].likes-=1}}):this.router.navigate(["/login"])}calculateDistance(e,t){let n=this.distanceService.calculateDistance(e,t);return n!==null?n.toFixed(0):"N/A"}};a.\u0275fac=function(t){return new(t||a)(u(L),u(T),u(z),u(F))},a.\u0275cmp=S({type:a,selectors:[["app-gallery-view"]],inputs:{listingArray:"listingArray",filterarray:"filterarray",distances:"distances"},standalone:!0,features:[I],decls:1,vars:1,consts:[["class","list-img",4,"ngIf"],[1,"list-img"],[1,"container"],[1,"row","justify-content-start","align-items-center","d-flex","flex-wrap","gap-3","py-3","gap-lg-0"],["class","col-md-3 col-12 mb-3",4,"ngFor","ngForOf"],[1,"col-md-3","col-12","mb-3"],[1,"card","justify-content-between","align-items-center","d-flex",3,"routerLink"],[1,"d-flex","justify-content-center","align-items-center","gap-1","div-like",3,"click"],["id","likeIcon",1,"bx","bxs-like","fs-4"],["id","likeCount",1,"m-0","likes"],["alt","",1,"border","rounded",3,"src"],[1,"title","py-2"],["class","py-2",4,"ngIf"],[1,"text-muted"],[1,"btns","justify-content-start","align-items-start","d-flex","gap-3","py-3"],[1,"call-now",3,"click"],[1,"Directions",3,"click"],[1,"py-2"],[1,"d-flex","justify-content-center","align-items-center","gap-1"],[1,"pi","pi-directions","fs-4"],[1,"p-0","m-0"]],template:function(t,n){t&1&&v(0,W,4,1,"section",0),t&2&&C("ngIf",n.listingArray)},dependencies:[D,V,A,G,E,j],styles:[".list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{position:relative}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border-radius:10px;-webkit-border-radius:10px;-moz-border-radius:10px;-ms-border-radius:10px;-o-border-radius:10px;box-shadow:0 4px 4px #00000040}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:228px;width:300px;background-color:#000;object-fit:contain;border-radius:7px!important;-webkit-border-radius:7px!important;-moz-border-radius:7px!important;-ms-border-radius:7px!important;-o-border-radius:7px!important}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 4px 4px #00000040}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-weight:600;font-family:Lato,sans-serif;color:#0f3d3e;font-size:25px}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   .call-now[_ngcontent-%COMP%]{background-color:#aefcc9;width:130px;height:50px;border:none;outline:none;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;color:#000}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   .Directions[_ngcontent-%COMP%]{background-color:#ffbf9d;width:130px;height:50px;border:none;outline:none;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;color:#000}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .div-like[_ngcontent-%COMP%]{position:absolute;top:203px;right:16px;background-color:#fff;width:45px;height:45px;border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%;justify-content:center;align-items:center;display:flex}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .likes[_ngcontent-%COMP%]{position:absolute;top:258px;right:34px}@media (max-width: 767px){img[_ngcontent-%COMP%]{height:247px!important;width:326px!important}}"]});let l=a;return l})();function X(l,a){if(l&1){let i=P();o(0,"div",5)(1,"div",6)(2,"div",7),m(3,"img",8),s(),o(4,"div",9)(5,"div",10)(6,"div",11)(7,"div",12)(8,"div")(9,"h5",13),d(10),s()()(),m(11,"div"),s(),o(12,"div",14),m(13,"i",15),o(14,"small"),d(15),s()(),o(16,"div",16),m(17,"i",17),o(18,"p",18),d(19),o(20,"span"),d(21,"miles"),s()()(),o(22,"div",19)(23,"div",20)(24,"button",21),x("click",function(){let n=g(i).$implicit,r=p(2);return _(r.makePhoneCall(n.phone_number))}),d(25," Call "),s(),o(26,"button",22),x("click",function(){let n=g(i).$implicit,r=p(2);return _(r.handleMapClick(n.geo_direction))}),d(27," Directions "),s()(),o(28,"div")(29,"div")(30,"div",23),x("click",function(){let t=g(i),n=t.$implicit,r=t.index,k=p(2);return _(k.likeBusiness(n.id,r))}),m(31,"i",24),o(32,"p",25),d(33),s()()()()()()()()()}if(l&2){let i=a.$implicit,e=a.index,t=p(2);c(3),O("src",i.logo,h),y("routerLink","/details/",i.id,""),c(7),f(" ",i.name," "),c(5),b(t.truncateText(i.state,10)+", "+t.truncateText(i.street,10)),c(4),f(" Distance: ",t.calculateDistance(i.geo_direction.lat,i.geo_direction.lng)," "),c(11),w("liked",t.listingArray[e].liked),c(1),M("color",t.listingArray[e].liked?"black":"#0069D9"),c(2),f(" ",t.listingArray[e].likes," ")}}function Y(l,a){if(l&1&&(o(0,"div",3),v(1,X,34,10,"div",4),s()),l&2){let i=p();c(1),C("ngForOf",i.listingArray.slice(i.first,i.first+i.rows))}}function Z(l,a){if(l&1){let i=P();o(0,"div",26)(1,"div",6)(2,"div",9),m(3,"img",27),s(),o(4,"div",7)(5,"div",10)(6,"div",11)(7,"div",12)(8,"div")(9,"h5",28),d(10),s()()(),m(11,"div"),s(),o(12,"div",29),m(13,"i",30),o(14,"small",31),d(15),s()(),o(16,"div",16),m(17,"i",32),o(18,"p",18),d(19),o(20,"span"),d(21,"miles"),s()()(),o(22,"div",33)(23,"div",20)(24,"button",21),x("click",function(){let n=g(i).$implicit,r=p();return _(r.makePhoneCall(n.phone_number))}),d(25," Call "),s(),o(26,"button",22),x("click",function(){let n=g(i).$implicit,r=p();return _(r.handleMapClick(n.geo_direction))}),d(27," Directions "),s()(),o(28,"div")(29,"div")(30,"div",23),x("click",function(){let t=g(i),n=t.$implicit,r=t.index,k=p();return _(k.likeBusiness(n.id,r))}),m(31,"i",34),o(32,"p",35),d(33),s()()()()()()()()()}if(l&2){let i=a.$implicit,e=a.index,t=p();c(3),O("src",i.logo,h),y("routerLink","/details/",i.id,""),c(7),f(" ",i.name," "),c(5),b(t.truncateText(i.state,5)+", "+t.truncateText(i.street,5)),c(4),f(" Distance: ",t.calculateDistance(i.geo_direction.lat,i.geo_direction.lng)," "),c(11),w("liked",t.listingArray[e].liked),c(1),M("color",t.listingArray[e].liked?"black":"#0069D9"),c(2),f(" ",t.listingArray[e].likes," ")}}var st=(()=>{let a=class a{constructor(e,t,n,r){this.filterservice=e,this._cookieService=t,this.router=n,this.distanceService=r,this.first=0,this.rows=20,this.maxDescriptionLength=20,this.maxname=24,this.likeCountValue=[],this.isLiked=Array(this.listingArray?.length).fill(!1)}makePhoneCall(e){console.log("Initiating phone call to:",e),window.location.href="tel:"+e}handleMapClick(e){if(console.log(e),e){let t=`https://www.google.com/maps/search/?api=1&query=${e.lat},${e.lng}`;window.open(t,"_blank")}}truncateText(e,t){return e.length<=t?e:e.slice(0,t)+"..."}likeBusiness(e,t){this._cookieService.get("token")?this.listingArray[t].liked==!0?(console.log(this.listingArray[t].liked),this.filterservice.addDislikes(e).subscribe({next:r=>{console.log(r,"like"),this.listingArray[t].liked=!1,this.listingArray[t].likes+=1}})):this.filterservice.addLike(e).subscribe({next:r=>{console.log(r,"dislike"),this.listingArray[t].liked=!0,this.listingArray[t].likes-=1}}):this.router.navigate(["/login"])}truncateName(e){return e.length<=24?e:e.substring(0,24)}truncatedis(e){return e.length<=44?e:e.substring(0,44)}calculateDistance(e,t){let n=this.distanceService.calculateDistance(e,t);return n!==null?n.toFixed(0):"N/A"}};a.\u0275fac=function(t){return new(t||a)(u(L),u(T),u(z),u(F))},a.\u0275cmp=S({type:a,selectors:[["app-list-view"]],inputs:{listingArray:"listingArray",filterarray:"filterarray",distances:"distances"},standalone:!0,features:[I],decls:4,vars:2,consts:[[1,"container"],["class","rania d-flex gap-4 justify-content-start align-items-center py-3 row web-v",4,"ngIf"],["class","mobile-v d-flex gap-4 justify-content-start align-items-center py-3","class","card my-2 py-0 mobile-v","style","padding-right: 23px",4,"ngFor","ngForOf"],[1,"rania","d-flex","gap-4","justify-content-start","align-items-center","py-3","row","web-v"],["class","card my-0 py-0 px-0","style","max-width: 635px",4,"ngFor","ngForOf"],[1,"card","my-0","py-0","px-0",2,"max-width","635px"],[1,"row","g-0"],[1,"col-5"],[1,"rounded-start","imgg",2,"height","195px","width","256px","object-fit","contain",3,"src","routerLink"],[1,"col-7"],[1,"card-body","d-flex","flex-column","align-items-between","justify-content-between","px-2","py-0",2,"height","100%"],[1,"d-flex","justify-content-between","align-items-center"],[1,"d-flex","justify-content-between","align-items-center","gap-3"],[1,"me-lg-5","me-0","mobile-font-size"],[1,"d-flex","gap-1","py-2"],[1,"pi","pi-map-marker",2,"color","#101010","font-size","1rem"],[1,"d-flex","justify-content-start","align-items-start","gap-1"],[1,"pi","pi-directions","fs-5"],[1,"m-0","distance"],[1,"btns","justify-content-between","align-items-end","d-flex","gap-1","py-2"],[1,"btns","flex-column","d-flex","gap-2"],[1,"call-now",3,"click"],[1,"Directions",3,"click"],[1,"d-flex","justify-content-center","align-items-center","gap-1",3,"click"],["id","likeIcon",1,"bx","bxs-like","fs-4"],["id","likeCount",1,"m-0"],[1,"card","my-2","py-0","mobile-v",2,"padding-right","23px"],[1,"rounded-start","imgg",2,"height","133px","width","176px","object-fit","contain",3,"src","routerLink"],[1,"me-lg-5","m-0",2,"font-size","13px"],[1,"d-flex","gap-1"],[1,"pi","pi-map-marker",2,"font-size","10px"],[2,"font-size","10px","margin","0px"],[1,"pi","pi-directions",2,"font-size","10px"],[1,"btns","justify-content-between","align-items-baseline","d-flex","gap-1"],["id","likeIcon",1,"bx","bxs-like","fs-6"],["id","likeCount",1,"m-0",2,"font-size","12px"]],template:function(t,n){t&1&&(o(0,"section")(1,"div",0),v(2,Y,2,1,"div",1)(3,Z,34,10,"div",2),s()()),t&2&&(c(2),C("ngIf",n.listingArray),c(1),C("ngForOf",n.listingArray.slice(n.first,n.first+n.rows)))},dependencies:[E,j,D,V,A],styles:[".rania[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;cursor:pointer}.rania[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-family:Lato,sans-serif;font-size:16px;line-height:33px;font-weight:900!important;white-space:nowrap}.rania[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ff8682;width:107px;height:59px;font-weight:700;font-size:17px;padding:0;font-family:Lato,sans-serif;gap:0!important}.rania[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-family:Lato,sans-serif}.rania[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:44px;border-radius:10px;width:86px;background-color:#8dd3bb;outline:none;border:none}.rania[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   .call-now[_ngcontent-%COMP%]{background-color:#aefcc9;width:90px;height:30px;border:none;outline:none;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px}.rania[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   .Directions[_ngcontent-%COMP%]{background-color:#ffbf9d;width:90px;height:30px;border:none;outline:none;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px}#likeIcon[_ngcontent-%COMP%]{color:#000;cursor:pointer}#likeContainer.liked[_ngcontent-%COMP%]   #likeIcon[_ngcontent-%COMP%]{color:#9090e6}@media (max-width: 767px){.mobile-font-size[_ngcontent-%COMP%]{font-size:14px!important}.btns[_ngcontent-%COMP%]   .call-now[_ngcontent-%COMP%]{width:87px!important;font-size:15px;color:#000}.btns[_ngcontent-%COMP%]   .Directions[_ngcontent-%COMP%]{width:90px!important;font-size:15px;color:#000}}.imgg[_ngcontent-%COMP%]{background-color:#000}@media (max-width: 767px){.mobile-font-size[_ngcontent-%COMP%]{font-size:14px!important}.btns[_ngcontent-%COMP%]   .call-now[_ngcontent-%COMP%]{width:72px!important;height:22px!important;font-size:10px!important}.btns[_ngcontent-%COMP%]   .Directions[_ngcontent-%COMP%]{width:72px!important;height:22px!important;font-size:10px!important;margin-bottom:10px}.web-v[_ngcontent-%COMP%]{display:none!important}.mobile-v[_ngcontent-%COMP%]{display:block!important}}.web-v[_ngcontent-%COMP%]{display:block}.mobile-v[_ngcontent-%COMP%]{display:none}"]});let l=a;return l})();export{nt as a,st as b};
