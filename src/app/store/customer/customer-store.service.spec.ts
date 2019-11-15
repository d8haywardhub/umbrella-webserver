import { TestBed } from '@angular/core/testing';

import { CustomerStoreService } from './customer-store.service';

describe('CustomerStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerStoreService = TestBed.get(CustomerStoreService);
    expect(service).toBeTruthy();
  });
});
