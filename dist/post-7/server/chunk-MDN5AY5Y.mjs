import './polyfills.server.mjs';
import{a as e}from"./chunk-DVQZZKV5.mjs";import{b as n}from"./chunk-ZIISDPZF.mjs";import{Q as o,V as s}from"./chunk-I76NNVDK.mjs";var f=(()=>{let t=class t{constructor(r){this._http=r}GetPosting(){return this._http.get(`${e.BACKEND_DOMAIN}/get-all-posts-website-request/${e.SITE_DOMAIN}`)}vipposts(){return this._http.get(`${e.BACKEND_DOMAIN}/vip-posts`)}GetPostingByID(r){return this._http.get(`${e.BACKEND_DOMAIN}/get-post-website_request/${r}`)}};t.\u0275fac=function(p){return new(p||t)(s(n))},t.\u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();export{f as a};
