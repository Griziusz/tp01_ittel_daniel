import { TestBed } from '@angular/core/testing';

import { ListService } from './services/api.service';

describe('ApiService', () => {
  let service: ListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
