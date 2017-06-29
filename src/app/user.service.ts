import { Injectable, Output } from '@angular/core';
import { Http, Response } from '@angular/http';

import { User } from './model/User';
import { ConfigService } from './config.service';

@Injectable()
export class UserService {

  users: Array<User> = [];
  lastEditedUser: User = null;
  usersGetted: boolean = false;

  constructor(private config: ConfigService, private http: Http) {
      // this.getUsersFromHttp();
  }

  getUsersFromHttp() {
      return new Promise( (resolve, reject) => {
          if (this.usersGetted) {
              return resolve(this.users);
          }

          this.http.get(this.config.get('usersApi'))
              .subscribe(
                  (response: Response) => {
                      this.usersGetted = true;
                      this.users = this.jsonToUser(response.json());
                      resolve(this.users);
                  },
                  (err) => {
                      reject(err);
                  }
              );
      });
  }

  jsonToUser(userArray): User[] {
      let users: Array<User> = [];
      for (let user of userArray) {
          let newUser = new User();
          newUser.formObject(user);
          users.push(newUser);
      }

      return users;
  }

  getAll(): Promise<any> {
      return this.getUsersFromHttp();
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
