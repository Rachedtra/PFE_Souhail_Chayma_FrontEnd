import { TestBed } from '@angular/core/testing';

import { MicroServiceService } from './micro-service.service';

describe('MicroServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MicroServiceService = TestBed.get(MicroServiceService);
    expect(service).toBeTruthy();
  });
});
