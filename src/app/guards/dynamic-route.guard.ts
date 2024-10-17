import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LocalTaskService } from '../service/local-task.service';

@Injectable()
export class DynamicRouteGuard implements CanActivate {
  constructor(private taskService: LocalTaskService, private router:Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const taskId = Number(route.params['id']); 

  
    if (this.taskService.taskList.length >= taskId + 1) {
      return true;
    } else {
    
      return this.router.createUrlTree(['**']);
    }
  }
}
