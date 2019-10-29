import { Injectable } from '@angular/core';
import { User } from '../shared-objects/user-objects';

@Injectable({
  providedIn: 'root'
})
export class UserManagmentService {
  user: User = new User();
  constructor() { }
  isUserLogged(): boolean {
    return (this.user && this.user.name) ? true : false;
  }
  setUserName(name: string) {
    this.user.name = name;
  }
  getUserName(): string {
    return this.user.name;
  }
  getUser() {
    return this.user;
  }
}
