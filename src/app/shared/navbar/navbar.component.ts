import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,SidebarModule,DropdownModule,ButtonModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class NavbarComponent {
  sidebarVisible: boolean = false;
  sidebarVisible1: boolean = false;
  sidebarVisible2:boolean=false
  cities: any[] | undefined;
  categories:any[]|undefined;
  categoriesName:string|any
  citiesName: string | any;
  data:any[] = [];
  fliterarray:any[] = [];
  searcharray:any[]=[];
  StatesName:any[] | undefined;
  state:string|any;
  // formGroup: FormGroup | undefined;
  // Subscription!: Subscription;
  // fliterbody!:FormGroup;
  filterForm: any;
  loader:boolean =false
   first = 0; 
   rows = 2; 

}
