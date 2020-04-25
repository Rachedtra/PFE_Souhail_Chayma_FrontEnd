import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSousCategorieComponent } from './list-sous-categorie.component';

describe('ListSousCategorieComponent', () => {
  let component: ListSousCategorieComponent;
  let fixture: ComponentFixture<ListSousCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSousCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSousCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
