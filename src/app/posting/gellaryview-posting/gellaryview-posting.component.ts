import { Component, Input } from '@angular/core';
import { PostingData } from '../../interface/posting-data';
import { CommonModule } from '@angular/common';
import { FilterService } from '../../services/filter.service';
import { Router, RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

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
  constructor(private _filterservie: FilterService, public _cookieService: CookieService, public router: Router) {

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
  likeBusiness(busId: string, index: number) {
    const token = this._cookieService.get('token');

    if (!token) {
      this.router.navigate(['/login']);
    } else {
      if (this.postingArray[index].liked == true) {
        console.log(this.postingArray[index].liked);

        this._filterservie.addLike(busId).subscribe({
          next: (res) => {
            console.log(res, "like");
            this.postingArray[index].liked = false;
            this.postingArray[index].business.likes += 1;
          },
        });
      } else {
        this._filterservie.addDislikes(busId).subscribe({
          next: (res) => {
            console.log(res, "dislike");
            this.postingArray[index].liked = true;
            this.postingArray[index].business.likes -= 1;
          },
        });
      }
    }


  }
  truncateText(content: string, maxLength: number): string {
    if (content.length <= maxLength) {
      return content;
    }
    return content.slice(0, maxLength) + '...';
  }
}
