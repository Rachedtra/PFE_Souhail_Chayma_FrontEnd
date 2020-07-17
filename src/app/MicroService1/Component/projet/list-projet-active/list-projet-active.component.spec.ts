import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProjetActiveComponent } from './list-projet-active.component';

describe('ListProjetActiveComponent', () => {
  let component: ListProjetActiveComponent;
  let fixture: ComponentFixture<ListProjetActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProjetActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProjetActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
