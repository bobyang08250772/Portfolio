import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProjectsMobileComponent } from './my-projects-mobile.component';

describe('MyProjectsMobileComponent', () => {
  let component: MyProjectsMobileComponent;
  let fixture: ComponentFixture<MyProjectsMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyProjectsMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyProjectsMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
