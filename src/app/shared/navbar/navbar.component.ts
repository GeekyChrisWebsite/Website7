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
  providers: [MessageService, ConfirmationService],
})
export class NavbarComponent implements DoCheck {
  sidebarVisible: boolean = false;
  sidebarVisible1: boolean = false;
  sidebarVisible2: boolean = false;
  isrouteHome: boolean = true;

  constructor(
    public listingservice: ListingService,
    public _router: ActivatedRoute,
    public filterservice: FilterService,
    private route: Router
  ) { }

  ngOnInit(): void { }

  ngDoCheck(): void {
    if (this.route.url == '/home') {
      this.isrouteHome = false;
    } else {
      this.isrouteHome = true;
    }
  }
}
