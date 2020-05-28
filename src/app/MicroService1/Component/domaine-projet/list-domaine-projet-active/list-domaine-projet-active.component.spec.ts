import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDomaineProjetActiveComponent } from './list-domaine-projet-active.component';

describe('ListDomaineProjetActiveComponent', () => {
  let component: ListDomaineProjetActiveComponent;
  let fixture: ComponentFixture<ListDomaineProjetActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDomaineProjetActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDomaineProjetActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
