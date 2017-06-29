import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../model/User';
import { UserService } from '../../user.service';
import { UrlService } from '../../url.service';

@Component({
  selector: 'app-user-table-row',
  templateUrl: './user-table-row.component.html',
  styleUrls: ['./user-table-row.component.css']
})
export class UserTableRowComponent implements OnInit {
  users: User[] = [];

  constructor(
    private userService: UserService,
    private urlService: UrlService) { }

  ngOnInit() {
      this.users = this.userService.getAll();
  }

  onChangeActive(user: User) {
      this.userService.changeStatus(user);
  }

  onEditUser(user: User) {
      this.userService.lastEditedUser = user;
      this.urlService.jumpTo('/user-manager');
  }

  deleteUser(user: User) {
      this.userService.deleteUser(user);
  }

}
