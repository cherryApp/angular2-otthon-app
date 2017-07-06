import { Component, OnInit, Input, OnDestroy, EventEmitter, Output } from '@angular/core';

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
  @Output() usersCount: Number = 0;
  @Output() roomsCount: Number = 12;
  @Output() staffCount: Number = 30;
  @Output() currentStaffCount: Number = 7;
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

    this.userService.userObserver
        .subscribe(
            (users) => {
                console.log("content", users);
                this.usersCount = users.length;
            }
        )
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

  ngOnDestroy() {
    //
  }

}
