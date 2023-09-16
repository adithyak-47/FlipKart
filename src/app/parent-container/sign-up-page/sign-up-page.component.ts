import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { IUserDetails } from '../IUserDetails';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {

  public form!: IUserDetails
  public error: boolean = false;
  public passwordsDontMatchError: boolean = false
  public signUpForm!: FormGroup<{
    name: FormControl<any>,
    email: FormControl<any>,
    password: FormControl<any>,
    confirmpassword: FormControl<any>
  }>


  constructor(private readonly router: Router, private readonly userAuth: LocalStorageService, private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.form = {
      name: '',
      email: '',
      password: '',
      confirmpassword: '',
    }

    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, this.emailValidator()])],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required]
    })
  }

  public onSignUp() {
    if(this.signUpForm.valid)
    {
      if (this.signUpForm.controls['password'].value === this.signUpForm.controls['confirmpassword'].value && !this.signUpForm.controls['email'].hasError('invalidEmail')) {

        this.form = {
          name: this.signUpForm.controls['name'].value,
          email: this.signUpForm.controls['email'].value,
          password: this.signUpForm.controls['password'].value,
          confirmpassword: this.signUpForm.controls['confirmpassword'].value
        }
        console.log(this.form)
        this.userAuth.setUserDetails(this.form)
        this.router.navigate(['login-page'])
    }
    else {
      this.passwordsDontMatchError = true
      }
    }
    else{
      this.error = true;
    }
    
  }

    private emailValidator(): ValidatorFn {
      return (control: AbstractControl): {[key: string]: boolean } | null => {
        if (!control.value) {
          return null;
        }
        return control.value.includes('@carestack.com') ? null : { invalidEmail: true };
      }
    }
  }
  
