import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DistanceService {
  calculateDistance(
    currentLocation: { latitude: number; longitude: number },
    otherLocation: { latitude: number; longitude: number }
  ): number {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = this.deg2rad(otherLocation.latitude - currentLocation.latitude);
    const dLon = this.deg2rad(otherLocation.longitude - currentLocation.longitude);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(currentLocation.latitude)) * Math.cos(this.deg2rad(otherLocation.latitude)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers

    return distance;
  }

  private deg2rad(deg: number): number {
    return deg * (Math.PI / 180);
  }
  private localStorageKey = 'distances';


  setDistances(distances: number[]) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(distances));
    console.log('Distances saved to localStorage:', distances);
  }

  getDistances(): number[] {
    const storedDistances = localStorage.getItem(this.localStorageKey);
    const parsedDistances = storedDistances ? JSON.parse(storedDistances) : [];
    console.log('Distances retrieved from localStorage:', parsedDistances);
    return parsedDistances;
  }

}
