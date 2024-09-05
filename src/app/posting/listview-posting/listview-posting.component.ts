import { Component, Input, ViewEncapsulation } from '@angular/core';
import { PostingData } from '../../interface/posting-data';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { FilterService } from '../../services/filter.service';
import { CookieService } from 'ngx-cookie-service';
import { SanatizerPipe } from '../../pipe/sanatizer.pipe';
import { PaginatorModule } from 'primeng/paginator';
import { TruncateTextPipe } from '../../pipe/truncate-text.pipe';
import { DistanceService } from '../../services/distance.service';

@Component({
  selector: 'app-listview-posting',
  standalone: true,
  templateUrl: './listview-posting.component.html',
  styleUrl: './listview-posting.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    RouterModule,
    CommonModule,
    TableModule,
    SanatizerPipe,
    PaginatorModule,
    TruncateTextPipe,
  ],
})
export class ListviewPostingComponent {
  first = 20;
  rows = 20;
  @Input()
  postingArray!: PostingData[];
  @Input() filterposts: any;
  @Input() distances: any[] = [];
  maxDescriptionLength: number = 44;
  showFullText: boolean = false;
  likeCountValue: number[] = [];
  isLiked: boolean[] = Array(this.postingArray?.length).fill(false);

  constructor(
    private _filterservie: FilterService,
    public _cookieService: CookieService,
    public router: Router,
    public _DistanceService: DistanceService
  ) {}
  truncateText(content: string, maxLength: number): string {
    if (content.length <= maxLength) {
      return content;
    }
    return content.substr(0, maxLength) + '...';
  }
  makePhoneCall(phoneNumber: string): void {
    window.location.href = 'tel:' + phoneNumber;
  }
  // handleMapClick(geoDirection: { lat: number, lng: number }): void {
  //   if (geoDirection && geoDirection.lat !== undefined && geoDirection.lng !== undefined) {
  //     const link = `https://www.google.com/maps/search/?api=1&query=${geoDirection.lat},${geoDirection.lng}`;
  //     const anchor = document.createElement('a');
  //     anchor.href = link;
  //     anchor.target = '_blank';
  //     anchor.click();
  //   }
  //   console.log(geoDirection);
  // }

  handleMapClick(street: string, state: string): void {
    if (street && state) {
      const encodedStreet = encodeURIComponent(street);
      const encodedState = encodeURIComponent(state);
      const link = `https://www.google.com/maps/search/?api=1&query=${encodedStreet},+${encodedState}`;
      window.open(link, '_blank');
    }
  }

  likeBusiness(busId: string, index: number) {
    const token = this._cookieService.get('token');

    if (!token) {
      this.router.navigate(['/login']);
    } else {
      if (this.postingArray[index].liked == true) {
        this._filterservie.addLike(busId).subscribe({
          next: (res) => {
            this.postingArray[index].liked = false;
            this.postingArray[index].business.likes += 1;
          },
        });
      } else {
        this._filterservie.addDislikes(busId).subscribe({
          next: (res) => {
            this.postingArray[index].liked = true;
            this.postingArray[index].business.likes -= 1;
          },
        });
      }
    }
  }
  onPageChange(event: any): void {
    this.first = event.first;
  }
  truncatename(name: string): string {
    if (name.length <= 24) {
      return name;
    } else {
      return name.substring(0, 44);
    }
  }

  customer = {
    id: 1,
    images: ['../../assets/img/footer/default-image.jpg'], // Replace with actual image URL or empty array
  };

  onImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = '../../assets/img/footer/default-image.jpg';
  }
  calculateDistance(lat: number, lng: number): string {
    const distance = this._DistanceService.calculateDistance(lat, lng);
    return distance !== null ? distance.toFixed(0) : 'N/A';
  }
}
