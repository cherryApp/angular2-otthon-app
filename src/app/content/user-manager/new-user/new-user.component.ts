import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../user.service';
import { User } from '../../../model/User';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
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

}
