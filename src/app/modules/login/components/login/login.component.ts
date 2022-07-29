import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any
  submitted: boolean = false;
  login: boolean = true;
  register: boolean = false;
  success: boolean = true;
  message: any;
  constructor(private loginService: LoginService,
    public router: Router) { }
  get emailValue() { return this.loginForm.get('email'); }
  get passwordValue() { return this.loginForm.get('password'); }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email

      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
      ])
    });
  }
  onChangePassword(event: string) {
    this.loginForm.controls.password.setValue(event)
  }
  onChangeEmail(event: string) {
    this.loginForm.controls.email.setValue(event)
  }
  onClickRegister() {
    this.login = false;
    this.register = true;
  }
  lonClickLogin() {
    this.login = true;
    this.register = false;
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      if (this.login) {
        this.loginService.login(this.loginForm.value)
          .subscribe(
            (response: any) => {
              if (response.status === 'success') {
                this.success = true;
                this.message = response.message;
                console.log(response.user)
                localStorage.setItem('userData', JSON.stringify(response.user));
                this.router.navigate(['/'])
              } else
                this.success = false;
              this.message = response.message ? response.message : response.error.message
            }
          )
      } else {
        this.loginService.register(this.loginForm.value)
          .subscribe(
            (response: any) => {
              if (response.status === 'success') {
                this.success = true;
                this.message = response.message
                this.login = true;
                this.register = false;
              } else {
                this.success = false;
                this.message = response.message ? response.message : response.error.message
                console.log(this.message)
              }
            }
          )
      }

    }
  }

}
