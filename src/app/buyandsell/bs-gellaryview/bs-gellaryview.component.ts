import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { Router, RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-bs-gellaryview',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './bs-gellaryview.component.html',
  styleUrl: './bs-gellaryview.component.scss'
})
export class BsGellaryviewComponent {
  @Input() BuySellArray: any[] = [];
  @Input() distances!: any;
  maxDescriptionLength: number = 40;
  showFullText: boolean = false;
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
  truncateText(content: string, maxLength: number): string {
    if (content.length <= maxLength) {
      return content;
    }
    return content.substr(0, maxLength) + '... see more';
  }
  likeBusiness(busId: string, index: number) {
    const token = this._cookieService.get('token');

    if (!token) {
      this.router.navigate(['/login']);
    } else {
      if (this.BuySellArray[index].liked == true) {
        console.log(this.BuySellArray[index].liked);

        this._filterservie.addLike(busId).subscribe({
          next: (res) => {
            console.log(res, "like");
            this.BuySellArray[index].liked = false;
            this.BuySellArray[index].business.likes += 1;
          },
        });
      } else {
        this._filterservie.addDislikes(busId).subscribe({
          next: (res) => {
            console.log(res, "dislike");
            this.BuySellArray[index].liked = true;
            this.BuySellArray[index].business.likes -= 1;
          },
        });
      }
    }


  }


}
