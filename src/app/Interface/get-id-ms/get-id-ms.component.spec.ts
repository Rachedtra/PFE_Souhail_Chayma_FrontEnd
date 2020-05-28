import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetIdMsComponent } from './get-id-ms.component';

describe('GetIdMsComponent', () => {
  let component: GetIdMsComponent;
  let fixture: ComponentFixture<GetIdMsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetIdMsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetIdMsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
