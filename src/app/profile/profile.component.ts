import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service.service';
import { User } from '../user.interface';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userData: User = {
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    ip: '',
    username: '',
    image: '',
  };

  checkAdmin: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUserData().subscribe((data) => {
      this.userData.firstName = data.firstName;
      this.userData.lastName = data.lastName;
      this.userData.age = data.age;
      this.userData.email = data.email;
      this.userData.image = data.image;
      this.userData.ip = data.ip;
      this.userData.username = data.username;
      console.log(this.userData);
      if (this.userData.username === 'hbingley1') {
        this.checkAdmin = true;
      }
    });
  }
}
