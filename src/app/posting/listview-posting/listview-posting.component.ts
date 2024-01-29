import { Component, Input, ViewEncapsulation } from '@angular/core';
import { PostingData } from '../../interface/posting-data';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { FilterService } from '../../services/filter.service';

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
  likeCountValue: number[] = [];
  isLiked: boolean[] = Array(this.postingarray?.length).fill(false)

  constructor(private _filterservie: FilterService) {

  }
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
  likeBusiness(busId: number, index: number) {
    const businessId = this.postingarray[index].business_id;
    const updatedPosts = this.postingarray.filter((post) => post.business_id === businessId);

    console.log(updatedPosts);

    if (!this.isLiked[index]) {
      this._filterservie.likeBusinessById(busId).subscribe({
        next: (res) => {
          console.log(res);
          updatedPosts.forEach((post, idx) => {
            post.likes += 1;
            this.isLiked[this.postingarray.indexOf(post)] = true;
          });
        }
      });
    } else {
      this._filterservie.dislikeBusinessById(busId).subscribe({
        next: (res) => {
          console.log(res);
          this.isLiked[index] = false;
          this.postingarray[index].likes -= 1;
        }
      });
    }
  }
}
