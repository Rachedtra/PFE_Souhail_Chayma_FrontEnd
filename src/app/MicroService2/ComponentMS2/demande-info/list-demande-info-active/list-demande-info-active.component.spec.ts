import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDemandeInfoActiveComponent } from './list-demande-info-active.component';

describe('ListDemandeInfoActiveComponent', () => {
  let component: ListDemandeInfoActiveComponent;
  let fixture: ComponentFixture<ListDemandeInfoActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDemandeInfoActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDemandeInfoActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
