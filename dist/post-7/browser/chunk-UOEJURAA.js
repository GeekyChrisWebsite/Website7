import{a as i}from"./chunk-KMXITLPI.js";import{c as s}from"./chunk-4DZWOM2H.js";import{Q as n,V as o}from"./chunk-MGRODROF.js";var u=(()=>{let t=class t{constructor(e){this.httpClient=e}getBuySell(){return this.httpClient.get(`${i.BACKEND_DOMAIN}/get-all-buysells-website-request/${i.SITE_DOMAIN}`)}getBuysellById(e){return this.httpClient.get(`${i.BACKEND_DOMAIN}/get-buysell-website_request/${e}`)}};t.\u0275fac=function(l){return new(l||t)(o(s))},t.\u0275prov=n({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();export{u as a};