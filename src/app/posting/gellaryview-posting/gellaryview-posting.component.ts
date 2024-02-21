import { Component, Input } from '@angular/core';
import { PostingData } from '../../interface/posting-data';
import { CommonModule } from '@angular/common';
import { FilterService } from '../../services/filter.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gellaryview-posting',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gellaryview-posting.component.html',
  styleUrl: './gellaryview-posting.component.scss'
})
export class GellaryviewPostingComponent {
  @Input()
  postingArray!: PostingData[];
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

  likeBusiness(busId: string, index: number, event: Event) {
    const bussinessId = this.postingArray[index].business_id
    const updatedPosts = this.postingArray.filter((post) => post.business_id == bussinessId)
    console.log(updatedPosts)
    if (!this.isLiked[index] == true) {
      this._filterservie.addLike(busId).subscribe({
        next: (res) => {
          console.log(res);
          updatedPosts.forEach((post, index) => {
            post.business.likes += 1;
            this.isLiked[this.postingArray.indexOf(post)] = true
          })
        }
      })
    } else {
      this._filterservie.addDislikes(busId).subscribe({
        next: (res) => {
          console.log(res);
          this.isLiked[index] = false
          this.postingArray[index].business.likes -= 1

        }
      })
    }
    event.stopPropagation();

  }
  truncateText(content: string, maxLength: number): string {
    if (content.length <= maxLength) {
      return content;
    }
    return content.slice(0, maxLength) + '...';
  }
}
