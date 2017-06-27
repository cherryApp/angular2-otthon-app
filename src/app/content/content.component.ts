import { Component, OnInit, Input, OnDestroy, EventEmitter } from '@angular/core';

import { User } from '../model/User';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnDestroy {
  @Input('pageChange') pageChange: EventEmitter<any>;
  private currentLink: string = "/";

  users = [];

  constructor() {
    console.log('constructed');
   }

  ngOnInit() {
    let user1 = new User(1, 'Nagy', 'Ádám', 'na@gmail.com', '621651651', 'Józsi');
    let user2 = new User(2, 'Kiss', 'Bertold', 'kb@gmail.com', '621651651', 'Pisti', true);
    let user3 = new User(3, 'Piros', 'Rozália', 'pr@gmail.com', '621651651');
    this.users.push(user1);
    this.users.push(user2);
    this.users.push(user3);

    this.pageChange.subscribe(
      (url) => {
        this.currentLink = url;
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

  onNewUser(user: User) {
      let lastID = this.users[this.users.length-1].id;
      user.id = lastID + 1;
      this.users.push(user);
  }

  ngOnDestroy() {
    //
  }

}
