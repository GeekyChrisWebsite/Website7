import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../environments/environment.development';
import { BuysellDetalis } from '../interface/buysell-detalis';

@Injectable({
  providedIn: 'root'
})
export class BuySellService {

  constructor(private httpClient: HttpClient) { }

  getAllBuysell(): Observable<any> {
    return this.httpClient.get<BuysellDetalis[]>(`${environment.BACKEND_DOMAIN}/get-all-buysells-website-request/${environment.SITE_DOMAIN}`);
  }

  getBuysellById(id: string): Observable<any> {
    return this.httpClient.get<BuysellDetalis[]>(`${environment.BACKEND_DOMAIN}/get-buysell-website_request/${id}`);
  }
  getBuySells(category: string, state: string, city: string): Observable<any> {
    let params = new HttpParams();
    params = params.set('category', category);
    params = params.set('state', state);
    params = params.set('city', city);
    return this.httpClient.get(`${environment.BACKEND_DOMAIN}/website-filtered-buysells`, {
      params: params,
    });
  }
}
