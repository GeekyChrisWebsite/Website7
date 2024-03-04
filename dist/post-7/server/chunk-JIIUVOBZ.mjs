import './polyfills.server.mjs';
import{a as $}from"./chunk-2GLMVD5P.mjs";import{a as F}from"./chunk-3LUGQ452.mjs";import{s as T,t as L,v as z}from"./chunk-2AX55QIO.mjs";import{$a as i,Ac as E,Ea as s,Fa as f,Fb as S,Hb as A,Qa as C,Ra as P,Sa as O,U as b,Wa as M,Z as m,_,ab as l,bb as g,fb as w,hb as u,ib as p,lb as v,mb as y,ob as d,pb as x,qb as h,sa as k,tc as V,uc as j,vb as I,yc as D}from"./chunk-OAY366PD.mjs";function K(o,r){if(o&1&&(i(0,"div",17)(1,"div",18),g(2,"i",19),i(3,"p",20),d(4),S(5,"number"),i(6,"span"),d(7,"Miles"),l()()()()),o&2){let n=p().index,e=p(2);s(4),h("Distance: ",A(5,1,e.distances[n],"1.0-0")," ")}}function H(o,r){if(o&1){let n=w();i(0,"div",5)(1,"div",6)(2,"div",7),u("click",function(t){let c=m(n),a=c.$implicit,B=c.index;return p(2).likeBusiness(a.id,B),_(t.stopPropagation())}),g(3,"i",8),l(),i(4,"p",9),d(5),l(),g(6,"img",10),i(7,"div",11)(8,"h5"),d(9),l()(),M(10,K,8,4,"div",12),i(11,"div")(12,"p",13),d(13),l()(),i(14,"div",14)(15,"button",15),u("click",function(){let c=m(n).$implicit,a=p(2);return _(a.makePhoneCall(c.phone_number))}),d(16,"Call Now"),l(),i(17,"button",16),u("click",function(){let c=m(n).$implicit,a=p(2);return _(a.handleMapClick(c.geo_direction))}),d(18,"Directions"),l()()()()}if(o&2){let n=r.$implicit,e=r.index,t=p(2);s(1),y("routerLink","/details/",n.id,""),s(1),O("liked",t.listingArray[e].liked),s(1),P("color",t.listingArray[e].liked?"black":"#0069D9"),s(2),x(t.listingArray[e].likes),s(1),v("src",n.logo,k),s(3),x(n.name),s(1),C("ngIf",t.distances&&t.distances.length>0),s(3),x(t.truncateText(n.description,20))}}function J(o,r){if(o&1&&(i(0,"section",1)(1,"div",2)(2,"div",3),M(3,H,19,10,"div",4),l()()()),o&2){let n=p();s(3),C("ngForOf",n.listingArray)}}var tt=(()=>{let r=class r{constructor(e,t,c){this.filterservice=e,this._cookieService=t,this.router=c,this.isLiked=[],this.likeCountValue=[]}makePhoneCall(e){console.log("Initiating phone call to:",e),window.location.href="tel:"+e}handleMapClick(e){if(console.log(e),e){let t=`https://www.google.com/maps/search/?api=1&query=${e.lat},${e.lng}`;window.open(t,"_blank")}}truncateText(e,t){return e.length<=t?e:e.slice(0,t)+"..."}likeBusiness(e,t){this._cookieService.get("token")?this.listingArray[t].liked==!0?(console.log(this.listingArray[t].liked),this.filterservice.addLike(e).subscribe({next:a=>{console.log(a,"like"),this.listingArray[t].liked=!1,this.listingArray[t].likes+=1}})):this.filterservice.addDislikes(e).subscribe({next:a=>{console.log(a,"dislike"),this.listingArray[t].liked=!0,this.listingArray[t].likes-=1}}):this.router.navigate(["/login"])}};r.\u0275fac=function(t){return new(t||r)(f(F),f($),f(T))},r.\u0275cmp=b({type:r,selectors:[["app-gallery-view"]],inputs:{listingArray:"listingArray",filterarray:"filterarray",distances:"distances"},standalone:!0,features:[I],decls:1,vars:1,consts:[["class","list-img",4,"ngIf"],[1,"list-img"],[1,"container"],[1,"row","justify-content-start","align-items-center","d-flex","flex-wrap","gap-3","py-3","gap-lg-0"],["class","col-md-3 col-12 mb-3",4,"ngFor","ngForOf"],[1,"col-md-3","col-12","mb-3"],[1,"card","justify-content-between","align-items-center","d-flex",3,"routerLink"],[1,"d-flex","justify-content-center","align-items-center","gap-1","div-like",3,"click"],["id","likeIcon",1,"bx","bxs-like","fs-4"],["id","likeCount",1,"m-0","likes"],["alt","",1,"w-100","img-fluid","object-fit-fill","border","rounded",3,"src"],[1,"title","py-2"],["class","py-2",4,"ngIf"],[1,"text-muted"],[1,"btns","justify-content-start","align-items-start","d-flex","gap-3","py-3"],[1,"call-now",3,"click"],[1,"Directions",3,"click"],[1,"py-2"],[1,"d-flex","justify-content-center","align-items-center","gap-1"],[1,"pi","pi-directions","fs-4"],[1,"p-0","m-0"]],template:function(t,c){t&1&&M(0,J,4,1,"section",0),t&2&&C("ngIf",c.listingArray)},dependencies:[E,V,j,D,z,L],styles:[".list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{position:relative}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border-radius:10px;-webkit-border-radius:10px;-moz-border-radius:10px;-ms-border-radius:10px;-o-border-radius:10px;box-shadow:0 4px 4px #00000040}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:250px;border-radius:7px!important;-webkit-border-radius:7px!important;-moz-border-radius:7px!important;-ms-border-radius:7px!important;-o-border-radius:7px!important}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 4px 4px #00000040}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-weight:600;font-family:Lato,sans-serif;color:#0f3d3e;font-size:25px}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   .call-now[_ngcontent-%COMP%]{background-color:#aefcc9;width:130px;height:50px;border:none;outline:none;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   .Directions[_ngcontent-%COMP%]{background-color:#ffbf9d;width:130px;height:50px;border:none;outline:none;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .div-like[_ngcontent-%COMP%]{position:absolute;top:203px;right:16px;background-color:#fff;width:45px;height:45px;border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%;justify-content:center;align-items:center;display:flex}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .likes[_ngcontent-%COMP%]{position:absolute;top:258px;right:34px}"]});let o=r;return o})();function Q(o,r){if(o&1){let n=w();i(0,"div",4)(1,"div",5)(2,"div",6),g(3,"img",7),l(),i(4,"div",8)(5,"div",9)(6,"div",10)(7,"div",11)(8,"div")(9,"h5",12),d(10),l()()(),g(11,"div"),l(),i(12,"div",13),g(13,"i",14),i(14,"small"),d(15),l()(),i(16,"div",15),g(17,"i",16),i(18,"small"),d(19),S(20,"number"),l()(),i(21,"div",17)(22,"div",18)(23,"button",19),u("click",function(){let c=m(n).$implicit,a=p(2);return _(a.makePhoneCall(c.phone_number))}),d(24,"Call"),l(),i(25,"button",20),u("click",function(){let c=m(n).$implicit,a=p(2);return _(a.handleMapClick(c.geo_direction))}),d(26,"Directions"),l()(),i(27,"div",21),u("click",function(){let t=m(n),c=t.$implicit,a=t.index,B=p(2);return _(B.likeBusiness(c.id,a))}),g(28,"i",22),i(29,"p",23),d(30),l()()()()()()()}if(o&2){let n=r.$implicit,e=r.index,t=p(2);s(3),v("src",n.logo,k),y("routerLink","/details/",n.id,""),s(7),x(n.name),s(5),x(t.truncateText(n.state,10)+", "+t.truncateText(n.street,10)),s(4),h("Distance: ",A(20,10,t.distances[e],"1.0-0")," KM"),s(8),O("liked",t.listingArray[e].liked),s(1),P("color",t.listingArray[e].liked?"black":"#0069D9"),s(2),x(t.listingArray[e].likes)}}function W(o,r){if(o&1&&(i(0,"div",2),M(1,Q,31,13,"div",3),l()),o&2){let n=p();s(1),C("ngForOf",n.listingArray.slice(n.first,n.first+n.rows))}}var ot=(()=>{let r=class r{constructor(e,t,c){this.filterservice=e,this._cookieService=t,this.router=c,this.first=0,this.rows=10,this.likeCountValue=[],this.isLiked=Array(this.listingArray?.length).fill(!1)}makePhoneCall(e){console.log("Initiating phone call to:",e),window.location.href="tel:"+e}handleMapClick(e){if(console.log(e),e){let t=`https://www.google.com/maps/search/?api=1&query=${e.lat},${e.lng}`;window.open(t,"_blank")}}truncateText(e,t){return e.length<=t?e:e.slice(0,t)+"..."}likeBusiness(e,t){this._cookieService.get("token")?this.listingArray[t].liked==!0?(console.log(this.listingArray[t].liked),this.filterservice.addLike(e).subscribe({next:a=>{console.log(a,"like"),this.listingArray[t].liked=!1,this.listingArray[t].likes+=1}})):this.filterservice.addDislikes(e).subscribe({next:a=>{console.log(a,"dislike"),this.listingArray[t].liked=!0,this.listingArray[t].likes-=1}}):this.router.navigate(["/login"])}};r.\u0275fac=function(t){return new(t||r)(f(F),f($),f(T))},r.\u0275cmp=b({type:r,selectors:[["app-list-view"]],inputs:{listingArray:"listingArray",filterarray:"filterarray",distances:"distances"},standalone:!0,features:[I],decls:3,vars:1,consts:[[1,"container"],["class","rania d-flex gap-4 justify-content-start align-items-center py-3 row",4,"ngIf"],[1,"rania","d-flex","gap-4","justify-content-start","align-items-center","py-3","row"],["class","card my-0 py-0 px-0","style","max-width: 635px",4,"ngFor","ngForOf"],[1,"card","my-0","py-0","px-0",2,"max-width","635px"],[1,"row","g-0"],[1,"col-5"],[1,"img-fluid","rounded-start","w-100",3,"src","routerLink"],[1,"col-7"],[1,"card-body","d-flex","flex-column","align-items-between","justify-content-between","px-2","py-0",2,"height","100%"],[1,"d-flex","justify-content-between","align-items-center"],[1,"d-flex","justify-content-between","align-items-center","gap-3"],[1,"me-lg-5","me-0","mobile-font-size"],[1,"d-flex","gap-1","py-2"],[1,"pi","pi-map-marker",2,"color","#101010","font-size","1rem"],[1,"d-flex","justify-content-start","align-items-start","gap-1"],[1,"pi","pi-directions","fs-5"],[1,"btns","justify-content-between","align-items-end","d-flex","gap-1","py-2"],[1,"btns","d-flex","gap-2"],[1,"call-now",3,"click"],[1,"Directions",3,"click"],[1,"d-flex","justify-content-center","align-items-center","gap-1",3,"click"],["id","likeIcon",1,"bx","bxs-like","fs-4"],["id","likeCount",1,"m-0"]],template:function(t,c){t&1&&(i(0,"section")(1,"div",0),M(2,W,2,1,"div",1),l()()),t&2&&(s(2),C("ngIf",c.listingArray))},dependencies:[z,L,E,V,j,D],styles:[".rania[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;cursor:pointer}.rania[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-family:Lato,sans-serif;font-size:19px;line-height:33px;font-weight:900!important;white-space:nowrap}.rania[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ff8682;width:107px;height:59px;font-weight:700;font-size:17px;padding:0;font-family:Lato,sans-serif;gap:0!important}.rania[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-family:Lato,sans-serif}.rania[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:44px;border-radius:10px;width:86px;background-color:#8dd3bb;outline:none;border:none}.rania[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   .call-now[_ngcontent-%COMP%]{background-color:#aefcc9;width:90px;height:30px;border:none;outline:none;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px}.rania[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   .Directions[_ngcontent-%COMP%]{background-color:#ffbf9d;width:90px;height:30px;border:none;outline:none;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px}#likeIcon[_ngcontent-%COMP%]{color:#000;cursor:pointer}#likeContainer.liked[_ngcontent-%COMP%]   #likeIcon[_ngcontent-%COMP%]{color:#9090e6}@media (max-width: 767px){.mobile-font-size[_ngcontent-%COMP%]{font-size:14px!important}.btns[_ngcontent-%COMP%]   .call-now[_ngcontent-%COMP%]{width:40px!important}}"]});let o=r;return o})();export{tt as a,ot as b};