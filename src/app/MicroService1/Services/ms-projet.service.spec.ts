import { TestBed } from '@angular/core/testing';

import { MsProjetService } from './ms-projet.service';

describe('MsProjetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MsProjetService = TestBed.get(MsProjetService);
    expect(service).toBeTruthy();
  });
});
