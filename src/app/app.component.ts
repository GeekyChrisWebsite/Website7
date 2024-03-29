import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent, ToastModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]

})
export class AppComponent {
  title = 'post-7';
  auth: boolean = false;

  constructor(private route: Router) { }

  ngDoCheck(): void {
    if (this.route.url == '/login' || this.route.url == '/register' || this.route.url == '/reset' || this.route.url == '/forget'
      || this.route.url == '/contact-us'

    ) {
      this.auth = false;
    } else {
      this.auth = true;
    }
  }
}
