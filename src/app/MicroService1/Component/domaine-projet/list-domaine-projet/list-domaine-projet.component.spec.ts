import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDomaineProjetComponent } from './list-domaine-projet.component';

describe('ListDomaineProjetComponent', () => {
  let component: ListDomaineProjetComponent;
  let fixture: ComponentFixture<ListDomaineProjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDomaineProjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDomaineProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
