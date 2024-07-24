import { Component, ViewEncapsulation } from '@angular/core';
import { PostingService } from '../../services/posting.service';
import { ActivatedRoute } from '@angular/router';
import { GalleriaModule } from 'primeng/galleria';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posting-detalis',
  standalone: true,
  imports: [GalleriaModule, CommonModule],
  templateUrl: './posting-detalis.component.html',
  styleUrl: './posting-detalis.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class PostingDetalisComponent {
  id: any;
  datainfo: any;
  photo: any[] = [];
  twoImgs: boolean = false;
  displayCount: number = 4;
  img: any;
  isVisible = false;
  galleryphotos: string[] = [];
  imgs: any[] = [];
  displayCustom: boolean = true;
  activeIndex: number = 0;
  timepost: any;
  loading: boolean = false
  displayBasic: boolean = true

  constructor(private _postingservice: PostingService, private route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('id');
  }


  getdetalisId() {
    this._postingservice.GetPostingByID(this.id).subscribe((res: any) => {
      this.datainfo = res.data;
      this.timepost = res.data.dates
      this.galleryphotos = res.data.images;
      this.imgs = res.data.images;
    });
  }

  responsiveOptions: any[] = [
    {
      breakpoint: '1500px',
      numVisible: 5
    }, {
      breakpoint: '1024px',
      numVisible: 3
    }, {
      breakpoint: '768px',
      numVisible: 2
    }, {
      breakpoint: '560px',
      numVisible: 2
    },
  ];


  ngOnInit(): void {
    this.getdetalisId();
    this.getImages()
    this.galleryphotos = this.img;

  }

  getImages(): void {
    this.loading = true
    this._postingservice.GetPostingByID(this.id).subscribe((res: any) => {
      this.loading = false
      this.datainfo = res.data;
      this.imgs = res.data.images;
    });
  }

  imageClick(index: number): void {
    this.displayCustom = true
  }
  makePhoneCall(phoneNumber: string): void {
    window.location.href = 'tel:' + phoneNumber;
  }
  handleMapClick(geoDirection: { lat: number, lng: number }): void {
    if (geoDirection && geoDirection.lat !== undefined && geoDirection.lng !== undefined) {
      const link = `https://www.google.com/maps/search/?api=1&query=${geoDirection.lat},${geoDirection.lng}`;
      window.open(link, '_blank');
    }
  }

}
