import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DistanceService {
  private currentLocation: { latitude: number; longitude: number } | null = null;
  private distances: number[] = [];
  private localStorageKey = 'distances';

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
    const distanceInKilometers = R * c;

    // Convert distance to miles
    const distanceInMiles = distanceInKilometers * 0.621371;

    return distanceInMiles;
  }

  private deg2rad(deg: number): number {
    return deg * (Math.PI / 180);
  }

  setCurrentLocation(location: { latitude: number; longitude: number }) {
    this.currentLocation = location;
  }

  getCurrentLocation(): { latitude: number; longitude: number } | null {
    return this.currentLocation;
  }

  setDistances(distances: number[]): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      try {
        this.distances = distances;
        localStorage.setItem(this.localStorageKey, JSON.stringify(distances));
        // console.log('Distances saved to localStorage:', distances);
        resolve();
      } catch (error) {
        console.error('Error saving distances to localStorage:', error);
        reject(error);
      }
    });
  }

  getDistances(): number[] {
    try {
      const storedDistances = localStorage.getItem(this.localStorageKey);
      const parsedDistances = storedDistances ? JSON.parse(storedDistances) : [];
      // console.log('Distances retrieved from localStorage:', parsedDistances);
      return parsedDistances;
    } catch (error) {
      // console.error('Error retrieving distances from localStorage:', error);
      return [];
    }
  }
  setCurrentLocation2(location: { latitude: number; longitude: number } | null) {
    if (location) {
      this.currentLocation = location;
    } else {
      // If location is null, set latitude and longitude to 0
      this.currentLocation = { latitude: 0, longitude: 0 };
    }

  }
}
