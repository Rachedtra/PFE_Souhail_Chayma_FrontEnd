import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionLanguageComponent } from './version-language.component';

describe('VersionLanguageComponent', () => {
  let component: VersionLanguageComponent;
  let fixture: ComponentFixture<VersionLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
