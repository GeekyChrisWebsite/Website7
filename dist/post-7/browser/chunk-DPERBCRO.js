import{a as ue,b as he,c as ye,d as ve}from"./chunk-F4JWYLKI.js";import{a as L}from"./chunk-5NN3RGOP.js";import{a as ce,b as de}from"./chunk-CSUDBD27.js";import{a as ge,b as fe}from"./chunk-XCLP3TOF.js";import{c as le,e as xe}from"./chunk-JGZ5YVEB.js";import{e as ae,f as se}from"./chunk-VXA4IIKD.js";import{a as _e}from"./chunk-FJEW6DBI.js";import{a as I,b as pe,c as me}from"./chunk-NBLAVSYQ.js";import"./chunk-SMXKOCE2.js";import"./chunk-6GNAJBRD.js";import"./chunk-WOGOK3IR.js";import{b as V,d as H,e as X,f as Z,g as k,i as ee,j as te,k as ie,l as re,m as ne,n as oe}from"./chunk-BBZQKWCK.js";import{e as A,i as x}from"./chunk-AWLOF4ZL.js";import{b as K,i as Y,n as W}from"./chunk-JFSDMO4J.js";import{B,Bb as b,Ka as s,La as m,Lb as P,Mb as O,Na as D,Qb as z,Rb as q,Tb as J,Wa as c,aa as w,ab as y,bb as _,cb as G,db as F,eb as R,fa as u,fb as a,ga as h,gb as l,hb as f,lb as C,n as T,nb as g,ob as p,pc as Q,r as j,rc as U,ua as E,ub as v,uc as $,xc as S,yb as N}from"./chunk-DBXKETHY.js";function Ie(n,o){if(n&1){let r=C();a(0,"map-marker",4),g("mapClick",function(e){u(r);let i=p(2);return h(i.handleMapClick(e))}),l()}if(n&2){let r=o.$implicit,t=p(2);c("position",r.geo_direction)("options",t.markerOptions)}}function Me(n,o){if(n&1&&(a(0,"google-map",2,3),F(2,Ie,1,2,"map-marker",5,G),l()),n&2){let r=p();c("options",r.options),s(2),R(r.listingArray)}}var we=(()=>{let o=class o{constructor(t){this._httpClient=t,this.options={mapTypeControl:!1,streetViewControl:!1,fullscreenControl:!1},this.markerOptions={draggable:!1},this.apiLoaded=t.jsonp("https://maps.googleapis.com/maps/api/js?key=AIzaSyAAb4SFQe0Kigpu3EiKhR93nC-OUitTKwM","callback").pipe(j(()=>!0),B(()=>T(!1)))}ngAfterViewInit(){setTimeout(()=>{this.fitBounds()},1e3)}fitBounds(){let t=new google.maps.LatLngBounds;for(let e of this.listingArray)console.log(e.geo_direction.lat),t.extend(new google.maps.LatLng(e.geo_direction.lat,e.geo_direction.lng));this.map.fitBounds(t)}handleMapClick(t){let e=t.coords||t.latLng;if(e){let i=`https://www.google.com/maps/search/?api=1&query=${e.lat()},${e.lng()}`;window.open(i,"_blank")}}};o.\u0275fac=function(e){return new(e||o)(m(K))},o.\u0275cmp=w({type:o,selectors:[["app-map-view"]],viewQuery:function(e,i){if(e&1&&q(I,5),e&2){let d;z(d=J())&&(i.map=d.first)}},inputs:{listingArray:"listingArray",filterarray:"filterarray"},standalone:!0,features:[b],decls:4,vars:3,consts:[[1,"container","py-3"],[1,"container-map"],[3,"options"],["map",""],[3,"position","options","mapClick"],[3,"position","options"]],template:function(e,i){e&1&&(a(0,"div",0)(1,"div",1),y(2,Me,4,1,"google-map",2),P(3,"async"),l()()),e&2&&(s(2),_(2,O(3,1,i.apiLoaded)?2:-1))},dependencies:[S,$,me,I,pe],styles:[`.map-container{width:85vw!important}
`],encapsulation:2});let n=o;return n})();function Te(n,o){if(n&1){let r=C();a(0,"form",19),g("ngSubmit",function(){u(r);let e=p();return h(e.onSubmit())}),a(1,"p-dropdown",20),g("onChange",function(e){u(r);let i=p();return h(i.oncategorychange(e))}),l(),a(2,"p-dropdown",21),g("onChange",function(e){u(r);let i=p();return h(i.onstatechange(e))}),l(),a(3,"p-dropdown",22),g("onChange",function(e){u(r);let i=p();return h(i.oncitychange(e))}),l(),a(4,"button",23),g("click",function(){u(r);let e=p();return h(e.getDataAll())}),v(5,"Search"),l(),a(6,"button",24),g("click",function(){u(r);let e=p();return h(e.clear())}),v(7,"Clear"),l()()}if(n&2){let r=p();c("formGroup",r.filterform),s(1),c("options",r.categories),s(1),c("options",r.states),s(1),c("options",r.cities),s(1),c("disabled",!r.filterform.valid)}}function je(n,o){n&1&&f(0,"p-progressSpinner",28)}function Be(n,o){if(n&1&&(a(0,"div",25),y(1,je,1,0,"p-progressSpinner",26),f(2,"app-list-view",27),l()),n&2){let r=p();s(1),c("ngIf",r.loading),s(1),c("listingArray",r.listingArray)("filterarray",r.filterarray)("distances",r.distances)}}function Ee(n,o){n&1&&f(0,"p-progressSpinner",28)}function De(n,o){if(n&1&&(a(0,"div",25),y(1,Ee,1,0,"p-progressSpinner",26),f(2,"app-gallery-view",27),l()),n&2){let r=p();s(1),c("ngIf",r.loading),s(1),c("listingArray",r.listingArray)("filterarray",r.filterarray)("distances",r.distances)}}function Ge(n,o){n&1&&f(0,"p-progressSpinner",28)}function Fe(n,o){if(n&1&&(a(0,"div",25),y(1,Ge,1,0,"p-progressSpinner",26),f(2,"app-map-view",29),l()),n&2){let r=p();s(1),c("ngIf",r.loading),s(1),c("listingArray",r.listingArray)("filterarray",r.filterarray)}}var vt=(()=>{let o=class o{constructor(t,e,i,d,M,Ce,be,Se,Ae,Ve){this.listingservice=t,this._router=e,this.filterservice=i,this.fb=d,this._messageService=M,this.distanceService=Ce,this.confirmationService=be,this.messageService=Se,this.cdr=Ae,this.platformid=Ve,this.listingArray=[],this.filterarray=[],this.first=0,this.rows=4,this.searchQuery="",this.categories=[],this.states=[],this.state="",this.category="",this.city="",this.cities=[],this.empty=[],this.loading=!1,this.filterform=new Z({categories:new k("",V.required),states:new k("",V.required),cities:new k("",V.required)}),this.distances=[],this.galleyView=!1,this.listView=!0,this.mapView=!1}ngDoCheck(){this._router.queryParams.subscribe(t=>{console.log(t)})}updateArray(){this.listingArray=[...this.listingArray],localStorage.setItem("listingArray",JSON.stringify(this.listingArray)),this.cdr.detectChanges()}GetListingdata(){this.loading=!0,this.listingservice.GetListing().subscribe(t=>{console.log(t),this.listingArray=t.data,this.backendLocations=t,this.loading=!1,localStorage.setItem("listingArray",JSON.stringify(this.listingArray))},t=>{console.error(t)})}filterdatefromhome(t,e,i){this.loading=!0,this.filterservice.getbusinessesbycategory(t,e,i).subscribe(d=>{this.loading=!1,this.listingArray=d.data.businessesIds,console.log("filterfromhome",d),localStorage.setItem("listingArray",JSON.stringify(this.listingArray))})}getDataAll(){this.loading=!0,this.filterservice.getbusinessesbycategory(this.category,this.state,this.city).subscribe(t=>{this.loading=!1,this.listingArray=t.data.businessesIds,console.log("here",this.listingArray),localStorage.setItem("listingArray",JSON.stringify(this.listingArray)),this.filterservice.bparm.next({categories:this.category,state:this.state,cities:this.city})})}ngOnInit(){this._router.queryParams.subscribe(e=>{if(console.log(e),Object.keys(e).length)this.loading=!1,this.filterservice.bparm.next({categories:e.category,states:e.states,cities:e.city}),console.log(this.filterservice.bparm,"rania"),this.filterdatefromhome(e.category,e.states,e.city),console.log(this.category,this.states,this.city);else{let i=localStorage.getItem("listingArray");i?(this.listingArray=JSON.parse(i),this.filterservice.updateListingArray(this.listingArray)):this.GetListingdata()}}),this.categories=["BEAUTY SALON SPA","MASSAGE SPA","RESTAURANTS"],navigator.geolocation&&navigator.geolocation.getCurrentPosition(e=>{this.currentLocation={latitude:e.coords.latitude,longitude:e.coords.longitude};for(let i of this.listingArray){let d={latitude:i.geo_direction.lat,longitude:i.geo_direction.lng},M=this.distanceService.calculateDistance(this.currentLocation,d);this.distances.push(M)}this.distanceService.setCurrentLocation(this.currentLocation),this.distanceService.setDistances(this.distances).then(()=>{}).catch(i=>{console.error("Error setting distances:",i)})},e=>{console.error("Error getting user location:",e)});let t=this.distanceService.getDistances();t.length>0&&(this.distances=t),this.filterservice.listingArray$.subscribe(e=>{this.listingArray=e,console.log("Updated Listing Array:",this.listingArray)})}loadListingArray(){let t=localStorage.getItem("listingArray");t?(this.listingArray=JSON.parse(t),this.filterservice.updateListingArray(this.listingArray)):this.GetListingdata()}oncategorychange(t){this.category=t.value,this.filterservice.GetState(t.value).subscribe(e=>{this.states=e?.data?.states,console.log(e),this.filterform.patchValue({category:this.category})})}onstatechange(t){this.state=t.value,this.filterservice.GetCity(t.value,this.category).subscribe(e=>{this.cities=e?.data.cities,console.log(e),this.filterform.patchValue({states:this.state})})}oncitychange(t){this.city=t.value,this.filterform.patchValue({city:this.city})}showError(){this._messageService.add({severity:"success",summary:"success",detail:"File size must be smaller than 5MB"})}onSubmit(){}clear(){this.confirmationService.confirm({message:"Are you sure that Clear Businesses Filter?",header:"Confirmation",icon:"pi pi-exclamation-triangle",acceptIcon:"pi pi-check",rejectIcon:"pi pi-times",acceptButtonStyleClass:"p-button-success",rejectButtonStyleClass:"p-button-danger",acceptLabel:"Yes",rejectLabel:"No",accept:()=>{this.messageService.add({severity:"info",summary:"Confirmed",detail:"Filter is Cleared"}),this.performClear()},reject:()=>{this.messageService.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})}performClear(){console.log("Performing clear..."),this.filterform.reset(),this.category="",this.state="",this.city="",this.listingArray=[],this.loading=!0,this.filterservice.bparm.next({}),localStorage.removeItem("postingArray"),localStorage.removeItem("buysellarray"),localStorage.removeItem("filteredBuySellData"),this.GetListingdata(),console.log("get all data")}showGallery(){this.galleyView=!0,this.listView=!1,this.mapView=!1}showList(){this.listView=!0,this.galleyView=!1,this.mapView=!1}showMap(){this.mapView=!0,this.galleyView=!1,this.listView=!1}onPageChange(t){this.first=t.first}fetchData(){this.filterservice.fetchData()}};o.\u0275fac=function(e){return new(e||o)(m(L),m(Y),m(_e),m(re),m(x),m(xe),m(A),m(x),m(D),m(E))},o.\u0275cmp=w({type:o,selectors:[["app-listing"]],standalone:!0,features:[N([L,x,A]),b],decls:34,vars:7,consts:[[1,"searchBar","py-5"],[1,"container"],[1,"div-searchBar2","py-2","w-100","justify-content-center","align-items-center","d-flex"],[1,"form-group"],[1,"div-searchBar","justify-content-center","align-items-center","d-flex",2,"gap","0rem"],[3,"formGroup","ngSubmit",4,"ngIf"],[1,"listing","py-5","mx-3"],[1,"spas"],[1,"title","mb-4"],[1,"view","d-flex","justify-content-between"],[1,"suggest"],[1,"m-0"],[1,"views","d-flex","gap-3"],[1,"box","d-flex","gap-2",3,"ngClass","click"],[1,"pi","pi-list",2,"font-size","1.5rem"],[1,"m-0","d-none","d-lg-block"],[1,"pi","pi-image",2,"font-size","1.5rem"],[1,"pi","pi-map",2,"font-size","1.5rem"],["class","view-data"],[3,"formGroup","ngSubmit"],["formControlName","categories","placeholder","Select a Category",3,"options","onChange"],["formControlName","states","placeholder","Select a State",3,"options","onChange"],["formControlName","cities","placeholder","Select a City",3,"options","onChange"],[1,"Search-btn","ms-5",3,"disabled","click"],[1,"clear-btn",3,"click"],[1,"view-data"],["class","justify-content-center align-items-center d-flex","styleClass","w-2rem h-2rem","strokeWidth","3","fill","var(--surface-ground)","animationDuration",".5s",4,"ngIf"],[3,"listingArray","filterarray","distances"],["styleClass","w-2rem h-2rem","strokeWidth","3","fill","var(--surface-ground)","animationDuration",".5s",1,"justify-content-center","align-items-center","d-flex"],[3,"listingArray","filterarray"]],template:function(e,i){e&1&&(a(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),y(5,Te,8,5,"form",5),f(6,"p-toast")(7,"p-confirmDialog"),l()()()()(),a(8,"section",6)(9,"div",7)(10,"div",1)(11,"div",8)(12,"h3"),v(13,"Top businesses in your Area"),l()(),a(14,"div",9)(15,"div",10)(16,"h6",11),v(17,"Suggested Results:"),l()(),a(18,"div",12)(19,"div",13),g("click",function(){return i.showList()}),f(20,"i",14),a(21,"p",15),v(22,"List View"),l()(),a(23,"div",13),g("click",function(){return i.showGallery()}),f(24,"i",16),a(25,"p",15),v(26,"Gallery View"),l()(),a(27,"div",13),g("click",function(){return i.showMap()}),f(28,"i",17),a(29,"p",15),v(30,"Map View"),l()()()()()(),y(31,Be,3,4,"div",18)(32,De,3,4,"div",18)(33,Fe,3,3,"div",18),l()),e&2&&(s(5),c("ngIf",i.filterform),s(14),c("ngClass",i.listView?"active":null),s(4),c("ngClass",i.galleyView?"active":null),s(4),c("ngClass",i.mapView?"active":null),s(4),_(31,i.listView?31:-1),s(1),_(32,i.galleyView?32:-1),s(1),_(33,i.mapView?33:-1))},dependencies:[se,ae,le,ee,H,X,he,ue,W,ne,ve,ye,S,Q,U,ce,we,de,fe,ge,oe,te,ie],styles:[`@media (max-width: 767px){.searchBar,.Area .container .row .col-md-6 .form-group .Search-btn{display:none}.Area .container .row .col-md-6 .d-flex .h1{font-size:18px;padding:0;margin:0}.Area .container .row .col-md-6 .d-flex .nav .nav-link .par{gap:19px!important}.Area .container .row .col-md-6 .d-flex .nav .nav-link .par p{display:none!important}.Area .container .row .col-md-6 .d-flex .nav .nav-link .par i{color:#ff8682}.Area .container .col-md-6 .div-searchBar .form-group i{color:#fff!important;background-color:#0f3d3e;width:32px;height:29px;justify-content:center;align-items:center;display:flex;left:260px;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px}.Area .container .col-md-6 .div-searchBar .form-group input{padding:0 12px!important}.Area .container .Restaurants p{line-height:38.4px;font-size:32px;font-family:Lato,sans-serif;color:#000;font-weight:900!important}.Area .container .Restaurants .div-box-navs{justify-content:center!important;align-items:center!important;display:flex!important}.Area .container .Restaurants .nav-underline{background-color:#fff;height:80px;justify-content:center;align-items:center;display:flex;box-shadow:2px 2px 2px 1px #0003;border-radius:12px;-webkit-border-radius:12px;-moz-border-radius:12px;-ms-border-radius:12px;-o-border-radius:12px}.Area .container .Restaurants .nav-underline .nav-link.active{color:#8dd3bb}.Area .container .Restaurants ul li:not(:first-child){border-left:.6px solid #d7e2ee;margin-left:40px}.Area .container .Restaurants ul li:not(:first-child) .nav-link a:visited{color:#000}.Area .container .Restaurants ul li:not(:first-child) .nav-link a.active{color:#000}.Area .container .Restaurants ul li:not(:first-child) button{color:#000;margin:0 14px}.Area .container .Restaurants ul li:not(:first-child) button .nav-link{color:#000!important}}.sfarray{width:300px;height:222px}.map-container{width:85vw}.searchBar .container .div-searchBar2 .form-group .div-searchBar form{justify-content:center;align-items:center;display:flex;gap:10px}.searchBar .container .div-searchBar2 .form-group .div-searchBar form .clear-btn{background-color:#ff8682;color:#fff;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;width:111px;height:48px;outline:none;border:none}.searchBar .container .div-searchBar2 .form-group .div-searchBar form .Search-btn{height:48px!important;background-color:#000;color:#fff;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;width:111px;outline:none;border:none}ul{padding:0}
`],encapsulation:2});let n=o;return n})();export{vt as ListingComponent};
