import {
  Component,
  Inject,
  PLATFORM_ID,
  ViewEncapsulation,
} from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PaginatorModule } from 'primeng/paginator';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { BsGellaryviewComponent } from '../bs-gellaryview/bs-gellaryview.component';
import { BsListviewComponent } from '../bs-listview/bs-listview.component';
import { BsMapviewComponent } from '../bs-mapview/bs-mapview.component';
import { BuySellService } from '../../services/buy-sell.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BuysellDetalis } from '../../interface/buysell-detalis';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DistanceService } from '../../services/distance.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { PreviousRouteServiceService } from '../../services/previous-route-service.service';
import { FilterComponent } from '../../shared/filter/filter.component';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-buy-sell',
  standalone: true,
  imports: [
    PaginatorModule,
    ToastModule,
    FilterComponent,
    CarouselModule,
    ConfirmDialogModule,
    CommonModule,
    BsGellaryviewComponent,
    BsListviewComponent,
    BsMapviewComponent,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './buy-sell.component.html',
  styleUrl: './buy-sell.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: { ngSkipHydration: 'true' },
  providers: [ConfirmationService],
})
export class BuySellComponent {
  first = 20;
  rows = 20;
  buySellArray: any[];
  vipBuysellArray: any;
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
  responsiveOptions: any[] | undefined;

  constructor(
    private _filterservice: FilterService,
    private _router: ActivatedRoute,
    private _BuySellService: BuySellService,
    private _messageService: MessageService,
    private distanceService: DistanceService,
    @Inject(PLATFORM_ID) private platformId: object,
    private confirmationService: ConfirmationService,
    private previousRouteService: PreviousRouteServiceService
  ) {
    this.galleyView = false;
    this.listView = true;
    this.mapView = false;
    this.buySellArray = [];
  }
  ngOnInit(): void {
    this.vipBuysell();
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '991px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '576px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
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
    if (isPlatformBrowser(this.platformId)) {
      this.distanceService
        .getCurrentLocation()
        .then((coords) => {
          this.currentLocation = {
            latitude: coords.latitude,
            longitude: coords.longitude,
          };
          this.distanceService.setCurrentLocationInLocalStorage(coords);
        })
        .catch((error) => {
          console.error('Error getting user location:', error);
        });
    }
  }
  calculateDistance(lat: number, lng: number): string {
    const distance = this.distanceService.calculateDistance(lat, lng);
    return distance !== null ? distance.toFixed(0) : 'N/A';
  }
  getBuySell(): void {
    this.buySellSubscription = this._BuySellService.getBuySell().subscribe({
      next: (res: { data: any[]; message: string; status: string }) => {
        console.log(res);
        this.buySellArray = res.data;
        this.getGeoLocations();
        this.buySellArray = this.buySellArray.map((item) => ({
          ...item,
          updated_at: new Date(item.updated_at).toISOString().split('T')[0],
          datePart: item.updated_at,
        }));

        this.buySellArray.sort(
          (a, b) =>
            new Date(b.datePart).getTime() - new Date(a.datePart).getTime()
        );
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
  vipBuysell(): void {
    this._BuySellService.getVipBuySell().subscribe((res: any) => {
      this.vipBuysellArray = res.data;
      console.log(this.vipBuysellArray);
    });
  }
  makePhoneCall(phoneNumber: string): void {
    console.log('Initiating phone call to:', phoneNumber);
    window.location.href = 'tel:' + phoneNumber;
  }
  handleMapClick(street: string, state: string): void {
    if (street && state) {
      const encodedStreet = encodeURIComponent(street);
      const encodedState = encodeURIComponent(state);
      const link = `https://www.google.com/maps/search/?api=1&query=${encodedStreet},+${encodedState}`;
      window.open(link, '_blank');
    }
  }
}
