import { TestBed } from '@angular/core/testing';

import { ExaminerApiService } from './examiner-api.service';

describe('ExaminerApiService', () => {
  let service: ExaminerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExaminerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
