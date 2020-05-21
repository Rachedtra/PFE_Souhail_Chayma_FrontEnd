import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetIdInfoComponent } from './get-id-info.component';

describe('GetIdInfoComponent', () => {
  let component: GetIdInfoComponent;
  let fixture: ComponentFixture<GetIdInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetIdInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetIdInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
