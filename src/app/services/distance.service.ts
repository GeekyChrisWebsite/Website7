import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DistanceService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  calculateDistance(lat2: number, lon2: number): any {
    if (isPlatformBrowser(this.platformId)) {
      let currLocation = localStorage.getItem('current-Location');
      let currLocationArr = [];
      if (currLocation) {
        currLocationArr = JSON.parse(currLocation);
      }
      const lat1 = currLocationArr[0];
      const lon1 = currLocationArr[1];
      const R = 6371;
      const dLat = this.deg2rad(lat2 - lat1);
      const dLon = this.deg2rad(lon2 - lon1);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.deg2rad(lat1)) *
        Math.cos(this.deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = R * c;
      return distance * 0.621371;
    }
  }
  private deg2rad(deg: number): any {
    return deg * (Math.PI / 180);
  }

  getCurrentLocation(): Promise<GeolocationCoordinates> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve(position.coords);
          },
          (error) => {
            reject(error);
          }
        );
      } else {
        reject(new Error('Geolocation is not supported by this browser'));
      }
    });
  }

  setCurrentLocationInLocalStorage(coords: GeolocationCoordinates) {
    localStorage.setItem('current-Location', JSON.stringify([coords.latitude, coords.longitude]));
  }


}


