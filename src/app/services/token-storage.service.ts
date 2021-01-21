import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AUTH-TOKEN';
const USER_KEY  = 'AUTH-USER';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  
  constructor() { }
  
  public signOut(): void {
    window.sessionStorage.clear();
  }
  
  public saveToken(token: any): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, JSON.stringify(token));
  }

  public getToken(): any {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }

}
