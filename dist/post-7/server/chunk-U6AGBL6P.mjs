import './polyfills.server.mjs';
import{a as q}from"./chunk-G66NRBMM.mjs";import{b as M}from"./chunk-IMHY47AW.mjs";import{a as E,b as T}from"./chunk-RKR3AFNJ.mjs";import{a as P}from"./chunk-2XOKH5GC.mjs";import{m as j,n as C}from"./chunk-IACJNOUJ.mjs";import"./chunk-DVQZZKV5.mjs";import{m as k,q as F,s as I}from"./chunk-B7DFW3HG.mjs";import{Cb as g,Ec as _,Ia as n,Ja as l,Jb as b,Lb as v,Ua as a,Y as x,_a as d,db as s,eb as o,fb as m,mb as u,sb as f,tb as y,xc as S,yc as w,zb as h}from"./chunk-NQRG7XUJ.mjs";import"./chunk-KRLCULJA.mjs";var L=(e,t)=>({category:e,states:t});function R(e,t){if(e&1&&(s(0,"div",8)(1,"a",9),f(2),o()()),e&2){let c=t.$implicit,i=u();a("queryParams",g(3,L,i.category,c)),n(1),a("queryParams",g(6,L,i.category,c)),n(1),y(c)}}function D(e,t){e&1&&m(0,"p-progressSpinner",12)}function O(e,t){if(e&1&&(s(0,"div",10),d(1,D,1,0,"p-progressSpinner",11),o()),e&2){let c=u();n(1),a("ngIf",c.loading)}}var Q=(()=>{let t=class t{constructor(i,r){this._FilterService=i,this._ActivatedRoute=r,this.searchText="",this.statearray=[],this.category="",this.loading=!1}getStates(i){this.loading=!0,this._FilterService.GetState(i).subscribe(r=>{this.loading=!1,this.statearray=r.data.states,console.log(r)})}ngOnInit(){this._ActivatedRoute.queryParams.subscribe(i=>{this.category=i.category,console.log(i.category),this.getStates(i.category)})}};t.\u0275fac=function(r){return new(r||t)(l(P),l(k))},t.\u0275cmp=x({type:t,selectors:[["app-state"]],standalone:!0,features:[h],decls:10,vars:5,consts:[[1,"py-5","state"],[1,"container"],[1,"h1","text-center"],[1,"justify-content-center","align-items-center","d-flex","py-2"],["type","text","id","myInput","placeholder","Search for States..",1,"w-50"],[1,"row","py-4","gap-3","justify-content-center","align-items-center","d-flex"],["class","col-md-3 col-4 justify-content-center align-items-center d-flex bg-word","routerLink","/city",3,"queryParams",4,"ngFor","ngForOf"],["class","justify-content-center align-items-center d-flex",4,"ngIf"],["routerLink","/city",1,"col-md-3","col-4","justify-content-center","align-items-center","d-flex","bg-word",3,"queryParams"],["routerLink","/city",1,"ci",3,"queryParams"],[1,"justify-content-center","align-items-center","d-flex"],["class","justify-content-center align-items-center d-flex","styleClass","w-2rem h-2rem","strokeWidth","3","fill","var(--maskbg)","animationDuration",".5s",4,"ngIf"],["styleClass","w-2rem h-2rem","strokeWidth","3","fill","var(--maskbg)","animationDuration",".5s",1,"justify-content-center","align-items-center","d-flex"]],template:function(r,p){r&1&&(s(0,"section",0)(1,"div",1)(2,"h2",2),f(3,"Select State"),o(),s(4,"div",3),m(5,"input",4),o(),s(6,"div",5),d(7,R,3,9,"div",6),b(8,"filterByLetters"),o(),d(9,O,2,1,"div",7),o()()),r&2&&(n(7),a("ngForOf",v(8,2,p.statearray,p.searchText)),n(2),a("ngIf",p.loading))},dependencies:[_,S,w,q,j,C,T,E,I,F,M],styles:[`.state{background-color:#000;color:#fff;height:100vh}.state .container .parent{position:relative}.state .container .parent input{height:53px;width:820px;box-shadow:0 0 2px #00000040}.state .container .parent .Search-btn{background-color:#000;color:#fff;border-radius:12px;-webkit-border-radius:12px;-moz-border-radius:12px;-ms-border-radius:12px;-o-border-radius:12px;width:111px;height:38px;position:absolute}.state .row h5{color:#fff!important}.state .row .bg-word{background-color:#d9d9d933;border:1px white solid;width:230px;height:79px;border-radius:17px;-webkit-border-radius:17px;-moz-border-radius:17px;-ms-border-radius:17px;-o-border-radius:17px}.state .row .bg-word a{text-decoration:none;color:#fff}#myInput{background-position:10px 12px;background-repeat:no-repeat;width:100%;font-size:16px;padding:12px 20px 12px 40px;border:1px solid #ddd;margin-bottom:12px}
`],encapsulation:2});let e=t;return e})();export{Q as StateComponent};