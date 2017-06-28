import { Injectable, Output } from '@angular/core';
import { User } from './model/User';

@Injectable()
export class UserService {

  users: Array<User> = [];
  lastEditedUser: User = null;

  constructor() {
      let user1 = new User(1, 'Nagy', 'Ádám', 'na@gmail.com', '621651651', 'Józsi');
      let user2 = new User(2, 'Kiss', 'Bertold', 'kb@gmail.com', '621651651', 'Pisti', true);
      let user3 = new User(3, 'Piros', 'Rozália', 'pr@gmail.com', '621651651');
      this.users.push(user1);
      this.users.push(user2);
      this.users.push(user3);
  }

  getAll() {
      return this.users;
  }

  getUserIndex(id) {
      let index = null;
      for (let i = 0; i < this.users.length; i++) {
          if (this.users[i].id == id) {
              index = i;
          }
      }

      return index;
  }

  getLastEditedUser() {
      return this.lastEditedUser;
  }

  getOne(id: Number) {
      let index = this.getUserIndex(id);
      if (index === null) {
          return index;
      }

      return this.users[index];
  }

  getTopID() {
      if (this.users.length < 1) {
          return 1;
      }

      let topID = this.users[0].id;
      for (let user of this.users) {
          if (user.id > topID) {
              topID = user.id;
          }
      }

      return topID;
  }

  pushOne(user: User) {
      user.id = this.getTopID() + 1;
      this.users.push(user);

      console.log(this.users);
  }

  changeStatus(user: User) {
      let index = this.getUserIndex(user.id);
      if (index !== null) {
          this.users[index].active = !this.users[index].active;
      }
  }

  editUser(user: User) {
      let index = this.getUserIndex(user.id);
      if (index !== null) {
          for (let k in user) {
              this.users[index][k] = user[k];
          }
      }
  }

  deleteUser(user: User) {
      let index = this.getUserIndex(user.id);
      this.users.splice(index, 1);
  }

}
