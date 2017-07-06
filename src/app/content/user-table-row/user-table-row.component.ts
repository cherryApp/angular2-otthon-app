import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { User } from '../../model/User';
import { UserService } from '../../user.service';
import { UrlService } from '../../url.service';

@Component({
  selector: "app-user-table-row",
  templateUrl: "./user-table-row.component.html",
  styleUrls: ["./user-table-row.component.css"]
})
export class UserTableRowComponent implements OnInit, OnDestroy {
  users: User[] = [];
  userSubscribe = null;

  constructor(
    private userService: UserService,
    private urlService: UrlService
  ) {}

  ngOnInit() {
    this.users = this.userService.users;
    this.userSubscribe = this.userService.userObserver.subscribe(
      users => {
        console.log("table", users);
        this.users = users;
      },
      err => {
        console.log("table", err);
        this.users = [];
      }
    );
  }

  ngOnDestroy(): void {
      this.userSubscribe.unsubscribe();
  }

  onChangeActive(user: User) {
    this.userService.changeStatus(user);
  }

  onEditUser(user: User) {
    this.userService.lastEditedUser = user;
    this.urlService.jumpTo("/user-manager");
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user)
        .then(
            (message: string) => {
                console.info(message);
            }
        );
  }
}
