import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-bs-listview',
  standalone: true,
  imports: [CommonModule, TableModule, RouterModule],
  templateUrl: './bs-listview.component.html',
  styleUrl: './bs-listview.component.scss'
})
export class BsListviewComponent {
  maxDescriptionLength: number = 20;
  showFullText: boolean = false;
  @Input() BuySellArray: any[] = [];
  @Input() distances!: any;
  isLiked: boolean[] = [];
  likeCountValue: number[] = [];
  constructor(private _filterservie: FilterService) {

  }
  truncateText(content: string, maxLength: number): string {
    if (content.length <= maxLength) {
      return content;
    }
    return content.substr(0, maxLength) + '... see more';
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
      this.BuySellArray[index].likes += 1;
    } else {
      this.BuySellArray[index].likes -= 1;
    }

  }
  likeBusiness(busId: number, index: number) {
    const businessId = this.BuySellArray[index].business_id;
    const updatedPosts = this.BuySellArray.filter((post) => post.business_id === businessId);

    console.log(updatedPosts);

    if (!this.isLiked[index]) {
      this._filterservie.likeBusinessById(busId).subscribe({
        next: (res) => {
          console.log(res);
          updatedPosts.forEach((post, idx) => {
            post.business.likes += 1;
            this.isLiked[this.BuySellArray.indexOf(post)] = true;
          });
        }
      });
    } else {
      this._filterservie.dislikeBusinessById(busId).subscribe({
        next: (res) => {
          console.log(res);
          this.isLiked[index] = false;
          this.BuySellArray[index].business.likes -= 1;
        }
      });
    }
  }

}
