import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { PaginatorModule } from 'primeng/paginator';
import { ListingService } from '../../services/listing.service';
import { ListingData } from '../../interface/listing-data';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GalleryViewComponent } from '../gallery-view/gallery-view.component';
import { MapViewComponent } from '../map-view/map-view.component';
import { ListViewComponent } from '../list-view/list-view.component';
import { FilterService } from '../../services/filter.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DistanceService } from '../../services/distance.service';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [DropdownModule, PaginatorModule, RouterModule, FormsModule, ToastModule, CommonModule, GalleryViewComponent, MapViewComponent, ListViewComponent, ProgressSpinnerModule, ReactiveFormsModule],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss',
  providers: [ListingService, MessageService],
  encapsulation: ViewEncapsulation.None
})
export class ListingComponent {
  listingArray: ListingData[] = [];
  filterarray: any[] = [];
  first = 0;
  rows = 4;
  searchQuery: string = '';
  galleyView: boolean;
  listView: boolean;
  mapView: boolean;
  categories: any[] = [];
  states: any[] = [];
  state: string = '';
  category: string = '';
  city: string = '';
  cities: any[] = [];
  empty: any[] = [];
  loading: boolean = false
  filterform: FormGroup = new FormGroup({
    categories: new FormControl('', Validators.required),
    states: new FormControl('', Validators.required),
    cities: new FormControl('', Validators.required),


  });
  previousUrl: string | undefined;
  currentLocation: any;
  backendLocations: any;
  distances: any[] = [];



  constructor(public listingservice: ListingService,
    public _router: ActivatedRoute,
    public filterservice: FilterService,
    private fb: FormBuilder,
    private _messageService: MessageService,
    private distanceService: DistanceService) {
    this.galleyView = false;
    this.listView = true;
    this.mapView = false;
  }
  GetListingdata() {
    this.loading = true
    this.listingservice.GetListing().subscribe(
      (res: { data: ListingData[] }) => {
        console.log(res);
        this.listingArray = res.data;
        this.backendLocations = res
        this.loading = false
      },
      (error) => {
        console.error(error);
      }
    );
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
  filterdatefromhome(category: string, state: string, city: string) {
    this.loading = true
    this.filterservice.getbusinessesbycategory(state, category, city).subscribe((res: any) => {
      this.loading = false
      this.listingArray = res.data.businessesIds
      console.log("filterfromhome", res)
    })

  }
  ngOnInit(): void {

    this.loading = true
    this._router.queryParams.subscribe((p: any) => {
      console.log(p)
      if (Object.keys(p).length) {
        this.loading = false
        this.filterservice.bparm.next({
          categories: p.category,
          states: p.states,
          cities: p.city
        });
        console.log(this.filterservice.bparm, "rania");

        this.filterdatefromhome(p.category, p.states, p.city)
        console.log(this.category, this.states, this.city)
      } else {
        this.GetListingdata();
        this.filterservice.bparm.next({})


      }
    })
    this.categories = [
      "BEAUTY SALON SPA",
      "MASSAGE SPA",
      "RESTAURANTS"

    ];

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.currentLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          console.log('User Location:', this.currentLocation);

          for (const item of this.listingArray) {
            const businessLocation = {
              latitude: item.geo_direction.lat,
              longitude: item.geo_direction.lng,
            };

            const distance = this.distanceService.calculateDistance(this.currentLocation, businessLocation);

            this.distances.push(distance);
          }
          this.distanceService.setDistances(this.distances);

        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }



  }





  oncategorychange(event: any) {
    this.category = event.value
    this.filterservice.GetState(event.value).subscribe((res: any) => {
      this.states = res?.data?.states
      console.log(res)
      this.filterform.patchValue({
        category: this.category
      })
    })

  }
  onstatechange(event: any) {
    this.state = event.value
    this.filterservice.GetCity(event.value, this.category).subscribe((res: any) => {
      this.cities = res?.data.cities
      console.log(res)
      this.filterform.patchValue({
        state: this.state
      })

    })

  }

  oncitychange(event: any) {
    this.city = event.value
    this.filterform.patchValue({
      city: this.city
    })
  }
  getDataAll() {
    this.loading = true
    this.filterservice.getbusinessesbycategory(this.state, this.category, this.city).subscribe((res: any) => {
      this.loading = false
      this.showError()
      this.listingArray = res.data.businessesIds;
      console.log("here", this.listingArray)
      this.filterservice.bparm.next({
        categories: this.category,
        state: this.state,
        cities: this.city

      });
    })
  }
  showError() {
    this._messageService.add({
      severity: 'success',
      summary: 'success',
      detail: 'File size must be smaller than 5MB',
    });
  }
  onSubmit() {
  }
  // Replace with actual backend values




}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
