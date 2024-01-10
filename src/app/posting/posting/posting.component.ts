import { Component, ViewEncapsulation } from '@angular/core';
import { MapviewPostingComponent } from '../mapview-posting/mapview-posting.component';
import { ListViewComponent } from '../../listing/list-view/list-view.component';
import { GellaryviewPostingComponent } from '../gellaryview-posting/gellaryview-posting.component';
import { CarouselModule } from 'primeng/carousel';
import { DropdownModule } from 'primeng/dropdown';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PostingService } from '../../services/posting.service';
import { PaginatorModule } from 'primeng/paginator';
import { ListviewPostingComponent } from '../listview-posting/listview-posting.component';
import { PostingData } from '../../interface/posting-data';
import { GalleryViewComponent } from '../../listing/gallery-view/gallery-view.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FilterService } from '../../services/filter.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { Subscription } from 'rxjs/internal/Subscription';
@Component({
  selector: 'app-posting',
  standalone: true,
  imports: [MapviewPostingComponent, ListViewComponent, GellaryviewPostingComponent,
    CarouselModule, DropdownModule, RouterModule, PaginatorModule, ListviewPostingComponent,
    MapviewPostingComponent, GalleryViewComponent, ReactiveFormsModule, ProgressSpinnerModule],
  templateUrl: './posting.component.html',
  styleUrl: './posting.component.scss',
  host: { ngSkipHydration: 'true' },
  encapsulation: ViewEncapsulation.None

})
export class PostingComponent {
  first = 0;
  rows = 20;
  loading: boolean = false
  vippostarray: PostingData[] = [];
  postingarray: PostingData[] = [];
  responsiveOptions: any[] | undefined;
  galleyView: boolean;
  listView: boolean;
  mapView: boolean;
  state: any[] = [];
  category: string = ''
  city: any[] = [];
  filterposts: any[] = [];
  categories: any[] = [];
  Subscriptions: Subscription[] = []

  filterformposting: FormGroup = new FormGroup({
    categories: new FormControl('', Validators.required),
    states: new FormControl('', Validators.required),
    cities: new FormControl('', Validators.required),


  });


  constructor(private postingservice: PostingService, private _filterservice: FilterService, private _router: ActivatedRoute) {
    this.galleyView = false;
    this.listView = true;
    this.mapView = false;
  }

  GetVipPost() {
    this.loading = true
    let vip = this.postingservice.vipposts().subscribe(
      (res: { data: PostingData[] }) => {
        this.loading = false
        this.vippostarray = res.data;
        console.log(this.vippostarray)

      }

    );
    this.Subscriptions.push(vip)

  }
  posting() {
    this.loading = true
    let posting = this.postingservice.GetPosting().subscribe(
      (res: { data: PostingData[] }) => {
        this.loading = false
        this.postingarray = res.data;
        this.sortArrayByUpdatedAt();
        console.log('new', res)
      });
    this.Subscriptions.push(posting)
  }
  sortArrayByUpdatedAt() {
    this.postingarray.sort((a, b) => {
      const timeA = new Date(a.updated_at).getTime();
      const timeB = new Date(b.updated_at).getTime();
      return timeB - timeA; // Sorting in descending order
    });
  }
  onPageChange(event: any): void {
    this.first = event.first;
  }
  makePhoneCall(phoneNumber: string): void {
    console.log('Initiating phone call to:', phoneNumber);
    window.location.href = 'tel:' + phoneNumber;
  }
  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
    this.categories = [
      "BEAUTY SALON SPA",
      "MASSAGE SPA",
      "RESTAURANTS"

    ];
    this.GetVipPost();
    this._filterservice.bparm.subscribe((res: any) => {
      console.log(res)
      if (Object.keys(res).length) {
        console.log(res, "ressssssssssssssss")
        this.getfilterposts(res.categories, res.states, res.cities,)
        console.log(res.state);
      } else {
        this.posting();

      }

    })




  }

  showGallery(): void {
    this.galleyView = true;
    this.listView = false;
    this.mapView = false;
  }
  showList(): void {
    this.listView = true;
    this.galleyView = false;
    this.mapView = false;
  }
  showMap(): void {
    this.mapView = true;
    this.galleyView = false;
    this.listView = false;
  }
  getfilterposts(categories: string, state: string, cities: string) {
    this.loading = true
    this._filterservice.getpostsfilter(categories, state, cities)
      .subscribe((res: any) => {
        this.loading = false
        this.postingarray = res.data.posts
        console.log("filterprams", res)

      })
  }
  selectedCategory: any
  oncategorychange(event: any) {
    this.selectedCategory = event.value
    this._filterservice.GetState(event.value).subscribe((res: any) => {
      this.state = res?.data?.states
      console.log(res)
    })

  }
  selectedState: any
  onstatechange(event: any) {
    this.selectedState = event.value
    this._filterservice.GetCity(event.value, this.selectedCategory).subscribe((res: any) => {
      this.city = res.data.cities
      console.log(res)

    })

  }
  selectedCity: any
  oncitychange(event: any) {
    this.selectedCity = event.value
  }

  getDatafiltedposting() {
    this.loading = true
    this._filterservice.getpostsfilter(this.selectedCategory, this.selectedState, this.selectedCity).subscribe(
      (res: any) => {
        this.loading = false

        this.postingarray = res.data.posts
        console.log(res)
      })
  }

  onSubmit() {
  }

  ngOnDestroy() {
    for (let Subscription of this.Subscriptions) {
      Subscription.unsubscribe()
    }


  }
}
