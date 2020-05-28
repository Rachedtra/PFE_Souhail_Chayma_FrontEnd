import { TestBed } from '@angular/core/testing';

import { DomaineProjetService } from './domaine-projet.service';

describe('DomaineProjetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DomaineProjetService = TestBed.get(DomaineProjetService);
    expect(service).toBeTruthy();
  });
});
