import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../environments/environment.development';
import { State } from '../interface/state';
import { ListingData } from '../interface/listing-data';
import { Subject } from 'rxjs/internal/Subject';
import { PostingData } from '../interface/posting-data';
import { BuysellDetalis } from '../interface/buysell-detalis';
import { PostingService } from './posting.service';
import { BuySellService } from './buy-sell.service';
import { ListingService } from './listing.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  bparm = new BehaviorSubject({})
  clearListing: Subject<ListingData[]> = new Subject()
  clearPosting: Subject<PostingData> = new Subject()
  clearBuySell: Subject<BuysellDetalis> = new Subject()



  constructor(public _http: HttpClient, private postingService: PostingService, private _buysell: BuySellService, private listingService: ListingService) { }

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
    return this._http.get(`${environment.BACKEND_DOMAIN}/website-filtered-posts/`, { params });


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


  likeBusinessById(busId: number) {
    let body = { "bus_id": busId };
    return this._http.put(`${environment.BACKEND_DOMAIN}/like-business-by-bus-id`, body);
  }

  dislikeBusinessById(busId: number) {
    let body = { "bus_id": busId };
    return this._http.put(`${environment.BACKEND_DOMAIN}/dislike-business-by-bus-id`, body);
  }

  clear() {
    this.listingService.GetListing().subscribe({
      next: (res: ListingData[]) => {
        this.clearListing.next(res)
        console.log("res", res);

      }
    });
    this.postingService.GetPosting().subscribe({
      next: (res: any) => {
        this.clearPosting.next(res)
        console.log("res", res);

      }
    })
    this._buysell.getAllBuysell().subscribe({
      next: (res: any) => {
        this.clearBuySell.next(res)
        console.log("buyy", res);

      }
    })
  }

}
