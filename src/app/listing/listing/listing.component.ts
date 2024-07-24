import { ChangeDetectorRef, Component, Inject, Input, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { PaginatorModule } from 'primeng/paginator';
import { ListingService } from '../../services/listing.service';
import { ListingData } from '../../interface/listing-data';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { GalleryViewComponent } from '../gallery-view/gallery-view.component';
import { MapViewComponent } from '../map-view/map-view.component';
import { ListViewComponent } from '../list-view/list-view.component';
import { FilterService } from '../../services/filter.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DistanceService } from '../../services/distance.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';
import { PreviousRouteServiceService } from '../../services/previous-route-service.service';
import { FilterComponent } from '../../shared/filter/filter.component';


@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [DropdownModule, FilterComponent, PaginatorModule, ConfirmDialogModule, RouterModule, FormsModule, ToastModule, CommonModule, GalleryViewComponent, MapViewComponent, ListViewComponent, ProgressSpinnerModule, ReactiveFormsModule],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss',
  providers: [ListingService, ConfirmationService],
  encapsulation: ViewEncapsulation.None
})
export class ListingComponent {
  listingArray: ListingData[] = [];
  filterarray: any[] = [];
  first = 0;
  rows = 20;
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
  likess: any

  previousUrl: string | undefined;
  currentLocation: any;
  backendLocations: any;
  distances: any[] = [];
  stateArray: any[] = [];


  constructor(
    public listingservice: ListingService,
    public _router: ActivatedRoute,
    public filterservice: FilterService,
    public distanceService: DistanceService,
    private previousRouteService: PreviousRouteServiceService,
    @Inject(PLATFORM_ID) private platformId: object) {
    this.galleyView = false;
    this.listView = true;
    this.mapView = false;
  }

  ngOnInit(): void {
    if (
      this.previousRouteService.getPreviousUrl() == '/city' ||
      this.previousRouteService.getPreviousUrl() == '/posting' ||
      this.previousRouteService.getPreviousUrl() == '/buysell' ||
      this.previousRouteService.getPreviousUrl() == '/listing'
    ) {
      if (isPlatformBrowser(this.platformId)) {
        let filter = localStorage.getItem('filter');
        let bussines = [];
        if (filter) {
          bussines = JSON.parse(filter);
          this.getFilteredListing(
            bussines[0].category,
            bussines[0].state,
            bussines[0].city
          );
          this.filteredfromService();
          this.clearListing();
        } else {
          this.getListing();
          this.filteredfromService();
          this.clearListing();
        }
      } else {
        this.getListing();
      }
    } else {
      this.getListing();
      this.filteredfromService();
      this.clearListing();
    }
  }





  getListing(): void {
    this.listingservice.GetListing().subscribe({
      next: (res: { data: ListingData[]; message: string; status: string }) => {
        this.listingArray = res.data;
      },
      error: (err: HttpErrorResponse) => {
      },
    });
  }
  getFilteredListing(CategoryName: string, state: string, city: string): void {
    this.filterservice
      .getbussineses(CategoryName, state, city)
      .subscribe({
        next: (res: {
          data: { businessesIds: any[] };
          message: string;
          status: string;
        }) => {
          this.listingArray = res.data.businessesIds;

        },
        error: (err: HttpErrorResponse) => {
        },
      });
  }
  clearListing(): void {
    this.filterservice.clearListings.subscribe({
      next: (res: { data: any[]; message: string; status: string }) => {
        this.listingArray = res.data;
      },
      error: (err: HttpErrorResponse) => {
      },
    });
  }
  filteredfromService(): void {
    this.filterservice.filteredListings.subscribe({
      next: (res: {
        data: { businessesIds: ListingData[] };
        message: string;
        status: string;
      }) => {
        this.listingArray = res.data.businessesIds;
      },
    });
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

}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
