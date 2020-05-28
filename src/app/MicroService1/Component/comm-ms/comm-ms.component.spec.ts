import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommMsComponent } from './comm-ms.component';

describe('CommMsComponent', () => {
  let component: CommMsComponent;
  let fixture: ComponentFixture<CommMsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommMsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommMsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
