import { Component, Input } from '@angular/core';
import { ListingData } from '../../interface/listing-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery-view.component.html',
  styleUrl: './gallery-view.component.scss'
})
export class GalleryViewComponent {
  @Input()
  listingArray!: ListingData[];
  @Input() filterarray: any


}
