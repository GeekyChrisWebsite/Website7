import { ChangeDetectorRef, Component, Inject, Input, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
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
import { DistanceService } from '../../services/distance.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FilterSharedComponent } from '../../shared/filter-shared/filter-shared.component';


@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [DropdownModule, PaginatorModule, FilterSharedComponent, ConfirmDialogModule, RouterModule, FormsModule, ToastModule, CommonModule, GalleryViewComponent, MapViewComponent, ListViewComponent, ProgressSpinnerModule, ReactiveFormsModule],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss',
  providers: [ListingService, MessageService, ConfirmationService],
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
  loading: boolean = false;
  filterform: FormGroup = new FormGroup({
    categories: new FormControl('', Validators.required),
    states: new FormControl('', Validators.required),
    cities: new FormControl('', Validators.required),
  });
  previousUrl: string | undefined;
  currentLocation: any;
  backendLocations: any;
  distances: any[] = [];

  constructor(
    public listingservice: ListingService,
    public _router: ActivatedRoute,
    public filterservice: FilterService,
    private fb: FormBuilder,
    private _messageService: MessageService,
    private distanceService: DistanceService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private cdr: ChangeDetectorRef,

    @Inject(PLATFORM_ID) private platformid: object
  ) {
    this.galleyView = false;
    this.listView = true;
    this.mapView = false;
  }
  ngDoCheck(): void {
    this._router.queryParams.subscribe((p: any) => {
      console.log(p);
    });
  }
  updateArray() {
    // Example: Updating array
    this.listingArray = [...this.listingArray];

    // Save to local storage
    localStorage.setItem('listingArray', JSON.stringify(this.listingArray));

    // Trigger change detection
    this.cdr.detectChanges();
  }

  GetListingdata() {
    this.loading = true;
    this.listingservice.GetListing().subscribe(
      (res: { data: ListingData[] }) => {
        console.log(res);
        this.listingArray = res.data;
        this.backendLocations = res;
        this.loading = false;
        localStorage.setItem('listingArray', JSON.stringify(this.listingArray));
      },
      (error) => {
        console.error(error);
      }
    );
  }

  filterdatefromhome(category: string, state: string, city: string) {
    this.loading = true
    this.filterservice.getbusinessesbycategory(category, state, city).subscribe((res: any) => {
      this.loading = false
      this.listingArray = res.data.businessesIds
      console.log("filterfromhome", res);
      localStorage.setItem('listingArray', JSON.stringify(this.listingArray)
      );
    })

  }
  getDataAll() {
    this.loading = true;
    this.filterservice
      .getbusinessesbycategory(this.category, this.state, this.city)
      .subscribe((res: any) => {
        this.loading = false;

        this.listingArray = res.data.businessesIds;
        console.log('here', this.listingArray);

        // Save to local storage
        localStorage.setItem('listingArray', JSON.stringify(this.listingArray));

        this.filterservice.bparm.next({
          categories: this.category,
          state: this.state,
          cities: this.city,
        });
      });
  }
  // getFilterResults() {
  //   const bparmValue = this.filterservice.bparm.getValue() as {
  //     categories?: string;
  //     states?: string;
  //     cities?: string;
  //   };

  //   const categories = bparmValue.categories || '';
  //   const states = bparmValue.states || '';
  //   const cities = bparmValue.cities || '';

  //   if (categories && states && cities) {
  //     this.filterdatefromhome(categories, states, cities);
  //   }
  // }
  ngOnInit(): void {
    this.filterservice.clearListing.subscribe({
      next: (res: any) => {
        this.listingArray = res.data
        console.log(this.listingArray);

      }
    })
    this._router.queryParams.subscribe((p: any) => {
      console.log(p);
      if (Object.keys(p).length) {
        this.loading = false;
        this.filterservice.bparm.next({
          categories: p.category,
          states: p.states,
          cities: p.city
        });
        console.log(this.filterservice.bparm, "rania");

        this.filterdatefromhome(p.category, p.states, p.city);
        console.log(this.category, this.states, this.city);
      } else {
        // Check for data in local storage
        const storedListingArray = localStorage.getItem('listingArray');

        if (storedListingArray) {
          this.listingArray = JSON.parse(storedListingArray);
          this.filterservice.updateListingArray(this.listingArray);
        } else {
          // If no data in local storage, fetch data
          this.GetListingdata();
        }
        // this.filterservice.bparm.next({});

      }
    });

    this.categories = ['BEAUTY SALON SPA', 'MASSAGE SPA', 'RESTAURANTS'];

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.currentLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          // console.log('User Location:', this.currentLocation);

          for (const item of this.listingArray) {
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

    this.filterservice.listingArray$.subscribe((listingArray) => {
      this.listingArray = listingArray;
      // Add a console.log statement for debugging
      console.log('Updated Listing Array:', this.listingArray);
    });

  }
  loadListingArray() {
    const storedListingArray = localStorage.getItem('listingArray');
    if (storedListingArray) {
      this.listingArray = JSON.parse(storedListingArray);
      this.filterservice.updateListingArray(this.listingArray);
    } else {
      this.GetListingdata();
    }
  }













  oncategorychange(event: any) {
    this.category = event.value;
    this.filterservice.GetState(event.value).subscribe((res: any) => {
      this.states = res?.data?.states;
      console.log(res);
      this.filterform.patchValue({
        category: this.category,
      });
    });
  }
  onstatechange(event: any) {
    this.state = event.value;
    this.filterservice
      .GetCity(event.value, this.category)
      .subscribe((res: any) => {
        this.cities = res?.data.cities;
        console.log(res);
        this.filterform.patchValue({
          states: this.state,
        });
      });
  }

  oncitychange(event: any) {
    this.city = event.value;
    this.filterform.patchValue({
      city: this.city,
    });
  }

  showError() {
    this._messageService.add({
      severity: 'success',
      summary: 'success',
      detail: 'File size must be smaller than 5MB',
    });
  }
  onSubmit() { }
  clear() {
    this.confirmationService.confirm({
      message: 'Are you sure that Clear Businesses Filter?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: 'pi pi-check',
      rejectIcon: 'pi pi-times',
      acceptButtonStyleClass: 'p-button-success',
      rejectButtonStyleClass: 'p-button-danger',
      acceptLabel: 'Yes',
      rejectLabel: 'No',
      accept: () => {
        // User clicked "Yes", proceed with clearing
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'Filter is Cleared',
        });

        // Call the clear logic here
        this.performClear();
      },
      reject: () => {
        // User clicked "No", do nothing
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'You have rejected',
          life: 3000,
        });
      },
    });
  }
  performClear() {
    console.log('Performing clear...');

    this.filterform.reset();
    this.category = '';
    this.state = '';
    this.city = '';
    this.listingArray = [];
    this.loading = true;
    this.filterservice.bparm.next({});
    localStorage.removeItem('postingArray');
    localStorage.removeItem('buysellarray');
    localStorage.removeItem('filteredBuySellData');


    this.GetListingdata();
    console.log('get all data');
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
  fetchData() {
    this.filterservice.fetchData();
  }


}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
