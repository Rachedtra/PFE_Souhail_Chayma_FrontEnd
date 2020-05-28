import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeInfoComponent } from './demande-info.component';

describe('DemandeInfoComponent', () => {
  let component: DemandeInfoComponent;
  let fixture: ComponentFixture<DemandeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
