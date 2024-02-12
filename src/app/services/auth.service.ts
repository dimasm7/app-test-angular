import { Injectable } from '@angular/core';
import { ILogin } from '../shared/interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userLogin:ILogin = {
    username: 'user',
    password: 'password123'
  }
  constructor() { }

  isLoggedIn(): boolean {
    const auth = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
    return !!auth;
  }
  login(dataLogin:ILogin){
    if (this.validateLogin(dataLogin)) {
      typeof window !== 'undefined' ? localStorage.clear() : null;
      typeof window !== 'undefined' ? localStorage.setItem('authToken', this.generateToken(48)) : null;
      return true;
    } else {
      return false;
    }
  }
  logout(){
    typeof window !== 'undefined' ? localStorage.removeItem('authToken') : null;
    typeof window !== 'undefined' ? localStorage.clear() : null;
    return true;
  }

  validateLogin(data:ILogin){
    if(data.username == this.userLogin.username && data.password == this.userLogin.password) return true;

    return false;
  }

  generateToken(length: number): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
