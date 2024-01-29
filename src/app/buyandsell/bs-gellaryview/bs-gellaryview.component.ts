import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-bs-gellaryview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bs-gellaryview.component.html',
  styleUrl: './bs-gellaryview.component.scss'
})
export class BsGellaryviewComponent {
  @Input() BuySellArray: any[] = [];
  @Input() distances!: any;
  maxDescriptionLength: number = 40;
  showFullText: boolean = false;
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
  truncateText(content: string, maxLength: number): string {
    if (content.length <= maxLength) {
      return content;
    }
    return content.substr(0, maxLength) + '... see more';
  }
  likeBusiness(busId: number, index: number) {
    const bussinessId = this.BuySellArray[index].business_id
    const updatedPosts = this.BuySellArray.filter((post) => post.business_id == bussinessId)
    console.log(updatedPosts)
    if (!this.isLiked[index] == true) {
      this._filterservie.likeBusinessById(busId).subscribe({
        next: (res) => {
          console.log(res);
          updatedPosts.forEach((post, index) => {
            post.business.likes += 1;
            this.isLiked[this.BuySellArray.indexOf(post)] = true
          })
        }
      })
    } else {
      this._filterservie.dislikeBusinessById(busId).subscribe({
        next: (res) => {
          console.log(res);
          this.isLiked[index] = false
          this.BuySellArray[index].business.likes -= 1

        }
      })
    }
  }

}
