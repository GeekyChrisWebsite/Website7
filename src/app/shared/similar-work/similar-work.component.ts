import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ListingService } from '../../services/listing.service';
import { SanatizerPipe } from '../../pipe/sanatizer.pipe';
import { TruncateTextPipe } from '../../pipe/truncate-text.pipe';

@Component({
  selector: 'app-similar-work',
  standalone: true,
  imports: [CommonModule, RouterLink, SanatizerPipe, TruncateTextPipe],
  templateUrl: './similar-work.component.html',
  styleUrl: './similar-work.component.scss',
})
export class SimilarWorkComponent {
  data: any;
  id: any;
  itemId: any;
  constructor(private service: ListingService, private router: ActivatedRoute) {
    this.id = router.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.getSimilar(this.id);
  }

  getSimilar(id: any) {
    this.service.getpostsbusinessID(id).subscribe((res: any) => {
      this.data = res.data;
    });
  }
  truncateText(content: string, maxLength: number): string {
    if (content.length <= maxLength) {
      return content;
    }
    return content.substr(0, maxLength) + '...';
  }
  makePhoneCall(phoneNumber: string): void {
    window.location.href = 'tel:' + phoneNumber;
  }
  handleMapClick(street: string, state: string): void {
    if (street && state) {
      const encodedStreet = encodeURIComponent(street);
      const encodedState = encodeURIComponent(state);
      const link = `https://www.google.com/maps/search/?api=1&query=${encodedStreet},+${encodedState}`;
      window.open(link, '_blank');
    }
  }
}
