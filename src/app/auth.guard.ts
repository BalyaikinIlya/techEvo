import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { map } from 'rxjs/operators';
import { AuthState } from './auth.state';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  @Select(AuthState.getToken) token$!: Observable<string>;

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.token$.pipe(
      map((token) => {
        if (token) {
          return true; // Разрешаем переход, если есть токен
        } else {
          // Если нет значения token, перенаправляем пользователя на другую страницу
          return this.router.parseUrl('/auth'); // Изменяем на главную страницу или другую
        }
      })
    );
  }
}
