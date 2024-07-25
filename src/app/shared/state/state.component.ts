import { Component, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FilterByLettersPipe } from "../../pipe/filter-by-letters.pipe";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterService } from '../../services/filter.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputTextModule } from 'primeng/inputtext';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-state',
  standalone: true,
  templateUrl: './state.component.html',
  styleUrl: './state.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, FilterByLettersPipe, FormsModule, ReactiveFormsModule, ProgressSpinnerModule, RouterModule, InputTextModule]
})
export class StateComponent {
  searchText: string = '';
  statearray: any[] = [];
  category: string = '';
  loading: boolean = false;
  filteredStates: any[] = []
  stateSubscriptions!: Subscription
  constructor(public _FilterService: FilterService, public _ActivatedRoute: ActivatedRoute, @Inject(PLATFORM_ID) private platformId: Object

  ) {

  }
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      let state = localStorage.getItem('filter');
      let cat = [];
      if (state) {
        cat = JSON.parse(state);
      }
      this.getStates(cat[0].category);
    }
  }
  getStates(CategoryName: string): void {
    this.stateSubscriptions = this._FilterService
      .getStates(CategoryName)
      .subscribe({
        next: (res: any) => {
          this.statearray = res.data.states;
          this.filteredStates = this.statearray;
          if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('filterState', JSON.stringify(this.statearray));
          }
        },
      });
  }
  getCities(state: string): void {
    if (isPlatformBrowser(this.platformId)) {
      let filter = localStorage.getItem('filter');
      let filterArray = [];
      if (filter) {
        filterArray = JSON.parse(filter);
      }
      filterArray[0].state = state;
      localStorage.setItem('filter', JSON.stringify(filterArray));
    }
  }


}
