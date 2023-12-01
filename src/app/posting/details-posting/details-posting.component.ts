import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostingService } from '../posting.service';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-details-posting',
  standalone: true,
  imports: [CommonModule,GalleriaModule,RouterLinkActive],
  templateUrl: './details-posting.component.html',
  styleUrl: './details-posting.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class DetailsPostingComponent {
  
  id : any;
  datainfo : any;
  photo : any[] = [];
  twoImgs : boolean = false;
  displayCount : number = 4;
  img: any;
  isVisible = false;
  galleryphotos : string[] = [];
  imgs: any[] = [];
  displayCustom: boolean = true; 
  activeIndex: number = 0;
  timepost:any;
  loading:boolean = false
  displayBasic:boolean=true  
  constructor(private service: PostingService, private route:ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('id');
}


getdetalisId() {
    this.service.GetPostingByID(this.id).subscribe((res : any) => {
        this.datainfo = res.data;
        this.timepost=res.data.dates
        this.galleryphotos = res.data.images;
        this.imgs = res.data.images;
    });
}
responsiveOptions : any[] = [
  {
      breakpoint: '1500px',
      numVisible: 5
  }, {
      breakpoint: '1024px',
      numVisible: 3
  }, {
      breakpoint: '768px',
      numVisible: 2
  }, {
      breakpoint: '560px',
      numVisible: 2
  },
];


ngOnInit(): void {
  this.getdetalisId();
  this.galleryphotos = this.img;

}

}
