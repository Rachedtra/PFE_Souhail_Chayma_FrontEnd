import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCommDemandeInfoeActiveComponent } from './list-comm-demande-infoe-active.component';

describe('ListCommDemandeInfoeActiveComponent', () => {
  let component: ListCommDemandeInfoeActiveComponent;
  let fixture: ComponentFixture<ListCommDemandeInfoeActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCommDemandeInfoeActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCommDemandeInfoeActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
