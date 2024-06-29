import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTruckRegisterComponentComponent } from './new-truck-register-component.component';

describe('NewTruckRegisterComponentComponent', () => {
  let component: NewTruckRegisterComponentComponent;
  let fixture: ComponentFixture<NewTruckRegisterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewTruckRegisterComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewTruckRegisterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
