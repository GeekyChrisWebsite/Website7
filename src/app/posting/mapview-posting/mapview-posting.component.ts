import { Component, Input, OnChanges, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { PostingData } from '../../interface/posting-data';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { PostingService } from '../../services/posting.service';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/internal/operators/catchError';
import { of } from 'rxjs/internal/observable/of';

@Component({
  selector: 'app-mapview-posting',
  standalone: true,
  imports: [GoogleMapsModule, CommonModule],
  templateUrl: './mapview-posting.component.html',
  styleUrl: './mapview-posting.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class MapviewPostingComponent {
  geoDirections: any[] = [];
  fisrtChange: boolean = true
  uniqueArray: any[] = [];
  responsiveOptions: any[] | undefined;
  apiLoaded?: Observable<boolean>;
  options: any = {
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
  }
  @ViewChild(GoogleMap) map!: GoogleMap
  @Input() postingArray!: PostingData[];
  @Input() filterposts: any;


  constructor(public postingservice: PostingService, private httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyAAb4SFQe0Kigpu3EiKhR93nC-OUitTKwM', 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }
  removeDuplicates(array: any[]): any[] {
    const uniqueSet = new Set();
    const uniqueArray = array.filter(obj => {
      const key = obj.lat + ',' + obj.lng;
      if (!uniqueSet.has(key)) {
        uniqueSet.add(key);
        return true;
      }
      return false;
    });
    return uniqueArray;
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.fitBounds();
      console.log("ssss")
    }, 1000);
  }

  sortArrayByUpdatedAt() {
    this.postingArray.sort((a, b) => {
      const timeA = new Date(a.updated_at).getTime();
      const timeB = new Date(b.updated_at).getTime();
      return timeB - timeA;
    });
  }


  posting() {
    this.postingservice.GetPosting().subscribe((res: any) => {
      this.postingArray = res.data;
      console.log(this.postingArray)
      // this.postingarray = this.filterposts
      this.sortArrayByUpdatedAt();
      console.log(this.postingArray)

      const geoDirections = this.postingArray.map(posting => posting.business?.geo_direction);

      console.log(geoDirections)
      const filteredGeoDirections = geoDirections.filter(direction => direction);

      console.log(filteredGeoDirections)
      this.uniqueArray = this.removeDuplicates(filteredGeoDirections);

      console.log('Unique Array:', this.uniqueArray);

    });
  }

  fitBounds() {
    const bounds = new google.maps.LatLngBounds();
    for (const marker of this.postingArray) {
      console.log(this.uniqueArray);
      bounds.extend(
        new google.maps.LatLng(
          marker.business.geo_direction.lat,
          marker.business.geo_direction.lng
        )
      );
    }

    this.map.fitBounds(bounds);
  }
  ngOnInit(): void {
    this.posting();
  }
  handleMapClick(event: any) {
    const clickedPosition = event.coords || event.latLng;

    if (clickedPosition) {
      const link = `https://www.google.com/maps/search/?api=1&query=${clickedPosition.lat()},${clickedPosition.lng()}`;
      window.open(link, '_blank');
    }
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if (changes['postingarray'] && changes['postingarray'].currentValue) {
      console.log("map work")
      if (!this.fisrtChange) {
        this.fitBounds()
      }
      this.fisrtChange = false
    }
  }

}
