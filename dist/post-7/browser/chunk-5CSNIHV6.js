import{a as P}from"./chunk-2DTCTXJT.js";import{a as N,b as R}from"./chunk-I2WCJGZA.js";import"./chunk-JR3KP5SO.js";import"./chunk-RCRIBXQ6.js";import{b as v,c as n,e as S,f as y,g as E,h as p,j as C,k as F,l as k,n as M}from"./chunk-NW72TZDH.js";import"./chunk-52DG2NUO.js";import"./chunk-KMXITLPI.js";import{l as b,m as w}from"./chunk-4KABLKUB.js";import{Ga as d,Ha as c,Sa as s,Y as g,bb as t,cb as e,db as r,jb as f,qb as i,tc as x,xb as h}from"./chunk-MGRODROF.js";var L=(()=>{let o=class o{constructor(m,a){this._AuthService=m,this.router=a,this.regsiterForm=new E({username:new p("",n.required),email:new p("",[n.required,n.email]),password:new p("",[n.required,n.minLength(8)]),confirmPassword:new p("",n.required)}),m.regsiterbody=this.regsiterForm}RegsiterUser(){this._AuthService.addUser().subscribe(m=>{this.router.navigate(["/login"])})}};o.\u0275fac=function(a){return new(a||o)(c(P),c(b))},o.\u0275cmp=g({type:o,selectors:[["app-register"]],standalone:!0,features:[h],decls:38,vars:4,consts:[[1,"d-flex","mob"],[1,"left","hide-from-web"],[1,"text-center","py-4"],[1,"right"],[1,"justify-content-center","align-items-center","d-flex"],["src","../../../assets/img/auth/bg.png","alt","",1,"w-100"],[1,"py-4","text-center"],[3,"formGroup","ngSubmit"],[1,"py-1","w-100"],[1,"m-1","p-1"],["pInputText","","id","email","placeholder","","formControlName","username",1,"form-control"],["pInputText","","id","email","placeholder","","formControlName","email",1,"form-control"],["formControlName","password",1,"form-control",3,"toggleMask"],["formControlName","confirmPassword",1,"form-control",3,"toggleMask"],[1,"justify-content-center","align-items-center","d-flex","py-3","w-100"],[1,"send","w-50",3,"disabled"],["routerLink","/login",1,"text-center","pointer"],[1,"sign"]],template:function(a,u){a&1&&(t(0,"section")(1,"div",0)(2,"div",1)(3,"h2",2),i(4,"Find the best Spa\u2019s, "),r(5,"br"),i(6," Salons and Restaurants "),r(7,"br"),i(8," around you."),e()(),t(9,"div",3)(10,"div",4),r(11,"img",5),e(),t(12,"h2",6),i(13,"Create a free account"),e(),t(14,"form",7),f("ngSubmit",function(){return u.RegsiterUser()}),t(15,"div",8)(16,"p",9),i(17,"User Name :"),e(),r(18,"input",10),e(),t(19,"div",8)(20,"p",9),i(21,"Email :"),e(),r(22,"input",11),e(),t(23,"div",8)(24,"p",9),i(25,"Password :"),e(),r(26,"p-password",12),e(),t(27,"div",8)(28,"p",9),i(29,"Confirm Password :"),e(),r(30,"p-password",13),e(),t(31,"div",14)(32,"button",15),i(33,"Register"),e()()(),t(34,"p",16),i(35,"Don\u2019t have an account? "),t(36,"span",17),i(37,"login"),e()()()()()),a&2&&(d(14),s("formGroup",u.regsiterForm),d(12),s("toggleMask",!0),d(4),s("toggleMask",!0),d(2),s("disabled",u.regsiterForm.invalid))},dependencies:[x,R,N,w,M,C,v,S,y,F,k],styles:[`@media (max-width: 767px){.mob{justify-content:center;align-items:center;display:flex}.hide-from-web{display:none!important}.p-input-icon-right>.p-inputtext{padding-right:2.75rem!important}.right{padding:0!important}.p-input-icon-right>.p-inputtext{padding-right:.5rem!important}}button{background-color:#000;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;height:48px;width:512px;color:#fff;border:none;outline:none}.left{height:100vh;background-image:url("./media/login-HQ357MRP.png");background-size:100% 100%;background-repeat:no-repeat;width:35%}.right{width:65%;padding:0 200px}.p-input-icon-right>.p-inputtext{border:none;height:39px}.p-password-panel{display:none!important}.p-inputtext:enabled:focus:first-child{box-shadow:none}.p-inputtext:enabled:focus:last-child{box-shadow:none;border:#000000 solid 1px}.p-input-icon-right>.p-inputtext{padding-right:20.5rem}
`],encapsulation:2});let l=o;return l})();export{L as RegisterComponent};
