import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  regsiterbody!: FormGroup;
  loginbody!: FormGroup
  constructor(private _HttpClient: HttpClient, private cookiesService: CookieService
  ) { }

  addUser(): Observable<any> {
    let body = {
      username: this.regsiterbody.controls['username'].value,
      email: this.regsiterbody.controls['email'].value,
      password: this.regsiterbody.controls['password'].value,
      website: "www.usalifeonlines.com"

    }
    return this._HttpClient.post(`${environment.BACKEND_DOMAIN}/add-user`, body, { observe: 'response' })
  }
  loginUser(): Observable<any> {
    let body = {
      email: this.loginbody.controls['email'].value,
      password: this.loginbody.controls['password'].value,
      website: "www.usalifeonlines.com"
    };

    return this._HttpClient.post(`${environment.BACKEND_DOMAIN}/user-login`, body);
  }
}
