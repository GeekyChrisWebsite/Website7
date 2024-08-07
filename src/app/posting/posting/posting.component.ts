import { Component, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { MapviewPostingComponent } from '../mapview-posting/mapview-posting.component';
import { ListViewComponent } from '../../listing/list-view/list-view.component';
import { GellaryviewPostingComponent } from '../gellaryview-posting/gellaryview-posting.component';
import { CarouselModule } from 'primeng/carousel';
import { DropdownModule } from 'primeng/dropdown';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PostingService } from '../../services/posting.service';
import { PaginatorModule } from 'primeng/paginator';
import { ListviewPostingComponent } from '../listview-posting/listview-posting.component';
import { PostingData } from '../../interface/posting-data';
import { GalleryViewComponent } from '../../listing/gallery-view/gallery-view.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FilterService } from '../../services/filter.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { Subscription } from 'rxjs/internal/Subscription';
import { DistanceService } from '../../services/distance.service';
import { HttpErrorResponse } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { PreviousRouteServiceService } from '../../services/previous-route-service.service';
import { FilterComponent } from '../../shared/filter/filter.component';
import { MessageService } from 'primeng/api';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-posting',
  standalone: true,
  imports: [MapviewPostingComponent, ListViewComponent, GellaryviewPostingComponent,
    CarouselModule, DropdownModule, RouterModule, PaginatorModule, ListviewPostingComponent,
    MapviewPostingComponent, GalleryViewComponent, ReactiveFormsModule, ProgressSpinnerModule, FilterComponent],
  templateUrl: './posting.component.html',
  styleUrl: './posting.component.scss',
  host: { ngSkipHydration: 'true' },
  encapsulation: ViewEncapsulation.None,

})
export class PostingComponent {
  first = 20;
  row = 20;
  responsiveOptions: any[] | undefined;
  vippostarray: any[] = [];
  postingArray: any[];
  galleyView: boolean;
  listView: boolean;
  mapView: boolean;
  subscribtions!: Subscription;
  images: string[] = [];
  UniqueGeoLocations!: any[];
  clearSubscribtion!: Subscription;
  FilteredSubscribtion!: Subscription;
  currentLocation: any;
  backendLocations: any;
  distances: any[] = [];

