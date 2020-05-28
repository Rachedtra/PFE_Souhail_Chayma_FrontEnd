import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMethodeComponent } from './list-methode.component';

describe('ListMethodeComponent', () => {
  let component: ListMethodeComponent;
  let fixture: ComponentFixture<ListMethodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMethodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMethodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
