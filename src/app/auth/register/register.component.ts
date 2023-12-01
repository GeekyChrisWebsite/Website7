import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,PasswordModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  encapsulation:ViewEncapsulation.None

})
export class RegisterComponent {

}
