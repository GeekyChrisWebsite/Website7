import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { catchError, map } from 'rxjs/operators';
import { ListingData } from '../../interface/listing-data';
import { CommonModule } from '@angular/common';
import { ListingService } from '../../services/listing.service';
import { GalleryViewComponent } from '../gallery-view/gallery-view.component';

@Component({
  selector: 'app-map-view',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule, GalleryViewComponent],
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class MapViewComponent implements OnChanges {
  @Input()
  listingArray!: ListingData[];
  @Input() filterarray: any;
  @Input() distances!: any;

  sim: any[] = [];
  id: any

  apiLoaded!: Observable<boolean>;
  options: any = {
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
  }
  fisrtChange: boolean = true;


  markerOptions: google.maps.MarkerOptions = { draggable: false };

  @ViewChild(GoogleMap) map!: GoogleMap

  constructor(private _httpClient: HttpClient, public ListingService: ListingService) {
    this.apiLoaded = _httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyAAb4SFQe0Kigpu3EiKhR93nC-OUitTKwM', 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.fitMapBounds();

    }, 1000);
  }
  // fitBounds() {
  //   const bounds = new google.maps.LatLngBounds();
  //   for (const marker of this.listingArray) {
  //     bounds.extend(
  //       new google.maps.LatLng(
  //         marker.geo_direction.lat,
  //         marker.geo_direction.lng
  //       )
  //     );
  //   }

  //   this.map.fitBounds(bounds);
  // }


  handleMapClick(event: any) {
    const clickedPosition = event.coords || event.latLng;

    if (clickedPosition) {
      const link = `https://www.google.com/maps/search/?api=1&query=${clickedPosition.lat()},${clickedPosition.lng()}`;
      window.open(link, '_blank');
    }
  }
  fitMapBounds(): void {
    const bounds = new google.maps.LatLngBounds();
    for (const marker of this.listingArray) {
      bounds.extend(new google.maps.LatLng(marker.geo_direction.lat, marker.geo_direction.lng));
    }
    this.map.fitBounds(bounds);
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['listingArray'] && changes['listingArray'].currentValue) {
      if (!this.fisrtChange) {
        this.fitMapBounds()
      }
      this.fisrtChange = false
    }
  }



}


