import{l as D,n as j}from"./chunk-JFSDMO4J.js";import{Aa as P,Bb as h,Ka as a,Lb as k,Nb as y,Wa as u,Xa as S,Ya as E,aa as M,ab as x,fa as _,fb as n,ga as C,gb as c,hb as p,lb as O,nb as f,ob as d,qc as v,rb as b,rc as V,sb as z,ub as l,vb as m,vc as L,wb as w,xc as I}from"./chunk-DBXKETHY.js";function T(o,r){if(o&1&&(n(0,"div",17)(1,"div",18),p(2,"i",19),n(3,"p",20),l(4),k(5,"number"),n(6,"span"),l(7,"Miles"),c()()()()),o&2){let e=d().index,t=d(2);a(4),w("Distance: ",y(5,1,t.distances[e],"1.0-0")," ")}}function $(o,r){if(o&1){let e=O();n(0,"div",5)(1,"div",6)(2,"div",7),p(3,"i",8),c(),n(4,"small",9),l(5),c(),p(6,"img",10),n(7,"div",11)(8,"h5"),l(9),c()(),x(10,T,8,4,"div",12),n(11,"div")(12,"p",13),l(13),c()(),n(14,"div",14)(15,"button",15),f("click",function(){let s=_(e).$implicit,g=d(2);return C(g.makePhoneCall(s.phone_number))}),l(16,"Call Now"),c(),n(17,"button",16),f("click",function(){let s=_(e).$implicit,g=d(2);return C(g.handleMapClick(s.geo_direction))}),l(18,"Directions"),c()()()()}if(o&2){let e=r.$implicit,t=d(2);a(5),m(e.likes),a(1),b("src",e.logo,P),a(3),m(e.name),a(1),u("ngIf",t.distances&&t.distances.length>0),a(3),m(e.description)}}function G(o,r){if(o&1&&(n(0,"section",1)(1,"div",2)(2,"div",3),x(3,$,19,5,"div",4),c()()()),o&2){let e=d();a(3),u("ngForOf",e.listingArray)}}var R=(()=>{let r=class r{constructor(){this.isLiked=[],this.likeCountValue=[]}makePhoneCall(t){console.log("Initiating phone call to:",t),window.location.href="tel:"+t}handleMapClick(t){if(console.log(t),t){let i=`https://www.google.com/maps/search/?api=1&query=${t.lat},${t.lng}`;window.open(i,"_blank")}}toggleLike(t){this.isLiked[t]=!this.isLiked[t],this.likeCountValue[t]=this.isLiked[t]?this.likeCountValue[t]+1:this.likeCountValue[t]-1,this.isLiked[t]?this.listingArray[t].likes+=1:this.listingArray[t].likes-=1}};r.\u0275fac=function(i){return new(i||r)},r.\u0275cmp=M({type:r,selectors:[["app-gallery-view"]],inputs:{listingArray:"listingArray",filterarray:"filterarray",distances:"distances"},standalone:!0,features:[h],decls:1,vars:1,consts:[["class","list-img",4,"ngIf"],[1,"list-img"],[1,"container"],[1,"row","justify-content-start","align-items-center","d-flex","flex-wrap","gap-3","py-3","gap-lg-0"],["class","col-md-3 col-12 mb-3",4,"ngFor","ngForOf"],[1,"col-md-3","col-12","mb-3"],[1,"card","justify-content-between","align-items-center","d-flex"],[1,"div-like","gap-2","d-flex","flex-column"],[1,"pi","pi-thumbs-up"],[1,"likes"],["alt","",1,"w-100","img-fluid","object-fit-fill","border","rounded",3,"src"],[1,"title","py-2"],["class","py-2",4,"ngIf"],[1,"text-muted"],[1,"btns","justify-content-start","align-items-start","d-flex","gap-3","py-3"],[1,"call-now",3,"click"],[1,"Directions",3,"click"],[1,"py-2"],[1,"d-flex","justify-content-center","align-items-center","gap-1"],[1,"pi","pi-directions","fs-4"],[1,"p-0","m-0"]],template:function(i,s){i&1&&x(0,G,4,1,"section",0),i&2&&u("ngIf",s.listingArray)},dependencies:[I,v,V,L],styles:[".list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{position:relative}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border-radius:10px;-webkit-border-radius:10px;-moz-border-radius:10px;-ms-border-radius:10px;-o-border-radius:10px;box-shadow:0 4px 4px #00000040}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:250px;border-radius:7px!important;-webkit-border-radius:7px!important;-moz-border-radius:7px!important;-ms-border-radius:7px!important;-o-border-radius:7px!important}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 4px 4px #00000040}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-weight:600;font-family:Lato,sans-serif;color:#0f3d3e;font-size:25px}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   .call-now[_ngcontent-%COMP%]{background-color:#aefcc9;width:90px;height:30px;border:none;outline:none;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   .Directions[_ngcontent-%COMP%]{background-color:#ffbf9d;width:90px;height:30px;border:none;outline:none;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .div-like[_ngcontent-%COMP%]{position:absolute;top:203px;right:16px;background-color:#fff;width:50px;height:50px;border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%;justify-content:center;align-items:center;display:flex}.list-img[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .likes[_ngcontent-%COMP%]{position:absolute;top:260px;right:38px}"]});let o=r;return o})();function N(o,r){if(o&1){let e=O();n(0,"div",4)(1,"div",5)(2,"div",6),p(3,"img",7),c(),n(4,"div",8)(5,"div",9)(6,"div",10)(7,"div",11)(8,"div")(9,"h5",12),l(10),c()(),n(11,"div",13),f("click",function(){let s=_(e).index,g=d(2);return C(g.toggleLike(s))}),p(12,"i",14),n(13,"p",15),l(14),c()()(),p(15,"div"),c(),n(16,"div",16),p(17,"i",17),n(18,"small"),l(19),c()(),n(20,"div",18),p(21,"i",19),n(22,"small"),l(23),k(24,"number"),c()(),n(25,"div",20)(26,"button",21),f("click",function(){let s=_(e).$implicit,g=d(2);return C(g.makePhoneCall(s.phone_number))}),l(27,"Call"),c(),n(28,"button",22),f("click",function(){let s=_(e).$implicit,g=d(2);return C(g.handleMapClick(s.geo_direction))}),l(29,"Directions"),c()()()()()()}if(o&2){let e=r.$implicit,t=r.index,i=d(2);a(3),b("src",e.logo,P),z("routerLink","/details/",e.id,""),a(7),m(e.name),a(1),E("liked",i.isLiked[t]),a(1),S("color",i.isLiked[t]?"#0069D9":"black"),a(2),m(i.likeCountValue[t]||e.likes),a(5),m(e.state+", "+e.street),a(4),w("Distance: ",y(24,10,i.distances[t],"1.0-0")," KM")}}function q(o,r){if(o&1&&(n(0,"div",2),x(1,N,30,13,"div",3),c()),o&2){let e=d();a(1),u("ngForOf",e.listingArray.slice(e.first,e.first+e.rows))}}var Q=(()=>{let r=class r{constructor(){this.first=0,this.rows=10,this.isLiked=[],this.likeCountValue=[]}makePhoneCall(t){console.log("Initiating phone call to:",t),window.location.href="tel:"+t}handleMapClick(t){if(console.log(t),t){let i=`https://www.google.com/maps/search/?api=1&query=${t.lat},${t.lng}`;window.open(i,"_blank")}}toggleLike(t){this.isLiked[t]=!this.isLiked[t],this.likeCountValue[t]=this.isLiked[t]?this.likeCountValue[t]+1:this.likeCountValue[t]-1,this.isLiked[t]?this.listingArray[t].likes+=1:this.listingArray[t].likes-=1}};r.\u0275fac=function(i){return new(i||r)},r.\u0275cmp=M({type:r,selectors:[["app-list-view"]],inputs:{listingArray:"listingArray",filterarray:"filterarray",distances:"distances"},standalone:!0,features:[h],decls:3,vars:1,consts:[[1,"container"],["class","rania d-flex gap-4 justify-content-start align-items-center py-3 row",4,"ngIf"],[1,"rania","d-flex","gap-4","justify-content-start","align-items-center","py-3","row"],["class","card my-0 py-0 px-0","style","max-width: 635px",4,"ngFor","ngForOf"],[1,"card","my-0","py-0","px-0",2,"max-width","635px"],[1,"row","g-0"],[1,"col-5"],["width","w-100",1,"img-fluid","rounded-start",3,"src","routerLink"],[1,"col-7"],[1,"card-body"],[1,"d-flex","justify-content-between","align-items-center"],[1,"d-flex","justify-content-between","align-items-center","gap-3"],[1,"me-lg-5","me-0","mobile-font-size"],[1,"d-flex","justify-content-center","align-items-center","gap-1",3,"click"],["id","likeIcon",1,"bx","bxs-like","fs-4"],["id","likeCount",1,"m-0"],[1,"d-flex","gap-1","py-2"],[1,"pi","pi-map-marker",2,"color","#101010","font-size","1rem"],[1,"d-flex","justify-content-start","align-items-start","gap-1"],[1,"pi","pi-directions","fs-5"],[1,"btns","justify-content-start","align-items-start","d-flex","gap-3","py-2"],[1,"call-now",3,"click"],[1,"Directions",3,"click"]],template:function(i,s){i&1&&(n(0,"section")(1,"div",0),x(2,q,2,1,"div",1),c()()),i&2&&(a(2),u("ngIf",s.listingArray))},dependencies:[j,D,I,v,V,L],styles:[".rania[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:210px;cursor:pointer}.rania[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-family:Lato,sans-serif;font-size:19px;line-height:33px;font-weight:900!important;white-space:nowrap}.rania[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ff8682;width:107px;height:59px;font-weight:700;font-size:17px;padding:0;font-family:Lato,sans-serif;gap:0!important}.rania[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-family:Lato,sans-serif}.rania[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:44px;border-radius:10px;width:86px;background-color:#8dd3bb;outline:none;border:none}.rania[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   .call-now[_ngcontent-%COMP%]{background-color:#aefcc9;width:90px;height:30px;border:none;outline:none;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px}.rania[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   .Directions[_ngcontent-%COMP%]{background-color:#ffbf9d;width:90px;height:30px;border:none;outline:none;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px}#likeIcon[_ngcontent-%COMP%]{color:#000;cursor:pointer}#likeContainer.liked[_ngcontent-%COMP%]   #likeIcon[_ngcontent-%COMP%]{color:#9090e6}@media (max-width: 767px){.mobile-font-size[_ngcontent-%COMP%]{font-size:14px!important}}"]});let o=r;return o})();export{R as a,Q as b};
