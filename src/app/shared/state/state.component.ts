import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterByLettersPipe } from "../../pipe/filter-by-letters.pipe";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-state',
    standalone: true,
    templateUrl: './state.component.html',
    styleUrl: './state.component.scss',
    encapsulation: ViewEncapsulation.None,
    imports: [CommonModule, FilterByLettersPipe,FormsModule]
})
export class StateComponent {
  searchText: string = '';
    

  items = [
    { name: 'Alabma' },
    { name: 'Alabma' },
    { name: 'Alabma' },
    { name: 'Alabma' },
    { name: 'Alabma' },
    { name: 'usa' },
    { name: 'eg' },


  ];
}
