import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommDemandeInfoComponent } from './comm-demande-info.component';

describe('CommDemandeInfoComponent', () => {
  let component: CommDemandeInfoComponent;
  let fixture: ComponentFixture<CommDemandeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommDemandeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommDemandeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
