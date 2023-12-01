import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ListingService } from '../listing.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-detalis-listing',
  standalone: true,
  imports: [CommonModule,GalleriaModule,CarouselModule,RouterLink],
  templateUrl: './detalis-listing.component.html',
  styleUrl: './detalis-listing.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class DetalisListingComponent {
  id : any;
  datainfo : any;
  imgs : any[] = [];
  photo : any[] = [];
  twoImgs : boolean = false;
  displayCount : number = 4;
  img : any[] = [];
  // isVisible = false;
  displayBasic : boolean = false;
  galleryphotos : string[] = [];
  galleryphotosmobile : string[] = [];
  data:any[]=[];
  itemId:any;
  posts:any[]=[];

  constructor(private service:ListingService, private route:ActivatedRoute) {
      this.id = route.snapshot.paramMap.get('id');
  }
  customOptions : OwlOptions = {
    loop: true,
    autoplay: false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 1000,
    navText: [
        '', ''
    ],
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 1
        },
        740: {
            items: 1
        },
        940: {
            items: 1
        },
        1200: {
            items: 1
        }
    },
    nav: false
};

  
  getdetalisId(id:any) {
      this.service.GetListingByID(id).subscribe((res : any) => {
          this.datainfo = res.data;
          this.galleryphotos = res.data.images;
          this.imgs = res.data.images;

          if (this.imgs.length == 2) {
              this.twoImgs = true;
          }
          // console.log(this.imgs)
          // console.log("rania", res);
          // console.log(this.imgs);
          console.log(this.galleryphotos);
      });
  }
  getPosts(id:number){
     this.service.getpostsbusinessID(id).subscribe((res:any)=>{
        this.posts=res.data;
        console.log("rania",this.posts)
     })
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
          numVisible: 1
      },
  ];

  getimges() {
    this.service.GetListingByID(this.id).subscribe((res : any) => {
        this.datainfo = res.data;
        this.galleryphotos = res.data.images;
    });
}

  ngOnInit(): void {
      this.galleryphotos = this.img;
     this.route.params.subscribe((params:any) =>{
      console.log(params )
     this.getdetalisId(params.id);
      this.getPosts(this.id)
   })

  }

}
