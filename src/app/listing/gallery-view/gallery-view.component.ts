import { Component, Input } from '@angular/core';
import { ListingData } from '../../interface/listing-data';
import { CommonModule } from '@angular/common';
import { FilterService } from '../../services/filter.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gallery-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gallery-view.component.html',
  styleUrl: './gallery-view.component.scss'
})
export class GalleryViewComponent {
  @Input()
  listingArray!: ListingData[];
  @Input() filterarray: any;
  @Input() distances!: any;
  constructor(private filterservice: FilterService) {

  }
  makePhoneCall(phoneNumber: string): void {
    console.log('Initiating phone call to:', phoneNumber);
    window.location.href = 'tel:' + phoneNumber;
  }
  handleMapClick(dir: { lat: Number, lng: Number }) {
    console.log(dir)

    if (dir) {
      const link = `https://www.google.com/maps/search/?api=1&query=${dir.lat},${dir.lng}`;
      window.open(link, '_blank');
    }
  }
  isLiked: boolean[] = [];
  likeCountValue: number[] = [];

  truncateText(content: string, maxLength: number): string {
    if (content.length <= maxLength) {
      return content;
    }
    return content.slice(0, maxLength) + '...';
  }
  likeBusiness(busId: string, index: number, event: Event) {
    if (!this.isLiked[index] == true) {
      this.filterservice.addLike(busId).subscribe({
        next: (res) => {
          console.log(res);
          this.isLiked[index] = true
          this.listingArray[index].likes += 1
        }
      })
    } else {
      this.filterservice.addDislikes(busId).subscribe({
        next: (res) => {
          console.log(res);
          this.isLiked[index] = false
          this.listingArray[index].likes -= 1

        }
      })
    }
    event.stopPropagation()
  }

}
