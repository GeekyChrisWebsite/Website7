import { Component, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PaginatorModule } from 'primeng/paginator';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { BsGellaryviewComponent } from '../bs-gellaryview/bs-gellaryview.component';
import { BsListviewComponent } from '../bs-listview/bs-listview.component';
import { BsMapviewComponent } from '../bs-mapview/bs-mapview.component';
import { BuySellService } from '../../services/buy-sell.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BuysellDetalis } from '../../interface/buysell-detalis';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DistanceService } from '../../services/distance.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { PreviousRouteServiceService } from '../../services/previous-route-service.service';
import { FilterComponent } from '../../shared/filter/filter.component';

@Component({
  selector: 'app-buy-sell',
  standalone: true,
  imports: [PaginatorModule, ToastModule, FilterComponent, ConfirmDialogModule, CommonModule, BsGellaryviewComponent, BsListviewComponent, BsMapviewComponent, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './buy-sell.component.html',
  styleUrl: './buy-sell.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: { ngSkipHydration: 'true' },
  providers: [ConfirmationService]

})
export class BuySellComponent {
  first = 20;
  rows = 20;
  buySellArray: any[];
  UniqueGeoLocations!: any[];
  galleyView: boolean;
  listView: boolean;
  mapView: boolean;
  buySellSubscription!: Subscription;
  filteredBuySellSubscription!: Subscription;
  FilteredSubscribtion!: Subscription;
  clearSubscribtion!: Subscription;
  currentLocation: any;
  backendLocations: any;
  distances: any[] = [];

  constructor(private _filterservice: FilterService, private _router: ActivatedRoute, private _BuySellService: BuySellService,
    private _messageService: MessageService,
    private distanceService: DistanceService, @Inject(PLATFORM_ID) private platformId: object,
    private confirmationService: ConfirmationService, private previousRouteService: PreviousRouteServiceService) {
    this.galleyView = false;
    this.listView = true;
    this.mapView = false;
    this.buySellArray = []
  }
  ngOnInit(): void {
    if (
      this.previousRouteService.getPreviousUrl() == '/listing' ||
      this.previousRouteService.getPreviousUrl() == '/posting' ||
      this.previousRouteService.getPreviousUrl() == '/buysell'
    ) {
      if (isPlatformBrowser(this.platformId)) {
        let filter = localStorage.getItem('filter');
        let bussines = [];
        if (filter) {
          bussines = JSON.parse(filter);
          console.log(bussines);
          this.getFilteredBuySell(
            bussines[0].category,
            bussines[0].state,
            bussines[0].city
          );
          this.filteredBuySell();
          this.clearBuysell();
        } else {
          this.getBuySell();
          this.clearBuysell();
          this.filteredBuySell();
        }
      } else {
        this.getBuySell();
      }
    } else {
      this.getBuySell();
      this.clearBuysell();
      this.filteredBuySell();
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.currentLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          // console.log('User Location:', this.currentLocation);

          for (const item of this.buySellArray) {
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
  getBuySell(): void {
    this.buySellSubscription = this._BuySellService.getBuySell().subscribe({
      next: (res: { data: any[]; message: string; status: string }) => {
        console.log(res);
        this.buySellArray = res.data;
        this.getGeoLocations();
      },
    });
  }
  getFilteredBuySell(CategoryName: string, state: string, city: string): void {
    this.filteredBuySellSubscription = this._filterservice
      .getBuySells(CategoryName, state, city)
      .subscribe({
        next: (res: {
          data: { allBuySells: any[] };
          message: string;
          status: string;
        }) => {
          console.log(res.data.allBuySells);
          this.buySellArray = res.data.allBuySells;
          this.getGeoLocations();
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        },
      });
  }
  filteredBuySell(): void {
    this.FilteredSubscribtion = this._filterservice.filteredBuySell.subscribe({
      next: (res: {
        data: { allBuySells: any[] };
        message: string;
        status: string;
      }) => {
        console.log('next has come', res);
        this.buySellArray = res.data.allBuySells;
        this.getGeoLocations();
      },
    });
  }
  getGeoLocations(): void {
    const geoLocations = this.buySellArray.map(
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
    console.log(this.UniqueGeoLocations);
  }
  clearBuysell(): void {
    this.clearSubscribtion = this._filterservice.clearBuysell.subscribe({
      next: (res: any[]) => {
        this.buySellArray = res;
        console.log(res);
        this.getGeoLocations();
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
