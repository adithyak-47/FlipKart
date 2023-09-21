import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUserDetails } from '../IUserDetails';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { ApiService } from 'src/app/service/api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  public form!: Partial<IUserDetails>;
  public error: boolean = false;
  public loginForm!: FormGroup<{
    email: FormControl<any>,
    password: FormControl<any>
  }>

  public userToken!: string;
  public validated: boolean = false;

  constructor(private readonly router: Router, private readonly fb: FormBuilder, private readonly userAuth: LocalStorageService, private readonly api: ApiService) { }

  ngOnInit(): void {

    this.form = {
      email: '',
      password: ''
    }

    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, this.emailValidator()])],
      password: ['', Validators.required]
    })
  }

  public onSignUp() {
    this.router.navigate(['signup-page'])
  }

  public onLogin() {
    if (this.loginForm.valid && !this.loginForm.controls['email'].hasError('invalidEmail')) {
      this.form = {
        email: this.loginForm.controls['email'].value,
        password: this.loginForm.controls['password'].value
      }
      this.validateUser(this.form);
      // isUserValidated ? this.router.navigate(['']) : this.error = true;
      const userToken = this.userAuth.getToken();
      if(userToken != null) this.router.navigate([''])
      else this.error = true;
    }
  }

  public validateUser(passedUserData: Partial<IUserDetails>): void{
    const storedUserDetails = passedUserData
    this.api.validateUser(storedUserDetails).subscribe(
      (response) => {
        console.log(response);
        this.userAuth.setToken(response);
        },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    )
  }


  private emailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (!control.value) {
        return null;
      }
      return control.value.includes('@carestack.com') ? null : { invalidEmail: true };
    }
  }
}
