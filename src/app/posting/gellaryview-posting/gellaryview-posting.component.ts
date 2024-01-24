import { Component, Input } from '@angular/core';
import { PostingData } from '../../interface/posting-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gellaryview-posting',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gellaryview-posting.component.html',
  styleUrl: './gellaryview-posting.component.scss'
})
export class GellaryviewPostingComponent {
  @Input()
  postingarray!: PostingData[];
  @Input() filterposts: any;
  @Input() distances: any[] = [];
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

  // Your existing code...

  toggleLike(index: number) {
    this.isLiked[index] = !this.isLiked[index];

    // Increment the likes count by 1 when liked, otherwise decrement
    this.likeCountValue[index] = this.isLiked[index] ? this.likeCountValue[index] + 1 : this.likeCountValue[index] - 1;

    // Update the 'likes' property of the corresponding item
    if (this.isLiked[index]) {
      this.postingarray[index].likes += 1;
    } else {
      this.postingarray[index].likes -= 1;
    }

  }
}
