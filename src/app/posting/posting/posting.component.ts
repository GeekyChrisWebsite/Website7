import { Component, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { MapviewPostingComponent } from '../mapview-posting/mapview-posting.component';
import { ListViewComponent } from '../../listing/list-view/list-view.component';
import { GellaryviewPostingComponent } from '../gellaryview-posting/gellaryview-posting.component';
import { CarouselModule } from 'primeng/carousel';
import { DropdownModule } from 'primeng/dropdown';
import { ActivatedRoute, RouterModule } from '@angular/router';
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
    public distanceService: DistanceService
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
          console.log(bussines);
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
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.currentLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          // console.log('User Location:', this.currentLocation);

          for (const item of this.postingArray) {
            const businessLocation = {
              latitude: item.geo_direction.lat,
              longitude: item.geo_direction.lng,
            };

            const distance = this.distanceService.calculateDistance(
              this.currentLocation,
              businessLocation
            );

            this.distances.push(distance);
          }

          this.distanceService.setCurrentLocation(this.currentLocation);

          this.distanceService
            .setDistances(this.distances)
            .then(() => {
              // Navigation logic or any other code that depends on setDistances being complete
            })
            .catch((error) => {
              console.error('Error setting distances:', error);
            });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      // console.error('Geolocation is not supported by this browser.');
    }
    const storedDistances = this.distanceService.getDistances();
    if (storedDistances.length > 0) {
      this.distances = storedDistances;
    }
  }
  getPosting(): void {
    this.subscribtions = this.postingService.GetPosting().subscribe({
      next: (res: { data: any[]; message: string; status: string }) => {
        console.log(':heart::heart::heart:', res);
        this.postingArray = res.data;
        this.getGeoLocations();
      },
    });
  }

  getGeoLocations(): void {
    const geoLocations = this.postingArray.map(
      (location) => location.business.geo_direction
    );
    console.log(geoLocations);
    const uniqueValuesSet = new Set(
      geoLocations.map((obj) => `${obj.lat}_${obj.lng}`)
    );
    const result = Array.from(uniqueValuesSet).map((str) => {
      const [lat, lng] = str.split('_');
      return { lat: parseFloat(lat), lng: parseFloat(lng) };
    });
    this.UniqueGeoLocations = result;
    console.log(this.UniqueGeoLocations);
  }
  clearPosting(): void {
    this.clearSubscribtion = this.filterService.clearPostings.subscribe({
      next: (res: any[]) => {
        this.postingArray = res;
        console.log(res);
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
          console.log('filtered', res.data.posts);
          this.postingArray = res.data.posts;
          this.getGeoLocations();
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
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
        console.log('next has come', res);
        this.postingArray = res.data.posts;
        this.getGeoLocations();
      },
    });
  }
  handleMapClick(geo_direction: any) {
    console.log('Map clicked!', geo_direction);

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
    console.log('Initiating phone call to:', phoneNumber);
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

        console.log(this.vippostarray)
        console.log(this.vippostarray)
      }

    );

  }




}
