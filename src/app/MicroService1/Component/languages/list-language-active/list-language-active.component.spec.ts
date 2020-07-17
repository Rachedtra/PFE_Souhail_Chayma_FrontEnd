import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLanguageActiveComponent } from './list-language-active.component';

describe('ListLanguageActiveComponent', () => {
  let component: ListLanguageActiveComponent;
  let fixture: ComponentFixture<ListLanguageActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLanguageActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLanguageActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
