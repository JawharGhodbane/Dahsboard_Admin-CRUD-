import { TestBed } from '@angular/core/testing';

import { UnivService } from './univ.service';

describe('UnivService', () => {
  let service: UnivService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnivService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
