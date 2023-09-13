import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentContainerComponent } from './parent-container.component';

describe('ParentContainerComponent', () => {
  let component: ParentContainerComponent;
  let fixture: ComponentFixture<ParentContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentContainerComponent]
    });
    fixture = TestBed.createComponent(ParentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
