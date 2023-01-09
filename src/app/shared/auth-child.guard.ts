import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,  CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthChildGuard implements  CanActivateChild {
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let val: any = localStorage.getItem('isUserLoggedIn');
    if (val != null && val == "true") {
      return true;
    } else {
      return false;
    }
  }
  
}
