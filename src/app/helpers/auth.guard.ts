import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private tokenStorageService: TokenStorageService
  ){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const loggedUser = this.tokenStorageService.getUser();
    if(loggedUser){
      return true;
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
  
}
