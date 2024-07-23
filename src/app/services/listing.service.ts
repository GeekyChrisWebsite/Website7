import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { ListingData } from '../interface/listing-data';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  constructor(private _http: HttpClient) { }


  GetListing(): Observable<any> {
    return this._http.get<ListingData[]>(`${environment.BACKEND_DOMAIN}/get-businesses-website-request/${environment.SITE_DOMAIN}`);
  }
  GetListingByID(id: any) {
    return this._http.get(`${environment.BACKEND_DOMAIN}/get-business/${id}`);
  }
  getpostsbusinessID(id: any) {
    let body = {
      id: id,
      website_name: 'www.888maps.com'

    }
    return this._http.post(`${environment.BACKEND_DOMAIN}/get-posts-by-businessID/`, body);
  }
}
