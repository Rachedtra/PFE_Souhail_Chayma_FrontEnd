import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMsComponent } from './list-ms.component';

describe('ListMsComponent', () => {
  let component: ListMsComponent;
  let fixture: ComponentFixture<ListMsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
