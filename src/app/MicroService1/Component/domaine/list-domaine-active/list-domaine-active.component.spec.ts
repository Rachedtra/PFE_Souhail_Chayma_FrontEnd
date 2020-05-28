import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDomaineActiveComponent } from './list-domaine-active.component';

describe('ListDomaineActiveComponent', () => {
  let component: ListDomaineActiveComponent;
  let fixture: ComponentFixture<ListDomaineActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDomaineActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDomaineActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
