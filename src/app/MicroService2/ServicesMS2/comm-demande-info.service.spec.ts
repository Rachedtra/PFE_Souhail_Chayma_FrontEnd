import { TestBed } from '@angular/core/testing';

import { CommDemandeInfoService } from './comm-demande-info.service';

describe('CommDemandeInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommDemandeInfoService = TestBed.get(CommDemandeInfoService);
    expect(service).toBeTruthy();
  });
});
