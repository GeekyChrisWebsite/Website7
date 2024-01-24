import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../environments/environment.development';
import { State } from '../interface/state';
import { ListingData } from '../interface/listing-data';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  bparm = new BehaviorSubject({})
  listingService: any;


  constructor(public _http: HttpClient) { }

  GetState(category: string): Observable<any> {
    let params = new HttpParams().set('category', category);
    return this._http.get<State[]>(`${environment.BACKEND_DOMAIN}/filter/states/`, { params });
  }
  GetCity(state: string, category: string): Observable<any> {
    let params = new HttpParams()
      .set('category', category)
      .set('state', state)
    return this._http.get<State[]>(`${environment.BACKEND_DOMAIN}/filter/cities/`, { params });
  }
  getbusinessesbycategory(category: string, state: string, city: string) {
    let params = new HttpParams()
      .set('category', category)
      .set('state', state)
      .set('city', city)
    return this._http.get<State[]>(`${environment.BACKEND_DOMAIN}/filter/businesses/`, { params });

  }
  getpostsfilter(category: string, states: string, city: string): Observable<any> {
    let params = new HttpParams()
      .set('category', category)
      .set('state', states)
      .set('city', city)
    return this._http.get(`${environment.BACKEND_DOMAIN}/posts/`, { params });


  }
  private listingArraySource = new BehaviorSubject<ListingData[]>([]);
  listingArray$ = this.listingArraySource.asObservable();

  updateListingArray(listingArray: ListingData[]) {
    this.listingArraySource.next([...listingArray]); // Use the spread operator to avoid mutations
  }

  clearListingArray() {
    this.listingArraySource.next([]);
  }
  fetchData() {
    this.listingService.GetListing().subscribe(
      (newData: ListingData[]) => {
        this.updateListingArray(newData);
      },

    );
  }
  updateFilterParams(params: any) {
    this.bparm.next(params);
  }



}
