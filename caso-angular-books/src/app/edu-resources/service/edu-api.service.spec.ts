import { TestBed } from '@angular/core/testing';

import { EduApiService } from './edu-api.service';

describe('EduApiService', () => {
  let service: EduApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EduApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
