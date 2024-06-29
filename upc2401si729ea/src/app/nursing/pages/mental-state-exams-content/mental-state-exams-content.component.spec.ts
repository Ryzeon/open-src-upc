import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentalStateExamsContentComponent } from './mental-state-exams-content.component';

describe('MentalStateExamsContentComponent', () => {
  let component: MentalStateExamsContentComponent;
  let fixture: ComponentFixture<MentalStateExamsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MentalStateExamsContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MentalStateExamsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
