import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { catchError } from 'rxjs/internal/operators/catchError';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-bs-mapview',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule],
  templateUrl: './bs-mapview.component.html',
  styleUrl: './bs-mapview.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class BsMapviewComponent {
  apiLoaded?: Observable<boolean>;
  options: any = {
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
  }
  @ViewChild(GoogleMap) map!: GoogleMap
  @Input() BuySellArray: any;
  markerOptions: google.maps.MarkerOptions = { draggable: false };

  constructor(private _httpClient: HttpClient) {
    this.apiLoaded = _httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyAAb4SFQe0Kigpu3EiKhR93nC-OUitTKwM', 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }
  ngAfterViewInit() {
    if (this.apiLoaded) {
      setTimeout(() => {
        this.fitBounds();

      }, 1000);
    }
  }
  fitBounds() {
    const bounds = new google.maps.LatLngBounds();
    for (const marker of this.BuySellArray) {
      console.log(marker.business.geo_direction.lat);
      bounds.extend(
        new google.maps.LatLng(
          marker.business.geo_direction.lat,
          marker.business.geo_direction.lng
        )
      );

    }
    this.map.fitBounds(bounds)
  }
}


