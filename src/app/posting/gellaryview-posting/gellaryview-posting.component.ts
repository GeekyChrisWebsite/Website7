import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { PostingData } from '../../interface/posting-data';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FilterService } from '../../services/filter.service';
import { Router, RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DistanceService } from '../../services/distance.service';
import { PaginatorModule } from 'primeng/paginator';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-gellaryview-posting',
  standalone: true,
  imports: [CommonModule, RouterModule, PaginatorModule, CardModule],
  templateUrl: './gellaryview-posting.component.html',
  styleUrl: './gellaryview-posting.component.scss'
})
export class GellaryviewPostingComponent {
  currentLocation: { latitude: number; longitude: number } | null = null;
  totalRecords!: number;

  first = 0;
  rows = 15;
  @Input()
  postingArray!: PostingData[];
  @Input() filterposts: any;
  @Input() distances: any[] = [];
  constructor(private _filterservie: FilterService, public _cookieService: CookieService, public router: Router, private distanceService: DistanceService,
    @Inject(PLATFORM_ID) private platformId: Object) {

  }
  makePhoneCall(phoneNumber: string): void {
    window.location.href = 'tel:' + phoneNumber;
  }
  // handleMapClick(dir: { lat: Number, lng: Number }) {

  //   if (dir) {
  //     const link = `https://www.google.com/maps/search/?api=1&query=${dir.lat},${dir.lng}`;
  //     window.open(link, '_blank');
  //   }
  // }
  handleMapClick(geoDirection: { lat: number, lng: number }): void {
    if (geoDirection && geoDirection.lat !== undefined && geoDirection.lng !== undefined) {
      const link = `https://www.google.com/maps/search/?api=1&query=${geoDirection.lat},${geoDirection.lng}`;
      const anchor = document.createElement('a');
      anchor.href = link;
      anchor.target = '_blank';
      anchor.click();
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
  truncateText(content: string, maxLength: number): string {
    if (content.length <= maxLength) {
      return content;
    }
    return content.slice(0, maxLength) + '...';
  }

  calculateDistance(lat: number, lng: number): string {
    const distance = this.distanceService.calculateDistance(lat, lng);
    return distance !== null ? distance.toFixed(0) : 'N/A';
  }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.distanceService.getCurrentLocation()
        .then((coords) => {
          this.currentLocation = { latitude: coords.latitude, longitude: coords.longitude };
          this.distanceService.setCurrentLocationInLocalStorage(coords);
        })
        .catch((error) => {
        });
    }
    this.totalRecords = this.postingArray.length;

  }
  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

}
