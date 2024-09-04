import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../environments/environment.development';
import { ListingData } from '../interface/listing-data';
import { Subject } from 'rxjs/internal/Subject';
import { PostingService } from './posting.service';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  filteredListings = new Subject<{
    data: { businessesIds: ListingData[] };
    message: string;
    status: string;
  }>();
  filteredPostings = new Subject<{
    data: { posts: any[] };
    message: string;
    status: string;
  }>();
  filteredBuySell = new Subject<{
    data: { allBuySells: any[] };
    message: string;
    status: string;
  }>();
  clearListings = new Subject<{
    data: ListingData[];
    message: string;
    status: string;
  }>();
  clearPostings = new Subject<any[]>();
  clearBuysell = new Subject<any[]>();
  businessSubscription!: Subscription;
  postsSubscription!: Subscription;
  buySellSubscription!: Subscription;
  clearListingSubscription!: Subscription;
  clearPostingSubscription!: Subscription;
  clearBuySellSubscription!: Subscription;
  constructor(
    private httpClient: HttpClient,
    private postingService: PostingService
  ) {}
  getStates(category: string): Observable<any> {
    let params = new HttpParams();
    params = params.set('category', category);
    return this.httpClient.get(`${environment.BACKEND_DOMAIN}/filter/states`, {
      params: params,
    });
  }
  getCities(category: string, state: string): Observable<any> {
    let params = new HttpParams();
    params = params.set('category', category);
    params = params.set('state', state);
    return this.httpClient.get(`${environment.BACKEND_DOMAIN}/filter/cities`, {
      params: params,
    });
  }
  getbussineses(
    category: string,
    state: string,
    city: string
  ): Observable<any> {
    let params = new HttpParams();
    params = params.set('category', category);
    params = params.set('state', state);
    params = params.set('city', city);
    return this.httpClient.get(
      `${environment.BACKEND_DOMAIN}/filter/businesses`,
      {
        params: params,
      }
    );
  }
  filterInService(cat: string, state: string, city: string) {
    if (this.businessSubscription) {
      this.businessSubscription.unsubscribe();
    }
    this.businessSubscription = this.getbussineses(cat, state, city).subscribe({
      next: (result: {
        data: { businessesIds: ListingData[] };
        message: string;
        status: string;
      }) => {
        console.log(result);
        this.filteredListings.next(result);
      },
    });
  }
  filterInPostings(cat: string, state: string, city: string) {
    this.postsSubscription = this.getPostings(cat, state, city).subscribe({
      next: (result: {
        data: { posts: any[] };
        message: string;
        status: string;
      }) => {
        console.log(result);
        this.filteredPostings.next(result);
      },
    });
  }
  filterInBuySell(cat: string, state: string, city: string) {
    this.buySellSubscription = this.getBuySells(cat, state, city).subscribe({
      next: (result: {
        data: { allBuySells: any[] };
        message: string;
        status: string;
      }) => {
        console.log(result);
        this.filteredBuySell.next(result);
      },
    });
  }
  getListing(): Observable<any> {
    return this.httpClient.get(
      `${environment.BACKEND_DOMAIN}/get-businesses-website-request/${environment.SITE_DOMAIN}`
    );
  }
  getPosting(): Observable<any> {
    return this.httpClient.get(
      `${environment.BACKEND_DOMAIN}/get-all-posts-website-request/${environment.SITE_DOMAIN}`
    );
  }
  getbuysell(): Observable<any> {
    return this.httpClient.get(
      `${environment.BACKEND_DOMAIN}/get-all-buysells-website-request/${environment.SITE_DOMAIN}`
    );
  }
  clearListing() {
    if (this.clearListingSubscription) {
      this.clearListingSubscription.unsubscribe();
    }
    this.clearListingSubscription = this.getListing().subscribe({
      next: (response: {
        data: ListingData[];
        message: string;
        status: string;
      }) => {
        this.clearListings.next(response);
      },
    });
    if (this.clearPostingSubscription) {
      this.clearPostingSubscription.unsubscribe();
    }
    this.clearPostingSubscription = this.getPosting().subscribe({
      next: (response: { data: any[] }) => {
        console.log('in service posts', response);
        this.clearPostings.next(response.data);
      },
    });
    if (this.clearBuySellSubscription) {
      this.clearBuySellSubscription.unsubscribe();
    }
    this.clearBuySellSubscription = this.getbuysell().subscribe({
      next: (response: { data: any[] }) => {
        console.log(response.data);
        this.clearBuysell.next(response.data);
      },
    });
  }
  getPostings(category: string, state: string, city: string): Observable<any> {
    let params = new HttpParams();
    params = params.set('category', category);
    params = params.set('state', state);
    params = params.set('city', city);
    return this.httpClient.get(
      `${environment.BACKEND_DOMAIN}/website-filtered-posts`,
      {
        params: params,
      }
    );
  }
  getBuySells(category: string, state: string, city: string): Observable<any> {
    let params = new HttpParams();
    params = params.set('category', category);
    params = params.set('state', state);
    params = params.set('city', city);
    return this.httpClient.get(
      `${environment.BACKEND_DOMAIN}/website-filtered-buysells`,
      {
        params: params,
      }
    );
  }
  // addLike(business_id: string): Observable<any> {
  //   let body = {
  //     bus_id: business_id,
  //   };
  //   return this.httpClient.put(
  //     `${environment.BACKEND_DOMAIN}/like-business-by-bus-id`,
  //     body
  //   );
  // }
  // addDislikes(business_id: string): Observable<any> {
  //   let body = {
  //     bus_id: business_id,
  //   };
  //   return this.httpClient.put(
  //     `${environment.BACKEND_DOMAIN}/dislike-business-by-bus-id`,
  //     body
  //   );
  // }

  addLike(business_id: string): Observable<any> {
    // const token = this.cookiesService.get('token');
    // const headers = new HttpHeaders({
    //   'Authorization': `Bearer ${token}`,
    // });

    let body = {};

    return this.httpClient.post(
      `${environment.BACKEND_DOMAIN}/business/${business_id}/like`,
      body
    );
  }

  addDislikes(business_id: string): Observable<any> {
    // const token = this.cookiesService.get('token'); // Get the token from cookies
    // const headers = new HttpHeaders({
    //   'Authorization': `Bearer ${token}`,
    // });

    let body = {};

    return this.httpClient.post(
      `${environment.BACKEND_DOMAIN}/business/${business_id}/dislike`,
      body
    );
  }
  private sidebarVisible = new BehaviorSubject<boolean>(false);
  sidebarVisible$ = this.sidebarVisible.asObservable();

  setSidebarVisible(visible: boolean) {
    this.sidebarVisible.next(visible);
  }
}
