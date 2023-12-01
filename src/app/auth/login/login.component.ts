import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,PasswordModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class LoginComponent {

}
