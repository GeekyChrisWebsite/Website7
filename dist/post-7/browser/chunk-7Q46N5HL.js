import{a as V,b as E}from"./chunk-NLM67NL7.js";import"./chunk-IPD3XPUL.js";import{a as D}from"./chunk-NWA33WGX.js";import"./chunk-ZMRRI4PX.js";import{n as P}from"./chunk-YHHAJLGB.js";import"./chunk-KMXITLPI.js";import{m as S}from"./chunk-G24YDE2W.js";import{Ab as c,Bb as v,Cc as T,Fa as k,Ga as l,Ib as I,Qa as p,Ra as h,Y as y,ab as s,ba as b,ca as u,gb as x,lb as n,mb as a,nb as d,rb as C,tb as w,ub as m,xb as f,xc as z}from"./chunk-OU66KZKH.js";function N(t,o){if(t&1&&(n(0,"div")(1,"button",19)(2,"a",20),c(3,"Book"),a()()()),t&2){let i=m(2);p(2),f("href",i.datainfo.business.booking_url,l)}}function L(t,o){if(t&1&&(n(0,"div"),d(1,"img",21),a()),t&2){let i=m(2);p(1),s("src",i.galleryphotos[0],l)}}function O(t,o){if(t&1&&d(0,"img",25),t&2){let i=o.$implicit;s("src",i,l)}}function $(t,o){if(t&1&&(n(0,"div",26),d(1,"img",27),a()),t&2){let i=o.$implicit;p(1),s("src",i,l)}}function B(t,o){if(t&1&&(n(0,"p-galleria",22),x(1,O,1,1,"ng-template",23)(2,$,2,1,"ng-template",24),a()),t&2){let i=m(2);s("value",i.galleryphotos)("showItemNavigators",!0)("responsiveOptions",i.responsiveOptions)("circular",!0)("numVisible",5)("showThumbnailNavigators",!1)("autoPlay",!0)}}function G(t,o){if(t&1){let i=C();n(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5),d(4,"img",6),n(5,"div",7)(6,"p",8),c(7),a(),n(8,"div",9),d(9,"i",10),n(10,"p",11),c(11),a()()()(),n(12,"div",12)(13,"button",13),w("click",function(){b(i);let r=m();return u(r.makePhoneCall(r.datainfo.business.phone_number))}),c(14," Call "),a(),n(15,"button",14),w("click",function(){b(i);let r=m();return u(r.handleMapClick(r.datainfo.business.street,r.datainfo.business.state,r.datainfo.business.title_for_map))}),c(16," Directions "),a(),x(17,N,4,1,"div",15),a()(),n(18,"div",16),x(19,L,2,1,"div",15)(20,B,3,7,"p-galleria",17),a(),n(21,"div"),d(22,"pre",18),a()()()}if(t&2){let i=m();p(4),f("src",i.datainfo.business.logo,l),p(3),v(i.datainfo.title),p(4),v(i.datainfo.postTime),p(6),s("ngIf",i.datainfo.booking_url==""),p(2),s("ngIf",i.galleryphotos.length===1),p(1),s("ngIf",i.galleryphotos.length>1),p(2),s("innerHTML",i.datainfo==null?null:i.datainfo.content,k)}}var W=(()=>{let o=class o{constructor(e,r){this._postingservice=e,this.route=r,this.photo=[],this.twoImgs=!1,this.displayCount=4,this.isVisible=!1,this.galleryphotos=[],this.imgs=[],this.displayCustom=!0,this.activeIndex=0,this.loading=!1,this.displayBasic=!0,this.responsiveOptions=[{breakpoint:"1500px",numVisible:5},{breakpoint:"1024px",numVisible:3},{breakpoint:"768px",numVisible:2},{breakpoint:"560px",numVisible:2}],this.id=r.snapshot.paramMap.get("id")}getdetalisId(){this._postingservice.GetPostingByID(this.id).subscribe(e=>{this.datainfo=e.data,this.timepost=e.data.dates,this.galleryphotos=e.data.images,this.imgs=e.data.images})}ngOnInit(){this.getdetalisId(),this.getImages(),this.galleryphotos=this.img}getImages(){this.loading=!0,this._postingservice.GetPostingByID(this.id).subscribe(e=>{this.loading=!1,this.datainfo=e.data,this.imgs=e.data.images})}imageClick(e){this.displayCustom=!0}makePhoneCall(e){window.location.href="tel:"+e}handleMapClick(e,r,g){if(e&&r){let j=encodeURIComponent(e),M=encodeURIComponent(r),_=`https://www.google.com/maps/search/?api=1&query=${j},+${M},+${g}`;if(g){let U=encodeURIComponent(g);_+=`&query_place_id=${U}`}window.open(_,"_blank")}}};o.\u0275fac=function(r){return new(r||o)(h(D),h(S))},o.\u0275cmp=y({type:o,selectors:[["app-posting-detalis"]],standalone:!0,features:[I],decls:2,vars:1,consts:[[1,"posting","py-5"],["class","container",4,"ngIf"],[1,"container"],[1,"box-white"],[1,"div-info","d-flex","align-items-center","justify-content-between","gap-3","py-3","flex-column","flex-lg-row"],[1,"d-flex","gap-2","flex-lg-row","align-items-start","justify-content-start"],["alt","","width","80","height","80",1,"rounded-circle",3,"src"],[1,""],[1,"p-0","m-0"],[1,"d-flex","gap-1","justify-content-start","align-items-center"],[1,"bx","bx-world","fs-6",2,"color","#6b6666"],[1,"title-time","text-muted","m-0"],[1,"d-flex","gap-1","gap-lg-3","flex-lg-row"],[1,"call-now",3,"click"],[1,"Directions","text-center",3,"click"],[4,"ngIf"],[1,"justify-content-center","align-items-center","d-flex"],[3,"value","showItemNavigators","responsiveOptions","circular","numVisible","showThumbnailNavigators","autoPlay",4,"ngIf"],[1,"text-start",3,"innerHTML"],[1,"book-btn"],["target","_blank",3,"href"],[1,"w-100","img-fluid",3,"src"],[3,"value","showItemNavigators","responsiveOptions","circular","numVisible","showThumbnailNavigators","autoPlay"],["pTemplate","item"],["pTemplate","thumbnail"],[1,"w-100",3,"src"],[1,"d-grid","justify-content-center","align-items-center","d-flex"],[1,"w-25","img-fluid",3,"src"]],template:function(r,g){r&1&&(n(0,"section",0),x(1,G,23,7,"div",1),a()),r&2&&(p(1),s("ngIf",g.datainfo))},dependencies:[E,z,V,P,T],styles:[`.posting .container .box-white{box-shadow:0 0 10px #0000001a;padding:30px}.posting .container .box-white .div-info p{font-family:Lato,sans-serif;font-weight:600}.posting .container .box-white .div-info small{font-family:Lato,sans-serif}.posting .container .box-white .card-imgs .row .col-md-12 .p-image-preview-container>img{width:800px!important;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .row .col-md-12 .p-image-preview-indicator{width:800px;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .row .col-md-5 .p-image-preview-container>img{width:522px!important;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .row .col-md-5 .p-image-preview-indicator{width:522px;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .four .p-image-preview-container>img{width:400px!important;height:340px;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .four .p-image-preview-indicator{width:400px!important;height:340px;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .three .p-image-preview-container>img,.posting .container .box-white .card-imgs .two .p-image-preview-container>img{width:600px!important;height:400px;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .three .p-image-preview-indicator,.posting .container .box-white .card-imgs .two .p-image-preview-indicator{width:600px!important;height:400px;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .one .p-image-preview-container>img{width:1100px!important;height:500px;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .one .p-image-preview-indicator{width:1100px!important;height:500px;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}@media (max-width: 767px){.posting{padding-top:6rem!important}.posting .container .box-white{box-shadow:0 0 10px #0000001a;padding:30px}.posting .container .box-white .div-info{justify-content:start!important;align-items:start!important;display:flex!important}.posting .container .box-white .div-info p{font-family:Lato,sans-serif;font-weight:600;font-size:12px!important}.posting .container .box-white .div-info small{font-family:Lato,sans-serif}.posting .container .box-white .card-imgs .row .col-md-12 .p-image-preview-container>img{width:280px!important;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .row .col-md-12 .p-image-preview-indicator{width:280px;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .row .col-md-5 .p-image-preview-container>img{width:300px!important;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .row .col-md-5 .p-image-preview-indicator{width:300px;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .four,.posting .container .box-white .card-imgs .three,.posting .container .box-white .card-imgs .two{justify-content:center;align-items:center}.posting .container .box-white .card-imgs .four .p-image-preview-container>img,.posting .container .box-white .card-imgs .three .p-image-preview-container>img,.posting .container .box-white .card-imgs .two .p-image-preview-container>img{width:400px!important;height:360px;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.posting .container .box-white .card-imgs .four .p-image-preview-indicator,.posting .container .box-white .card-imgs .three .p-image-preview-indicator,.posting .container .box-white .card-imgs .two .p-image-preview-indicator{width:400px!important;height:360px;border-radius:10px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;-ms-border-radius:10px!important;-o-border-radius:10px!important}.call-now,.Directions{width:100px!important;text-align:center!important}.book-btn{width:95px!important}}.p-galleria-item{background-color:#000}a{text-decoration:none;color:#fff}pre{text-wrap:balance!important;font-family:Sarabun,sans-serif!important}
`],encapsulation:2});let t=o;return t})();export{W as PostingDetalisComponent};
