import { HttpClient } from '@angular/common/http';
import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { catchError, map } from 'rxjs/operators';
import { ListingData } from '../../interface/listing-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-map-view',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule],
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class MapViewComponent {
  @Input()
  listingArray!: ListingData[];
  @Input() filterarray: any

  apiLoaded!: Observable<boolean>;
  options: any = {
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
  }
  markerOptions: google.maps.MarkerOptions = { draggable: false };

  @ViewChild(GoogleMap) map!: GoogleMap

  constructor(private _httpClient: HttpClient) {
    this.apiLoaded = _httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyAAb4SFQe0Kigpu3EiKhR93nC-OUitTKwM', 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.fitBounds();

    }, 1000);
  }
  fitBounds() {
    const bounds = new google.maps.LatLngBounds();
    for (const marker of this.listingArray) {
      console.log(marker.geo_direction.lat);
      bounds.extend(
        new google.maps.LatLng(
          marker.geo_direction.lat,
          marker.geo_direction.lng
        )
      );
    }

    this.map.fitBounds(bounds);
  }

  // fitBounds(markers: any[]): void {
  //   if (markers && markers.length > 0) {
  //     const bounds = new google.maps.LatLngBounds();
  //     for (const marker of markers) {
  //       console.log(marker.geo_direction.lat);
  //       bounds.extend(
  //         new google.maps.LatLng(
  //           marker.geo_direction.lat,
  //           marker.geo_direction.lng
  //         )
  //       );
  //     }

  //     this.map.fitBounds(bounds);
  //   }
  // }
  handleMapClick(event: any) {
    const clickedPosition = event.coords || event.latLng;

    if (clickedPosition) {
      const link = `https://www.google.com/maps/search/?api=1&query=${clickedPosition.lat()},${clickedPosition.lng()}`;
      window.open(link, '_blank');
    }
  }

}


