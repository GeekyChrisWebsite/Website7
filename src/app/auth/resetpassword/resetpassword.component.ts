import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-resetpassword',
  standalone: true,
  imports: [CommonModule,PasswordModule],
  templateUrl: './resetpassword.component.html',
  styleUrl: './resetpassword.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class ResetpasswordComponent {

}
