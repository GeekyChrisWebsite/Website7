import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ListingService } from '../../services/listing.service';

@Component({
  selector: 'app-similar-work',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './similar-work.component.html',
  styleUrl: './similar-work.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SimilarWorkComponent {
  data: any;
  id: any;
  itemId: any
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

}
