import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
  encapsulation:ViewEncapsulation.None

})
export class ContactUsComponent {

}
