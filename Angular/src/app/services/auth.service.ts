import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  authUser(user: any) {
    let userArray = [];
    if (localStorage.getItem('Users'))
      userArray = JSON.parse(localStorage.getItem('Users') as string);
      return userArray.find((p: { email: any; password: any; }) => p.email === user.email && p.password === user.password)
  }
}
