import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterByLettersPipe } from "../../pipe/filter-by-letters.pipe";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterService } from '../../services/filter.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputTextModule } from 'primeng/inputtext';

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
  constructor(public _FilterService: FilterService, public _ActivatedRoute: ActivatedRoute) {

  }


  getStates(category: string) {
    this.loading = true
    this._FilterService.GetState(category).subscribe((res: any) => {
      this.loading = false
      this.statearray = res.data.states
      console.log(res);
    });
  }


  ngOnInit(): void {
    this._ActivatedRoute.queryParams.subscribe((p: any) => {
      this.category = p.category
      console.log(p.category);
      this.getStates(p.category);

    })
  }
}
