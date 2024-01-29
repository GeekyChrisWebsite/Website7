import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Category } from '../interface/category';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }
  getBusinessesByCategory(category: string): Observable<any> {
    return this.httpClient.get<Category[]>(`${environment.BACKEND_DOMAIN}/top-businesses-by-category/`, {
      params: new HttpParams().set('category', category)
    });
  }
}
