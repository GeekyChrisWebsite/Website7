import{a as T}from"./chunk-GSTRFVKH.js";import{a as B,b as V}from"./chunk-3RBZG4AW.js";import"./chunk-JCXYB5EJ.js";import"./chunk-EC63AKSL.js";import"./chunk-6GNAJBRD.js";import{n as I}from"./chunk-52DG2NUO.js";import{i as C}from"./chunk-TV346GQS.js";import{Ga as p,Ha as g,Sa as d,Y as v,Ya as x,ba as b,bb as a,ca as u,cb as n,db as s,hb as _,jb as w,kb as c,nb as h,nc as S,qb as m,rb as f,tc as z,va as y,wa as l,xb as k}from"./chunk-MGRODROF.js";function E(e,o){if(e&1&&(a(0,"div")(1,"button",21)(2,"a",22),m(3,"Book Now"),n()()()),e&2){let t=c(2);p(2),h("href",t.detalisArray.booking_url,l)}}function j(e,o){if(e&1&&s(0,"img",23),e&2){let t=o.$implicit;d("src",t,l)}}function M(e,o){if(e&1&&(a(0,"div",24),s(1,"img",25),n()),e&2){let t=o.$implicit;p(1),d("src",t,l)}}function D(e,o){if(e&1){let t=_();a(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5),s(4,"img",6),a(5,"div",7)(6,"p",8),m(7),n(),a(8,"div",9),s(9,"i",10),a(10,"p",11),m(11),n()()()(),a(12,"div",12)(13,"button",13),w("click",function(){b(t);let r=c();return u(r.makePhoneCall(r.detalisArray.phone_number))}),m(14," Call "),n(),a(15,"button",14),w("click",function(){b(t);let r=c();return u(r.handleMapClick(r.detalisArray.geo_direction))}),m(16," Directions "),n(),x(17,E,4,1,"div",15),n()(),a(18,"div",16)(19,"p-galleria",17),x(20,j,1,1,"ng-template",18)(21,M,2,1,"ng-template",19),n()(),a(22,"div"),s(23,"p",20),n()()()}if(e&2){let t=c();p(4),h("src",t.detalisArray.business.logo,l),p(3),f(t.detalisArray.title),p(4),f(t.detalisArray.buySellTime),p(6),d("ngIf",t.detalisArray.booking_url!==""),p(2),d("value",t.galleryphotos)("showItemNavigators",!0)("responsiveOptions",t.responsiveOptions)("circular",!0)("numVisible",5)("showThumbnailNavigators",!1),p(4),d("innerHTML",t.detalisArray.content,y)}}var G=(()=>{let o=class o{constructor(i,r){this._BuySellService=i,this._ActivatedRoute=r,this.photo=[],this.twoImgs=!1,this.displayCount=4,this.isVisible=!1,this.displayCustom=!0,this.activeIndex=0,this.loading=!1,this.displayBasic=!0,this.responsiveOptions=[{breakpoint:"1500px",numVisible:5},{breakpoint:"1024px",numVisible:3},{breakpoint:"768px",numVisible:2},{breakpoint:"560px",numVisible:2}],this.id=r.snapshot.paramMap.get("id")}getbuyselldetalis(){this._BuySellService.getBuysellById(this.id).subscribe(i=>{this.detalisArray=i.data,console.log("ddd",i.data)}),console.log(this.img)}ngOnInit(){this.getbuyselldetalis()}imageClick(i){console.log("Image clicked at index:",i),this.displayCustom=!0}makePhoneCall(i){console.log("Initiating phone call to:",i),window.location.href="tel:"+i}handleMapClick(i){if(i&&i.lat!==void 0&&i.lng!==void 0){let r=`https://www.google.com/maps/search/?api=1&query=${i.lat},${i.lng}`;window.open(r,"_blank")}}};o.\u0275fac=function(r){return new(r||o)(g(T),g(C))},o.\u0275cmp=v({type:o,selectors:[["app-buy-sell-detalis"]],standalone:!0,features:[k],decls:2,vars:1,consts:[[1,"posting","py-5"],["class","container",4,"ngIf"],[1,"container"],[1,"box-white"],[1,"div-info","d-flex","align-items-center","justify-content-between","gap-3","py-3","flex-column","flex-lg-row"],[1,"d-flex","gap-2","flex-lg-row","align-items-start","justify-content-start"],["alt","","width","50","height","50",1,"rounded-circle",3,"src"],[1,""],[1,"p-0","m-0"],[1,"d-flex","gap-1","justify-content-start","align-items-center"],[1,"bx","bx-world","fs-6",2,"color","#6b6666"],[1,"title-time","text-muted","m-0"],[1,"d-flex","gap-1","gap-lg-3","flex-lg-row"],[1,"call-now",3,"click"],[1,"Directions",3,"click"],[4,"ngIf"],[1,"justify-content-center","align-items-center","d-flex"],[3,"value","showItemNavigators","responsiveOptions","circular","numVisible","showThumbnailNavigators"],["pTemplate","item"],["pTemplate","thumbnail"],[1,"text-start",3,"innerHTML"],[1,"book-btn"],["target","_blank",3,"href"],[1,"w-100",3,"src"],[1,"d-grid","justify-content-center","align-items-center","d-flex"],[1,"w-25","img-fluid",3,"src"]],template:function(r,A){r&1&&(a(0,"section",0),x(1,D,24,11,"div",1),n()),r&2&&(p(1),d("ngIf",A.detalisArray))},dependencies:[V,S,B,I,z],styles:[`.posting .container .box-white{box-shadow:0 0 10px #0000001a;padding:30px}.posting .container .box-white .div-info p{font-family:Lato,sans-serif;font-weight:800}.posting .container .box-white .div-info small{font-family:Lato,sans-serif}.posting .container .box-white .card-imgs .row .col-md-12 .p-image-preview-container>img{width:800px!important;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .row .col-md-12 .p-image-preview-indicator{width:800px;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .row .col-md-5 .p-image-preview-container>img{width:522px!important;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .row .col-md-5 .p-image-preview-indicator{width:522px;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .four .p-image-preview-container>img{width:400px!important;height:340px;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .four .p-image-preview-indicator{width:400px!important;height:340px;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .three .p-image-preview-container>img,.posting .container .box-white .card-imgs .two .p-image-preview-container>img{width:600px!important;height:400px;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .three .p-image-preview-indicator,.posting .container .box-white .card-imgs .two .p-image-preview-indicator{width:600px!important;height:400px;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .one .p-image-preview-container>img{width:1100px!important;height:500px;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .one .p-image-preview-indicator{width:1100px!important;height:500px;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}@media (max-width: 767px){.posting{padding-top:7rem!important}.posting .container .box-white{box-shadow:0 0 10px #0000001a;padding:30px}.posting .container .box-white .div-info{justify-content:start!important;align-items:start!important;display:flex!important}.posting .container .box-white .div-info p{font-family:Lato,sans-serif;font-weight:800}.posting .container .box-white .div-info small{font-family:Lato,sans-serif}.posting .container .box-white .card-imgs .row .col-md-12 .p-image-preview-container>img{width:280px!important;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .row .col-md-12 .p-image-preview-indicator{width:280px;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .row .col-md-5 .p-image-preview-container>img{width:300px!important;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .row .col-md-5 .p-image-preview-indicator{width:300px;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .four,.posting .container .box-white .card-imgs .three,.posting .container .box-white .card-imgs .two{justify-content:center;align-items:center}.posting .container .box-white .card-imgs .four .p-image-preview-container>img,.posting .container .box-white .card-imgs .three .p-image-preview-container>img,.posting .container .box-white .card-imgs .two .p-image-preview-container>img{width:400px!important;height:360px;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .four .p-image-preview-indicator,.posting .container .box-white .card-imgs .three .p-image-preview-indicator,.posting .container .box-white .card-imgs .two .p-image-preview-indicator{width:400px!important;height:360px;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.call-now,.Directions{width:85px!important}.book-btn{width:97px!important}}.p-galleria-item{background-color:#000}.call-now,.Directions{background-color:#ffbf9d;color:#000;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;width:111px;height:48px;outline:none;border:none}.book-btn{height:48px!important;background-color:#000;color:#fff;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;width:111px;outline:none;border:none}a{text-decoration:none;color:#fff}
`],encapsulation:2});let e=o;return e})();export{G as BuySellDetalisComponent};
