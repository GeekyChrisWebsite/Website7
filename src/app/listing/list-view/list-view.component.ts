import { Component, Input } from '@angular/core';
import { ListingData } from '../../interface/listing-data';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.scss'
})
export class ListViewComponent {
  @Input() listingArray!: ListingData[];
  @Input() filterarray: any
  @Input() distances!: any;
  first = 0;
  rows = 4;
}
