import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../../model/User';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.css']
})
export class UserManagerComponent implements OnInit {
  @Output() newUser: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  submitForm(form) {
      if (!form.valid) {
          return false;
      }

      let values = form.value;

      let user = new User(1, values.lastName, values.firstName, values.email,
        values.phone, "", true);

      this.newUser.emit(user);
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
