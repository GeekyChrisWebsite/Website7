import './polyfills.server.mjs';
import{a as p}from"./chunk-2GLMVD5P.mjs";import{a as n}from"./chunk-7MGJQSK6.mjs";import{a as c,c as o}from"./chunk-2AX55QIO.mjs";import{M as a,R as i}from"./chunk-OAY366PD.mjs";var b=(()=>{let t=class t{constructor(e,r,l){this._HttpClient=e,this.cookiesService=r,this.HttpBackend=l,this._HttpClient=new o(l)}addUser(){let e={username:this.regsiterbody.controls.username.value,email:this.regsiterbody.controls.email.value,password:this.regsiterbody.controls.password.value,website:"www.usalifeonlines.com"};return this._HttpClient.post(`${n.BACKEND_DOMAIN}/add-user`,e,{observe:"response"})}loginUser(){let e={email:this.loginbody.controls.email.value,password:this.loginbody.controls.password.value,website:"www.usalifeonlines.com"};return this._HttpClient.post(`${n.BACKEND_DOMAIN}/user-login`,e)}};t.\u0275fac=function(r){return new(r||t)(i(o),i(p),i(c))},t.\u0275prov=a({token:t,factory:t.\u0275fac,providedIn:"root"});let s=t;return s})();export{b as a};