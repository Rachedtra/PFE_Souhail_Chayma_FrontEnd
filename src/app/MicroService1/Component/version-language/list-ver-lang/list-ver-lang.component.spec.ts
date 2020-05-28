import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVerLangComponent } from './list-ver-lang.component';

describe('ListVerLangComponent', () => {
  let component: ListVerLangComponent;
  let fixture: ComponentFixture<ListVerLangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVerLangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVerLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
