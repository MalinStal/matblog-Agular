import { TestBed } from '@angular/core/testing';

import { CreatepostService } from './pages/createpost/testformcreate/createpost.service';

describe('CreatepostService', () => {
  let service: CreatepostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatepostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
