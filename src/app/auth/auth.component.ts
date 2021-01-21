import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {

  form: any     = {};
  isLoggedIn    = false;
  isLoginFailed = false;
  errorMessage  = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private tokenStorageService: TokenStorageService
  ) { }

  ngOnInit(): void {
    if(this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      (data) => {
        this.tokenStorageService.saveToken(data.body.token);
        this.tokenStorageService.saveUser(data.body.user);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigate(['/dashboard']);
      },
      (err) => {
        this.errorMessage  = 'Login failed. Invalid username/password.';
        this.isLoginFailed = true;
      }
    );
  }

}
