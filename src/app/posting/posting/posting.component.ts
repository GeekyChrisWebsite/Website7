import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostingService } from '../posting.service';
import { RouterLink } from '@angular/router';
import { PaginatorModule } from 'primeng/paginator';
import { DetailsPostingComponent } from '../details-posting/details-posting.component';
import { CarouselModule } from 'primeng/carousel';
import { DropdownModule } from 'primeng/dropdown';


@Component({
  selector: 'app-posting',
  standalone: true,
  imports: [CommonModule,RouterLink,PaginatorModule,DetailsPostingComponent,CarouselModule,DropdownModule],
  templateUrl: './posting.component.html',
  styleUrl: './posting.component.scss', 
  encapsulation:ViewEncapsulation.None,
   host: {ngSkipHydration: 'true'},

})
export class PostingComponent {
  postingarray:any[]=[]
  first = 0; 
  rows = 20; 
  vip:[]=[];
  responsiveOptions: any[] | undefined;

  constructor(public service:PostingService){
  }




  posting() {
    this.service.GetPosting().subscribe((res: any) => {
      this.postingarray = res.data;
      this.sortArrayByUpdatedAt();
    });
  }
  
  sortArrayByUpdatedAt() {
    this.postingarray.sort((a, b) => {
      const timeA = new Date(a.updated_at).getTime();
      const timeB = new Date(b.updated_at).getTime();
      return timeB - timeA; // Sorting in descending order
    });
  }
  
  onPageChange(event: any): void {
    this.first = event.first;
  }
 
  VipPOST(){
    this.service.vipposts().subscribe((res:any)=>{
      this.vip=res.data
      console.log(this.vip)

    })
   }
   makePhoneCall(phoneNumber: string): void {
    console.log('Initiating phone call to:', phoneNumber);
    window.location.href = 'tel:' + phoneNumber;
  }
 
  ngOnInit(): void {
    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];

    this.posting();
    this.VipPOST();
  }
  ngDoCheck(): void {
   
  }

}
