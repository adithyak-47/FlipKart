import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { ApiService } from 'src/app/service/api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let localStorageService: LocalStorageService;
  let apiService: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPageComponent],
      imports :[ReactiveFormsModule, RouterTestingModule, HttpClientModule],
      providers: [LocalStorageService, ApiService]
    });

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    localStorageService = TestBed.inject(LocalStorageService);
    apiService = TestBed.inject(ApiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form and validators', () => {
    component.ngOnInit();
    expect(component.loginForm.get('email')).toBeTruthy();
    expect(component.loginForm.get('password')).toBeTruthy();
  });

  it('should successfully log in.', () => {
    spyOn(localStorageService, 'getToken').and.returnValue('dummyToken');
    
    const data = {
      username: 'tom@carestack.com',
      password: 'tom123@cs'
    }
    component.loginForm.patchValue(data);
    component.onLogin();
    expect(component.error).toBeFalsy();
  });

  it('should validate email format', () => {
    component.ngOnInit();
    const email = component.loginForm.get('email');

    email?.setValue('tom@carestack.com');
    expect(email?.valid).toBeTruthy();


    email?.setValue('test@test.com');
    expect(email?.hasError('invalidEmail')).toBeTruthy();
  })

  
});
