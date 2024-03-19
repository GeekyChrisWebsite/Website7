import { Component, Input } from '@angular/core';
import { ListingData } from '../../interface/listing-data';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FilterService } from '../../services/filter.service';
import { CookieService } from 'ngx-cookie-service';

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

  constructor(private filterservice: FilterService, private _cookieService: CookieService, public router: Router) {

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
    const token = this._cookieService.get('token');

    if (!token) {
      this.router.navigate(['/login']);
    } else {
      if (this.listingArray[index].liked == true) {
        console.log(this.listingArray[index].liked);

        this.filterservice.addDislikes(busId).subscribe({
          next: (res) => {
            console.log(res, "like");
            this.listingArray[index].liked = false;
            this.listingArray[index].likes += 1;
          },
        });
      } else {
        this.filterservice.addLike(busId).subscribe({
          next: (res) => {
            console.log(res, "dislike");
            this.listingArray[index].liked = true;
            this.listingArray[index].likes -= 1;
          },
        });
      }
    }


  }




}
