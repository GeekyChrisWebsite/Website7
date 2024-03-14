import{a as R}from"./chunk-KEVBZ4LU.js";import{a as V,b as A}from"./chunk-P6CA73U7.js";import{a as E}from"./chunk-ZQMVMXGV.js";import"./chunk-4PYCHCQM.js";import{b as N,e as B,i as L,m as D}from"./chunk-NW72TZDH.js";import"./chunk-KMXITLPI.js";import{l as j,o as F,q as T}from"./chunk-4DZWOM2H.js";import{Ga as a,Ha as p,Hb as P,Jb as S,Sa as l,Y as h,Ya as g,ba as _,bb as o,ca as C,cb as s,db as M,hb as O,jb as m,kb as f,mc as w,nc as k,qa as y,qb as x,rb as v,tc as I,vc as u,xb as b}from"./chunk-MGRODROF.js";function z(n,r){if(n&1){let c=O();o(0,"div",8),m("click",function(){let e=_(c).$implicit,d=f();return C(d.getbuss(e))}),o(1,"a",9),m("click",function(){let e=_(c).$implicit,d=f();return C(d.getbuss(e))}),x(2),s()()}if(n&2){let c=r.$implicit;a(2),v(c)}}function $(n,r){n&1&&M(0,"p-progressSpinner",12)}function W(n,r){if(n&1&&(o(0,"div",10),g(1,$,1,0,"p-progressSpinner",11),s()),n&2){let c=f();a(1),l("ngIf",c.loading)}}var ot=(()=>{let r=class r{constructor(i,t,e){this._FilterService=i,this._ActivatedRoute=t,this.platformId=e,this.searchText="",this.cityarray=[],this.filteredCities=[],this.city="",this.category="",this.states="",this.loading=!1}ngOnInit(){if(u(this.platformId)){let i=localStorage.getItem("filter");console.log(i);let t=[];i&&(t=JSON.parse(i)),console.log(t),this.getCities(t[0].category,t[0].state)}}getCities(i,t){this._FilterService.getCities(i,t).subscribe({next:e=>{console.log(e),this.cityarray=e.data.cities,this.filteredCities=this.cityarray,console.log(this.cityarray),u(this.platformId)&&localStorage.setItem("filterCity",JSON.stringify(this.cityarray))}})}getbuss(i){if(u(this.platformId)){let t=localStorage.getItem("filter"),e=[];t&&(e=JSON.parse(t)),e[0].city=i,localStorage.setItem("filter",JSON.stringify(e))}}};r.\u0275fac=function(t){return new(t||r)(p(E),p(j),p(y))},r.\u0275cmp=h({type:r,selectors:[["app-city"]],standalone:!0,features:[b],decls:10,vars:6,consts:[[1,"py-5","state"],[1,"container","py-5"],[1,"h1","text-center"],[1,"justify-content-center","align-items-center","d-flex","py-2"],["type","text","id","myInput","placeholder","Search for Cities..",1,"w-50",3,"ngModel","ngModelChange"],[1,"row","py-4","gap-3","justify-content-center","align-items-center","d-flex"],["class","col-md-3 col-4 justify-content-center align-items-center d-flex bg-word","routerLink","/listing",3,"click",4,"ngFor","ngForOf"],["class","justify-content-center align-items-center d-flex",4,"ngIf"],["routerLink","/listing",1,"col-md-3","col-4","justify-content-center","align-items-center","d-flex","bg-word",3,"click"],["routerLink","/listing",1,"ci",3,"click"],[1,"justify-content-center","align-items-center","d-flex"],["class","justify-content-center align-items-center d-flex","styleClass","w-2rem h-2rem","strokeWidth","3","fill","var(--maskbg)","animationDuration",".5s",4,"ngIf"],["styleClass","w-2rem h-2rem","strokeWidth","3","fill","var(--maskbg)","animationDuration",".5s",1,"justify-content-center","align-items-center","d-flex"]],template:function(t,e){t&1&&(o(0,"section",0)(1,"div",1)(2,"h2",2),x(3,"Select city"),s(),o(4,"div",3)(5,"input",4),m("ngModelChange",function(J){return e.searchText=J}),s()(),o(6,"div",5),g(7,z,3,1,"div",6),P(8,"filterByLetters"),s(),g(9,W,2,1,"div",7),s()()),t&2&&(a(5),l("ngModel",e.searchText),a(2),l("ngForOf",S(8,3,e.cityarray,e.searchText)),a(2),l("ngIf",e.loading))},dependencies:[I,w,k,R,D,N,B,L,T,F,A,V],styles:[".state[_ngcontent-%COMP%]{background-color:#000;color:#fff;height:100vh;padding:120px 0!important}.state[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .div-searchBar[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{position:relative}.state[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .div-searchBar[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:53px;width:820px;box-shadow:0 0 2px #00000040}.state[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .div-searchBar[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .Search-btn[_ngcontent-%COMP%]{background-color:#000;color:#fff;position:absolute;right:340px;border-radius:12px;-webkit-border-radius:12px;-moz-border-radius:12px;-ms-border-radius:12px;-o-border-radius:12px;width:111px;height:38px}.state[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:#fff!important}.state[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .bg-word[_ngcontent-%COMP%]{background-color:#d9d9d933;border:1px white solid;width:230px;height:79px;border-radius:17px;-webkit-border-radius:17px;-moz-border-radius:17px;-ms-border-radius:17px;-o-border-radius:17px}.state[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .bg-word[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#fff}#myInput[_ngcontent-%COMP%]{background-position:10px 12px;background-repeat:no-repeat;width:100%;font-size:16px;padding:12px 20px 12px 24px;border:1px solid #ddd;margin-bottom:12px}"]});let n=r;return n})();export{ot as CityComponent};
