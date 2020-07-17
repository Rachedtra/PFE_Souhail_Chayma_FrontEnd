import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCategorieActiveComponent } from './list-categorie-active.component';

describe('ListCategorieActiveComponent', () => {
  let component: ListCategorieActiveComponent;
  let fixture: ComponentFixture<ListCategorieActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCategorieActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCategorieActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
