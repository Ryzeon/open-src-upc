import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesGridComponent } from './jokes-grid.component';

describe('JokesGridComponent', () => {
  let component: JokesGridComponent;
  let fixture: ComponentFixture<JokesGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JokesGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JokesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
