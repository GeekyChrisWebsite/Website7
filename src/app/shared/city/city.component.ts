import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  city: string = ''
  category: string = '';
  states: string = '';
  loading: boolean = false
  constructor(public _FilterService: FilterService, public _ActivatedRoute: ActivatedRoute) { }

  getCity(states: string, category: string) {
    this.loading = true
    this._FilterService.GetCity(states, category).subscribe((res: any) => {
      this.loading = false
      this.cityarray = res.data.cities

    })
  }
  ngOnInit(): void {
    this._ActivatedRoute.queryParams.subscribe((p: any) => {
      console.log(p);
      this.category = p.category;
      this.states = p.states
      this.getCity(p.states, p.category)
    })
  }

}
