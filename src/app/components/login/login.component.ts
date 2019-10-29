import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../shared-objects/user-objects';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserManagmentService } from '../../services/user-managment.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  user: User = new User();
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private userManage: UserManagmentService
  ) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
      ])
    });
  }

  login() {
    if (this.userForm.valid) {
      const name = this.userForm.getRawValue().name;
      console.log(name);
      this.userManage.setUserName(name);
      this.router.navigate(['books']);
    } else {
      this.toastr.error('Must have a user name');
    }
  }
}
