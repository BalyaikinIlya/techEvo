import { Injectable } from '@angular/core';
import { Observable, filter, switchMap } from 'rxjs';
import { AuthState } from './auth.state';
import { Select } from '@ngxs/store';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  @Select(AuthState.getId) userId$!: Observable<number>;
  constructor(private http: HttpClient) {}

  getUserData(): Observable<any> {
    return this.userId$.pipe(
      filter((id: number) => id !== 0),
      switchMap((id: number) => {
        const url = `https://dummyjson.com/users/${id}`;
        return this.http.get<any>(url);
      })
    );
  }
}
