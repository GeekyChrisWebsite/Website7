import{a as le,b as pe}from"./chunk-OVKLVXU3.js";import{a as ce,b as de}from"./chunk-G522DZER.js";import{a as v}from"./chunk-NUETGXE6.js";import"./chunk-TCEPFW5C.js";import{a as b,b as oe}from"./chunk-WJJWSBZF.js";import{a as ae,b as se}from"./chunk-UCU7TO5D.js";import{c as te,d as fe}from"./chunk-GWLBGCXD.js";import{f as Z,j as ie,n as me}from"./chunk-X3EVNJQD.js";import{a as C,b as re,c as ne}from"./chunk-ICG7LOM7.js";import"./chunk-GGVCYPID.js";import{a as ee}from"./chunk-ZGDLFKNH.js";import"./chunk-NWA33WGX.js";import"./chunk-ZMRRI4PX.js";import"./chunk-6ZGKBOM3.js";import{m as X,n as Y}from"./chunk-DV6OFOYW.js";import"./chunk-ZX3COAAW.js";import{e as H}from"./chunk-YHHAJLGB.js";import"./chunk-KMXITLPI.js";import{c as $,m as q,r as W}from"./chunk-G24YDE2W.js";import{A as L,Ab as u,Ac as J,Bb as F,Cb as S,Cc as _,Ec as K,Fb as P,Ib as w,Qa as a,Ra as d,Sb as D,Tb as O,Wb as z,Xb as G,Y as x,Zb as N,aa as V,ab as p,ba as M,ca as I,gb as g,hb as h,ib as B,jb as R,kb as T,lb as s,mb as l,n as A,nb as c,qa as j,r as k,rb as E,tb as y,ub as f,vc as Q,xc as U}from"./chunk-OU66KZKH.js";function we(i,o){if(i&1){let n=E();s(0,"map-marker",5),y("mapClick",function(t){M(n);let r=f(2);return I(r.handleMapClick(t))}),l()}if(i&2){let n=o.$implicit,e=f(2);p("position",n.geo_direction)("options",e.markerOptions)}}function _e(i,o){if(i&1&&(s(0,"google-map",2,4),R(2,we,1,2,"map-marker",6,B),l()),i&2){let n=f();p("options",n.options),a(2),T(n.listingArray)}}var ge=(()=>{let o=class o{constructor(e,t){this._httpClient=e,this.ListingService=t,this.sim=[],this.options={mapTypeControl:!1,streetViewControl:!1,fullscreenControl:!1},this.fisrtChange=!0,this.markerOptions={draggable:!1},this.apiLoaded=e.jsonp("https://maps.googleapis.com/maps/api/js?key=AIzaSyAAb4SFQe0Kigpu3EiKhR93nC-OUitTKwM","callback").pipe(k(()=>!0),L(()=>A(!1)))}ngAfterViewInit(){setTimeout(()=>{this.fitMapBounds()},1e3)}handleMapClick(e){let t=e.coords||e.latLng;if(t){let r=`https://www.google.com/maps/search/?api=1&query=${t.lat()},${t.lng()}`;window.open(r,"_blank")}}fitMapBounds(){let e=new google.maps.LatLngBounds;for(let t of this.listingArray)e.extend(new google.maps.LatLng(t.geo_direction.lat,t.geo_direction.lng));this.map.fitBounds(e)}ngOnChanges(e){e.listingArray&&e.listingArray.currentValue&&(this.fisrtChange||this.fitMapBounds(),this.fisrtChange=!1)}};o.\u0275fac=function(t){return new(t||o)(d($),d(v))},o.\u0275cmp=x({type:o,selectors:[["app-map-view"]],viewQuery:function(t,r){if(t&1&&G(C,5),t&2){let m;z(m=N())&&(r.map=m.first)}},inputs:{listingArray:"listingArray",filterarray:"filterarray",distances:"distances"},standalone:!0,features:[V,w],decls:6,vars:6,consts:[[1,"container","py-3"],[1,"container-map","justify-content-center","align-items-center","d-flex"],[3,"options"],[3,"listingArray","filterarray","distances"],["map",""],[3,"position","options","mapClick"],[3,"position","options"]],template:function(t,r){t&1&&(s(0,"div",0)(1,"div",1),g(2,_e,4,1,"google-map",2),D(3,"async"),l()(),s(4,"section"),c(5,"app-gallery-view",3),l()),t&2&&(a(2),h(2,O(3,4,r.apiLoaded)?2:-1),a(3),p("listingArray",r.listingArray)("filterarray",r.filterarray)("distances",r.distances))},dependencies:[_,J,ne,C,re,b],styles:[`.map-container{width:85vw!important}
`],encapsulation:2});let i=o;return i})();function be(i,o){if(i&1&&(s(0,"div",19)(1,"p"),c(2,"i",20),u(3),l(),s(4,"p"),u(5),l(),s(6,"p"),u(7),l()()),i&2){let n=f();a(3),S("",n.filter[0]==null?null:n.filter[0].category," > "),a(2),S("",n.filter[0]==null?null:n.filter[0].state," >"),a(2),F(n.filter[0]==null?null:n.filter[0].city)}}function Ce(i,o){i&1&&c(0,"p-progressSpinner",24)}function Se(i,o){if(i&1&&(s(0,"div",21),g(1,Ce,1,0,"p-progressSpinner",22),c(2,"app-list-view",23),l()),i&2){let n=f();a(1),p("ngIf",n.loading),a(1),p("listingArray",n.listingArray)("filterarray",n.filterarray)("distances",n.distances)}}function Ae(i,o){i&1&&c(0,"p-progressSpinner",24)}function ke(i,o){if(i&1&&(s(0,"div",21),g(1,Ae,1,0,"p-progressSpinner",22),c(2,"app-gallery-view",23),l()),i&2){let n=f();a(1),p("ngIf",n.loading),a(1),p("listingArray",n.listingArray)("filterarray",n.filterarray)("distances",n.distances)}}function Le(i,o){i&1&&c(0,"p-progressSpinner",24)}function Ve(i,o){if(i&1&&(s(0,"div",21),g(1,Le,1,0,"p-progressSpinner",22),c(2,"app-map-view",25),l()),i&2){let n=f();a(1),p("ngIf",n.loading),a(1),p("listingArray",n.listingArray)("filterarray",n.filterarray)}}var li=(()=>{let o=class o{constructor(e,t,r,m,ue,he){this.listingservice=e,this._router=t,this.filterservice=r,this.distanceService=m,this.previousRouteService=ue,this.platformId=he,this.listingArray=[],this.filterarray=[],this.first=0,this.rows=20,this.searchQuery="",this.categories=[],this.states=[],this.state="",this.category="",this.city="",this.cities=[],this.empty=[],this.loading=!1,this.distances=[],this.stateArray=[],this.galleyView=!1,this.listView=!0,this.mapView=!1}ngOnInit(){if(this.previousRouteService.getPreviousUrl()=="/city"||this.previousRouteService.getPreviousUrl()=="/posting"||this.previousRouteService.getPreviousUrl()=="/buysell"||this.previousRouteService.getPreviousUrl()=="/listing")if(K(this.platformId)){let t=localStorage.getItem("filter"),r=[];t?(r=JSON.parse(t),this.getFilteredListing(r[0].category,r[0].state,r[0].city),this.filteredfromService(),this.clearListing()):(this.getListing(),this.filteredfromService(),this.clearListing())}else this.getListing();else this.getListing(),this.filteredfromService(),this.clearListing();let e=localStorage.getItem("filter");e&&(this.filter=JSON.parse(e)),this.loadFilter()}getListing(){this.listingservice.GetListing().subscribe({next:e=>{this.listingArray=e.data},error:e=>{}})}getFilteredListing(e,t,r){this.filterservice.getbussineses(e,t,r).subscribe({next:m=>{this.listingArray=m.data.businessesIds},error:m=>{}})}clearListing(){this.filterservice.clearListings.subscribe({next:e=>{this.listingArray=e.data},error:e=>{}})}filteredfromService(){this.filterservice.filteredListings.subscribe({next:e=>{this.listingArray=e.data.businessesIds}})}showGallery(){this.galleyView=!0,this.listView=!1,this.mapView=!1}showList(){this.listView=!0,this.galleyView=!1,this.mapView=!1}showMap(){this.mapView=!0,this.galleyView=!1,this.listView=!1}onPageChange(e){this.first=e.first}loadFilter(){let e=localStorage.getItem("filter");e&&(this.filter=JSON.parse(e))}};o.\u0275fac=function(t){return new(t||o)(d(v),d(q),d(ee),d(ie),d(fe),d(j))},o.\u0275cmp=x({type:o,selectors:[["app-listing"]],standalone:!0,features:[P([v,H]),w],decls:31,vars:6,consts:[[1,"searchBar","py-5"],[1,"container"],[1,"div-searchBar2","py-2","w-100","justify-content-center","align-items-center","d-flex"],[1,"form-group"],[1,"div-searchBar","justify-content-center","align-items-center","d-flex",2,"gap","0rem"],[1,"listing","py-5","mx-1"],[1,"spas"],[1,"title"],[1,"py-1"],["class","d-lg-none d-block d-flex align-items-center justify-content-center",4,"ngIf"],[1,"view","d-flex","justify-content-between"],[1,"suggest"],[1,"m-0"],[1,"views","d-flex","gap-3"],[1,"box","d-flex","gap-2",3,"ngClass","click"],[1,"pi","pi-list",2,"font-size","1.5rem"],[1,"m-0","d-none","d-lg-block"],[1,"pi","pi-image",2,"font-size","1.5rem"],["class","view-data"],[1,"d-lg-none","d-block","d-flex","align-items-center","justify-content-center"],[1,"pi","pi-filter-fill",2,"color","#8dd3bb"],[1,"view-data"],["class","justify-content-center align-items-center d-flex","styleClass","w-2rem h-2rem","strokeWidth","3","fill","var(--surface-ground)","animationDuration",".5s",4,"ngIf"],[3,"listingArray","filterarray","distances"],["styleClass","w-2rem h-2rem","strokeWidth","3","fill","var(--surface-ground)","animationDuration",".5s",1,"justify-content-center","align-items-center","d-flex"],[3,"listingArray","filterarray"]],template:function(t,r){t&1&&(s(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),c(5,"app-filter")(6,"p-toast")(7,"p-confirmDialog"),l()()()()(),s(8,"section",5)(9,"div",6)(10,"div",1)(11,"div",7)(12,"h3",8),u(13,"Top businesses in your Area"),l(),g(14,be,8,3,"div",9),l(),s(15,"div",10)(16,"div",11)(17,"h6",12),u(18,"Suggested Results:"),l()(),s(19,"div",13)(20,"div",14),y("click",function(){return r.showList()}),c(21,"i",15),s(22,"p",16),u(23,"List View"),l()(),s(24,"div",14),y("click",function(){return r.showGallery()}),c(25,"i",17),s(26,"p",16),u(27,"Gallery View"),l()()()()()(),g(28,Se,3,4,"div",18)(29,ke,3,4,"div",18)(30,Ve,3,3,"div",18),l()),t&2&&(a(14),p("ngIf",r.filter&&r.filter.length>0),a(6),p("ngClass",r.listView?"active":null),a(4),p("ngClass",r.galleyView?"active":null),a(4),h(28,r.listView?28:-1),a(1),h(29,r.galleyView?29:-1),a(1),h(30,r.mapView?30:-1))},dependencies:[Z,me,te,pe,le,W,X,de,ce,_,Q,U,b,ge,oe,se,ae,Y],styles:[`@media (max-width: 767px){.searchBar{display:none}.listing{padding-top:9rem!important}.Area .container .row .col-md-6 .form-group .Search-btn{display:none}.Area .container .row .col-md-6 .d-flex .h1{font-size:18px;padding:0;margin:0}.Area .container .row .col-md-6 .d-flex .nav .nav-link .par{gap:19px!important}.Area .container .row .col-md-6 .d-flex .nav .nav-link .par p{display:none!important}.Area .container .row .col-md-6 .d-flex .nav .nav-link .par i{color:#ff8682}.Area .container .col-md-6 .div-searchBar .form-group i{color:#fff!important;background-color:#0f3d3e;width:32px;height:29px;justify-content:center;align-items:center;display:flex;left:260px;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px}.Area .container .col-md-6 .div-searchBar .form-group input{padding:0 12px!important}.Area .container .Restaurants p{line-height:38.4px;font-size:32px;font-family:Lato,sans-serif;color:#000;font-weight:900!important}.Area .container .Restaurants .div-box-navs{justify-content:center!important;align-items:center!important;display:flex!important}.Area .container .Restaurants .nav-underline{background-color:#fff;height:80px;justify-content:center;align-items:center;display:flex;box-shadow:2px 2px 2px 1px #0003;border-radius:12px;-webkit-border-radius:12px;-moz-border-radius:12px;-ms-border-radius:12px;-o-border-radius:12px}.Area .container .Restaurants .nav-underline .nav-link.active{color:#8dd3bb}.Area .container .Restaurants ul li:not(:first-child){border-left:.6px solid #d7e2ee;margin-left:40px}.Area .container .Restaurants ul li:not(:first-child) .nav-link a:visited{color:#000}.Area .container .Restaurants ul li:not(:first-child) .nav-link a.active{color:#000}.Area .container .Restaurants ul li:not(:first-child) button{color:#000;margin:0 14px}.Area .container .Restaurants ul li:not(:first-child) button .nav-link{color:#000!important}}.sfarray{width:300px;height:222px}.map-container{width:85vw}.searchBar .container .div-searchBar2 .form-group .div-searchBar form{justify-content:center;align-items:center;display:flex;gap:10px}.searchBar .container .div-searchBar2 .form-group .div-searchBar form .clear-btn{background-color:#ffbf9d;color:#fff;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;width:111px;height:48px;outline:none;border:none}.searchBar .container .div-searchBar2 .form-group .div-searchBar form .Search-btn{height:48px!important;background-color:#000;color:#fff;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;width:111px;outline:none;border:none}ul{padding:0}i,.d-lg-block{cursor:pointer}
`],encapsulation:2});let i=o;return i})();export{li as ListingComponent};