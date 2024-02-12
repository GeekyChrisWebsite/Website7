import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { HomeService } from '../../services/home.service';
import { DistanceService } from '../../services/distance.service';
import { FilterService } from '../../services/filter.service';

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


  constructor(private _homeservice: HomeService, private distanceService: DistanceService, private filterservice: FilterService) { }
  ngOnInit(): void {
    this._homeservice.getBusinessesByCategory('RESTAURANTS').subscribe(data => {
      this.RESTAURANTSarray = data.data;
      console.log('RESTAURANTS', this.RESTAURANTSarray);
      this.calculateDistances(this.RESTAURANTSarray);


    });

    this._homeservice.getBusinessesByCategory('MASSAGE SPA').subscribe(data => {
      console.log('MASSAGE SPA', data);
      this.MASSAGEarray = data.data;
      this.calculateDistances(this.MASSAGEarray);

    });

    this._homeservice.getBusinessesByCategory('BEAUTY SALON SPA').subscribe(data => {
      console.log('BEAUTY SALON SPA', data);
      this.spa = data.data;
      this.calculateDistances(this.spa);


    });
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(
    //     (position) => {
    //       this.currentLocation = {
    //         latitude: position.coords.latitude,
    //         longitude: position.coords.longitude,
    //       };

    //       // Loop through each business to calculate distance
    //       for (const item of this.RESTAURANTSarray) {
    //         const businessLocation = {
    //           latitude: item.geo_direction.lat,
    //           longitude: item.geo_direction.lng,
    //         };

    //         const distance = this.distanceService.calculateDistance(
    //           this.currentLocation,
    //           businessLocation
    //         );

    //         this.distances.push(distance);
    //       }

    //       this.distanceService.setCurrentLocation(this.currentLocation);

    //       this.distanceService
    //         .setDistances(this.distances)
    //         .then(() => {
    //           // Navigation logic or any other code that depends on setDistances being complete
    //         })
    //         .catch((error) => {
    //           console.error('Error setting distances:', error);
    //         });
    //     },
    //     (error) => {
    //       console.error('Error getting user location:', error);
    //     }
    //   );
    // }
  }
  private calculateDistances(array: any[]) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.currentLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };

          // Loop through each business to calculate distance
          for (const item of array) {
            const businessLocation = {
              latitude: item.geo_direction.lat,
              longitude: item.geo_direction.lng,
            };

            const distance = this.distanceService.calculateDistance(
              this.currentLocation,
              businessLocation
            );

            this.distances.push(distance);
          }

          this.distanceService.setCurrentLocation(this.currentLocation);

          this.distanceService
            .setDistances(this.distances)
            .then(() => {
              // Navigation logic or any other code that depends on setDistances being complete
            })
            .catch((error) => {
              console.error('Error setting distances:', error);
            });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    }
  }
  likeBusiness(busId: number, index: number) {
    if (!this.isLiked[index] == true) {
      this.filterservice.likeBusinessById(busId).subscribe({
        next: (res) => {
          console.log(res);
          this.isLiked[index] = true
          this.RESTAURANTSarray[index].likes += 1
        }
      })
    } else {
      this.filterservice.dislikeBusinessById(busId).subscribe({
        next: (res) => {
          console.log(res);
          this.isLiked[index] = false
          this.RESTAURANTSarray[index].likes -= 1

        }
      })
    }
  }
  likeBusiness2(busId: number, index: number) {
    if (!this.isLiked[index] == true) {
      this.filterservice.likeBusinessById(busId).subscribe({
        next: (res) => {
          console.log(res);
          this.isLiked[index] = true
          this.MASSAGEarray[index].likes += 1
        }
      })
    } else {
      this.filterservice.dislikeBusinessById(busId).subscribe({
        next: (res) => {
          console.log(res);
          this.isLiked[index] = false
          this.MASSAGEarray[index].likes -= 1

        }
      })
    }
  }
  likeBusiness3(busId: number, index: number) {
    if (!this.isLiked[index] == true) {
      this.filterservice.likeBusinessById(busId).subscribe({
        next: (res) => {
          console.log(res);
          this.isLiked[index] = true
          this.spa[index].likes += 1
        }
      })
    } else {
      this.filterservice.dislikeBusinessById(busId).subscribe({
        next: (res) => {
          console.log(res);
          this.isLiked[index] = false
          this.spa[index].likes -= 1

        }
      })
    }
  }
}



