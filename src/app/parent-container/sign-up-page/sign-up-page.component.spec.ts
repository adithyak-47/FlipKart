import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpPageComponent } from './sign-up-page.component';

describe('SignUpPageComponent', () => {
  let component: SignUpPageComponent;
  let fixture: ComponentFixture<SignUpPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpPageComponent]
    });
    fixture = TestBed.createComponent(SignUpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialise form correctly', () => {
    component.ngOnInit();
    expect(component.signUpForm.value).toEqual({
      name: '',
      email: '',
      password: '',
      confirmpassword: '',
    });
  });
  it('should not show passwordsDontMatchError initially', () => {
    expect(component.passwordsDontMatchError).toBeFalse();
  });

  it('should not show error initially', () => {
    expect(component.error).toBeFalse();
  });
});
