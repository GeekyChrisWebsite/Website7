import { Component, Input, ViewEncapsulation } from '@angular/core';
import { PostingData } from '../../interface/posting-data';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { FilterService } from '../../services/filter.service';
import { CookieService } from 'ngx-cookie-service';
import { SanatizerPipe } from "../../pipe/sanatizer.pipe";

@Component({
  selector: 'app-listview-posting',
  standalone: true,
  templateUrl: './listview-posting.component.html',
  styleUrl: './listview-posting.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [RouterModule, CommonModule, TableModule, SanatizerPipe]
})
export class ListviewPostingComponent {
  first = 0;
  rows = 20;
  @Input()
  postingArray!: PostingData[];
  @Input() filterposts: any;
  @Input() distances: any[] = [];
  maxDescriptionLength: number = 50;
  showFullText: boolean = false;
  likeCountValue: number[] = [];
  isLiked: boolean[] = Array(this.postingArray?.length).fill(false)

  constructor(private _filterservie: FilterService, public _cookieService: CookieService, public router: Router) {

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

  isString(value: any): boolean {
    return typeof value === 'string';
  }

}
