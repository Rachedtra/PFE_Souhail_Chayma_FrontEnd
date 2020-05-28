import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCommVoteComponent } from './list-comm-vote.component';

describe('ListCommVoteComponent', () => {
  let component: ListCommVoteComponent;
  let fixture: ComponentFixture<ListCommVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCommVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCommVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
