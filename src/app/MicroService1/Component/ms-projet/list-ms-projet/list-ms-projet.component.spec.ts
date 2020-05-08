import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMsProjetComponent } from './list-ms-projet.component';

describe('ListMsProjetComponent', () => {
  let component: ListMsProjetComponent;
  let fixture: ComponentFixture<ListMsProjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMsProjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMsProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
