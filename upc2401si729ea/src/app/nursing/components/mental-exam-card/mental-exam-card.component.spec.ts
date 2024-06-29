import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentalExamCardComponent } from './mental-exam-card.component';

describe('MentalExamCardComponent', () => {
  let component: MentalExamCardComponent;
  let fixture: ComponentFixture<MentalExamCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MentalExamCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MentalExamCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
