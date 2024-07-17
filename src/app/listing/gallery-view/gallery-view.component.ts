import { Component, Input } from '@angular/core';
import { ListingData } from '../../interface/listing-data';
import { CommonModule } from '@angular/common';
import { FilterService } from '../../services/filter.service';
import { Router, RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DistanceService } from '../../services/distance.service';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-gallery-view',
  standalone: true,
  imports: [CommonModule, RouterModule, PaginatorModule],
  templateUrl: './gallery-view.component.html',
  styleUrl: './gallery-view.component.scss'
})
export class GalleryViewComponent {
  @Input()
  listingArray!: ListingData[];
  @Input() filterarray: any;
  @Input() distances!: any;
  first = 0;
  rows = 5;
  totalRecords: number | undefined;
  constructor(private filterservice: FilterService, private _cookieService: CookieService, public router: Router, public distanceService: DistanceService) {

  }
  makePhoneCall(phoneNumber: string): void {
    console.log('Initiating phone call to:', phoneNumber);
    window.location.href = 'tel:' + phoneNumber;
  }
  handleMapClick(dir: { lat: Number, lng: Number }) {
    console.log(dir)

    if (dir) {
      const link = `https://www.google.com/maps/search/?api=1&query=${dir.lat},${dir.lng}`;
      window.open(link, '_blank');
    }
  }
  isLiked: boolean[] = [];
  likeCountValue: number[] = [];

  truncateText(content: string, maxLength: number): string {
    if (content.length <= maxLength) {
      return content;
    }
    return content.slice(0, maxLength) + '...';
  }

  likeBusiness(busId: string, index: number) {
    const token = this._cookieService.get('token');

    if (!token) {
      this.router.navigate(['/login']);
    } else {
      if (this.listingArray[index].liked == true) {
        console.log(this.listingArray[index].liked);

        this.filterservice.addDislikes(busId).subscribe({
          next: (res) => {
            console.log(res, "like");
            this.listingArray[index].liked = false;
            this.listingArray[index].likes += 1;
          },
        });
      } else {
        this.filterservice.addLike(busId).subscribe({
          next: (res) => {
            console.log(res, "dislike");
            this.listingArray[index].liked = true;
            this.listingArray[index].likes -= 1;
          },
        });
      }


    }
  }
  calculateDistance(lat: number, lng: number): string {
    const distance = this.distanceService.calculateDistance(lat, lng);
    return distance !== null ? distance.toFixed(0) : 'N/A';
  }
  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }
  ngOnInit() {
    this.totalRecords = this.listingArray.length;
  }

}
