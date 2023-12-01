import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ListingComponent } from './listing/listing/listing.component';
import { PostingComponent } from './posting/posting/posting.component';
import { DetailsPostingComponent } from './posting/details-posting/details-posting.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NavbarComponent,FooterComponent,ListingComponent,PostingComponent,DetailsPostingComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'post-7';
  auth: boolean = false;

  constructor( private route:Router){}
  
    ngDoCheck(): void {
      if (this.route.url == '/login' || this.route.url == '/register' ||this.route.url =='/reset' ||this.route.url =='/forget' 
      || this.route.url == '/contact-us'
      
      ) {
        this.auth = false;
      } else {
        this.auth = true;
      }
    }
}