  constructor(
    private postingService: PostingService,
    private previousRouteService: PreviousRouteServiceService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private filterService: FilterService,
    public distanceService: DistanceService,
    public _cookieService: CookieService,
    public router: Router,
    public _DistanceService: DistanceService,


  ) {
    this.galleyView = true;
    this.listView = false;
    this.mapView = false;
    this.postingArray = [];

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
  ngOnInit(): void {
    if (
      this.previousRouteService.getPreviousUrl() == '/listing' ||
      this.previousRouteService.getPreviousUrl() == '/buysell' ||
      this.previousRouteService.getPreviousUrl() == '/posting'
    ) {
      if (isPlatformBrowser(this.platformId)) {
        let filter = localStorage.getItem('filter');
        let bussines = [];
        if (filter) {
          bussines = JSON.parse(filter);
          this.getFilteredPostings(
            bussines[0].category,
            bussines[0].state,
            bussines[0].city
          );
          this.filteredPosted();
          this.clearPosting();
        } else {
          this.getPosting();
          this.clearPosting();
          this.filteredPosted();
        }
      } else {
        this.getPosting();
      }
    } else {
      this.getPosting();
      this.clearPosting();
      this.filteredPosted();
    }
    this.GetVipPost();
    if (isPlatformBrowser(this.platformId)) {
      this.distanceService.getCurrentLocation()
        .then((coords) => {
          this.currentLocation = { latitude: coords.latitude, longitude: coords.longitude };
          this.distanceService.setCurrentLocationInLocalStorage(coords);
        })
        .catch((error) => {
        });
    }


  }
  calculateDistance(lat: number, lng: number): string {
    const distance = this.distanceService.calculateDistance(lat, lng);
    return distance !== null ? distance.toFixed(0) : 'N/A';
  }



  getPosting(): void {
    this.subscribtions = this.postingService.GetPosting().subscribe({
      next: (res: { data: any[]; message: string; status: string }) => {
        this.postingArray = res.data;
        this.getGeoLocations();
        this.postingArray = this.postingArray.map(item => ({
          ...item,
          updated_at: new Date(item.updated_at).toISOString().split("T")[0],
          datePart: item.updated_at
        }));
        this.postingArray.sort(
          (a, b) =>
            new Date(b.datePart).getTime() - new Date(a.datePart).getTime()
        );
      },
    });

  }

  getGeoLocations(): void {
    const geoLocations = this.postingArray.map(
      (location) => location.business.geo_direction
    );
    const uniqueValuesSet = new Set(
      geoLocations.map((obj) => `${obj.lat}_${obj.lng}`)
    );
    const result = Array.from(uniqueValuesSet).map((str) => {
      const [lat, lng] = str.split('_');
      return { lat: parseFloat(lat), lng: parseFloat(lng) };
    });
    this.UniqueGeoLocations = result;
  }
  clearPosting(): void {
    this.clearSubscribtion = this.filterService.clearPostings.subscribe({
      next: (res: any[]) => {
        this.postingArray = res;
        this.getGeoLocations();
      },
    });
  }
  getFilteredPostings(CategoryName: string, state: string, city: string) {
    this.subscribtions = this.filterService
      .getPostings(CategoryName, state, city)
      .subscribe({
        next: (res: {
          data: { posts: any[] };
          message: string;
          status: string;
        }) => {
          this.postingArray = res.data.posts;
          this.getGeoLocations();
        },
        error: (err: HttpErrorResponse) => {
        },
      });
  }
  filteredPosted(): void {
    this.FilteredSubscribtion = this.filterService.filteredPostings.subscribe({
      next: (res: {
        data: { posts: any[] };
        message: string;
        status: string;
      }) => {
        this.postingArray = res.data.posts;
        this.getGeoLocations();
      },
    });
  }
  handleMapClick(geo_direction: any) {

    const clickedPosition = geo_direction.coords || geo_direction.latLng;

    if (clickedPosition) {
      const link = `https://www.google.com/maps/search/?api=1&query=${clickedPosition.lat},${clickedPosition.lng}`;
      window.open(link, '_blank');
    }
  }
  showGallery(): void {
    this.galleyView = true;
    this.listView = false;
    this.mapView = false;

  }
  showList(): void {
    this.listView = true;
    this.galleyView = false;
    this.mapView = false;
  }
  showMap(): void {
    this.mapView = true;
    this.galleyView = false;
    this.listView = false;
  }
  onPageChange(event: any): void {
    this.first = event.first;
  }
  onSubmit() {
  }
  isLiked: boolean[] = [];

  likevip(busId: string, index: number) {
    if (this.isLiked[index] == true) {
      this.filterService.addLike(busId).subscribe((response) => {
        this.isLiked[index] = false;
        this.vippostarray[index].business.likes! -= 1;
      });
    } else {
      this.filterService.addDislikes(busId).subscribe((response) => {
        this.isLiked[index] = true;
        this.vippostarray[index].business.likes! += 1;
      });
    }
  }

  makePhoneCall(phoneNumber: string): void {
    window.location.href = 'tel:' + phoneNumber;
  }
  GetVipPost() {
    let vip = this.postingService.vipposts().subscribe(
      (res: { data: PostingData[] }) => {
        this.vippostarray = res.data;
        const vipWithId = this.vippostarray.map((item, index) => {
          return { ...item, new: index };
        });
        this.vippostarray = vipWithId;


      }

    );

  }

  likeVip(busId: string, index: number) {
    const token = this._cookieService.get('token');

    if (!token) {
      this.router.navigate(['/login']);
    } else {
      if (this.vippostarray[index].liked == true) {

        this.filterService.addLike(busId).subscribe({
          next: (res) => {
            this.vippostarray[index].liked = false;
            this.vippostarray[index].business.likes += 1;
          },
        });
      } else {
        this.filterService.addDislikes(busId).subscribe({
          next: (res) => {
            this.vippostarray[index].liked = true;
            this.vippostarray[index].business.likes -= 1;
          },
        });
      }
    }


  }


}
