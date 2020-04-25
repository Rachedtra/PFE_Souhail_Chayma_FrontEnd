import { TestBed } from '@angular/core/testing';

import { DemandeInfoService } from './demande-info.service';

describe('DemandeInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemandeInfoService = TestBed.get(DemandeInfoService);
    expect(service).toBeTruthy();
  });
});
