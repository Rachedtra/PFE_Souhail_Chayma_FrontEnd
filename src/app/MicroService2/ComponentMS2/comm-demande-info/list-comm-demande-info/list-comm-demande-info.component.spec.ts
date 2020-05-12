import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCommDemandeInfoComponent } from './list-comm-demande-info.component';

describe('ListCommDemandeInfoComponent', () => {
  let component: ListCommDemandeInfoComponent;
  let fixture: ComponentFixture<ListCommDemandeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCommDemandeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCommDemandeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
