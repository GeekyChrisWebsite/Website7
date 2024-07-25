import{a as z}from"./chunk-G6Z2VTUQ.js";import{a as B,b as J}from"./chunk-AOLB257O.js";import{a as A}from"./chunk-NFFZMRKC.js";import"./chunk-CCR2RI5S.js";import{b as P}from"./chunk-AHDVZE4G.js";import{b as E,e as L,i as V,m as D,n as R}from"./chunk-ZPK6SI4E.js";import"./chunk-KMXITLPI.js";import{m as j,p as O,r as N}from"./chunk-446XVE5Q.js";import{Ab as S,Bb as w,Ec as T,Gc as u,Hb as C,Qa as l,Ra as p,Rb as I,Tb as k,Y as _,ab as c,ba as x,ca as h,gb as m,lb as o,mb as a,nb as v,qa as y,rb as b,tb as f,ub as g,wc as M,xc as F}from"./chunk-DNKOXMCJ.js";function W(r,n){if(r&1){let s=b();o(0,"div",8),f("click",function(){let e=x(s).$implicit,d=g();return h(d.getCities(e))}),o(1,"a",9),f("click",function(){let e=x(s).$implicit,d=g();return h(d.getCities(e))}),S(2),a()()}if(r&2){let s=n.$implicit;l(2),w(s)}}function q(r,n){r&1&&v(0,"p-progressSpinner",12)}function G(r,n){if(r&1&&(o(0,"div",10),m(1,q,1,0,"p-progressSpinner",11),a()),r&2){let s=g();l(1),c("ngIf",s.loading)}}var ct=(()=>{let n=class n{constructor(i,t,e){this._FilterService=i,this._ActivatedRoute=t,this.platformId=e,this.searchText="",this.statearray=[],this.category="",this.loading=!1,this.filteredStates=[]}ngOnInit(){if(u(this.platformId)){let i=localStorage.getItem("filter"),t=[];i&&(t=JSON.parse(i)),this.getStates(t[0].category)}}getStates(i){this.stateSubscriptions=this._FilterService.getStates(i).subscribe({next:t=>{this.statearray=t.data.states,this.filteredStates=this.statearray,u(this.platformId)&&localStorage.setItem("filterState",JSON.stringify(this.statearray))}})}getCities(i){if(u(this.platformId)){let t=localStorage.getItem("filter"),e=[];t&&(e=JSON.parse(t)),e[0].state=i,localStorage.setItem("filter",JSON.stringify(e))}}};n.\u0275fac=function(t){return new(t||n)(p(A),p(j),p(y))},n.\u0275cmp=_({type:n,selectors:[["app-state"]],standalone:!0,features:[C],decls:10,vars:6,consts:[[1,"state"],[1,"container","py-5"],[1,"h1","text-center"],[1,"justify-content-center","align-items-center","d-flex","py-2"],["type","text","id","myInput","placeholder","Search for States ",1,"w-50",3,"ngModel","ngModelChange"],[1,"row","py-4","gap-3","justify-content-center","align-items-center","d-flex"],["class","col-md-3 col-4 justify-content-center align-items-center d-flex bg-word ","routerLink","/city",3,"click",4,"ngFor","ngForOf"],["class","justify-content-center align-items-center d-flex",4,"ngIf"],["routerLink","/city",1,"col-md-3","col-4","justify-content-center","align-items-center","d-flex","bg-word",3,"click"],["routerLink","/city",1,"ci",3,"click"],[1,"justify-content-center","align-items-center","d-flex"],["class","justify-content-center align-items-center d-flex","styleClass","w-2rem h-2rem","strokeWidth","3","fill","var(--maskbg)","animationDuration",".5s",4,"ngIf"],["styleClass","w-2rem h-2rem","strokeWidth","3","fill","var(--maskbg)","animationDuration",".5s",1,"justify-content-center","align-items-center","d-flex"]],template:function(t,e){t&1&&(o(0,"section",0)(1,"div",1)(2,"h2",2),S(3,"Select State"),a(),o(4,"div",3)(5,"input",4),f("ngModelChange",function($){return e.searchText=$}),a()(),o(6,"div",5),m(7,W,3,1,"div",6),I(8,"filterByLetters"),a(),m(9,G,2,1,"div",7),a()()),t&2&&(l(5),c("ngModel",e.searchText),l(2),c("ngForOf",k(8,3,e.statearray,e.searchText)),l(2),c("ngIf",e.loading))},dependencies:[T,M,F,z,D,E,L,V,R,J,B,N,O,P],styles:[`.state{background-color:#000;color:#fff;height:100vh;padding:120px 0!important}.state .container .parent{position:relative}.state .container .parent input{height:53px;width:820px;box-shadow:0 0 2px #00000040}.state .container .parent .Search-btn{background-color:#000;color:#fff;border-radius:12px;-webkit-border-radius:12px;-moz-border-radius:12px;-ms-border-radius:12px;-o-border-radius:12px;width:111px;height:38px;position:absolute}.state .row h5{color:#fff!important}.state .row .bg-word{background-color:#d9d9d933;border:1px white solid;width:230px;height:79px;border-radius:17px;-webkit-border-radius:17px;-moz-border-radius:17px;-ms-border-radius:17px;-o-border-radius:17px}.state .row .bg-word a{text-decoration:none;color:#fff}#myInput{background-position:10px 12px;background-repeat:no-repeat;width:100%;font-size:16px;padding:12px 20px 12px 26px;border:1px solid #ddd;margin-bottom:12px}
`],encapsulation:2});let r=n;return r})();export{ct as StateComponent};
