import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LisMethodeActiveComponent } from './lis-methode-active.component';

describe('LisMethodeActiveComponent', () => {
  let component: LisMethodeActiveComponent;
  let fixture: ComponentFixture<LisMethodeActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LisMethodeActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LisMethodeActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
