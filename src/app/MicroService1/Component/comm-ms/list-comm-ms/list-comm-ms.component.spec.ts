import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCommMsComponent } from './list-comm-ms.component';

describe('ListCommMsComponent', () => {
  let component: ListCommMsComponent;
  let fixture: ComponentFixture<ListCommMsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCommMsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCommMsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
