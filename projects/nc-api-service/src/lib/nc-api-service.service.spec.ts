import { TestBed } from '@angular/core/testing';

import { NcApiServiceService } from './nc-api-service.service';

describe('NcApiServiceService', () => {
  let service: NcApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NcApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
