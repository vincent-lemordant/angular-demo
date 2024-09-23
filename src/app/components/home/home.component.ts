import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private userService: UserService) {}

  fetchUsers() {
    this.userService.fetchUsersFromApi().subscribe();
  }
}
