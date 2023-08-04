import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { AuthState } from '../auth.state';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ClearAuthData } from '../auth.state';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  imagePath: string = 'assets/img/Mark.png';
  usernameValue: string = '';
  roleValue: string = '';
  tokenValue: string = '';

  @Select(AuthState.getUsername) username$!: Observable<string>;
  @Select(AuthState.getToken) token$!: Observable<string>;

  constructor(private store: Store, private router: Router) {}

  ngOnInit() {
    this.username$.subscribe((username) => {
      this.usernameValue = username;
      this.checkRole(username);
    });

    this.token$.subscribe((token) => {
      this.tokenValue = token;
    });
  }
  checkRole(username: string) {
    const comparisonString = 'hbingley1'; // Строка, с которой будем сравнивать username

    if (username === comparisonString) {
      this.roleValue = 'Администратор';
    } else {
      this.roleValue = 'Покупатель';
    }
  }
  logout() {
    this.store.dispatch(new ClearAuthData());
    this.router.navigate(['/auth']);
  }
}
