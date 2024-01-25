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
  rows = 10;
  isLiked: boolean[] = [];
  likeCountValue: number[] = [];

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
  truncateText(content: string, maxLength: number): string {
    if (content.length <= maxLength) {
      return content;
    }
    return content.slice(0, maxLength) + '...';
  }
  toggleLike(index: number) {
    this.isLiked[index] = !this.isLiked[index];

    // Increment the likes count by 1 when liked, otherwise decrement
    this.likeCountValue[index] = this.isLiked[index] ? this.likeCountValue[index] + 1 : this.likeCountValue[index] - 1;

    // Update the 'likes' property of the corresponding item
    if (this.isLiked[index]) {
      this.listingArray[index].likes += 1;
    } else {
      this.listingArray[index].likes -= 1;
    }
  }


}
