import { Component, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
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
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TagModule, DropdownModule, ButtonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None
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


  constructor(private _homeservice: HomeService, private filterservice: FilterService, public _cookieService: CookieService, public router: Router, public MessageService: MessageService, public _GeoLocationService: GeoLocationService, private distanceService: DistanceService,
    @Inject(PLATFORM_ID) private platformId: Object) { }
  ngOnInit(): void {
    this._homeservice.getBusinessesByCategory('RESTAURANTS').subscribe(data => {
      this.RESTAURANTSarray = data.data;
      console.log('RESTAURANTS', this.RESTAURANTSarray);



    });

    this._homeservice.getBusinessesByCategory('MASSAGE SPA').subscribe(data => {
      console.log('MASSAGE SPA', data);
      this.MASSAGEarray = data.data;

    });

    this._homeservice.getBusinessesByCategory('BEAUTY SALON SPA').subscribe(data => {
      console.log('BEAUTY SALON SPA', data);
      this.spa = data.data;


    });
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
  }
  // private calculateDistances(array: any[]) {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         this.currentLocation = {
  //           latitude: position.coords.latitude,
  //           longitude: position.coords.longitude,
  //         };

  //         // Loop through each business to calculate distance
  //         for (const item of array) {
  //           const businessLocation = {
  //             latitude: item.geo_direction.lat,
  //             longitude: item.geo_direction.lng,
  //           };

  //           const distanceInMiles = this.distanceService.calculateDistance(
  //             this.currentLocation,
  //             businessLocation
  //           );

  //           this.distances.push(distanceInMiles);
  //         }

  //         this.distanceService.setCurrentLocation(this.currentLocation);

  //         this.distanceService
  //           .setDistances(this.distances)
  //           .then(() => {
  //             // Navigation logic or any other code that depends on setDistances being complete
  //           })
  //           .catch((error) => {
  //             console.error('Error setting distances:', error);
  //           });
  //       },
  //       (error) => {
  //         console.error('Error getting user location:', error);
  //       }
  //     );
  //   }
  // }


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
      this.showError()
      this.router.navigate(['/login']);
    } else {
      if (this.RESTAURANTSarray[index].liked == true) {
        console.log(this.RESTAURANTSarray[index].liked);

        this.filterservice.addLike(busId).subscribe({
          next: (res) => {
            console.log(res, "like");
            this.RESTAURANTSarray[index].liked = false;
            this.RESTAURANTSarray[index].likes += 1;
          },
        });
      } else {
        this.filterservice.addDislikes(busId).subscribe({
          next: (res) => {
            console.log(res, "dislike");
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
      this.showError()

      this.router.navigate(['/login']);
    } else {
      if (this.MASSAGEarray[index].liked == true) {
        console.log(this.MASSAGEarray[index].liked);

        this.filterservice.addLike(busId).subscribe({
          next: (res) => {
            console.log(res, "like");
            this.MASSAGEarray[index].liked = false;
            this.MASSAGEarray[index].likes += 1;
          },
        });
      } else {
        this.filterservice.addDislikes(busId).subscribe({
          next: (res) => {
            console.log(res, "dislike");
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
      this.showError()
      this.router.navigate(['/login']);
    } else {
      if (this.spa[index].liked == true) {
        console.log(this.spa[index].liked);

        this.filterservice.addLike(busId).subscribe({
          next: (res) => {
            console.log(res, "like");
            this.spa[index].liked = false;
            this.spa[index].likes += 1;
          },
        });
      } else {
        this.filterservice.addDislikes(busId).subscribe({
          next: (res) => {
            console.log(res, "dislike");
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




