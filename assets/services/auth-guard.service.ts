import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    if(sessionStorage.getItem("currentUser") !== null) {
      //authorized, so return true
      return true;
    } else {
      // not logged in so redirect to login page
      this.router.navigateByUrl("login");
      return false;
    }
  }
}
