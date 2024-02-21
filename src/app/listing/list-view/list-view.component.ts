import { Component, Input } from '@angular/core';
import { ListingData } from '../../interface/listing-data';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FilterService } from '../../services/filter.service';

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
  likeCountValue: number[] = [];
  isLiked: boolean[] = Array(this.listingArray?.length).fill(false)

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
  truncateText(content: string, maxLength: number): string {
    if (content.length <= maxLength) {
      return content;
    }
    return content.slice(0, maxLength) + '...';
  }
  likeBusiness(busId: string, index: number) {
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
  }



}
