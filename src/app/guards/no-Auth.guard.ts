import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { LocalTaskService } from '../service/local-task.service';
import { AuthService } from '../service/auth.service';

@Injectable()
export class NoAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.isAuth$.pipe(
      map((isAuth) => {
        if (!isAuth) {
          return true; 
        } else {
          return this.router.createUrlTree(['/']);
        }
      })
    );
  }
}
