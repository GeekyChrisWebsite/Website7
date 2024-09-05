import {
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
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
import { CookieService } from 'ngx-cookie-service';
import { FilterService } from '../../services/filter.service';

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
  @ViewChild('videoPlayer') videoPlayer!: ElementRef;

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
    private _httpClient: HttpClient,
    public _cookieService: CookieService,
    private filterService: FilterService,
    public router: Router
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
      console.log(this.datainfo);

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
    console.log({ time: time });
    if (!time) {
      return '00';
    } else {
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

      return `${hours}:${minutes || '00'} ${amPm}`;
    }
  }

  // handleMapClick(geoDirection: { lat: number; lng: number }): void {
  //   if (
  //     geoDirection &&
  //     geoDirection.lat !== undefined &&
  //     geoDirection.lng !== undefined
  //   ) {
  //     const link = `https://www.google.com/maps/search/?api=1&query=${geoDirection.lat},${geoDirection.lng}`;
  //     window.open(link, '_blank');
  //   }
  // }
  handleMapClick(street: string, state: string): void {
    if (street && state) {
      const encodedStreet = encodeURIComponent(street);
      const encodedState = encodeURIComponent(state);
      const link = `https://www.google.com/maps/search/?api=1&query=${encodedStreet},+${encodedState}`;
      window.open(link, '_blank');
    }
  }

  ngAfterViewInit() {
    this.videoPlayer.nativeElement.play();
  }
  likeBusiness(busId: string) {
    const token = this._cookieService.get('token');

    if (!token) {
      this.router.navigate(['/login']);
    } else {
      if (this.datainfo.liked) {
        this.filterService.addDislikes(busId).subscribe({
          next: (res) => {
            console.log(res, 'dislike');
            this.datainfo.liked = false;
            this.datainfo.likes -= 1; // Decrease likes count on dislike
          },
        });
      } else {
        this.filterService.addLike(busId).subscribe({
          next: (res) => {
            console.log(res, 'like');
            this.datainfo.liked = true;
            this.datainfo.likes += 1; // Increase likes count on like
          },
        });
      }
    }
  }
}
