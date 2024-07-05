import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { FilterService } from '../../services/filter.service';
import { CookieService } from 'ngx-cookie-service';
import { SanatizerPipe } from "../../pipe/sanatizer.pipe";
import { TruncateTextPipe } from "../../pipe/truncate-text.pipe";

@Component({
  selector: 'app-bs-listview',
  standalone: true,
  templateUrl: './bs-listview.component.html',
  styleUrl: './bs-listview.component.scss',
  imports: [CommonModule, TableModule, RouterModule, SanatizerPipe, TruncateTextPipe]
})
export class BsListviewComponent {
  maxDescriptionLength: number = 44;
  showFullText: boolean = false;
  @Input() BuySellArray: any[] = [];
  @Input() distances!: any;
  isLiked: boolean[] = [];
  likeCountValue: number[] = [];
  constructor(private _filterservie: FilterService, private _cookieService: CookieService, public router: Router) {

  }
  truncateText(content: string, maxLength: number): string {
    if (content.length <= maxLength) {
      return content;
    }
    return content.substr(0, maxLength) + '';
  }
  makePhoneCall(phoneNumber: string): void {
    console.log('Initiating phone call to:', phoneNumber);
    window.location.href = 'tel:' + phoneNumber;
  }
  handleMapClick(geoDirection: { lat: number, lng: number }): void {
    if (geoDirection && geoDirection.lat !== undefined && geoDirection.lng !== undefined) {
      const link = `https://www.google.com/maps/search/?api=1&query=${geoDirection.lat},${geoDirection.lng}`;
      window.open(link, '_blank');
    }
  }

  toggleLike(index: number) {
    this.isLiked[index] = !this.isLiked[index];

    // Increment the likes count by 1 when liked, otherwise decrement
    this.likeCountValue[index] = this.isLiked[index] ? this.likeCountValue[index] + 1 : this.likeCountValue[index] - 1;

    // Update the 'likes' property of the corresponding item
    if (this.isLiked[index]) {
      this.BuySellArray[index].likes += 1;
    } else {
      this.BuySellArray[index].likes -= 1;
    }

  }
  likeBusiness(busId: string, index: number) {
    const token = this._cookieService.get('token');

    if (!token) {
      this.router.navigate(['/login']);
    } else {
      if (this.BuySellArray[index].liked == true) {
        console.log(this.BuySellArray[index].liked);

        this._filterservie.addLike(busId).subscribe({
          next: (res) => {
            console.log(res, "like");
            this.BuySellArray[index].liked = false;
            this.BuySellArray[index].business.likes += 1;
          },
        });
      } else {
        this._filterservie.addDislikes(busId).subscribe({
          next: (res) => {
            console.log(res, "dislike");
            this.BuySellArray[index].liked = true;
            this.BuySellArray[index].business.likes -= 1;
          },
        });
      }
    }


  }
  truncatedname(name: string): string {
    if (name.length <= 24) {
      return name;
    } else {
      return name.substring(0, 24);
    }
  }
  customer = {
    id: 1,
    images: ['../../assets/img/footer/default-image.jpg'] // Replace with actual image URL or empty array
  };

  onImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = '../../assets/img/footer/default-image.jpg';
  }
}
