import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FilterByLettersPipe } from "../../pipe/filter-by-letters.pipe";
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FilterService } from '../../services/filter.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
@Component({
  selector: 'app-city',
  standalone: true,
  templateUrl: './city.component.html',
  styleUrl: './city.component.scss',
  imports: [CommonModule, FilterByLettersPipe, FormsModule, RouterModule, ProgressSpinnerModule]
})
export class CityComponent {
  searchText: string = '';
  cityarray: any[] = [];
  filteredCities: any[] = []
  city: string = ''
  category: string = '';
  states: string = '';
  loading: boolean = false
  constructor(public _FilterService: FilterService, public _ActivatedRoute: ActivatedRoute, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      let state = localStorage.getItem('filter');
      console.log(state);
      let cat = [];
      if (state) {
        cat = JSON.parse(state);
      }
      console.log(cat);
      this.getCities(cat[0].category, cat[0].state);
    }
  }
  getCities(CategoryName: string, state: string): void {
    this._FilterService
      .getCities(CategoryName, state)
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.cityarray = res.data.cities;
          this.filteredCities = this.cityarray;
          console.log(this.cityarray);
          if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('filterCity', JSON.stringify(this.cityarray));
          }
        },
      });
  }
  getbuss(city: string): void {
    if (isPlatformBrowser(this.platformId)) {
      let filter = localStorage.getItem('filter');
      let filterArray = [];
      if (filter) {
        filterArray = JSON.parse(filter);
      }
      filterArray[0].city = city;
      localStorage.setItem('filter', JSON.stringify(filterArray));
    }
  }

}
