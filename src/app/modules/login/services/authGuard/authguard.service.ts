import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(public router: Router) { }

  public isAuthenticated(): boolean {
    const userDataString: string = localStorage.getItem('userData') || "";
    if (!userDataString) {
      return false;
    }
    const userData: any = JSON.parse(userDataString);
    if (userData && userData.token) {
      return true;
    } else {
      return false;
    }

  }
  canActivate(): boolean {
    if (!this.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
