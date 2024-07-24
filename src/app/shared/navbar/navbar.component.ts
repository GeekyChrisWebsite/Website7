import {
  ChangeDetectorRef,
  Component,
  DoCheck,
  NgZone,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ListingData } from '../../interface/listing-data';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ListingService } from '../../services/listing.service';
import { FilterService } from '../../services/filter.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FilterComponent } from '../filter/filter.component';
import { UserInfoService } from '../../services/user-info.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    SidebarModule,
    DropdownModule,
    ButtonModule,
    RouterLink,
    ReactiveFormsModule,
    FilterComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [ConfirmationService],
})
export class NavbarComponent implements DoCheck {
  sidebarVisible: boolean = false;
  sidebarVisible1: boolean = false;
  sidebarVisible2: boolean = false;
  isrouteHome: boolean = true;
  user: any;
  imgUser: any;

  constructor(
    public listingservice: ListingService,
    public _router: ActivatedRoute,
    public filterservice: FilterService,
    private route: Router,
    public userService: UserInfoService,
    public _cookieService: CookieService,
    public _AuthService: AuthService
  ) { }

  ngOnInit(): void {
    this.getUserFromCookies()

  }
  getUserFromCookies() {
    const token = this._cookieService.get('token');
    if (token) {
      this._AuthService.loginUser().subscribe(
        (res: any) => {
          this.user = res.data.username;
          this.imgUser = res.data.profile_image
        },
        (error) => {
        }
      );
    }
  }

  ngDoCheck(): void {
    if (this.route.url == '/home') {
      this.isrouteHome = false;
    } else {
      this.isrouteHome = true;
    }


  }

  logout() {
    this._cookieService.delete('token');
    this.user = null;
    this.imgUser = null;

  }
}
