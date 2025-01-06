import { Component, ViewEncapsulation } from '@angular/core';
import { BuySellService } from '../../services/buy-sell.service';
import { ActivatedRoute } from '@angular/router';
import { GalleriaModule } from 'primeng/galleria';
import { CommonModule } from '@angular/common';
import { BuysellDetalis } from '../../interface/buysell-detalis';

@Component({
  selector: 'app-buy-sell-detalis',
  standalone: true,
  imports: [GalleriaModule, CommonModule],
  templateUrl: './buy-sell-detalis.component.html',
  styleUrl: './buy-sell-detalis.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: { ngSkipHydration: 'true' },
})
export class BuySellDetalisComponent {
  id: any;
  detalisArray!: BuysellDetalis;
  photo: any[] = [];
  twoImgs: boolean = false;
  displayCount: number = 4;
  img: any;
  isVisible = false;
  galleryphotos: any;
  displayCustom: boolean = true;
  activeIndex: number = 0;
  timepost: any;
  loading: boolean = false;
  displayBasic: boolean = true;
  constructor(
    private _BuySellService: BuySellService,
    private _ActivatedRoute: ActivatedRoute
  ) {
    this.id = _ActivatedRoute.snapshot.paramMap.get('id');
  }

  getbuyselldetalis() {
    this._BuySellService
      .getBuysellById(this.id)
      .subscribe((res: { data: BuysellDetalis }) => {
        this.detalisArray = res.data;
        console.log('ddd', res.data);
        this.timepost = res.data;
        this.galleryphotos = res.data.images;
      });
    console.log(this.img);
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
      numVisible: 2,
    },
  ];

  ngOnInit(): void {
    this.getbuyselldetalis();
    this.galleryphotos = this.img;
  }

  // getImages(): void {
  //   // this.loading=true
  //   this._BuySellService.getBuysellById(this.id).subscribe((res: any) => {
  //     // this.loading=false
  //     this.detalisArray = res;
  //     this.imgs = res.data.data.images;
  //     console.log(this.detalisArray)
  //   });
  // }

  imageClick(index: number): void {
    console.log('Image clicked at index:', index);
    this.displayCustom = true;
  }
  makePhoneCall(phoneNumber: string): void {
    console.log('Initiating phone call to:', phoneNumber);
    window.location.href = 'tel:' + phoneNumber;
  }
  handleMapClick(geoDirection: { lat: number; lng: number }): void {
    if (
      geoDirection &&
      geoDirection.lat !== undefined &&
      geoDirection.lng !== undefined
    ) {
      const link = `https://www.google.com/maps/search/?api=1&query=${geoDirection.lat},${geoDirection.lng}`;
      window.open(link, '_blank');
    }
  }
}
