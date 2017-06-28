import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { User } from '../../model/User';
import { UserService } from '../../user.service';
import { UrlService } from '../../url.service';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.css']
})
export class UserManagerComponent implements OnInit, OnDestroy {
  @Output() newUser: EventEmitter<any> = new EventEmitter();
  @Output() isEdit: boolean = false;
  @Output() lastUser: User = null;

  constructor(private userService: UserService, private urlService: UrlService) { }

  ngOnInit() {
      this.lastUser = this.userService.getLastEditedUser();
      if (this.lastUser !== null) {
          this.userService.lastEditedUser = null;
          this.isEdit = true;
      } else {
          this.isEdit = false;
      }
  }

  submitForm(form) {
      if (!form.valid) {
          return false;
      }

      let values = form.value;

      let user = new User(1, values.lastName, values.firstName, values.email,
        values.phone, "", true);

      this.userService.pushOne(user);
  }

  checkError(form, control) {
      if (!control) {
          return false;
      }

      if (control.pristine && !form.submitted) {
          return false;
      }

      if (!control.errors) {
          return false;
      }

      if (control.errors === null) {
        return false;
      }

      return true;
  }

  ngOnDestroy() {
      // this.urlService.urlChanged.unsubscribe();
  }

}
