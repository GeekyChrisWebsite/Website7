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
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-buy-sell',
  standalone: true,
  imports: [PaginatorModule, CommonModule, BsGellaryviewComponent, BsListviewComponent, BsMapviewComponent, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './buy-sell.component.html',
  styleUrl: './buy-sell.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: { ngSkipHydration: 'true' },

})
export class BuySellComponent {
  BuySellArray!: BuysellDetalis[];
  galleyView: boolean;
  listView: boolean;
  mapView: boolean;
  first = 0;
  rows = 20;
  // state: string = '';
  state: any[] = [];
  city: any[] = [];
  category: string = '';
  // city: string = '';
  categories: any[] = [];


  filterformbuyandsell: FormGroup = new FormGroup({
    categories: new FormControl('', Validators.required),
    states: new FormControl('', Validators.required),
    cities: new FormControl('', Validators.required),


  });

  constructor(private _filterservice: FilterService, private _router: ActivatedRoute, private _BuySellService: BuySellService) {
    this.galleyView = false;
    this.listView = true;
    this.mapView = false;
  }
  ngOnInit(): void {

    this._filterservice.bparm.subscribe((res: any) => {
      console.log(res)
      if (Object.keys(res).length) {
        this.filterBuySell(res.categories, res.states, res.cities,)


      } else {
        this.GetAllBuySell()

      }
    })
    this.categories = [
      "BEAUTY SALON SPA",
      "MASSAGE SPA",
      "RESTAURANTS"

    ];
  }
  GetAllBuySell() {
    this._BuySellService.getAllBuysell().subscribe((res: any) => {
      this.BuySellArray = res.data
      console.log("allllllllbuysell", res)
    })
  }

  filterBuySell(categories: string, states: string, cities: string) {
    this._BuySellService.getBuySells(categories, states, cities).subscribe((res: any) => {
      this.BuySellArray = res.data.allBuySells
      console.log(res, "buysellfilter")

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
      console.log("filterbuysell", res)

    })
  }
}
