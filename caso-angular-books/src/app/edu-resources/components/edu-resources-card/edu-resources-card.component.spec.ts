import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduResourcesCardComponent } from './edu-resources-card.component';

describe('EduResourcesCardComponent', () => {
  let component: EduResourcesCardComponent;
  let fixture: ComponentFixture<EduResourcesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EduResourcesCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EduResourcesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
