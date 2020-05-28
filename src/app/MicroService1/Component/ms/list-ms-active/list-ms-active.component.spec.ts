import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMsActiveComponent } from './list-ms-active.component';

describe('ListMsActiveComponent', () => {
  let component: ListMsActiveComponent;
  let fixture: ComponentFixture<ListMsActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMsActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMsActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
