import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../user.service';
import { User } from '../../../model/User';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.css']
})
export class UserEditorComponent implements OnInit {
  @Input() user: User;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  submitForm(form) {
      console.log(this.user);

      this.userService.editUser(this.user);
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
