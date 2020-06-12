import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCommmentaireActiveComponent } from './list-commmentaire-active.component';

describe('ListCommmentaireActiveComponent', () => {
  let component: ListCommmentaireActiveComponent;
  let fixture: ComponentFixture<ListCommmentaireActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCommmentaireActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCommmentaireActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
