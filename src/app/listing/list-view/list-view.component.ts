import { Component, Input } from '@angular/core';
import { ListingData } from '../../interface/listing-data';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FilterService } from '../../services/filter.service';
import { CookieService } from 'ngx-cookie-service';
import { DistanceService } from '../../services/distance.service';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [RouterModule, CommonModule, PaginatorModule],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.scss',
})
export class ListViewComponent {
  @Input() listingArray!: ListingData[];
  @Input() filterarray: any;
  @Input() distances!: any;
  totalRecords: number | undefined;

  first = 0;
  rows = 6;
  maxDescriptionLength: number = 20;
  maxname: number = 24;

  likeCountValue: number[] = [];
  isLiked: boolean[] = Array(this.listingArray?.length).fill(false);

  constructor(
    private filterservice: FilterService,
    private _cookieService: CookieService,
    public router: Router,
    public distanceService: DistanceService
  ) {}

  makePhoneCall(phoneNumber: string): void {
    window.location.href = 'tel:' + phoneNumber;
  }
  // handleMapClick(dir: { lat: number, lng: number }) {
  //   if (dir) {
  //     const link = `https://www.google.com/maps/search/?api=1&query=${dir.lat},${dir.lng}`;
  //     const anchor = document.createElement('a');
  //     anchor.href = link;
  //     anchor.target = '_blank';
  //     anchor.click();
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
        this.filterservice.addDislikes(busId).subscribe({
          next: (res) => {
            this.listingArray[index].liked = false;
            this.listingArray[index].likes += 1;
          },
        });
      } else {
        this.filterservice.addLike(busId).subscribe({
          next: (res) => {
            this.listingArray[index].liked = true;
            this.listingArray[index].likes -= 1;
          },
        });
      }
    }
  }
  truncateName(name: string): string {
    if (name.length <= 24) {
      return name;
    } else {
      return name.substring(0, 24);
    }
  }
  truncatedis(name: string): string {
    if (name.length <= 44) {
      return name;
    } else {
      return name.substring(0, 44);
    }
  }

  calculateDistance(lat: number, lng: number): string {
    const distance = this.distanceService.calculateDistance(lat, lng);
    return distance !== null ? distance.toFixed(0) : 'N/A';
  }
  ngOnInit() {
    this.totalRecords = this.listingArray.length;
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }
}
