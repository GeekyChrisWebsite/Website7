import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,TagModule,DropdownModule,ButtonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class HomeComponent {

}
