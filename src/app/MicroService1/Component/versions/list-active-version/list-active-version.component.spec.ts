import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActiveVersionComponent } from './list-active-version.component';

describe('ListActiveVersionComponent', () => {
  let component: ListActiveVersionComponent;
  let fixture: ComponentFixture<ListActiveVersionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListActiveVersionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListActiveVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
