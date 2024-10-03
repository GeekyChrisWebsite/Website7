import {
  Component,
  Inject,
  PLATFORM_ID,
  ViewEncapsulation,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { HttpErrorResponse } from '@angular/common/http';
import { FilterService } from '../../services/filter.service';
import { Subject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [DropdownModule, ReactiveFormsModule, CardModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class FilterComponent {
  categories: any[];
  states: any[] = [];
  cities: any[] = [];
  newStates = new Subject<any>();
  disabled: boolean = false;
  filterCategory: string = '';
  filterState: string = '';
  filterCity: string = '';
  cat!: { name: String };
  filter: FormGroup = new FormGroup({
    cat: new FormControl({ name: '' }, [Validators.required]),
    state: new FormControl(
      { value: { name: '' }, disabled: true },
      Validators.required
    ),
    city: new FormControl(
      { value: { name: '' }, disabled: true },
      Validators.required
    ),
  });
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private filterService: FilterService
  ) {
    this.categories = [
      { name: 'BEAUTY SALON SPA', value: 'BEAUTY SALON SPA' },
      { name: 'RESTAURANTS', value: 'RESTAURANTS' },
      { name: 'MASSAGE SPA', value: 'MASSAGE SPA' },
    ];
    if (isPlatformBrowser(this.platformId)) {
      const filtercategory = localStorage.getItem('filterCategory');
      const filterState = localStorage.getItem('filterState');
      const filterCity = localStorage.getItem('filterCity');
      let filterstateArray = [];
      let filterCategoryArray: any[] = [];
      let filterCityArray = [];
      if (filtercategory) filterCategoryArray = JSON.parse(filtercategory);
      if (filterState) filterstateArray = JSON.parse(filterState);
      if (filterCity) filterCityArray = JSON.parse(filterCity);
      if (filtercategory) this.filterCategory = filtercategory;
      if (filterState) this.filterState = filterState;
      if (filterCity) this.filterCity = filterCity;
      this.filter.controls['cat'].setValue(
        this.categories.find((cat) => cat.name === filterCategoryArray[0])
      );
      this.cat = { name: filterCategoryArray[0] };
      this.filter.controls['state'].setValue({ name: filterstateArray[0] });
      this.filter.controls['city'].setValue({ name: filterCityArray[0] });
      // this.cdr.detectChanges();
      for (const state of filterstateArray) {
        this.states.push({ name: state });
      }
      for (const city of filterCityArray) {
        this.cities.push({ name: city });
      }
    }
  }
  checkCityDisabledStatus() {
    const cityControl = this.filter.get('city') as FormControl;
    const isCityDisabled = cityControl.disabled;
    this.disabled = isCityDisabled;
  }
  clear() {
    this.filter.reset();
    this.filterService.clearListing();
    localStorage.removeItem('filter');
    localStorage.removeItem('filterCategory');
    localStorage.removeItem('filterState');
    localStorage.removeItem('filterCity');
    this.filterService.setSidebarVisible(false);
    window.location.reload();
    this.filterInService();
  }
  filterInService() {
    this.filterService.filterInService(
      this.filter.controls['cat'].value.name,
      this.filter.controls['state'].value.name,
      this.filter.controls['city'].value.name
    );
    this.filterService.filterInPostings(
      this.filter.controls['cat'].value.name,
      this.filter.controls['state'].value.name,
      this.filter.controls['city'].value.name
    );
    this.filterService.filterInBuySell(
      this.filter.controls['cat'].value.name,
      this.filter.controls['state'].value.name,
      this.filter.controls['city'].value.name
    );
    const filterVlaue = localStorage.getItem('filter');
    let filterValueArray = [];
    if (filterVlaue) filterValueArray = JSON.parse(filterVlaue);
    filterValueArray = filterValueArray.map((obj: any, index: number) =>
      index === 0
        ? {
            ...obj,
            category: this.filter.controls['cat'].value.name,
            state: this.filter.controls['state'].value.name,
            city: this.filter.controls['city'].value.name,
          }
        : obj
    );
    localStorage.setItem('filter', JSON.stringify(filterValueArray));
    this.filterService.setSidebarVisible(false);
    window.location.reload();
  }
  getStates() {
    localStorage.setItem(
      'filterCategory',
      JSON.stringify([this.filter.controls['cat'].value.name])
    );
    this.filterService
      .getStates(this.filter.controls['cat'].value.name)
      .subscribe({
        next: (res: any) => {
          this.filter.get('state')?.enable();
          if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem(
              'filterState',
              JSON.stringify(res.data.states)
            );
            this.states = res.data.states.map((value: any, index: any) => ({
              name: value,
            }));
          }
        },
        error: (err: HttpErrorResponse) => {},
        complete: () => {},
      });
  }
  getCities() {
    this.filterService
      .getCities(
        this.filter.controls['cat'].value.name,
        this.filter.controls['state'].value.name
      )
      .subscribe({
        next: (res: any) => {
          this.filter.get('city')?.enable();
          if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('filterCity', JSON.stringify(res.data.cities));
            this.cities = res.data.cities.map((value: any, index: any) => ({
              name: value,
            }));
          }
        },
        error: (err: any) => {},
        complete: () => {},
      });
  }
  setCat(): void {
    localStorage.setItem(
      'filter',
      JSON.stringify([{ category: this.filter.controls['cat'].value.name }])
    );
  }
  setState(): void {
    let filter = localStorage.getItem('filter');
    let filterArray = [];
    if (filter) {
      filterArray = JSON.parse(filter);
    }
    filterArray[0].state = this.filter.controls['state'].value.name;
    localStorage.setItem('filter', JSON.stringify(filterArray));
  }
  setCity(): void {
    let filter = localStorage.getItem('filter');
    let filterArray = [];
    if (filter) {
      filterArray = JSON.parse(filter);
    }
    filterArray[0].city = this.filter.controls['city'].value.name;
    localStorage.setItem('filter', JSON.stringify(filterArray));
  }
  ngDoCheck(): void {}
  ngOnInit(): void {
    this.checkCityDisabledStatus();
  }
}
