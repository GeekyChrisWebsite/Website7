import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, PasswordModule, RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  NAME: any;

  loginform: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });
  constructor(public _AuthService: AuthService, public router: Router, private _cookieService: CookieService, public _MessageService: MessageService) {
    _AuthService.loginbody = this.loginform;


  }
  loginuser() {
    this._AuthService.loginUser().subscribe((res: any) => {
      console.log("login", res);
      this.NAME = res.data.username
      if (res.data.token) {
        this.showuserName();
        this._cookieService.set('token', res.data.token);
        this._cookieService.set('user', res.data);

        this.router.navigate(['/listing'])

      }
    })
  }

  showuserName() {
    this._MessageService.add({
      severity: 'success',
      detail: `Welcome To  ${this.NAME}`,

    });
  }

}
