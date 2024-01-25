import { Component, Input, ViewEncapsulation } from '@angular/core';
import { PostingData } from '../../interface/posting-data';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-listview-posting',
  standalone: true,
  imports: [RouterModule, CommonModule, TableModule],
  templateUrl: './listview-posting.component.html',
  styleUrl: './listview-posting.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ListviewPostingComponent {
  first = 0;
  rows = 20;
  @Input()
  postingarray!: PostingData[];
  @Input() filterposts: any;
  @Input() distances: any[] = [];
  maxDescriptionLength: number = 20;
  showFullText: boolean = false;

  isLiked: boolean[] = [];
  likeCountValue: number[] = [];
  truncateText(content: string, maxLength: number): string {
    if (content.length <= maxLength) {
      return content;
    }
    return content.substr(0, maxLength) + '...';
  }
  makePhoneCall(phoneNumber: string): void {
    console.log('Initiating phone call to:', phoneNumber);
    window.location.href = 'tel:' + phoneNumber;
  }
  handleMapClick(geoDirection: { lat: number, lng: number }): void {
    if (geoDirection && geoDirection.lat !== undefined && geoDirection.lng !== undefined) {
      const link = `https://www.google.com/maps/search/?api=1&query=${geoDirection.lat},${geoDirection.lng}`;
      window.open(link, '_blank');
    }
  }

  toggleLike(index: number) {
    this.isLiked[index] = !this.isLiked[index];

    // Increment the likes count by 1 when liked, otherwise decrement
    this.likeCountValue[index] = this.isLiked[index] ? this.likeCountValue[index] + 1 : this.likeCountValue[index] - 1;

    // Update the 'likes' property of the corresponding item
    if (this.isLiked[index]) {
      this.postingarray[index].likes += 1;
    } else {
      this.postingarray[index].likes -= 1;
    }

  }
}
