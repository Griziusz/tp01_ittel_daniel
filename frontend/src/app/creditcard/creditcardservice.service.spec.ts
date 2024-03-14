import { TestBed } from '@angular/core/testing';

import { CreditcardserviceService } from './creditcardservice.service';

describe('CreditcardserviceService', () => {
  let service: CreditcardserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditcardserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
