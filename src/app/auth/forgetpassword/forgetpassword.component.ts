import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class ForgetpasswordComponent {

}
