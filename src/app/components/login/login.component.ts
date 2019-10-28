import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../shared-objects/user-objects';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  user: User = new User();
  constructor() { }

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
      ])
    });
  }

  login() {
    if (this.userForm.valid) {
      console.log("aa");
    } else {
      console.log("bb");
    }
  }
}
