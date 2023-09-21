import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignUpPageComponent } from './sign-up-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpToHttpsService } from 'src/app/service/http-to-https.service';
import { Router } from '@angular/router';

describe('SignUpPageComponent', () => {
  let component: SignUpPageComponent;
  let fixture: ComponentFixture<SignUpPageComponent>;
  let localStorageService: LocalStorageService;
  let apiService: ApiService;
  let httpsService: HttpToHttpsService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpPageComponent],
      imports: [ReactiveFormsModule, HttpClientModule],
      providers: [ApiService, LocalStorageService, HttpToHttpsService]
    });
    fixture = TestBed.createComponent(SignUpPageComponent);
    localStorageService = TestBed.inject(LocalStorageService);
    apiService = TestBed.inject(ApiService);
    httpsService = TestBed.inject(HttpToHttpsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form correctly', () => {
    component.ngOnInit();
    expect(component.signUpForm.get('name')).toBeTruthy();
    expect(component.signUpForm.get('email')).toBeTruthy();
    expect(component.signUpForm.get('password')).toBeTruthy();
    expect(component.signUpForm.get('confirmpassword')).toBeTruthy();
  });

  it('should set passwordsDontMatchError to false if passwords match', ()=>{
    const formControls = component.signUpForm.controls;
    formControls.password.setValue('password');
    formControls.confirmpassword.setValue('password');
    component.onSignUp();
    expect(component.passwordsDontMatchError).toBeFalsy()    
  })

  it('should set error to true if the form is invalid', () => {
    const formControls = component.signUpForm.controls;
    formControls.name.setValue('John Doe');
    formControls.email.setValue('invalid_email');
    formControls.password.setValue('');
    formControls.confirmpassword.setValue('');
    component.onSignUp();
    expect(component.error).toBeTruthy();
  });

  it('should validate email format', () => {
    component.ngOnInit();
    const email = component.signUpForm.get('email');
    email?.setValue('johndoe@carestack.com');
    expect(email?.valid).toBeTruthy();
    email?.setValue('test@test.com');
    expect(email?.hasError('invalidEmail')).toBeTruthy();
  })

});
