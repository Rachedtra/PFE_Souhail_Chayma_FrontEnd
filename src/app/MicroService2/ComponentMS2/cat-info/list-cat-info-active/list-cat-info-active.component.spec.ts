import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCatInfoActiveComponent } from './list-cat-info-active.component';

describe('ListCatInfoActiveComponent', () => {
  let component: ListCatInfoActiveComponent;
  let fixture: ComponentFixture<ListCatInfoActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCatInfoActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCatInfoActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
