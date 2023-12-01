import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  filterbody: FormGroup = new FormGroup({
    state: new FormControl<string | null>(null)
  });
  filterbodyhome: FormGroup = new FormGroup({
    state: new FormControl<string | null>(null),
    categoriesName:new FormControl<string | null>(null)
  });
  constructor(private _http:HttpClient){}

  GetListing(){
    return this._http.get(`${environment.BACKEND_DOMAIN}/get-businesses-website-request/${environment.SITE_DOMAIN}`)
  }
  GetListingByID(id:any){
    return this._http.get(`${environment.BACKEND_DOMAIN}/get-business/${id}`);
  }
 
  fliterListing(dynamicBody:any = {state:this.filterbody.value.state.name}){
    // let body ={
    //   state:this.filterbody.value.state.name,
    // }
    return this._http.post(`${environment.BACKEND_DOMAIN}/filter-business-website-request/${environment.SITE_DOMAIN}`,dynamicBody ,{
      observe: 'response',
    })
  }
  getpostsbusinessID(id:any){
    let body={
      id:id,
      website_name:'post-your-biz7.vercel.app'

    }
    return this._http.post(`${environment.BACKEND_DOMAIN}/get-posts-by-businessID/`,body);
  }
}
