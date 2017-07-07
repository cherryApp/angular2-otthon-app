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
  editedUser: User = new User();
  constructor(private userService: UserService) { }

  ngOnInit() {
      this.userService.getOne(this.user.id)
          .then( (user: User) => {
              this.editedUser = user;
          });
  }

  submitForm() {
      console.log(this.editedUser);

      this.userService.editUser(this.editedUser)
          .then(
              (message: string) => {
                  console.info(message);
              }
          );
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
