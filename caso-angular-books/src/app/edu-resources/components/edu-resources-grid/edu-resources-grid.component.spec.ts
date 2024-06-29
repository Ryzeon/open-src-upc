import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduResourcesGridComponent } from './edu-resources-grid.component';

describe('EduResourcesGridComponent', () => {
  let component: EduResourcesGridComponent;
  let fixture: ComponentFixture<EduResourcesGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EduResourcesGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EduResourcesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
