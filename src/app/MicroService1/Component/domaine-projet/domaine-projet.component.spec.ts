import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomaineProjetComponent } from './domaine-projet.component';

describe('DomaineProjetComponent', () => {
  let component: DomaineProjetComponent;
  let fixture: ComponentFixture<DomaineProjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomaineProjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomaineProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
