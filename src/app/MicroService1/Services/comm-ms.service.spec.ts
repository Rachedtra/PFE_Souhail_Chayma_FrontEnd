import { TestBed } from '@angular/core/testing';

import { CommMsService } from './comm-ms.service';

describe('CommMsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommMsService = TestBed.get(CommMsService);
    expect(service).toBeTruthy();
  });
});
