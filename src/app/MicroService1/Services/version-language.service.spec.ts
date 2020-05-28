import { TestBed } from '@angular/core/testing';

import { VersionLanguageService } from './version-language.service';

describe('VersionLanguageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VersionLanguageService = TestBed.get(VersionLanguageService);
    expect(service).toBeTruthy();
  });
});
