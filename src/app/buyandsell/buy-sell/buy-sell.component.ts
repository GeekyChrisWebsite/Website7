import { Component, ViewEncapsulation } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PaginatorModule } from 'primeng/paginator';
import { CommonModule } from '@angular/common';
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

@Component({
  selector: 'app-buy-sell',
  standalone: true,
  imports: [PaginatorModule, ToastModule, ConfirmDialogModule, CommonModule, BsGellaryviewComponent, BsListviewComponent, BsMapviewComponent, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './buy-sell.component.html',
  styleUrl: './buy-sell.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: { ngSkipHydration: 'true' },
  providers: [ConfirmationService, MessageService]

})
export class BuySellComponent {
  BuySellArray: BuysellDetalis[] = [];
  galleyView: boolean;
  listView: boolean;
  mapView: boolean;
  first = 0;
  rows = 20;
  state: any[] = [];
  city: any[] = [];
  category: string = '';
  categories: any[] = [];
  loading: boolean = false
  currentLocation: any
  distances: any[] = [];

  filterformbuyandsell: FormGroup = new FormGroup({
    categories: new FormControl('', Validators.required),
    states: new FormControl('', Validators.required),
    cities: new FormControl('', Validators.required),


  });

  constructor(private _filterservice: FilterService, private _router: ActivatedRoute, private _BuySellService: BuySellService,
    private _messageService: MessageService,
    private distanceService: DistanceService,
    private confirmationService: ConfirmationService) {
    this.galleyView = false;
    this.listView = true;
    this.mapView = false;
  }
  ngOnInit(): void {
    this._filterservice.bparm.subscribe((res: any) => {
      let state: string;
      if (res.state === undefined) {
        state = res.states
      } else {
        state = res.state
      }
      if (Object.keys(res).length) {
        localStorage.setItem('filterBuySELLParams', JSON.stringify({
          categories: res.categories,
          states: state,
          cities: res.cities,
        }));

        this.filterBuySell(res.categories, state, res.cities);
      } else {
        this.GetAllBuySell();
      }
    });
    const storedParams = localStorage.getItem('filterBuySELLParams');
    if (storedParams) {
      const { categories, states, cities } = JSON.parse(storedParams);
      this.filterBuySell(categories, states, cities);
    } else {
      // If no stored parameters, call GetAllBuySell
      this.GetAllBuySell();
    }
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
          // console.log('User Location:', this.currentLocation);

          for (const item of this.BuySellArray) {
            const businessLocation = {
              latitude: item.business.geo_direction.lat,
              longitude: item.business.geo_direction.lng,
            };

            const distance = this.distanceService.calculateDistance(this.currentLocation, businessLocation);

            this.distances.push(distance);
          }

          this.distanceService.setCurrentLocation(this.currentLocation);

          this.distanceService.setDistances(this.distances)
            .then(() => {
              // Navigation logic or any other code that depends on setDistances being complete
            })
            .catch(error => {
              // console.error('Error setting distances:', error);
            });
        },
        (error) => {
          // console.error('Error getting user location:', error);
        }
      );
    } else {
    }
    const storedDistances = this.distanceService.getDistances();
    if (storedDistances.length > 0) {
      this.distances = storedDistances;
    }

  }
  GetAllBuySell() {
    this._BuySellService.getAllBuysell().subscribe((res: any) => {
      this.BuySellArray = res.data
      localStorage.setItem('allBuySellData', JSON.stringify(this.BuySellArray));
      console.log(this.BuySellArray)



    })
  }

  filterBuySell(categories: string, states: string, cities: string) {
    this._BuySellService.getBuySells(categories, states, cities).subscribe((res: any) => {
      this.BuySellArray = res.data.allBuySells
      localStorage.setItem('filteredBuySellData', JSON.stringify(this.BuySellArray));



    })
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
  getfilterBuySELL() {
    this._BuySellService.getBuySells(this.selectedCategory, this.selectedState, this.selectedCity).subscribe((res: any) => {
      this.BuySellArray = res.data.allBuySells
      console.log(this.BuySellArray)
      localStorage.setItem('filterBuySELLParams', JSON.stringify({
        categories: this.selectedCategory,
        states: this.selectedState,
        cities: this.selectedCity,
      }));

      this._filterservice.bparm.next({
        categories: this.selectedCategory,
        states: this.selectedState,
        cities: this.selectedCity,
      });
    });


  }
  clear() {
    this.filterformbuyandsell.reset();
    this.category = '';
    this.selectedState = '';
    this.selectedCity = '';
    this.BuySellArray = [];
    this.loading = true;
    this._filterservice.bparm.next({});
    localStorage.removeItem('postingArray');
    localStorage.removeItem('filterBuySELLParams');
    localStorage.removeItem('listingArray');
    localStorage.removeItem('filteredBuySellData')
    this.GetAllBuySell()
  }
}
