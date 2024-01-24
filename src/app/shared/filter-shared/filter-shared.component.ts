import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ListingData } from '../../interface/listing-data';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ListingService } from '../../services/listing.service';
import { FilterService } from '../../services/filter.service';
import { ConfirmationService, MessageService } from 'primeng/api';
@Component({
  selector: 'app-filter-shared',
  standalone: true,
  imports: [CommonModule, DropdownModule, ReactiveFormsModule, ButtonModule],
  templateUrl: './filter-shared.component.html',
  styleUrl: './filter-shared.component.scss',
  providers: [ConfirmationService, MessageService]
})
export class FilterSharedComponent {
  sidebarVisible: boolean = false;
  sidebarVisible1: boolean = false;
  sidebarVisible2: boolean = false;
  listingArray: ListingData[] = [];
  categories: any[] = [];
  states: any[] = [];
  state: string = '';
  category: string = '';
  city: string = '';
  cities: any[] = [];
  empty: any[] = [];
  isrouteHome: boolean = true
  filterform: FormGroup = new FormGroup({
    categories: new FormControl('', Validators.required),
    states: new FormControl('', Validators.required),
    cities: new FormControl('', Validators.required),
  });
  constructor(
    public listingservice: ListingService,
    public _router: ActivatedRoute,
    public filterservice: FilterService,
    private fb: FormBuilder, private route: Router,
    private MessageService: MessageService,
    private confirmationService: ConfirmationService,
    private cdr: ChangeDetectorRef,
    private zone: NgZone,


  ) {
    this.categories = ['BEAUTY SALON SPA', 'MASSAGE SPA', 'RESTAURANTS'];
  }

  ngOnInit(): void {
    this.filterservice.updateListingArray(this.listingArray);

  }
  ngDoCheck(): void {
    if (this.route.url == '/home') {
      this.isrouteHome = false;

    } else {
      this.isrouteHome = true;

    }

  }
  getDataAll() {
    this.filterservice
      .getbusinessesbycategory(this.category, this.state, this.city)
      .subscribe((res: any) => {
        localStorage.setItem(
          'listingArray',
          JSON.stringify(res.data.businessesIds)
        );
        this.listingArray = res.data.businessesIds;
        console.log('here', this.listingArray);

        // Update the array in ListingDataService
        this.filterservice.updateListingArray(this.listingArray);

        // Update the array in FilterService (if needed)
        this.filterservice.updateListingArray(this.listingArray);

        this.filterservice.bparm.next({
          categories: this.category,
          state: this.state,
          cities: this.city,
        });
        this.sidebarVisible1 = false
      });
  }
  oncategorychange(event: any) {
    this.category = event.value;
    this.filterservice.GetState(event.value).subscribe((res: any) => {
      this.states = res?.data?.states;
      console.log(res);
      this.filterform.patchValue({
        category: this.category,
      });
    });
  }
  onstatechange(event: any) {
    this.state = event.value;
    this.filterservice
      .GetCity(event.value, this.category)
      .subscribe((res: any) => {
        this.cities = res?.data.cities;
        console.log(res);
        this.filterform.patchValue({
          state: this.state,
        });
      });
  }

  oncitychange(event: any) {
    this.city = event.value;
    this.filterform.patchValue({
      city: this.city,
    });
  }
  onSubmit() { }
  GetListingdata() {
    this.listingservice.GetListing().subscribe(
      (res: { data: ListingData[] }) => {
        console.log(res);
        this.listingArray = res.data;

        // Save to local storage after loading the data
        localStorage.setItem('listingArray', JSON.stringify(this.listingArray));

        // Additional logic after data is loaded (if needed)
        console.log('Data loaded successfully, additional logic here...');
      },
      (error) => {
        console.error(error);
      }
    );
  }

  clear() {
    console.log('Performing clear...');
    this.filterform.reset();
    this.category = '';
    this.state = '';
    this.city = '';
    this.listingArray = [];
    this.filterservice.bparm.next({});
    localStorage.removeItem('postingArray');
    localStorage.removeItem('buysellarray');
    localStorage.removeItem('listingArray');
    localStorage.removeItem('filteredBuySellData');

    // Set a flag to hide the component temporarily
    this.sidebarVisible = false;

    // Use NgZone to run the code in the Angular zone
    this.zone.runOutsideAngular(() => {
      // Re-create the component by setting the flag after a short delay
      setTimeout(() => {
        this.sidebarVisible = true;
      });
    });

  }
}
