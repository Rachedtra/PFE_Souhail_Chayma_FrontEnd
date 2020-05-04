import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsActiveComponent } from './ms-active.component';

describe('MsActiveComponent', () => {
  let component: MsActiveComponent;
  let fixture: ComponentFixture<MsActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
