import { TestBed } from '@angular/core/testing';

import { HandelblogsService } from '../handelblogs.service';

describe('HandelblogsService', () => {
  let service: HandelblogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandelblogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
