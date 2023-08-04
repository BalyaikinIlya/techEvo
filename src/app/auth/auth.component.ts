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

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      (response: any) => {
        // Обработка успешного ответа от сервера (например, сохранение токена в localStorage)
        console.log('Успешная авторизация:', response);
        this.router.navigate(['/profile']);
      },
      (error) => {
        // Обработка ошибки
        console.error('Ошибка авторизации:', error);
      }
    );
  }
}
