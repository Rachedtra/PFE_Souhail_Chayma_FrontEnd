import { TestBed } from '@angular/core/testing';

import { CatDemandeInfoService } from './cat-demande-info.service';

describe('CatDemandeInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatDemandeInfoService = TestBed.get(CatDemandeInfoService);
    expect(service).toBeTruthy();
  });
});
