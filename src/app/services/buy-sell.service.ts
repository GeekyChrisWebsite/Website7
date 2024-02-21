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

  getBuySell(): Observable<any> {
    return this.httpClient.get(
      `${environment.BACKEND_DOMAIN}/get-all-buysells-website-request/${environment.SITE_DOMAIN}`
    );
  }
  getBuysellById(id: string): Observable<any> {
    return this.httpClient.get(
      `${environment.BACKEND_DOMAIN}/get-buysell-website_request/${id}`
    );
  }
}
