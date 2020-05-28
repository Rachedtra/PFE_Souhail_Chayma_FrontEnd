import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVerLangActiveComponent } from './list-ver-lang-active.component';

describe('ListVerLangActiveComponent', () => {
  let component: ListVerLangActiveComponent;
  let fixture: ComponentFixture<ListVerLangActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVerLangActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVerLangActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
