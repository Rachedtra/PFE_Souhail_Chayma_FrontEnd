import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCatInfoComponent } from './list-cat-info.component';

describe('ListCatInfoComponent', () => {
  let component: ListCatInfoComponent;
  let fixture: ComponentFixture<ListCatInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCatInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCatInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
