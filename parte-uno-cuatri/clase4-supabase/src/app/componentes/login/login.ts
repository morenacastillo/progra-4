import { Component, signal } from '@angular/core';
import { form, FormField, required, email } from '@angular/forms/signals';
import { RouterLink, Router } from '@angular/router';
import { LoginData } from '../../modelos/login-data';
import { Auth } from '../../services/auth';

@Component({
  imports: [FormField, RouterLink],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {

  loginModel = signal<LoginData>({
    email: '',
    password: ''
  });

  loginForm = form(this.loginModel, (schemaPath) => {
    required(schemaPath.email, {message: 'email is required'});
    email(schemaPath.email, {message: 'enter a valid address'});
    required(schemaPath.password, {message: 'password is required'});
    });

  constructor(private auth: Auth, private router: Router) {}

  async onSubmit(event: Event) {
    event.preventDefault()

    const creedenciales= this.loginModel();
    console.log('loggin in with:', creedenciales)
    const result = await this.auth.signIn(creedenciales.email, creedenciales.password)

    if (result.error) {
      console.error('login failed:', result.error)
      return
    } 
    console.log('login succesful:', result.data)
    this.router.navigate(['/cosas']);
  }
}
