import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  fullName: string;
  authLevel: string;

  constructor(
      private tokenStorageService: TokenStorageService, 
      private router: Router
  ){}

  ngOnInit(): void {
      this.fullName  = this.tokenStorageService.getUser().name;
      this.authLevel = this.tokenStorageService.getUser().userLevel;
  }

  logout() {
    Swal.fire({
      text: 'You are about to log out of your account',
      icon: 'warning',
      iconColor: '#e4002b',
      allowOutsideClick: false,
      reverseButtons: true,
      showCancelButton: true,
      confirmButtonText: 'Log Out',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#43b02a'
    }).then((result: any) => {
      if(result.value) {
        this.tokenStorageService.signOut();
        this.router.navigate(['/login']);
      }
    });
   }

}
