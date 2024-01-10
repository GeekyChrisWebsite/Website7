import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../environments/environment.development';
import { State } from '../interface/state';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  bparm = new BehaviorSubject({})

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
  getbusinessesbycategory(state: string, category: string, city: string) {
    let params = new HttpParams()
      .set('category', category)
      .set('state', state)
      .set('city', city)
    return this._http.get<State[]>(`${environment.BACKEND_DOMAIN}/filter/businesses/`, { params });

  }
  getpostsfilter(state: string, category: string, city: string): Observable<any> {
    let params = new HttpParams()
      .set('category', category)
      .set('state', state)
      .set('city', city)
    return this._http.get(`${environment.BACKEND_DOMAIN}/posts/`, { params });


  }

}
