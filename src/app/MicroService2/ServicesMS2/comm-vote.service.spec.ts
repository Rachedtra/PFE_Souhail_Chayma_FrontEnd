import { TestBed } from '@angular/core/testing';

import { CommVoteService } from './comm-vote.service';

describe('CommVoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommVoteService = TestBed.get(CommVoteService);
    expect(service).toBeTruthy();
  });
});
