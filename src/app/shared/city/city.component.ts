import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterByLettersPipe } from "../../pipe/filter-by-letters.pipe";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-city',
    standalone: true,
    templateUrl: './city.component.html',
    styleUrl: './city.component.scss',
    imports: [CommonModule, FilterByLettersPipe,FormsModule]
})
export class CityComponent {
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
