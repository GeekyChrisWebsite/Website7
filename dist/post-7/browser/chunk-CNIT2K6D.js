import{a as S,b as V}from"./chunk-NLM67NL7.js";import"./chunk-IPD3XPUL.js";import{a as P}from"./chunk-NWA33WGX.js";import"./chunk-ZMRRI4PX.js";import{n as T}from"./chunk-YHHAJLGB.js";import"./chunk-KMXITLPI.js";import{m as z}from"./chunk-G24YDE2W.js";import{Ab as c,Bb as f,Cc as I,Fa as _,Ga as l,Ib as k,Qa as p,Ra as u,Y as v,ab as s,ba as x,ca as b,gb as g,lb as a,mb as n,nb as d,rb as y,tb as h,ub as m,xb as w,xc as C}from"./chunk-OU66KZKH.js";function D(e,o){if(e&1&&(a(0,"div")(1,"button",19)(2,"a",20),c(3,"Book"),n()()()),e&2){let i=m(2);p(2),w("href",i.datainfo.business.booking_url,l)}}function j(e,o){if(e&1&&(a(0,"div"),d(1,"img",21),n()),e&2){let i=m(2);p(1),s("src",i.galleryphotos[0],l)}}function M(e,o){if(e&1&&d(0,"img",25),e&2){let i=o.$implicit;s("src",i,l)}}function N(e,o){if(e&1&&(a(0,"div",26),d(1,"img",27),n()),e&2){let i=o.$implicit;p(1),s("src",i,l)}}function L(e,o){if(e&1&&(a(0,"p-galleria",22),g(1,M,1,1,"ng-template",23)(2,N,2,1,"ng-template",24),n()),e&2){let i=m(2);s("value",i.galleryphotos)("showItemNavigators",!0)("responsiveOptions",i.responsiveOptions)("circular",!0)("numVisible",5)("showThumbnailNavigators",!1)("autoPlay",!0)}}function O(e,o){if(e&1){let i=y();a(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5),d(4,"img",6),a(5,"div",7)(6,"p",8),c(7),n(),a(8,"div",9),d(9,"i",10),a(10,"p",11),c(11),n()()()(),a(12,"div",12)(13,"button",13),h("click",function(){x(i);let r=m();return b(r.makePhoneCall(r.datainfo.business.phone_number))}),c(14," Call "),n(),a(15,"button",14),h("click",function(){x(i);let r=m();return b(r.handleMapClick(r.datainfo.business.geo_direction))}),c(16," Directions "),n(),g(17,D,4,1,"div",15),n()(),a(18,"div",16),g(19,j,2,1,"div",15)(20,L,3,7,"p-galleria",17),n(),a(21,"div"),d(22,"pre",18),n()()()}if(e&2){let i=m();p(4),w("src",i.datainfo.business.logo,l),p(3),f(i.datainfo.title),p(4),f(i.datainfo.postTime),p(6),s("ngIf",i.datainfo.booking_url==""),p(2),s("ngIf",i.galleryphotos.length===1),p(1),s("ngIf",i.galleryphotos.length>1),p(2),s("innerHTML",i.datainfo==null?null:i.datainfo.content,_)}}var R=(()=>{let o=class o{constructor(t,r){this._postingservice=t,this.route=r,this.photo=[],this.twoImgs=!1,this.displayCount=4,this.isVisible=!1,this.galleryphotos=[],this.imgs=[],this.displayCustom=!0,this.activeIndex=0,this.loading=!1,this.displayBasic=!0,this.responsiveOptions=[{breakpoint:"1500px",numVisible:5},{breakpoint:"1024px",numVisible:3},{breakpoint:"768px",numVisible:2},{breakpoint:"560px",numVisible:2}],this.id=r.snapshot.paramMap.get("id")}getdetalisId(){this._postingservice.GetPostingByID(this.id).subscribe(t=>{this.datainfo=t.data,this.timepost=t.data.dates,this.galleryphotos=t.data.images,this.imgs=t.data.images})}ngOnInit(){this.getdetalisId(),this.getImages(),this.galleryphotos=this.img}getImages(){this.loading=!0,this._postingservice.GetPostingByID(this.id).subscribe(t=>{this.loading=!1,this.datainfo=t.data,this.imgs=t.data.images})}imageClick(t){this.displayCustom=!0}makePhoneCall(t){window.location.href="tel:"+t}handleMapClick(t){if(t&&t.lat!==void 0&&t.lng!==void 0){let r=`https://www.google.com/maps/search/?api=1&query=${t.lat},${t.lng}`;window.open(r,"_blank")}}};o.\u0275fac=function(r){return new(r||o)(u(P),u(z))},o.\u0275cmp=v({type:o,selectors:[["app-posting-detalis"]],standalone:!0,features:[k],decls:2,vars:1,consts:[[1,"posting","py-5"],["class","container",4,"ngIf"],[1,"container"],[1,"box-white"],[1,"div-info","d-flex","align-items-center","justify-content-between","gap-3","py-3","flex-column","flex-lg-row"],[1,"d-flex","gap-2","flex-lg-row","align-items-start","justify-content-start"],["alt","","width","80","height","80",1,"rounded-circle",3,"src"],[1,""],[1,"p-0","m-0"],[1,"d-flex","gap-1","justify-content-start","align-items-center"],[1,"bx","bx-world","fs-6",2,"color","#6b6666"],[1,"title-time","text-muted","m-0"],[1,"d-flex","gap-1","gap-lg-3","flex-lg-row"],[1,"call-now",3,"click"],[1,"Directions","text-center",3,"click"],[4,"ngIf"],[1,"justify-content-center","align-items-center","d-flex"],[3,"value","showItemNavigators","responsiveOptions","circular","numVisible","showThumbnailNavigators","autoPlay",4,"ngIf"],[1,"text-start",3,"innerHTML"],[1,"book-btn"],["target","_blank",3,"href"],[1,"w-100","img-fluid",3,"src"],[3,"value","showItemNavigators","responsiveOptions","circular","numVisible","showThumbnailNavigators","autoPlay"],["pTemplate","item"],["pTemplate","thumbnail"],[1,"w-100",3,"src"],[1,"d-grid","justify-content-center","align-items-center","d-flex"],[1,"w-25","img-fluid",3,"src"]],template:function(r,E){r&1&&(a(0,"section",0),g(1,O,23,7,"div",1),n()),r&2&&(p(1),s("ngIf",E.datainfo))},dependencies:[V,C,S,T,I],styles:[`.posting .container .box-white{box-shadow:0 0 10px #0000001a;padding:30px}.posting .container .box-white .div-info p{font-family:Lato,sans-serif;font-weight:600}.posting .container .box-white .div-info small{font-family:Lato,sans-serif}.posting .container .box-white .card-imgs .row .col-md-12 .p-image-preview-container>img{width:800px!important;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .row .col-md-12 .p-image-preview-indicator{width:800px;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .row .col-md-5 .p-image-preview-container>img{width:522px!important;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .row .col-md-5 .p-image-preview-indicator{width:522px;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .four .p-image-preview-container>img{width:400px!important;height:340px;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .four .p-image-preview-indicator{width:400px!important;height:340px;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .three .p-image-preview-container>img,.posting .container .box-white .card-imgs .two .p-image-preview-container>img{width:600px!important;height:400px;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .three .p-image-preview-indicator,.posting .container .box-white .card-imgs .two .p-image-preview-indicator{width:600px!important;height:400px;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .one .p-image-preview-container>img{width:1100px!important;height:500px;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .one .p-image-preview-indicator{width:1100px!important;height:500px;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}@media (max-width: 767px){.posting{padding-top:6rem!important}.posting .container .box-white{box-shadow:0 0 10px #0000001a;padding:30px}.posting .container .box-white .div-info{justify-content:start!important;align-items:start!important;display:flex!important}.posting .container .box-white .div-info p{font-family:Lato,sans-serif;font-weight:600;font-size:12px!important}.posting .container .box-white .div-info small{font-family:Lato,sans-serif}.posting .container .box-white .card-imgs .row .col-md-12 .p-image-preview-container>img{width:280px!important;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .row .col-md-12 .p-image-preview-indicator{width:280px;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .row .col-md-5 .p-image-preview-container>img{width:300px!important;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .row .col-md-5 .p-image-preview-indicator{width:300px;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .four,.posting .container .box-white .card-imgs .three,.posting .container .box-white .card-imgs .two{justify-content:center;align-items:center}.posting .container .box-white .card-imgs .four .p-image-preview-container>img,.posting .container .box-white .card-imgs .three .p-image-preview-container>img,.posting .container .box-white .card-imgs .two .p-image-preview-container>img{width:400px!important;height:360px;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .four .p-image-preview-indicator,.posting .container .box-white .card-imgs .three .p-image-preview-indicator,.posting .container .box-white .card-imgs .two .p-image-preview-indicator{width:400px!important;height:360px;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.call-now,.Directions{width:100px!important;text-align:center!important}.book-btn{width:95px!important}}.p-galleria-item{background-color:#000}a{text-decoration:none;color:#fff}pre{text-wrap:balance!important;font-family:Sarabun,sans-serif!important}
`],encapsulation:2});let e=o;return e})();export{R as PostingDetalisComponent};
