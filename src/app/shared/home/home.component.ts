import {
  Component,
  Inject,
  PLATFORM_ID,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { Router, RouterLink } from '@angular/router';
import { HomeService } from '../../services/home.service';
import { DistanceService } from '../../services/distance.service';
import { FilterService } from '../../services/filter.service';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'primeng/api';
import { GeoLocationService } from '../../services/geo-location.service';
import { TruncateTextPipe } from '../../pipe/truncate-text.pipe';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    TagModule,
    DropdownModule,
    ButtonModule,
    RouterLink,
    TruncateTextPipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  RESTAURANTSarray: any[] = [];
  MASSAGEarray: any[] = [];
  spa: any[] = [];
  first = 0;
  rows = 10;
  isLiked: boolean[] = [];
  likeCountValue: number[] = [];
  currentLocation: any;
  backendLocations: any;
  distances: any[] = [];

  trackByFn(index: number, item: any): number {
    return item.id;
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
  handleMapClick(street: string, state: string): void {
    if (street && state) {
      const encodedStreet = encodeURIComponent(street);
      const encodedState = encodeURIComponent(state);
      const link = `https://www.google.com/maps/search/?api=1&query=${encodedStreet},+${encodedState}`;
      window.open(link, '_blank');
    }
  }
  truncateText(content: string, maxLength: number): string {
    if (content.length <= maxLength) {
      return content;
    }
    return content.slice(0, maxLength) + '...';
  }

  constructor(
    private _homeservice: HomeService,
    private filterservice: FilterService,
    public _cookieService: CookieService,
    public router: Router,
    public MessageService: MessageService,
    public _GeoLocationService: GeoLocationService,
    private distanceService: DistanceService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  ngOnInit(): void {
    this._homeservice
      .getBusinessesByCategory('RESTAURANTS')
      .subscribe((data) => {
        this.RESTAURANTSarray = data.data;
      });

    this._homeservice
      .getBusinessesByCategory('MASSAGE SPA')
      .subscribe((data) => {
        this.MASSAGEarray = data.data;
      });

    this._homeservice
      .getBusinessesByCategory('BEAUTY SALON SPA')
      .subscribe((data) => {
        this.spa = data.data;
      });
    if (isPlatformBrowser(this.platformId)) {
      this.distanceService
        .getCurrentLocation()
        .then((coords) => {
          this.currentLocation = {
            latitude: coords.latitude,
            longitude: coords.longitude,
          };
          this.distanceService.setCurrentLocationInLocalStorage(coords);
        })
        .catch((error) => {});
    }
  }

  showError() {
    this.MessageService.add({
      severity: 'error',
      summary: 'Oops!,you are not logged in',
      detail: `Please login to be able to like businesses`,
      life: 3000,
      sticky: false,
    });
  }

  likeBusiness1(busId: string, index: number) {
    const token = this._cookieService.get('token');

    if (!token) {
      this.showError();
      this.router.navigate(['/login']);
    } else {
      if (this.RESTAURANTSarray[index].liked == true) {
        this.filterservice.addLike(busId).subscribe({
          next: (res) => {
            this.RESTAURANTSarray[index].liked = false;
            this.RESTAURANTSarray[index].likes += 1;
          },
        });
      } else {
        this.filterservice.addDislikes(busId).subscribe({
          next: (res) => {
            this.RESTAURANTSarray[index].liked = true;
            this.RESTAURANTSarray[index].likes -= 1;
          },
        });
      }
    }
  }
  likeBusiness2(busId: string, index: number) {
    const token = this._cookieService.get('token');

    if (!token) {
      this.showError();

      this.router.navigate(['/login']);
    } else {
      if (this.MASSAGEarray[index].liked == true) {
        this.filterservice.addLike(busId).subscribe({
          next: (res) => {
            this.MASSAGEarray[index].liked = false;
            this.MASSAGEarray[index].likes += 1;
          },
        });
      } else {
        this.filterservice.addDislikes(busId).subscribe({
          next: (res) => {
            this.MASSAGEarray[index].liked = true;
            this.MASSAGEarray[index].likes -= 1;
          },
        });
      }
    }
  }
  likeBusiness3(busId: string, index: number) {
    const token = this._cookieService.get('token');

    if (!token) {
      this.showError();
      this.router.navigate(['/login']);
    } else {
      if (this.spa[index].liked == true) {
        this.filterservice.addLike(busId).subscribe({
          next: (res) => {
            this.spa[index].liked = false;
            this.spa[index].likes += 1;
          },
        });
      } else {
        this.filterservice.addDislikes(busId).subscribe({
          next: (res) => {
            this.spa[index].liked = true;
            this.spa[index].likes -= 1;
          },
        });
      }
    }
  }

  getStates(category: string): void {
    localStorage.setItem('filter', JSON.stringify([{ category: category }]));
    localStorage.setItem('filterCategory', JSON.stringify([category]));
  }
  calculateDistance(lat: number, lng: number): string {
    const distance = this.distanceService.calculateDistance(lat, lng);
    return distance !== null ? distance.toFixed(0) : 'N/A';
  }
}
