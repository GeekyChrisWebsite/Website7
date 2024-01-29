import { Component, Input } from '@angular/core';
import { PostingData } from '../../interface/posting-data';
import { CommonModule } from '@angular/common';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-gellaryview-posting',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gellaryview-posting.component.html',
  styleUrl: './gellaryview-posting.component.scss'
})
export class GellaryviewPostingComponent {
  @Input()
  postingarray!: PostingData[];
  @Input() filterposts: any;
  @Input() distances: any[] = [];
  constructor(private _filterservie: FilterService) {

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

  likeBusiness(busId: number, index: number) {
    const bussinessId = this.postingarray[index].business_id
    const updatedPosts = this.postingarray.filter((post) => post.business_id == bussinessId)
    console.log(updatedPosts)
    if (!this.isLiked[index] == true) {
      this._filterservie.likeBusinessById(busId).subscribe({
        next: (res) => {
          console.log(res);
          updatedPosts.forEach((post, index) => {
            post.business.likes += 1;
            this.isLiked[this.postingarray.indexOf(post)] = true
          })
        }
      })
    } else {
      this._filterservie.dislikeBusinessById(busId).subscribe({
        next: (res) => {
          console.log(res);
          this.isLiked[index] = false
          this.postingarray[index].business.likes -= 1

        }
      })
    }
  }
  truncateText(content: string, maxLength: number): string {
    if (content.length <= maxLength) {
      return content;
    }
    return content.slice(0, maxLength) + '...';
  }
}
