import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PostingService {

  
  constructor( private _http:HttpClient) { }
  GetPosting(){
    return this._http.get(`${environment.BACKEND_DOMAIN}/get-all-posts-website-request/${environment.SITE_DOMAIN}`)
  }
  GetPostingByID(id:any){
    return this._http.get(`${environment.BACKEND_DOMAIN}/get-post-website_request/${id}`);
  }
  vipposts(){
    return this._http.get(`${environment.BACKEND_DOMAIN}/vip-posts`);
  }
}
