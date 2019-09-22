import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';
import {map, take, tap} from 'rxjs/operators';
import {loggedIn} from '@angular/fire/auth-guard';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(next, state): Observable<boolean> {
    return this.auth.user$.pipe(
      take(1),
      map(user => !!user),
      // tslint:disable-next-line:no-shadowed-variable
      tap(loggedIn => {
        if (!loggedIn) {
          console.log('Access Denied');
          this.router.navigateByUrl('hc-home');
        }
      })
    );
  }

}
