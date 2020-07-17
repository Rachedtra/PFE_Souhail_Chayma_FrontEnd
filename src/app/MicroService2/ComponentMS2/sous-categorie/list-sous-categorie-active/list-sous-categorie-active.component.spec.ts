import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSousCategorieActiveComponent } from './list-sous-categorie-active.component';

describe('ListSousCategorieActiveComponent', () => {
  let component: ListSousCategorieActiveComponent;
  let fixture: ComponentFixture<ListSousCategorieActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSousCategorieActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSousCategorieActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
