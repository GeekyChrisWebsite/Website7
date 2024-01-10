import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Observable } from 'rxjs';
import { PostingData } from '../interface/posting-data';

@Injectable({
  providedIn: 'root'
})
export class PostingService {

  constructor(public _http:HttpClient) { }

  GetPosting():Observable <any>{
    return this._http.get<PostingData[]>(`${environment.BACKEND_DOMAIN}/get-all-posts-website-request/${environment.SITE_DOMAIN}`)
  }
  vipposts():Observable <any>{
    return this._http.get<PostingData[]>(`${environment.BACKEND_DOMAIN}/vip-posts`)
  }
 
  GetPostingByID(id:any){
    return this._http.get(`${environment.BACKEND_DOMAIN}/get-post-website_request/${id}`);
  }

  
}
