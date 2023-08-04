import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { Store } from '@ngxs/store';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://dummyjson.com/auth/login';

  constructor(private http: HttpClient, private store: Store) {}

  login(username: string, password: string) {
    const credentials = {
      username: username,
      password: password,
    };

    return this.http.post(this.apiUrl, credentials).pipe(
      tap((response: any) => {
        const { token, id, username } = response;
        this.store.dispatch(new SetAuthData(token, id, username));
      })
    );
  }
}
export class SetAuthData {
  static readonly type = 'SetAuthData';

  constructor(
    public token: string,
    public id: number,
    public username: string
  ) {}
}
