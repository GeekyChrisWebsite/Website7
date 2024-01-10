import{a as j}from"./chunk-34S72YUE.js";import{a as k,b as F,c as I}from"./chunk-2C3TQMLL.js";import"./chunk-6GNAJBRD.js";import{m as S}from"./chunk-PJYKTE7M.js";import{i as v,l as O,n as w}from"./chunk-D6MVGYUZ.js";import{Ab as _,Eb as u,Jb as h,Ka as a,La as l,Lb as C,Wa as s,aa as y,ab as p,fb as c,gb as o,hb as g,nc as P,ob as m,oc as M,tc as b,ub as f,vb as x}from"./chunk-5XT56JNH.js";var q=(e,n,r)=>({category:e,city:n,states:r});function B(e,n){if(e&1&&(c(0,"div",8)(1,"a",9),f(2),o()()),e&2){let r=n.$implicit,t=m();s("queryParams",u(3,q,t.category,r,t.states)),a(1),s("queryParams",u(7,q,t.category,r,t.states)),a(1),x(r)}}function E(e,n){e&1&&g(0,"p-progressSpinner",12)}function L(e,n){if(e&1&&(c(0,"div",10),p(1,E,1,0,"p-progressSpinner",11),o()),e&2){let r=m();a(1),s("ngIf",r.loading)}}var J=(()=>{let n=class n{constructor(t,i){this._FilterService=t,this._ActivatedRoute=i,this.searchText="",this.cityarray=[],this.city="",this.category="",this.states="",this.loading=!1}getCity(t,i){this.loading=!0,this._FilterService.GetCity(t,i).subscribe(d=>{this.loading=!1,this.cityarray=d.data.cities})}ngOnInit(){this._ActivatedRoute.queryParams.subscribe(t=>{console.log(t),this.category=t.category,this.states=t.states,this.getCity(t.states,t.category)})}};n.\u0275fac=function(i){return new(i||n)(l(I),l(v))},n.\u0275cmp=y({type:n,selectors:[["app-city"]],standalone:!0,features:[_],decls:10,vars:5,consts:[[1,"py-5","state"],[1,"container"],[1,"h1","text-center"],[1,"justify-content-center","align-items-center","d-flex","py-2"],["type","text","id","myInput","placeholder","Search for Cities..",1,"w-50"],[1,"row","py-4","gap-3","justify-content-center","align-items-center","d-flex"],["class","col-md-3 col-4 justify-content-center align-items-center d-flex bg-word","routerLink","/listing",3,"queryParams",4,"ngFor","ngForOf"],["class","justify-content-center align-items-center d-flex",4,"ngIf"],["routerLink","/listing",1,"col-md-3","col-4","justify-content-center","align-items-center","d-flex","bg-word",3,"queryParams"],["routerLink","/listing",1,"ci",3,"queryParams"],[1,"justify-content-center","align-items-center","d-flex"],["class","justify-content-center align-items-center d-flex","styleClass","w-2rem h-2rem","strokeWidth","3","fill","var(--maskbg)","animationDuration",".5s",4,"ngIf"],["styleClass","w-2rem h-2rem","strokeWidth","3","fill","var(--maskbg)","animationDuration",".5s",1,"justify-content-center","align-items-center","d-flex"]],template:function(i,d){i&1&&(c(0,"section",0)(1,"div",1)(2,"h2",2),f(3,"Select city"),o(),c(4,"div",3),g(5,"input",4),o(),c(6,"div",5),p(7,B,3,11,"div",6),h(8,"filterByLetters"),o(),p(9,L,2,1,"div",7),o()()),i&2&&(a(7),s("ngForOf",C(8,2,d.cityarray,d.searchText)),a(2),s("ngIf",d.loading))},dependencies:[b,P,M,j,S,w,O,F,k],styles:[".state[_ngcontent-%COMP%]{background-color:#000;color:#fff}.state[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .div-searchBar[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{position:relative}.state[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .div-searchBar[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:53px;width:820px;box-shadow:0 0 2px #00000040}.state[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .div-searchBar[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .Search-btn[_ngcontent-%COMP%]{background-color:#000;color:#fff;position:absolute;right:340px;border-radius:12px;-webkit-border-radius:12px;-moz-border-radius:12px;-ms-border-radius:12px;-o-border-radius:12px;width:111px;height:38px}.state[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:#fff!important}.state[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .bg-word[_ngcontent-%COMP%]{background-color:#d9d9d933;border:1px white solid;width:230px;height:79px;border-radius:17px;-webkit-border-radius:17px;-moz-border-radius:17px;-ms-border-radius:17px;-o-border-radius:17px}.state[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .bg-word[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#fff}#myInput[_ngcontent-%COMP%]{background-position:10px 12px;background-repeat:no-repeat;width:100%;font-size:16px;padding:12px 20px 12px 40px;border:1px solid #ddd;margin-bottom:12px}"]});let e=n;return e})();export{J as CityComponent};
