import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckRegisterFormComponent } from './truck-register-form.component';

describe('TruckRegisterFormComponent', () => {
  let component: TruckRegisterFormComponent;
  let fixture: ComponentFixture<TruckRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TruckRegisterFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TruckRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
