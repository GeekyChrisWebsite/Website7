import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { Router, RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DistanceService } from '../../services/distance.service';
import { PaginatorModule } from 'primeng/paginator';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-bs-gellaryview',
  standalone: true,
  imports: [CommonModule, RouterModule, PaginatorModule, CardModule],
  templateUrl: './bs-gellaryview.component.html',
  styleUrl: './bs-gellaryview.component.scss'
})
export class BsGellaryviewComponent {
  currentLocation: { latitude: number; longitude: number } | null = null;
  totalRecords!: number;

  first = 0;
  rows = 10;
  @Input() BuySellArray: any[] = [];
  @Input() distances!: any;
  maxDescriptionLength: number = 40;
  showFullText: boolean = false;
  constructor(private _filterservie: FilterService, public _cookieService: CookieService,
    public router: Router, private distanceService: DistanceService, @Inject(PLATFORM_ID) private platformId: Object) {

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
  calculateDistance(lat: number, lng: number): string {
    const distance = this.distanceService.calculateDistance(lat, lng);
    return distance !== null ? distance.toFixed(0) : 'N/A';
  }
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.distanceService.getCurrentLocation()
        .then((coords) => {
          this.currentLocation = { latitude: coords.latitude, longitude: coords.longitude };
          this.distanceService.setCurrentLocationInLocalStorage(coords);
        })
        .catch((error) => {
          console.error('Error getting user location:', error);
        });
    }
    this.totalRecords = this.BuySellArray.length;

  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }
}
