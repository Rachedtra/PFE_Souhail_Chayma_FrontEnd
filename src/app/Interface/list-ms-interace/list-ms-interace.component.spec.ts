import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMsInteraceComponent } from './list-ms-interace.component';

describe('ListMsInteraceComponent', () => {
  let component: ListMsInteraceComponent;
  let fixture: ComponentFixture<ListMsInteraceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMsInteraceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMsInteraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
