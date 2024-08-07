import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/internal/operators/catchError';
import { of } from 'rxjs/internal/observable/of';
import { ListingService } from '../../services/listing.service';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { ChipModule } from 'primeng/chip';
import { SimilarWorkComponent } from '../../shared/similar-work/similar-work.component';

@Component({
  selector: 'app-details-listing',
  standalone: true,
  imports: [
    CommonModule,
    GalleriaModule,
    RouterLink,
    CarouselModule,
    AsyncPipe,
    GoogleMapsModule,
    ChipModule,
    SimilarWorkComponent,
  ],
  templateUrl: './details-listing.component.html',
  styleUrl: './details-listing.component.scss',
  host: { ngSkipHydration: 'true' },

  encapsulation: ViewEncapsulation.None,
})
export class DetailsListingComponent {
  id: any;
  datainfo: any;
  imgs: any[] = [];
  photo: any[] = [];
  twoImgs: boolean = false;
  displayCount: number = 4;
  img: any[] = [];
  displayBasic: boolean = false;
  galleryphotos: string[] = [];
  galleryphotosmobile: string[] = [];
  data: any[] = [];
  itemId: any;
  posts: any[] = [];
  apiLoaded?: Observable<boolean>;
  options: any = {
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
  };

  selectedMarker: any;
  @ViewChild(GoogleMap) map!: GoogleMap;

  constructor(
    public listingservice: ListingService,
    private route: ActivatedRoute,
    private _httpClient: HttpClient
  ) {
    this.id = route.snapshot.paramMap.get('id');
    this.apiLoaded = _httpClient
      .jsonp(
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyAAb4SFQe0Kigpu3EiKhR93nC-OUitTKwM',
        'callback'
      )
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }

  customOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
    nav: false,
  };

  getdetalisId(id: any) {
    this.listingservice.GetListingByID(id).subscribe((res: any) => {
      this.datainfo = res.data;
      this.galleryphotos = res.data.images;
      this.imgs = res.data.images;

      if (this.imgs.length == 2) {
        this.twoImgs = true;
      }
    });
  }

  responsiveOptions: any[] = [
    {
      breakpoint: '1500px',
      numVisible: 5,
    },
    {
      breakpoint: '1024px',
      numVisible: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  getimges() {
    this.listingservice.GetListingByID(this.id).subscribe((res: any) => {
      this.datainfo = res.data;
      this.galleryphotos = res.data.images;
    });
  }
  getPosts(id: number) {
    this.listingservice.GetListingByID(id).subscribe((res: any) => {
      this.posts = res.data;
    });
  }

  ngOnInit(): void {
    this.galleryphotos = this.img;
    this.route.params.subscribe((params: any) => {
      console.log(params);
      this.getdetalisId(params.id);
      this.getPosts(this.id);
    });
  }
  // ngAfterViewInit() {
  //     setTimeout(() => {
  //         if (this.apiLoaded) {
  //             this.fitBounds();
  //         }
  //     }, 1000);
  // }

  // fitBounds() {
  //     const bounds = new google.maps.LatLngBounds();
  //     bounds.extend(
  //         new google.maps.LatLng(this.datainfo.geo_direction.lat, this.datainfo.geo_direction.lng)
  //     );
  //     this.map.fitBounds(bounds);
  // }

  makePhoneCall(phoneNumber: string): void {
    window.location.href = 'tel:' + phoneNumber;
  }
  formatTime(time: string): string {
    const timeParts = time.split(':');
    let hours = parseInt(timeParts[0], 10);
    const minutes = timeParts[1];
    let amPm = 'AM';

    if (hours >= 12) {
      if (hours > 12) {
        hours -= 12;
      }
      amPm = 'PM';
    }

    return `${hours}:${minutes} ${amPm}`;
  }
}
