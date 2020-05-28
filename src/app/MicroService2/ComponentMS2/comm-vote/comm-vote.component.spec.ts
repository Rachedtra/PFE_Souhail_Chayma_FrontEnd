import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommVoteComponent } from './comm-vote.component';

describe('CommVoteComponent', () => {
  let component: CommVoteComponent;
  let fixture: ComponentFixture<CommVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
