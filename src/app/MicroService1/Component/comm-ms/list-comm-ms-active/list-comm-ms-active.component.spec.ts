import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCommMsActiveComponent } from './list-comm-ms-active.component';

describe('ListCommMsActiveComponent', () => {
  let component: ListCommMsActiveComponent;
  let fixture: ComponentFixture<ListCommMsActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCommMsActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCommMsActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
