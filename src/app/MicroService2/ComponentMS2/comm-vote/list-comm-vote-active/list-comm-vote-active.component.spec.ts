import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCommVoteActiveComponent } from './list-comm-vote-active.component';

describe('ListCommVoteActiveComponent', () => {
  let component: ListCommVoteActiveComponent;
  let fixture: ComponentFixture<ListCommVoteActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCommVoteActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCommVoteActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
