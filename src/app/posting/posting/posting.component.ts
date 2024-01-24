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

@Component({
  selector: 'app-posting',
  standalone: true,
  imports: [MapviewPostingComponent, ListViewComponent, GellaryviewPostingComponent,
    CarouselModule, DropdownModule, RouterModule, PaginatorModule, ListviewPostingComponent,
    MapviewPostingComponent, GalleryViewComponent, ReactiveFormsModule, ProgressSpinnerModule],
  templateUrl: './posting.component.html',
  styleUrl: './posting.component.scss',
  host: { ngSkipHydration: 'true' },
  encapsulation: ViewEncapsulation.None

})
export class PostingComponent {
  first = 0;
  rows = 20;
  loading: boolean = false
  vippostarray: PostingData[] = [];
  postingarray: PostingData[] = [];
  responsiveOptions: any[] | undefined;
  galleyView: boolean;
  listView: boolean;
  mapView: boolean;
  state: any[] = [];
  category: string = ''
  city: any[] = [];
  filterposts: any[] = [];
  categories: any[] = [];
  Subscriptions: Subscription[] = []
  currentLocation: any
  distances: any[] = [];
  filterformposting: FormGroup = new FormGroup({
    categories: new FormControl('', Validators.required),
    states: new FormControl('', Validators.required),
    cities: new FormControl('', Validators.required),
  });
  constructor(private postingservice: PostingService,
    private _filterservice: FilterService,
    private _router: ActivatedRoute,
    private distanceService: DistanceService,
    @Inject(PLATFORM_ID) private plarformid: object) {
    this.galleyView = false;
    this.listView = true;
    this.mapView = false;
  }

  GetVipPost() {
    this.loading = true
    let vip = this.postingservice.vipposts().subscribe(
      (res: { data: PostingData[] }) => {
        this.loading = false
        this.vippostarray = res.data;
        console.log(this.vippostarray)
        console.log(this.vippostarray)
      }

    );
    this.Subscriptions.push(vip)

  }
  // posting() {
  //   this.loading = true
  //   let posting = this.postingservice.GetPosting().subscribe(
  //     (res: { data: PostingData[] }) => {
  //       this.loading = false
  //       this.postingarray = res.data;
  //       localStorage.setItem('postingArray', JSON.stringify(res.data));
  //       this.sortArrayByUpdatedAt();
  //     });
  //   this.Subscriptions.push(posting)
  // }
  posting() {
    this.loading = true;

    // Attempt to get data from local storage first
    const storedPostingArray = localStorage.getItem('postingArray');
    if (storedPostingArray) {
      this.postingarray = JSON.parse(storedPostingArray);
      this.loading = false;  // Set loading to false as data is available locally
      console.log('Loaded from local storage:', this.postingarray);
    } else {
      // If local storage is empty, make the API call
      this.postingservice.GetPosting().subscribe(
        (res: { data: PostingData[] }) => {
          this.loading = false;
          this.postingarray = res.data;

          // Save the entire array in local storage
          localStorage.setItem('postingArray', JSON.stringify(res.data));

          // Sort the array by postTime
          this.sortArrayByPostTime();

          console.log('Loaded from API:', this.postingarray);
        },
        (error) => {
          this.loading = false;
          console.error('Error loading data:', error);
        }
      );
    }
  }
  sortArrayByPostTime() {
    this.postingarray.sort((a, b) => a.postTime.getTime() - b.postTime.getTime());
  }


  getfilterposts(categories: string, states: string, cities: string) {
    this.loading = true
    this._filterservice.getpostsfilter(categories, states, cities)
      .subscribe((res: any) => {
        this.loading = false
        this.postingarray = res.data.posts
        localStorage.setItem('postingArray', JSON.stringify(res.data.posts));

        console.log("filterprams", res)

      })
  }


  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];

    this.categories = [
      "BEAUTY SALON SPA",
      "MASSAGE SPA",
      "RESTAURANTS"
    ];

    this._filterservice.bparm.subscribe((res: any) => {
      if (Object.keys(res).length) {
        let state: string;
        if (res.state === undefined) {
          state = res.states
        } else {
          state = res.state
        }
        this.filterformposting.patchValue({
          categories: res.categories,
          states: state,
          cities: res.cities,
        });
        this.getfilterposts(res.categories, state, res.cities);
      } else {
        this.posting();
      }
    });
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.currentLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          // console.log('User Location:', this.currentLocation);

          for (const item of this.postingarray) {
            const businessLocation = {
              latitude: item.business.geo_direction.lat,
              longitude: item.business.geo_direction.lng,
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
    this.GetVipPost();
  }

  selectedCategory: any
  oncategorychange(event: any) {
    this.selectedCategory = event.value
    this._filterservice.GetState(event.value).subscribe((res: any) => {
      this.state = res?.data?.states
      console.log(res)
    })

  }
  selectedState: any
  onstatechange(event: any) {
    this.selectedState = event.value
    this._filterservice.GetCity(event.value, this.selectedCategory).subscribe((res: any) => {
      this.city = res.data.cities
      console.log(res)

    })

  }
  selectedCity: any
  oncitychange(event: any) {
    this.selectedCity = event.value
  }

  getDatafiltedposting() {
    this.loading = true
    this._filterservice.getpostsfilter(this.selectedCategory, this.selectedState, this.selectedCity).subscribe(
      (res: any) => {
        this.loading = false
        this.postingarray = res.data.posts
        localStorage.setItem('postingArray', JSON.stringify(res.data.posts));
        console.log(res);


      })
  }

  clear() {
    this.filterformposting.reset();
    this.selectedCategory = '';
    this.selectedState = '';
    this.selectedCity = '';
    this.postingarray = [];
    this.loading = true;
    this._filterservice.bparm.next({});
    localStorage.removeItem('postingArray');
    localStorage.removeItem('buysellarray');
    localStorage.removeItem('listingArray');
    localStorage.removeItem('filteredBuySellData')

    this.posting();
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
  sortArrayByUpdatedAt() {
    this.postingarray.sort((a, b) => {
      const timeA = new Date(a.updated_at).getTime();
      const timeB = new Date(b.updated_at).getTime();
      return timeB - timeA; // Sorting in descending order
    });
  }
  onPageChange(event: any): void {
    this.first = event.first;
  }
  onSubmit() {
  }

  ngOnDestroy() {
    for (let Subscription of this.Subscriptions) {
      Subscription.unsubscribe()
    }


  }
  makePhoneCall(phoneNumber: string): void {
    console.log('Initiating phone call to:', phoneNumber);
    window.location.href = 'tel:' + phoneNumber;
  }
}
