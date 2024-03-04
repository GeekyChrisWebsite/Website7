import './polyfills.server.mjs';
import{a as z}from"./chunk-DGIXOLEF.mjs";import{b as V}from"./chunk-RWHAAWCY.mjs";import{a as B,b as J}from"./chunk-64WL663V.mjs";import{a as P}from"./chunk-3LUGQ452.mjs";import{b as L,e as N,i as D,m as R,n as A}from"./chunk-NT32ICG6.mjs";import"./chunk-ZYO4HHVP.mjs";import"./chunk-7MGJQSK6.mjs";import{p as T,t as O,v as E}from"./chunk-2AX55QIO.mjs";import{$a as s,Ac as j,Dc as m,Ea as a,Fa as d,Fb as C,Hb as k,Qa as c,U as h,Wa as p,Z as S,_ as y,ab as n,bb as b,fb as _,hb as f,ib as g,ma as v,ob as u,pb as w,tc as M,uc as F,vb as I}from"./chunk-OAY366PD.mjs";import"./chunk-KRLCULJA.mjs";function $(r,o){if(r&1){let l=_();s(0,"div",8)(1,"a",9),f("click",function(){let i=S(l).$implicit,x=g();return y(x.getCities(i))}),u(2),n()()}if(r&2){let l=o.$implicit;a(2),w(l)}}function q(r,o){r&1&&b(0,"p-progressSpinner",12)}function G(r,o){if(r&1&&(s(0,"div",10),p(1,q,1,0,"p-progressSpinner",11),n()),r&2){let l=g();a(1),c("ngIf",l.loading)}}var ct=(()=>{let o=class o{constructor(e,t,i){this._FilterService=e,this._ActivatedRoute=t,this.platformId=i,this.searchText="",this.statearray=[],this.category="",this.loading=!1,this.filteredStates=[]}ngOnInit(){if(m(this.platformId)){let e=localStorage.getItem("filter");console.log(e);let t=[];e&&(t=JSON.parse(e)),console.log(t),this.getStates(t[0].category)}}getStates(e){console.log(e),this.stateSubscriptions=this._FilterService.getStates(e).subscribe({next:t=>{console.log(t),this.statearray=t.data.states,this.filteredStates=this.statearray,console.log(this.statearray),m(this.platformId)&&localStorage.setItem("filterState",JSON.stringify(this.statearray))}})}getCities(e){if(m(this.platformId)){let t=localStorage.getItem("filter"),i=[];t&&(i=JSON.parse(t)),i[0].state=e,localStorage.setItem("filter",JSON.stringify(i))}}};o.\u0275fac=function(t){return new(t||o)(d(P),d(T),d(v))},o.\u0275cmp=h({type:o,selectors:[["app-state"]],standalone:!0,features:[I],decls:10,vars:6,consts:[[1,"state"],[1,"container","py-5"],[1,"h1","text-center"],[1,"justify-content-center","align-items-center","d-flex","py-2"],["type","text","id","myInput","placeholder","Search for States ",1,"w-50",3,"ngModel","ngModelChange"],[1,"row","py-4","gap-3","justify-content-center","align-items-center","d-flex"],["class","col-md-3 col-4 justify-content-center align-items-center d-flex bg-word ","routerLink","/city",4,"ngFor","ngForOf"],["class","justify-content-center align-items-center d-flex",4,"ngIf"],["routerLink","/city",1,"col-md-3","col-4","justify-content-center","align-items-center","d-flex","bg-word"],["routerLink","/city",1,"ci",3,"click"],[1,"justify-content-center","align-items-center","d-flex"],["class","justify-content-center align-items-center d-flex","styleClass","w-2rem h-2rem","strokeWidth","3","fill","var(--maskbg)","animationDuration",".5s",4,"ngIf"],["styleClass","w-2rem h-2rem","strokeWidth","3","fill","var(--maskbg)","animationDuration",".5s",1,"justify-content-center","align-items-center","d-flex"]],template:function(t,i){t&1&&(s(0,"section",0)(1,"div",1)(2,"h2",2),u(3,"Select State"),n(),s(4,"div",3)(5,"input",4),f("ngModelChange",function(W){return i.searchText=W}),n()(),s(6,"div",5),p(7,$,3,1,"div",6),C(8,"filterByLetters"),n(),p(9,G,2,1,"div",7),n()()),t&2&&(a(5),c("ngModel",i.searchText),a(2),c("ngForOf",k(8,3,i.statearray,i.searchText)),a(2),c("ngIf",i.loading))},dependencies:[j,M,F,z,R,L,N,D,A,J,B,E,O,V],styles:[`.state{background-color:#000;color:#fff;height:100vh;padding:120px 0!important}.state .container .parent{position:relative}.state .container .parent input{height:53px;width:820px;box-shadow:0 0 2px #00000040}.state .container .parent .Search-btn{background-color:#000;color:#fff;border-radius:12px;-webkit-border-radius:12px;-moz-border-radius:12px;-ms-border-radius:12px;-o-border-radius:12px;width:111px;height:38px;position:absolute}.state .row h5{color:#fff!important}.state .row .bg-word{background-color:#d9d9d933;border:1px white solid;width:230px;height:79px;border-radius:17px;-webkit-border-radius:17px;-moz-border-radius:17px;-ms-border-radius:17px;-o-border-radius:17px}.state .row .bg-word a{text-decoration:none;color:#fff}#myInput{background-position:10px 12px;background-repeat:no-repeat;width:100%;font-size:16px;padding:12px 20px 12px 26px;border:1px solid #ddd;margin-bottom:12px}
`],encapsulation:2});let r=o;return r})();export{ct as StateComponent};