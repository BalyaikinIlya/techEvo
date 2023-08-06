import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  imagePath: string = 'assets/img/Mark.png';
  iconPath: string = 'assets/img/Icon.png';

  username: string = '';
  password: string = '';

  error:string = "";
  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      (response: any) => {
        console.log('Успешная авторизация:', response);
        this.router.navigate(['/profile']);
      },
      (error) => {
        console.error('Ошибка авторизации:', error);
        this.error = "Введены некорректные данные";
        console.log(this.error);
      }
    );
  }
  validatie() {
    if (this.password.length<5) {
      this.error = "Длина пароля должна быть больше 5 символов"
    } else {
      this.onSubmit();
    }
  }
}
