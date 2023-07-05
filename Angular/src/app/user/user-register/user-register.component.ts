import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IUser } from 'src/app/model/IUser';
import { UserService } from 'src/app/services/user.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  user!: IUser;
  userSubmitted!: boolean;
  constructor(private fb: FormBuilder, private userService: UserService, private alertifyService: AlertifyService) {}

  ngOnInit() {
    // this.registrationForm = new FormGroup({
    //   userName: new FormControl(null, [Validators.required]),
    //   userEmail: new FormControl(null, [Validators.required, Validators.email]),
    //   userPassword: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    //   confirmPassword: new FormControl(null, [Validators.required]),
    //   mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    // }, this.passwordMatchingValidator);
    // let webSocket = new WebSocket(`wss://${window.location.href}`);
    // console.log(webSocket.readyState)
    this.createRegisterarionForm();
  }

  createRegisterarionForm() {
    this.registrationForm = this.fb.group(
      {
        userName: [null, [Validators.required]],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(8)]],
        confirmPassword: [null, [Validators.required]],
        mobile: [null, [Validators.required, Validators.minLength(10)]],
      },
      { validators: this.passwordMatchingValidator }
    );
  }

  onSubmit() {
    this.userSubmitted = true;
    if (this.registrationForm.valid) {
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.userSubmitted = false;
      this.alertifyService.success('Congrats, you are successfully register');
    }
    else{
      this.alertifyService.error('Kindly provide the required fields');
    }
  }

  userData(): IUser {
    return (this.user = {
      userName: this.userName.value,
      email: this.userEmail.value,
      password: this.userPassword.value,
      mobile: this.userMobile.value,
    });
  }

  passwordMatchingValidator(fc: AbstractControl): Validators | null {
    return fc.get('userPassword')?.value ===
      fc.get('userConfirmPassword')?.value
      ? null
      : { notmatched: true };
  }

  get userName() {
    return this.registrationForm.get('userName') as FormControl;
  }

  get userEmail() {
    return this.registrationForm.get('email') as FormControl;
  }

  get userPassword() {
    return this.registrationForm.get('password') as FormControl;
  }

  get userConfirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }

  get userMobile() {
    return this.registrationForm.get('mobile') as FormControl;
  }
}
