import { Component, OnInit, Input, OnDestroy, EventEmitter } from '@angular/core';

import { User } from '../model/User';
import { UserService } from '../user.service';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnDestroy {
  @Input('pageChange') pageChange: EventEmitter<any>;
  private currentLink: string = "/";

  users = [];

  constructor(
      private userService: UserService,
      private urlService: UrlService) {}

  ngOnInit() {
     this.urlService.urlChanged.subscribe(
      (e) => {
        this.currentLink = e.url;
      }
    );

    this.currentLink = this.urlService.currentUrl;

    this.users = this.userService.getAll();

    console.log( this.userService.getOne(1) );
  }

  getActiveUsers() {
    let actives = [];
    for (let user of this.users) {
      if (user.active) {
        actives.push(user);
      }
    }
    return actives;
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

  ngOnDestroy() {
    //
  }

}
