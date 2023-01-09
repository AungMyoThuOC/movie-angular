import { TestBed } from '@angular/core/testing';

import { MvsApiSevService } from './mvs-api-sev.service';

describe('MvsApiSevService', () => {
  let service: MvsApiSevService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MvsApiSevService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
