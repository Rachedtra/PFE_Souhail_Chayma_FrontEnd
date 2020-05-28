import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsProjetComponent } from './ms-projet.component';

describe('MsProjetComponent', () => {
  let component: MsProjetComponent;
  let fixture: ComponentFixture<MsProjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsProjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
