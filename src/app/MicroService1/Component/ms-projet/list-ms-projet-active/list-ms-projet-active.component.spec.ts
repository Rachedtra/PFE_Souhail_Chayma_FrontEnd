import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMsProjetActiveComponent } from './list-ms-projet-active.component';

describe('ListMsProjetActiveComponent', () => {
  let component: ListMsProjetActiveComponent;
  let fixture: ComponentFixture<ListMsProjetActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMsProjetActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMsProjetActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
