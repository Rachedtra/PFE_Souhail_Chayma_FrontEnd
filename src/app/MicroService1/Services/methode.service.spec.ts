import { TestBed } from '@angular/core/testing';

import { MethodeService } from './methode.service';

describe('MethodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MethodeService = TestBed.get(MethodeService);
    expect(service).toBeTruthy();
  });
});
